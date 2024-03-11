---
sidebar_position: 13
---

# Sugerencias sobre Optimización de Rendimiento

## Principio de Funcionamiento
Diferente de las aplicaciones H5 tradicionales, la arquitectura de operación del Mini Programa se divide en dos partes: webview y worker. El webview es para renderizar, y el worker es para el almacenamiento de datos y la ejecución lógica del servicio.

1. La comunicación entre el webview y el worker es asíncrona. Esto significa que los datos no se renderizan inmediatamente cuando se llama a setData, y la transmisión asíncrona del worker al webview ocurre. 

2. Durante la transmisión, los datos se serializan como una cadena y se transfieren mediante evaluateJavascript. El tamaño de los datos afecta el rendimiento.

## Optimizando la Primera Pantalla

La primera pantalla puede ser definida de manera diferente. Aquí significa la primera renderización significativa del servicio. Por ejemplo: en relación a una página de lista, la primera pantalla significa los contenidos renderizados por primera vez en la lista.

### Controlando el Tamaño del Paquete de Recursos del Mini Program

Cuando el usuario accede al Mini Programa por primera vez, el cliente de la aplicación móvil descarga el paquete de recursos del Mini Programa desde el CDN, por lo que el tamaño del paquete de recursos afecta el rendimiento de inicio del Mini Programa.

**Sugerencias de optimización:**

- Eliminar los recursos de imagen inútiles, ya que todos los recursos de imagen se empaquetan de forma predeterminada.
- Controlar el tamaño de las imágenes y evitar el uso de imágenes grandes. Se recomienda cargar imágenes grandes a través de canales CDN.
- Limpiar códigos inútiles a tiempo.

### Anticipar la Solicitud de Datos a onLoad

- Al operar, el Mini Programa desencadena la función del ciclo de vida onLoad de la página, y luego transfiere los datos de la página inicial del worker al webview para la renderización inicial. 

- Cuando se completa la renderización inicial de la página, se envía una notificación del webview al worker y se desencadena la función del ciclo de vida onReady. Algunos Mini Programas envían solicitudes en onReady lo que causa un retraso en la renderización de la primera pantalla.

**Sugerencia de optimización:** 

Anticipar la solicitud de datos a onLoad.

### Controlar el Número de Nodos a Renderizar a la Vez en la Primera Pantalla

Después de que se devuelve la solicitud de servicio, generalmente se llama a setData para desencadenar la renderización de la página. El proceso de ejecución es el siguiente:

1. Los datos se envían del worker al webview.
2. El webview construye un DOM virtual según los datos transferidos, hace una comparación de diferencias con los datos anteriores (comenzando desde el nodo raíz) y comienza la renderización.

Debido a la serialización de datos en la comunicación del worker al webview, y luego la ejecución de evaluateJavascript en el webview, el rendimiento de renderización de la primera pantalla se ve afectado si los datos transmitidos una vez son demasiado grandes.

Además, si los nodos de construcción son demasiado numerosos o la jerarquía anidada es demasiado profunda en el webview, digamos, más de 100 elementos de lista para ser renderizados de una vez en la página de lista de algunos Mini Programas y cada elemento de lista contiene contenidos anidados, pero menos de 10 elementos para ser mostrados en toda la pantalla, la comparación diferente lleva mucho tiempo, se construyen un gran número de DOM de una vez en la primera pantalla y se compromete el rendimiento de renderización de la primera pantalla.

**Sugerencias de optimización:**

- La cantidad de datos de setData no debe ser demasiado grande; no transferir una lista demasiado larga de una vez.

- No construir demasiados nodos en la primera pantalla. El extremo del servicio puede solicitar una gran cantidad de datos de una vez. No ejecutar setData de una vez. Es posible ejecutar setData con datos parciales y esperar un tiempo (digamos, 400 ms, dependiendo del servicio específico) y luego llamar a $spliceData para transferir los datos restantes.

## Optimizar la Lógica de setData

Cualquier cambio de página desencadena setData. Al mismo tiempo, múltiples setData pueden desencadenar la renderización de la página. Las siguientes cuatro interfaces desencadenan la renderización de la página webview.
- **Page.prototype.setData:** Desencadena la comparación de diferencias de toda la página.
- **Page.prototype.$spliceData:** Optimiza la lista larga y evita transferir toda la lista de una vez y desencadenar la comparación de diferencias de toda la página.
- **Component.prototype.setData:** Inicia la comparación de diferencias desde el nodo de componente correspondiente.
- **Component.prototype.$spliceData:** Optimiza la lista larga y evita transferir toda la lista de una vez. Solo realiza la comparación de diferencias desde el nodo de componente correspondiente.

**Sugerencias de optimización:**

- Evitar desencadenar setData o $spliceData con frecuencia, ya sea a nivel de página o de componente. En los casos analizados, algunas páginas contienen lógica de cuenta regresiva pero la cuenta regresiva se activa con demasiada frecuencia (en microsegundos).
- Cuando sea necesario desencadenar la renderización con frecuencia, evitar usar setData o $spliceData a nivel de página. Este bloque puede encapsularse en un componente personalizado, y luego se pueden usar setData y $spliceData a nivel de componente para desencadenar la renderización del componente.
- Para la renderización de una lista de datos largos, usar $spliceData para agregar datos varias veces en lugar de transferir toda la lista.
- Para páginas complicadas, se recomienda encapsularlas en un componente personalizado para minimizar el setData a nivel de página.

## Caso de optimización

Se sugiere especificar la ruta para establecer los datos:

```js
this.setData({
  'array[0]': 1,
  'obj.x': 2,
});
```

No se sugiere el siguiente método (aunque se copie this.data, el atributo se cambia directamente):

```js
const array = this.data.array.concat();
array[0] = 1;
const obj = { ...this.data.obj };
obj.x = 2;
this.setData({ array, obj });
```

Incluso no se sugiere el cambio directo de this.data (violando el principio de datos inmutables):

```js
this.data.array[0] = 1;
this.data.obj.x = 2;
this.setData(this.data);
```

Usar $spliceData para listas largas

```js
this.$spliceData({ 'a.b': [1, 0, 5, 6] })
```

**Nota:**

A veces, cuando la lógica del servicio está encapsulada en un componente, solo es necesario llamar a `setData` dentro del componente cuando la interfaz de usuario del componente necesita volver a renderizarse. Sin embargo, en otras ocasiones, es necesario activar el nuevo renderizado del componente desde la página. Por ejemplo, se monitoriza el evento `onPageScroll` en la página y es necesario notificar al componente correspondiente que vuelva a renderizarse cuando se active el evento. Ahora la medida es la siguiente:

```js
// /pages/index/index.js
Page({
    onPageScroll(e) {
        if (this.xxcomponent) {
            this.xxcomponent.setData({
                scrollTop: e.scrollTop
            })
        }
    }
})
// /components/index/index.js
Component({
    didMount(){
        this.$page.xxcomponent = this;
    }
})
```

Es posible montar el componente en la página correspondiente en el didMount, de modo que la llamada de setData a nivel de componente en la página desencadene el nuevo renderizado del componente solamente.

## Usar el parámetro clave

La "clave" se puede usar en "for" para aumentar el rendimiento. Tenga en cuenta que la "clave" no se puede establecer en bloques.

Códigos de ejemplo:

```xml
<view a:for="{{array}}" key="{{item.id}}"></view>
<block a:for="{{array}}"><view key="{{item.id}}"></view></block>
```
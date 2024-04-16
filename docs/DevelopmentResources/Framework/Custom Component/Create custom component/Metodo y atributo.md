---
sidebar_position: 3
---

# Métodos y Atributos

## Métodos del Componente

El componente personalizado no solo puede representar datos estáticos, sino que también responder al evento de clics del usuario, para manejar y activar el componente personalizado para volver a renderizar. En los métodos, es posible definir cualquier método personalizado.

**Nota:**

A diferencia de la página, el componente personalizado debe definir el controlador de eventos en los métodos.

**Modificar componente axml:**

```xml
<!-- /components/counter/index.axml -->
<view>{{counter}}</view>
<button onTap="plusOne">+1</button>
```

**Manejar eventos en componentes js:**

```js
// /components/counter/index.js
Component({
  data: { counter: 0 },
  methods: {
    plusOne(e) {
      console.log(e);
      this.setData({ counter: this.data.counter + 1 });
    },
  },
});
```

Ahora la página muestra un botón adicional. Cada clic en él aumentará el número de página en 1.

## Props

El componente personalizado no está aislado del exterior. Por ahora, el ejemplo es un módulo independiente. Para hacer que interactúe con el exterior, el componente personalizado puede aceptar entrada externa. Después de que se haya realizado el procesamiento, puede notificar al exterior con "Hecho". Todo esto se puede implementar con props.

**Ejemplo:**

Nota:

  - Los props son los atributos transferidos desde el exterior. Es posible especificar un atributo predeterminado y no se puede modificar en el código interno del componente personalizado.
  - En el axml del componente personalizado, es posible hacer referencia al atributo props directamente.
  - Para el evento en el axml del componente personalizado, solo el método en los "métodos" del js del componente personalizado puede responder. Si es necesario llamar a la función transferida desde el componente principal, es posible llamarla a través de this.props en los métodos.

```js
// /components/counter/index.js
Component({
  data: { counter: 0 },
  props: {
    onCounterPlusOne: (data) => console.log(data),
    extra: 'extra predeterminado',
  },
  methods: {
    plusOne(e) {
      console.log(e);
      const counter = this.data.counter + 1;
      this.setData({ counter });
      this.props.onCounterPlusOne(counter); // La respuesta al evento en axml puede ser a través del método en "métodos" únicamente
    },
  },
});
```

Los códigos anteriores establecen atributos predeterminados para las props, y luego el controlador de eventos obtiene esos atributos a través de `this.props`.

```xml
// /components/counter/index.axml
<view>{{counter}}</view>
<view>extra: {{extra}}</view>
<button onTap="plusOne">+1</button>
```

Uso externo: no transferir props

```xml
// /pages/index/index.axml
<my-component />
```

Salida de la página:

```js
0
extra: extra predeterminado
+1
```

Ahora no se transfiere ningún parámetro, por lo que la página muestra el predeterminado configurado para los accesorios en el component.js.
**Uso externo: transferir accesorios**
**Note:**
Cuando se utiliza un componente personalizado externamente, si el parámetro de transferencia es una función, es necesario el sufijo "on"; de lo contrario, se procesará como una cadena.

```js
// /pages/index/index.js
Page({
  onCounterPlusOne(data) {
    console.log(data);
  }
});
```

```xml
// /pages/index/index.axml
<my-component extra="external extra" onCounterPlusOne="onCounterPlusOne" />
```

**Resultado de la página:**

```js
0  
extra: extra externo  
+1  
```

Aquí se transfiere un parámetro, por lo que la página muestra el valor extra transferido externamente "extra externo".

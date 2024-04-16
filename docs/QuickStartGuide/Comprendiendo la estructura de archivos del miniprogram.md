---
sidebar_position: 4
---

## Descripción general

Esta sección utiliza la demo del programa Todo como ejemplo para presentar la estructura de archivos del Mini Program y la función de cada tipo de archivo en el Mini Program.

### Estructura de directorios

Conozcamos la estructura general del directorio del Mini Program a partir de las siguientes notas.

```
assets          // Almacenar varios recursos estáticos, como imágenes
components      // Directorio de componentes personalizados del mini programa
  --add-button  // Aquí definimos un componente llamado Add-Button
pages           // Todas las páginas incluidas en el programa Mini se colocan en "páginas", una carpeta por página
  --add-todo    // Mini Program page
  --Todos       // Mini Program page
app.js          // Aquí se configura alguna lógica de servicio global para el programa mini, como el método global y las variables globales
app.acss        // Configuración de estilo global, aquí los estilos entran en vigencia en cada página
app.json        // Alguna información de configuración básica para las páginas de mini del programa, como la ruta de la página
```

### json

El archivo JSON se utiliza para configurar la configuración del Mini Program. Por ejemplo, el App.json incluye la configuración relacionada de todo el Mini Program.

```js title="/app.json"
{
  "pages": [
    "pages/todos/todos",
    "pages/add-todo/add-todo"
  ],
  "window": {
    "defaultTitle": "Todo App",
    "titleBarColor": "#323239"
  }
}
```

<ol>
  <li>
    El atributo de páginas es una matriz.Cada cadena en la matriz define la ruta de la página del Mini Program. En la Lista de demostración de TODO, dos directorios se configuran externamente.Se requiere agregar esta configuración de página después de agregar algunas páginas.
  </li>

  <li>
  La configuración predeterminada en la ventana define el título en la barra de navegación del Mini Program: "Todo App". El <code>TitleBarcolor</code> especifica el color de fondo de la barra de navegación como valor de color hexadecimal.
  </li>
</ol>

Para otras configuraciones del archivo App.json, [haga clic aquí] (/).

El archivo JSON mencionado anteriormente incluye las configuraciones JSON globales. Cada página o componente tiene una configuración JSON relacionada para especificar la dependencia del componente, etc. [haga clic aquí](/).


### axml
En general, el AXML puede considerarse como el HTML del Mini Program, que difiere del HTML en términos de:


<ol>
  <li>
   Diferentes etiquetas.Por ejemplo, Mini Program usa para reemplazar.
  </li>
   Los tipos de etiquetas compatibles con AXML son menos que HTML.
  <li>
   La etiqueta AXML tiene su propia sintaxis de análisis para realizar el juicio transversal, condicional y otras operaciones avanzadas. El HTML solo incluye etiquetas estáticas.
  </li>
</ol>


```xml
<view class="todo-item {{completed ? 'checked' : ''}}">
  {{number}}
</view>
```


En AXML, el formato como `` `{{}}` `` se usa para representar variables o ejecutar una operación simple.Por ejemplo, el "completado" anterior es una operación ternaria. Cuando el "completado" es verdadero, la clase se representa como "TODO-ITem revisado" o simplemente "TODO-item".


La variable `` `{{número}}` `` `muestra los resultados en consecuencia después de representar según la tarea.


### acss

El ACSS extiende la capacidad de CSS al tiempo que admite la mayoría de la sintaxis CSS. En contraste con CSS, las principales diferencias son:

<ol>
  <li>
    Cálculo de la unidad RPX de soporte
  </li>
  <li>
    Importar ACSS en otra ruta usando <code> @import </code>
  </li>
  <li>
    Para obtener más detalles, haga clic en [aquí](/).
  </li>
</ol>

<br/>

### js
El archivo JS se usa para describir la lógica del código.Cada página necesita un archivo JS para describir la lógica de la página actual.Los siguientes códigos se utilizan para la ilustración simplemente.


```js title="pages/todos/todo.js"
const app = getApp();
Page({
  data: {},
  onLoad() {},
  onTodoChanged(e) {}
});
```
La clase de página es el constructor de la página y debe escribirse durante el ciclo de vida de cada página.


#### data
> El objeto de datos se considera como el contexto de representación AXML. En pocas palabras, si los datos tienen un nombre con el atributo 'mini programa', el archivo AXML correspondiente puede usar el formulario `` `{{name}}` `` `leer 'mini programa'. Cuando el método SetData se usa para hacer un cambio en "datos", los datos en AXML cambian en tiempo real.

#### onLoad
> Cuando el usuario inicializa esta página por primera vez, se llama a esta función.

#### onTodoChanged (Función personalizada del usuario)
> Este es un método personalizado por el usuario.El usuario puede definir más funciones personalizadas para implementar más capacidades.


En los contenidos anteriores, hemos sabido sobre la función de cada tipo de archivo en el programa mini. A continuación, explicaremos la demostración de la aplicación TODO en detalle.



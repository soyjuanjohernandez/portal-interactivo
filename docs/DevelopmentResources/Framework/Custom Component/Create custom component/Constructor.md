---
sidebar_position: 2
---

# Constructor

## Parameter Description

<table>
  <thead>
    <tr>
      <th>Parámetro</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>Object</td>
      <td>No</td>
      <td>Estado interno del componente.</td>
    </tr>
    <tr>
      <td>props</td>
      <td>Object</td>
      <td>No</td>
      <td>Establece valores predeterminados para los datos entrantes.</td>
    </tr>
    <tr>
      <td>onInit</td>
      <td>Function</td>
      <td>No</td>
      <td>Función de ciclo de vida del componente, se activa en la creación del componente.</td>
    </tr>
    <tr>
      <td>deriveDataFromProps</td>
      <td>Function</td>
      <td>No</td>
      <td>Función de ciclo de vida del componente, se activa en la creación y actualización del componente.</td>
    </tr>
    <tr>
      <td>didMount</td>
      <td>Function</td>
      <td>No</td>
      <td>Función de ciclo de vida del componente, se activa al completarse la creación del componente.</td>
    </tr>
    <tr>
      <td>didUpdate</td>
      <td>Function</td>
      <td>No</td>
      <td>Función de ciclo de vida del componente, se activa al completarse la actualización del componente.</td>
    </tr>
    <tr>
      <td>didUnmount</td>
      <td>Function</td>
      <td>No</td>
      <td>Función de ciclo de vida del componente, se activa al eliminarse el componente.</td>
    </tr>
    <tr>
      <td>mixins</td>
      <td>Array</td>
      <td>No</td>
      <td>Mecanismo de reutilización de código entre componentes.</td>
    </tr>
    <tr>
      <td>methods</td>
      <td>Object</td>
      <td>No</td>
      <td>Método del componente, puede ser una función de respuesta a eventos o cualquier método personalizado.</td>
    </tr>
  </tbody>
</table>


## Ejemplo de Código

### Código de ejemplo en JavaScript:

```js
Component({
  mixins:[{ didMount() {}, }],
  data: {y:2},
  props:{x:1},
  didUpdate(prevProps,prevData){},
  didUnmount(){},
  methods:{
    onMyClick(ev){
      my.alert({});
      this.props.onXX({ ...ev, e2:1});
    },
  },
})
```

# Lista de Atributos de la Instancia del Componente

## Descripción de Parámetros

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>data</td>
      <td>Object</td>
      <td>Datos internos del componente.</td>
    </tr>
    <tr>
      <td>props</td>
      <td>Object</td>
      <td>Atributo del componente entrante.</td>
    </tr>
    <tr>
      <td>is</td>
      <td>String</td>
      <td>Ruta del componente.</td>
    </tr>
    <tr>
      <td>$page</td>
      <td>Object</td>
      <td>Instancia de página del componente.</td>
    </tr>
    <tr>
      <td>$id</td>
      <td>Number</td>
      <td>Identificador del componente, puede renderizar valores en axml del componente.</td>
    </tr>
  </tbody>
</table>

## Código de Ejemplo

### Código de Ejemplo en JavaScript

```js
// /components/xx/index.js
Component({
  didMount(){
    this.$page.xxCom = this; // esta operación puede cargar la instancia del componente en la instancia de página correspondiente
    console.log(this.is);
    console.log(this.$page);
    console.log(this.$id);
  }
});
```

**Ejemplo de código axml:**

```xml
<!-- El componente /components/xx/index.axml puede renderizar directamente el valor en el axml del componente -->
<view>{{$id}}</view>
```

**Código de muestra JSON:**

```js
// /pages/index/index.json
{
  "usingComponents": {
  	"xx": "/components/xx/index"
  }
}
```

**Código de muestra JS:**

```js
Page({
  onReady() {
    console.log(this.xxCom); // can access all loaded components loaded onto the current page
  },
})
```

Cuando el componente se represente en la página, ejecute la devolución de llamada Didmount y la consola tiene la siguiente salida:

```js
/components/xx/index
{$viewId: 51, route: "pages/index/index"}
1
```

## Lista de métodos de instancia del componente

<table>
  <thead>
    <tr>
      <th>Nombre del Método</th>
      <th>Parámetro</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>setData</td>
      <td>Objeto</td>
      <td>Establecer datos activa el renderizado de la vista.</td>
    </tr>
    <tr>
      <td>$spliceData</td>
      <td>Objeto</td>
      <td>Establecer datos activa el renderizado de la vista.</td>
    </tr>
  </tbody>
</table>

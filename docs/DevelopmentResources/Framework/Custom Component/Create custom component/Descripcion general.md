---
sidebar_position: 1
---

# Visión General

Similar a Page, los componentes personalizados constan de cuatro partes: axml, js, json y acss.
Hay dos pasos para crear un componente personalizado:

1. Declarar el componente personalizado en json. Si depende de otros componentes, es necesario declarar adicionalmente los componentes personalizados dependientes.
   
**Código de ejemplo:**

```js
{
    "component": true, // obligatorio, el valor para el componente personalizado debe ser true
    "usingComponents": {
    "c1": "../x/index"
    } // Componente dependiente
}
```

**Detalles de los parámetros:**

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
<td>component</td>
<td>Boolean</td>
<td>Sí</td>
<td>Declara el componente personalizado.</td>
</tr>
<tr>
<td>usingComponents</td>
<td>Object</td>
<td>No</td>
<td>Ruta del componente personalizado en la declaración de dependencias. La ruta del proyecto absoluto comienza con "/" y la relativa con "./" o "../". La ruta npm no comienza con "/".</td>
</tr>
</tbody>
</table>

1. Utilizar la función Component para registrar el componente personalizado. Consulta el [constructor Component](/).

**Descripción de los parámetros de Component:**

<table>
<thead>
<tr>
<th>Parámetro</th>
<th>Descripción</th>
<th>Documentación</th>
</tr>
</thead>
<tbody>
<tr>
<td>onInit</td>
<td>Devolución de llamada en la creación</td>
<td>Ciclo de vida del componente.</td>
</tr>
<tr>
<td>deriveDataFromProps</td>
<td>Devolución de llamada en la creación y actualización</td>
<td>Ciclo de vida del componente.</td>
</tr>
<tr>
<td>data</td>
<td>Estado local</td>
<td>Igual que Page (se puede modificar mediante setData y $spliceData).</td>
</tr>
<tr>
<td>props</td>
<td>Atributo transferido desde el exterior</td>
<td>Método del componente y atributo externo - props.</td>
</tr>
<tr>
<td>methods</td>
<td>Método personalizado</td>
<td>Método del componente y atributo externo - methods.</td>
</tr>
</tbody>
</table>

**Ejemplo de código:**

```js
// /components/customer/index.js
Component({
  mixins: [], // mixin para reutilizar fácilmente código
  data: { x: 1 }, // datos internos del componente
  props: { y: 1 }, // Puede agregar un valor predeterminado al atributo transferido desde fuera
  onInit() {}, // se dispara en la creación del componente, agregado en la versión 2.0.0
  deriveDataFromProps(nextProps) {}, // se dispara en la creación del componente y antes de la actualización, agregado en la versión 2.0.0
  didMount(){}, // Función del ciclo de vida
  didUpdate(){},
  didUnmount(){},
  methods: { // método personalizado
    handleTap() {
      this.setData({ x: this.data.x + 1}); // Se puede usar setData para cambiar el atributo interno
    }, 
  },
})
```

Además, el componente personalizado admite la ranura y puede construir una estructura de página flexible. [Ver plantilla y estilo de componentes](/).

**Ejemplo del código:**

```js
<!-- // /components/customer/index.axml -->
<view>
  <view>x: {{x}}</view>
  <button onTap="handleTap">plusOne</button>
  <slot>
    <view>default slot & default value</view>
  </slot>
</view>
```

---
sidebar_position: 1
---

# Text

Text, compatible solo con anidación dentro del componente.

## Propiedad

<table>
  <tr>
    <th>Nombre de la propiedad</th>
    <th>Tipo</th>
    <th>Valor predeterminado</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>seleccionable</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Seleccionable o no.</td>
  </tr>
  <tr>
    <td>espacio</td>
    <td>Cadena</td>
    <td></td>
    <td>Mostrar espacios continuos.</td>
  </tr>
  <tr>
    <td>decodificar</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Decodificar o no.</td>
  </tr>
  <tr>
    <td>número-de-líneas</td>
    <td>número</td>
    <td></td>
    <td>Omisión de varias líneas, el valor debe ser mayor o igual a 1, mismo comportamiento que el atributo -webkit-line-clamp de css.</td>
  </tr>
</table>

### Valor Efectivo de Espacio:

<table>
  <tr>
    <th>Valor</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>nbsp</td>
    <td>Tamaño del espacio según la configuración de la fuente.</td>
  </tr>
  <tr>
    <td>ensp</td>
    <td>Medio tamaño de espacio de carácter.</td>
  </tr>
  <tr>
    <td>emsp</td>
    <td>Tamaño de espacio de carácter.</td>
  </tr>
</table>

## Código de Ejemplo

```xml
<view class="page">
  <view class="text-view">
    <text>{{texto}}</text>
  </view>
</view>
```

```js
Page({
  data: {
    texto: 'Hola Mini Programa',
  },
})
```
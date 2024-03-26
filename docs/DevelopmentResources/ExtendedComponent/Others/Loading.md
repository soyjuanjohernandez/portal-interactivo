# Loading

Puedes usar el componente de carga para mostrar la animación de carga.

## Ejemplo del código

### .json

```js
{
  "defaultTitle": "Loading",
  "usingComponents": {
    "loading": "mini-ali-ui/es/loading/index",
    "container": "mini-ali-ui/es/container/index"
  }
}
```

### .axml

```xml
Loading<loading size="80rpx" className="inlineBlock" />
<container hasTitle='{{true}}' title='loading size="6rpx"'>
  <loading size="6rpx" color="red" />
</container>
<container hasTitle='{{true}}' title='loading height="36rpx"'>
  <loading height="36rpx" color="red" />
</container>
<container hasTitle='{{true}}' title='loading height="36rpx" size="6rpx"'>
  <loading height="36rpx" size="6rpx" color="red" />
</container>
<container hasTitle='{{true}}' title='loading size="100px"'>
  <loading size="100px" color="red" />
</container>
<container hasTitle='{{true}}' title='loading'>
  <loading color="blue" />
</container>
```

### .acss
```css
.inlineBlock {
  display: inline-block;
  vertical-align: middle;
}
```

### Parámetros

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>String</td>
      <td>Customized class.</td>
    </tr>
    <tr>
      <td>size</td>
      <td>String</td>
      <td>Tamaño de la animación de carga. El valor predeterminado es `100px`.</td>
    </tr>
    <tr>
      <td>color</td>
      <td>String</td>
      <td>Color de la animación de carga.El valor predeterminado es `#1677ff`.</td>
    </tr>
  </tbody>
</table>


**Notas:**

- El valor de _size_ requiere la unidad.
- El valor de _color_ solo admite palabras clave de color y valores de color hexadecimal, como `red` y `#F00`.

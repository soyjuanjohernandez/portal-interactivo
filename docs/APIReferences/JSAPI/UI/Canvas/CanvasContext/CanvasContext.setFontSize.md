---
sidebar_position: 27
---

# CanvasContext.setFontSize

Establezca el tamaño de fuente.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>fontSize</td>
        <td>Number</td>
        <td>El tamaño de fuente.</td>
     </tr>
</table>


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')；

ctx.setFontSize(14)
ctx.fillText('14', 20, 20)
ctx.setFontSize(22)
ctx.fillText('22', 40, 40)
ctx.setFontSize(30)
ctx.fillText('30', 60, 60)
ctx.setFontSize(38)
ctx.fillText('38', 90, 90)

ctx.draw()
```


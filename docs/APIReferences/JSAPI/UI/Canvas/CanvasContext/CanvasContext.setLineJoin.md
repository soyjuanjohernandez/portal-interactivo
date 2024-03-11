---
sidebar_position: 31
---

# CanvasContext.setLineJoin

Establezca el estilo de la junta de las líneas.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Valor</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>lineJoin</td>
        <td>String</td>
        <td>round, bevel, miter</td>
        <td>El estilo de la articulación entre las líneas.</td>
     </tr>
</table>


## Código de muestra

```js
 //.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('bevel')
ctx.setLineWidth(10)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('round')
ctx.setLineWidth(10)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineJoin('miter')
ctx.setLineWidth(10)
ctx.moveTo(130, 10)
ctx.lineTo(220, 50)
ctx.lineTo(130, 90)
ctx.stroke()

ctx.draw()
```


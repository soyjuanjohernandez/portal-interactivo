---
sidebar_position: 33
---

# CanvasContext.setMiterLimit

Establece la longitud máxima de inglete, que es la distancia entre los ángulos interior y exterior en la intersección de las dos líneas. Sólo es válido cuando ```setLineJoin()``` es ```inglete```. Cuando se supera la longitud máxima, la unión se muestra como lineJoin como bisel.


## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>miterLimit</td>
        <td>Número</td>
        <td>La longitud máxima del inglete.</td>
     </tr>
</table>


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.beginPath()
ctx.setLineWidth(15)
ctx.setLineJoin('miter')
ctx.setMiterLimit(1)
ctx.moveTo(10, 10)
ctx.lineTo(100, 50)
ctx.lineTo(10, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(15)
ctx.setLineJoin('miter')
ctx.setMiterLimit(2)
ctx.moveTo(50, 10)
ctx.lineTo(140, 50)
ctx.lineTo(50, 90)
ctx.stroke()

ctx.beginPath()
ctx.setLineWidth(15)
ctx.setLineJoin('miter')
ctx.setMiterLimit(3)
ctx.moveTo(90, 10)
ctx.lineTo(180, 50)
ctx.lineTo(90, 90)
ctx.stroke()

ctx.draw()
```


---
sidebar_position: 36
---

# CanvasContext.setTextBaseline

Establezca las propiedades de la línea de base del texto actual.

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
        <td>textBaseline</td>
        <td>String</td>
        <td>top, hanging, middle, alphabetic, ideographic, bottom</td>
        <td>La API de Canvas 2D describe las propiedades de la línea de base de texto actual al dibujar texto.</td>
     </tr>
</table>


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.setStrokeStyle('red')
ctx.moveTo(5, 75)
ctx.lineTo(295, 75)
ctx.stroke()

ctx.setFontSize(20)

ctx.setTextBaseline('top')
ctx.fillText('top', 5, 75)

ctx.setTextBaseline('middle')
ctx.fillText('middle', 50, 75)

ctx.setTextBaseline('bottom')
ctx.fillText('bottom', 120, 75)

ctx.setTextBaseline('normal')
ctx.fillText('normal', 200, 75)

ctx.draw()
```


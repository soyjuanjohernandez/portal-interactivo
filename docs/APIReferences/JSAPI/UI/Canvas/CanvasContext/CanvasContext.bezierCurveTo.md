---
sidebar_position: 6
---

# CanvasContext.bezierCurveTo

Crea la ruta de la curva de Bézier cúbica.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>cp1x</td>
        <td>Number</td>
        <td>La coordenada x del primer punto.</td>
     </tr>
     <tr>
        <td>cp1y</td>
        <td>Number</td>
        <td>La coordenada y del primer punto.</td>
     </tr>
     <tr>
        <td>cp2x</td>
        <td>Number</td>
        <td>La coordenada x del segundo punto.</td>
     </tr>
     <tr>
        <td>cp2y</td>
        <td>Number</td>
        <td>La coordenada y del segundo punto.</td>
     </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>La coordenada x del punto final.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>La coordenada y del punto final.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('myCanvas')

ctx.beginPath()
ctx.arc(20, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(200, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(20, 100, 2, 0, 2 * Math.PI)
ctx.arc(200, 100, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

ctx.beginPath()
ctx.moveTo(20, 20)
ctx.lineTo(20, 100)
ctx.lineTo(150, 75)

ctx.moveTo(200, 20)
ctx.lineTo(200, 100)
ctx.lineTo(70, 75)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.beginPath()
ctx.moveTo(20, 20)
ctx.bezierCurveTo(20, 100, 200, 100, 200, 20)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```
---
sidebar_position: 21
---

# CanvasContext.quadraticCurveTo

Cree una ruta de curva bezier cúbica cuadrática. El punto de inicio del punto anterior del camino.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>cpx</td>
        <td>Number</td>
        <td>La coordenada x del punto de control de Bezier.</td>
     </tr>
     <tr>
        <td>cpy</td>
        <td>Number</td>
        <td>La coordenada y del punto de control de Bezier.</td>
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
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.beginPath()
ctx.arc(30, 30, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(250, 20, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.arc(30, 200, 2, 0, 2 * Math.PI)
ctx.setFillStyle('green')
ctx.fill()

ctx.setFillStyle('black')
ctx.setFontSize(12)

ctx.beginPath()
ctx.moveTo(30, 30)
ctx.lineTo(30, 150)
ctx.lineTo(250, 30)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.beginPath()
ctx.moveTo(30, 30)
ctx.quadraticCurveTo(30, 150, 250, 25)
ctx.setStrokeStyle('black')
ctx.stroke()

ctx.draw()
```


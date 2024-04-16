---
sidebar_position: 4
---

# CanvasContext.arc

Dibujar arco.
Para crear un círculo, puede especificar el arco de inicio a 0 usando ```arc()``` y especificar el arco final a ```2 * Math.PI```. Use ```Stroke()``` o ```Fill()``` para dibujar arco en el canvas.

## Parámetros
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>La coordenada x del círculo.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>La coordenada y del círculo.</td>
     </tr>
     <tr>
        <td>r</td>
        <td>Number</td>
        <td>El radio del círculo.</td>
     </tr>
     <tr>
        <td>sAngle</td>
        <td>Number</td>
        <td>El arco de inicio.</td>
     </tr>
     <tr>
        <td>eAngle</td>
        <td>Number</td>
        <td>El arco final.</td>
     </tr>
     <tr>
        <td>counterclockwise</td>
        <td>Boolean</td>
        <td>Opcional, por defecto es false. Se utiliza para establecer si se deben utilizar las agujas del reloj.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

const ctx = my.createCanvasContext('myCanvas')

ctx.arc(100, 75, 50, 0, 2 * Math.PI)
ctx.setFillStyle('#EEEEEE')
ctx.fill()

ctx.beginPath()
ctx.moveTo(40, 75)
ctx.lineTo(160, 75)
ctx.moveTo(100, 15)
ctx.lineTo(100, 135)
ctx.setStrokeStyle('#AAAAAA')
ctx.stroke()

ctx.setFontSize(12)
ctx.setFillStyle('black')
ctx.fillText('0', 165, 78)
ctx.fillText('0.5*PI', 83, 145)
ctx.fillText('1*PI', 15, 78)
ctx.fillText('1.5*PI', 83, 10)

ctx.beginPath()
ctx.arc(100, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('lightgreen')
ctx.fill()

ctx.beginPath()
ctx.arc(100, 25, 2, 0, 2 * Math.PI)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.arc(150, 75, 2, 0, 2 * Math.PI)
ctx.setFillStyle('red')
ctx.fill()

ctx.beginPath()
ctx.arc(100, 75, 50, 0, 1.5 * Math.PI)
ctx.setStrokeStyle('#333333')
ctx.stroke()

ctx.draw()
```
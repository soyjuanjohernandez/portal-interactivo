---
sidebar_position: 11
---

# CanvasContext.createLinearGradient

Crear un gradiente lineal. Se debe llamar a ```addColorStop()``` para especificar el punto de gradiente y se deben especificar al menos dos puntos.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>x0</td>
        <td>Number</td>
        <td>La coordenada x del punto original.</td>
     </tr>
     <tr>
        <td>y0</td>
        <td>Number</td>
        <td>La coordenada y del punto original.</td>
     </tr>
     <tr>
        <td>x1</td>
        <td>Number</td>
        <td>La coordenada x del punto final.</td>
     </tr>
     <tr>
        <td>y1</td>
        <td>Number</td>
        <td>La coordenada y del punto final.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

const grd = ctx.createLinearGradient(10, 10, 150, 10)
grd.addColorStop(0, 'yellow')
grd.addColorStop(1, 'blue')

ctx.setFillStyle(grd)
ctx.fillRect(20, 20, 250, 180)
ctx.draw()
```
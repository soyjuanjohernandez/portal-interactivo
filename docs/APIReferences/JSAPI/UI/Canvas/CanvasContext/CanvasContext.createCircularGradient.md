---
sidebar_position: 10
---

# CanvasContext.createCircularGradient

Cree un punto de gradiente circular, el punto de inicio es el centro del círculo y el punto final es el anillo.Se debe llamar a ```addColorStop()```  para especificar el punto de gradiente y se deben especificar al menos dos puntos.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>La coordenada x del punto original.</td>
     </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>La coordenada y del punto original.</td>
     </tr>
     <tr>
        <td>z</td>
        <td>Number</td>
        <td>El radio.</td>
     </tr>
</table>

## Código de muestra

```js
 //.js
const ctx = my.createCanvasContext('awesomeCanvas')

const grd = ctx.createCircularGradient(90, 60, 60)
grd.addColorStop(0, 'blue')
grd.addColorStop(1, 'red')

ctx.setFillStyle(grd)
ctx.fillRect(20, 20, 250, 180)
ctx.draw()
```
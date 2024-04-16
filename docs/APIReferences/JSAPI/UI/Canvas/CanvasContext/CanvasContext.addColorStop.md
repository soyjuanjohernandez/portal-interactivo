---
sidebar_position: 3
---

# CanvasContext.addColorStop

Agregue un punto de gradiente circular.

## Parámetros
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>stop</td>
        <td>Number</td>
        <td>Representa el tamaño entre el inicio y el final del gradiente, el rango debe ser 0-1.</td>
     </tr>
     <tr>
        <td>color</td>
        <td>Color</td>
        <td>El color del punto de gradiente.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('myCanvas')

const grd = ctx.createLinearGradient(30, 10, 120, 10)
grd.addColorStop(0, 'red')
grd.addColorStop(0.16, 'orange')
grd.addColorStop(0.33, 'yellow')
grd.addColorStop(0.5, 'green')
grd.addColorStop(0.66, 'cyan')
grd.addColorStop(0.83, 'blue')
grd.addColorStop(1, 'purple')

// Fill color
ctx.setFillStyle(grd)
ctx.fillRect(10, 10, 150, 80)
ctx.draw()
```
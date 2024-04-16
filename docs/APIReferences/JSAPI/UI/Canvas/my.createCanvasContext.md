---
sidebar_position: 1
---

# my.createCanvasContext

Cree contexto de [canvas](/) Este contexto de canvas funciona en el ```<Canvas/>``` del ```canvasId``` correspondiente solamente.

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>canvasId</td>
        <td>String</td>
        <td>ID defined on the ```<canvas/>```.</td>
     </tr>
</table>

## Valor de retorno

```CanvasContext```

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
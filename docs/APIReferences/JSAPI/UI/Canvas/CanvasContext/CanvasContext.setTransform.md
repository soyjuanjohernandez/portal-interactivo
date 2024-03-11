---
sidebar_position: 37
---

# CanvasContext.setTransform

Restablece la transformación e invocar la transformación por matriz unitaria, la transformación se describe por la variable del método.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>scaleX</td>
        <td>Number</td>
        <td>Escala horizontalmente.</td>
     </tr>
     <tr>
        <td>skewX</td>
        <td>Number</td>
        <td>Sesgado horizontalmente.</td>
     </tr>
     <tr>
        <td>skewY</td>
        <td>Number</td>
        <td>Sesgado verticalmente.</td>
     </tr>
     <tr>
        <td>scaleY</td>
        <td>Number</td>
        <td>Escala verticalmente.</td>
     </tr>
     <tr>
        <td>translateX</td>
        <td>Number</td>
        <td>Traslado horizontalmente.</td>
     </tr>
     <tr>
        <td>translateY</td>
        <td>Number</td>
        <td>Traslado verticalmente.</td>
     </tr>
</table>


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.rotate(45 * Math.PI / 180)
ctx.setFillStyle('red')
ctx.fillRect(70,0,100,30)

ctx.setTransform(1, 1, 0, 1, 0, 0)
ctx.setFillStyle('#000')
ctx.fillRect(0, 0, 100, 100)

ctx.draw()
```


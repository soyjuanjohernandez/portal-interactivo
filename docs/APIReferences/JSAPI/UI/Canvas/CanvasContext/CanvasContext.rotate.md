---
sidebar_position: 24
---

# CanvasContext.rotate

Establezca el punto original como el centro, gire la coordenada en el sentido de las agujas del reloj.El ángulo se agregará si gira se invoca varias veces.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>rotate</td>
        <td>Number</td>
        <td>El ángulo de rotación, utilice radiant(degrees * Math.PI/180, degree in 0-360).</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.strokeRect(200, 20, 180, 150)
ctx.rotate(30 * Math.PI / 180)
ctx.strokeRect(200, 20, 180, 150)
ctx.rotate(30 * Math.PI / 180)
ctx.strokeRect(200, 20, 180, 150)

ctx.draw()
```


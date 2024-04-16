---
sidebar_position: 30
---

# CanvasContext.setLineDash

Establezca el estilo de la línea de tablero.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>segments</td>
        <td>Array</td>
        <td>Un conjunto de números que describen la longitud de segmentos de línea y espaciado alternativamente dibujados (unidades de espacio coordinado). Si el número de elementos de matriz es impar, los elementos de la matriz se copian y repiten. Por ejemplo, el [5, 15, 25] se cambiará a [5, 15, 25, 5, 15, 25].</td>
     </tr>
</table>


## Código de muestra

```js
 // .js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.setLineDash([10, 20])

ctx.beginPath()
ctx.moveTo(0,100)
ctx.lineTo(400, 100)
ctx.stroke()

ctx.draw()
```


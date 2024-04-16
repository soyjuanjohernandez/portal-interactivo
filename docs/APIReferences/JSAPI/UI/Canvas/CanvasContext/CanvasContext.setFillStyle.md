---
sidebar_position: 26
---

# CanvasContext.setFillStyle

Establezca el color del relleno.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>color</td>
        <td>Color</td>
        <td>El color.</td>
     </tr>
</table>


## Código de muestra

```js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 100, 175)
ctx.draw()
```


---
sidebar_position: 34
---

# CanvasContext.setStrokeStyle

Establezca el estilo de trazo. Por defecto, es negro.

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
ctx.setStrokeStyle('blue')
ctx.strokeRect(50, 50, 100, 175)
ctx.draw()
```


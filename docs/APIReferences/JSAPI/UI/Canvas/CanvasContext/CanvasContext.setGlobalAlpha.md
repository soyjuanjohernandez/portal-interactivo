---
sidebar_position: 28
---

# CanvasContext.setGlobalAlpha

Establezca el alfa de Global Brush.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Rango</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>alpha</td>
        <td>Number</td>
        <td>0-1</td>
        <td>El valor alfa, 0 representa transparente y 1 representa no transparente.</td>
     </tr>
</table>


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.setFillStyle('yellow')
ctx.fillRect(10, 10, 150, 100)
ctx.setGlobalAlpha(0.2)
ctx.setFillStyle('blue')
ctx.fillRect(50, 50, 150, 100)
ctx.setFillStyle('red')
ctx.fillRect(100, 100, 150, 100)

ctx.draw()
```


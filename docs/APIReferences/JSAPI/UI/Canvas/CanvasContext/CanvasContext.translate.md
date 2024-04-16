---
sidebar_position: 43
---

# CanvasContext.translate

Traducir el punto original de la coordenada.El punto original predeterminado es la esquina superior izquierda.

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
        <td>El desplazamiento de la coordenada x.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>El desplazamiento de la coordenada y.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.strokeRect(20, 20, 250, 80)
ctx.translate(30, 30)
ctx.strokeRect(20, 20, 250, 80)
ctx.translate(30, 30)
ctx.strokeRect(20, 20, 250, 80)

ctx.draw()
```


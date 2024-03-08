---
sidebar_position: 26
---

# CanvasContext.scale

Una vez invocada la ```escala```, se escalarán las coordenadas horizontal y vertical de la trayectoria creada posteriormente. La escala se multiplicará si se invoca la ```escala``` varias veces.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>scaleWidth</td>
        <td>Number</td>
        <td>El tamaño de escala para la coordenada horizontal(1 = 100%，0,5 = 50%，2 = 200%).</td>
     </tr>
     <tr>
        <td>scaleHeight</td>
        <td>Number</td>
        <td>El tamaño de escala para la coordenada vertical(1 = 100%，0,5 = 50%，2 = 200%).</td>
     </tr>
</table>


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas');

ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)
ctx.scale(2, 2)
ctx.strokeRect(10, 10, 25, 15)

ctx.draw()

ctx.draw()
```


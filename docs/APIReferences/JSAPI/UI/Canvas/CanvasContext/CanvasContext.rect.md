---
sidebar_position: 22
---

# CanvasContext.rect

Dibuja un rectángulo. Usar ```fill()``` o ```stroke()``` para dibujar el rectángulo a canvas.

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
        <td>La coordenada x de la esquina superior izquierda del rectángulo.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>La coordenada y de la esquina superior izquierda del rectángulo.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>La anchura del rectángulo.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>La altura del rectángulo.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.rect(20, 20, 250, 80)
ctx.setFillStyle('blue')
ctx.fill()
ctx.draw()
```


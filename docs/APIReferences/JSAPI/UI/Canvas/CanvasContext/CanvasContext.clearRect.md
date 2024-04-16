---
sidebar_position: 7
---

# CanvasContext.clearRect

Borra el contenido del rectángulo.

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
<!-- .axml -->
<canvas id="awesomeCanvas" style="border: 1px solid; background: red;"/>
```
```js
// .js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.setFillStyle('blue')
ctx.fillRect(250, 10, 250, 200)
ctx.setFillStyle('yellow')
ctx.fillRect(0, 0, 150, 200)
ctx.clearRect(10, 10, 150, 75)
ctx.draw()
```
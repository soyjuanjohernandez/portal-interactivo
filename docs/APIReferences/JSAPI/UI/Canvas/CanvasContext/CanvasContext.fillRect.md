---
sidebar_position: 15
---

# CanvasContext.fillRect

Llena el rectángulo.
```setFillStyle()``` se usa para establecer el color del relleno, por defecto, su color es negro.

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
        <td>El ancho del rectángulo.</td>
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
ctx.fillRect(20, 20, 250, 80)
ctx.setFillStyle('blue')
ctx.draw()
```


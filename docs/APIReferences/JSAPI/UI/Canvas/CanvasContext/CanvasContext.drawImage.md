---
sidebar_position: 13
---

# CanvasContext.drawImage

Dibuja la imagen y la imagen mantiene la información del tamaño original.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>imageResource</td>
        <td>String</td>
        <td>Se admite el recurso de imagen, solo el recurso CDN en línea y el recurso fuera de línea. El recurso CDN en línea debe contener acceso de control de acceso: * en encabezado.</td>
     </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>La coordenada x de la esquina superior izquierda de la imagen.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>La coordenada y de la esquina superior izquierda de la imagen.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>El ancho de la imagen.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>La altura de la imagen.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.drawImage('https://img.example.com/example.jpg', 2, 2, 250, 80)
ctx.draw()
```
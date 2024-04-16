---
sidebar_position: 16
---

# CanvasContext.fillText

Llenar el texto en canvas.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>text</td>
        <td>String</td>
        <td>Texto.</td>
     </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>La coordenada x de la esquina de texto con fondo izquierdo.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>La coordenada y de la esquina de texto con fondo izquierdo.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.setFontSize(42)
ctx.fillText('Hello', 30, 30)
ctx.fillText('world', 200, 200)

ctx.draw()
```


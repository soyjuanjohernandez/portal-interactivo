---
sidebar_position: 35
---

# CanvasContext.setTextAlign

Align es una propiedad de la API Canvas 2D que describe la alineación del texto cuando se dibuja. La alineación se basa en el valor x del método CanvasRenderingContext2D.FillText. Si textAlign="center", el texto se dibujará en 'x-50%*width'.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>textAlign</td>
        <td>String</td>
        <td>Izquierda, derecha, centro, inicio, fin.</td>
     </tr>
</table>


## Código de muestra

```js
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.setStrokeStyle('red')
ctx.moveTo(150, 20)
ctx.lineTo(150, 170)
ctx.stroke()

ctx.setFontSize(15)
ctx.setTextAlign('left')
ctx.fillText('textAlign=left', 150, 60)

ctx.setTextAlign('center')
ctx.fillText('textAlign=center', 150, 80)

ctx.setTextAlign('right')
ctx.fillText('textAlign=right', 150, 100)

ctx.draw()
```


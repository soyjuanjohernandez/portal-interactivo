---
sidebar_position: 40
---

# CanvasContext.toDataURL

Obtener la URL de datos del área especificada de canvas.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Valor por defecto</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>x</td>
        <td>Number</td>
        <td>No</td>
        <td>0</td>
        <td>La abscisa de la esquina izquierda de la región rectangular a extraer.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>No</td>
        <td>0</td>
        <td>La ordenada de la región rectangular a la izquierda.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>No</td>
        <td>La distancia horizontal desde la esquina superior izquierda del rectángulo extraído a la esquina inferior derecha de canvas.</td>
        <td>El ancho del área rectangular a extraer.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>No</td>
        <td>La distancia vertical desde la esquina superior izquierda del rectángulo extraído a la esquina inferior derecha de canvas.</td>
        <td>La altura del área rectangular a extraer.</td>
     </tr>
     <tr>
        <td>destWidth</td>
        <td>Number</td>
        <td>No</td>
        <td>Es igual al ancho por defecto.</td>
        <td>El ancho de dest del área rectangular a extraer.</td>
     </tr>
     <tr>
        <td>destWidth</td>
        <td>Number</td>
        <td>No</td>
        <td>Es igual a la altura por defecto.</td>
        <td>La altura de dest del área rectangular a extraer.</td>
     </tr>
     <tr>
        <td>fileType</td>
        <td>String</td>
        <td>No</td>
        <td>png</td>
        <td>El tipo de imagen, PNG o JPG.</td>
     </tr>
     <tr>
        <td>quality</td>
        <td>Number</td>
        <td>No</td>
        <td>-</td>
        <td>La calidad de la imagen correspondiente a la URL de datos cuando el formato de imagen es JPG. Los valores van de 0 a 1, y por defecto serán 1 si se superan. En otros formatos de imagen se ignora este parámetro.</td>
     </tr>
</table>

## Valor de retorno

Promis

<table>
    <tr>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>Promise</td>
        <td>La cadena extraída para la URL de datos.</td>
     </tr>
</table>

## Código de muestra

```js
const ctx = my.createCanvasContext('awesomeCanvas')；

ctx.setFillStyle('#108ee9');
ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
ctx.fill();
ctx.draw();
ctx.toDataURL({
  x: 50,
  y: 50,
  width: 50,
  height: 50,
  destWidth: 100,
  destHeight: 100,
}).then(dataURL=>{
  ctx.drawImage(dataURL, 0, 0);
  ctx.draw();
})
```
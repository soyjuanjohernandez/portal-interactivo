---
sidebar_position: 41
---

# CanvasContext.toTempFilePath

Exportar el lienzo a una imagen y devolver la ruta del archivo.

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
        <td>El punto de inicio de la coordenada X del lienzo.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>No</td>
        <td>0</td>
        <td>El punto de inicio de la coordenada y de lienzo.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>No</td>
        <td>Por defecto es el ancho del lienzo.</td>
        <td>El ancho del lienzo.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>No</td>
        <td>Por defecto, la altura del lienzo.</td>
        <td>La altura del lienzo.</td>
     </tr>
     <tr>
        <td>destWidth</td>
        <td>Number</td>
        <td>No</td>
        <td>Es igual al ancho por defecto.</td>
        <td>El ancho de destino de la imagen exportada.</td>
     </tr>
     <tr>
        <td>destWidth</td>
        <td>Number</td>
        <td>No</td>
        <td>Es igual a la altura por defecto.</td>
        <td>TLa altura de destino de la imagen exportada.</td>
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
     <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>-</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>-</td>
        <td>Función de devolución de llamada en caso de fallo de la llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>-</td>
        <td>Función de devolución de llamada al finalizar la llamada (se ejecutará al tener éxito o falla).</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas');
ctx.toTempFilePath({
  success() {},
});
```
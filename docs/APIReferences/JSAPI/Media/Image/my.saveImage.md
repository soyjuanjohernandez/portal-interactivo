---
sidebar_position: 3
---

Guarde las imágenes en línea en una galería de cámara de dispositivo.

## Código de muestra

```js title="js"
my.saveImage({url:'https://img.example.com/example.jpg'});
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>Yes</td>
        <td>URL de la imagen a guardar.</td>
    </tr>
    <tr>
        <td>showActionSheet</td>
        <td>Boolean</td>
        <td>No</td>
        <td>Si mostrar el menú al guardar la imagen;Por defecto, es `false`.</td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada(Callback) en caso de éxito de la llamada.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada (Callback) en caso de fracaso de la llamada.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada (Callback) al completarse la llamada (para ser ejecutada tanto en caso de éxito como en caso de fracaso).</td>
    </tr>
</table>

## Código de error

<table>
    <tr>
        <th>Error</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>2</td>
        <td>Parámetro no válido, sin parámetro de URL transferido.</td>
    </tr>
    <tr>
        <td>15</td>
        <td>Álbum correcto no habilitado (solo iOS).</td>
    </tr>
    <tr>
        <td>16</td>
        <td>Almacenamiento de álbum insuficiente en teléfonos celulares (solo iOS).</td>
    </tr>
    <tr>
        <td>17</td>
        <td>Otros errores durante el ahorro de la imagen.</td>
    </tr>
</table>













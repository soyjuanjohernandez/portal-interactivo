---
sidebar_position: 3
---

# my.downloadFile

Descargue un recurso de archivo a una ubicación local.

## Código de muestra

```js
my.downloadFile({
  url: 'http://img.example.com/example.jpg',
  success({ apFilePath }) {
    my.previewImage({
      urls: [apFilePath],
    });
  },
  fail(res) {
    my.alert({
      content: res.errorMessage || res.error,
    });
  },
});
```
## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>Si</td>
        <td>Descarga de la dirección del archivo.</td>
     </tr>
     <tr>
        <td>header</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Encabezado de solicitud de HTTP.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (para ser ejecutado en el éxito de la llamada o el fracaso).</td>
     </tr>
</table>

### Función de devolución de llamada de éxito
El tipo de parámetro entrante es el objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>apFilePath</td>
        <td>String</td>
        <td>Ubicación temporal de almacenamiento de archivos.</td>
     </tr>
</table>

## Código de error

<table>
    <tr>
        <th>Error</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>12</td>
        <td>La descarga falló.</td>
     </tr>
     <tr>
        <td>13</td>
        <td>No está bien.</td>
     </tr>
</table>

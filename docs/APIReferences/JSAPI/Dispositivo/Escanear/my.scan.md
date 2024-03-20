---
sidebar_position: 1
---

# my.scan

Llame a la función escanear código QR o código de barras.

Sugerencia: después de llamar a la API ```my.scan```, se ejecutará la función de devolución de llamada del ciclo de vida ```onHide()``` y ```onShow()``` de ```App``` y ```Page```. La secuencia de ejecución es la siguiente

```App.onHide()``` -> ```Page.onHide()``` -> ```App.onShow()``` -> ```Page.onShow()```.

## Código de muestra

```js
Page({
  scan() {
    my.scan({
      type: 'qr',
      success: (res) => {
        my.alert({ title: res.code });
      },
    });
  }
})
```

## Parámetros
Tipo de cadena con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>type</td>
        <td>String</td>
        <td>No</td>
        <td>
            Escriba para escanear (QR por defecto):
            1. qr: Marco de escaneo QR bidimensional.
            2. bar: Marco de escaneo de código de barras lineal.
         </td>
     </tr>
     <tr>
        <td>hideAlbum</td>
        <td>Booleano</td>
        <td>No</td>
        <td>Ocultar la entrada del álbum o no.Si es falso, habrá una entrada para que el usuario seleccione una imagen del álbum como la imagen escaneada. De lo contrario, el usuario usará la cámara para escanear el contenido directamente. Por defecto, su valor es falso.</td>
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

The incoming parameter is of the Object type with the following attributes:
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>code</td>
        <td>String</td>
        <td>Datos devueltos del escaneo.</td>
     </tr>
     <tr>
        <td>qrCode</td>
        <td>String</td>
        <td>Los datos del código QR devueltos del escaneo.</td>
     </tr>
     <tr>
        <td>barCode</td>
        <td>String</td>
        <td> Datos del código de barras devueltos del escaneo.</td>
     </tr>
</table>

## Código de error
<table>
    <tr>
        <th>Error</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>10</td>
        <td>Cancelación de usuario.</td>
     </tr>
     <tr>
        <td>11</td>
        <td>Falla de operación.</td>
     </tr>
</table>


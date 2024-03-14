---
sidebar_position: 1
---

Llame a esta API para grabar un video o elija un video del álbum.

## Código de muestra

Consulte el siguiente código de muestra de JavaScript:

```js title="js"
my.chooseVideo({
  sourceType: ['album', 'camera'],
  maxDuration: 60,
  camera: 'back',
  success: (res) => {
    console.log(res);
  },
  fail: (error) => {
    console.log(error);
  },
  complete: () => {
    console.log('The callback function to be executed whether the request is successful or failed');
  }
});
```

## Parámetros

El parámetro entrante es del tipo de objeto con las siguientes propiedades:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>sourceType</td>
        <td>Array\<String\></td>
        <td>No</td>
        <td>
          Indicates the sources of the video.
          <br/>Valid values are:
          * `album`: Elija un video del álbum en un dispositivo móvil.
          * `camera`: Shoot a video with the camera on a mobile device.
          <p></p>
          By default, the value is `['album','camera']`.
        </td>
    </tr>
    <tr>
        <td>compressed</td>
        <td>Boolean</td>
        <td>No</td>
        <td>
          Especifica si comprimir el archivo de video seleccionado.Para iOS, el archivo de video siempre está comprimido.
          De manera predeterminada, el valor es `true`, lo que significa que el archivo de video seleccionado está comprimido.
        </td>
    </tr>
    <tr>
        <td>maxDuration</td>
        <td>Number</td>
        <td>No</td>
        <td>
          Indica la cantidad máxima de tiempo para grabar un video, en segundos.
          Por defecto, el valor es `60`, lo que significa que la cantidad máxima de tiempo es de 60 segundos.
        </td>
    </tr>
    <tr>
        <td>camera</td>
        <td>String</td>
        <td>No</td>
        <td>
          Indica qué cámara (cámara frontal o trasera) se abre al iniciar la aplicación de la cámara.
          Para algunos dispositivos Android, esta configuración no es compatible con la ROM del sistema y, por lo tanto, no puede entrar en vigencia.
          <br/>Los valores válidos son:
          * `back`: Se abre la cámara trasera.
          * `front`: Se abre la cámara frontal.
          <p></p>
          Por defecto, el valor ha vuelto.
        </td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>La función de devolución de llamada(Callback) se ejecutará cuando la solicitud sea exitosa.Para obtener más información, consulte la función de devolución de llamada(Callback) de éxito.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>La función de devolución de llamada(Callback) se ejecutará cuando la solicitud falle.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>La función de devolución de llamada(Callback) se ejecutará cuando se complete la solicitud (se ejecutará si la solicitud es exitosa o fallida).</td>
    </tr>
</table>

### Función de devolución de llamada de éxito

The following table provides the properties in the `success` callback function:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>tempFilePath</td>
        <td>String</td>
        <td>Indica la ruta del archivo temporal del video seleccionado.</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>Number</td>
        <td>Indica la longitud del video seleccionado.</td>
    </tr>
    <tr>
        <td>size</td>
        <td>Number</td>
        <td>Indica el tamaño del video seleccionado.</td>
    </tr>
    <tr>
        <td>height</td>
        <td>Number</td>
        <td>Indica la altura del video seleccionado.</td>
    </tr>
    <tr>
        <td>width</td>
        <td>Number</td>
        <td>Indica el ancho del video seleccionado.</td>
    </tr>
</table>

## Códigos de error

La siguiente tabla proporciona los posibles códigos de error y mensajes en la llamada API:

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Solución</th>
    </tr>
    <tr>
        <td>2</td>
        <td>Invalid parameters.</td>
        <td>Verifique los valores en su solicitud y proporcione los parámetros correctos.</td>
    </tr>
    <tr>
        <td>3</td>
        <td>An unknown error occurs.</td>
        <td>Verifique si el proceso de llamadas es normal.Si no se resuelve, comuníquese con nuestro soporte técnico para solucionar problemas de este problema.</td>
    </tr>
    <tr>
        <td>11</td>
        <td>The operation was canceled by the user.</td>
        <td>Interacción normal del usuario y no se requiere un procesamiento adicional.</td>
    </tr>
    <tr>
        <td>12</td>
        <td>An error occurs in data processing.</td>
        <td>Llame a la API nuevamente.</td>
    </tr>
    <tr>
        <td>13</td>
        <td>The file size exceeds the limit.</td>
        <td>Compruebe si tiene suficiente RAM.</td>
    </tr>
    <tr>
        <td>14</td>
        <td>No access to camera.</td>
        <td>Verifique los permisos de la aplicación para la cámara.</td>
    </tr>
    <tr>
        <td>15 </td>
        <td>No access to album.</td>
        <td>Verifique los permisos de la aplicación para el álbum.</td>
    </tr>
</table>

## FAQs

### Q: ¿Cómo guiar a los usuarios para habilitar los permisos?

A: Llame a la API my.showauthguide para guiar a los usuarios para habilitar ciertos permisos.

### Q: ¿Cómo cargar el video seleccionado?

A: Llame a esta API junto con la API my.uploadfile para cargar el video seleccionado.Consulte el siguiente código de muestra:

```js title="js"
Page({
  uploadFile() {
    my.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        console.log('chooseVideo', res);
        const path = res.tempFilePath;
        console.log(path);
        my.uploadFile({
          url: 'https://httpbin.org/post',
          fileType: 'video',
          fileName: 'user-selected-video',
          filePath: path,
          formData: { extra: 'Extra information' },
          success: res => {
            console.log('success res', res);
            my.alert({ title: 'Uploaded successfully' });
          },
          fail: err => {
            my.alert({ title: 'Failed to upload', content: JSON.stringify(err) });
          },
        });
      },
    });
  },
});
```

































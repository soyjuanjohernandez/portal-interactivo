---
sidebar_position: 6
---

# my.chooseFileFromDisk

Puede elegir un archivo para cargar.También puede ver los detalles del archivo o eliminar el archivo que ha agregado.

## Código de muestra

```js
<!--.axml-->
<view class="page">
  <view class="page-description">file API</view>
    <view class="page-section-demo">
      <button class="page-body-button" onTap="chooseFileFromDisk">Choose file from disk</button>
    </view>
  </view>
</view>
```

```js
// .js
Page({
  chooseFileFromDisk(){
    my.chooseFileFromDisk({
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      },
      fail: (res) => {
        my.alert({
          content: JSON.stringify(res),
        });
      }
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
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada exitosa a la API.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada a la API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada a la API. Esta función se ejecuta siempre, independientemente de que la llamada se realice correctamente o no.</td>
     </tr>
</table>


### Función de devolución de llamada de éxito

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>apFilePath</td>
        <td>String</td>
        <td>The temporary local file path.</td>
     </tr>
</table>

### Función de devolución de llamada de falla

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>error</td>
        <td>número</td>
        <td>Código de error.</td>
     </tr>
     <tr>
        <td>errorMessage</td>
        <td>string</td>
        <td>Mensaje de error.</td>
     </tr>
</table>


## Códigos de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Observación</th>
    </tr>
    <tr>
        <td>4</td>
        <td>La llamada JSAPI es denegada.</td>
        <td>El miniprograma desarrollado por el comerciante/ISV no tiene derecho a llamar al JSAPI.</td>
     </tr>
     <tr>
        <td>12</td>
        <td>Se producen errores al copiar el archivo.</td>
        <td></td>
     </tr>
     <tr>
        <td>15</td>
        <td>El usuario cancela la selección de archivos.</td>
        <td></td>
     </tr>
     <tr>
        <td>15</td>
        <td>El usuario cancela la selección de archivos.</td>
        <td></td>
     </tr>
     <tr>
        <td>16</td>
        <td>Se producen errores al copiar el archivo.</td>
        <td>Solo Android.</td>
     </tr>
     <tr>
        <td>17</td>
        <td>No hay permiso para leer el almacenamiento.</td>
        <td>Solo Android.</td>
     </tr>
     <tr>
        <td>18</td>
        <td>No es compatible elegir un archivo grande.</td>
        <td></td>
     </tr>
</table>

:::info[NOTA:]

La siguiente lista describe la diferencia entre el código de error 16 y 17:

* 16: El usuario niega el permiso para leer el almacenamiento para la solicitud actual.
* 17: El usuario negó el permiso la última vez y decidió nunca volver a pedir el permiso.En este caso, el cuadro de diálogo para el permiso no puede aparecer.El código de error de 17 se devuelve directamente.El desarrollador de Mini Program requiere llamar a [showAuthGuide](/) para guiar al usuario a otorgar el permiso relacionado.
:::

## Límite de tamaño de archivo
Si elige un archivo que sea demasiado grande, el mini programa o la aplicación de billetera no pueden ejecutarse correctamente.Por esta razón, el tamaño del archivo está limitado a 50 MB.Cuando el tamaño del archivo excede los 50 MB, se devuelve el código de error de 18 y se muestra el mensaje de error correspondiente.
---
sidebar_position: 2
---

# my.uploadFile

Cargue el recurso local al servidor.

## Código de muestra

```js
my.uploadFile({
  url: 'Please use your own server address',
  fileType: 'image',
  fileName: 'file',
  filePath: '...',
  success: (res) => {
    my.alert({
      content: 'Upload success'
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
        <td>Dirección del servidor de desarrolladores.</td>
     </tr>
     <tr>
        <td>filePath</td>
        <td>String</td>
        <td>Si</td>
        <td>Localizador local del recurso de archivo que se cargará.</td>
     </tr>
     <tr>
        <td>fileName</td>
        <td>String</td>
        <td>Si</td>
        <td>Nombre de archivo, también la clave correspondiente. El desarrollador usa esta clave en el lado del servidor para obtener el contenido binario del archivo.</td>
     </tr>
     <tr>
        <td>fileType</td>
        <td>String</td>
        <td>Si</td>
        <td className='p-no-margin'>
            El tipo de archivo del archivo cargado.
            
            Nota: Este parámetro solo se usa para la compatibilidad con versiones anteriores con versiones de Super App más antiguas.Si previamente ha establecido un valor para este parámetro, no se necesitan cambios.Si no, puede establecer el valor en ```imagen``` para cualquier tipo de archivo.
         </td>
     </tr>
     <tr>
        <td>header</td>
        <td>Objeto</td>
        <td>No</td>
        <td className='p-no-margin'>
            La cabecera de la petición HTTP. Puede especificar este parámetro utilizando cualquier cabecera común.

            Nota: Por defecto, la cabecera de petición Content-Type está configurada como ```multipart/form-data```. No cambie este valor, de lo contrario su solicitud podría fallar.
         </td>
     </tr>
     <tr>
        <td>formData</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Otros datos de formularios adicionales en la solicitud HTTP.</td>
     </tr>
     <tr>
        <td>timeout</td>
        <td>Objeto</td>
        <td>No</td>
        <td>El período de tiempo de espera de su solicitud en milisegundos.El valor predeterminado es ```60000```.</td>
     </tr>
     <tr>
        <td>hideLoading</td>
        <td>Número</td>
        <td>No</td>
        <td className='p-no-margin'>
            Si ocultar un icono de carga durante el proceso de carga.Los valores válidos son:

            * ```Verdadero```: Ocultar un icono de carga.
            * ```Falso```: Muestre un icono de carga.

            Si no se especifica, el valor predeterminado es ```falso```.
         </td>
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
        <td>data</td>
        <td>String</td>
        <td>Datos devueltos del servidor.</td>
     </tr>
     <tr>
        <td>status</td>
        <td>Number</td>
        <td>Código de estado HTTP.</td>
     </tr>
     <tr>
        <td>header</td>
        <td>Objeto</td>
        <td>El encabezado regresó del servidor.</td>
     </tr>
</table>

## Código de error

<table>
    <tr>
        <th>Error</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>11</td>
        <td>Archivo inexistente.</td>
     </tr>
     <tr>
        <td>12</td>
        <td>Error al cargar el archivo.</td>
     </tr>
     <tr>
        <td>13</td>
        <td>No está bien.</td>
     </tr>
</table>

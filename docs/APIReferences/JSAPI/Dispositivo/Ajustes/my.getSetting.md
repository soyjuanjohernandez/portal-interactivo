---
sidebar_position: 2
---

# my.getSetting

Utilice esta API para obtener la configuración actual del usuario. Sólo se devuelven los permisos que han sido solicitados por el Mini Programa al usuario.

## Código de muestra

```js
my.getSetting({
  success: (res) => {
    /*
     * res.authSetting = {
     *   "location": true,
     *   "audioRecord": true,
     *   ...
     * }
     */
  }
})
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
        <td>La función de devolución de llamada para una llamada exitosa a la API. Véase Ejemplo de valor de retorno para más detalles.</td>
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
        <td>authSetting</td>
        <td>Object</td>
        <td>Resultados de la autorización del usuario. Las claves son los valores de los ámbitos y los valores son de tipo booleano, que muestran si el usuario concede o no el permiso. Consulte Ámbitos para obtener más información.</td>
     </tr>
</table>

## Ejemplo de valor de retorno
```js
{
    "authSetting": {
        "camera": true,
        "location": true,
        "album": true,
        "userInfo": true,
        "phoneNumber": true
    }
}
```
## Ámbitos
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>location</td>
        <td>[my.getLocation](/portal-interactivo/docs/APIReferences/JSAPI/Ubicación/my.getLocation)</td>
        <td>Este campo especifica si autorizar el acceso a la ubicación geográfica.</td>
     </tr>
     <tr>
        <td>album</td>
        <td>[my.chooseImage](/portal-interactivo/docs/APIReferences/JSAPI/Media/Imagen/my.chooseImage)、[my.saveImage](/portal-interactivo/docs/APIReferences/JSAPI/Media/Imagen/my.saveImage)</td>
        <td>Este campo especifica si autorizar para guardar imágenes en los álbumes.</td>
     </tr>
     <tr>
        <td>camera</td>
        <td>[my.scan](/)</td>
        <td>Este campo especifica si autorizar el acceso a la cámara.</td>
     </tr>
     <tr>
        <td>phoneNumber</td>
        <td>my.getPhoneNumber</td>
        <td>Este campo especifica si autorizar el acceso al número de teléfono.</td>
     </tr>
     <tr>
        <td>userInfo</td>
        <td>[my.getOpenUserInfo](/)</td>
        <td>Este campo especifica si autorizar el acceso a la información del usuario.</td>
     </tr>    
</table>


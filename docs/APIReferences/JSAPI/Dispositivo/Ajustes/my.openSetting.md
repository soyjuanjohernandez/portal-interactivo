---
sidebar_position: 1
---

# my.openSetting

Utilice esta API para abrir la página de configuración del Mini Programa y devuelve los resultados de la configuración de permisos. En la página de configuración sólo se muestran los permisos que el Mini Programa ha solicitado al usuario.

## Código de muestra

```js
my.openSetting({
  success: (res) => {
    /*
     * res.authSetting = {
     *   "userInfo": true,
     *   "location": true,
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
        <td>authSetting</td>
        <td>Object</td>
        <td>Resultados de la autorización del usuario. Las claves son los valores de los ámbitos y los valores son de tipo booleano, que muestran si el usuario concede o no el permiso. Consulte Ámbitos para obtener más información.</td>
     </tr>
</table>


### Ámbitos
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
        <td>userInfo</td>
        <td>[my.getOpenUserInfo](/)</td>
        <td>Este campo especifica si autorizar el acceso a la información del usuario.</td>
     </tr>    
</table>


---
sidebar_position: 1
---

# my.showAuthGuide

Diálogo emergente para el usuario en forma de (imagen, texto, etc.) a través del módulo de guía de permisos. Para aconsejar al usuario que active el permiso correspondiente. La guía de permisos se utiliza para aconsejar y no para validar el permiso. El momento de la llamada es cuando la parte de servicio confirma que el permiso requerido está limitado. Además, la aparición de la guía de permisos está sujeta al cansancio y a otros factores.

## Código de muestra

```js
// API-DEMO page/API/show-auth-guide/show-auth-guide.json
{
    "defaultTitle": "Permission guide"
}
```
```js
<!-- API-DEMO page/API/show-auth-guide/show-auth-guide.axml-->
<view class="page">
  <view class="page-description">Permission guide API</view>
  <view class="page-section">
    <view class="page-section-title">my.showAuthGuide</view>
    <view class="page-section-demo">
      <button type="primary" onTap="showAuthGuide">Permission guide</button>
    </view>
  </view>
</view>
```
```js
// API-DEMO page/API/show-auth-guide/show-auth-guide.js
Page({
  showAuthGuide() {
    my.showAuthGuide({ 
        authType:'LBS',
        success:(res)=>{
            //When shown is true, it indicates the permission guide pop-up will be shown; when it is false, it indicates the user has allowed the permission.
            my.alert({content: 'Call success: '+JSON.stringify(res), });
        },
        fail:(error)=>{
            my.alert({content: 'Call failure:'+JSON.stringify(error), });
        },
    });
  },
});
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
        <td>authType</td>
        <td>String</td>
        <td>Si</td>
        <td>Identificador del permiso bajo guía, utilizado para identificar el tipo de permiso (como LBS).</td>
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

### Tipo de autenticación admitido

<table>
    <tr>
        <th>Nombre de permiso</th>
        <th>Código de permiso</th>
    </tr>
     <tr>
        <td>Permiso de micrófono</td>
        <td>MICROPHONE</td>
     </tr>
     <tr>
        <td>Permiso de libro de direcciones</td>
        <td>ADDRESSBOOK</td>
     </tr>
     <tr>
        <td>Permiso de la cámara</td>
        <td>CAMERA</td>
     </tr>
     <tr>
        <td>Permiso fotográfico</td>
        <td>PHOTO</td>
     </tr>
     <tr>
        <td>Interruptor de lbs</td>
        <td>LBS</td>
     </tr>
</table>


---
sidebar_position: 1
---

# my.choosePhoneContact

Seleccione el número de teléfono de un contacto en el directorio del sistema local.

## Código de muestra

```js
//.json
{
   "defaultTitle": "Contact"
}
```
```js
<!-- .axml -->
<view class="page">

  <view class="page-description">Contact API</view>

  <view class="page-section">
    <view class="page-section-title">my.choosePhoneContact</view>
    <view class="page-section-demo">
      <button type="primary" onTap="choosePhoneContact">Evoke local directory</button>
    </view>
  </view>

  </view>

</view>
```
```js
//.js
Page({
  choosePhoneContact() {
    my.choosePhoneContact({
      success: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'choosePhoneContact response: ' + JSON.stringify(res)
        });
      },
    });
  }
});
```
## Parámetros

Tipo de objeto con los siguientes atributos:

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

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>name</td>
        <td>String</td>
        <td>Nombre de contacto seleccionado.</td>
     </tr>
     <tr>
        <td>mobile</td>
        <td>String</td>
        <td>Teléfono de contacto seleccionado.</td>
     </tr>
</table>

### Código de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>10</td>
        <td>Sin autorización.</td>
     </tr>
     <tr>
        <td>11</td>
        <td>El usuario cancela la operación (o el dispositivo no autoriza el uso del directorio).</td>
     </tr>
</table>
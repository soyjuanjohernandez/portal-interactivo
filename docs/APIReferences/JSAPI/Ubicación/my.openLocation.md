---
sidebar_position: 2
---

Vea la ubicación en el mapa incorporado.

## Códigos de muestra

```json title="json"
// API-DEMO page/API/open-location/open-location.json
{
    "defaultTitle": "Open Location"
}
```

```html title="axml"
<!-- API-DEMO page/API/open-location/open-location.axml-->
<view class="page">
  <view class="page-section">
    <view class="page-section-demo">
      <text>Longitude</text>
      <input type="text" disabled="{{true}}" value="{{longitude}}" name="longitude"></input>
    </view>
    <view class="page-section-demo">
      <text>Latitude</text>
      <input type="text" disabled="{{true}}"  value="{{latitude}}" name="latitude"></input>
    </view>
    <view class="page-section-demo">
      <text>Name</text>
      <input type="text" disabled="{{true}}"  value="{{name}}" name="name"></input>
    </view>
    <view class="page-section-demo">
      <text>Address</text>
      <input type="text" disabled="{{true}}"  value="{{address}}" name="address"></input>
    </view>
    <view class="page-section-btns">
      <view type="primary" formType="submit" onTap="openLocation">open location</view>
    </view>
  </view>
</view>
```

```js title="js"
// API-DEMO page/API/open-location/open-location.js
Page({
  data: {
    longitude: '103.873834',
    latitude: '1.355572',
    name: 'Serangoon Stadium',
    address: '33 Yio Chu Kang Rd, Singapore',
  },

  openLocation() {
    my.openLocation({
      longitude: this.data.longitude,
      latitude: this.data.latitude,
      name: this.data.name,
      address: this.data.address,
    })
  }
})
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
        <td>longitude</td>
        <td>String</td>
        <td>Yes</td>
        <td>La longitud.</td>
    </tr>
    <tr>
        <td>latitude</td>
        <td>String</td>
        <td>Yes</td>
        <td>La latitud.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>Yes</td>
        <td>La locación.</td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>Yes</td>
        <td>La dirección detallada de la ubicación.</td>
    </tr>
    <tr>
        <td>scale</td>
        <td>Number</td>
        <td>No</td>
        <td>El nivel de zoom.El valor varía de 3 a 19 y es 15 por defecto.</td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada indica una llamada exitosa.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada indica una llamada fallida.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica la llamada se completa (esto se ejecutará independientemente de si la llamada tiene éxito o falla).</td>
    </tr>
</table>










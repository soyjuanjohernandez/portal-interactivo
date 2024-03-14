---
sidebar_position: 3
---

Abra el mapa incorporado para elegir una ubicación.

## Códigos de muestra

```json title="json"
// API-DEMO page/API/choose-location/choose-location.json
{
    "defaultTitle": "Choose Location"
}
```

```html title="axml"
<!-- API-DEMO page/API/choose-location/choose-location.axml-->
<view class="page">
  <view class="page-section">
    <view class="page-section-demo">
      <text>Longitude:</text>
      <input value="{{longitude}}"></input>
    </view>
    <view class="page-section-demo">
      <text>Latitude:</text>
      <input value="{{latitude}}"></input>
    </view>
    <view class="page-section-demo">
      <text>Name:</text>
      <input value="{{name}}"></input>
    </view>
    <view class="page-section-demo">
      <text>Address:</text>
      <input value="{{address}}"></input>
    </view>    
    <view class="page-section-btns">
      <view onTap="chooseLocation">choose Location</view>
    </view>
  </view>
</view>
```

```js title="JavaScript"
// API-DEMO page/API/choose-location/choose-location.js
Page({
  data: {
    longitude: '103.873834',
    latitude: '1.355572',
    name: 'Serangoon Stadium',
    address: '33 Yio Chu Kang Rd, Singapore',
  },
  chooseLocation() {
    var that = this
    my.chooseLocation({
         success:(res)=>{
          console.log(JSON.stringify(res))
          that.setData({
            longitude:res.longitude,
            latitude:res.latitude,
            name:res.name,
            address:res.address
          })
        },
        fail:(error)=>{
          my.alert({content: 'failed：'+JSON.stringify(error)});
        },
    });
    },
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
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica una llamada exitosa.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica una llamada fallida.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica la llamada se completa (esto se ejecutará independientemente de si la llamada tiene éxito o falla).</td>
    </tr>
</table>


## Función de devolución de llamada(Callback) de éxito

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>name</td>
        <td>String</td>
        <td>La locación.</td>
    </tr>
    <tr>
        <td>address</td>
        <td>String</td>
        <td>La dirección detallada de la ubicación.</td>
    </tr>
    <tr>
        <td>latitude</td>
        <td>Number</td>
        <td>La latitud que se expresa por un número de punto flotante.El valor varía de -90 a +90, y el número negativo significa latitud sur.</td>
    </tr>
    <tr>
        <td>longitude</td>
        <td>Number</td>
        <td>La longitud que se expresa por un número de punto flotante.El valor varía de -180 a +180, y el número negativo significa longitud oeste.</td>
    </tr>
    <tr>
        <td>provinceName</td>
        <td>String</td>
        <td>La provincia.</td>
    </tr>
    <tr>
        <td>cityName</td>
        <td>String</td>
        <td>La ciudad.</td>
    </tr>
</table>














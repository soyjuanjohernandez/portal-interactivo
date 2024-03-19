---
sidebar_position: 1
---

# my.setKeepScreenOn

Establece si mantener la pantalla encendida, sólo tiene efecto en el mini Programa actual.

## Código de muestra

```js
<!-- API-DEMO page/API/screen/screen.axml-->
<view class="page">
  <view class="page-description">Screen brightness API</view>
  <view class="page-section">
    <view class="page-section-title">Set whether to keep screen on</view>
    <view class="page-section-demo">
      <switch checked="{{status}}" onChange="switchKeepScreenOn"/>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Set screen brightness</view>
    <view class="page-section-demo">
      <slider value="{{brightness}}" max="1" min="0" onChange="sliderChange" step="0.02"/>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Get screen brightness</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getBrightness">Get screen brightness</button>
    </view>
  </view>
</view>
```
```js
// API-DEMO page/API/screen/screen.js
Page({
  data: {
    status: false,
    brightness: 1,
  },
  onLoad() {
    my.getScreenBrightness({
      success: res => {
        this.setData({
          brightness: res.brightness
        })
      },
    })
  },
  sliderChange(e) {
    my.setScreenBrightness({
      brightness: e.detail.value,
      success: (res) => {
        this.setData({
          brightness: e.detail.value,
        })
      }
    })
  },
  switchKeepScreenOn(e) {
    my.setKeepScreenOn({
      keepScreenOn: e.detail.value,
      success: (res) => {
        this.setData({
          status: e.detail.value,
        })
      }
    })
  },
  getBrightness() {
    my.getScreenBrightness({
      success: res => {
        my.alert({
          content: `Current screen brightness: ${res.brightness}`
        });
      }
    })
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
        <td>keepScreenOn</td>
        <td>Boolean</td>
        <td>Si</td>
        <td>Si mantener la pantalla encendida.</td>
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


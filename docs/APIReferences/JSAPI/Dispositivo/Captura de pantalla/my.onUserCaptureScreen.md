---
sidebar_position: 1
---

# my.onUserCaptureScreen

Escuche el evento de captura de pantalla activa iniciada por el usuario. Esto recibirá toda la notificación del evento de captura de pantalla del sistema o una herramienta de terceros.

## Código de muestra

```js
<!-- API-DEMO page/API/user-capture-screen/user-capture-screen.axml-->
<view class="page">
  <view class="page-description">User screen capture event API</view>
  <view class="page-section">
    <view class="page-section-title">my.onUserCaptureScreen</view>
    <view class="page-section-demo">
      <view>Current status: {{ condition ? "listening on" : 'Listening off' }}</view>
      <view a:if="{{condition}}">
        <button type="primary" onTap="offUserCaptureScreen">Cancel screen capture listening event</button>
      </view>
      <view a:else>
        <button type="primary" onTap="onUserCaptureScreen">Turn on screen capture listening event</button>
      </view>
    </view>
  </view>
</view>
```
```js
// API-DEMO page/API/user-capture-screen/user-capture-screen.js
Page({
  data: {
    condition: false,
  },
  onReady() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: 'Received user screen capture',
      });
    });
  },
  offUserCaptureScreen() {
    my.offUserCaptureScreen();
    this.setData({
      condition: false,
    });
  },
  onUserCaptureScreen() {
    my.onUserCaptureScreen(() => {
      my.alert({
        content: 'Received user screen capture'
      });
    });
    this.setData({
      condition: true,
    });
  },
});
```
---
sidebar_position: 2
---

# my.SDKVersion

Obtenga la versión de Basic Library (solo para referencia).**No confíe en este valor para la lógica del código**.

## Código de muestra
```js
//<!-- API-DEMO page/API/sdk-version/sdk-version.axml-->
<view class="page">
  <view class="page-description">Get version of basic library API</view>
  <view class="page-section">
    <view class="page-section-title">my.SDKVersion</view>
    <view class="page-section-demo">
      <button type="primary" onTap="getSDKVersion">Get version of basic library</button>
    </view>
  </view>
</view>
``` 
``` js
// API-DEMO page/API/sdk-version/sdk-version.js
Page({
  getSDKVersion() {
    my.alert({
      content: my.SDKVersion,
    });
  }, 
});
``` 

## Valor de retorno
String, versión de la biblioteca básica
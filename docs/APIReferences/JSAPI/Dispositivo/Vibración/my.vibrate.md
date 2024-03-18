---
sidebar_position: 1
---

# my.vibrate

Llame a la función vibrar del dispositivo.

## Código de muestra

```js
// API-DEMO page/API/vibrate/vibrate.json
{
    "defaultTitle": "Vibrate"
}
```
```js
<!-- API-DEMO page/API/vibrate/vibrate.axml-->
<view class="page">

  <button type="primary" onTap="vibrate">
    Start vibration 
  </button>

</view>
```
```js
// API-DEMO page/API/vibrate/vibrate.js
Page({
  vibrate() {
    my.vibrate({
      success: () => {
        my.alert({ title: 'Vibration on'});
      }
    });
  },
});
```
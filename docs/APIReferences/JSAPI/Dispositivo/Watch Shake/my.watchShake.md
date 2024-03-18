---
sidebar_position: 1
---

# my.watchShake

La función watchshake. Cada vez que se llama a esta API, se activa una devolución de llamada después de que se agite el teléfono móvil. Debes volver a llamar a esta API para seguir escuchando este evento.

## Código de muestra

```js
// API-DEMO page/API/watch-shake/watch-shake.json
{
    "defaultTitle": "Shake"
}
```
```js
<!-- API-DEMO page/API/watch-shake/watch-shake.axml-->
<view class="page">
  <button type="primary" onTap="watchShake">
    Bind the shake function and click the shake button to see the effect.
  </button>
</view>
```
```js
// API-DEMO page/API/watch-shake/watch-shake.js
Page({
  watchShake() {
    my.watchShake({
      success: function() {
        console.log('It moved')
        my.alert({ title:'It moved o.o'});
      }
    });
  },
});
```
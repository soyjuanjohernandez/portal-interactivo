---
sidebar_position: 2
---

# my.offMemoryWarning

Use esta API para no admitir el evento de alarma de memoria insuficiente.Asegúrese de que el parámetro (devolución de llamada) sea el mismo objeto que el de [onMemoryWarning](./my.onMemoryWarning).


## Código de muestra

```js
// API-DEMO page/API/memory-warning/memory-warning.json
{
   "defaultTitle": "OnMemoryWarning"
}
```
```js
<!-- API-DEMO page/API/memory-warning/memory-warning.axml-->
<view class="page">

  <button type="primary" onTap="onMemoryWarning">
    Listen to Insufficient Memory Alarm Event
  </button>

</view>
```
```js
// API-DEMO page/API/memory-warning/memory-warning.js
Page({
  onLoad() {
    this.callback = (res) => {
        var levelString = 'iOS device, No alarm level exists.';
        switch (res.level) {
          case 10:
            levelString = 'Android device, level = TRIM_MEMORY_RUNNING_LOW';
            break;
          case 15:
            levelString = 'Android device, level = TRIM_MEMORY_RUNNING_CRITICAL';
            break;
        }
        my.alert({
          title: 'Received insufficient memory alarm',
          content: levelString
        });
    };
    this.isApiAvailable = my.canIUse('onMemoryWarning');
  },
  onMemoryWarning() {
    if (this.isApiAvailable) {
      my.onMemoryWarning(this.callback);
    } else {
      my.alert({
        title: 'Client version is too low',
        content: 'my.onMemoryWarning() and my.offMemoryWarning() need 10.1.35 or higher versions'
      });
    }
  },
  onUnload() {
    if (this.isApiAvailable) {
      my.offMemoryWarning(this.callback); 
    }
  }
});
```

## Pasar o no el valor de la devolución de llamada

* Si no se pasa el valor de devolución de llamada, se eliminarán las devoluciones de llamada de todos los eventos.El código de muestra es el siguiente:
```js
my.offMemoryWarning();
```
* Si se pasa el valor de devolución de llamada, solo se elimina la devolución de llamada correspondiente.El código de muestra es el siguiente:
```js
my.offMemoryWarning(this.callback);
```
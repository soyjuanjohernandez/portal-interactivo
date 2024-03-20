---
sidebar_position: 1
---

# my.onMemoryWarning

Use esta API para escuchar el evento de alarma de memoria insuficiente.

Para Android, existen dos niveles de alarma:

- ```TRIM_MEMORY_RUNNING_LOW```
- ```TRIM_MEMORY_RUNNING_CRITICAL```

No hay nivel de alarma disponible para iOS.


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
## Parámetros
La propiedad es una función de devolución de llamada que utiliza propiedades de objeto con la siguiente propiedad:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>level</td>
        <td>Número</td>
        <td>Nivel de alarma de memoria, solo disponible en Android.</td>
     </tr>
</table>

Niveles de alarma de Android que corresponden a las definiciones macro del sistema:

```js
int TRIM_MEMORY_RUNNING_LOW = 10
int TRIM_MEMORY_RUNNING_CRITICAL = 15
```
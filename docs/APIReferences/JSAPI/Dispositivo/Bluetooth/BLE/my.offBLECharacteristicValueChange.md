---
sidebar_position: 6
---

# my.offBLECharacteristicValueChange

Use esta API para que no sean con el evento de cambio característico del dispositivo BLE.

:::info[NOTA]
Actualmente, la simulación en IDE no es compatible.Depurar en el entorno de producción.
:::

## Código de muestra

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onBLECharacteristicValueChange(this.callback);
  },
  onUnload() {
    my.offBLECharacteristicValueChange(this.callback);
  },
  callback(res) {
    console.log(res);
  },
})
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>deviceId</td>
        <td>String</td>
        <td>La ID del dispositivo Bluetooth.</td>
     </tr>
     <tr>
        <td>serviceId</td>
        <td>String</td>
        <td>El UUID del servicio correspondiente a una característica de Bluetooth.</td>
     </tr>
     <tr>
        <td>characteristicId</td>
        <td>String</td>
        <td>El UUID característico de Bluetooth.</td>
     </tr>
     <tr>
        <td>value</td>
        <td>Hex String</td>
        <td>El último valor hexadecimal de la característica.</td>
     </tr>
</table>

## Pasar o no el valor de la llamada de retorno
* Si no se pasa el valor del callback, se eliminarán los callbacks de todos los eventos. El código de ejemplo es el siguiente:

```js
my.offBLECharacteristicValueChange();
```

* Si se pasa el valor de la llamada de retorno, sólo se eliminará la llamada de retorno correspondiente. El código de ejemplo es el siguiente:

```js
my.offBLECharacteristicValueChange(this.callback);
```

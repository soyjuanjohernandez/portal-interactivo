---
sidebar_position: 5
---

# my.notifyBLECharacteristicValueChange

Utilice esta API para activar la notificación de cambios en las características del dispositivo Bluetooth Low Energy (BLE).

**Instrucciones:**

* Las características del dispositivo deben admitir ```notify``` o ```indicate``` para utilizar esta API. Consulte las propiedades en [my.getBLEDeviceCharacteristics](./my.getBLEDeviceCharacteristics) para más detalles.
* Debe habilitar esta API antes de poder utilizar [my.onBLECharacteristicValueChange](./my.onBLECharacteristicValueChange).
* Tras una suscripción correcta, el dispositivo debe actualizar activamente el valor de la característica para activar [my.onBLECharacteristicValueChange](./my.onBLECharacteristicValueChange).
* La suscripción es más eficaz y se recomienda más que el método de lectura.

:::info[NOTA]
Actualmente la simulación en IDE no está soportada. Por favor, depure en un entorno de producción.
:::

## Código de muestra

```js
my.notifyBLECharacteristicValueChange({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  success: (res) => {
    console.log(res)
  },
  fail:(res) => {
  },
  complete: (res)=>{
  }
});
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>deviceId</td>
        <td>String</td>
        <td>Si</td>
        <td>La ID del dispositivo Bluetooth.</td>
     </tr>
     <tr>
        <td>serviceId</td>
        <td>String</td>
        <td>Si</td>
        <td>El UUID del servicio correspondiente a una característica de Bluetooth.</td>
     </tr>
     <tr>
        <td>characteristicId</td>
        <td>String</td>
        <td>Si</td>
        <td>El UUID característico de Bluetooth.</td>
     </tr>
     <tr>
        <td>descriptorId</td>
        <td>String</td>
        <td>No</td>
        <td>Descriptor UUID de la notificación. Esto es específico de Android, el valor predeterminado es 00002902-0000-10008000-00805F9B34FB.</td>
     </tr>
     <tr>
        <td>state</td>
        <td>Boolean</td>
        <td>No</td>
        <td>Si notificar o indicar está habilitado.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada exitosa a la API.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada a la API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada a la API. Esta función se ejecuta siempre, independientemente de que la llamada se realice correctamente o no.</td>
     </tr>
</table>


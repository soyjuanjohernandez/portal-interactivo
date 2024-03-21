---
sidebar_position: 11
---

# my.writeBLECharacteristicValue

Utilice esta API para escribir datos en las características del dispositivo Bluetooth Low Energy (BLE).

**Instrucciones:**

* Las características del dispositivo deben admitir la escritura para utilizar esta API. Consulte las propiedades en my.getBLEDeviceCharacteristics para más detalles.
* Los datos binarios escritos necesitan codificación hexadecimal.

:::info[NOTA]
Actualmente la simulación en IDE no está soportada. Por favor, depure en un entorno de producción.
:::

## Código de muestra

```js
my.writeBLECharacteristicValue({
  deviceId: deviceId,
  serviceId: serviceId,
  characteristicId: characteristicId,
  value: 'fffe',
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
        <td>value</td>
        <td>Hex String</td>
        <td>Si</td>
        <td>El valor correspondiente a la característica del dispositivo Bluetooth, que es una cadena hexadecimal, limitada a 20 bytes.</td>
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



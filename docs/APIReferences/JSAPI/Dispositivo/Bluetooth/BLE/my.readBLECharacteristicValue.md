---
sidebar_position: 10
---

# my.readBLECharacteristicValue

Utilice esta API para leer los datos de las características del dispositivo Bluetooth Low Energy (BLE). La información devuelta debe obtenerse utilizando la devolución de llamada en [my.onBLECharacteristicValueChange](./my.onBLECharacteristicValueChange).

**Instrucciones:**

* Las características del dispositivo deben soportar lectura para utilizar esta API. Consulte las propiedades en [my.getBLEDeviceCharacteristics](./my.getBLEDeviceCharacteristics]) para obtener más detalles.
* Múltiples llamadas de lectura y escritura en paralelo pueden causar fallos.
* Si se agota el tiempo de lectura, el código de error es 10015. Sin embargo, la interfaz [my.onBLECharacteristicValueChange](./my.onBLECharacteristicValueChange) podría devolver datos más tarde. Por favor, considere cómo manejar esta situación.

:::info[NOTA]
Actualmente la simulación en IDE no está soportada. Por favor, depure en un entorno de producción.
:::

## Código de muestra

```js
my.readBLECharacteristicValue({
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
})
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

### Valor de retorno de éxito

<table>
<tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>characteristic</td>
        <td>Objeto</td>
        <td>Información de la característica del dispositivo.</td>
     </tr>
</table>


### característica

Información sobre las características del dispositivo Bluetooth

<table>
<tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>characteristicId</td>
        <td>String</td>
        <td>El UUID característico de Bluetooth.</td>
     </tr>
     <tr>
        <td>serviceId</td>
        <td>String</td>
        <td>El UUID del servicio correspondiente a una característica de Bluetooth.</td>
     </tr>
     <tr>
        <td>value</td>
        <td>Hex String</td>
        <td>El valor característico de Bluetooth.</td>
     </tr>
</table>



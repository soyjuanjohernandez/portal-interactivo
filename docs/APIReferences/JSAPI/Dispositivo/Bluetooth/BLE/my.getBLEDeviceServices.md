---
sidebar_position: 4
---

# my.getBLEDeviceServices

Use esta API para obtener todos los servicios de dispositivos Bluetooth que están conectados al nativo.

:::info[NOTA]
Actualmente, la simulación en IDE no es compatible. Depurar en el entorno de producción.
:::

## Código de muestra

```js
 //Obtain the services of the connected device
  getBLEDeviceServices() {
    my.getConnectedBluetoothDevices({
      success: res => {
        if (res.devices.length === 0) {
          my.alert({ content: 'No connected devices' });
          return;
        }
        my.getBLEDeviceServices({
          deviceId: this.data.devid,
          success: res => {
            my.alert({ content: JSON.stringify(res) });
            this.setData({
              serid: res.services[0].serviceId,
            });
          },
          fail: error => {
            my.alert({ content: JSON.stringify(error) });
          },
        });
      },
    });
  },
```
## Muestra de valor de retorno

```js
{
    "services": [{
        "isPrimary": true,
        "serviceId": "00001800-0000-1000-8000-00805f9b34fb"
    }, {
        "isPrimary": true,
        "serviceId": "00001801-0000-1000-8000-00805f9b34fb"
    }, {
        "isPrimary": true,
        "serviceId": "d0611e78-bbb4-4591-a5f8-487910ae4366"
    }, {
        "isPrimary": true,
        "serviceId": "9fa480e0-4967-4542-9390-d343dc5d04ae"
    }]
}
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
        <td>services</td>
        <td>Array</td>
        <td>Lista de servicios de dispositivos descubiertos.</td>
     </tr>
</table>


### servicios


<table>
<tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>isPrimary</td>
        <td>Booleano</td>
        <td className='p-no-margin'>
            Este campo indica si el servicio es el servicio principal.Los valores válidos son: 
            ```Verdadero```: el servicio es el servicio principal.

            ```Falso```: el servicio no es el servicio principal.
        </td>
     </tr>
     <tr>
        <td>serviceId</td>
        <td>String</td>
        <td>El UUID del servicio correspondiente a una característica de Bluetooth.</td>
     </tr>
</table>



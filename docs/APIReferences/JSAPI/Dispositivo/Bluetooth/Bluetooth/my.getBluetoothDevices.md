---
sidebar_position: 3
---

# my.getBluetoothDevices

Utilice esta API para obtener todos los dispositivos bluetooth descubiertos, incluidos los que están conectados al dispositivo actual.

**Instrucciones:**

* Es posible que no obtenga el advertisData y RSSI en el simulador. Por favor, depure en el entorno de producción.
* En el entorno de desarrollo integrado (IDE) y en los dispositivos Android, el ID de dispositivo es la dirección MAC del dispositivo; en los dispositivos iOS, el ID de dispositivo es el UUID del dispositivo. Por lo tanto, no codifique el ID de dispositivo. Es necesario procesar el ID de dispositivo en diferentes plataformas; los dispositivos iOS se pueden emparejar dinámicamente basándose en propiedades como localName, advertisData y manufacturerData.

:::info[NOTA:]
Actualmente la simulación en IDE no está soportada. Por favor, depure en el entorno de producción.
:::

## Código de muestra

```js
my.getBluetoothDevices({
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

Los parámetros de entrada se muestran en la siguiente tabla:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
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

### Función de devolución de llamada de éxito

Los parámetros de entrada se muestran en la siguiente tabla:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>devices</td>
        <td>Array</td>
        <td>Una lista de todos los dispositivos que se descubren.</td>
     </tr>
</table>

### Objeto de dispositivo



<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>name</td>
        <td>String</td>
        <td>Nombre del dispositivo Bluetooth (para algunos dispositivos, no hay nombre).</td>
     </tr>
     <tr>
        <td>deviceName(Compatibal with initial version)</td>
        <td>String</td>
        <td>Nombre del dispositivo Bluetooth.</td>
     </tr>
     <tr>
        <td>localName</td>
        <td>String</td>
        <td>Nombre del dispositivo local.</td>
     </tr>
     <tr>
        <td>deviceId</td>
        <td>String</td>
        <td>ID del dispositivo</td>
     </tr>
     <tr>
        <td>RSSI</td>
        <td>Number</td>
        <td>Indicador de resistencia a la señal recibido</td>
     </tr>
     <tr>
        <td>advertisData</td>
        <td>Hex String</td>
        <td>Datos publicitarios del dispositivo</td>
     </tr>
     <tr>
        <td>manufacturerData</td>
        <td>Hex String</td>
        <td>Datos del fabricante del dispositivo</td>
     </tr>
</table>


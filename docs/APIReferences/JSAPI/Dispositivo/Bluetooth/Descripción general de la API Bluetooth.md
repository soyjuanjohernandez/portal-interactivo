---
sidebar_position: 1
---

# Descripción general de la API Bluetooth

Antes de empezar, puedes ver los requisitos del sistema como prerrequisito y luego ver el flujo del proceso sobre cómo funcionan las APIs bluetooth. A continuación, puedes encontrar una descripción general de todas las API bluetooth y un ejemplo de fragmento de código. Además, puedes consultar las FAQ y la tabla de códigos de error para más detalles.

## Requisitos del sistema

<table>
    <tr>
        <th>Bluetooth Type</th>
        <th>Requisitos del sistema</th>
    </tr>
     <tr>
        <td>Bluetooth baja energía(BLE)</td>
        <td className='p-no-margin'>
            Android: 5.0 and upper versions
            
            iOS: no requirements
        </td>
     </tr>
</table>

## Flujo del proceso

El siguiente diagrama ilustra cómo la función Bluetooth está habilitada con API. Puede ver los detalles sobre cómo funciona cada API.

### BLE
![BLE](.\img\BLE.png)

### Bluetooth tradicional

![Bluetooth](.\img\Traditional_Bluetooth.png)

## Lista de API

<table>
    <tr>
        <th>Tipo de Bluetooth</th>
        <th>API</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>BLE</td>
        <td>[my.connectBLEDevice](./BLE/my.connectBLEDevice)</td>
        <td>Conectarse a dispositivos Bluetooth de baja energía.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.disconnectBLEDevice](./BLE/my.disconnectBLEDevice)</td>
        <td>Desconectar dispositivos Bluetooth de baja energía.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.getBLEDeviceCharacteristics](./BLE/my.getBLEDeviceCharacteristics)</td>
        <td>Obtenga las características de los dispositivos Bluetooth de baja energía.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.getBLEDeviceServices](./BLE/my.getBLEDeviceServices)</td>
        <td>Obtenga todos los dispositivos Bluetooth de baja energía que se descubren, incluidos los dispositivos conectados.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.notifyBLECharacteristicValueChange](./BLE/my.notifyBLECharacteristicValueChange)</td>
        <td>Habilite la función para notificar los cambios al valor característico.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.offBLECharacteristicValueChange](./BLE/my.offBLECharacteristicValueChange)</td>
        <td>Deshabilite la función para notificar los cambios al valor característico.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.offBLEConnectionStateChanged](./BLE/my.offBLEConnectionStateChanged)</td>
        <td>Deshabilite el oyente del evento para el estado de conexión.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.onBLECharacteristicValueChange](./BLE/my.onBLECharacteristicValueChange)</td>
        <td>Habilite al oyente del evento para los cambios en el valor característico.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.onBLEConnectionStateChanged](./BLE/my.onBLEConnectionStateChanged)</td>
        <td>Habilite el oyente del evento para los cambios en el estado de conexión, como el dispositivo perdido y el dispositivo desconectado.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.readBLECharacteristicValue](./BLE/my.readBLECharacteristicValue)</td>
        <td>Lea el valor característico.</td>
     </tr>
     <tr>
        <td>BLE</td>
        <td>[my.writeBLECharacteristicValue](./BLE/my.writeBLECharacteristicValue)</td>
        <td>Escriba datos al valor característico.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.openBluetoothAdapter</td>
        <td>Use esta API para inicializar el módulo Bluetooth en el MINI programa.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.closeBluetoothAdapter</td>
        <td>Use esta API para cerrar el módulo Bluetooth en el programa MINI.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.getBluetoothAdapterState</td>
        <td>Use esta API para verificar el estado del adaptador Bluetooth en el mini programa.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.startBluetoothDevicesDiscovery</td>
        <td>Use esta API para comenzar a descubrir dispositivos Bluetooth.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.stopBluetoothDevicesDiscovery</td>
        <td>Use esta API para dejar de descubrir dispositivos Bluetooth.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.getBluetoothDevices</td>
        <td>Use esta API para obtener todos los dispositivos Bluetooth que se descubren, incluidos los que están conectados al dispositivo actual.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.getConnectedBluetoothDevices</td>
        <td>Use esta API para obtener los dispositivos Bluetooth que están conectados.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.onBluetoothDeviceFound</td>
        <td>Use esta API cuando se encuentre un nuevo dispositivo Bluetooth.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.offBluetoothDeviceFound</td>
        <td>Use esta API para eliminar los dispositivos Bluetooth que se encuentran.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.onBluetoothAdapterStateChange</td>
        <td>Use esta API para monitorear los cambios de estado del adaptador Bluetooth.</td>
     </tr>
     <tr>
        <td>Bluetooth</td>
        <td>my.offBluetoothAdapterStateChange</td>
        <td>Use esta API para eliminar el adaptador Bluetooth con un cambio de estado.</td>
     </tr>
</table>

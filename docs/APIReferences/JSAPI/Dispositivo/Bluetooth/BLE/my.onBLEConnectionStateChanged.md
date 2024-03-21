---
sidebar_position: 9
---

# my.onBLEConnectionStateChanged

Utilice esta API para escuchar el evento de error de conexión Bluetooth Low Energy (BLE), incluyendo la pérdida del dispositivo y desconexiones inusuales.

**Instrucciones:**
Se recomienda llamar al método ```off``` y cerrar la escucha de eventos antes de llamar al método ```on``` para escuchar eventos para prevenir la situación en la que múltiples escuchas de eventos causen múltiples devoluciones de llamada de un evento.

:::info[NOTA]
Actualmente la simulación en IDE no está soportada. Por favor, depure en un entorno de producción.
:::

## Código de muestra

```js
/* .acss */
.help-info {
  padding:10px;
  color:#000000;
}

.help-title {
  padding:10px;
  color:#FC0D1B;
}
```
```js
// .json
{
    "defaultTitle": "Bluetooth"
}
```

```js
<!-- .axml-->
<view class="page">
  <view class="page-description">Bluetooth API</view>
  <view class="page-section">
    <view class="page-section-title">The Bluetooth state</view>
    <view class="page-section-demo">
       <button type="primary" onTap="openBluetoothAdapter">Initialize Bluetooth</button>
       <button type="primary" onTap="closeBluetoothAdapter">Close Bluetooth</button>
       <button type="primary" onTap="getBluetoothAdapterState">Obtain Bluetooth state</button>
    </view>

    <view class="page-section-title">Scan the Bluetooth device</view>
    <view class="page-section-demo">
       <button type="primary" onTap="startBluetoothDevicesDiscovery">Start searching</button>
       <button type="primary" onTap="getBluetoothDevices">All devices found</button>
       <button type="primary" onTap="getConnectedBluetoothDevices">All devices connected</button>
       <button type="primary" onTap="stopBluetoothDevicesDiscovery">Stop searching</button>
    </view>

    <view class="page-section-title">Connect the device</view>
    <view class="page-section-demo">
       <input class="input" onInput="bindKeyInput" type="{{text}}" placeholder="Enter the device ID of the device to connect"></input>
       <button type="primary" onTap="connectBLEDevice">Connect the device</button>
       <button type="primary" onTap="getBLEDeviceServices">Obtain device services</button>
       <button type="primary" onTap="getBLEDeviceCharacteristics">Obtain read and write characteristics</button>
       <button type="primary" onTap="disconnectBLEDevice">Disconnect the device</button>
    </view>

     <view class="page-section-title">Read and write data</view>
     <view class="page-section-demo">
       <button type="primary" onTap="notifyBLECharacteristicValueChange">Listens to the characteristic data change</button>
       <button type="primary" onTap="readBLECharacteristicValue">Read data</button>
       <button type="primary" onTap="writeBLECharacteristicValue">Write data</button>
       <button type="primary" onTap="offBLECharacteristicValueChange">Un-listens to characteristic value</button>
    </view>

     <view class="page-section-title">Other events</view>
     <view class="page-section-demo">
       <button type="primary" onTap="bluetoothAdapterStateChange">Changes of the Bluetooth state</button>
       <button type="primary" onTap="offBluetoothAdapterStateChange">Un-listens to Bluetooth state</button>
       <button type="primary" onTap="BLEConnectionStateChanged">Changes of Bluetooth connection state</button>
       <button type="primary" onTap="offBLEConnectionStateChanged">Un-listens to Bluetooth connection state</button>
    </view>
  </view>
</view>
```

```js
// .js
Page({
  data: {
    devid: '0D9C82AD-1CC0-414D-9526-119E08D28124',
    serid: 'FEE7',
    notifyId: '36F6',
    writeId: '36F5',
    charid: '',
    alldev: [{ deviceId: '' }],
  },

  //Obtain the Bluetooth state
  openBluetoothAdapter() {
    my.openBluetoothAdapter({
      success: res => {
        if (!res.isSupportBLE) {
          my.alert({ content: 'Sorry, your mobile Bluetooth is unavailable temporarily' });
          return;
        }
        my.alert({ content: 'Succeeded to initialize!' });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },
  closeBluetoothAdapter() {
    my.closeBluetoothAdapter({
      success: () => {
        my.alert({ content: 'Bluetooth closed!' });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },
  getBluetoothAdapterState() {
    my.getBluetoothAdapterState({
      success: res => {
        if (!res.available) {
          my.alert({ content: 'Sorry, your mobile Bluetooth is unavailable temporarily' });
          return;
        }
        my.alert({ content: JSON.stringify(res) });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

  //Scan the Bluetooth device
  startBluetoothDevicesDiscovery() {
    my.startBluetoothDevicesDiscovery({
      allowDuplicatesKey: false,
      success: () => {
        my.onBluetoothDeviceFound({
          success: res => {
            // my.alert({content:'Listens to new device'+JSON.stringify(res)});
            var deviceArray = res.devices;
            for (var i = deviceArray.length - 1; i >= 0; i--) {
              var deviceObj = deviceArray[i];
              //Pair the target device with the device name or broadcast data, and then record the device ID for later use.
              if (deviceObj.name == this.data.name) {
                my.alert({ content: 'Target device is found' });
                my.offBluetoothDeviceFound();
                this.setData({
                  deviceId: deviceObj.deviceId,
                });
                break;
              }
            }
          },
          fail: error => {
            my.alert({ content: 'Failed to listen to new device' + JSON.stringify(error) });
          },
        });
      },
      fail: error => {
        my.alert({ content: 'Failed to start scanning' + JSON.stringify(error) });
      },
    });
  },

  //Stop scanning
  stopBluetoothDevicesDiscovery() {
    my.stopBluetoothDevicesDiscovery({
      success: res => {
        my.offBluetoothDeviceFound();
        my.alert({ content: 'Succeeded!' });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

  //Obtain the connected device
  getConnectedBluetoothDevices() {
    my.getConnectedBluetoothDevices({
      success: res => {
        if (res.devices.length === 0) {
          my.alert({ content: 'No connecting devices!' });
          return;
        }
        my.alert({ content: JSON.stringify(res) });
        devid = res.devices[0].deviceId;
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

  //Obtain all searched devices
  getBluetoothDevices() {
    my.getBluetoothDevices({
      success: res => {
        my.alert({ content: JSON.stringify(res) });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

  bindKeyInput(e) {
    this.setData({
      devid: e.detail.value,
    });
  },

  //Connect the device
  connectBLEDevice() {
    my.connectBLEDevice({
      deviceId: this.data.devid,
      success: res => {
        my.alert({ content: 'Succeeded to connect!' });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

  //Disconnect the device
  disconnectBLEDevice() {
    my.disconnectBLEDevice({
      deviceId: this.data.devid,
      success: () => {
        my.alert({ content: 'Succeeded to disconnect!' });
      },
      fail: error => {
        my.alert({ content: JSON.stringify(error) });
      },
    });
  },

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

  //Obtain the char ID of the connected device, read and write characteristics are respectively screened out.
  getBLEDeviceCharacteristics() {
    my.getConnectedBluetoothDevices({
  getBLEDeviceCharacteristics() {
    my.getConnectedBluetoothDevices({
      success: res => {
        if (res.devices.length === 0) {
          my.alert({ content: 'No connected devices' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId,
        });
        my.getBLEDeviceCharacteristics({
          deviceId: this.data.devid,
          serviceId: this.data.serid,
          success: res => {
            my.alert({ content: JSON.stringify(res) });
            //See the related document for more information of the properties of the characteristics. Pair the characteristics according to the properties and record the value for later use.
            this.setData({
              charid: res.characteristics[0].characteristicId,
            });
          },
          fail: error => {
            my.alert({ content: JSON.stringify(error) });
          },
        });
      },
    });
  },

  //Read and write data
  readBLECharacteristicValue() {
    my.getConnectedBluetoothDevices({
      success: res => {
        if (res.devices.length === 0) {
          my.alert({ content: 'No connected devices' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId,
        });
        my.readBLECharacteristicValue({
          deviceId: this.data.devid,
          serviceId: this.data.serid,
          characteristicId: this.data.notifyId,
          //1、Android reading service
          // serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
          // characteristicId:'00002a38-0000-1000-8000-00805f9b34fb',
          success: res => {
            my.alert({ content: JSON.stringify(res) });
          },
          fail: error => {
            my.alert({ content: 'Failed to read' + JSON.stringify(error) });
          },
        });
      },
    });
  },

  writeBLECharacteristicValue() {
    my.getConnectedBluetoothDevices({
      success: res => {
        if (res.devices.length === 0) {
          my.alert({ content: 'No connected devices' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId,
        });

        my.writeBLECharacteristicValue({
          deviceId: this.data.devid,
          serviceId: this.data.serid,
          characteristicId: this.data.charid,
          //Android writing service
          //serviceId:'0000180d-0000-1000-8000-00805f9b34fb',
          //characteristicId:'00002a39-0000-1000-8000-00805f9b34fb',
          value: 'ABCD',
          success: res => {
            my.alert({ content: 'Succeeded to write data!' });
          },
          fail: error => {
            my.alert({ content: JSON.stringify(error) });
          },
        });
      },
    });
  },
  notifyBLECharacteristicValueChange() {
    my.getConnectedBluetoothDevices({
      success: res => {
        if (res.devices.length === 0) {
          my.alert({ content: 'No connected devices' });
          return;
        }
        this.setData({
          devid: res.devices[0].deviceId,
        });

        my.notifyBLECharacteristicValueChange({
          state: true,
          deviceId: this.data.devid,
          serviceId: this.data.serid,
          characteristicId: this.data.notifyId,
          success: () => {
            //Listens to characteristic change events 
            my.onBLECharacteristicValueChange({
              success: res => {
                //  my.alert({content: 'Changes of characteristics：'+JSON.stringify(res)});
                my.alert({ content: 'Obtain the response data = ' + res.value });
              },
            });
            my.alert({ content: 'Succeeded to listen' });
          },
          fail: error => {
            my.alert({ content: 'Failed to listen' + JSON.stringify(error) });
          },
        });
      },
    });
  },
  offBLECharacteristicValueChange() {
    my.offBLECharacteristicValueChange();
  },

  //Other events
  bluetoothAdapterStateChange() {
    my.onBluetoothAdapterStateChange(this.getBind('onBluetoothAdapterStateChange'));
  },
  onBluetoothAdapterStateChange() {
    if (res.error) {
      my.alert({ content: JSON.stringify(error) });
    } else {
      my.alert({ content: 'Changes of the Bluetooth state：' + JSON.stringify(res) });
    }
  },
  offBluetoothAdapterStateChange() {
    my.offBluetoothAdapterStateChange(this.getBind('onBluetoothAdapterStateChange'));
  },
  getBind(name) {
    if (!this[`bind${name}`]) {
      this[`bind${name}`] = this[name].bind(this);
    }
    return this[`bind${name}`];
  },
  BLEConnectionStateChanged() {
    my.onBLEConnectionStateChanged(this.getBind('onBLEConnectionStateChanged'));
  },
  onBLEConnectionStateChanged(res) {
    if (res.error) {
      my.alert({ content: JSON.stringify(error) });
    } else {
      my.alert({ content: 'Changes of connection state：' + JSON.stringify(res) });
    }
  },
  offBLEConnectionStateChanged() {
    my.offBLEConnectionStateChanged(this.getBind('onBLEConnectionStateChanged'));
  },
  onUnload() {
    this.offBLEConnectionStateChanged();
    this.offBLECharacteristicValueChange();
    this.offBluetoothAdapterStateChange();
    this.closeBluetoothAdapter();
  },
});
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
        <td>connected</td>
        <td>Boolean</td>
        <td>Estado actual de la conexión.</td>
     </tr>
</table>


---
sidebar_position: 5
---

# my.offBluetoothAdapterStateChange

Utilice esta API para eliminar el adaptador bluetooth con un cambio de estado.

Con el fin de evitar múltiples devoluciones de llamada de un evento, que son el resultado de múltiples oyentes de eventos registrados, se recomienda llamar al método off para escuchar un evento y cerrar el oyente de eventos anterior, antes de llamar al método on.

:::info[NOTA:]
Actualmente la simulación en IDE no está soportada. Por favor, depure en el entorno de producción.
:::

## Código de muestra

```js
my.offBluetoothAdapterStateChange();
```
## Transmitir valores de devolución de llamada
* Si no transmite el valor de devolución de llamada, se eliminarán todas las devoluciones de llamada del oyente de eventos.Consulte la muestra de código a continuación para obtener más información:

```js
my.offBluetoothAdapterStateChange();
```

* Si transmite el valor de devolución de llamada, se eliminarán las devoluciones de llamada correspondientes.Consulte la muestra de código a continuación para obtener más información:

```js
my.offBluetoothAdapterStateChange(this.callback);
```

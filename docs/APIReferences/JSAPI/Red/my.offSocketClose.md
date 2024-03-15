---
sidebar_position: 14
---

# my.offSocketClose

Use esta API para no admitir en el caso de deshabilitar la conexión WebSocket.

## Código de muestra

```js
Page({
  onLoad() {
  my.onSocketClose(this.callback);
  },
  onUnload() {
    my.offSocketClose(this.callback);
    //    my.offSocketClose();
  },
  callback(res) {
  my.alert({content: 'The connection is disabled!'});
      this.setData({
        sendMessageAbility: false,
        closeLinkAbility: false,
      });
  },
})
```
:::info[NOTA]
El caso es solo como referencia. Utilice su propia URL para probar.
:::

## Pasar o no el valor de la devolución de llamada

* Si no se pasa el valor de devolución de llamada, se eliminarán las devoluciones de llamada de todos los eventos.El código de muestra es el siguiente:

```js
my.offSocketClose();
```

* Si se pasa el valor de devolución de llamada, solo se elimina la devolución de llamada correspondiente.El código de muestra es el siguiente:

```js
my.offSocketClose(this.callback);
```
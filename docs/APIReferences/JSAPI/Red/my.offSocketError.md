---
sidebar_position: 8
---

# my.offSocketError

Use esta API para no admitir eventos de error de WebSocket.

## Código de muestra

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onSocketError(this.callback);
  },
  onUnload() {
    my.offSocketError(this.callback);
  },
  callback(res) {
  },
})
```
:::info[NOTA]
El caso es solo como referencia. Utilice su propia URL para probar.
:::

## Pasar o no el valor de la devolución de llamada

* Si no se pasa el valor de devolución de llamada, se eliminarán las devoluciones de llamada de todos los eventos.El código de muestra es el siguiente:

```js
my.offSocketError();
```

* Si se pasa el valor de devolución de llamada, solo se elimina la devolución de llamada correspondiente.El código de muestra es el siguiente:

```js
my.offSocketError(this.callback);
```
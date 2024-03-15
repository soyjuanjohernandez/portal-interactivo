---
sidebar_position: 11
---

# my.offSocketMessage

Use esta API para no admitir en el caso de recibir mensajes del servidor por WebSocket.

## Código de muestra

```js
my.connectSocket({
  url: 'Server URL'
})

my.onSocketMessage(function(res) {
  console.log('Server content received：' + res.data)
})

my.offSocketMessage();
```
:::info[NOTA]
El caso es solo como referencia. Utilice su propia URL para probar.
:::

## Pasar o no el valor de la devolución de llamada

* Si no se pasa el valor de devolución de llamada, se eliminarán las devoluciones de llamada de todos los eventos.El código de muestra es el siguiente:

```js
my.offSocketMessage();
```

* Si se pasa el valor de devolución de llamada, solo se elimina la devolución de llamada correspondiente.El código de muestra es el siguiente:

```js
my.offSocketMessage(this.callback);
```
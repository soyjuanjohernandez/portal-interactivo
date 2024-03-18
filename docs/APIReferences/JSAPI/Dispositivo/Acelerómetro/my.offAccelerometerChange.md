---
sidebar_position: 2
---

# my.offAccelerometerChange

Use esta API para dejar de escuchar el evento de datos de aceleración.

## Código de muestra

```js
my.offAccelerometerChange();
```
## Pasar o no el valor de la devolución de llamada

* Si no se pasa el valor de devolución de llamada, se eliminarán las devoluciones de llamada de todos los eventos.El código de muestra es el siguiente:

```js
my.offAccelerometerChange();
```

* Si se pasa el valor de devolución de llamada, solo se elimina la devolución de llamada correspondiente.El código de muestra es el siguiente:

```js
my.offAccelerometerChange(this.callback);
```
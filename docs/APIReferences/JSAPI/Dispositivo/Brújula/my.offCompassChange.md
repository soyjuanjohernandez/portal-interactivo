---
sidebar_position: 2
---

# my.offCompassChange

Use esta API para no admitir los datos de la brújula.

## Código de muestra

```js
my.offCompassChange();
```
## Pasar o no el valor de la llamada de retorno

* Si no se pasa el valor de devolución de llamada, se eliminarán las devoluciones de llamada de todos los eventos.El código de muestra es el siguiente:

```js
my.offCompassChange();
```
* Si se pasa el valor de devolución de llamada, solo se elimina la devolución de llamada correspondiente.El código de muestra es el siguiente:

```js
my.offCompassChange(this.callback);
```
---
sidebar_position: 7
---

# my.offUnhandledRejection
No se enciende para el evento de *detección de no control*.

## Código de muestra

```js
//.js
App({
  onShow(options) {
    const handleRejection = (res) => {
      console.log(res.reason);
      console.log(res.promise);
    }
    my.onUnhandledRejection(handleRejection);
    my.offUnhandledRejection(handleRejection);
  }
})
```
## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>callback</td>
        <td>Función</td>
        <td>El evento de *unhandledrejection* se desencadena cuando se rechaza una ```promesa``` de JavaScript que no tiene un controlador de rechazo.</td>
     </tr>
</table>

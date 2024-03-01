---
sidebar_position: 8
---

# my.onUnhandledRejection
Escuche el evento de *unhandledrejection*. El evento de u*nhandledrejection* se desencadena cuando se rechaza una ```promesa``` de JavaScript que no tiene un controlador de rechazo.La hora activada de la devolución de llamada para el evento de *unhandledrejection* y los parámetros requeridos son los mismos con los del método [onUnhandledRejection()](/).

## Código de muestra

```js
//.js
App({
  onShow(options) {
    my.onUnhandledRejection((res) => {
      console.log(res.reason);
      console.log(res.promise);
    });
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
        <td>El evento de *unhandledrejection* se desencadena cuando se rechaza una [promesa](/) de JavaScript que no tiene un controlador de rechazo.</td>
      </tr>
</table>

## Función de devolución de llamada

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>razón</td>
        <td>String</td>
        <td>Razón de rechazo, que generalmente es el objeto de error.</td>
      </tr>
      <tr>
        <td>promesa</td>
        <td>Promise</td>
        <td>El objeto de promesa rechazado.</td>
      </tr>
</table>

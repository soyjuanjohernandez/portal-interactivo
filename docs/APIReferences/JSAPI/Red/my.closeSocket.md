---
sidebar_position: 12
---

# my.closeSocket

Use esta API para deshabilitar la conexión [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).

## Código de muestra

```js
my.onSocketOpen(function() {
  my.closeSocket()
})

my.onSocketClose(function(res) {
  console.log('The WebSocket is closed!')
})
```
:::info[NOTA]
El caso es solo como referencia. Utilice su propia URL para probar.
:::

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada exitosa a la API.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada API.Esta función siempre se ejecuta sin importar que la llamada tenga éxito o falle.</td>
     </tr>
</table>

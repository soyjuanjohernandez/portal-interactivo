---
sidebar_position: 7
---

# my.onSocketError

Use esta API para escuchar eventos de error de WebSocket.

## Código de muestra

```js
my.connectSocket({
  url: 'Developer's server URL'
});

my.onSocketOpen(function(res){
  console.log('The WebSocket connection is enabled!');
});

my.onSocketError(function(res){
  console.log('The WebSocket connection failed. Please check!');
});
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
        <td>callback</td>
         <td>Función</td>
        <td>Si</td>
        <td>La función de devolución de llamada para el evento de error WebSocket.</td>
     </tr>
</table>

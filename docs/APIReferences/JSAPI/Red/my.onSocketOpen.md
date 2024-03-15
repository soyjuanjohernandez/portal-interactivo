---
sidebar_position: 5
---

# my.onSocketOpen

Use esta API para escuchar el evento de habilitar la conexión WebSocket.

## Código de muestra

```js
my.connectSocket({
  url: 'test.php',
});

my.onSocketOpen(function(res) {
  console.log('The WebSocket connection is enabled!');
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
        <td>La función de devolución de llamada para el evento de habilitar la conexión WebSocket.</td>
     </tr>
</table>

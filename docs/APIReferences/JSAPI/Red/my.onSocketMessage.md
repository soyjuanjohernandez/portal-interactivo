---
sidebar_position: 10
---

# my.onSocketMessage

Use esta API para escuchar el evento de recibir mensajes del servidor por WebSocket.

## Valor de devolución de devolución de llamada

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>data</td>
        <td>String / ArrayBuffer</td>
        <td>Mensajes devueltos por el servidor, en cadena de texto o cadena codificada Base64.</td>
     </tr>
     <tr>
        <td>isBuffer</td>
        <td>Booleano</td>
        <td>Si el valor de este campo es verdadero, el campo de datos representa las cadenas binarias codificadas Base64 recibidas.Si el valor de este campo está vacío, el campo de datos representa cadenas normales.</td>
     </tr>
</table>


## Código de muestra

```js
my.connectSocket({
  url: 'Server URL'
})

my.onSocketMessage(function(res) {
  console.log('Server content received：' + res.data)
})
```
:::info[NOTA]
El caso es solo como referencia. Utilice su propia URL para probar.
:::



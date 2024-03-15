---
sidebar_position: 9
---

# my.sendSocketMessage

Utilice esta API para enviar datos a través de una conexión WebSocket. Llame primero a [my.connectSocket](./my.connectSocket) y envíe los datos después de la llamada de retorno [my.onSocketOpen](./my.onSocketOpen).

## Código de muestra

```js
my.sendSocketMessage({
    data: this.data.toSendMessage, // The data to be sent
    success: (res) => {
        my.alert({content: 'The data sent!' + this.data.toSendMessage});
    },
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
        <td>data</td>
        <td>String</td>
        <td>Si</td>
        <td>Los datos que se enviarán, en cadena de texto o cadena codificada Base64.</td>
     </tr>
     <tr>
        <td>isBuffer</td>
        <td>Booleano</td>
        <td>No</td>
        <td>Si el valor de este campo es verdadero, el campo de datos representa las cadenas binarias codificadas Base64 recibidas.Si el valor de este campo está vacío, el campo de datos representa cadenas normales.</td>
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

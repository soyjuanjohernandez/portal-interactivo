---
sidebar_position: 13
---

# my.onSocketClose

Use esta API para escuchar el evento de deshabilitar la conexión WebSocket.

## Código de muestra

```js
onLoad() {
    // Note: The registration of callback only needs to be done once during the start-up phase of the Mini Program, multiple calls have multiple callbacks.
    my.onSocketClose((res) => {
      my.alert({content: 'The connection is disabled!'});
      this.setData({
        sendMessageAbility: false,
        closeLinkAbility: false,
      });
    });
    // Note: The registration of callback only needs to be done once during the start-up phase of the Mini Program, multiple calls have multiple callbacks.
    my.onSocketOpen((res) => {
      my.alert({content: 'The connection is enabled!'});
      this.setData({
        sendMessageAbility: true,
        closeLinkAbility: true,
      });
    });

    my.onSocketError(function(res){
      my.alert('The webSocket connection fails. Please check!' + res);
    });

    // Note: The registration of callback only needs to be done once during the start-up phase of the Mini Program, multiple calls have multiple callbacks.
    my.onSocketMessage((res) => {
      my.alert({content: 'Data received!' + JSON.stringify(res)});
    });
  }

connect_start() {
    my.connectSocket({
      url: 'Server URL', // The developer server interface URL must use WSS protocol and the domain name must be a legitimate one configured in the backend.
      success: (res) => {
        my.showToast({
          content: 'success', // Text content
        });
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // Text content
        });
      }
    });
  },
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
        <td>La función de devolución de llamada para el evento de deshabilitar la conexión WebSocket.</td>
     </tr>
</table>

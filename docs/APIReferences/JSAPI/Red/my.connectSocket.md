---
sidebar_position: 4
---

# my.connectSocket

Use esta API para crear una conexión [WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket).Un mini programa solo puede tener una conexión WebSocket a la vez. Si ya existe una conexión WebSocket cuando se crea una nueva, la existente se deshabilitará automáticamente.

## Código de muestra

```js
my.connectSocket({
  url: 'test.php',
  data: {},
  header:{
    'content-type': 'application/json'
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
        <td>url</td>
        <td>String</td>
        <td>Si</td>
        <td className='p-no-margin'>
            La dirección de la interfaz del servidor de destino.

            **Nota**: Algunos mini programas recientemente lanzados solo admiten el protocolo WSS.
         </td>
     </tr>
     <tr>
        <td>data</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Los parámetros de solicitud.</td>
     </tr>
     <tr>
        <td>header</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Encabezado de la solicitud.</td>
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

## Código de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Descripción</th>
        <th>Solución</th>
    </tr>
     <tr>
        <td>1</td>
        <td>Un error desconocido.</td>
        <td>-</td>
     </tr>
     <tr>
        <td>2</td>
        <td>Ya existe una conexión de red.</td>
        <td>Un Mini Programa sólo puede mantener una conexión WebSocket durante un periodo de tiempo. Si ya existe una conexión WebSocket cuando se crea una nueva, la existente se desactivará automáticamente.</td>
     </tr>
     <tr>
        <td>3</td>
        <td>El parámetro URL es nulo.</td>
        <td>Reemplace el enlace de URL.</td>
     </tr>
     <tr>
        <td>4</td>
        <td>Un formato de URL no reconocido.</td>
        <td>Reemplace el enlace de URL.</td>
     </tr>
     <tr>
        <td>5</td>
        <td>La URL debe comenzar con WS o WSS.</td>
        <td>Reemplace el enlace de URL.</td>
     </tr>
     <tr>
        <td>6</td>
        <td>Tiempo de conexión agotado.</td>
        <td>Inténtalo de nuevo más tarde.</td>
     </tr>
     <tr>
        <td>7</td>
        <td>El certificado HTTPS devuelto por el servidor no es válido.</td>
        <td>El MiniPrograma debe iniciar una petición de red utilizando HTTPS/WSS.  Cuando se envía una petición, se comprueba el certificado HTTPS del nombre de dominio del servidor. Si la comprobación falla, la petición no puede iniciarse con éxito.  Debido a las limitaciones del sistema, las diferentes plataformas tienen diferentes requisitos para los certificados. Para garantizar la compatibilidad de los Mini Programas, se recomienda a los desarrolladores que configuren los certificados de acuerdo con los estándares más exigentes y que utilicen las herramientas pertinentes para comprobar los certificados existentes y asegurarse de que son válidos.</td>
     </tr>
     <tr>
        <td>8</td>
        <td>El encabezado del protocolo devuelto por el servidor no es válido.</td>
        <td>A partir de mayo de 2019, los miniprogramas de nueva creación deberán utilizar los protocolos HTTPS y WSS por defecto y no se admitirán los protocolos HTTP y WS.</td>
     </tr>
     <tr>
        <td>9</td>
        <td>No se ha especificado el encabezado de solicitud Sec-WebSocket-Protocol para la solicitud WebSocket.</td>
        <td>Especifique el encabezado de solicitud Sec-WebSocket-Protocolo.</td>
     </tr>
     <tr>
        <td>10</td>
        <td>La red no está disponible y el mensaje no se puede enviar.</td>
        <td className='p-no-margin'>
            Llama a [my.sendSocketMessage](./my.sendSocketMessage) para enviar un mensaje de datos después de conectarte al servidor normalmente. Utilice [my.onSocketOpen](./my.onSocketOpen) para comprobar si la conexión con el servidor es correcta.

            **Nota:**

            Para enviar datos a través de una conexión WebSocket, es necesario utilizar my.connectSocket para iniciar la conexión en primer lugar, y luego llamar a [my.sendSocketMessage](./my.sendSocketMessage) para enviar datos después de la devolución de llamada [my.onSocketOpen](./my.onSocketOpen).
         </td>
     </tr>
     <tr>
        <td>11</td>
        <td>No se pudo enviar un mensaje.</td>
        <td>Inténtalo de nuevo más tarde.</td>
     </tr>
     <tr>
        <td>12</td>
        <td>No se puede solicitar más memoria para leer datos de red.</td>
        <td>Por favor revise la memoria.</td>
     </tr>
</table>

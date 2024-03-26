---
sidebar_position: 1
---

# /v2/messages/sendInbox

:::info[NOTA]
 Esta API ya no se mantiene. Todas las funcionalidades de esta API se han migrado a la API [```/v2/miniprogram/message/send/```](./v2-miniprogram-message-send). Le recomendamos que utilice la API [```/v2/miniprogram/message/send/```](./v2-miniprogram-message-send) para nuevas funciones o mejoras.
:::

POST ```/v2/messages/sendInbox```

La API ```sendInbox``` se utiliza para que los comerciantes o proveedores de software independientes (ISV) envíen mensajes de bandeja de entrada a los monederos utilizando tokens de acceso. 

## Estructura de mensajes
### Requerimiento

<table>
 <tr>
   <th>Propiedad</th>
   <th>Tipo de datos</th>
   <th>Requerido</th>
   <th>Descripción</th>
   <th>Ejemplo</th>
 </tr>
  <tr>
   <td>accessToken</td>
   <td>String </td>
   <td>Sí</td>
   <td>Un token de acceso que se usa para enviar mensajes de bandeja de entrada.Max.Longitud: 128 caracteres.</td>
   <td>"2019112719074101000700000077771xxxx"</td>
  </tr>
  <tr>
   <td>authClientId</td>
   <td>String </td>
   <td>No</td>
   <td>La identificación de cliente de autenticación única Max.Longitud: 128 caracteres.</td>
   <td>"202016726873874774774xxxx"</td>
  </tr>
  <tr>
   <td>requestId</td>
   <td>String </td>
   <td>Sí</td>
   <td>El ID único para identificar una solicitud en una transacción. Es idempotente, lo que significa que si la llamada a la API tiene el mismo resultado no importa cuántas veces se aplique la llamada a la API. Por ejemplo, si hay el mismo requestId almacenado, devuelve el resultado almacenado relacionado con el mismo requestId . Significa que el mismo requestId sólo envía el mensaje una vez. Longitud máxima: 128 caracteres.</td>
   <td>"20191127190741010007013213123xxxx"</td>
  </tr>
  <tr>
   <td>templateCode</td>
   <td>String</td>
   <td>Sí</td>
   <td>Un código único para distinguir diferentes plantillas de contenido.Max.Longitud: 256 caracteres.</td>
   <td>"TP_5800000001xxxx"</td>
  </tr>
  <tr>
   <td>templates</td>
   <td>Array[```<ContentTemplate>```](./)</td>
   <td>Sí</td>
   <td>Una lista de plantillas de contenido de mensajes de bandeja de entrada para enviar.El tamaño máximo de la matriz es cinco.</td>
   <td>
    ```js
    [
        {
            "templateParameters": {
                "who": "string to represent a name, e.g. XiaoMing"
            },
            "language": "en-US"
        }
    ]
    ```
   </td>
  </tr>
  <tr>
   <td>extendInfo</td>
   <td>String</td>
   <td>No</td>
   <td>La extensa información.Las billeteras y los comerciantes pueden agregar información adicional en esta propiedad. Max.Longitud: 4096 caracteres.</td>
   <td>"Esta es información adicional"</td>
  </tr>
</table>

### Respuesta

<table>
 <tr>
   <th>Propiedad</th>
   <th>Tipo de datos</th>
   <th>Requerido</th>
   <th>Descripción</th>
   <th>Ejemplo</th>
 </tr>
  <tr>
   <td>result</td>
   <td>Result</td>
   <td>Sí</td>
   <td>El resultado de la solicitud, que contiene información como los códigos de estado y de error.</td>
   <td>
   ```js
   {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
  }
   ```
   </td>
  </tr>
  <tr>
   <td>messageId</td>
   <td>String</td>
   <td>No</td>
   <td>La identificación única para identificar un mensaje.Max.Longitud: 258 caracteres.</td>
   <td>"20201235900212xxxx"</td>
  </tr>
  <tr>
   <td>extendInfo</td>
   <td>String</td>
   <td>No</td>
   <td>La información adicional.Max.Longitud: 4096 caracteres.</td>
   <td>"Esta es información adicional"</td>
  </tr>
</table>

#### Lógica del proceso de resultados

En la respuesta, el campo ```result.resultStatus``` indica el resultado del procesamiento de una solicitud de la siguiente manera:

<table>
 <tr>
   <th>resultStatus</th>
   <th>Descripción </th>
 </tr>
  <tr>
   <td>S</td>
   <td>Significa que el envío de mensajes de la bandeja de entrada mediante tokens de acceso se ha realizado correctamente. El ```result.resultCode``` correspondiente es "SUCCESS" y el ```result.resultMessage``` es "Success".</td>
  </tr>
  <tr>
   <td>A</td>
   <td>La solicitud es aceptada por los monederos. El ```result.resultCode``` correspondiente es "ACCEPT"; y el ```result.resultMessage``` varía en función de las distintas situaciones. </td>
  </tr>
  <tr>
   <td>U</td>
   <td>Significa que se ha producido una excepción desconocida en el monedero, por lo que el vendedor o ISV puede volver a intentarlo. El ```result.resultCode``` correspondiente es "UNKNOWN_EXCEPTION" y ```result.resultMessage``` es "Ha fallado una llamada a la API, causada por razones desconocidas". Para más detalles, consulte la sección [Códigos de error comunes(./)].</td>
  </tr>
  <tr>
   <td>F</td>
   <td>Significa que falla el envío de mensajes de la bandeja de entrada mediante tokens de acceso.Los correspondientes ```result.resultCode``` y ```result.resultMessage``` varían en función de las distintas situaciones. Para más detalles, consulte la siguiente sección [Códigos de error](./).</td>
  </tr>
</table>

### Códigos de error   

Los códigos de error suelen clasificarse en las siguientes categorías:

* [Códigos de error comunes](./): son comunes para todas las OpenAPI de Mini Program.  
* Códigos de error específicos de la API: se enumeran en la siguiente tabla.

<table>
 <tr>
   <th>Propiedad</th>
   <th>Tipo de datos</th>
   <th>Requerido</th>
   <th>Descripción</th>
   <th>Ejemplo</th>
 </tr>
  <tr>
   <td>result</td>
   <td>Result</td>
   <td>Sí</td>
   <td>El resultado de la solicitud, que contiene información como los códigos de estado y de error.</td>
   <td>
   ```js
   {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
  }
   ```
   </td>
  </tr>
  <tr>
   <td>messageId</td>
   <td>String</td>
   <td>No</td>
   <td>La identificación única para identificar un mensaje.Max.Longitud: 258 caracteres.</td>
   <td>"20201235900212xxxx"</td>
  </tr>
  <tr>
   <td>extendInfo</td>
   <td>String</td>
   <td>No</td>
   <td>La información adicional.Max.Longitud: 4096 caracteres.</td>
   <td>"Esta es información adicional"</td>
  </tr>
</table>

#### Lógica del proceso de resultados

En la respuesta, el campo ```result.resultStatus``` indica el resultado del procesamiento de una solicitud de la siguiente manera:

<table>
 <tr>
   <th>resultStatus</th>
   <th>resultCode</th>
   <th>resultMessage</th>
   <th>Otras acciones</th>
 </tr>
  <tr>
   <td>F</td>
   <td>INVALID_ACCESS_TOKEN</td>
   <td>El token de acceso no es válido.</td>
   <td>Reinicie la OAuth nuevamente o actualice el token y vuelva a intentarlo.</td>
  </tr>
  <tr>
   <td>F</td>
   <td>INVALID_AUTH_CLIENT</td>
   <td>La identificación del cliente de autenticación no es válida.</td>
   <td>El AuthClientId es el APPID para mini programas. Compruebe si el appId es correcto; En caso afirmativo, comuníquese con su proveedor de servicios.</td>
  </tr>
  <tr>
   <td>F</td>
   <td>USER_STATUS_ERROR</td>
   <td>El estado de la cuenta de usuario es incorrecto.</td>
   <td>La cuenta de usuario puede estar bloqueada o no registrada.</td>
  </tr>
  <tr>
   <td>F</td>
   <td>VERIFY_REQUEST_ID_INVALID</td>
   <td>La ID de solicitud no es válida.</td>
   <td>Verifique el formato del SolicitId y vuelva a intentarlo.</td>
  </tr>
</table>

## Ejemplo

![Ejemplo](.\img\ejemplo.JPG)

1. Los comerciantes envían una solicitud para enviar mensajes de entrada a los monederos mediante un token de acceso
2. Los monederos devuelven un messsageId a los comerciantes

### Requerimiento

```js
{
    "accessToken": "2019112719074101000700000077771xxxx",
    "authClientId": "202016726873874774774xxxx",
    "requestId": "20191127190741010007013213123xxxx",
    "templateCode": "TP_5800000001xxxx",
    "templates": [
        {
            "templateParameters": {
                "who": "string to represent a name"
            },
            "language": "en-US"
        }
    ],
    "extendInfo": "This is additional information"
}
```

### Respuesta

```js
{
  "messageId": "20201235900212xxxx",
  "extendInfo": "This is additional information",
  "result": {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
 }
}
```
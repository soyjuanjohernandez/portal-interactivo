---
sidebar_position: 1
---

# /v2/miniprogram/message/send

POST ```/v2/miniprogram/message/send```

Con esta llamada API, un comerciante puede enviar una notificación de servicio a los usuarios a través de la plataforma de mini programa, como el resultado del pago, el estado del pedido, etc.

## Estructura
Un mensaje consta de una cabecera y un cuerpo. Las secciones siguientes se centran en la estructura del cuerpo. Para la estructura de la cabecera, véase:  

* [Request header](../../../Descrición%20general.md)
* [Response header](../../../Descrición%20general.md)

### Parámetros de solicitud

<table>
 <tr>
   <th>Propiedad</th>
   <th>Tipo de datos</th>
   <th>Requerido</th>
   <th>Descripción</th>
   <th>Ejemplo</th>
 </tr>
  <tr>
   <td>appId</td>
   <td>String</td>
   <td>Sí</td>
   <td className='p-no-margin'>
      Indica la ID única asignada por la plataforma Mini Program para identificar un mini programa. 
      * Longitud del máximo: 32 
      * caracteres no permitidos: caracteres especiales como @ # ?

      **Nota:** Obtenga este campo a través de la plataforma [my.getAppIdSync](/) JSAPI o Mini Program.
    </td>
   <td>"P000000000000001xxxx"</td>
  </tr>
  <tr>
   <td>accessToken</td>
   <td>String</td>
   <td>Sí</td>
   <td className='p-no-margin'>
      El token de acceso se utiliza para acceder a la información del usuario.Para obtener la información específica a la que se puede acceder, consulte el [my.getAuthcode](/) JSAPI.
      * Longitud máxima: 128 caracteres.
      * caracteres no permitidos: caracteres especiales como @ # ?
      
      **Nota:** Obtenga este campo a través de la API [/v2/authorizations/applyToken](/).
   </td>
   <td>"2019112719074101000700000077771xxxx"</td>
  </tr>
  <tr>
   <td>customerBelongsTo</td>
   <td>String </td>
   <td>No</td>
   <td className='p-no-margin'>
      Indica la super aplicación que usa el usuario.Los valores válidos son:
      * ```ALIPAY_CN```: Alipay CN 
      * ```ALIPAY_HK```: Alipay HK 
      * ```ALIPAY_MO```: Alipay MO 
      * ```TNG```: Touch 'n Go 
      * ```GCASH```: Gcash 
      * ```DANA```: Dana 
      * ```KAKAOPAY```: KakaoPay 
      * ```BKASH```: bKash 
      * ```CHOPE```: Chope 
      * ```TRUEMONEY```: TrueMoney
  </td>
   <td>"TNG"</td>
  </tr>
  <tr>
   <td>requestId</td>
   <td>String</td>
   <td>Sí</td>
   <td className='p-no-margin'>
      Indica la ID única asignada por el comerciante para identificar una solicitud de entrega de notificaciones. Por ejemplo, cuando el usuario completa un pago en el mini programa en la Super App con capacidad de pago, el valor del *requestId*  puede ser *tradeNo,*, lo que indica la ID de transacción .Consulte [Use tradeNo para pagar](/) más información.
      * Longitud máxima: 64 caracteres
      * Caracteres no permitidos: caracteres especiales como @ # ? 
      
      **Nota:** Este campo es un campo API Idempotency.Para las notificaciones que se envían con el mismo requisito y alcanzan un estado de S, la super aplicación debe devolver el mismo mensaje.Para obtener más información, consulte la idempotencia.
  </td>
   <td>"20191127190741010007013213123xxxx"</td>
  </tr>
  <tr>
   <td>templateCode</td>
   <td>String </td>
   <td>Sí</td>
   <td>
      Indica el código único asignado por la plataforma Mini Program para identificar una plantilla. 
      * Longitud máxima: 64 caracteres
      * Caracteres no permitidos: caracteres especiales como @ # ?
  </td>
   <td>"TP_5800000001xxxx"</td>
  </tr>
  <tr>
   <td>templates</td>
   <td>Array[```<ContentTemplate>```](/)</td>
   <td>Sí</td>
   <td>
      Las plantillas son creadas por la super app para que el comerciante pueda personalizar el contenido y el diseño de las notificaciones. 
      * Tamaño máximo: 5 elementos
  </td>
   <td>
      * PUSH
      ```js
      [
        {
          "templateParameters": {
          // Una clave es la variable predefinida en la plantilla.Cada clave tiene un valor que se puede definir por usted mismo.
          "pushContentUrl": "http://www.taobao.com",
          "customTitle": "test title",
          "customContent": "test content"
          },
        "language": "en-US"
        } 
      ]
       ```
       * SMS
        ```js
        [
          {
            "templateParameters": {
            // Una clave es la variable predefinida en la plantilla. Cada clave tiene un valor que se puede definir por usted mismo.
            "customContent": "test content"
            },
          "language": "en-US"
          }
        ]
        ```
        * Inbox
        ```js
          [
            {
              "templateParameters": {
              // Una clave es la variable predefinida en la plantilla. Cada clave tiene un valor que se puede definir por usted mismo.
              "headerLink": "http://www.taobao.com",
              "bodyUrl": "http://www.taobao.com",
              "firstLinkName": "hello",
              "firstLinkUrl": "linkName",
              "customTitle": "test title",
              "customContent": "test content"
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
    <td className='p-no-margin'>
      Indica la información extendida sobre esta API. 
      * Longitud máxima: 4096 caracteres
      * Caracteres no permitidos: caracteres especiales como @ # ? 
      * Puede ser nulo.
    </td>
    <td>"Esta es información adicional"</td>
  </tr>
</table>

### Parámetros de respuesta

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
   <td>[Result](../Diccionario%20de%20datos%20para%20v2#result)</td>
   <td>Sí</td>
   <td>	Indica el resultado de la solicitud, como los códigos de estado y error.</td>
   <td>
   ```js
   {
    "resultCode": "SUCCESS",
    "resultStatus": "S",
    "resultMessage": "success" 
   }
   ```
   </td>
  </tr>
  <tr>
   <td>messageId</td>
   <td>String</td>
   <td>No</td>
   <td>
      Indica la ID única asignada por la plataforma Mini Program para identificar una notificación.
      * Longitud máxima: 64 caracteres
      * Caracteres no permitidos: caracteres especiales como @ # ?
  </td>
   <td>"000demo163853607887602123986120"</td>
  </tr>
  <tr>
   <td>extendInfo</td>
   <td>String</td>
   <td>No</td>
   <td className='p-no-margin'>
      Indica la información extendida sobre esta API. 
      * Longitud máxima: 4096 caracteres
      * Caracteres no permitidos: caracteres especiales como @ # ? 
      * Puede ser nulo.
    </td>
   <td>"Esta es información adicional"</td>
  </tr>
</table>

#### Lógica del proceso de resultados

En la respuesta, el campo *result.resultStatus* indica el resultado del procesamiento de una solicitud de la siguiente manera:

<table>
 <tr>
   <th>resultStatus</th>
   <th>Descripción </th>
 </tr>
  <tr>
   <td>S</td>
   <td className='p-no-margin'>
     La solicitud de envío de la notificación tiene éxito. 

     Cuando la solicitud tiene éxito, el *resultStatus* es ```S``` independientemente de si la notificación se envía con éxito a la Mini Plataforma de Programas.

     El *result.resultCode* correspondiente es ```SUCCESS``` y el *result.resultMessage* es Success.
  </td>
  </tr>
  <tr>
   <td>U</td>
   <td className='p-no-margin'>
       El estado de la solicitud de entrega de notificaciones es desconocido. 

       El *result.resultCode* correspondiente es ```UNKNOWN_EXCEPTION``` y *result.resultMessage* es "Ha fallado una llamada a la API, por causas desconocidas". Para más detalles, consulte la sección [Códigos de error comunes](/). 
   </td>
  </tr>
  <tr>
   <td>F</td>
   <td className='p-no-margin'>
      La solicitud de entrega de la notificación ha fallado. 

      Los códigos *result.resultCode* y *result.resultMessage* correspondientes varían en función de la situación. Para más detalles, consulte la siguiente sección [Códigos de error](/).
   </td>
  </tr>
</table>

## Códigos de error   

Los códigos de error suelen clasificarse en las siguientes categorías:

* [Códigos de error comunes](/): son comunes para todas las OpenAPI de Mini Program.  
* Los códigos de error específicos de la API se enumeran en la tabla siguiente:.

<table>
 <tr>
   <th>Código de error</th>
   <th>Estado de resultados</th>
   <th>Mensaje de error</th>
   <th>Otras medidas</th>
 </tr>
  <tr>
   <td>TEMPLATE_NOT_EXIST</td>
   <td>F</td>
   <td>The template does not exist.</td>
   <td>Verifique si la ID de plantilla es correcta.</td>
  </tr>
  <tr>
   <td>USER_NOT_SUBSCRIBED</td>
   <td>F</td>
   <td>El usuario no se suscribe a este canal.</td>
   <td>-</td>
  </tr>
  <tr>
   <td>MESSAGE_SEND_EXCEED_LIMIT</td>
   <td>F</td>
   <td>La frecuencia de entrega de la notificación excede los límites establecidos por la super aplicación.</td>
   <td>-</td>
  </tr>
</table>

## EJEMPLO

El flujo de datos a continuación ilustra cómo un comerciante envía notificaciones a un usuario:

![SAMPLE](.\img\ejemplo1.JPG)

1. El comerciante obtiene el *templateCode* de la Plataforma Mini Program. Con el *templateCode*, el comerciante llama a esta API para enviar una solicitud de entrega de notificación a la Plataforma Mini Program.
2. La Mini Plataforma de Programas procesa la solicitud y sustituye el contenido de las variables en la notificación.
3. La Mini Plataforma de Programas envía la notificación final a la super app a través del canal correspondiente de la plantilla.
4. La super app devuelve el resultado de la solicitud de entrega de la notificación a la Mini Plataforma de Programas.
5. La Mini Plataforma de Programas reenvía el resultado al servidor del comerciante.

### Requerimiento

Verifique las siguientes muestras de solicitud de entrega de notificaciones basadas en diferentes canales, incluidos PUSH, SMS y Inbox:

* PUSH
```js
{
  "appId": "P000000000000001xxxx",
  "requestId": "20191129872100000777719901212",
  "accessToken": "2019112719074101000700000077771xxxx",
  "templateCode": "TP_5800000001xxxx",
  "templates": [
    {
      "templateParameters": {
        "pushContentUrl": "http://region.demo.com/app/1092?appId=28972",
        "customTitle": "test title",
        "customContent": "test content"
      },
      "language": "en-US"
    }
  ]
}
```
* SMS
```js
{
  "appId": "P000000000000001xxxx",
  "requestId": "20191129872100000777719901212",
  "accessToken": "2019112719074101000700000077771xxxx",
  "templateCode": "TP_5800000001xxxx",
  "templates": [
    {
      "templateParameters": {
        "customContent": "test content"
      },
      "language": "en-US"
    }
  ]
}
```
* Inbox
```js
{
  "appId": "P000000000000001xxxx",
  "requestId": "20191129872100000777719901212",
  "accessToken": "2019112719074101000700000077771xxxx",
  "templateCode": "TP_5800000001xxxx",  
  "templates": [
    {
      "templateParameters": {
        "headerLink": "http://region.demo.com/cdn?sourceId=90801",
        "bodyUrl": "http://region.demo.com/cdn/index.htm?id=90801",
        "firstLinkName": "hello",
        "firstLinkUrl": "http://region.demo.com/cdn/index.htm?id=9876542",
        "customTitle": "test title",
        "customContent": "test content"
      },
      "language": "en-US"
    }
  ]
}
```

### Respuesta

```js
{
 "result": {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
  }
}
```

## Enlaces relacionados

[my.getAuthCode](/)

[my.getAppIdSync](/)

[/v2/authorizations/applyToken](/)
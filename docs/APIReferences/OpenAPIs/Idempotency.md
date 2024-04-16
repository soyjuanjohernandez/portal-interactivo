---
sidebar_position: 2
---

Si se produce un error de tiempo de espera de solicitud cuando llama a una API, puede intentar reenviar la solicitud. En este caso, puede configurar los campos de Idempotency especificados en la solicitud para ayudar a evitar la duplicación no deseada en caso de fallas y reintentos.

Una llamada API es ideMpotent si tiene el mismo resultado, sin importar cuántas veces se aplique la llamada API. Por ejemplo, Idempotency puede garantizar que el pago se cobre solo una vez si la misma llamada de pago de API se retira varias veces en el caso de un error de tiempo de espera. Puede volver a intentar la solicitud utilizando el mismo campo Idempotency para garantizar que no se cree más de un cargo.

## Idempotency campos

La siguiente tabla enumera los campos de idempotencia de OpenAPI específicos. 

<table>
  <thead>
    <tr>
      <th>  API name             </th>
      <th>Idempotency field</th>
      <th>Rule</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>  /v1/payments/pay      
        /v2/payments/pay</td>
      <td>paymentRequestId</td>
      <td>Este campo se utiliza para el control de idempotencia. Para las solicitudes de pago que se inician con el mismo ```PaymentRequestid``` y alcanzan un estado final (S o F), la aplicación nativa debe devolver el resultado único.</td>
    </tr>
    <tr>
      <td>/v1/payments/refund 
        /v2/payments/refund</td>
      <td>refundRequestId</td>
      <td>Este campo se utiliza para el control de idempotencia.Para las solicitudes de reembolso que se inician con la misma```refundRequestId``` ay alcanzar un estado final (s o f), el nativo debe devolver el resultado único.</td>
    </tr>
    <tr>
      <td>v2/miniprogram/message/send</td>
      <td>requestId</td>
      <td>This field is an API idempotency field. For the notifications which are sent with the same ```requestId``` and reach an S status, the native app must return the same ```messageId```. </td>
    </tr>
    <tr>
      <td>/v2/miniprogram/qrcode/create</td>
      <td>appId, appQrCodePage, appQrCodePage, and appQrCodeParams</td>
      <td>Estos cuatro campos son campos de idempotencia cuando se usan al mismo tiempo. Para el código QR generado con el mismo ```APPID```, ```APPQRCODEPAGE```, ```APPQRCODEPAGE``` y ```APPQRCODEPARAMS``` y alcanzará el mismo estado de código QR y la imagen.</td>
    </tr>
  </tbody>
</table>

    

	


	


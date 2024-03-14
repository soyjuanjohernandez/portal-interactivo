---
sidebar_position: 3
---

## /v1/payments/notifyPayment

POST ```/v1/payments/notifyPayment```

La ```notifyPayment``` La API se utiliza para notificar al resultado del pago a merchant/partner.

**Note**:

1. Para notificar al comerciante/asociar el resultado del pago cuando el procesamiento de pagos llega al estado final (Success/Fail).

2. No todos los escenarios comerciantes/socios necesitan recibir esta notificación.Como escenario de pago de sincronización (B Scan C, Agreement Pay).

## Message structure

### Request

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>partnerId</td>
      <td>String</td>
      <td>Yes</td>
      <td>El socio asignado por la billetera.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>paymentId</td>
      <td>String </td>
      <td>Yes</td>
      <td>La identificación de pago para el pago original correspondiente.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>paymentRequestId</td>
      <td>String </td>
      <td>Yes</td>
      <td>La identificación única de un pago generado por los comerciantes de billetera.Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>paymentAmount</td>
      <td>Amount</td>
      <td>Yes</td>
      <td>Monto del pedido para la visualización de registros de consumo de usuario, página de resultados de pago.</td>
    </tr>
    <tr>
      <td>paymentTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Tiempo de éxito del pago, que sigue al estándar ISO 8601.</td>
    </tr>
    <tr>
      <td>paymentStatus</td>
      <td>String</td>
      <td>Yes</td>
      <td>Éxito: el orden es sucedido.
      FALLO - El orden fallece.</td>
    </tr>
    <tr>
      <td>paymentFailReason</td>
      <td>String </td>
      <td>No</td>
      <td>La orden de pago de la orden de pago cuando el pago de pagos es fallado.
      Max.Longitud: 256 caracteres...</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>    
</table>

### Response


<table>
    <tr>
     <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>result</td>
      <td>Result</td>
      <td>Yes</td>
      <td>El resultado de la solicitud, que contiene información relacionada con el resultado de la solicitud, como los códigos de estado y error.</td>
    </tr>
    <tr>
      <td>refundId</td>
      <td>String </td>
      <td>No	</td>
      <td>Número de pedido de reembolso único.Es obligatorio cuando el resultado.ResultStatus es S.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>refundTime	</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Deducir dinero del tiempo de éxito comercial, después de entonces comenzará a reembolsar dinero al usuario.que sigue el estándar ISO 8601.Es obligatorio cuando el resultado.ResultStatus es S.</td>
    </tr>
    <tr>
      <td>extendInfo	</td>
      <td>String 	</td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>


#### Lógica del proceso de resultados

Para diferentes resultados de solicitud, se deben realizar diferentes acciones. Consulte la siguiente lista para más detalles:

   * Si el valor de **result.resultStatus** es **S**, tEl reembolso es exitoso, merchant/partner puede procesar como éxito.
   * Si el valor de **result.resultStatus** es **F**, El reembolso ha fallado, como causado por la fecha de reembolso que excede la ventana de reembolso permitido (**result.resultCode = REFUND_WINDOW_EXCEED**), como el monto del reembolso mayor que el monto del pago, etc.
   * Si el valor de **result.resultStatus** es **U**, significa reembolso de excepción desconocida, merchant/partner ¿Puede la consulta de reembolso de llamadas? Interface/retry Interfaz de reembolso para consultar para obtener el resultado de reembolso.Lo que necesita notar es el siguiente:

       * Estado (inquiry/retry still get U)  can no configurado para fallar o éxito en merchant/partner sistema.
       * Estado (inquiry/retry still get U) no debe refund/charge a Usuario por fuera de línea(Tal vez hará la pérdida de fondos).

   * Si otra respuesta (casi nunca ocurre),merchant/partner debería procesar como tú.


### Result

<table>
    <tr>
      <th>No	</th>
      <th>Estado de resultados</th>
      <th>Código de resultados</th>
      <th>Resultado</th>
    </tr>
     <tr>
      <td>1</td>
      <td>S	</td>
      <td>SUCCESS	</td>
      <td>Éxito.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>U	</td>
      <td>UNKNOWN_EXCEPTION	</td>
      <td>Se falló una llamada API, que es causada por razones desconocidas.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>U	</td>
      <td>REQUEST_TRAFFIC_EXCEED_LIMIT	</td>
      <td>El tráfico de solicitud excede el límite.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>U	</td>
      <td>REFUND_IN_PROCESS	</td>
      <td>El reembolso está bajo procesamiento.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>F</td>
      <td>REPEAT_REQ_INCONSISTENT	</td>
      <td>Envío repetido, y las solicitudes son inconsistentes.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>F	</td>
      <td>PROCESS_FAIL	</td>
      <td>Se produjo una falla comercial general.No vuelva a intentarlo.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>F	</td>
      <td>PARAM_ILLEGAL	</td>
      <td>Existen parámetros ilegales.Por ejemplo, una entrada no numérica o una fecha no válida.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>F	</td>
      <td>INVALID_API	</td>
      <td>La API llamada no es válida o no activa.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>F	</td>
      <td>ACCESS_DENIED	</td>
      <td>El acceso se niega.</td>
    </tr>
     <tr>
      <td>10</td>
      <td>F</td>
      <td>PARTNER_STATUS_ABNORMAL</td>
      <td>Estado de la pareja anormal.</td>
    </tr>
    <tr>
      <td>11</td>
      <td>F</td>
      <td>ORDER_NOT_EXIST	</td>
      <td>El orden no existe.</td>
    </tr>
     <tr>
      <td>12</td>
      <td>F</td>
      <td>ORDER_STATUS_INVALID	</td>
      <td>El estado del pedido no es válido.</td>
    </tr>
    <tr>
      <td>13</td>
      <td>F</td>
      <td>REFUND_WINDOW_EXCEED	</td>
      <td>Exceder la ventana de reembolso.</td>
    </tr>
    <tr>
      <td>14</td>
      <td>F</td>
      <td>REFUND_AMOUNT_EXCEED	</td>
      <td>El monto total de reembolso ha excedido el monto del pago.</td>
    </tr>
    <tr>
      <td>15</td>
      <td>F</td>
      <td>PARTNER_BALANCE_NOT_ENOUGH	</td>
      <td>El saldo de socios no es suficiente.</td>
    </tr>
    <tr>
      <td>16</td>
      <td>F</td>
      <td>CURRENCY_NOT_SUPPORT	</td>
      <td>La moneda no es compatible.</td>
    </tr>
    <tr>
      <td>17</td>
      <td>F</td>
      <td>EXPIRED_AGENT_TOKEN</td>
      <td>El token de acceso de Mini Program ha caducado.</td>
    </tr>
    <tr>
      <td>18</td>
      <td>F</td>
      <td>INVALID_AGENT_TOKEN	</td>
      <td>El token de acceso del mini programa no es válido.</td>
    </tr>
</table>


## Sample

Por ejemplo, un usuario de billetera solicita un reembolso de 100 USD de un pago exitoso en merchant/partner. Entonces merchant/partner Llamará a la API de reembolso a la billetera para reembolsar el monto al usuario.
[Merchant_Payments](../../img/Merchant_Payments.png)


  1.  User could start refund request from the Mini Program or the merchant cashier （Step 1).
  2.  The merchant server calls ```/v1/payments/refund``` interface to refund (Step 2).
  3.  E-wallet returns the refund result to the merchant server (Step 3).
  4.  The merchant should return the refund result to the Mini Program or the merchant cashier (Step 4).

#### Request 

```js
{
  "partnerId": "P000000000000001xxxx",
  "refundRequestId": "2019112719074101000700000088881xxxx",
  "paymentId": "201911271907410100070000009999xxxx",
  "refundAmount": {
    "currency": "USD",
    "value": "10000"
  },
    "extendInfo": "{\"customerBelongsTo\":\"siteNameExample\"}"
}
```

  * **partnerId** is the unique identifier of merchant/partner, assigned by wallte.
  * **refundRequestId** es la identificación única de esta solicitud de reembolso, generada por merchant/partner, merchant/partner debe asegurarse de que sea único, porque la billetera usará **partnerId** y **refundRequestId** to do idempotent process.
  * **paymentId** es la identificación de pago generada por la billetera, que es el identificador de pago único asociado con este reembolso.
  * **refundAmount** describe 100 USD debe reembolsar al usuario, el monto del reembolso debe ser menor que origin payment amount. The amount to pay out for this **refund.refundAmount.currency** and **paymentAmount.currency** En la solicitud de pago son las mismas.Y si hay múltiples reembolsos Para un pago en particular, el monto total reembolsado exitoso no puede exceder el monto de pago en la transacción de pago.
  * **extendInfo**, Incluye la llave - **customerBelongsTo** tLa billetera electrónica que usa el cliente. Correspondiente al campo '**siteName**' el obtenido de la API'**my.getSiteInfo**', En el mini escenario del programa, esto es obligatorio.

**Nota**:

    paymentId y PaymentRequestid no puede vaciarse, la billetera tiene que averiguar la orden de pago de origen basada en PaymentId opaymentRequestId.

Response 

```js
{
  "result": {
    "resultCode": "SUCCESS",
    "resultStatus": "S",
    "resultMessage": "success"
  },
  "refundId": "2019112719074101000700000019000xxxx",
  "refundTime": "2019-11-27T12:01:01+08:30"
}
```
  *  **result.resultStatus==S** muestra que el reembolso de la billetera es exitoso.
  *  **refundId** se genera por billetera, identifica de manera única el reembolso.
  *  **refundTime** describe la hora de éxito de este reembolso.
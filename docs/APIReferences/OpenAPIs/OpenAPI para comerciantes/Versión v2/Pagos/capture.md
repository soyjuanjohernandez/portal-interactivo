---
sidebar_position: 5
---

# /v2/payments/capture

POST `/v2/payments/capture`  

La API de `capture` se utiliza para capturar el monto total autorizado del pago de la cuenta de un usuario y luego transferir el monto total del pago a la cuenta de un comerciante después de que el usuario confirme la recepción.

Dependiendo de diferentes escenarios, la API de `capture` se puede dividir en los siguientes dos tipos:

- Captura completa

Capturar el monto total de un pago autorizado de una vez. La captura completa es útil para los comerciantes que tienen un proceso de cumplimiento de pedidos en lentitud.

- Capturas múltiples

Capturar el monto total de un pago autorizado varias veces. Las capturas múltiples permiten a los comerciantes cambiar el monto de autorización original cuando el monto del pago se modifica debido al envío, impuestos u otros factores.

# Estructura del mensaje
Un mensaje consta de un encabezado y un cuerpo. Las siguientes secciones se centran en la estructura del cuerpo. Para la estructura del encabezado, consulte:

- [Encabezado de solicitud](/)
- [Encabezado de respuesta](/)

## Solicitud

<table>
<thead>
<tr>
<th>Propiedad</th>
<th>Tipo de Datos</th>
<th>Requerido</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>captureRequestId</td>
<td>String</td>
<td>Yes</td>
<td>El ID único de una captura generado por los comerciantes. Longitud máxima: 64 caracteres</td>
</tr>
<tr>
<td>paymentId</td>
<td>String</td>
<td>Yes</td>
<td>El ID de pago de la autorización original que se va a capturar. Longitud máxima: 64 caracteres</td>
</tr>
<tr>
<td>captureAmount</td>
<td>Amount</td>
<td>No</td>
<td>El monto del pago que se va a capturar. El valor predeterminado es <code>full capture</code>. Para una full capture, es opcional transmitir esta propiedad.</td>
</tr>
<tr>
<td>isLastCapture</td>
<td>boolean</td>
<td>No</td>
<td>La última vez de captura. El valor predeterminado es <code>true</code>, lo que significa la captura por última vez. Cambiar el valor a <code>false</code> provocará otra captura.</td>
</tr>
<tr>
<td>extendInfo</td>
<td>String</td>
<td>No</td>
<td>La información de extensión que los monederos y comerciantes desean describir. Longitud máxima: 4096 caracteres.</td>
</tr>
</tbody>
</table>

## Respuesta

<table>
<thead>
<tr>
<th>Propiedad</th>
<th>Tipo de Datos</th>
<th>Requerido</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>result</td>
<td>[Result](/)</td>
<td>Sí</td>
<td>El resultado de la solicitud, que contiene información como el estado del resultado y los códigos de error.</td>
</tr>
<tr>
<td>captureRequestId</td>
<td>String</td>
<td>No</td>
<td>El ID único de una captura generado por un comerciante. Longitud máxima: 64 caracteres</td>
</tr>
<tr>
<td>captureId</td>
<td>String</td>
<td>No</td>
<td>El ID único para una solicitud de captura generado por el monedero. Longitud máxima: 64 caracteres</td>
</tr>
<tr>
<td>paymentId</td>
<td>String</td>
<td>No</td>
<td>El ID único asignado por un comerciante para identificar una solicitud de pago. Longitud máxima: 64 caracteres</td>
</tr>
<tr>
<td>captureAmount</td>
<td>Monto</td>
<td>No</td>
<td>El monto del pago que se captura para una solicitud.</td>
</tr>
<tr>
<td>captureTime</td>
<td>Fecha y hora</td>
<td>No</td>
<td>El tiempo de procesamiento de una solicitud de captura. El formato del valor sigue el estándar [ISO 8601](/).</td>
</tr>
<tr>
<td>extendInfo</td>
<td>String</td>
<td>No</td>
<td>La información de extensión que los monederos y comerciantes desean describir. Longitud máxima: 4096 caracteres.</td>
</tr>
</tbody>
</table>

### Lógica de procesamiento del resultado

En la respuesta, el campo `result.resultStatus` indica el resultado del procesamiento de una solicitud. La siguiente tabla describe cada estado de resultado:

<table>
<thead>
<tr>
<th>resultStatus</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>S</td>
<td>La captura es exitosa. El `result.resultCode` correspondiente es `&quot;SUCCESS&quot;` y el result.resultMessage es "`Éxito`".</td>
</tr>
<tr>
<td>U</td>
<td>El estado de la captura es desconocido. El `result.resultCode` correspondiente es `UNKNOWN_EXCEPTION`, y el `result.resultMessage` es "Ha fallado una llamada a la API, que se debe a razones desconocidas". Para más detalles, consulte la sección de [códigos de error comunes](/).</td>
</tr>
<tr>
<td>F</td>
<td>La captura falla. El `result.resultCode` correspondiente y `result.resultMessage` pueden variar según diferentes situaciones. Para más detalles, consulte la sección de [códigos de error](/).</td>
</tr>
</tbody>
</table>


# Códigos de error
Los códigos de error suelen clasificarse en las siguientes categorías:

- [Códigos de error comunes](/): son comunes en todas las APIs de programas pequeños.
- Códigos de error específicos de la API: se enumeran en la tabla siguiente.

<table>
<thead>
<tr>
<th>resultCode</th>
<th>resultStatus</th>
<th>resultMessage</th>
</tr>
</thead>
<tbody>
<tr>
<td>SUCCESS</td>
<td>S</td>
<td>éxito</td>
</tr>
<tr>
<td>AUTH_CANCELLED</td>
<td>F</td>
<td>La autorización de pago ha sido cancelada.</td>
</tr>
<tr>
<td>AUTH_EXPIRED</td>
<td>F</td>
<td>La autorización de pago ha caducado.</td>
</tr>
<tr>
<td>AUTH_NOT_FOUND</td>
<td>F</td>
<td>La autorización de pago no se encuentra.</td>
</tr>
<tr>
<td>CAPTURE_IN_PROCESS</td>
<td>U</td>
<td>La captura está en proceso.</td>
</tr>
<tr>
<td>INVALID_TOKEN</td>
<td>F</td>
<td>El token de acceso no es válido.</td>
</tr>
<tr>
<td>CURRENCY_NOT_SUPPORT</td>
<td>F</td>
<td>La moneda del pago de un usuario no es compatible con el comerciante.</td>
</tr>
<tr>
<td>USER_BALANCE_NOT_ENOUGH</td>
<td>F</td>
<td>El saldo del usuario no es suficiente para el pago.</td>
</tr>
<tr>
<td>USER_STATUS_ABNORMAL</td>
<td>F</td>
<td>El estado del usuario es anormal.</td>
</tr>
<tr>
<td>PAYMENT_AMOUNT_EXCEED_LIMIT</td>
<td>F</td>
<td>El monto del pago supera el límite.</td>
</tr>
<tr>
<td>PAYMENT_COUNT_EXCEED_LIMIT</td>
<td>F</td>
<td>El número de pagos supera el límite.</td>
</tr>
<tr>
<td>REPEAT_REQ_INCONSISTENT</td>
<td>F</td>
<td>La solicitud enviada no es consistente con la repetida.</td>
</tr>
<tr>
<td>USER_AMOUNT_EXCEED_LIMIT</td>
<td>F</td>
<td>El monto del pago supera el límite del usuario.</td>
</tr>
<tr>
<td>RISK_REJECT</td>
<td>F</td>
<td>El pago es rechazado debido al control de riesgos.</td>
</tr>
<tr>
<td>KEY_NOT_FOUND</td>
<td>F</td>
<td>La clave no se encuentra.</td>
</tr>
<tr>
<td>CLIENT_INVALID</td>
<td>F</td>
<td>El cliente no es válido.</td>
</tr>
<tr>
<td>SIGNATURE_INVALID</td>
<td>F</td>
<td>La firma no es válida.</td>
</tr>
<tr>
<td>METHOD_NOT_SUPPORTED</td>
<td>F</td>
<td>El servidor no implementa el método HTTP solicitado.</td>
</tr>
<tr>
<td>MEDIA_TYPE_NOT_ACCEPTABLE</td>
<td>F</td>
<td>El servidor no implementa el tipo de medio que puede ser aceptado por el cliente.</td>
</tr>
<tr>
<td>CAPTURE_AMOUNT_EXCEED_AUTH_LIMIT</td>
<td>F</td>
<td>El monto total de la captura supera el límite del monto autorizado del pago.</td>
</tr>
</tbody>
</table>

# Ejemplos

## Solicitud

```js
{
 "captureRequestId":"20191127190741010007013213156",
 "paymentId":"20191127190741010007013213121",
 "captureAmount": {
    "value":"1000",
    "currency":"USD"
 }
}
```

## Respuesta

```js
{
 "result": {
    "resultCode":"SUCCESS",
    "resultStatus":"S"
 },
 "captureRequestId":"20191127190741010007013213156",
 "captureId":"201231231313123167",
 "paymentId":"20191127190741010007013213121",
 "captureAmount": {
    "value":"1000",
    "currency":"USD"
 },
 "captureTime":"2021-06-08T12:12:12+08:00"
}
```
---
sidebar_position: 1
---


POST ```/v1/payments/pay```

La ```pay``` La API se utiliza para iniciar un pago en la billetera.

Nota: Un pago que tiene lugar en la billetera.

1. merchant/partner Inicia la solicitud de pago a la billetera a través de la interfaz de pago.

2. La billetera manejará diferentes escenarios de pago base en los parámetros en solicitud.

Actualmente, el soporte de API de pago después de la adquisición de escenarios:

    * Pago de cajero: generalmente se usa en el escenario de pago en línea. En este escenario, merchant/partner Llamará a esta API de pago para crear un pedido, y la billetera devolverá la URL de la página del cajero a merchant/partner, y luego redirige a esta página de cajero.Entonces el usuario puede terminar el pago en la página del cajero.

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
      <td>String </td>
      <td>Yes</td>
      <td>El socio asignado por la billetera.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>appId</td>
      <td>String</td>
      <td>No</td>
      <td>La mini ID de programa.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>productCode</td>
      <td>String </td>
      <td>No</td>
      <td>Definido por la billetera, la billetera usará ProductCode para obtener la configuración del contrato que incluye tarifa, limita la información.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>paymentOrderTitle</td>
      <td>String </td>
      <td>Yes</td>
      <td>El título de la orden de este pago.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>paymentRequestId</td>
      <td>String </td>
      <td>Yes</td>
      <td>
        La identificación única de un pago generado por el comerciante.
        - Máx.Longitud: 64 caracteres.
        - Este campo se usa para el control de [idempotence](/docs/APIReferences/OpenAPIs/Idempotency.md) Para las solicitudes de pago que se inician con el mismo ```PaymentRequestid``` y alcanzan un estado final (S o F), la billetera debe devolver el resultado único.
         </td>
    </tr>
    <tr>
      <td>paymentAmount</td>
      <td> [Amount](/)</td>
      <td>Yes</td>
      <td>Monto del pedido para la visualización de registros de consumo de usuario, página de resultados de pago.</td>
    </tr>
    <tr>
      <td>paymentMethods</td>
      <td>[PaymentMethod](/)</td>
      <td>No</td>
      <td>El pago de pago utilizado para recolectar fondos por billetera.</td>
    </tr>
    <tr>
      <td>paymentAuthCode</td>
      <td>String </td>
      <td>No</td>
      <td>Si PayFactor.IsagreementPay es verdadero, entonces es el acceso al usuario de la billetera, si PayFactor.
      ISpaymentCode es verdadero, entonces es el código de autores del usuario de la billetera.
     Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>paymentFactor</td>
      <td>[PaymentFactor](/)</td>
      <td>No</td>
      <td>En el mini escenario del programa, es valor fijo, formato de mapa, ```{"isCashierPayment" : true}```.</td>
    </tr>
    <tr>
      <td>paymentExpiryTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>La orden de pago de la orden de pago definida por Merchant, que sigue el estándar ISO 8601.</td>
    </tr>
     <tr>
      <td>paymentReturnUrl</td>
      <td>String </td>
      <td>No</td>
      <td>La URL de redirección definida por Merchan.
      Max.Longitud: 1024 caracteres.</td>
    </tr>
    <tr>
      <td>paymentNotifyUrl</td>
      <td>String </td>
      <td>No</td>
      <td>El éxito de pago notifica a la URL definida por el comerciante.
      Max.Longitud: 1024 caracteres.</td>
    </tr>
     <tr>
      <td>mcc</td>
      <td>String </td>
      <td>No</td>
      <td>El código de categoría de comerciante.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>extraParams</td>
      <td>Map</td>
      <td>No</td>
      <td>Formato de mapa, capacidad de pago específica que proporcionada por la billetera, ahora solo apoyamos 1 key : ORDER.</td>
    </tr>
     <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
    <tr>
      <td>envInfo</td>
      <td>[EnvInfo](/)</td>
      <td>No</td>
      <td>Información del entorno del teléfono móvil</td>
    </tr>
</table>

## Response

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>result</td>
      <td>[Result](/)</td>
      <td>Yes</td>
      <td>El resultado de la solicitud, que contiene información relacionada con el resultado de la solicitud, como los códigos de estado y error.</td>
    </tr>
    <tr>
      <td>paymentId</td>
      <td>String </td>
      <td>No</td>
      <td>The unique ID of a payment generated by Wallet.
      Max. length: 64 characters.</td>
    </tr>
    <tr>
      <td>paymentTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Payment success time, which follows the [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) standard.</td>
    </tr>
    <tr>
      <td>actionForm</td>
      <td>[ActionForm](/)</td>
      <td>No</td>
      <td></td>
    </tr>
    <tr>
      <td>authExpiryTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>El tiempo de expiración de la autorización solo tiene valor cuando PaymentFactor.ISauthorizationPayment es cierto.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>

### Lógica del proceso de resultados

Para diferentes resultados de solicitud, se deben realizar diferentes acciones.Consulte la siguiente lista para más detalles:

   * **result.resultStatus = S**

        * Eso significa que esta transacción es el éxito, merchant/partner cUna transacción de actualización al éxito. Lo que necesita notar es :

           * En el escenario de evaluación de pagos, 's' solo significa evaluar el éxito, no hay transferencia de fondos real.
           * En el escenario de pago de autorización, "S 'solo significa el éxito de la autorización, necesita esperar a que la operación de captura finalice la transacción(finish final fund flow).

   * **result.resultStatus = A**

        * Eso significa que la transacción ya acepta por la billetera. Merchant/partner Necesita continuar la operación del siguiente paso de acuerdo con la respuesta de ActionForm.Como el código de pedido de visualización al usuario o redirigir a la página de cajero de billetera.

   * **result.resultStatus = F**

        * Eso significa que esta transacción está fallida, la razón fallida puede referirse al parámetro del código de resultado.Por lo general, las transacciones F no pueden volver a tener éxito si usa la misma solicitud de pago para llamar a la billetera.

    * **result.resultStatus = U**

        * Eso significa que se produce una excepción desconocida en el lado de la billetera. Merchant/partner ¿Puede la consulta el resultado del pago o esperar la notificación del estado de pago para obtener el resultado de pago real? Lo que necesita notar es:

            * El escenario de evaluación de pagos no puede consultar.
            * U el estado no se puede configurar para fallar o tener éxito en merchant/partner system.
            * U el estado no puede reembolsar al usuario sin conexión(Maybe will make fund loss).

### Result


<table>
    <tr>
      <th>ResultStatus</th>
      <th>código de resultado</th>
      <th>resulta</th>
    </tr>
    <tr>
      <td>S</td>
      <td>SUCCESS</td>
      <td>Éxito.</td>
    </tr>
    <tr>
      <td>U</td>
      <td>UNKNOWN_EXCEPTION</td>
      <td>Se falló una llamada de API, que es causada por razones desconocidas.</td>
    </tr>
    <tr>
      <td>U</td>
      <td>REQUEST_TRAFFIC_EXCEED_LIMIT</td>
      <td>El tráfico de solicitud excede el límite.</td>
    </tr>
    <tr>
      <td>U</td>
      <td>PAYMENT_IN_PROCESS</td>
      <td>El pago aún está en proceso.</td>
    </tr>
    <tr>
      <td>A</td>
      <td>ACCEPT</td>
      <td>Necesita la siguiente acción de acuerdo con ActionForm.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>REPEAT_REQ_INCONSISTENT</td>
      <td>Envío repetido, y las solicitudes son inconsistentes.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>PROCESS_FAIL</td>
      <td>Se produjo una falla comercial general.No vuelva a intentarlo.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>INVALID_API</td>
      <td>La API llamada es inválida o no activa.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>PARAM_ILLEGAL</td>
      <td>Existen parámetros ilegales.Por ejemplo, una entrada no numérica o una fecha no válida.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>ACCESS_DENIED</td>
      <td>Se niega el acceso.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>PAYMENT_AMOUNT_EXCEED_LIMIT</td>
      <td>El monto del pago excede el límite.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>USER_NOT_EXIST</td>
      <td>No existe ese usuario.</td>
    </tr>
     <tr>
      <td>F</td>
      <td>USER_STATUS_ABNORMAL</td>
      <td>El estado del usuario es anormal.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>USER_BALANCE_NOT_ENOUGH</td>
      <td>El saldo del usuario no es suficiente para este pago.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>PARTNER_NOT_EXIST</td>
      <td>Pareja no existe.</td>
    </tr>
     <tr>
      <td>F</td>
      <td>PARTNER_STATUS_ABNORMAL</td>
      <td>Estado de la pareja anormal.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>RISK_REJECT</td>
      <td>Riesgo de rechazo.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>CURRENCY_NOT_SUPPORT</td>
      <td>La moneda no es compatible.</td>
    </tr>
     <tr>
      <td>F</td>
      <td>ORDER_STATUS_INVALID</td>
      <td>El pedido está en estado no válido como cerrado.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>INVALID_ACCESS_TOKEN</td>
      <td>Accesstoken inválido.</td>
    </tr>
     <tr>
      <td>F</td>
      <td>USER_AMOUNT_EXCEED_LIMIT</td>
      <td>El monto del pago excede el límite de la cantidad del usuario.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>EXPIRED_ACCESS_TOKEN</td>
      <td>El token de acceso está expirado.</td>
    </tr>
     <tr>
      <td>F</td>
      <td>AUTH_CODE_ALREADY_USED</td>
      <td>Código de autenticación ya utilizado.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>INVALID_CODE</td>
      <td>Auth Code Ilegal.</td>
    </tr>
     <tr>
      <td>F</td>
      <td>EXPIRED_AGENT_TOKEN</td>
      <td>El token de acceso de Mini Program ha caducado.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>INVALID_AGENT_TOKEN</td>
      <td>El token de acceso del mini programa no es válido.</td>
    </tr>
</table>


## Muestra

### Pago del cajero

Por ejemplo, un usuario compra una mercancía de 100 USD en el merchant/partner(online merchant usually) , merchant/partner Llame a esta API de pago para crear primero la orden de pago, la billetera devolverá la identificación de la orden de pago y la URL de la página del cajero de la billetera a merchant/partner, then merchant/partner puede redirigir el usuario a la página de la billetera con My.tradepay API.

[PAYMENTS-PAY](../../img/PAYMENTS-PAY.png)

  1. En primer lugar, el mini programa crea orden (Paso 1).
  2. El servidor comercial llama ```/v1/payments/pay``` Interfaz con ```PaymentNotifyUrl``` para iniciar el flujo de pago (paso 2).
  3.  El servidor E-Wallet devuelve información de detalles de pago con PaymentId al servidor comercial (Paso 3).
  4.  El servidor comercial tiene que pasar la información de los detalles de pago al Mini Programa (Paso 4).
  5.  Y el Mini programa debe llamar a my.```tradePay``` Interface para hacer el pago (Paso 5).
  6. Cuando el pago alcanza el estado final, E Wallet Server notifica el resultado del pago al servidor comercial con ```paymentNotifyUrl```  proporcionado en el Paso 2 (Paso 8).
  7. También la aplicación de billetera electrónica devuelve el resultado del pago al programa MINI (Paso 9).

### Request

```js
{
    "partnerId": "P000000000000001xxxx",
    "paymentRequestId": "2019112719074101000700000077771xxxx",
    "paymentOrderTitle": "SHOES",
    "productCode": "PC_5800000001",
    "mcc": "4399",
    "paymentAmount": {
        "currency": "USD",
        "value": "10000"
    },
    "paymentFactor": {
        "isCashierPayment": true
    },
    "paymentReturnUrl":"https://www.merchant.com/redirectxxx",
    "paymentNotifyUrl":"https://www.merchant.com/paymentNotifyxxx",
    "extraParams": {
        "ORDER": "{\"referenceOrderId\":\"ID_000001\",\"orderAmount\":\"{\\\"currency\\\":\\\"USD\\\",\\\"value\\\":\\\"10000\\\"}\"}"
    },
    "extendInfo": "{\"customerBelongsTo\":\"siteNameExample\"}", 
    "envInfo": {
        "osType": "IOS",
        "terminalType": "APP"
    }
}
```

  *  **partnerId** es el identificador de unmerchant/partner, asignado por billetera.
  *  **paymentRequestId** se genera por merchant/partner, uniquely identifies the payment. Wallet must make use of paymentRequestId and partnerId for idempotent control. For example, if a payment with paymentRequestId== 2019112719074101000700000077771xxxx and partnerId==P000000000000001xxxx  hcomo ha sido procesado con éxito por la billetera, cuando merchant/partner Utiliza el mismo PaymentRquestid y PartnerID para el pago, la billetera responderá con un pago exitoso.
  *  **productCode** Definido por la billetera, la billetera usará ProductCode para obtener la configuración del contrato que incluye tarifa, limita la información.
  *  **paymentFactor** En el escenario de mini programa, el **```PaymentFactor```** solo tiene el valor fijo: ```isCashierPayment = true```
  *  **paymentReturnUrl** ¿Está la URL definida pormerchant/partner.  En el escenario de pago del cajero, después de que el usuario terminó el pago en la página de la billetera, la billetera dirigirá a la base de comerciante en esta URL.
  *  **paymentNotifyUrl** ¿Está la URL definida por merchant/partner.  En el escenario de pago del cajero, después de que el usuario terminó el pago en la página de la billetera, la billetera notificará a que el comerciante la base del resultado del pago en esta URL.
  *  **paymentAmount** describes the amount of 100 USD to be collected by Wallet from user account for this payment.
  *  **extraParams**, Solo incluye 1 clave: [ORDER](/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/Version%20v1/Diccionario%20de%20datos%20para%20v1.md) ahora. El pedido describe los detalles del pedido de la compra de la mercancía de 100 USD por parte del usuario del comerciante.Como el comerciante, el comprador, los bienes, etc. se incluyen en orden.La información en el pedido solo se usa para mostrar la página de resultados de pago del usuario y el historial de transacciones, los informes de regulación, etc. No utilizará el monto en el pedido de operación del fondo.
  * **extendInfo**, includes key - customerBelongsTo the e-wallet that the customer uses. Corresponding to the field 'siteName' el obtenido de la API 'my.getSiteInfo', En el mini escenario del programa, esto es obligatorio.

###  Response 

```js
{
 "result": {
    "resultCode":"ACCEPT",
    "resultStatus":"A",
    "resultMessage":"accept"
 },
 "paymentId": "string",
 "actionForm":{
    "actionFormType":"REDIRECTION",
    "redirectionUrl":"http://www.merchant.com/cashier?orderId=xxxxxxx"
 }
}
```

  *  **result.resultStatus ==A** muestra que el pago es aceptar el éxito.Después de que el usuario finalice el pago en la página del cajero, el pago cambiará al éxito.
  *  **paymentId** se genera por billetera, identifica de manera única el pago.
  *  **actionForm** devolverá la página de la página del cajero al comerciante/socio, después merchant/partner Recibido de aceptación del resultado, redirigirá a esta URL.
---
sidebar_position: 2
---

POST ```/v1/payments/inquiryPayment```

La API de consulta se utiliza para preguntar el resultado del pago, generalmente cuando no puede recibir el resultado del pago después de un largo período de tiempo.Como:

Nota:

1).Después de que el comerciante inicia el pago y no pueda recibir el resultado del pago después de un largo período de tiempo, puede encuestar la interfaz de consulta del estado de pago.
2). El comerciante utiliza la investigación de consultas para determinar el estado de pago en el escenario de procesamiento de pagos asíncronos.
Intervalo de round-robin, recomendado 5s una vez, hasta 1 minuto.

## Message structure

## Request



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
      <td>paymentId</td>
      <td>String </td>
      <td>No</td>
      <td>La identificación única de un pago generado por la billetera.Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>paymentRequestId</td>
      <td>String </td>
      <td>No</td>
      <td>La identificación única de un pago generado por los comerciantes de billetera.Max.Longitud: 64 caracteres.</td>
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
      <td>[Result](/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/Version%20v1/Diccionario%20de%20datos%20para%20v1.md)</td>
      <td>Yes</td>
      <td>El resultado de la solicitud, que contiene información relacionada con el resultado de la solicitud, como los códigos de estado y error.</td>
    </tr>
    <tr>
      <td>paymentId</td>
      <td>String </td>
      <td>No</td>
      <td>La identificación única de un pago generado por la billetera.Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>paymentRequestId</td>
      <td>String </td>
      <td>No</td>
      <td>La identificación única de un pago generado por los comerciantes de billetera.Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>paymentAmount</td>
      <td>[Amount](/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/Version%20v1/Diccionario%20de%20datos%20para%20v1.md)</td>
      <td>No</td>
      <td>Monto del pedido para la visualización de registros de consumo de usuario, página de resultados de pago.</td>
    </tr>
     <tr>
      <td>paymentTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Tiempo de éxito del pago, que sigue al [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) estándar.</td>
    </tr>
    <tr>
      <td>paymentStatus</td>
      <td>String</td>
      <td>No</td>
      <td>Éxito: el orden es sucedido.
        FALLO - El orden fallece.
        Procesamiento: el pedido no se paga o se paga, pero no termina.
        Cancelado: el pedido se cancela.</td>
    </tr>
    <tr>
      <td>paymentFailReason</td>
      <td>String </td>
      <td>No</td>
      <td>La orden de pago de la orden de pago cuando el pago de pagos es fallado.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>authExpiryTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>El tiempo de vencimiento de la autorización solo tiene valor cuando PaymentFactor. isAuthorizationPayment es verdad.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>

### Result Process Logic

Para diferentes resultados de solicitud, se deben realizar diferentes acciones.Consulte la siguiente lista para más detalles:

 * Si el valor de **result.resultStatus** es **S**, Eso significa que la consulta del estado de pago es exitosa, luego verifique el estado de pago:
   * si **paymentStatus** es procesar, significa que el pedido no se paga o se paga, pero no termina;
   * si **paymentStatus** es el **éxito**, significa que el orden es sucedido;
   * si **paymentStatus** es **fallar**, significa que el orden fallece.
   * si **paymentStatus** se **cancela**, significa que el pedido se cancela.

    Si el valor del resultado.ResultStatus es F, eso significa que la consulta del estado de pago es falla.Cuando el resultado del resultado is ORDER_NOT_EXIST, Significa que el pago aún no se acepta y puede tratarse como una falla de pago.Por la otra razón de falla, se recomienda la intervención humana.
    Si el valor del resultado.ResultStatus es U, eso significa que se produce una excepción desconocida en el lado de la billetera, el comerciante puede intentarlo nuevamente.

### Result   

<table>
    <tr>
      <th>No</th>
      <th>ResultStatus</th>
      <th>código de resultado</th>
      <th>resultado</th>
    </tr>
     <tr>
      <td>1</td>
      <td>S</td>
      <td>SUCCESS</td>
      <td>Éxito.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>U</td>
      <td>UNKNOWN_EXCEPTION</td>
      <td>Se falló una llamada de API, que es causada por razones desconocidas.</td>
    </tr>
    <tr>
      <td>3</td>
      <td>U</td>
      <td>REQUEST_TRAFFIC_EXCEED_LIMIT</td>
      <td>El tráfico de solicitud excede el límite.</td>
    </tr>
    <tr>
      <td>4</td>
      <td>F</td>
      <td>ORDER_NOT_EXIST</td>
      <td>El pedido no existe.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>F</td>
      <td>INVALID_API</td>
      <td>La API llamada no es válida o no activa.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>F</td>
      <td>PARAM_ILLEGAL</td>
      <td>Parámetros ilegales.Por ejemplo, entrada no numérica, fecha no válida.</td>
    </tr>
    <tr>
      <td>7</td>
      <td>F</td>
      <td>PROCESS_FAIL</td>
      <td>Se produjo una falla comercial general.No vuelva a intentarlo.</td>
    </tr>
    <tr>
      <td>8</td>
      <td>F</td>
      <td>ACCESS_DENIED</td>
      <td>El acceso se niega.</td>
    </tr>
    <tr>
      <td>9</td>
      <td>F</td>
      <td>EXPIRED_AGENT_TOKEN</td>
      <td>El token de acceso de Mini Program ha caducado.</td>
    </tr>
    <tr>
      <td>10</td>
      <td>F</td>
      <td>INVALID_AGENT_TOKEN</td>
      <td>El token de acceso del mini programa no es válido.</td>
    </tr>
</table>

## Sample

Ejemplo: un usuario ruso (Bob) compró un producto de 100 USD en la plataforma de comercio electrónico, pagado con tarjeta de crédito y presentó el pago sincrónicamente, resultados de pago de encuestas asíncronas.

[ConsultaPagos](/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/img/ConsultasPagos.png)







---
sidebar_position: 1
---

## Model

### Amount


<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>currency</td>
      <td>String </td>
      <td>Yes</td>
      <td>El código de moneda [ISO-4217](https://www.iso.org/iso-4217-currency-codes.html) de tres caracteres.
      Max.Longitud: 3 caracteres.</td>
    </tr>
    <tr>
      <td>value</td>
      <td>String </td>
      <td>Yes</td>
      <td>Una cadena que encierra un entero positivo que representa cuánto cobrar en la unidad de moneda más pequeña (por ejemplo, 100 centavos para cobrar $ 1.00 o 100 para cobrar $ 100, una moneda decimal cero).
      Max.Longitud: 16 caracteres.</td>
    </tr>
</table>



### ActionForm

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>actionFormType</td>
      <td>String</td>
      <td>No</td>
      <td>El tipo de formulario de acción.
      Enum: [ ORDER_CODE , REDIRECTION ] </td>
    </tr>
    <tr>
      <td>orderCode</td>
      <td>String </td>
      <td>No</td>
      <td>TÉl ordene el valor del código.Los comerciantes generan el código de pedido, que es un código QR con información de pedido para que los clientes escaneen.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
    <tr>
      <td>redirectionUrl</td>
      <td>String </td>
      <td>No</td>
      <td>La url de redirección.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
</table>



### Env

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>terminalType</td>
      <td>String</td>
      <td>No</td>
      <td>El tipo terminal de esta solicitud.
      Enum: [ MINI_APP, APP, WEB, WAP, SYSTEM ]</td>
    </tr>
    <tr>
      <td>osType</td>
      <td>String</td>
      <td>No</td>
      <td>Tipo de sistema operativo.
      Enum: [ IOS, ANDROID ]</td>
    </tr>
    <tr>
      <td>userAgent</td>
      <td>String </td>
      <td>No</td>
      <td>Agente de usuario.
      Max.Longitud: 1024 caracteres.</td>
    </tr>
    <tr>
      <td>deviceTokenId</td>
      <td>String </td>
      <td>No</td>
      <td>ID de token del dispositivo.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>clientIp</td>
      <td>String </td>
      <td>No</td>
      <td>Dirección IP del dispositivo cliente.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>cookieId</td>
      <td>String </td>
      <td>No</td>
      <td>ID de cookie de usuario.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>storeTerminalId</td>
      <td>String </td>
      <td>No</td>
      <td>La ID de terminal de la tienda.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>storeTerminal
        RequestTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>El tiempo de solicitud de la terminal de la tienda.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>Extender información.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>




### PaymentFactor

<table>
    <tr>
     <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>needSurcharge</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de un recargo, que aparece en la solicitud de APS al socio de pago móvil. Si el valor es verdadero, se debe especificar el recargo de los campos y el recargo. El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>isPaymentEvaluation</td>
      <td>Boolean	</td>
      <td>No</td>
      <td>Un indicador de la evaluación de pagos. Si el valor es verdadero, el pago es solo para evaluar si el pago puede tener éxito y no se produce una deducción de fondos real. El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>isAuthorizationAndPay</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si hacer autorización para el pago del acuerdo (débito automático) durante el pago. El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>isAuthorizationPayment</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago es un pago de autorización. El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>isDeferredPayment</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago es un pago diferido, en el que el escenario el usuario usa el producto o servicio por adelantado.</td>
    </tr>
    <tr>
      <td>needCheckCompliance</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si la información de pago debe validarse para cumplir con los cumplimientos antes de procesar el pago.</td>
    </tr>
    <tr>
      <td>needOtpVerification</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago debe verificar OTP (contraseña única).</td>
    </tr>
    <tr>
      <td>isCrossborderSettlement</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago requiere un acuerdo transfronterizo.</td>
    </tr>
    <tr>
      <td>inStorePaymentScenario</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de ```PaymentCode/OrderCode/EntryCode```.</td>
    </tr>
</table>

### User

<table>
    <tr>
     <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>userId</td>
      <td>String </td>
      <td>No</td>
      <td>El identificador único de hash asignado para el usuario.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>status</td>
      <td>String </td>
      <td>No</td>
      <td>Estado del usuario, enum: "ACTIVE", "FROZEN", "INACTIVE"
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>nickName	</td>
      <td>String </td>
      <td>No</td>
      <td>Apodo.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>userName</td>
      <td>UserName</td>
      <td>No</td>
      <td>Nombre de usuario, nombre completo y (firstName,middleName,lastName) no pueden ambos vacíos.</td>
    </tr>
    <tr>
      <td>userAddresses</td>
      <td>[```Array<Address>```](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>La información de la dirección del usuario.</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>String </td>
      <td>No</td>
      <td>URL de avatar.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>gender</td>
      <td>String </td>
      <td>No	</td>
      <td>F: mujer;M: Hombre.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>birthDate</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Fecha de nacimiento que sigue al estándar [ISO 8601.](https://www.iso.org/iso-8601-date-and-time-format.html)
      Max.Longitud: 32 caracteres.</td>
    </tr>
     <tr>
      <td>nationality</td>
      <td>String </td>
      <td>No</td>
      <td>Nacionalidad, código alfa-2 según [ISO3166.](https://www.iso.org/iso-3166-country-codes.html) p.ej. JP, nosotros.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>loginIdInfos</td>
      <td>[```Array<LoginIdInfo>```](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>A list of user login IDs.</td>
    </tr>
     <tr>
      <td>contactInfos</td>
      <td>[```Array<ContactInfo>```](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>Una lista de información de contacto.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String</td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>


### LoginIdInfo

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>loginIdType</td>
      <td>String </td>
      <td>Yes</td>
      <td>Los tipos de ID de inicio de sesión:
        ````MOBILE_PHONE```` 
       ```` EMAIL```` 
        ````OTHER````
        Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>loginId</td>
      <td>String </td>
      <td>No</td>
      <td>Un identificador único para el inicio de sesión de ID de un usuario, que puede ser un número de teléfono móvil o una dirección de correo electrónico.Los usuarios pueden usar su ID de inicio de sesión que sin bits ocultos para iniciar sesión en la billetera.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>maskLoginId</td>
      <td>String </td>
      <td>No</td>
      <td>ID de inicio de sesión de máscara que representa varios bits del número de teléfono que están ocultos para proteger la privacidad de los usuarios.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>hashLoginId</td>
      <td>String</td>
      <td>No</td>
      <td>ID de inicio de sesión de hash que identifica un loginid que es hash por un algoritmo hash.El sistema externo puede usarlo para comparar su ID de inicio de sesión que es hash mediante el mismo algoritmo hash para verificar si el ID de inicio de sesión es idéntico.
      Max.Longitud: 256 caracteres.</td>
    </tr>
      <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La amplia información para las billeteras y los comerciantes para agregar.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>




### ContactInfo

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>contactType</td>
      <td>String </td>
      <td>Yes</td>
      <td>The followings are contact types that are available to all users：
    ````MOBILE_PHONE ````
    ````TELEPHONE ````
    ````EMAIL```` 
    Tips: Developer can add new types, but should consider the compatibility.
    Max. length: 32 characters.</td>
    </tr>
    <tr>
      <td>contactNo  </td>
      <td>String </td>
      <td>Yes</td>
      <td>El valor que corresponde al tipo de contacto que está configurado en el campo ````ContactType```` .Por ejemplo, este campo puede ser un número de teléfono móvil o dirección de correo electrónico.max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La amplia información para las billeteras y los comerciantes para agregar.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>


### PaymentMethod

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>paymentMethodType</td>
      <td>String </td>
      <td>Yes</td>
      <td>Tipo de método de pago, utilizado para identificar un método de pago.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>paymentMethodId</td>
      <td>String </td>
      <td>No</td>
      <td>El únicoid de un cliente pertenece a un pago de pago.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>paymentMethodMetaData</td>
      <td>String </td>
      <td>No</td>
      <td>Los metadatos del método de pago.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
</table>


### Result

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>resultStatus</td>
      <td>String</td>
      <td>No</td>
      <td>Result status. Valid values are:
    ```S``` : Successful
    ```F``` : Failed
    ```U``` : Unknown
    ```A``` : accepted, not yet succeed, but can proceed with some actions.</td>
    </tr>
    <tr>
      <td>resultCode</td>
      <td>String </td>
      <td>No</td>
      <td>Result code.
      Max. length: 64 characters.</td>
    </tr>
    <tr>
      <td>resultMessage</td>
      <td>String </td>
      <td>No</td>
      <td>Result message that describes the result code in details.
      Max. length: 256 characters.</td>
    </tr>
</table>


### UserName

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>fullName</td>
      <td>String </td>
      <td>No</td>
      <td>Nombre completo.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>firstName</td>
      <td>String </td>
      <td>No</td>
      <td>Nombre de pila.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>middleName</td>
      <td>String </td>
      <td>No</td>
      <td>Segundo nombre.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>lastName</td>
      <td>String </td>
      <td>No</td>
      <td>Apellido.
      Max.Longitud: 32 caracteres.</td>
    </tr>
</table>


### Order

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>referenceOrderId</td>
      <td>String</td>
      <td>Yes</td>
      <td>La identificación única del pedido en el lado mercante.Se utiliza para la visualización de registros de consumo de usuarios, y las operaciones de pago posteriores, como las quejas de clientes y el seguimiento de las disputas.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>orderDescription</td>
      <td>String</td>
      <td>Yes</td>
      <td>Descripción del orden utilizado para mostrar registros de consumo de usuarios, etc.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>orderAmount</td>
      <td>[Amount](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>Yes</td>
      <td>El monto de un pedido, como cuánto cobrar en la unidad de divisas especificada por un pedido.</td>
    </tr>
    <tr>
      <td>orderCreateTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Orden Crear tiempo de comerciante que sigue el estándar [ISO 8601.](https://www.iso.org/iso-8601-date-and-time-format.html)
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>merchant</td>
      <td>[Merchant](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>Yes</td>
      <td>Información comercial.</td>
    </tr>
    <tr>
      <td>goods</td>
      <td>[```Array<Good>```](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>Información de bienes.</td>
    </tr>
    <tr>
      <td>shipping</td>
      <td>[Shipping](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>Información de envío.</td>
    </tr>
    <tr>
      <td>buyer</td>
      <td>[Buyer](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>Información del comprador.</td>
    </tr>
    <tr>
      <td>env</td>
      <td>[Env](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>No</td>
      <td>La información del entorno de pedido, como la información del dispositivo.</td>
    </tr>
     <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>Datos de infominación extendidos, este campo incluye información que no es común pero necesaria para casos de uso especiales.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
</table>


### Transaction

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>transactionResult</td>
      <td>Result</td>
      <td>Yes</td>
      <td>El resultado de la transacción, que contiene información relacionada con el resultado comercial y la información de error.</td>
    </tr>
    <tr>
      <td>transactionType</td>
      <td>String</td>
      <td>Yes</td>
      <td>Tipo de transacción para cada actividad de pago posterior.</td>
    </tr>
    <tr>
      <td>transactionRequestId</td>
      <td>String</td>
      <td>No</td>
      <td>El Assigend de identificación único del comerciante para identificar la solicitud de transacción.Cuando el tipo de transacción es captura, el valor de este campo es idéntico a CaptureRequestid.Cuando el tipo de transacción es reembolsado, el valor de este campo es idéntico al reembolso de reembolso.</td>
    </tr>
    <tr>
      <td>transactionId</td>
      <td>String</td>
      <td>Yes</td>
      <td>La ID única asignada por la billetera para identificar una transacción.Cuando el tipo de transacción es captura, el valor de este campo es idéntico a CaptureId.Cuando el tipo de transacción es reembolso, el valor de este campo es idéntico al reembolso.</td>
    </tr>
     <tr>
      <td>transactionStatus</td>
      <td>String</td>
      <td>No</td>
      <td>Tipo de estado de transacción.</td>
    </tr>
     <tr>
      <td>transactionAmount</td>
      <td>Amount</td>
      <td>Yes</td>
      <td>Cantidad de transacción.Cuando el tipo de transacción es captura, el valor de este campo es idéntico a CaptureSeMeunt.Cuando el tipo de transacción es reembolso, el valor de este campo es idéntico al reembolso.</td>
    </tr>
     <tr>
      <td>transactionTime</td>
      <td>Date</td>
      <td>No</td>
      <td>Tiempo de transacción</td>
    </tr>
    <tr>
      <td>isLastCapture</td>
      <td>String</td>
      <td>No</td>
      <td>Solo para la transacción de captura </td>
    </tr>
    <tr>
      <td>voidSource</td>
      <td>String</td>
      <td>No</td>
      <td>fuente vacía</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String</td>
      <td>No</td>
      <td>La extensa información.La billetera y el comerciante pueden poner información extensa en esta propiedad.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>



### Merchant

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>referenceMerchantId</td>
      <td>String </td>
      <td>Yes</td>
      <td>Merchant ID.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>merchantMCC</td>
      <td>String </td>
      <td>Yes</td>
      <td>Merchant MCC (Código de categoría de comerciante).
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>merchantName</td>
      <td>String </td>
      <td>Yes</td>
      <td>Nombre del comerciante.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>merchantDisplayName</td>
      <td>String </td>
      <td>No</td>
      <td>Nombre de visualización del comerciante.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>merchantAddress</td>
      <td>Address</td>
      <td>No</td>
      <td>La dirección del comerciante.</td>
    </tr>
    <tr>
      <td>merchantRegisterDate</td>
      <td>String /Datetime</td>
      <td>No</td>
      <td>Tiempo de registro de comerciantes del comerciante que sigue el estándar ISO 8601.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>store</td>
      <td>Store</td>
      <td>No</td>
      <td>Tienda mercantil.</td>
    </tr>
</table>



### Address

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>region</td>
      <td>String </td>
      <td>Yes</td>
      <td>Código alfa-2 según [ISO3166.](https://www.iso.org/iso-3166-country-codes.html) p.ej.JP, nosotros.
      Max.Longitud: 2 caracteres.</td>
    </tr>
    <tr>
      <td>state</td>
      <td>String </td>
      <td>No</td>
      <td>Estado/Condado/Provincia.
      Max.Longitud: 8 caracteres.</td>
    </tr>
    <tr>
      <td>city</td>
      <td>String </td>
      <td>No</td>
      <td>Ciudad/distrito/suburbio/ciudad/pueblo.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>address1</td>
      <td>String </td>
      <td>No</td>
      <td>Dirección Línea 1 (Dirección de la calle/Box/Nombre de la empresa).
      Max.Longitud: 256 caracteres.</td>
    </tr>
     <tr>
      <td>address2</td>
      <td>String </td>
      <td>No</td>
      <td>Línea de dirección 2 (apartamento/suite/unidad/edificio).
      Max.Longitud: 256 caracteres.</td>
    </tr>
     <tr>
      <td>label</td>
      <td>String </td>
      <td>No</td>
      <td>Etiqueta para la dirección, por ejemplo, hogar, empresa.
      Max.Longitud: 64 caracteres.</td>
    </tr>
     <tr>
      <td>zipCode</td>
      <td>String </td>
      <td>No</td>
      <td>CP o Código Postal.
      Max.Longitud: 32 caracteres.</td>
    </tr>
     <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida de los bienes.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>



### Store

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>referenceStoreId</td>
      <td>String </td>
      <td>Yes</td>
      <td>La tienda pertenece a un comerciante, y la identificación asignada por el comerciante correspondiente a la tienda es único bajo el comerciante.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>storeName</td>
      <td>String </td>
      <td>No</td>
      <td>Nombre de la tienda.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>storeMCC</td>
      <td>String </td>
      <td>No</td>
      <td>Almacenar código de categoría de negocios.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>storeDisplayName</td>
      <td>String </td>
      <td>No</td>
      <td>Nombre de la tienda de la tienda.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>storeTerminalId</td>
      <td>String </td>
      <td>No</td>
      <td>Identificador único de la terminal de la tienda.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>storeOperatorId</td>
      <td>String</td>
      <td>No</td>
      <td>Identificador único del operador terminal de la tienda.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>storeAddress</td>
      <td>Address</td>
      <td>No</td>
      <td>La dirección de la tienda.</td>
    </tr>
    <tr>
      <td>storePhoneNo</td>
      <td>String </td>
      <td>No</td>
      <td>Número de teléfono de la tienda.
      Max.Longitud: 16 caracteres.</td>
    </tr>
</table>


### Goods

<table>
    <tr>
     <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>referenceGoodsId</td>
      <td>String </td>
      <td>Yes</td>
      <td>Identificador único de bienes.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>goodsName</td>
      <td>String </td>
      <td>Yes</td>
      <td>Nombre de Dioses.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>goodsCategory</td>
      <td>String </td>
      <td>No</td>
      <td>Categoría de bienes.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>goodsBrand</td>
      <td>String </td>
      <td>No</td>
      <td>Marca de bienes.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>goodsUnitAmount</td>
      <td>[Amount](../Versión%20v2/Diccionario%20de%20datos%20para%20v2.md)</td>
      <td>Yes</td>
      <td>Monto del pedido para la visualización de registros de consumo de usuario, página de resultados de pago.</td>
    </tr>
    <tr>
      <td>goodsQuantity</td>
      <td>String </td>
      <td>No</td>
      <td>Cantidad de bienes.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>goodsSkuName</td>
      <td>String 	</td>
      <td>No</td>
      <td>Bienes Nombre Sku.max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>goodsUrl</td>
      <td>String </td>
      <td>No</td>
      <td>Goods url.
      Max. length: 1024 characters.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>The extend information of goods.Max. length: 2048 characters.</td>
    </tr>
</table>


### Shipping

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>shippingName</td>
      <td>UserName</td>
      <td>Yes</td>
      <td>Nombre de envío.</td>
    </tr>
    <tr>
      <td>shippingAddress</td>
      <td>Address</td>
      <td>Yes</td>
      <td>Dirección de envío.</td>
    </tr>
    <tr>
      <td>shippingCarrier</td>
      <td>String </td>
      <td>No</td>
      <td>El servicio de entrega que envió un producto físico, como FedEx, UPS, USPS, etc.Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>shippingPhoneNo</td>
      <td>String </td>
      <td>No</td>
      <td>Phoneno destinatario (incluida la extensión).
      Max.Longitud: 16 caracteres.</td>
    </tr>
    <tr>
      <td>shippingFee</td>
      <td>Amount</td>
      <td>No	</td>
      <td>Gastos de envío.</td>
    </tr>
</table>


### Buyer

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>referenceBuyerId</td>
      <td>String </td>
      <td>No</td>
      <td>Identificación única del comprador.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>buyerName</td>
      <td>UserName</td>
      <td>No</td>
      <td>Nombre del comprador.</td>
    </tr>
    <tr>
      <td>buyerPhoneNo</td>
      <td>String </td>
      <td>No</td>
      <td>Número de teléfono móvil del comprador.
      Max.Longitud: 24 caracteres.</td>
    </tr>
</table>


### ContentTemplate

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>templateParameters</td>
      <td>```Map<String,String>```</td>
      <td>No	</td>
      <td>A string-to-string mapping. The data structure is in JSON format: 
      ```"templateParameters": {"key": "value"}```  
    , where: 
    *```key``` : represents the variable that is defined in the template.
    *```value``` : is used to replace the value of the  ```key``` parameter in the template.</td>
    </tr>
    <tr>
      <td>language</td>
      <td>String</td>
      <td>No</td>
      <td>RFC 1766, such as zh-CN, en-US.</td>
    </tr>
</table>

### RedirectActionForm

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>method</td>
      <td>String</td>
      <td>No</td>
      <td>El método HTTP.El valor es post o obtenga.</td>
    </tr>
    <tr>
      <td>parameters</td>
      <td>String </td>
      <td>No</td>
      <td>Los parámetros que se requieren para el método HTTP, que está en el formato de par de valores: Valor.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
    <tr>
      <td>redirectUrl</td>
      <td>String </td>
      <td>Yes</td>
      <td>La url de redirección.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
</table>


### Message

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>messageId</td>
      <td>String</td>
      <td>Yes</td>
      <td>
      La ID única es generada por Mini Program Platform para identificar una notificación.
      - Longitud máxima: 64 caracteres.
      - Personajes no permitidos: caracteres especiales como @, #,?etcétera.
**Nota:** Este campo es un campo de idempotencia API.Para las notificaciones que se envían con el mismo requisito y alcanzan un estado de S, la aplicación nativa debe devolver el mismo mensaje.
Consulte la idempotencia para obtener detalles sobre la idempotencia de la API.
      </td>
    </tr>
    <tr>
      <td>customerId</td>
      <td>String</td>
      <td>Yes</td>
      <td>La ID única es generada por la aplicación nativa para identificar a un usuario.
      Ejemplo: 21882000000000000000023.
     Longitud máxima: 32 caracteres.</td>
    </tr>
    <tr>
      <td>messageChannel</td>
      <td>MessageChannel</td>
      <td>Yes</td>
      <td>Los canales para enviar una notificación, que incluyen push, sms y bandeja de entrada.</td>
    </tr>
    <tr>
      <td>templateCode</td>
      <td>String</td>
      <td>No</td>
      <td>
      Indica la ID de plantilla generada por la plataforma Mini Program para identificar una plantilla.
      - Longitud máxima: 64 caracteres.
      - Personajes no permitidos: caracteres especiales como @, #,?etcétera.
      - puede ser ```nulo```.
    </td>
    </tr>
     <tr>
      <td>messageContent</td>
      <td>String </td>
      <td>Yes</td>
      <td> 
      The specific content that a notification to send. Maximum length: 4096 characters.h 
      ```js
      push
            {
            "en-US": {
                "title": "testTitle",
                "content": "testContent",
                "linkUrl": "testUrl"
            },
            "zh-CN": {
                "title": "testTitle",
                "content": "testContent",
                "linkUrl": "testUrl"
            }
            }
                SMS
            {
            "en-US": {
                "content": "this is sms content"
            },
            "zh-CN": {
                "content": "this is sms content"
            }
            }
                Inbox
            {
            "en-US": {
                "displayType": "inbox_item_content",
                "header": {
                "appIcon": "icon url",
                "appName": "icon name",
                "msgBizName": "test_biz",
                "target": {
                    "path": "header link url"
                }
                },
                "body": {
                "title": "message title",
                "content": "message content",
                "target": {
                    "path": "message path url"
                }
                },
                "footer": [
                {
                    "linkName": "link name",
                    "target": {
                    "path": "header link url"
                    }
                }
                ]
            },
            "zh-CN": {
                "displayType": "inbox_item_content",
                "header": {
                "appIcon": "icon url",
                "appName": "icon name",
                "msgBizName": "test_biz",
                "target": {
                    "path": "header link url"
                }
                },
                "body": {
                "title": "message title",
                "content": "message content",
                "target": {
                    "path": "message path url"
                }
                },
                "footer": [
                {
                    "linkName": "link name",
                    "target": {
                    "path": "header link url"
                    }
                }
                ]
            }
            }
            ```
      </td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>
      La información extendida.
      - Longitud máxima: 4096 caracteres.
      - Personajes no permitidos: caracteres especiales como @, #,?etcétera.
      - puede ser ```nulo```.
      </td>
    </tr>
</table>

### MessageSendResult

<table>
    <tr>
       <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
     <tr>
      <td>messageId</td>
      <td>String </td>
      <td>Yes</td>
      <td>
    La ID única es generada por Mini Program Platform para identificar una notificación.
    - Longitud máxima: 64 caracteres.
    - Personajes no permitidos: caracteres especiales como @, #,?etcétera.
**Nota:** Este campo es un campo de  Idempotency API.Para las notificaciones que se envían con la misma ```requestId``` y alcanzar un estado de S, la aplicación nativa debe devolver lo mismo ```messageId```. 
Consulte la  Idempotency para obtener detalles sobre la  [Idempotency](../../Idempotency.md) de la API.
</td>
    </tr>
    <tr>
      <td>success</td>
      <td>Boolean</td>
      <td>Yes</td>
      <td>
      Indica si la notificación se envía con éxito a la aplicación nativa.Los valores válidos son:
    - ```true:``` La notificación se envía con éxito.
    - ```false:``` La notificación no puede enviar.
    </td>
    </tr>
    <tr>
      <td>retry</td>
      <td>Boolean</td>
      <td>No</td>
      <td>
      Indica si la aplicación nativa le permite volver a intentar cuando la notificación no se envía.Los valores válidos son:
     - ```true:``` El servidor de aplicaciones nativo permite volver a intentarlo en escenarios específicos, por ejemplo, cuando hay excepciones del sistema.
     - ```false:``` TEl servidor de aplicaciones nativo no permite volver a intentarlo.Por ejemplo, cuando la frecuencia de entrega de la notificación está más allá de los límites establecidos por la aplicación nativa, el reintento no está permitido.
**Nota**: Este campo es necesario cuando el valor del campo de éxito es falso.
    </td>
 </tr>
</table>

    
### Enum

#### OsType

<table>
    <tr>
      <th>Llave</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>IOS</td>
      <td>iOS.</td>
    </tr>
    <tr>
      <td>ANDROID</td>
      <td>Android.</td>
    </tr>
</table>


### PaymentMethodType

<table>
    <tr>
      <th>Llave</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>BALANCE</td>
      <td>balance.</td>
    </tr>
    <tr>
      <td>COUPON</td>
      <td>Cupón.</td>
    </tr>
    <tr>
      <td>CREDIT_CARD</td>
      <td>Tarjeta de crédito.</td>
    </tr>
    <tr>
      <td>DEBIT_CARD</td>
      <td>Tarjeta de débito.</td>
    </tr>
</table>

### TerminalType

<table>
	<tr>
	   <th>Llave</th>
      <th>Descripción</th>
	</tr>
	<tr>
	  <td>MINI_APP</td>
	  <td>Mini programa.</td>
	</tr>
	<tr>
	  <td>APP</td>
	  <td>Aplicación movil.</td>
	</tr>
    <tr>
	  <td>WEB</td>
	  <td>Webser web.</td>
	</tr>
    <tr>
	  <td>WAP</td>
	  <td>WAP móvil.</td>
	</tr>
    <tr>
	  <td>SYSTEM</td>
	  <td>Llamada del sistema.</td>
	</tr>
</table>


### MessageChannel

<table>
	<tr>
	  <th>Llave</th>
      <th>Descripción</th>
	</tr>
	<tr>
	  <td>SMS</td>
	  <td>sms</td>
	</tr>
	<tr>
	  <td>PUSH</td>
	  <td>EMPUJAR</td>
	</tr>
    <tr>
	  <td>INBOX</td>
	  <td>BANDEJA DE ENTRADA</td>
	</tr>
</table>

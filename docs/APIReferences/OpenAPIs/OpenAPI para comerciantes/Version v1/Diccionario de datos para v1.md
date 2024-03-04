---
sidebar_position: 3
---


## Modelo

## Cantidad
	<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerida</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>divisa</td>
      <td>String</td>
      <td>Sí</td>
      <td>El código de moneda ISO-4217 de tres caracteres.
      Max.Longitud: 3 caracteres.  </td>
    </tr>
    <tr>
      <td>valor</td>
      <td>String</td>
      <td>Sí</td>
      <td>Una cadena que encierra un entero positivo que representa cuánto cobrar en la unidad de moneda más pequeña (por ejemplo, 100 centavos para cobrar $ 1.00 o 100 para cobrar $ 100, una moneda decimal cero).
      Max.Longitud: 16 caracteres. </td>
    </tr>
  </tbody>
</table>

## ActionForm

	<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerida</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>actionFormType</td>
      <td>String</td>
      <td>No</td>
      <td>El tipo de formulario de acción. Enum: 
          ORDER_CODE,
          REDIRECTION.</td>
    </tr>
    <tr>
      <td>orderCode</td>
      <td>String</td>
      <td>No</td>
      <td>El valor del código de pedido.
        Max.Longitud: 2048 caracteres.</td>
    </tr>
    <tr>
      <td>redirectionUrl</td>
      <td>String</td>
      <td>No</td>
      <td>La url de redirección.
          Max.Longitud: 4096 caracteres.</td>
    </tr>
  </tbody>
</table>


## EnvInfo

	<table>
  <thead>
    <tr>
    <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerida</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>terminalType</td>
      <td>String</td>
      <td>No</td>
      <td>El tipo terminal de esta solicitud.
          Enum: [ MINI_APP, APP, WEB, WAP, SYSTEM ].</td>
    </tr>
    <tr>
      <td>osType</td>
      <td>String</td>
      <td>No</td>
      <td>OS type.
          Enum: [ IOS, ANDROID ]</td>
    </tr>
    <tr>
       <td>userAgent</td>
      <td>String</td>
      <td>No</td>
      <td>User agent.
        Max.Longitud: 1024 caracteres.</td>
    </tr>
    <tr>
      <td>deviceTokenId</td>
      <td>String</td>
      <td>No</td>
      <td>ID de token del dispositivo.
          Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>clientIp</td>
      <td>String</td>
      <td>No</td>
      <td>Dirección IP del dispositivo cliente.
         Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>cookieId</td>
      <td>String</td>
      <td>No</td>
      <td>User cookie ID.
         Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String</td>
      <td>No</td>
      <td>Extend info.
        Max. length: 4096 characters.</td>
    </tr>
  </tbody>
</table>
	
## PaymentFactor


<table>
    <tr>
     <th>Propiedad</th>
      <th>Tipo de datos</th>
      <th>Requerida</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>isPaymentEvaluation</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de la evaluación de pagos.Si el valor es verdadero, el pago es solo para evaluar si el pago puede tener éxito y no se produce una deducción de fondos real.El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>isOrderCode</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Si el pago Senario es el usuario escanear el código presentado por el comerciante e identificar el pedido y realizar el pago.El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>ISpaymentCode</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el escenario de pago es el comerciante escanear el código de pago del usuario. El valor predeterminado es falso.</td>
    </tr>
    <tr>
      <td>isAgreementPay</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago es un pago de acuerdo. El valor de incumplimiento es falso.</td>
    </tr>
     <tr>
      <td>isCashierPayment</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago es un pago de cajero. El valor de incumplimiento es falso.</td>
    </tr>
     <tr>
      <td>isAuthorizationAndPay</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si hacer una autorización de pago de acuerdo durante el pago. El valor        predeterminado es falso.</td>
    </tr>
     <tr>
      <td>isAuthorizationPayment</td>
      <td>Boolean</td>
      <td>No</td>
      <td>Un indicador de si el pago es un pago de autorización. El valor predeterminado es falso.</td>
    </tr>
</table>


## OpenLoginIdInfo
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>loginId</td>
        <td>String 	</td>
        <td>No</td>
        <td>
           La ID de inicio de sesión es una identificación para un usuario, que puede ser un número de teléfono móvil o correo electrónico.El usuario puede usar ID de inicio de sesión para inicio de la billetera.
            Max.Longitud: 64 caracteres.
        </td>
    </tr>
    <tr>
        <td>loginIdType</td>
        <td>String </td>
        <td>Yes</td>
        <td>
           Tipo de ID de inicio de sesión, Enum: "MOBILE_PHONE", "EMAIL".
            Max.Longitud: 64 caracteres.
        </td>
    </tr>
    <tr>
        <td>maskLoginId</td>
        <td>String </td>
        <td>No</td>
        <td>
            ID de inicio de sesión de máscara, se ocultarán varios bits del número de teléfono para proteger la privacidad de los usuarios.
            [Max. length: 64 characters.](/)
        </td>
    </tr>
    <tr>
        <td>hashLoginId</td>
        <td>String </td>
        <td>No</td>
        <td>
        ID de inicio de sesión hash.El ID de inicio de sesión hahed por algoritmo hash.El sistema externo puede usarlo para compararEs ID de inicio de sesión hash por el mismo algoritmo hash para ver si la ID de inicio de sesión es la misma.
        Max.Longitud: 256 caracteres.
        </td>
    </tr>
    <tr>
        <td>extendInfo</td>
        <td>String </td>
        <td>No</td>
        <td>
            La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
            Max.Longitud: 4096 caracteres.
        </td>
    </tr>
</table>


## Datos de contacto

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>contactNo</td>
      <td>String </td>
      <td>Yes</td>
      <td>No. de contacto e.g mobile-phone No, e-mail address.
          Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>contactType</td>
      <td>String </td>
      <td>Yes</td>
      <td>CTipo de contacto, hay tipos acordados(MOBILE_PHONE, TELEPHONE, EMAIL) Eso debería estar disponible para todos los usuarios, el desarrollador puede agregar un nuevo tipo, pero el desarrollador debe considerar la compatibilidad.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>The extend information,wallet and merchant can put extend info here.
          Max. length: 4096 characters.</td>
    </tr>
  </tbody>
</table>
 

## OpenUserInfo

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
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
      <td>User status, Enum: "ACTIVE", "FROZEN", "INACTIVE".
          maxLongitud:32Caracteres.</td>
    </tr>
    <tr>
      <td>nickName</td>
      <td>String </td>
      <td>No</td>
      <td>Nick name.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>userName</td>
      <td>UserName</td>
      <td>No</td>
      <td>User name, fullName and (firstName,middleName,lastName) no pueden ambos vacíos.</td>
    </tr>
     <tr>
      <td>userAddresses</td>
      <td>```Array<Address>```</td>
      <td>No</td>
      <td>Información de la dirección del usuario.</td>
    </tr>
     <tr>
      <td>avatar</td>
      <td>String </td>
      <td>No</td>
      <td>Avatar url.
     Max.Longitud: 256 caracteres.</td>
    </tr>
     <tr>
      <td>gender</td>
      <td>String </td>
      <td>No</td>
      <td>F: female; M: Male.
      Max.Longitud: 32 caracteres.</td>
    </tr>
     <tr>
      <td>birthday</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Cumpleaños que sigue al estándar ISO 8601.
      Max.Longitud: 32 caracteres.</td>
    </tr>
     <tr>
      <td>nationality</td>
      <td>String </td>
      <td>No</td>
      <td>Nacionalidady,  alpha-2 Código Según ISO3166. e.g. JP, US.
     Max. Longitud: 32 caracteres.</td>
    </tr>   
    <tr>
      <td>loginIdInfos</td>
      <td>```Array<OpenLoginIdInfo>```</td>
      <td>No</td>
      <td>Lista de información de ID de inicio de sesión del usuario.</td>
    </tr>     
    <tr>
      <td>contactInfos</td>
      <td>```Array<ContactInfo>```</td>
      <td>No</td>
      <td>Lista de información de contacto.</td>
    </tr>    
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>        
  </tbody>
</table>
 

## PaymentMethod

<table>
  <thead>
    <tr>
     <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>paymentMethodType</td>
      <td>String</td>
      <td>Yes</td>
      <td>Tipo de método de pago, utilizado para identificar un método de pago.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>paymentMethodId</td>
      <td>String</td>
      <td>No</td>
      <td>El únicoid de un cliente pertenece a un pago de pago.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>extendMetaData</td>
      <td>String</td>
      <td>No</td>
      <td>Información extendida.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
  </tbody>
</table>



## Result

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>resultStatus</td>
      <td>String</td>
      <td>No</td>
      <td>Estado de resultado.Los valores válidos son:
        S: exitoso
        F: Falló
        U: Desconocido
        R: Aceptado, aún no tiene éxito, pero puede proceder con algunas acciones.</td>
    </tr>
    <tr>
      <td>resultCode</td>
      <td>String</td>
      <td>No</td>
      <td>Código de resultados.
      Max.Longitud: 64 caracteres.</td>
    </tr>
    <tr>
      <td>resultMessage</td>
      <td>String </td>
      <td>No</td>
      <td>Mensaje de resultado que describe el código de resultado en detalle.
      Max.Longitud: 256 caracteres.</td>
    </tr>
  </tbody>
</table>


## UserName

<table>
  <thead>
    <tr>
       <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>fullName</td>
      <td>String </td>
      <td>No</td>
      <td>Nombre completo.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>firstName</td>
      <td>String</td>
      <td>No</td>
      <td>Nombre de pila.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>middleName</td>
      <td>String</td>
      <td>No</td>
      <td>Segundo nombre.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>lastName</td>
      <td>String</td>
      <td>No</td>
      <td>Apellido.
      Max.Longitud: 32 caracteres.</td>
    </tr>
  </tbody>
</table>




## Order


<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceOrderId</td>
      <td>String </td>
      <td>Yes</td>
      <td>La identificación única del pedido en el lado mercante.Se utiliza para la visualización de registros de consumo de usuarios, y las operaciones de pago posteriores, como las quejas de clientes y el seguimiento de las disputas.
      Max.Longitud: 64 caracteres. </td>
    </tr>
    <tr>
      <td>orderDescription</td>
      <td>String</td>
      <td>No</td>
      <td>Descripción del orden utilizado para mostrar registros de consumo de usuarios, etc.
      Max.Longitud: 256 caracteres.</td>
    </tr>
    <tr>
      <td>orderAmount</td>
      <td>Amount</td>
      <td>Yes</td>
      <td>El monto de un pedido, como cuánto cobrar en la unidad de divisas especificada por un pedido.</td>
    </tr>
    <tr>
      <td>orderCreateTime</td>
      <td>String/Datetime</td>
      <td>No</td>
      <td>Orden Crear tiempo de comerciante que sigue el estándar ISO 8601.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>referenceMerchant</td>
      <td>Merchant</td>
      <td>No</td>
      <td>Información comercial.</td>
    </tr>
    <tr>
      <td>goods</td>
      <td>Goods</td>
      <td>No</td>
      <td>Información de bienes.</td>
    </tr>
    <tr>
      <td>shipping</td>
      <td>Shipping</td>
      <td>No</td>
      <td>Información de envío.</td>
    </tr>
    <tr>
      <td>buyer</td>
      <td>Buyer</td>
      <td>No</td>
      <td>Buyer information.</td>
    </tr>
    <tr>
      <td>extendInfo</td>
      <td>String </td>
      <td>No</td>
      <td>Datos de infominación extendidos, este campo incluye información que no es común pero necesaria para casos de uso especiales. Max.Longitud: 2048 caracteres.</td>
    </tr>
  </tbody>
</table>


## Merchant


<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>referenceMerchantId</td>
      <td>String </td>
      <td>Yes</td>
      <td> ID de comerciante.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>merchantMCC</td>
      <td>String </td>
      <td>Yes</td>
      <td>Comerciante MCC.
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
      <td>String</td>
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
      <td>String/Datetime</td>
      <td>No</td>
      <td>Tiempo de registro de comerciante del comerciante que sigue el estándar ISO 8601.</td>
    </tr>
     <tr>
      <td>merchantRegisterDate</td>
      <td>String/Datetime</td>
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
  </tbody>
</table>


## Address

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>region</td>
      <td>String </td>
      <td>Yes</td>
      <td>Alpha-2 código según ISO3166.p.ej.JP, nosotros.
      Max.Longitud: 2 caracteres.</td>
    </tr>
    <tr>
      <td>state</td>
      <td>String </td>
      <td>No</td>
      <td>State/County/Province.
      Max.Longitud: 8 caracteres.</td>
    </tr>
    <tr>
      <td>city</td>
      <td>String </td>
      <td>No</td>
      <td>City/District/Suburb/Town/Village.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>address1</td>
      <td>String</td>
      <td>No</td>
      <td>Dirección Línea 1(Street address/PO Box/Company name).
      Max.Longitud: 256 caracteres.</td>
    </tr>
     <tr>
      <td>address2</td>
      <td>String</td>
      <td>No</td>
      <td>Línea de dirección 2(Apartment/Suite/Unit/Building).
     Max.Longitud: 256 caracteres.</td>
    </tr>
     <tr>
      <td>zipCode</td>
      <td>String </td>
      <td>No</td>
      <td>ZIP or postal code.
     Max.Longitud: 32 caracteres.</td>
    </tr>
  </tbody>
</table>



## Store

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>eferenceStoreId</td>
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
      <td>Store business category code.
      Max. length: 32 characters.</td>
    </tr>
    <tr>
      <td>storeDisplayName</td>
      <td>String</td>
      <td>No</td>
      <td>Nombre de la tienda de la tienda.
      Max.Longitud: 64 caracteres.</td>
    </tr>
      <tr>
      <td>storeTerminalId</td>
      <td>String</td>
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
      <td>String</td>
      <td>No</td>
      <td>Número de teléfono de la tienda.
      Max.Longitud: 16 caracteres.</td>
    </tr>
  </tbody>
</table>



## Goods

<table>
  <thead>
    <tr>
     <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
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
      <td>String</td>
      <td>No</td>
      <td>Marca de bienes.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>goodsUnitAmount</td>
      <td>Amount</td>
      <td>No</td>
      <td>Monto del pedido para la visualización de registros de consumo de usuario, página de resultados de pago.</td>
    </tr>
    <tr>
      <td>goodsQuantity</td>
      <td>String</td>
      <td>No</td>
      <td>Cantidad de bienes.
      Max.Longitud: 32 caracteres.</td>
    </tr>
    <tr>
      <td>goodsUrl</td>
      <td>String</td>
      <td>No</td>
      <td>URL de bienes.
      Max.Longitud: 1024 caracteres.</td>
    </tr>
    <tr>
      <td>extendInfo	</td>
      <td>String </td>
      <td>No</td>
      <td>La información extendida de los bienes.
      Max.Longitud: 2048 caracteres.</td>
    </tr>
  </tbody>
</table>


## Shipping


<table>
  <thead>
    <tr>
     <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
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
      <td>String</td>
      <td>No</td>
      <td>El servicio de entrega que envió un producto físico, como FedEx, UPS, USPS, etc.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>shippingPhoneNo</td>
      <td>String</td>
      <td>No</td>
      <td>Phoneno destinatario (incluida la extensión).
      Max.Longitud: 16 caracteres.</td>
    </tr>
    <tr>
      <td>shippingFee</td>
      <td>Amount</td>
      <td>No</td>
      <td>Gastos de envío.</td>
    </tr>
  </tbody>
</table>


## Buyer


<table>
  <thead>
    <tr>
       <th>Propiedad</th>
        <th>Tipo de datos</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
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
      <td>String</td>
      <td>No</td>
      <td>Número de teléfono móvil del comprador.
      Max.Longitud: 24 caracteres.</td>
    </tr>
  </tbody>
</table>

## Enum

### OsType

 <table>
    <thead>
    <tr>
      <th>Llave</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IOS</td>
      <td>iOS.</td>
    </tr>
    <tr>
      <td>ANDROID</td>
      <td>Android.</td>
    </tr>
  </tbody>
</table>


## PaymentMethodType

<table>
<thead>
    <tr>
      <th>Llave</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BALANCE</td>
      <td>Balance.</td>
    </tr>
    <tr>
      <td>COUPON</td>
      <td>Coupon.</td>
    </tr>
    <tr>
      <td>CREDIT_CARD</td>
      <td>Credit Card.</td>
    </tr>
    <tr>
      <td>DEBIT_CARD</td>
      <td>Debit Card.</td>
    </tr>
  </tbody>
</table>



## TerminalType

<table>
<thead>
    <tr>
     <th>Llave</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MINI_APP</td>
      <td>Mini program.</td>
    </tr>
    <tr>
      <td>APP</td>
      <td>Mobile Application.</td>
    </tr>
    <tr>
      <td>WEB</td>
      <td>Broswer Web.</td>
    </tr>
    <tr>
      <td>WAP</td>
      <td>Mobile Wap.</td>
    </tr>
    <tr>
      <td>SYSTEM</td>
      <td>System Call.</td>
    </tr>
  </tbody>
</table>


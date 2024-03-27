---
sidebar_position: 2
---

# /v2/miniprogram/qrcode/create

POST ```/v2/miniprogram/qrcode/create```

Con esta llamada API, un comerciante o un ISV pueden crear un código QR de promoción para redirigir a los usuarios a un mini programa específico. Por ejemplo, los usuarios pueden escanear el código QR para pedir comidas en el mini programa.

## Estructura
Un mensaje consiste en un encabezado y un cuerpo.Las siguientes secciones se centran en la estructura del cuerpo.Para la estructura del encabezado, ver:

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
    <td>String </td>
    <td>Sí</td>
    <td className='p-no-margin'>
      Indica la ID única asignada por la plataforma del Mini Programa para identificar un mini programa al que los usuarios se redirigen cuando escanean el código QR.
      * Longitud máxima: 32 caracteres
      * Caracteres no permitidos: personajes especiales como tals @ # ? 
      
      **Nota**: Obtenga este campo a través de [my.getAppIdSync](/) JSAPI o plataforma del Mini Programa.
    </td>
    <td>"P000000000000001xxxx"</td>
  </tr>
  <tr>
    <td>appQrCodeType</td>
    <td>String</td>
    <td>No</td>
    <td className='p-no-margin'>
      Indica el tipo de código QR creado. El valor válido es:
      * ```PROMO```: indica crear un código QR de promoción.
      
      **Nota**: Cuando el valor de *appQrCodeType* es ```nulo```, el código QR creado es un código QR de promoción de forma predeterminada.
    </td>
    <td>"PROMO"</td>
  </tr>
  <tr>
    <td>appQrCodePage</td>
    <td>String</td>
    <td>No</td>
    <td className='p-no-margin'>
      Indica la ruta de la página que redirige a los usuarios a una página específica en el mini programa, por ejemplo: ```page/component/component-pages/view```. 
      * Longitud máxima: 512 caracteres
      * Puede ser ```nulo```.
      
      **Nota**: Cuando el valor de *appQrCodePage* es ```nulo```, el código QR redirigirá a los usuarios a la página de inicio del Mini Programa.
    </td>
    <td>"page/component/component-pages/view"</td>
  </tr>
  <tr>
    <td>appQrCodeParams</td>
    <td>String</td>
    <td>No</td>
    <td className='p-no-margin'>
      Cuando un usuario usa la Super App u otras aplicaciones para escanear el código QR, este campo se pasará al Mini Programa a través del método ```onLaunch```.
      * Longitud máxima: 512 caracteres
      * Puede ser ```nulo```.
    </td>
    <td>"x=1&y=2"</td>
  </tr>
  <tr>
    <td>appQrCodeDesc</td>
    <td>String</td>
    <td>No</td>
    <td className='p-no-margin'>
      Indica la descripción del código QR.
        * Longitud máxima: 64 caracteres
        * Puede ser ```nulo```.
    </td>
    <td>"Mi tienda QR Código "</td>
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
   <td>Indica el resultado de la solicitud, como el estado y los códigos de error.</td>
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
   <td>appQrCode</td>
   <td>String </td>
   <td>Sí</td>
   <td className='p-no-margin'>
      Indica el valor del código QR, que es la URL final para redirigir a los usuarios a un mini programa cuando escanean el código QR.
      * Longitud máxima: 1024 caracteres.
  </td>
   <td> "https://miniprogram.alipay.com/mini-qr/28166612109YMP7RLw7zT2HU1k6AXzSOFfv4qu3xxxx"</td>
  </tr>
  <tr>
   <td>appQrCodePicValue</td>
   <td>String</td>
   <td>Sí</td>
   <td className='p-no-margin'>
    Indica la imagen del código QR en el formato *appQrCodeResultPicType*.
    * Longitud máxima: 4096 caracteres
  </td>
   <td>Consulte el [código de muestra de respuesta](/) para un ejemplo.</td>
  </tr>
  <tr>
   <td>appQrCodeResultPicType</td>
   <td>String</td>
   <td>Sí</td>
   <td className='p-no-margin'>
      Indica el formato de la imagen del código QR.Actualmente, solo se admite Base64.
      * Longitud máxima: 1024 caracteres.
  </td>
   <td>BASE64</td>
  </tr>
</table>


#### Lógica del proceso de resultados

En la respuesta, el campo *result.resultStatus* indica el resultado del procesamiento de una solicitud. La siguiente tabla describe cada estado de resultado: 

<table>
 <tr>
   <th>resultStatus</th>
   <th>Descripción </th>
 </tr>
  <tr>
   <td>S</td>
   <td className='p-no-margin'>  
     La solicitud para crear un código QR tiene éxito, lo que significa que el valor y la imagen del código QR se generan y se devuelven al comerciante. 

    **Nota**: Para el código QR generado con el mismo *appId*, *appQrCodePage*, *appQrCodePage* y *appQrCodeParams* y alcanzar un estado ```S```, se devuelven el mismo valor de código QR y la misma imagen. Para obtener más información, consulte Idempotencia.

    El *result.resultCode* correspondiente es ```SUCCESS``` y el *result.resultMessage* es Success.

  </td>
  </tr>
  <tr>
   <td>U</td>
   <td className='p-no-margin'>
      Se desconoce el estado de la solicitud de creación de un código QR.  

      El *result.resultCode* correspondiente es ```UNKNOWN_EXCEPTION``` y el *result.resultMessage* es "Ha fallado una llamada a la API por motivos desconocidos". Para más detalles, consulte la sección [Códigos de error comunes](/). 
   </td>
  </tr>
  <tr>
   <td>F</td>
   <td className='p-no-margin'>
      La solicitud para crear un código QR ha fallado.

      Los códigos *result.resultCode* y *result.resultMessage* correspondientes varían en función de la situación. Para más detalles, consulte la siguiente sección [Códigos de error](/).
   </td>
  </tr>
</table>

## Códigos de error   

Los códigos de error suelen clasificarse en las siguientes categorías:

* [Códigos de error comunes](/): son comunes para todos los miniprogramas OpenAPI de la V2.  
* Códigos de error específicos de la API: La OpenAPI actual no tiene sus códigos de error específicos.

## EJEMPLOS

El flujo de datos para crear un código QR se ilustra a continuación:

![SAMPLES](.\img\ejemplo2.JPG)

1. El servidor del comerciante o el servidor ISV llama a esta API para solicitar a la Mini Plataforma de Programación que cree un código QR.
2. La Mini Plataforma de Programas procesa la solicitud y devuelve el valor y la imagen del código QR generado al servidor del comerciante o al servidor ISV.

### Requerimiento

```js
{
    "appId":"P000000000000001xxxx",
    "appQrCodeType":"PROMO",
    "appQrCodePage":"page/component/component-pages/view",
    "appQrCodeParams":"x=1&y=2",
    "appQrCodeDesc":"My Shop QR code"
}
```
* El comerciante solicita crear un código QR (con la descripción ```My Shop QR code```) para el mini programa (```P000000000000001xxxx```).
* El código QR enlaza con la página del miniprograma (```page/component/component-pages/view```) con parámetros (```x=1&y=2```).

### Respuesta

```js
{
    "appQrCode": "https://miniprogram.alipay.com/mini-qr/28166612109YMP7RLw7zT2HU1k6AXzSOFfv4qu3xxxx",
    "appQrCodePicValue": "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",
    "appQrCodeResultPicType": "BASE64",
  
    "result": {
        "resultCode": "SUCCESS",
        "resultMessage": "success",
        "resultStatus": "S"
    }
}
```
* *result.resultStatus* es ```S```, lo que indica que el código QR se ha creado correctamente.
* La URL de redireccionamiento del código QR es appQrCode (https://miniprogram.alipay.com/mini-qr/28166612109YMP7RLw7zT2HU1k6AXzSOFfv4qu3xxxx).
* La imagen del código QR está en formato *appQrCodeResultPicType* (```BASE64```).

## Enlaces relacionados

[my.getAppIdSync](/)


---
sidebar_position: 2
---


Antes de llamar a una API, se necesita firmar una solicitud.Después de enviar la solicitud y obtener la respuesta, debe validar la firma de respuesta en consecuencia.

## Sign a request
### Procedures

    1. Obtenga su clave privada, representada por```privateKey```, que se usa para firmar una solicitud.
    2. Construir el contenido a firmar (```Content_To_Be_Signed```).
    3. Calcule y genere la firma.
    4. Agregue la firma generada al encabezado de solicitud.

Para obtener detalles de cada paso, consulte los siguientes ejemplos.

### Ejemplo

#### 1. Obtenga su clave privada para firmar la solicitud

    Prepare su llave privada, que se utiliza para generar la firma más adelante.

#### 2. Construir el contenido a firmar

Por ejemplo, una solicitud tiene las siguientes propiedades:

  *  ```HTTP_URI ```: for example, /api/v2/payments/pay
  *  ```Client-Id``` : TEST_5X00000000000000
  * ```Request-Time``` : 2019-05-28T12:12:12+08:00
  * ```HTTP_BODY ```: the body looks like the following format.

  ```js
  {
 "order":{
    "orderId":"OrderID_0101010101",
    "orderDescription":"sample_order",
    "orderAmount":{
       "value":"100",
       "currency":"JPY"
    }，
 },
 "paymentAmount":{
    "value":"100",
    "currency":"JPY"
 },
 "paymentFactor": {
     "isInStorePayment": "true"
 } 
} 
  ```
Cumpliendo con el Syntax of Content_To_Be_Signed,el contenido a firmar (```Content_To_Be_Signed```) se crea de la siguiente manera:

```js
POST /api/v2/payments/pay
TEST_5X00000000000000.2019-05-28T12:12:12+08:00.{
"order":{
    "orderId":"OrderID_0101010101",
    "orderDescription":"sample_order",
    "orderAmount":{
       "value":"100",
       "currency":"JPY"
    }，
 },
 "paymentAmount":{
    "value":"100",
    "currency":"JPY"
 },
 "paymentFactor": {
     "isInStorePayment": "true"
 } 
}
```

**Syntax of** ```Content_To_Be_Signed```

<table>
  <tbody>
    <tr>
      <td>
      ```<HTTP_METHOD> <HTTP_URI>```
      ```<Client-Id>.<Request-Time>.<HTTP_BODY>```
      </td>
    </tr>
  </tbody>
</table>

*  **```HTTP_METHOD```** : POST
*  **```HTTP_URI```**: Por ejemplo, si la URL HTTP es https://example.com/api/v2/payments/pay, Esta propiedad es /api/v2/payments/pay.
*  **```Client-Id```**: se usa para identificar a un cliente y se asocia con las claves que se utilizan para la firma y.Puede obtener este campo desde el encabezado de solicitud.
*  **```Request-Time```**: Especifica el momento en que se envía una solicitud, según lo define ISO8601.Nota: Este campo debe ser preciso para milisegundos. Por ejemplo, 2019-05-28T12: 12: 12+08: 00.Puede obtener este campo desde el encabezado de solicitud.
*  **```HTTP_BODY```**: el cuerpo de datos de una solicitud.

## 3. Calculate and generate the signature

Utilizar el sha256withrsa Método que implica el algoritmo adecuado y la clave privada para calcular y generar la firma.

<table>
  <tbody>
    <tr>
      <td>```generatedSignature=base64UrlEncode(sha256withrsa(<Content_To_Be_Signed>), <privateKey>)```</td>
    </tr>
  </tbody>
</table>

* ```Content_To_Be_Signed```: el contenido se firmará que se obtenga en el paso 2.
* ```privateKey``` : El valor de la clave privada que se obtiene en el Paso 1.
* ```sha256withrsa``` : elAlgoritmoParaUsar, RSA256.

Por ejemplo, la firma generada ```generatedSignature``` se ve como sigue:

<table>
  <tbody>
    <tr>
      <td>KrwDE9tAPJYBb4cUZU6ALJxGIZgwDXn5UkFPMip09n%2FkYKPhEIII%2Fki2rYY2lPtuKVgMNz%2BtuCU%
          2FjzRpohDbrOd8zYriiukpGAxBQDIVbatGI7WYOcc9YVQwdCR6ROuRQvr%2FD1AfdhHd6waAASu5Xugow9
          w1OW7Ti93LTd0tcyEWQYd2S7c3A73sHOJNYl8DC1PjasiBozZ%2FADgb7ONsqHo%2B8fKHsLygX9cuMkQY
          TGIRBQsvfgICnJhh%2BzXV8AQoecJBTrv6p%xxxx</td>
    </tr>
  </tbody>
</table>


## 4. Agregue la firma generada al encabezado de solicitud

a. Ensamblar una cadena de firma como la siguiente sintaxis. 

<table>
  <tbody>
    <tr>
      <td>```'Signature: algorithm=<algorithm>, keyVersion=<key-version>, signature=<generatedSignature>'```</td>
    </tr>
  </tbody>
</table>

  *  ```algorithm``` , ```keyVersion``` : ver el encabezado del Message structure capítulo.
  *  ```generatedSignature``` : La firma que se genera en el paso 3.

Por ejemplo: 

<table>
  <tbody>
    <tr>
      <td>'Signature: algorithm=RSA256, keyVersion=0, signature=KrwDE9tAPJYBb4cUZU6ALJxGIZgwDXn5UkFPMip09n%2FkYKPhEIII%2Fki2rYY2lPtuKVgMNz%2BtuCU%2FjzRpohDbrOd8zYriiukpGAxBQDIVbatGI7WYOcc9YVQwdCR6ROuRQvr%2FD1AfdhHd6waAASu5Xugow9w1OW7Ti93LTd0tcyEWQYd2S7c3A73sHOJNYl8DC1PjasiBozZ%2FADgb7ONsqHo%2B8fKHsLygX9cuMkQYTGIRBQsvfgICnJhh%2BzXV8AQoecJBTrv6p%xxxx'</td>
    </tr>
  </tbody>
</table>

b. Agregue la cadena de firma al encabezado de solicitud.

Por ejemplo:

<table>
  <tbody>
    <tr>
      <td>-H 'Signature: algorithm=RSA256, keyVersion=0, signature=KrwDE9tAPJYBb4cUZU6ALJxGIZgwDXn5UkFPMip09n%2FkYKPhEIII%2Fki2rYY2lPtuKVgMNz%2BtuCU%2FjzRpohDbrOd8zYriiukpGAxBQDIVbatGI7WYOcc9YVQwdCR6ROuRQvr%2FD1AfdhHd6waAASu5Xugow9w1OW7Ti93LTd0tcyEWQYd2S7c3A73sHOJNYl8DC1PjasiBozZ%2FADgb7ONsqHo%2B8fKHsLygX9cuMkQYTGIRBQsvfgICnJhh%2BzXV8AQoecJBTrv6p%xxxx'</td>
    </tr>
  </tbody>
</table>

## Enviar una solicitud

Construya una solicitud agregando los campos del ID del cliente, el tiempo de solicitud y la firma al encabezado de solicitud. Después de construir una solicitud, puede usar herramientas comunes, como Curl o Postman para enviar la solicitud. En el siguiente ejemplo, se usa curl.

```js
curl -X POST \
  https://example.com/api/v2/payments/pay \
  -H 'Content-Type: application/json' \
  -H 'Client-Id: TEST_5X00000000000000' \
  -H 'Request-Time: 2019-05-28T12:12:12+08:00' \
  -H 'Signature: algorithm=RSA256, keyVersion=0, signature=KrwDE9tAPJYBb4cUZU6ALJxGIZgwDXn5UkFPMip09n%2FkYKPhEIII%2Fki2rYY2lPtuKVgMNz%2BtuCU%2FjzRpohDbrOd8zYriiukpGAxBQDIVbatGI7WYOcc9YVQwdCR6ROuRQvr%2FD1AfdhHd6waAASu5Xugow9w1OW7Ti93LTd0tcyEWQYd2S7c3A73sHOJNYl8DC1PjasiBozZ%2FADgb7ONsqHo%2B8fKHsLygX9cuMkQYTGIRBQsvfgICnJhh%2BzXV8AQoecJBTrv6p%xxxx' \
  -d '{
      "order":{
          "orderId":"OrderID_0101010101",
          "orderDescription":"sample_order",
          "orderAmount":{
             "value":"100",
             "currency":"JPY"
          }
       },
       "paymentAmount":{
          "value":"100",
          "currency":"JPY"
       },
       "paymentFactor": {
           "isInStorePayment": "true"
       } 
}'
```

## Manejar una respuesta  

Después de recibir una respuesta, debe validar la firma de la respuesta. Una respuesta consiste en encabezados de respuesta y el cuerpo de respuesta. Por ejemplo:

* La muestra de encabezado de respuesta

<table>
  <tbody>
    <tr>
      <td>Client-Id: 5X00000000000000
Response-Time: 2019-05-28T12:12:14+08:00
Signature: algorithm=RSA256, keyVersion=0, signature=p9T2hXxIjek0UOLw3fwlthNsV6ATaioIvu8X1uFx8a9tE87d2XEhqylnf0KjifJ3WhCoMokl
GwwlDS3tsSenwnL0Ha6BsXbJvUHRC5qcVlNy5Oq%2FpNqx2%2BKdwbw4eY7tZBDQhMKoaMVSbqbCb3eRBxxxx
Trace-Id: 0ba604b41558615600801371953814.0</td>
    </tr>
  </tbody>
</table>

* La muestra del cuerpo de respuesta

```js
{
"result": {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
},
"paymentTime": "2019-05-28T12:12:13+08:00",
"paymentId":"1234567"
}

```

## Validate a signature 

 1. Obtener la clave pública de la plataforma.
 2. Construir el contenido para ser validado ( ```Content_To_Be_Validated``` ).
 3. Obtenga la firma del encabezado de respuesta.
 4. Validar la firma.

Para obtener detalles de cada paso, consulte los siguientes ejemplos.

Ejemplo

### 1. Obtener la clave pública de la plataforma

La ```Client-Id``` y ```KeyVersion``` Las propiedades se pueden obtener del encabezado de respuesta.Los comerciantes envían estas propiedades a la billetera, según las cuales, la billetera devuelve la clave pública al comerciante.

### 2. Construct the content to be validated

Dado que response body sample arriba, cumpliendo con el Syntax of Content_To_Be_Validated, cconstruir el contenido para ser validado (```Content_To_Be_Validated```) como sigue:

```js
POST /api/v2/payments/pay
TEST_5X00000000000000.2019-05-28T12:12:14+08:00.{
 "result": {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
 },
 "paymentTime": "2019-05-28T12:12:13+08:00",
 "paymentId":"1234567"
}

```

#### Syntax of ```Content_To_Be_Validated```

<table>
  <tbody>
    <tr>
      <td>```<HTTP_METHOD> <HTTP_URI>
<Client-Id>.<Response-Time>.<HTTP_BODY>```</td>
    </tr>
  </tbody>
</table>

  *  ```Client-Id``` : identifica un cliente. Puede obtener este campo desde el encabezado de respuesta.Por ejemplo TEST_5X00000000000000
  *  ```Response-Time```: Indica el momento en que se devuelve una respuesta, como se define por ISO8601. Nota: Este campo debe ser preciso para milisegundos.Puede obtener este campo desde el encabezado de respuesta.
  * ``` HTTP_BODY``` : Indica el cuerpo de datos de la respuesta.

### 3. Conseguir la firma del encabezado de respuesta

La cadena de firma de destino ( ```target_signature``` ) se extrae del encabezado de firma de la respuesta.Para detalles sobre el encabezado de respuesta, see the Message structure capítulo.

<table>
  <tbody>
    <tr>
      <td>```Signature: algorithm=RSA256, keyVersion=0, firma=<target_signature>```</td>
    </tr>
  </tbody>
</table>


### 4. Validar la firma

Utilizar el ```sha256withrsa_verify``` método para validar la firma de una respuesta.

Sintaxis del ```sha256withrsa_verify``` método: 

<table>
  <tbody>
    <tr>
      <td>```sha256withrsa_verify(base64UrlDecode(<target_signature>), <Content_To_Be_Validated>, <serverPublicKey>)```</td>
    </tr>
  </tbody>
</table>

  * ```target_signature``` : La firma extraída del encabezado de respuesta, que se obtiene del paso 3.
  * ```Content_To_Be_Validated``` : El contenido se validará que se crea desde el paso 2.
  * ```serverPublicKey``` : La clave pública de la plataforma que se obtiene del paso 1.

## More information

[Message structure](./)
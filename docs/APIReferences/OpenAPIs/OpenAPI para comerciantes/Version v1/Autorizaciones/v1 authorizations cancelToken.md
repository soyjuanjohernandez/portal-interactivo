---
sidebar_position: 3
---

POST /v1/authorizations/cancelToken

The cancelToken API is used to cancel access token at wallet.

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
      <td>accessToken</td>
      <td>String </td>
      <td>Yes	</td>
      <td>Un token de acceso que se puede usar para acceder al alcance del recurso del usuario.
      Max.Longitud: 128 caracteres.</td>
    </tr>
    <tr>
      <td>extendInfo	</td>
      <td>String 	</td>
      <td>No</td>
      <td>La información extendida, la billetera y el comerciante pueden poner información extendida aquí.
      Max.Longitud: 4096 caracteres.</td>
    </tr>
</table>


### Response

<table>
    <tr>
      <th>result</th>
      <th>Result</th>
      <th>Yes</th>
      <th>El resultado de la solicitud, que contiene información relacionada con el resultado de la solicitud, como los códigos de error y de error.</th>
    </tr>
     <tr>
      <td>extendInfo	</td>
      <td>String 	</td>
      <td>No</td>
      <td>The extend information,wallet and merchant can put extend info here.
      Max. length: 4096 characters.</td>
    </tr>  
</table>


### Lógica del proceso de resultados

Para diferentes resultados de solicitud, se deben realizar diferentes acciones.Consulte la siguiente lista para más detalles:

  * Si el valor del **result.resultStatus** es s, eso significa que la autorización se cancela correctamente. AuthClient no podrá utilizar el AccessToken para acceder a los recursos del usuario, y es posible que no use el relativo refreshToken para recuperar el nuevo accesstoken.
  * Si el valor del **result.resultStatus** es F o U, eso significa que la autorización se cancela falló, AuthClient puede guiar al usuario a intentarlo nuevamente.

### Result


<table>
    <tr>
      <th>Estado de resultados</th>
      <th>código de resultado</th>
      <th>resulta</th>
    </tr>
    <tr>
      <td>S	</td>
      <td>SUCCESS	</td>
      <td>Success.</td>
    </tr>
    <tr>
      <td>U	</td>
      <td>UNKNOWN_EXCEPTION	</td>
      <td>An API calling is failed, which is caused by unknown reasons.</td>
    </tr>
    <tr>
      <td>U	</td>
      <td>REQUEST_TRAFFIC_EXCEED_LIMIT	</td>
      <td>The request traffic exceeds the limit.</td>
    </tr>
    <tr>
      <td>F	</td>
      <td>PROCESS_FAIL	</td>
      <td>A general business failure occurred. Don't retry.</td>
    </tr>
     <tr>
      <td>F	</td>
      <td>PARAM_ILLEGAL	</td>
      <td>Illegal parameters exist. For example, a non-numeric input, or an invalid date.</td>
    </tr>
    <tr>
      <td>F	</td>
      <td>ACCESS_DENIED	</td>
      <td>The access is denied.</td>
    </tr>
     <tr>
      <td>F	</td>
      <td>INVALID_API	</td>
      <td>The called API is invalid or not active.</td>
    </tr>
    <tr>
      <td>F	</td>
      <td>INVALID_AUTH_CLIENT_STATUS	</td>
      <td>Invalid auth client status.</td>
    </tr>
     <tr>
      <td>F	</td>
      <td>INVALID_ACCESS_TOKEN	</td>
      <td>The access token is invalid.</td>
    </tr>
    <tr>
      <td>F	</td>
      <td>INVALID_AUTH_CLIENT	</td>
      <td>The auth client id is invalid. </td>
    </tr>
    <tr>
      <td>F	</td>
      <td>EXPIRED_ACCESS_TOKEN	</td>
      <td>The access token is expired.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>EXPIRED_AGENT_TOKEN</td>
      <td>The access token of mini program is expired.</td>
    </tr>
    <tr>
      <td>F</td>
      <td>INVALID_AGENT_TOKEN	</td>
      <td>The access token of mini program is invalid.</td>
    </tr>
</table>


## Muestra

Puede cancelar la autorización.Después de la cancelación, el Refresh_Token no se puede usar incluso si es válido.

[CancelToken](../../img/Au_CancelToken.png)


Cuando el usuario cancela el token de acceso desde el programa mini,

    El servidor comercial calls /v1/authorizations/cancelToken interfaz para cancelar el token de acceso (Step 2).
    Y el servidor de billetera devuelve el resultado de Cacnel de token al servidor Merchant(Step 3).

### Request 
```js
{
  "accessToken": "281010033AB2F588D14B43238637264FCA5Axxxx",
  "extendInfo": "{\"customerBelongsTo\":\"siteNameExample\"}"
}

```

* **extendInfo**, Incluye Key - CustomerBelongsto la billetera electrónica que usa el cliente. Correspondiente al campo 'Sitename' que obtuvo de la API 'my.getSiteInfo', en el mini escenario del programa esto es obligatorio.

### Response 
```js
{
 "result": {
    "resultCode":"SUCCESS",
    "resultStatus":"S",
    "resultMessage":"success"
  }
}```
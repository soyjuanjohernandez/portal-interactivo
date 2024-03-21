---
sidebar_position: 1
---


POST ```/v2/authorizations/applyToken```

Con esta llamada de API, un comerciante puede obtener un token de acceso de la super aplicación.Luego, los usuarios autorizan al comerciante a proporcionar servicios en el programa mini.

   
<table>
  <tbody>
    <tr>
      <td>
      **Nota:**
       ``` 
      * Antes de llamar a esta API, llame al [my.getAuthCode](../../../../JSAPI/) JSAPI para obtener un código de autorización del Super App como parámetro de solicitud.Luego llame a esta API para intercambiar un token de acceso desde la Super App.
      * Cuando expire el token de acceso original, use el token de actualización para intercambiar por un nuevo token de acceso directamente.En este escenario, esta API se puede usar de forma independiente.
      * Un token de acceso debe mantenerse solo en el servidor comercial, lo que significa que no debe devolverse al Mini Programa.
      ```
      </td>
    </tr>
  </tbody>
</table>

### Structure

Un mensaje consiste en un encabezado y un cuerpo.Las siguientes secciones se centran en la estructura del cuerpo.Para la estructura del encabezado, ver:

  *  [Request header](../../../Descrición%20general.md)
  *  [Response header](../../../Descrición%20general.md)

#### Parámetros de solicitud


<table>
 <tr>
   <th>Campo</th>
   <th>Tipo de datos</th>
   <th>Requerido</th>
   <th>Descripción</th>
   <th>Ejemplo</th>
 </tr>
  <tr>
   <td>appId</td>
   <td>String</td>
   <td>Yes	</td>
   <td>
   Indica la ID única asignada por la plataforma Mini Program para identificar un miniprogram.
    - Longitud máxima: 32 caracteres
    - Personajes no permitidos: ¿caracteres especiales como @ #?

Nota: Obtenga este campo a través del [my.getAppIdSync](../../../../JSAPI/Básica/my.getAppIdSync.md) JSAPI o plataforma de mini programa.
</td>
   <td>"3333010071465913xxx"</td>
 </tr>
 <tr>
   <td>authClientId </td>
   <td>String </td>
   <td>Yes</td>
   <td>
    Indica la ID única asignada por la super aplicación para identificar a un comerciante autorizado.
  - Longitud máxima: 128 caracteres
  - Personajes no permitidos: caracteres especiales como @ #? 
   </td>
   <td>"202016726873874774774xxxx"</td>
 </tr>
 <tr>
   <td>grantType</td>
   <td>String </td>
   <td>Yes</td>
   <td>
    Indica la forma en que el comerciante autorizado obtiene un token de acceso.Los valores válidos son: 
  -  ```AUTHORIZATION_CODE:``` Intercambio por un token de acceso.
  -  ```REFRESH_TOKEN: Exchange``` Para un nuevo token de acceso cuando el original expire.
   </td>
   <td>"AUTHORIZATION_CODE"</td>
 </tr>
 <tr>
   <td>customerBelongsTo</td>
   <td>String </td>
   <td>No</td>
   <td>
    Indica la super aplicación que usa un usuario.Los valores válidos son:
    - ```ALIPAY_CN```: alipayCn
    - ```ALIPAY_HK```: alipayHk
    - ```ALIPAY_MO```: Alipay Mo
    - ```TNG```: Touch 'n Go
    - ```GCASH```: Gcash
    - ```DANA```:  Dana
    - ```KAKAOPAY```:  KakaoPay
    - ```BKASH```: bKash
    - ```CHOPE```: Chope
    - ```TRUEMONEY```: TrueMoney
   </td>
   <td>"TNG"</td>
 </tr>
  <tr>
   <td>authCode</td>
   <td>String</td>
   <td>No</td>
   <td>
   El código de autorización se utiliza para intercambiar un token de acceso.Los mini programas pueden obtener un código de autorización a través del **my.getAuthCode** JSAPI y luego envíelo al comerciante. Luego, el comerciante está autorizado a usar el código de autorización para intercambiar por un token de acceso.
  - Longitud máxima: 64 caracteres
  - Personajes no permitidos: ¿caracteres especiales como @ #?
  -  Puede ser ```Null```.

   ** Nota **: Este campo se requiere cuando el valor de GrantType es ```AUTHORIZATION_CODE```.
   </td>
   <td>"2810111301lGZcM9CjlF91WH00039190xxxx"</td>
 </tr>
 <tr>
   <td>refreshToken</td>
   <td>String </td>
   <td>No</td>
   <td>
   El token de actualización se utiliza para intercambiar un nuevo token de acceso cuando el original expira. Con el token de actualización, se puede obtener un nuevo token de acceso sin más interacción con el usuario.
   - Longitud máxima: 128 caracteres
   - Personajes no permitidos: ¿caracteres especiales como @ #?
   - Puede ser ```Null```.

    **Note**: This field is required when the value of grantType is ```REFRESH_TOKEN.``` 
   </td>
   <td>"2810111301lGZcM9CjlF91WH00039190xxxx"</td>
 </tr>
 <tr>
   <td>extendInfo</td>
   <td>String</td>
   <td>No</td>
   <td>
  Indica la información extendida sobre esta API.
 - Longitud máxima: 4096 caracteres
 - Personajes no permitidos: ¿caracteres especiales como @ #?
 -  Puede ser ```Null```.
   </td>
   <td>    ``` {
    "memo": "memo"
    }```</td>
 </tr>
</table>
	


	






	


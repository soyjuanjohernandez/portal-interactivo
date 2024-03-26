# my.getOpenUserInfo

Obtener la información básica sobre un usuario. Esta función requiere que el usuario active deliberadamente la función. Esta función no se llama directamente mediante la API, sino que espera a que el usuario la active haciendo clic en un componente `<button>`. Si el Mini Program desea obtener el ID de usuario, por favor llame a `my.getAuthCode`.
Para obtener más información, consulte la obtención de información básica de miembro.

### Uso de Atención

Debe establecer el valor del componente `<button>` `open-type` a `getAuthorize` y establecer el valor del `scope` a `userInfo`. Después de que el usuario haga clic en el botón de autorización, el Mini Programa puede obtener la información del usuario devuelta por el JSAPI `my.getOpenUserInfo`.
`my.getOpenUserInfo` enviará una solicitud de red al servidor para obtener la información del usuario, por lo que puede llevar algún tiempo antes de que se invoque la función de devolución de llamada.

## Parámetros

<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>success</td>
      <td>Función</td>
      <td>No</td>
      <td>Función de devolución de llamada al éxito de la llamada.</td>
    </tr>
    <tr>
      <td>fail</td>
      <td>Función</td>
      <td>No</td>
      <td>Función de devolución de llamada en caso de fallo de la llamada.</td>
    </tr>
    <tr>
      <td>complete</td>
      <td>Función</td>
      <td>No</td>
      <td>Función de devolución de llamada al completar la llamada (para ejecutarse tanto en caso de éxito como de fallo de la llamada).</td>
    </tr>
  </tbody>
</table>

## Función de Devolución de una llamada satisfactoria

El parámetro de entrada es de tipo Object con los siguientes atributos:

<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>code</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>El código de resultado.</td>
    </tr>
    <tr>
      <td>msg</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>El mensaje de resultado.</td>
    </tr>
    <tr>
      <td>avatar</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>URL de la imagen de avatar del usuario.</td>
    </tr>
    <tr>
      <td>nickName</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>Apodo del usuario.</td>
    </tr>
    <tr>
      <td>gender</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>Género del usuario. "m" es masculino, "f" es femenino.</td>
    </tr>
    <tr>
      <td>countryCode</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>El código del país donde se encuentra el usuario. Debe seguir el estándar de [ISO 3166-1 alfa-2 code](/), como 'US', 'SG'.</td>
    </tr>
    <tr>
      <td>province</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>La provincia donde se encuentra el usuario.</td>
    </tr>
    <tr>
      <td>city</td>
      <td>Cadena</td>
      <td>NO</td>
      <td>La ciudad donde se encuentra el usuario.</td>
    </tr>
  </tbody>
</table>

Estos campos se devuelven cada vez, pero será una cadena vacía si la aplicación no devuelve la información relacionada.
La longitud máxima de estos campos es de 128 bytes excepto avatar, la longitud máxima de avatar es de 2048 bytes.

### Código de Ejemplo

```xml
<button 
	a:if="{{canIUseAuthButton}}" 
	open-type="getAuthorize" 
	onGetAuthorize="onGetAuthorize" 
    onError="onAuthError" 
	scope='userInfo'>
</button>
```

### Descripción de las Prpopiedades de Button

<table>
  <thead>
    <tr>
      <th>Nombre</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>open-type</td>
      <td>getAuthorize (Debe ser este valor).</td>
    </tr>
    <tr>
      <td>scope</td>
      <td>userInfo (Debe ser este valor).</td>
    </tr>
    <tr>
      <td>onGetAuthorize</td>
      <td>Devolución de llamada de éxito de autorización (El Mini Programa puede llamar a my.getOpenUserInfo para obtener información en esta devolución de llamada).</td>
    </tr>
    <tr>
      <td>onError</td>
      <td>Devolución de llamada de fallo de autorización (Incluye rechazo del usuario y excepciones del sistema).</td>
    </tr>
  </tbody>
</table>

### Obtener Información Básica del Usuario
Después de que el usuario haga clic en el consentimiento, se puede obtener la información básica del usuario a través de my.getOpenUserInfo().

```js
onGetAuthorize(res) {
    my.getOpenUserInfo({
        fail: (res) => {
        },
        success: (res) => {
            let userInfo = JSON.parse(res.response).response
        }
    });
}
```

#### Retornar objeto Res en la devolución de una llamada satifactoria

- Un ejemplo de objeto res devuelto exitosamente es el siguiente:

```js
{
    "response": "{\"response\": {\"code\": \"10000\",\"msg\": \"Success\",\"countryCode\": \"code\",\"gender\": \"f\",\"nickName\": \"XXX\",\"avatar\": \"https://cdn/images/partner/XXXXXXXX\",\"city\": \"city\",\"province\": \"province\"}}"
}
```

- Si la función de paquete "Obtener Información Básica del Usuario" no está conectada, el ejemplo de formato del mensaje res devuelto es el siguiente:

```json
{
    "response":"{\"response\":{\"code\":\"40006\",\"msg\":\"Insufficient Permissions\",\"subCode\":\"isv.insufficient-isv-permissions\",\"subMsg\": \"Insufficient permissions\"}}"
}
```
# my.getAuthCode

Llama a la API para obtener el código de autorización. El código de autorización se puede utilizar para obtener el token de acceso, de modo que se pueda obtener la información del usuario de la aplicación, como el ID de usuario y el apodo. Para obtener más información, consulta la [Autorización de usuario](/).

## Código de ejemplo
```javascript
my.getAuthCode({
  scopes: ['auth_base'],
  success: (res) => {
    my.alert({
      content: res.authCode,
    });
  },
  fail: (res) => {
      console.log(res.authErrorScopes)
  },
});
```

## Parámetros

| Propiedad | Tipo     | Requerido | Descripción                                        |
|----------|----------|----------|----------------------------------------------------|
| scopes   | Array    | Sí      | El ámbito de autorización. Para obtener más información sobre sus valores válidos, consulta la [descripción del scope](/). |
| success  | Función | No       | Función de devolución de llamada al éxito de la llamada.               |
| fail     | Función | No       | Función de devolución de llamada al fracaso de la llamada.               |
| complete | Función | No       | Función de devolución de llamada al finalizar la llamada (para ejecutarla al éxito o al fracaso de la llamada). |

## Descripción de los ámbitos

| Valor válido           | Descripción                                                        |
|-----------------------|--------------------------------------------------------------------|
| auth_base             | Autorizado para obtener silenciosamente solo el ID de usuario.                        |
| auth_user             | Autorizado para obtener el ID de usuario y otra información del usuario.           |
| SEND_MESSAGE          | Autorizado para enviar notificaciones al usuario a través de SMS, PUSH o INBOX. |
| USER_NICKNAME         | Autorizado para obtener el apodo del usuario.                           |
| USER_NAME             | Autorizado para obtener el nombre de usuario.                               |
| USER_LOGIN_ID         | Autorizado para obtener el ID de inicio de sesión del usuario.                         |
| PLAINTEXT_USER_LOGIN_ID | Autorizado para obtener el ID de inicio de sesión del usuario en texto plano.               |
| HASH_LOGIN_ID         | Autorizado para obtener el ID de inicio de sesión del usuario en hash.                      |
| USER_AVATAR           | Autorizado para obtener el avatar del usuario.                             |
| USER_GENDER           | Autorizado para obtener el género del usuario.                           |
| USER_BIRTHDAY         | Autorizado para obtener el cumpleaños del usuario.                         |
| USER_NATIONALITY      | Autorizado para obtener la nacionalidad del usuario.                      |
| USER_CONTACTINFO      | Autorizado para obtener la información de contacto del usuario.              |
| USER_ADDRESS          | Autorizado para obtener la dirección del usuario.                          |
| PLAINTEXT_MOBILE_PHONE | Autorizado para obtener el número de teléfono móvil del usuario en texto plano.           |

:::note
Nota: `auth_base` se utiliza para obtener silenciosamente solo el ID de usuario. La autorización silenciosa no muestra el marco y obtiene directamente la información del usuario. Todos los demás ámbitos se utilizan para la autorización proactiva del usuario.
:::

### Función de devolución de llamada

El parámetro de entrada es de tipo Object con los siguientes atributos:

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>authCode</td>
      <td>Cadena de caracteres</td>
      <td>Sí</td>
      <td>Código de autorización.</td>
    </tr>
    <tr>
      <td>authErrorScopes</td>
      <td>Clave-valor</td>
      <td>Sí</td>
      <td>El alcance que falla al otorgar autorización. `key` es el alcance y el `value` es el error.</td>
    </tr>
    <tr>
      <td>authSuccessScopes</td>
      <td>Matriz</td>
      <td>Sí</td>
      <td>El ámbito que tiene éxito al otorgar autorización.</td>
    </tr>
  </tbody>
</table>

#### Ejemplo de respuesta exitosa

```js
{
    "authCode":"1591797390204",
    "authSuccessScopes":['auth_base']
}
```

#### Ejemplo de respuesta a la falla

```js
{
    "authErrorScopes":{
       "auth_user":"10001"
    }
}
```
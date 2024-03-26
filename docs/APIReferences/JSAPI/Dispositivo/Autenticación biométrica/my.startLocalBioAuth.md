---
sidebar_position: 3
---

# my.startLocalBioAuth

La JSAPI **my.startLocalBioAuth** es llamada por los miniprogramas para iniciar un proceso de autenticación biométrica en el dispositivo del usuario.

## Parámetro de solicitud
<table>
<tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>fallbackType</td>
        <td>Número</td>
        <td>No</td>
        <td className='p-no-margin'>
            El método de autenticación alternativo cuando falla la autenticación biométrica. Los valores válidos son:

            * ```0```: No fallback.
            * ```1```: Volver a las credenciales del dispositivo.
            
            Si no especifica este parámetro, su valor será 0 por defecto.
        </td>
     </tr>
      <tr>
        <td>promptText</td>
        <td>String</td>
        <td>Si</td>
        <td className='p-no-margin'>
            El texto que se muestra en el mensaje biométrico. Para evitar el truncamiento y mejorar la experiencia del usuario, se recomienda utilizar un texto corto y claro para indicar el propósito de autenticación.
        </td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td className='p-no-margin'>
            La llamada de retorno que se ejecuta cuando la autenticación tiene éxito.
            
            Si necesita establecer callbacks para este JSAPI, especifique este parámetro y el parámetro *fail* o especifica el parámetro *completo*.
        </td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td className='p-no-margin'>
            La llamada de retorno que se ejecuta cuando falla la autenticación.

            Si necesitas establecer callbacks para este JSAPI, especifica este parámetro y el parámetro de *éxito* o especifica el parámetro *completo*.
        </td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td className='p-no-margin'>
           La llamada de retorno que se ejecuta cuando finaliza el proceso de autenticación, independientemente del éxito o el fracaso.

            Si necesita establecer retrollamadas para esta JSAPI, especifique este parámetro o especifique los parámetros *success* y *fail*.
        </td>
     </tr>
</table>

## Parámetro de respuesta
<table>
<tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Booleano</td>
        <td>No</td>
        <td className='p-no-margin'>
            Si la autenticación biométrica se ha realizado correctamente. Este parámetro se devuelve si se ejecuta la función de devolución de llamada de éxito o completa. Los valores válidos son:

            * ```true```: La autenticación biométrica se realiza correctamente.
            * ```False```: La autenticación biométrica falla.
        </td>
     </tr>
     <tr>
        <td>error</td>
        <td>Number</td>
        <td>No</td>
        <td>
            El código de error. Para más información, consulte [Códigos de error](./). Este parámetro se devuelve si se ejecuta la función de devolución de llamada de error o si el parámetro de respuesta de *éxito* se establece en ```FALSE``` cuando se ejecuta la función de devolución de llamada *completa*.
        </td>
     </tr>
     <tr>
        <td>errorMessage</td>
         <td>String</td>
        <td>No</td>
        <td className='p-no-margin'>
            El mensaje de error que corresponde al código de error. Para más información, consulte [Códigos de error](./). Este parámetro se devuelve si se ejecuta la función de devolución de llamada de error o si el parámetro de respuesta de *éxito* se establece en ```FALSE``` cuando se ejecuta la función de devolución de llamada *completa*.
        </td>
     </tr>
</table>

## Códigos de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Medidas adicionales</th>
    </tr>
    <tr>
        <td>11</td>
        <td>El usuario canceló el proceso de autenticación.</td>
        <td>N/A</td>
    </tr>
    <tr>
        <td>12</td>
        <td>O el dispositivo carece de soporte biométrico o la super aplicación no puede acceder a la función biométrica.</td>
        <td>Use otros métodos para autenticar al usuario si es necesario.</td>
     </tr>
     <tr>
        <td>13</td>
        <td>Las credenciales biométricas no están habilitadas en el dispositivo del usuario.</td>
        <td>Use otros métodos para autenticar al usuario si es necesario.</td>
     </tr>
     <tr>
        <td>99</td>
        <td>Se ha producido un error indefinido. Póngase en contacto con el soporte técnico para obtener asistencia.</td>
        <td>Póngase en contacto con el soporte técnico para obtener asistencia.</td>
     </tr>
</table>

## Código de muestra

El siguiente código de ejemplo muestra cómo llamar a la JSAPI my.startLocalBioAuth:

```js
my.startLocalBioAuth({
  fallbackType: 1,
  promptText: "Authenticate to unlock",
  success: (res) => {
    console.log(JSON.stringify(res))
  },
  fail: (res) => {
    console.log(JSON.stringify(res))
    if (res.error == 11) {
      // Logic to be executed when the authentication process is canceled by the user.
    }
  },
});
```

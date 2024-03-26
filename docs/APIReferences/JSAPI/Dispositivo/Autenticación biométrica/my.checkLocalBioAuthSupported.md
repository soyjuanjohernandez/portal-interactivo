---
sidebar_position: 2
---

# my.checkLocalBioAuthSupported

La JSAPI **my.checkLocalBioAuthSupported** es llamada por los miniprogramas para comprobar la disponibilidad de la autenticación biométrica en el dispositivo del usuario.

## Parámetro de solicitud
<table>
<tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td className='p-no-margin'>
            La devolución de llamada que se ejecuta cuando la autenticación biométrica está disponible en el dispositivo del usuario.

            Si necesitas establecer callbacks para este JSAPI, especifica este parámetro y el parámetro de *fail* o especifica el parámetro *completo*.
        </td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td className='p-no-margin'>
            La devolución de llamada que se ejecuta cuando la autenticación biométrica no está disponible en el dispositivo del usuario.
            
            Si necesitas establecer callbacks para este JSAPI, especifica este parámetro y el parámetro de *éxito* o especifica el parámetro *completo*.
        </td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td className='p-no-margin'>
            La llamada de retorno que se ejecuta cuando finaliza la comprobación de autenticación biométrica, independientemente de la disponibilidad de la función.

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
            Si la autenticación biométrica está disponible en el dispositivo del usuario. Este parámetro se devuelve si se ejecuta la función de devolución de llamada de *éxito* o *completa*. Los valores válidos son:

            * ```true```: La autenticación biométrica está disponible.
            * ```False```: La autenticación biométrica no está disponible.
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
    </tr>
    <tr>
        <td>12</td>
        <td>O el dispositivo carece de soporte biométrico o la super aplicación no puede acceder a la función biométrica.</td>
     </tr>
     <tr>
        <td>13</td>
        <td>Las credenciales biométricas no están habilitadas en el dispositivo del usuario.</td>
     </tr>
     <tr>
        <td>99</td>
        <td>Se ha producido un error indefinido. Póngase en contacto con el soporte técnico para obtener asistencia.</td>
     </tr>
</table>

## Código de muestra

El siguiente código de ejemplo muestra cómo llamar a la JSAPI my.checkLocalBioAuthSupported:

```js
my.checkLocalBioAuthSupported({
  success: (res) => {
    console.log(res)
  },
  fail: (res) => {
    console.log(res)
  },
});
```

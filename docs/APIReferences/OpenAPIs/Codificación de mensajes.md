---
sidebar_position: 3
---
Para evitar errores o ambigüedad causadas por caracteres especiales encerrados en un mensaje, debe codificar correctamente el mensaje antes de que se transmita el mensaje.

<table>
  <thead>
    <tr>
      <th>Escenarios de codificación </th>
      <th>Método de codificación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Para los datos de bytes, como la firma y el contenido encriptado, codifica los datos con el algoritmo Base64 antes de transmitir.</td>
      <td>Use la función Base64URLEncode para codificar datos al calcular para generar una firma.</td>
    </tr>
    <tr>
      <td>
            Para los datos de URL HTTPS, realice la codificación de URL primero antes de transmitir.
            Por ejemplo: 
            URL original: https://www.merchant.com/authorizationResult
            URL codificada: ```https%3A%2F%2Fwww.merchant.com%2FauthorizationResult```
        </td>
      <td>Use la función Base64URLEncode para codificar datos al calcular para generar una firma.</td>  
    </tr> 
  </tbody>
</table>



 
	




 

 
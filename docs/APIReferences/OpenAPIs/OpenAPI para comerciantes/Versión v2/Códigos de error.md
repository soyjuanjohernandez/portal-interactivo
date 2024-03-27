---
sidebar_position: 7
---

# Códigos de error
Si se produce un error al llamar a una API, se devuelve una respuesta de error, donde el objeto ```result``` indica el código de error (```resultCode```) y el mensaje de error (```resultMessage```). Puede utilizar los códigos y mensajes de error para solucionar problemas.

Los códigos de error suelen clasificarse en las siguientes categorías:

[Códigos de error comunes](/): son comunes para todas las OpenAPI del miniprograma.  
[Códigos de error específicos de la API](/): están dedicados a una OpenAPI concreta.

## Códigos de error comunes
La siguiente tabla enumera todos los códigos de error comunes para las OpenAPIs de Mini Program. Si no encuentra un código de error en la siguiente tabla, significa que el código de error no es común, sino que está dedicado a una OpenAPI específica.

<table>
    <tr>
      <th>Código de error</th>
      <th>Estado de resultados</th>
      <th>Mensaje de error</th>
      <th>Nuevas medidas</th>
    </tr>
     <tr>
      <td>PROCESS_FAIL</td>
      <td>F</td>
      <td>Se produjo una falla comercial general.No vuelva a intentarlo.</td>
      <td>Póngase en contacto con el [soporte técnico](/) para solucionar el problema. </td>
    </tr>
    <tr>
      <td>PARAM_ILLEGAL</td>
      <td>F</td>
      <td>Parámetros ilegales.Por ejemplo, entrada no numérica, fecha no válida.</td>
      <td>Compruebe y verifique si los campos de solicitud (incluidos los campos de encabezado y los campos corporales) de la API actual son correctos y válidos.Por ejemplo, [/v2/authorizations/applyToken](/).</td>
    </tr>
    <tr>
      <td>INVALID_API</td>
      <td>F</td>
      <td>La API llamada es inválida o no activa.</td>
      <td>Verifique si el nombre de la API actual es utilizado por errores cuando se llama a la API.</td>
    </tr>
    <tr>
      <td>ACCESS_DENIED</td>
      <td>F</td>
      <td>Acceso denegado</td>
      <td>Necesita comprobar el *resultMessage* de la especificación API actual para más detalles. Por ejemplo [/v2/authorizations/applyToken](/).</td>
    </tr>
    <tr>
      <td>REQUEST_TRAFFIC_EXCEED_LIMIT</td>
      <td>F</td>
      <td>El tráfico de solicitud excede el límite.</td>
      <td>
        * La parte que llama a las API necesita reducir la frecuencia de llamadas de API, o
        * El proveedor de servicios API necesita aumentar el límite de tráfico o el umbral.
      </td>
    </tr>
    <tr>
      <td>UNKNOWN_EXCEPTION</td>
      <td>U</td>
      <td>Se falló una llamada API, que es causada por razones desconocidas.</td>
      <td>Intentar recordar la API podría ayudar a resolver el problema.</td>
    </tr>
</table>

## Códigos de error específicos de la API
Para conocer los códigos de error dedicados a una API específica, consulte la sección **Códigos de error** de cada especificación de API, por ejemplo, [/v2/authorizations/applyToken](/).
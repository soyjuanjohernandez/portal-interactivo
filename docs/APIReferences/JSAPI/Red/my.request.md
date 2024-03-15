---
sidebar_position: 1
---

# my.request

Solicitud de red de un mini programa.

:::info[NOTAS:]
Configure la lista blanca del nombre de dominio al principio en ```Mini Programa```>```Configuración```> ```Servidor Dominio Whitelist```. El mini programa solo puede comunicarse con los nombres de dominio en la lista blanca durante las llamadas API: ```my.request``` (enviar solicitud HTTP), ```my.uploadFile``` (archivo de carga) y ```my.downloadFile``` (descargar archivo).
Durante el desarrollo de mini programa, en la herramienta de desarrollador, seleccione si se debe ignorar la verificación del nombre de dominio httprequest bajo ```detalles```> ```información del nombre de dominio```.En caso afirmativo, la validez del nombre de dominio no se verificará en los escenarios de depuración del simulador, vista previa y de la máquina real.Sin embargo, antes de que el mini programa se conje en línea, debe mantener los nombres de dominio en la lista blanca, de lo contrario, los nombres de dominio no pueden ser efectivos en la versión oficial.
:::

IMPORTANTE: El encabezado de solicitudes de ```my.request``` es ```*{'Content-type': 'Application/Json'}*``` por defecto, en lugar de ```{'Content-type': 'Application/X-WWW-Form-URLENCODED'}```.

## Código de muestra

```js
my.request({
  url: 'https://httpbin.org/post',
  method: 'POST',
  data: {
    from: 'Mini Program',
    production: 'JSAPI',
  },
  dataType: 'json',
  success: function(res) {
    my.alert({content: 'success'});
  },
  fail: function(res) {
    my.alert({content: 'fail'});
  },
  complete: function(res) {
    my.hideLoading();
    my.alert({content: 'complete'});
  }
});

const task = my.request({url: 'https://httpbin.org/post'})
task.abort()
```
## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>Si</td>
        <td>URL del servidor de destino.</td>
     </tr>
     <tr>
        <td>headers</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Establezca el encabezado HTTP de solicitud.El valor predeterminado es ```{'content-type': 'application/json'}```.</td>
     </tr>
     <tr>
        <td>method</td>
        <td>String</td>
        <td>No</td>
        <td>El valor por defecto es GET. Se admiten tanto GET como POST..</td>
     </tr>
     <tr>
        <td>data</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Parámetro de solicitud.</td>
     </tr>
     <tr>
        <td>timeout</td>
        <td>Número</td>
        <td>No</td>
        <td>Tiempo de espera en ms. El valor por defecto es 30000.</td>
     </tr>
     <tr>
        <td>dataType</td>
        <td>String</td>
        <td>No</td>
        <td className="p-no-margin">	
            Formato esperado de los datos devueltos.Se admiten los siguientes formatos:
            * JSON
            * texto
            * Base64

            El formato predeterminado es JSON. Si se produce una excepción, puede no ser JSON en la devolución de llamada.
        </td>
     </tr>
     <tr>
        <td>enableCookie</td>
        <td>Booleano</td>
        <td>No</td>
        <td className="p-no-margin">	
            	Indicates whether the cookie request header is used. Valid values are:
                * ```true```: indicates the cookie request header is used.
                * ```false```: indicates the cookie request header is ignored and any available and non-expired cookies that are returned by the server in the previous response are automatically used.
        </td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada exitosa a la API.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada a la API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada a la API. Esta función se ejecuta siempre, independientemente de que la llamada se realice correctamente o no.</td>
     </tr>
</table>

### Descripción del parámetro de datos

Los datos transferidos al servidor se expresan finalmente en String. Si el tipo no es String, los datos se convertirán en String. Las reglas de conversión son:

* Si el método es ```GET```, los datos se convertirán en cadena de consulta: encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...
* Si el método es ```POST``` y  ```headers['content-type']``` es ```application/json```, los datos se serializarán en JSON.
* Si el método es ```POST``` y el ```headers['content-type']``` es ```application/x-www-form-urlencoded```, los datos se convertirán en query string: encodeURIComponent(k)=encodeURIComponent(v)&encodeURIComponent(k)=encodeURIComponent(v)...

### Función de devolución de llamada de éxito
El tipo de parámetro entrante es el objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>data</td>
        <td>String</td>
        <td>Datos de respuesta. El formato depende del valor de ```dataType``` en la solicitud.</td>
     </tr>
     <tr>
        <td>status</td>
        <td>Number</td>
        <td>Código de respuesta.</td>
     </tr>
     <tr>
        <td>headers</td>
        <td>Objeto</td>
        <td>Encabezado de respuesta.</td>
     </tr>
</table>

## Código de error

<table>
    <tr>
        <th>Error</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>2</td>
        <td>Parámetro incorrecto.Verifique si la URL está en formato HTTPS y todos los parámetros son correctos.</td>
     </tr>
     <tr>
        <td>4</td>
        <td>
            No autorizado para llamar a la interfaz.El error podría resultar de lo siguiente:
            * La lista blanca del dominio del servidor no está configurada.En este caso, configure la lista blanca del dominio del servidor en ```Mini Programa```> ```Configuración```> ```Servidor Dominio Whitelist```. El mini programa solo puede comunicarse con los dominios en la lista blanca al llamar a las apis ```my.request``` y ```my.uploadfile```. Si se actualiza la lista blanca del dominio del servidor, la lista blanca entra en vigencia solo cuando se publica una nueva versión del mini programa.
            * Los errores ocurren con su cuenta y no puede iniciar sesión en la plataforma Mini Program.En este caso, cuando depire en el Mini Program Studio, seleccione *ignore HttpRequest Dominio* Nombre de validez Compruebe o *ignore la verificación del nombre de dominio de WebView* bajo ```Detalles```> ```Información del nombre de dominio``` y luego Vista previa de la solicitud de depuración.
            * Verifique si el nombre de dominio de solicitud HTTP es incorrecto. 
        </td>
     </tr>
     <tr>
        <td>12</td>
        <td>Error de red.</td>
     </tr>
     <tr>
        <td>13</td>
        <td>Se acabó el tiempo.</td>
     </tr>
     <tr>
        <td>14</td>
        <td>Falla de decodificación.</td>
     </tr>
     <tr>
        <td>19</td>
        <td>Error HTTP.</td>
     </tr>
     <tr>
        <td>20</td>
        <td>Solicitud detenido/Límite de tráfico final del servicio.</td>
     </tr>
</table>


:::info[NOTA:]

El código de error de 14 podría devolverse en los siguientes casos:

* Cuando el valor del ```tipo de datos``` es ```json```, el marco Mini del programa realiza en primer lugar la operación ```json.prase``` en los resultados devueltos.Si el análisis falla, se devuelve el código de error de 14.
* Cuando el valor del ```tipo de datos``` es ```texto``` y el contenido devuelto tiene un formato malo, se devuelve el código de error de 14.

Para resolver el error, verifique si la configuración del ```tipo de datos``` es incorrecta en primer lugar.
:::

## Valor de retorno
### RequestTask
Objeto de tarea de solicitud de red.

#### Método
RequestTask.abort()

:::info[NOTA:] 

Si no está autorizado para llamar a la interfaz, se devuelve la lista blanca de dominio en ```Mini Programa```> ```Configuración```> ```Servidor Dominio Whitelist``` en la plataforma del  mini Programa.
:::
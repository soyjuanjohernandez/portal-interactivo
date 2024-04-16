---
sidebar_position: 3
---


# fetchApps

La API de FetchApps es llamado por la aplicación Super para ejecutar una consulta con [FetchAppRequestVO](/) para obtener una lista asincrónica de mini programs que se lanzan a su aplicación. Esta API proporciona una capacidad de paginación para devolver los datos.


## Firma de método

```js
void fetchApps(FetchAppRequestVO fetchAppRequestVO, OnRpcResultListener<FetchAppsResult> listListener) 
```

## Parámetros de solicitud

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>fetchAppRequestVO</td>
        <td>FetchAppRequestVO</td>
        <td>Un objeto que se utiliza para establecer las condiciones de consulta de los mini programs.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>listListener</td>
        <td>OnRpcResultListener ```<FetchAppsResult>```</td>
        <td>
        La función de devolución de llamada que se utiliza para devolver el resultado de la consulta.
        - Si la consulta es exitosa, devuelve una lista de mini programs que coinciden con las condiciones de consulta especificadas. Ver FetchAppSresult para más detalles.
        - Si la consulta falla, devuelve el código de error y el mensaje de error. Vea el error para obtener más detalles.
        </td>
        <td>M</td>
    </tr>
</table>    



## Response parameters

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>result</td>
        <td>FetchAppsResult</td>
        <td>La lista de mini programs que se devuelve cuando la consulta es exitosa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>error</td>
        <td>Error</td>
        <td>El código de error y el mensaje de error que se devuelven cuando falla la consulta.</td>
        <td>O</td>
    </tr>
</table>



## Error codes

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Descripción</th>
        <th>Nuevas medidas</th>
    </tr>
    <tr>
        <td>2</td>
        <td>INVALID_PARAMETER</td>
        <td>Error de parametro.</td>
        <td>Consulte la tabla de parámetros de solicitud y verifique si todos los tipos de parámetros son correctos y si se especifican todos los parámetros requeridos.</td>
    </tr>
    <tr>
        <td>3</td>
        <td>UNKNOWN_ERROR</td>
        <td>Fluctuaciones del servidor.</td>
        <td>Vuelva a intentar la solicitud.Si el problema persiste, comuníquese con el extranjero_support@service.alibaba.com para obtener ayuda.</td>
    </tr>
    <tr>
        <td>10104</td>
        <td>NETWORK_ERROR</td>
        <td>Error de red.</td>
        <td>Verifique la conexión de red y vuelva a intentarlo.</td>
    </tr>
</table>



## Samples

### Kotlin

```js
val fetchAppRequestVO = FetchAppRequestVO(queryStartIndex, querySize)
fetchAppRequestVO.setCategory(category)
fetchAppRequestVO.setRelatedEnv(relatedEnv)
Griver.fetchApps(fetchAppRequestVO,  object : OnRpcResultListener<FetchAppsResult?>() {
      fun onResultSuccess(result: FetchAppsResult?) {
          //Devuelve la Lista de Mini Programs
      }
      fun onResultFailed(errorCode: Int, errorMessage: String?) {
          //devolver el código de error y el mensaje de error
      }
})
```

### Java

```js
FetchAppsRequestVO fetchAppRequestVO = new FetchAppRequestVO(queryStartIndex,querySize);
fetchAppRequestVO.setCategory(category);
fetchAppRequestVO.setRelatedEnv(relatedEnv);
Griver.fetchApps(fetchAppRequestVO,
      new OnRpcResultListener<FetchAppsResult>() {
          @Override
          public void onResultSuccess(FetchAppsResult result) {
               //Devuelve la Lista de Mini Programs
          }

          @Override
          public void onResultFailed(int errorCode, String errorMessage) {
              //devolver el código de error y el mensaje de error
         }
});
```
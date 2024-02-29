---
sidebar_position: 4
---

# fetchAppInfoListByIds

La API de fetchAppInfoListByIds es llamado por la super aplicación para ejecutar una consulta con FetchAppsByIDSRequest para obtener una lista de mini programas que se lanzan a su aplicación.Esta API proporciona una capacidad de paginación para devolver los datos.

## Method signature

```js
void fetchAppInfoListByIds(FetchAppsByIdsRequest request,OnRpcResultListener<AppInfosResult> listListener) 
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
        <td>request</td>
        <td>[FetchAppsByIdsRequest](/)</td>
        <td>Un objeto que se utiliza para establecer las condiciones de consulta de los mini programs.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>listListener</td>
        <td>OnRpcResultListener[```<AppInfosResult>```](/)</td>
        <td>
        La función de devolución de llamada que se utiliza para devolver el resultado de la consulta.
        - Si la consulta es exitosa, devuelve una lista de mini programs que coinciden con las condiciones de consulta especificadas.Ver [AppInfosResult](/) para más detalles.
        - Si la consulta falla, devuelve el código de error y el mensaje de error.Vea [Error](/) para obtener más detalles.   
        </td>
        <td>M</td>
    </tr>
</table>


## Parámetros de respuesta

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>onResultSuccess</td>
        <td>AppInfosResult</td>
        <td>La lista de mini programs que se devuelve cuando la consulta es exitosa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>onResultFailed</td>
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
val ids: MutableList<String> = ArrayList()
ids.add("your miniprogram appId")
val fetchAppsByIdsRequest = FetchAppsByIdsRequest(ids)
fetchAppsByIdsRequest.setCategory(category)
fetchAppsByIdsRequest.setRelatedEnv(relatedEnv)
Griver.fetchAppInfoListByIds(fetchAppsByIdsRequest, object : OnRpcResultListener<AppInfosResult?>() {
      fun onResultSuccess(result: AppInfosResult?) {
          //Devuelve la Lista de Mini Programs
      }
      
      fun onResultFailed(errorCode: Int, errorMessage: String?) {
          //devolver el código de error y el mensaje de error
      }
})
```

### Java

```js
List<String> ids = new ArrayList();
ids.add("your miniprogram appId");
FetchAppsByIdsRequest fetchAppsByIdsRequest = new FetchAppsByIdsRequest(ids);
fetchAppsByIdsRequest.setCategory(category);
fetchAppsByIdsRequest.setRelatedEnv(relatedEnv);
Griver.fetchAppInfoListByIds(fetchAppsByIdsRequest, new OnRpcResultListener<AppInfosResult>() {
     @Override
     public void onResultSuccess(final AppInfosResult result) {
         //Devuelve la Lista de Mini Programs
     }

    @Override
    public void onResultFailed(int errorCode, String errorMessage) {
        //devolver el código de error y el mensaje de error
    }
});
```
---
sidebar_position: 3
---


# fetchApps

La API de **fetchApps** es llamado por la aplicación Super para ejecutar una consulta con  [GRVFetchAppsParameter](/) para obtener asincrónicamente una lista de mini programas que se lanzan a su aplicación. Esta API proporciona una capacidad de paginación para devolver los datos.

## Firma de método

```js
- (void)fetchApps:(GRVFetchAppsParameter *)parameters
completionCallback:(void(^)(GRVFetchAppsResponse * _Nullable, NSError * _Nullable))completionCallback; 
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
        <td>parameters</td>
        <td>[GRVFetchAppsParameter](/) *</td>
        <td>Un objeto que se utiliza para establecer condiciones de consulta de mini programas.</td>
        <td>M</td>
    </tr>
     <tr>
        <td>completionCallback</td>
        <td>void(^)(GRVFetchAppsResponse * _Nullable, NSError * _Nullable)</td>
        <td>
        Una función de devolución de llamada que se utiliza para devolver el resultado de la consulta. Vea [completionCallback](/) para más detalles.
        </td>
        <td>M</td>
    </tr>
</table>    

## completionCallback

<table>
    <tr>
        <th>Tipo de retorno</th>
        <th>Método</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>void</td>
        <td>GRVFetchAppsResponse *</td>
        <td>
        El método que se utiliza para devolver los datos de Mini Programas.Consulte [GRVFetchAppsResponse](/) para más detalles.
        </td>
    </tr>
    <tr>
        <td>void</td>
        <td>NSError **</td>
        <td>
        El método que se utiliza para devolver el código de error y el mensaje de error. Consulte los [códigos de error](/) para obtener más detalles.
        </td>
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
        <td>GRVFetchAppsResponse *</td>
        <td>El resultado que se devuelve para la consulta. 加errorcode+message</td>
        <td>O</td>
    </tr>
    <tr>
        <td>error</td>
        <td>NSError *</td>
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



## Ejemplo

### Kotlin

```js
let parameter = GRVFetchAppsParameter()
parameter.queryStartIndex = 0
parameter.querySize = 10
parameter.sortDescriptor = GRVAppIdSortDescriptorKey
parameter.ascending = true
parameter.category = "1001"

GRVAppContainerLaunch.sharedInstance().fetchApps(parameter) { response, error in 
    ...
}
```

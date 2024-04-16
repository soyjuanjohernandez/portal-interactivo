---
sidebar_position: 4
---

# fetchAppInfosByIds

La API de **fetchAppInfosByIds**  es llamado por la super aplicación para ejecutar una consulta con FetchAppsByIDSRequest para obtener una lista de mini programas que se lanzan a su aplicación.Esta API proporciona una capacidad de paginación para devolver los datos.

## Method signature

```js
typedef void(^GRVFetchAppInfosCompletionHandler)(GRVFetchAppInfosResult * _Nullable result, NSError * _Nullable error);
- (void)fetchAppInfosByIds:(NSArray<NSString *> *)appIds
                  category:(nullable NSString *)category
        completionCallback:(GRVFetchAppInfosCompletionHandler)completionCallback;
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
        <td>appIds</td>
        <td>```NSArray<NSString *> *```</td>
        <td>La ID única asignada por Mini Program Platform para identificar un mini programa.Puede obtener la identificación de la consola de la plataforma Mini del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>category</td>
        <td>NSString *</td>
        <td>La categoría a la que pertenecen mini programas.Especifique este parámetro con la ID de categoría única asignada por Mini Program Platform.Puede obtener la identificación de la consola de la plataforma Mini del programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>completionCallback</td>
        <td>void(^)(GRVFetchAppInfosResult * _Nullable result, NSError * _Nullable error)</td>
        <td>La callback que se usa para devolver el resultado de la consulta. Vea [completionCallback](/) para más detalles.</td>
        <td>M</td>
    </tr>
   
</table>

## completionCallback
<table>
    <tr>
        <th>Return type</th>
        <th>Method</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>void</td>
        <td>GRVFetchAppInfosResult *</td>
        <td>El método que se utiliza para devolver los datos de Mini Programas.Ver [GRVFetchAppInfosResult](/) para más detalles.</td>
    </tr>
    <tr>
        <td>void</td>
        <td>NSError *</td>
        <td>El método que se utiliza para devolver el código de error y el mensaje de error. Consulte los [códigos de error](/) para obtener más detalles.</td>
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
        <td>result</td>
        <td>[GRVFetchAppInfosResult](/) *</td>
        <td>La lista de programas de mini que se devuelve cuando la consulta es exitosa.</td>
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


## Ejemplos



```js
let appIds = ["2102000024800001"]
let category = "1001"
GRVAppContainerLaunch.sharedInstance().fetchAppInfos(byIds: appIds, category: categoryCode, completionCallback: { (response, error) in
    ...
})
```

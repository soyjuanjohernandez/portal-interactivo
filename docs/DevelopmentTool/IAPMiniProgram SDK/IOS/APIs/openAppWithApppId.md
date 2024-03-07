---
sidebar_position: 1
---


# openAppWithApppId

La API de **openAppWithApppId** es llamado por la Super App para abrir Mini Programs con *appId*, la identificación única del programa MINI.

## Firma del método

```js
func openApp(withApppId appId: String, extraParams: [String: Any]?, error: ()) throws -> UIViewController?
```


## Parámetros de solicitud

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
     <tr>
        <td>appId</td>
        <td>String</td>
        <td>
        La ID única asignada por Mini Program Platform para identificar un mini programa.Puede obtener la identificación de la consola de la plataforma Mini del programa o obteniendo información de mini del programa con la API [fetchApps](/).
        </td>
        <td>M</td>
    </tr>
     <tr>
        <td>extraParams</td>
        <td>[String: Any]?</td>
        <td>
        Este parámetro se utiliza para pasar los parámetros de inicio al SDK del programa IAPMini para personalizar el comportamiento de un mini programa durante el inicio. Consulte los [parámetros de inicio](/) para obtener más detalles.
        </td>
        <td>O</td>
    </tr>
  
</table>

## Parámetros de respuesta

N/A

## Error codes

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Descripción</th>
        <th>Nuevas medidas</th>
    </tr>
    <tr>
        <td>90002</td>
        <td>GRV_CONTAINER_NOT_INITIALIZED</td>
        <td>IApminiprogram SDK no se inicializa.</td>
        <td>Inicializar el SDK.</td>
    </tr>
    <tr>
        <td>90003</td>
        <td>GRV_CONTAINER_ERROR_UNKNOWN</td>
        <td>Error de parametro.</td>
        <td>
        Consulte la tabla de [parámetros de solicitud](/) y verifique si todos los tipos de parámetros son correctos y si se especifican todos los parámetros requeridos.
        </td>
    </tr>
</table>

## Ejemplo

### Kotlin
```js
do {
    let appId = "xxx"
    let extraParams = ["query": "a=b&c=d"]
    let viewController = try GRVAppContainerLaunch.sharedInstance().openApp(withApppId: appId, extraParams: extraParams, error: ())
} catch {

}
```





---
sidebar_position: 2
---

# openAppWithUrl

La API de openAppWithUrl es llamada por la super aplicación para abrir Mini Programs con URL, la URL del Mini Programa.

## Firma de método
```js
func openApp(withUrl urlStr: String, extraParams: [String: Any]?, error: ()) throws -> UIViewController?
```

## Parámetros de solicitud

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerida</th>
    </tr>
     <tr>
        <td>urlStr</td>
        <td>String</td>
        <td>
        La URL del esquema del mini programa. La URL debe usar los protocolos HTTP o HTTPS e incluir los parámetros **_ariver_appid**, **_ariver_path** y **_ariver_version** de la cadena de consultas.
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

## Códigos de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Descripción</th>
        <th>Más acciones</th>
    </tr>
    <tr>
        <td>90002</td>
        <td>GRV_CONTAINER_NOT_INITIALIZED</td>
        <td>IAPMiniProgram SDK no se inicializa.</td>
        <td>Initialize the SDK.</td>
    </tr>
    <tr>
        <td>90003</td>
        <td>GRV_CONTAINER_ERROR_UNKNOWN</td>
        <td>error de parametro.</td>
        <td>Consulte la tabla de [parámetros de solicitud](/) y verifique si todos los tipos de parámetros son correctos y si se especifican todos los parámetros requeridos.</td>
    </tr>
</table>

## Ejemplo


```js
do {
    let url = "xxx"
    let extraParams = ["query": "a=b&c=d"]
    let viewController = try GRVAppContainerLaunch.sharedInstance().openApp(withApppId: url, extraParams: extraParams, error: ())
} catch {

}
```

---
sidebar_position: 2
---

# openUrl

La API de OpenUrl es llamada por la super aplicación para abrir Mini Programs con URL, la URL del Mini Programa.

## Firma de método
```js
void openUrl(Context context, String url, Bundle extraParams, GriverContainerAPICallBack callBack)
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
        <td>context</td>
        <td>Context</td>
        <td>Interfaz a información global sobre un entorno de aplicación.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>
        La URL del esquema del mini programa.La URL debe usar los protocolos HTTP o HTTPS e incluir los parámetros _ariver_appid, _ariver_path y _ariver_version de la cadena de consultas.Puede obtener la URL de la consola de plataforma Mini del programa.
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>extraParams</td>
        <td>Bundle</td>
        <td>
        Este parámetro se utiliza para pasar los parámetros de inicio al SDK del IAPMiniprogram para personalizar el comportamiento de un mini programa durante el inicio.Los parámetros aprobados deben incluirse en la definición de ````{@linkgriverparams.launchParams}````.Para obtener cómo especificar los parámetros de inicio, consulte los [parámetros de inicio](/).
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>callback</td>
        <td>[GriverContainerAPICallBack](/)</td>
        <td>La devolución de llamada que se utiliza para escuchar las fallas de lanzamiento de mini del programa.</td>
        <td>O</td>
    </tr>
</table>



## Parámetros de respuesta

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>error</td>
        <td>Error</td>
        <td>Un objeto que se usa para devolver el código de error y el mensaje de error cuando falla el Mini Program.</td>
        <td>O</td>
    </tr>
</table>


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
        <td>Consulte la tabla de parámetros de solicitud y verifique si todos los tipos de parámetros son correctos y si se especifican todos los parámetros requeridos.</td>
    </tr>
</table>

## Ejemplos

### Kotlin

```js
val bundle = Bundle()
bundle.putString("query", "a=b&c=d")
Griver.openUrl(context, url, bundle,
               GriverContainerAPICallBack { errorCode, errorMessage ->
                   //devuelve el código de error y el mensaje de error si el lanzamiento del mini program falla
               })
```

### Java

```js
Bundle bundle = new Bundle();
bundle.putString("query", "a=b&c=d");
Griver.openUrl(context, appId, bundle, new GriverContainerAPICallBack() {
    @Override
    public void error(int errorCode, String errorMessage) {
        //devuelve el código de error y el mensaje de error si el lanzamiento del mini program falla
    }
});
```
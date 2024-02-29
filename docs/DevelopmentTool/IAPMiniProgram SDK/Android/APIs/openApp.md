---
sidebar_position: 1
---


# openApp

La API de openApp es llamada por la super aplicación para abrir Mini Programs con *appId*, la ID único del Mini Program.

## Firma del método

```js
void openApp(Context context, String appId, Bundle extraParams, GriverContainerAPICallBack callBack) 
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
        <td>context</td>
        <td>Context</td>
        <td>Interface to global information about an application environment.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>appId</td>
        <td>String</td>
        <td>
        La ID única asignada por Mini Program Platform para identificar un mini program. Puede obtener la identificación de la consola de la plataforma Mini del program o obteniendo información del mini program con la API [fetchApps](/).
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>extraParams</td>
        <td>Bundle</td>
        <td>
        Este parámetro se utiliza para pasar los parámetros de inicio al SDK del IAPMiniprograma para personalizar el comportamiento de un mini program durante el inicio.Los parámetros aprobados deben incluirse en la definición de ```{@linkgriverparams.launchParams}```. Para obtener cómo especificar los parámetros de inicio, consulte los [Startup parameters](/).
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>callBack</td>
        <td>[GriverContainerAPICallBack](/)</td>
        <td>La callBack que se utiliza para escuchar las fallas de lanzamiento del mini program.</td>
        <td>O</td>
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
        <td>error</td>
        <td>Error</td>
        <td>
        Un objeto que se usa para devolver el código de error y el mensaje de error cuando falla el Mini Program.
        </td>
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
        Consulte la tabla de parámetros de solicitud y verifique si todos los tipos de parámetros son correctos y si se especifican todos los parámetros requeridos.
        </td>
    </tr>
</table>



## Muestra

### Kotlin
```js
val bundle = Bundle()
bundle.putString("query", "a=b&c=d")
Griver.openApp(context, appId, bundle,
               GriverContainerAPICallBack { errorCode, errorMessage ->
                   //devuelve el código de error y el mensaje de error si el lanzamiento del mini programa falla
               })
```

### Java

```js
Bundle bundle = new Bundle();
bundle.putString("query", "a=b&c=d");
Griver.openApp(context, appId, bundle, new GriverContainerAPICallBack() {
    @Override
    public void error(int errorCode, String errorMessage) {
        //devuelve el código de error y el mensaje de error si el lanzamiento del mini programa falla
    }
});
```



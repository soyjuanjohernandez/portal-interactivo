---
sidebar_position: 7
---

# registerBridge

La API de registerBridge es llamada por la Super app para registrar el JSAPIS incorporado recién creado o anulado abuilt-in JSAPIs con IAPMiniprogram SDK.

## Firma de método
```js
void registerBridge(GriverBridgeManifest bridgeManifest, GriverContainerAPICallBack callBack) 
```
## Request parameters

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>bridgeManifest</td>
        <td>GriverBridgeManifest</td>
        <td>La información de clase del JSAPI.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>callBack</td>
        <td>GriverContainerAPICallBack</td>
        <td>La devolución de llamada que se utiliza para escuchar el resultado del registro de JSAPI.</td>
        <td>O</td>
    </tr>
</table>


## Parámetros de respuest
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
        <td>Un objeto que se usa para devolver el código de error y el mensaje de error cuando el registro falla.</td>
        <td>O</td>
    </tr>
</table>

## Códigos de error
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
        <td>IAPMiniProgram SDKno se inicializa.</td>
        <td>Inicializar el SDK.</td>
    </tr>
    <tr>
        <td>90003</td>
        <td>GRV_CONTAINER_ERROR_UNKNOWN</td>
        <td>Error de parametro.</td>
        <td>Consulte la tabla de parámetros de solicitud y verifique si todos los tipos de parámetros son correctos y si se especifican todos los parámetros requeridos.</td>
    </tr>
</table>


## Ejemplos

### Kotlin
```js
class TestBridgeExtension : SimpleBridgeExtension() {
    @ActionFilter
    @ThreadType(ExecutorType.UI)
    fun test(
        @BindingApiContext apiContext: ApiContext?,
        @BindingCallback bridgeCallback: BridgeCallback
    ) {
        val result = JSONObject()
        result.put("test", "test")
        bridgeCallback.sendJSONResponse(result)
    }
}

Griver.registerBridge(GriverBridgeManifest(TestBridgeExtension::class.java, Arrays.asList<String>("test"))) { errorCode, errorMessage ->
            //Devuelva los errores cuando falla el registro
}
```
### Java
```js
public class TestBridgeExtension extends SimpleBridgeExtension {
    @ActionFilter
    @ThreadType(ExecutorType.UI)
    public void test(@BindingApiContext ApiContext apiContext,
                     @BindingCallback BridgeCallback bridgeCallback) {
        JSONObject result = new JSONObject();
        result.put("test", "test");
        bridgeCallback.sendJSONResponse(result);
    }
}

Griver.registerBridge(new GriverBridgeManifest(TestBridgeExtension.class, Arrays.asList("test")), new GriverContainerAPICallBack() {
    @Override
    public void error(int errorCode, String errorMessage) {
        //Return the errors when the registration fails
    }
});
```





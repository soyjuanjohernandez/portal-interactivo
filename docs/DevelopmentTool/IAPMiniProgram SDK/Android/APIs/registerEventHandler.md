---
sidebar_position: 8
---

# registerEventHandler

La API de registerEventHandler es utilizado por la Súper Aplicación para registrar el controlador de eventos SDK.

## Method signature
```js
void registerEventHandler(GriverEventManifest manifest, GriverContainerAPICallBack callBack) 
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
        <td>manifest</td>
        <td>GriverEventManifest</td>
        <td>El objeto del controlador de eventos.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>callBack</td>
        <td>GriverContainerAPICallBack</td>
        <td>La callback que se utiliza para devolver el resultado del registro del controlador de eventos.</td>
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
class DemoGriverBackPressedPointEvent : GriverBackPressedPointEvent {
    override fun onInitialized() {

    }

    override fun onFinalized() {

    }

    override fun handleBackPressed(page: Page?) {
        // por favor haga clic en
    }
}
Griver.registerEventHandler(GriverEventManifest(DemoGriverBackPressedPointEvent::class.java.getName(), Arrays.asList<String>(GriverTitleBarCloseClickEvent::class.java.getName()),App::class.java)) { error, errorMessage -> }
```
### Java
```js
public class DemoGriverBackPressedPointEvent implements GriverBackPressedPointEvent {
    
    @Override
    public void handleBackPressed(Page var1) {
    }
    
    @Override
    public void onInitialized() {
    }
    
    @Override
    public void onFinalized() {
    }
}

Griver.registerEventHandler(new GriverEventManifest(DemoGriverBackPressedPointEvent.class.getName(), Arrays.asList(GriverTitleBarCloseClickEvent.class.getName()), App.class), new GriverContainerAPICallBack() {
    @Override
    public void error(int error, String errorMessage) {

    }
});
```








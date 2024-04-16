---
sidebar_position: 9
---

# registerExtension

La API de registerExtension es utilizada por la SUPER APP para implementar las funciones personalizadas proporcionadas por el contenedor Mini Program.

## Firma de método

```js
void registerExtension(GriverExtensionManifest extensionManifest, GriverContainerAPICallBack callBack)
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
        <td>extensionManifest</td>
        <td>GriverExtensionManifest</td>
        <td>El objeto de la extensión.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>callBack</td>
        <td>GriverContainerAPICallBack</td>
        <td>La devolución de llamada que se utiliza para devolver el resultado del registro de extensión.</td>
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
class GriverLocalAuthDialogExtensionImpl: GriverLocalAuthDialogExtension {
    override fun createDialog(context: Context): LocalPermissionDialog {
        return NebulaLocalPermissionNoticeDialog(context);
    }
}

Griver.registerExtension(
    GriverExtensionManifest(
        GriverLocalAuthDialogExtensionImpl::class.java,
        GriverLocalAuthDialogExtensionImpl()
    )
)
```
### Java
```js
public class GriverLocalAuthDialogExtensionImpl implements GriverLocalAuthDialogExtension {
    @Override
    public LocalPermissionDialog createDialog(Context context) {
        return new NebulaLocalPermissionNoticeDialog(context);
    }
}
Griver.registerExtension(new GriverExtensionManifest(GriverLocalAuthDialogExtensionImpl.class, new GriverLocalAuthDialogExtensionImpl()));
```
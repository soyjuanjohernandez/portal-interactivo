# web-view

Webview

:::info[Nota]
Este componente no soporta temporalmente Mini Program personal.
:::

`<web-view/>` El componente se utiliza para cargar páginas H5 y se expande automáticamente a toda la página del Mini Program.

<table>
  <thead>
    <tr>
      <th>Propiedades</th>
      <th>Tipo</th>
      <th>Por defecto</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>src</td>
      <td>String</td>
      <td>No</td>
      <td>URL de la página H5 que se renderizará en el web-view. Si la página H5 requiere inicio de sesión, configure la lista blanca de dominios H5 en el Mini Programa.</td>
    </tr>
    <tr>
      <td>onMessage</td>
      <td>EventHandle</td>
      <td>No</td>
      <td>Mensaje postMessage de la página web al Mini Programa. ```e.detail = { data }```. Cada página puede tener solo un web-view. No renderice múltiples web-view. Se expande a toda la página y superpone otros componentes.</td>
    </tr>
  </tbody>
</table>

:::info[Nota]
Cada página solo puede tener una. No renderice múltiples. Se acumula toda la página y se superpone a otros componentes.
:::

#### Código de muestra

```xml
<!-- axml -->
<!-- web-view apuntando a google -->
<web-view src="https://google.com/" onMessage="test"></web-view>
```

#### APIs Disponibles

| Tipo       | Nombre            | Descripción                                                                                                         |
|------------|-------------------|---------------------------------------------------------------------------------------------------------------------|
| Navegación | `my.navigateTo`  | Navega a otra página de la aplicación mientras mantiene la actual.                                                  |
| Navegación | `my.navigateBack` | Cierra la página actual y vuelve a una de las páginas anteriores.                                                    |
| Navegación | `my.switchTab`    | Navega a una página en la barra de pestañas y cierra cualquier otra página que no esté en la barra de pestañas.   |
| Navegación | `my.reLaunch`     | Cierra todas las páginas y navega a una página desde la aplicación.                                                 |
| Navegación | `my.redirectTo`   | Cierra la página actual y navega a una página desde la aplicación.                                                   |
| Imagen     | `my.chooseImage`  | Toma una foto o elige una de la galería. El camino del archivo de la foto obtenida se puede enviar al Mini Programa actual a través de `my.postMessage()`, y luego se puede cargar si es necesario. |
| Imagen     | `my.previewImage` | Previsualiza la imagen.                                                                                             |
| Localización | `my.getLocation` | Obtiene información de ubicación del usuario actual.                                                                |
| Popups     | `my.alert`        | Muestra una ventana de alerta.                                                                                      |
| Popups     | `my.showLoading`  | Muestra un indicador de carga.                                                                                      |
| Popups     | `my.hideLoading`  | Oculta el indicador de carga.                                                                                        |
| Almacenamiento | `my.setStorage` | Almacena algunos datos en el almacenamiento local con una clave. Sobrescribirá si la clave ya existe.            |
| Almacenamiento | `my.getStorage` | Recupera datos almacenados.                                                                                          |
| Almacenamiento | `my.removeStorage` | Elimina datos almacenados.                                                                                           |
| Almacenamiento | `my.clearStorage` | Borra el almacenamiento local.                                                                                       |
| Almacenamiento | `my.getStorageInfo` | Obtiene información sobre el almacenamiento local de forma asincrónica.                                             |
| Red        | `my.getNetworkType` | Obtiene información sobre el estado de la red actual.                                                                |
| Pago       | `my.tradePay`     | Inicia procedimientos de pago. (No procese pagos en un entorno H5, y siempre llame a esta API para pagos.)         |
| Mensaje    | `my.postMessage`  | Envía un mensaje al Mini Programa actual, en formato JSON.                                                         |
| Mensaje    | `my.onMessage`    | Escucha los mensajes del Mini Programa actual.                                                                       |
| Entorno    | `my.getEnv`       | Obtiene información sobre el entorno actual.                                                                         |

### Código de Demostración

Código para la página ```web-view``` para H5.

```xml
<script type="text/javascript" src="https://appx/web-view.min.js"></script>
<script>
  my.navigateTo({url: '../get-user-info/get-user-info'});

  // Enviar mensaje al Mini Programa.
  my.postMessage({name:"test web-view"});

  // Recibir mensaje del Mini Programa.
  my.onMessage = function(e) {
    console.log(e); // {'sendToWebView': '1'}
  }

  // Comprobar si se está ejecutando en un entorno de Mini Programa
  my.getEnv(function(res) {
    console.log(res.miniprogram) // true
  });
</script>
```

Después de que se llame a `my.postMessage`, se ejecutará `onMessage` en esta página de mini programa.

```xml
<!-- .axml -->
<view>
  <web-view id="web-view-1" src="..." onMessage="test"></web-view>
</view>
```

```js

// Se declara un método 'test' en esta página.
// Como web-view en page.axml ha establecido 'test' para la llamada de 'onMessage',
// después de que se ejecute `my.postMessage` en el web-view, se llamará a `test`.

Page({
  onLoad(e){
    this.webViewContext = my.createWebViewContext('web-view-1');    
  },
  test(e){
    my.alert({
      content:JSON.stringify(e.detail),
    });  
    this.webViewContext.postMessage({'sendToWebView': '1'});
  },
});
```
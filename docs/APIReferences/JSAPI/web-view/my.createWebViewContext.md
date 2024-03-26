# my.createWebViewContext

Al crear `webviewContext`, se crea la capacidad de enviar mensajes desde el Mini Program al `web-view`. Crea y devuelve el objeto `webViewContext` del  contexto `web-view`.

## Código de Ejemplo

```xml
<!-- .axml -->
<view>
  <web-view id="web-view-1" src="..." onMessage="onMessage"></web-view>
</view>
```

```js
// .js
Page({
  onLoad() {
    this.webViewContext = my.createWebViewContext('web-view-1');
  },
  // Recibir mensaje de HTML5
  onMessage(e) {
    console.log(e); //{'sendToMiniProgram': '0'}
    // Enviar mensaje a HTML5
    this.webViewContext.postMessage({'sendToWebView': '1'});
  }
})
```

```js
// .js
// my.onMessage debe estar definido en el código JS de HTML5 al principio para recibir el mensaje del Mini Programa.
my.onMessage = function(e) {
  console.log(e); //{'sendToWebView': '1'}
}
// HTML5 envía mensaje al Mini Programa
my.postMessage({'sendToMiniProgram': '0'});
```

**Nota:** El flujo de trabajo de la capacidad de comunicación bidireccional anterior es que HTML5 envía un mensaje al Mini Programa primero. Después de que el Mini Programa recibe el mensaje, envía un mensaje a HTML5.

#### Parámetros
Tipo de objeto con los siguientes atributos:

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>webviewId</td>
      <td>String</td>
      <td>Sí</td>
      <td>Atributo de ID correspondiente al web-view que se va a crear.</td>
    </tr>
  </tbody>
</table>

#### Valor de Retorno
Crear un objeto `webViewContext`.

`webViewContext` está vinculado con un componente `web-view` a través de webviewId para implementar algunas funciones. Lista de métodos del objeto `webViewContext`:

<table>
  <thead>
    <tr>
      <th>Método</th>
      <th>Parámetros</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>postMessage</td>
      <td>Object</td>
      <td>El Mini Programa envía un mensaje al componente web-view y funciona con <code>my.postMessage</code> proporcionado por <code>web-view.js</code> para implementar la comunicación bidireccional entre el Mini Programa y la página web-view.</td>
    </tr>
  </tbody>
</table>

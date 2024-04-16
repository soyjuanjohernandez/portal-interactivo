---
sidebar_position: 4
---

# Registar Mini Programa

## App(Object)

```App()``` se utiliza para registrar el Mini Programa, acepta un objeto como parámetro para configurar el ciclo de vida del Mini Programa. ```App()``` debe ser llamado en app.js y solo debe ser llamado una vez.

## Descripción del Parámetro del Objeto

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
      <th>Trigger</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>onLaunch</td>
      <td>Function</td>
      <td>Escucha la inicialización del Mini Programa. Al completarse la inicialización del Mini Programa, se invoca solo una vez.</td>
      <td>Al completarse la inicialización del Mini Programa.</td>
    </tr>
    <tr>
      <td>onShow</td>
      <td>Function</td>
      <td>Escucha la visualización del Mini Programa. Al iniciar el Mini Programa o cambiar al primer plano desde el fondo.</td>
      <td>Al iniciar el Mini Programa o cambiar al primer plano desde el fondo.</td>
    </tr>
    <tr>
      <td>onHide</td>
      <td>Function</td>
      <td>Escucha el ocultamiento del Mini Programa. Al cambiar el Mini Programa del primer plano al fondo.</td>
      <td>Al cambiar el Mini Programa del primer plano al fondo.</td>
    </tr>
    <tr>
      <td>onError</td>
      <td>Function</td>
      <td>Escucha los errores del Mini Programa. Cuando hay un error en el código JavaScript del Mini Programa.</td>
      <td>Cuando hay un error en el código JavaScript del Mini Programa.</td>
    </tr>
    <tr>
      <td>onUnhandledRejection</td>
      <td>Function</td>
      <td>Escucha el evento de rechazo no gestionado.</td>
      <td>Se desencadena cuando una Promesa de JavaScript que no tiene un manejador de rechazo es rechazada.</td>
    </tr>
  </tbody>
</table>

**Definición de Primer plano/Fondo:**

* Cuando el usuario abandona la aplicación móvil con el botón de cierre en la esquina superior derecha o el botón de inicio del dispositivo, el Mini Programa no se destruye directamente sino que se cambia al fondo.

* Cuando se inicia la aplicación móvil o se abre nuevamente el Mini Programa, se cambia al primer plano desde el fondo.

* Solo cuando el Mini Programa permanece en segundo plano durante cierto tiempo o consume demasiados recursos del sistema, se destruye.

## Descripción del Parámetro de Opciones onLaunch/onShow.

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>query</td>
      <td>Object</td>
      <td>Consulta actual del Mini Programa, analizada del campo de consulta en el parámetro de inicio.</td>
    </tr>
    <tr>
      <td>path</td>
      <td>String</td>
      <td>Dirección actual de la página del Mini Programa, analizada del campo de página en el parámetro de inicio, página de inicio por defecto cuando se ignora la página.</td>
    </tr>
    <tr>
      <td>referrerInfo</td>
      <td>Object</td>
      <td>Información de origen.</td>
    </tr>
  </tbody>
</table>

* Este parámetro se puede obtener del método ```onlaunch``` al primer inicio del mini program

* El parámetro también se puede obtener del método ```Onshow``` cuando el mini program de fondo se reabre con el esquema.

```js
App({
  onLaunch(options) {
    // first opening
    console.log(options.query);
	// {number:1}
  },
  onShow(options) {
    // reopening with schema from background
	console.log(options.query);
	// {number:1}
  },
})
```

**ReferRerInfo Atributo Descripción**

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Descripción</th>
      <th>Compatibilidad</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>appId</td>
      <td>string</td>
      <td>Mini Programa de origen.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>sourceServiceId</td>
      <td>String</td>
      <td>Plug-in de origen, visible en el modo de ejecución del complemento.</td>
      <td>1.11.0</td>
    </tr>
    <tr>
      <td>extraData</td>
      <td>Object</td>
      <td>Datos transferidos desde el Mini Programa de origen.</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

**Notas:**

No operar la pila de páginas como redirectTo/navigateTo en el onShow.
La versión de la biblioteca básica utilizada actualmente en AppContainer es 1.14.2.

## onHide()

El método ```onHide()``` se activará cuando el Mini Programa cambie de primer plano a fondo.

Código de ejemplo

```js
App({
  onHide() {
    // when changes to background
    console.log('app hide');
  },
});
```

## onError()

El método ```onError()``` se activará cuando ocurra el error de script.

Código de muestra

```js
App({
  onError(error) {
    // the Mini Program script error happens
    console.log(error);
  },
});
```

## onUnhandledRejection()

El método onUnhandledRejection() se activará cuando se rechace un JavaScript ```Promise``` 'que no tiene un controlador de rechazo.

Código de ejemplo

```js
App({
  onUnhandledRejection(res) {
    // A JavaScript Promise that has no rejection handler is rejected.
    console.log(res.reason, res.promise);
    //res.reason describes the rejection reason and res.promise describes the rejected Promise.
  },
});
```

## Global Data

Global data se puede configurar en ```App()```. Otras páginas pueden obtener y modificar los datos globales directamente.

Sample code

```js
// app.js
App({
  globalData: 1
});
```

## FAQ

***P: ¿Se puede cerrar mini programa en app.js??***

R: No, el mini programa solo se puede cerrar haciendo clic en el botón Cerrar en la esquina superior derecha.
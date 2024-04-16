---
sidebar_position: 1
---

# Introducción a la aplicación

## Introducción

```App()``` representa aplicaciones de nivel superior y administra todas las páginas y datos globales, y proporciona métodos de ciclo de vida. También es un método de construcción, para generar la instancia de la aplicación.

Un Mini Program es una instancia de ```App```.

Normalmente, en el directorio raíz de cada Mini Program, hay tres archivos.

app.js: lógica de la aplicación
app.acss: estilo de la aplicación (opcional)
app.json: configuración de la aplicación

## Ejemplo

Aquí hay un simple ```app.json```.

```js
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "defaultTitle": "Demo"
  }
}
```

La configuración anterior indica que se incluyen dos páginas en el programa MINI, y el título predeterminado es un ```Demo``` para la aplicación.

A continuación se muestra un código simple app.js.Tiene cuatro métodos de ciclo de vida.

```js
App({
  onLaunch(options) {
  	// called when opened
  },
  onShow(options) {
  	// called when opened or come foreground
  },
  onHide() {
  	// called when it goes background
  },
  onError(msg) {
  	// called on JavaScript error or API invoke exception
    console.log(msg)
  },
  // global data
  globalData: {
    foo: true,
  }
})
```
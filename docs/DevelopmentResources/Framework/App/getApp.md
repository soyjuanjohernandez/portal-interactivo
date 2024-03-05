---
sidebar_position: 4
---

# getApp

Una función Global ```getApp()``` está disponible para obtener la instancia de la ejecución de Mini Programa actualmente.Esto generalmente se usa en la página para obtener la aplicación de nivel superior.

```js 
var app = getApp()
console.log(app.globalData) // Get globalData
```

Nota:

* No llames a ```getApp()``` en ```App()```. En su lugar, usa esto para obtener la instancia de la aplicación.
* Después de obtener la instancia con getApp(), no llames a la función del ciclo de vida de ```App()```.
* Por favor, distingue entre los datos globales de ```App``` y los datos globales de ```Page```.

Los datos globales pueden ser establecidos en App(). Las subpáginas individuales pueden obtener la instancia global de la aplicación a través de la función global ```getApp()```. Aquí tienes un ejemplo.

```js
// app.js
App({
  globalData: 1
})
```

```js
// a.js
// Valor local efectivo solo en a.js
var localValue = 'a'
// Instancia de generación de aplicaciones
var app = getApp()
// Obtenga datos globales y cámbielo
app.globalData++
```

```js
// b.js
// Valor local efectivo solo en b.js
var localValue = 'b'
// Si a.js se ejecuta primero, el globaldata regresa 2
console.log(getApp().globalData)
```

En los códigos mostrados anteriormente, tanto el ```a.js``` ```b.js``` ha declarado el valor local variable, pero no se afectarán entre sí, porque la variable y la función de cada script tomanefecto solo en su propio alcance.


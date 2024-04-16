---
sidebar_position: 1
---

# Introducción de Page

La página representa una página de Mini Program, que se hace cargo de la pantalla y la interacción de la página.Cada página tendrá un subdirectorio en el proyecto, básicamente hay tantos subdirectorios como páginas.También es un constructor para generar instancia de página.
Cada página consta de cuatro archivos:

* ```[PageName].js```: lógica de la página
* ```[PageName].axml```: estructura de página
* ```[PageName].json```: Configuración de la página (opcional)
* ```[PageName].acss```: Hoja de estilo de página (opcional)

Cuando se inicializa la página, se deben proporcionar los datos.

```js
Page({
  data: {
    title: 'Mini Program',
    array: [{user: 'li'}, {user: 'zhao'}],
  },
});
```

Según los datos proporcionados, la página se puede representar.

```js
<view>{{title}}</view>
<view>{{array[0].user}}</view>
```

La función debe especificarse al definir la interacción.

```js
<view onTap="handleTap">click me</view>
```

El código anterior muestra cuando el usuario hace clic en la vista, se invocará la función ```handletap```.

```js
Page({
  handleTap() {
    console.log('yo! view tap!');
  },
});
```

Si desea volver a renderizar la página, necesitas llamar la función ```this.setData``` en el script ```[PageName].js``` .

```js
<view>{{text}}</view>
<button onTap="changeText"> Change normal data </button>

```

El código anterior muestra cuando el usuario haga clic en la vista, se invocará la función de ```changeText```.

```js
Page({
  data: {
    text: 'init data',
  },
  changeText() {
    this.setData({
      text: 'changed data',
    });
  },
});
```

En la función ```Changetext```, se llama ```this.setData``` para cambiar los datos de texto, y luego la página volverá a renderizar para mostrar los datos modificados.
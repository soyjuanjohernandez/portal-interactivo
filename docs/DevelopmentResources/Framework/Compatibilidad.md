---
sidebar_position: 12
---

# Compatibilidad

El componente y la API de Mini Program están mejorando y enriqueciendo, por lo que algunos viejos SDK pueden no admitir las habilidades recién agregadas.Por lo tanto, los desarrolladores deben manejar el problema de compatibilidad.

La función `my.canIUse(String)` puede ayudar a detectar si la API, el parámetro de entrada o el valor devuelto, el componente y la propiedad se admiten en la versión actual.

## Manejar API recién agregado

El siguiente código muestra cómo manejar los problemas de compatibilidad para la API recién agregada:

```js
if (my.getLocation) {
    my.getLocation();
} else {
    my.alert({
       title: 'Hint',
       content: 'The function is not supported, please upgrade the App'
    });
}
```

## Manejar los nuevos parámetros de entrada agregados al API.

```js
if (my.canIUse('getLocation.object.type')) {
    // ...
} else {
	console.log('The parameter is not supported')
}
```

## Manejar el valor de retorno recién agregado de la API

```js
if (my.canIUse('getSystemInfo.return.storage')) {
	// ...
} else {
	console.log('The returned value is not supported')
}
```

## Manejar la propiedad recién añadida del componente

```js
Page({
  data: {
    canIUse: my.canIUse('button.open-type.share')
  }
})
```

```xml
<button a:if="{{canIUse}}" open-type="share">Share</button>
<button a:else onTap="shareApp">Share Mini Program</button>
```
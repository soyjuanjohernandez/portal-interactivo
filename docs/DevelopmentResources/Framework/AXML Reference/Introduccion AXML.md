---
sidebar_position: 1
---

# Introducción de AXML

AXML es un conjunto de lenguaje de marcado para el diseño del marco de mini del programa y se usa para describir la estructura de las páginas de mini programa. La sintaxis de AXML cae en cinco partes: [vinculación de datos](/), [representación condicional](/), [representación de listas](/), [plantilla](/) y [referencia de archivo](/).

Código de ejemplo AXML:

```js
<!-- pages/index/index.axml -->  
<view a:for="{{items}}"> {{item}} </view>  
<view a:if="{{view == 'WEBVIEW'}}"> WEBVIEW </view>  
<view a:elif="{{view == 'APP'}}"> APP </view>  
<view a:else> hello </view>  
<view onTap="add"> {{count}} </view>
```

Ejemplo de .js:

```js
// pages/index/index.js
Page({
  data: {
    items: [1, 2, 3, 4, 5, 6, 7],
    view: 'hello',
    count: 1,
  },
  add(e) {
    this.setData({
      count: this.data.count + 1,
    });
  },
});
```

.css sample:

```js
/* pages/index/index.acss */
view {
  padding-left: 10px;
}
```

Resultado de la pantalla:

![Resultado pantalla](../img/displayResult.png)


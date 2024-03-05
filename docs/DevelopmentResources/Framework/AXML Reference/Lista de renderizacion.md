---
sidebar_position: 2
---

# Renderización de la lista

## a:for

Usando el atributo ```a:for``` en el componente puede unir una matriz, y luego los datos en la matriz se pueden usar para representar el componente repetidamente.

El elemento actual en la matriz tiene un índice de nombre de variable de subíndice predeterminado.El elemento actual de la matriz tiene un elemento de nombre de variable predeterminado.

```js
<view a:for="{{array}}">
  {{index}}: {{item.message}}
</view>
```

```js
Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar',
    }],
  },
});
```

Use ```a:for-item``` para especificar el nombre de la variable para el elemento actual de la matriz.Use ```a:for-index``` para especificar el nombre de la variable de subíndice actual de la matriz.

```xml
<view a:for="{{array}}" a:for-index="idx" a:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

```A:for``` apoya la anidación.

A continuación se muestran los códigos de muestra para la anidación de la tabla de multiplicación.

```xml
<view a:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" a:for-item="i">
  <view a:for="{{[1, 2, 3, 4, 5, 6, 7, 8, 9]}}" a:for-item="j">
    <view a:if="{{i <= j}}">
      {{i}} * {{j}} = {{i * j}}
    </view>
  </view>
</view>
```

## bloque a:for

Similar al Bloque ```a:if```, ```a:for``` se puede usar en la etiqueta ```<Block/>``` para representar un bloque estructural con múltiples nodos.

```xml
<block a:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

## a:key

Si el elemento de la lista puede cambiar de posición dinámicamente o se agregará un nuevo elemento a la lista, y se espera mantener las características y el estado del elemento de la lista (como el contenido de entrada de `<input/>` y el estado verificado de `<switch/>`), se debe utilizar `a:key` para especificar el identificador único del elemento de la lista.

El valor de `a:key` se proporciona en uno de los dos modos:

* String: Representando un atributo del elemento de la lista. El valor del atributo debe ser una cadena o número único en la lista, como el ID, y no puede cambiar dinámicamente.

* Palabra clave reservada `*this`: Representando el propio elemento de la lista. Además, es la cadena o número único. Por ejemplo, cuando el cambio de los datos actuales desencadena un nuevo renderizado, el componente con ```key``` será rectificado. El marco asegura que se reordenen, pero no se vuelvan a crear. De esta manera, el componente puede mantener su estado, aumentando la eficiencia de renderizado de la lista.

Nota:

* Si no se proporciona `a:key`, nos reportará una advertencia.

* Esto se puede ignorar si se sabe que la lista es estática o el orden no es importante.

A continuación se muestran los códigos de ejemplo:

```xml
<view class="container">
  <view a:for="{{list}}" a:key="*this">
    <view onTap="bringToFront" data-value="{{item}}">
    {{item}}: Haga clic para llevar al frente
    </view>
  </view>
</view>
```

```js
Page({
  data:{
    list:['1', '2', '3', '4'],
  },
  bringToFront(e) {
    const { value } = e.target.dataset;
    const list = this.data.list.concat();
    const index = list.indexOf(value);
    if (index !== -1) {
      list.splice(index, 1);
      list.unshift(value);
      this.setData({ list });
    }
  },
});
```

## Key

La ```key``` es un estilo de escritura más popular que ```a:key```, donde se puede llenar cualquier expresión y cadena.

Nota: La ```key``` no se puede configurar en el bloque.

A continuación se muestran los códigos de muestra:

```xml
<view class="container">
  <view a:for="{{list}}" key="{{item}}">
    <view onTap="bringToFront" data-value="{{item}}">
    {{item}}: Haga clic para llevar al frente
    </view>
  </view>
</view>
```

```js
Page({
  data:{
    list:['1', '2', '3', '4'],
  },
  bringToFront(e) {
    const { value } = e.target.dataset;
    const list = this.data.list.concat();
    const index = list.indexOf(value);
    if (index !== -1) {
      list.splice(index, 1);
      list.unshift(value);
      this.setData({ list });
    }
  },
});
```
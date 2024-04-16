# Plantilla

El AXML proporciona ```template```, donde el fragmento de código se puede definir para invocar en otro lugar.

Se recomienda usar la ```template``` para introducir el fragmento de ```template``` porque la ```template``` especifica el alcance de la acción y usa solo la ```data``` importados. Si la ```data``` en la ```template``` no cambia, la interfaz de usuario del fragmento no se volverá a renderizar.

## Definir plantilla

Use el atributo de nombre para declarar el nombre de la template y luego definir el fragmento de código dentro de ```<template/>```.

```xml 
<!--
  index: int
  msg: string
  time: string
-->
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

## Usar plantilla

Use el atributo **is** para declarar la plantilla requerida y luego introducir los datos requeridos.Por ejemplo:

```xml
<template is="msgItem" data="{{...item}}"/>
```

```js 
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2019-04-19',
    },
  },
});
```

El atributo **is** permite usar la sintaxis del bigote para decidir dinámicamente qué plantilla representar.

```xml
<template name="odd">
  <view> odd </view>
</template>
<template name="even">
  <view> even </view>
</template>

<block a:for="{{[1, 2, 3, 4, 5]}}">
    <template is="{{item % 2 == 0 ? 'even' : 'odd'}}"/>
</block>
```

## Alcance de acción para plantilla

La plantilla tiene un alcance de acción y puede usar los datos introducidos por "datos".A excepción de los datos directamente introducidos por "datos", es posible usar el evento ONXX para vincular la lógica de la página para el manejo de funciones. A continuación se muestran los códigos de muestra:

```xml
<!-- templ.axml -->
<template name="msgItem">
    <view>
        <view>
            <text> {{index}}: {{msg}} </text>
            <text> Time: {{time}} </text>
        </view>
        <button onTap="onClickButton">onTap</button>
    </view>
</template>
```

```xml
<!-- index.axml -->
<import src="./templ.axml"/>
<template is="msgItem" data="{{...item}}"/>
```

```js
Page({
  data: {
    item: {
      index: 0,
      msg: 'this is a template',
      time: '2019-04-22'
    }
  },
  onClickButton(e) {
    console.log('button clicked', e)
  },
});
```
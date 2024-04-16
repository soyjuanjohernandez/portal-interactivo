---
sidebar_position: 2
---

# Vinculación de datos

Los datos dinámicos en AXML están vinculados con el contenido de datos en la página.

## Enlace simple

La sintaxis del bigote se usa para empaquetar la variable con dos pares de aparatos ortopédicos ```({{}})```. Se puede usar en varios escenarios de sintaxis.

## Contenido

```xml
<view> {{ message }} </view>
```

```js
Page({
  data: {
	message: 'Hello!',
  },
});
```

## Atributo de componente

Los atributos de componentes deben empaquetarse con comillas dobles ("").

```xml
<view id="item-{{id}}"></view>
```

```js
Page({
  data: {
	id: 0,
  },
});
```

## Atributo de control

Los atributos de control deben empaquetarse con comillas dobles ("").

```xml
<view a:if="{{condition}}"> </view>
```

```js
Page({
  data: {
	condition: true,
  },
});
```

## Palabras clave

Las palabras clave deben empaquetarse con comillas dobles ("").

- Verdadero: booleano verdadero
- Falso: booleano falso

```xml
<checkbox checked="{{false}}"> </checkbox>
```

**Nota**: No codifique directamente a la comprobación = "Falso". El resultado de la operación es una cadena y se convierte en el valor verdadero cuando se convierte en tipo booleano.

## Operación

La operación simple se puede empaquetar con dos pares de aparatos ortopédicos```({{}})```. Las operaciones siguientes son compatibles:

## Operación ternaria

```xml
<view hidden="{{flag ? true : false}}"> Hidden </view>
```

## Operación aritmética

```xml
<view> {{a + b}} + {{c}} + d </view>
```

```js
Page({
  data: {
	a: 1,
	b: 2,
	c: 3,
  },
});
```

El contenido de salida de la página es ```3 + 3 + d```

## Juicio lógico

```xml
<view a:if="{{length > 5}}"> </view>
```

## Operación de cadena

```xml
<view>{{"hello" + name}}</view>
```

```js
Page({
  data:{
	name: 'Mini Program',
  },
});
```

## Operación de ruta de datos

```xml
<view>{{object.key}} {{array[0]}}</view>
```

```js
Page({
  data: {
	object: {
 	 key: 'Hello ',
},
 	array: ['Mini Program'],
  },
});
```

## Combinar

La combinación se puede hacer directamente en la sintaxis del bigote para crear un nuevo objeto o matriz.

## Array

```xml
<view a:for="{{[zero, 1, 2, 3, 4]}}"> {{item}} </view>

Page({
  data: {
    zero: 0,
  },
});
```

Finalmente combinado en una matriz ```[0, 1, 2, 3, 4]```

## Objeto

```xml
<template is="objectCombine" data="{{foo: a, bar: b}}"></template>

Page({
  data: {
    a: 1,
    b: 2,
  },
});
```

Finally combined into object ```{foo: 1, bar: 2}```.

Operador de destrucción ```...``` se puede usar para expandir un objeto:

```xml
<template is="objectCombine" data="{{...obj1, ...obj2, e: 5}}"></template>
```
```js
Page({
  data: {
    obj1: {
      a: 1,
      b: 2,
    },
    obj2: {
      c: 3,
      d: 4,
    },
  },
});
```

Finalmente es combinado dentro del objeto ```{a: 1, b: 2, c: 3, d: 4, e: 5}.```

Si la clave y el valor del objeto son los mismos, la expresión indirecta es la siguiente:

```xml
<template is="objectCombine" data="{{foo, bar}}"></template>
Page({
  data: {
    foo: 'my-foo',
    bar: 'my-bar',
  },
});
```

Finalmente combinado en objeto ```{foo: 'my-foo', bar:'my-bar'}```

**Nota:** Los métodos anteriores se pueden combinar al azar.Sin embargo, cuando los nombres variables son los mismos, este último anula el primero.Por ejemplo:

```js
Page({
    data: {
        obj1: {
            a: 1,
            b: 2,
        },
        obj2: {
            b: 3,
            c: 4,
        },
    a: 5,
  },
});
```

Finalmente combinado en objeto ``{a: 5, b: 3, c: 6}``.

Preguntas frecuentes

**P: ¿Cómo borrar los datos al saltar a una nueva página?**

R: Los datos no se pueden borrar, puede anular los datos al saltar.
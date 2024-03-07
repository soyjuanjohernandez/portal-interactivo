---
sidebar_position: 7
---

# Biblioteca básica

## Global

Nota: SJS no admite la mayoría de los atributos y métodos globales de JavaScript.

### Atributo

- Infinity
- NaN
- undefined

Para un uso específico, consulte el estándar ES5.

### Método

- decodeURI
- decodeURIComponent
- encodeURI
- encodeURIComponent
- isNaN
- isFinite
- parseFloat
- parseInt

Para un uso específico, consulte el estándar ES5.

### Consola

El método ```console.log``` puede generar información en la ventana de la consola y aceptar múltiples parámetros y combinar sus resultados para la salida.

## Fecha

### Método

* now
* parse
* UTC

Para un uso específico, consulte el estándar ES5.

## Número

### Atributo

* MAX_VALUE
* MIN_VALUE
* NEGATIVE_INFINITY
* POSITIVE_INFINITY

Para un uso específico, consulte el estándar ES5.

## JSON

### Método

- ```stringify(object)```: Convierta el objeto en una cadena JSON y devuelve la cadena
- ```parse(string)```: Convierta la cadena JSON en un objeto y devuelva el objeto

Ejemplo

```js
console.log(undefined === JSON.stringify());
console.log(undefined === JSON.stringify(undefined));
console.log("null"===JSON.stringify(null));
console.log("222"===JSON.stringify(222));
console.log('"222"'===JSON.stringify("222"));
console.log("true"===JSON.stringify(true));
console.log(undefined===JSON.stringify(function(){}));
console.log(undefined===JSON.parse(JSON.stringify()));
console.log(undefined===JSON.parse(JSON.stringify(undefined)));
console.log(null===JSON.parse(JSON.stringify(null)));
console.log(222===JSON.parse(JSON.stringify(222)));
console.log("222"===JSON.parse(JSON.stringify("222")));
console.log(true===JSON.parse(JSON.stringify(true)));
console.log(undefined===JSON.parse(JSON.stringify(function(){})));
```

## Math

### Atributos

- E
- LN10
- LN2
- LOG2E
- LOG10E
- PI
- SQRT1_2
- SQRT2

Para un uso específico, consulte el estándar ES5.

### Método

- abs
- acos
- asin
- atan
- atan2
- ceil
- cos
- exp
- floor
- log
- max
- min
- pow
- random
- round
- sin
- sqrt
- tan

Para un uso específico, consulte el estándar ES5.
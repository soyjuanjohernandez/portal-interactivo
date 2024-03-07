---
sidebar_position: 6
---

# Tipos de datos

El SJS actualmente admite los siguientes tipos de datos:

- **string:** cadena de texto
- **boolean:** booleano
- **number:** número
- **object:** objeto
- **function:** función
- **array:** arreglo
- **date:** fecha
- **regexp:** Expresión regular

## Determinar el tipo de datos

El SJS proporciona los métodos del constructor y typeof para determinar el tipo de datos.

**constructor**

```js
const number = 10;
console.log(number.constructor); // "Number"
const string = "str";
console.log(string.constructor); // "String"
const boolean = true;
console.log(boolean.constructor); // "Boolean"
const object = {};
console.log(object.constructor); // "Object"
const func = function(){};
console.log(func.constructor); // "Function"
const array = [];
console.log(array.constructor); // "Array"
const date = getDate();
console.log(date.constructor); // "Date"
const regexp = getRegExp();
console.log(regexp.constructor); // "RegExp"
```

**typeof**

```js
const num = 100;
const bool = false;
const obj = {};
const func = function(){};
const array = [];
const date = getDate();
const regexp = getRegExp();
console.log(typeof num); // 'number'
console.log(typeof bool); // 'boolean'
console.log(typeof obj); // 'object'
console.log(typeof func); // 'function'
console.log(typeof array); // 'object'
console.log(typeof date); // 'object'
console.log(typeof regexp); // 'object'
console.log(typeof undefined); // 'undefined'
console.log(typeof null); // 'object'
```

## string

### Sintaxis

```js
'hello world';
"hello Mini Program";
```

sintaxis es6

```js
// string template
const a = 'hello';
const str = `${a} world`;
```

### Atributo

* ```constructor```: Valor de retorno ```"String"```
* ```length```

Para los significados específicos de los atributos además del constructor, consulte el estándar ES5.

### Método

- toString
- valueOf
- charAt
- charCodeAt
- concat
- indexOf
- lastIndexOf
- localeCompare
- match
- replace
- search
- slice
- split
- substring
- toLowerCase
- toLocaleLowerCase
- toUpperCase
- toLocaleUpperCase
- trim

Para un uso específico, consulte el estándar ES5.

## number

### Sintaxis

```js
const num = 10;
const PI = 3.141592653589793;
```

Atributo

- ```constructor```: Retorna un valor ```"Number"```

Métodos

* toString
* toLocaleString
* valueOf
* toFixed
* toExponential
* toPrecision

Para un uso específico, consulte el estándar ES5.

## boolean

Hay dos valores booleanos específicos: verdadero y falso

### Sintaxis

```js
const a = true;
```

### Atributo

- ```constructor```: Valor de retorno ```"Boolean"```

### Method

- toString
- valueOf

Para un uso específico, consulte el estándar ES5.

## object

### Sintaxis

```js
var o = {}; // generar un nuevo objeto vacío
// generar un nuevo objeto no vacío
o = {
  'str': "str",  // la clave del objeto puede ser una cadena de texto
  constVar: 2,  // la clave del objeto también puede ser un identificador que cumpla con las reglas de definición de variables
  val: {}, // el valor del objeto puede ser de cualquier tipo
};
// operación de lectura del atributo del objeto
console.log(1 === o['string']);
console.log(2 === o.constVar);
// operación de escritura del atributo del objeto
o['string']++;
o['string'] += 10;
o.constVar++;
o.constVar += 10;
// operación de lectura del atributo del objeto
console.log(12 === o['string']);
console.log(13 === o.constVar);
```

sintaxis es6:

```js
// Soporte
let a = 2;
o = { 
  a, // atributo del objeto
  b() {}, // método del objeto
};
const { a, b, c: d, e = 'default'} = {a: 1, b: 2, c: 3}; // asignación destructurada de objeto y valor por defecto
const {a, ...other} = {a: 1, b: 2, c: 3}; // asignación destructurada de objeto
const f = {...others}; // asignación destructurada de objeto
```

### Atributo
* ```constructor```: Return value ```"Object"```
```js
console.log("Object" === {a:2,b:"5"}.constructor);
```

### Método

* toString: Cadena de retorno "[object Object]"

## function

### Syntax

```js
// method 1: function declaration
function a (x) {
  return x;
}
// method 2: function expression
var b = function (x) { 
  return x;
};
// method 3: arrow function
const double = x => x * 2;
function f(x = 2){} // function default parameters
function g({name: n = 'Name Example', ...other} = {}) {} // function parameter destructuring assignment
function h([a, b] = []) {} // function parameter destructuring assignment
// Anonymous functions, closures
var c = function (x) {
  return function () { return x;}
};
var d = c(25);
console.log(25 === d());
```

La palabra clave "Argumentos" se puede usar en la función.

```js
var a = function(){
    console.log(2 === arguments.length);
    console.log(1 === arguments[0]);
    console.log(2 === arguments[1]);
};
a(1,2);
```

La función retorna:

```js
true
true
true
```

### Atributos

* ```Constructor```: Valor de retorno ```"Function"```
* ```Length```: devuelva el número de parámetros formales de la función

Método
* toString: retorno de cadena "[función de función]"

Ejemplo

```js
var f = function (a,b) { }
console.log("Function" === f.constructor);
console.log("[function Function]" === f.toString());
console.log(2 === f.length);
```

La función retorna:

```js
true
true
true
```

## array

### Sintaxis

```js
var a = [];      // matriz vacía
a = [5,"5",{},function(){}];  // Matriz no vacía, el elemento de matriz puede ser de cualquier tipo
const [b, , c, d = 5] = [1,2,3]; //Asignación de destrucción de matriz y predeterminado
const [e, ...other] = [1,2,3]; // Asignación de destrucción de matrices
const f = [...other]; // Destructación de la matriz
```

### Attribute

* ```Constructor```: valor de retorno ```"Array"```
* ```length```

Para los significados específicos de los atributos además del constructor, consulte el estándar ES5.

Método

- toString
- concat
- join
- pop
- push
- reverse
- shift
- slice
- sort
- splice
- unshift
- indexOf
- lastIndexOf
- every
- some
- forEach
- map
- filter
- reduce
- reduceRight

Para un uso específico, consulte el estándar ES5.

## date

### Sintaxis

Para generar un objeto de fecha, se requiere la función ```getDate```, que devuelve un objeto de la hora actual.

```js
getDate()
getDate(milliseconds)
getDate(datestring)
getDate(year, month[, date[, hours[, minutes[, seconds[, milliseconds]]]]])
```

### Parámetro

- ```milliseconds```: milisegundos desde 00:00:00 UTC del 1 de enero de 1970
- ```datestring```: Cadena de fecha, formato: "Día de mes, año Horas: Actas: segundos"

Atributo

- ```constructor```: Valor de retorno ```"Date"```

### Método

- toString
- toDateString
- toTimeString
- toLocaleString
- toLocaleDateString
- toLocaleTimeString
- valueOf
- getTime
- getFullYear
- getUTCFullYear
- getMonth
- getUTCMonth
- getDate
- getUTCDate
- getDay
- getUTCDay
- getHours
- getUTCHours
- getMinutes
- getUTCMinutes
- getSeconds
- getUTCSeconds
- getMilliseconds
- getUTCMilliseconds
- getTimezoneOffset
- setTime
- setMilliseconds
- setUTCMilliseconds
- setSeconds
- setUTCSeconds
- setMinutes
- setUTCMinutes
- setHours
- setUTCHours
- setDate
- setUTCDate
- setMonth
- setUTCMonth
- setFullYear
- setUTCFullYear
- toUTCString
- toISOString
- toJSON

Para un uso específico, consulte el estándar ES5.

### Ejemplo

```js
let date = getDate(); // devolver el objeto de hora actual
date = getDate(1500000000000);
date = getDate('2016-6-29');
date = getDate(2017, 6, 14, 10, 40, 0, 0);
```

## regexp

### Sintaxis

Para generar un objeto regexp, se requiere la función getRegExp.

```
getRegExp(pattern[, flags])
```

### Parámetros

* pattern: Contenido de la expresión regular
* flags: el modificador puede contener solo los siguientes caracteres:
* ```g```: global
* ```i```: ignoreCase
* ```m```: multiline

### Atributo

- Constructor: Return string ```"RegExp"```
- global
- ignoreCase
- lastIndex
- multiline
- source

Para los significados específicos de los atributos además del constructor, consulte el estándar ES5.

### Método

- exec
- test
- toString

Para un uso específico, consulte el Standar ES5d.

Ejemplo

```js
var reg = getRegExp("name", "img");
console.log("name" === reg.source);
console.log(true === reg.global);
console.log(true === reg.ignoreCase);
console.log(true === reg.multiline);
```
---
sidebar_position: 4
---

# Operadores

## Operador Aritmético

```js
var a = 10, b = 20;
// operación de suma
console.log(30 === a + b);
// operación de resta
console.log(-10 === a - b);
// operación de multiplicación
console.log(200 === a * b);
// operación de división
console.log(0.5 === a / b);
// operación de complemento
console.log(10 === a % b);
```

La operación de adición + se puede utilizar para la concatenación de cadenas.

```js
var a = 'hello', b = ' world';
// concatenación de cadenas
console.log('hello world' === a + b);

```

## Operador de Comparación

```js
var a = 10, b = 20;

// menor que
console.log(true === (a < b));
// mayor que
console.log(false === (a > b));
// menor o igual que
console.log(true === (a <= b));
// mayor o igual que
console.log(false === (a >= b));
// signo igual
console.log(false === (a == b));
// signo desigual
console.log(true === (a != b));
// todos los signos iguales
console.log(false === (a === b));
// no todos los signos iguales
console.log(true === (a !== b));
```

## Operadores Lógicos Binarios

```js
var a = 10, b = 20;
// Y
console.log(20 === (a && b));
// O
console.log(10 === (a || b));
// NO, operación inversa
console.log(false === !a);
```

## Operador de Bits

```js
var a = 10, b = 20;

// Operación de desplazamiento a la izquierda
console.log(80 === (a << 3));
// Operación de desplazamiento a la derecha sin signo
console.log(2 === (a >> 2));
// Operación de desplazamiento a la derecha con signo
console.log(2 === (a >>> 2));
// Operación AND
console.log(2 === (a & 3));
// Operación XOR
console.log(9 === (a ^ 3));
// Operación OR
console.log(11 === (a | 3));
```

## Operador de Asignación

```js
var a = 10;
a = 10; a *= 10;
console.log(100 === a);
a = 10; a /= 5;
console.log(2 === a);
a = 10; a %= 7;
console.log(3 === a);
a = 10; a += 5;
console.log(15 === a);
a = 10; a -= 11;
console.log(-1 === a);
a = 10; a <<= 10;
console.log(10240 === a);
a = 10; a >>= 2;
console.log(2 === a);
a = 10; a >>>= 2;
console.log(2 === a);
a = 10; a &= 3;
console.log(2 === a);
a = 10; a ^= 3;
console.log(9 === a);
a = 10; a |= 3;
console.log(11 === a);
```

## Operador Unario

```js
var a = 10, b = 20;
// operador de incremento
console.log(10 === a++);
console.log(12 === ++a);
// operador de decremento
console.log(12 === a--);
console.log(10 === --a);
// operación positiva
console.log(10 === +a);
// operación negativa
console.log(0-10 === -a);
// operación de NO
console.log(-11 === ~a);
// operación inversa
console.log(false === !a);
// operación de eliminar
console.log(true === delete a.fake);
// operación de void
console.log(undefined === void a);
// operación de tipo
console.log("number" === typeof a);
```

## Operador Ternario

```js
var a = 10, b = 20;
// operador de condición
console.log(20 === (a >= 10 ? a + 10 : b + 10));
```

## Operador de Coma

```js
var a = 10, b = 20;
// operador de coma
console.log(20 === (a, b));
```

## Prioridad de Operadores

La prioridad de los operadores de SJS es la misma que en JavaScript.
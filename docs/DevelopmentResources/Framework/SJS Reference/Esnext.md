# Esnext

SJS admite parte de la sintaxis ES6.

## let & const

```js
function test(){
  let a = 5;
  if (true) {
    let b = 6;
  }
  console.log(a); // 5
  console.log(b); // Error de referencia: B indefinido
}
```

## Función de flecha

```js
const a = [1,2,3];
const double = x => x * 2; // función de flecha
console.log(a.map(double));

var bob = {
  _name: "Bob",
  _friends: [],
  printFriends() {
    this._friends.forEach(f =>
      console.log(this._name + " knows " + f));
  }
};
console.log(bob.printFriends());
```

## Literal de Objeto más conciso

```js
var handler = 1;
var obj = {
  handler, // atributo de objeto
  toString() { // método de objeto
	return "string";
  },
};
```

Nota: La palabra clave ```super``` no es compatible. El ```super``` no se puede usar en el método de objeto.

## Plantilla para String

```js
const h = 'hello';
const msg = `${h} world`;
```

## Asignación por Desestructuración

```js
// Asignación por desestructuración de un array
var [a, ,b] = [1,2,3];
a === 1;
b === 3;

// Asignación por desestructuración de un objeto
var { op: a, lhs: { op: b }, rhs: c }
       = getASTNode();

// Logograma de asignación por desestructuración de un objeto
var {op, lhs, rhs} = getASTNode();

// Asignación por desestructuración de parámetros de una función
function g({name: x}) {
  console.log(x);
}
g({name: 5});

// Asignación por desestructuración con valor predeterminado
var [a = 1] = [];
a === 1;

// Parámetros de función: asignación por desestructuración con valor predeterminado
function r({x, y, w = 10, h = 10}) {
  return x + y + w + h;
}
r({x:1, y:2}) === 23;
```

## Default + Rest + Spread

```js
// Parámetro por defecto de función
function f(x, y=12) {
  // Si no se transfiere ningún valor a y o el valor transferido es undefined, entonces el valor de y es 12
  return x + y;
}
f(3) == 15;

function f(x, ...y) {
  // y es un array
  return x * y.length;
}
f(3, "hello", true) == 6;

function f(x, y, z) {
  return x + y + z;
}
f(...[1,2,3]) == 6; // Desestructuración de arrays

const [a, ...b] = [1,2,3]; // Asignación por desestructuración de arrays, b = [2, 3]

const {c, ...other} = {c: 1, d: 2, e: 3}; // Asignación por desestructuración de objetos, other = {d: 2, e: 3}

const d = {...other}; // Desestructuración de objetos
```
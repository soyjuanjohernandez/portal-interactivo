---
sidebar_position: 2
---


# Variable

Todas las variables en SJS son referencias a valores.

Reglas de sintaxis

* El var se comporta de la misma manera que en JavaScript.El elevación variable puede ocurrir.
* El constante y Let son compatibles, que se comportan de la misma manera que en JavaScript.
* Una variable no declarada que se usa directamente con la asignación se define como global.
* Una variable que se declara pero que no se usa tiene el predeterminado predeterminado.

```js
var num = 1;
var str = "hello world";
var undef; // undef === undefined
const n = 2;
let s = 'string';
globalVar = 3;
```

## Nombre de la variable

### Reglas de nombres

El nombre de la variable debe seguir estas dos reglas: 


* El carácter inicial debe ser una letra (A-Z, A-Z) o un bajo (_).
* Los otros caracteres pueden ser letra (A-Z, A-Z), Subsenscore (_) o número (0-9).

## Identificador reservado

Al igual que las reglas de sintaxis de JavaScript, los siguientes identificadores no pueden usarse como nombres variables:

```js
arguments
break
case
continue
default
delete
do
else
false
for
function
if
Infinity
NaN
null
require
return
switch
this
true
typeof
undefined
var
void
while
```
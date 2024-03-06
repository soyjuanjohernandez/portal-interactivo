---
sidebar_position: 5
---

# Declaración (Statement)

## if statement

En el archivo .sjs, es posible usar la ```instrucción if``` en los siguientes formatos:

```if (expression) statement```: cuando la expresión es verdadera, ejecutar ```statement```.
```if (expression) statement1``` else ```statement2```: cuando la expresión es verdadera, ejecutar ```statement1```. De lo contrario, ejecutar ```statement2```.
```if ... else if ... else statementN``` Esta ```instrucción``` permite seleccionar uno de ```statement1``` ~ ```statementN``` para su ejecución.

Sintaxis de ejemplo:

```js
// if ...
if (expression) statement;

if (expression)
  statement;

if (expression) {
  Code block;
}

// if ... else
if (expression) statement;
else statement;

if (expression)
  statement;
else
  statement;

if (expression) {
  Code block;
} else {
  Code block;
}

// if ... else if ... else ...
if (expression) {
  Code block;
} else if (expression) {
  Code block;
} else if (expression) {
  Code block;
} else {
  Code block;
}
```

## switch statement

Sintaxis de muestra:

```js
switch (expression) {
  case variable:
    statement;
  case number:
    statement;
    break;
  case string:
    statement;
  default:
    statement;
}
```

* Se pueden omitir las ramas por ```default```.
* Detrás de la palabra clave del ```case```, use solo ```variable```, ```number```, ```string```.

Ejemplos de código:

```js
var exp = 10;

switch ( exp ) {
case "10":
  console.log("string 10");
  break;
case 10:
  console.log("number 10");
  break;
case exp:
  console.log("var exp");
  break;
default:
  console.log("default");
}
```

Salida:

```
number 10
```

## for statement

```js
Sample syntax:
	for (statement; statement; statement)
  statement;

for (statement; statement; statement) {
  Code block;
}
```

* Apoyo al uso de las palabras clave de descanso y continuar.

Ejemplo del Código:

```js
for (var i = 0; i < 3; ++i) {
  console.log(i);
  if( i >= 1) break;
} 
```

Salida:

```
0
1
```

## While Statement

```js
Sample syntax:
while (expression)
  statement;

while (expression){
  Code block;
}

do {
  Code block;
} while (expression)
```

* Cuando la ```expresssion``` es verdadera, haga la ejecución del bucle del ```statement``` o el ```code block```.
* Soporta tambien el uso de las palabras clave de ```break``` y ```continue```.
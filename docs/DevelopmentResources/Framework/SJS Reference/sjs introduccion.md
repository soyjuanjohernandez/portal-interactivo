---
sidebar_position: 1
---

# Introducción de SJS

SJS (seguro/subconjunto de JavaScript) es un conjunto de lenguaje de secuencias de comandos personalizado del Mini programa y se usa para construir una estructura de página en AXML.

El SJS es un subconjunto de lenguaje JavaScript, que es un lenguaje diferente de JavaScript, tiene una sintaxis diferente de JavaScript.

## Uso

Defina SJS en el archivo ```.sjs```:

```js
// pages/index/index.sjs
const message = 'hello world';
const getMsg = x => x;
export default {
  message,
  getMsg,
};
```

```js
// pages/index/index.js
Page({
  data: {
    msg: 'hello Mini Program',
  },
});
```

```xml
<!-- pages/index/index.axml -->
<import-sjs name="m1" from="./index.sjs"/>
<view>{{m1.message}}</view>
<view>{{m1.getMsg(msg)}}</view>
```

Salida de la página:

```
hello world
hello Mini Program
```

Nota:

* **La sjs solo admite importación y exportación para gestionar dependencias.**
* La sjs solo se puede definir en el archivo ```.sjs```. Luego se introduce a través de la etiqueta ```<import-sjs>``` en axml.
* La sjs puede llamar a funciones definidas en otros archivos sjs.
* La sjs es un subconjunto del lenguaje JavaScript y no puede considerarse igual que JavaScript.
* El entorno de ejecución de sjs está aislado de otros códigos JavaScript. En sjs, es imposible llamar a funciones definidas en otros archivos JavaScript o APIs proporcionadas por Mini Program.
* La función sjs no puede ser llamada de vuelta como evento de componente.
* La sjs es independiente de la versión de la biblioteca base y puede ejecutarse en todas las versiones de Mini Programa.

## Etiqueta import-sjs

<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Yes</td>
    <td>Module name of the current ```<import-sjs>``` tag.</td>
  </tr>
  <tr>
    <td>from</td>
    <td>String</td>
    <td>Yes</td>
    <td>Relative path of the reference .sjs file.</td>
  </tr>
</table>

**Nota:**

El atributo de nombre es el nombre del módulo de la etiqueta actual ```<import-sjs>```.En un solo archivo AXML, se recomienda un valor de nombre único.Si hay nombres de módulos repetidos, este último anula el primero.Los nombres del módulo ```<import-sjs>``` en diferentes archivos AXML no se anularon entre sí.
El atributo de nombre puede ser una cadena para indicar el nombre de módulo predeterminado o ```{x}``` para indicar la exportación del módulo nombrado.

Ejemplo del Código:

```js
// pages/index/index.js
Page({
  data: {
    msg: 'hello world',
  },
});
```

```js
// pages/index/index.sjs
function bar(prefix) {
  return prefix;
}
export default {
  foo: 'foo',
  bar: bar,
};
```

```jsx
// pages/index/namedExport.sjs
export const x = 3;
export const y = 4;
<!-- pages/index/index.axml -->
<import-sjs from="./index.sjs" name="test"></import-sjs>
<!-- Possible to code as a single tag closure -->
<import-sjs from="./index.sjs" name="test" />

<!-- Call the bar function in the test module, with parameter as foo in the test module -->
<view> {{test.bar(test.foo)}} </view>
<!-- Call the bar function in the test module, with parameter as msg in page.js -->
<view> {{test.bar(msg)}} </view>

<!-- Support named export (named export) -->
<import-sjs from="./namedExport.sjs" name="{x, y: z}" />
<view>{{x}}</view>
<view>{{z}}</view>
```

Salida de la página:

```
foo
hello world
3
4
```

**Nota:**

* En referencia, asegúrese de usar el sufijo de archivo ".sjs".
* Si se definió un módulo .sjs pero nunca se ha referido, el módulo no se analiza ni se ejecuta.
---
sidebar_position: 10
---

# Motor de JavaScript de Mini Program

## Motor en funcionamiento

Los códigos JavaScript de Mini Program se dividen en scripts de capa lógica y scripts sjs, que se ejecutan en diferentes hilos en el mismo motor de JavaScript. El motor de JavaScript de Mini Program varía según los diferentes sistemas operativos. En la plataforma iOS, el script se ejecuta en JavaScriptCore proporcionado por el sistema operativo. En la plataforma Android, el script se ejecuta en el motor V8.

Mini Program realiza la conversión de [babel](https://babeljs.io/) para los códigos cargados por los desarrolladores, lo que permite que el motor de JavaScript admita la mayoría de las nuevas funciones de ES6. Para los objetos internos de la extensión ES6, Mini Program no proporciona polyfill en el motor de JavaScript, lo que resulta en diferencias en el soporte para diferentes objetos internos de extensión ES6 para JavaScript en diferentes plataformas. Los desarrolladores deben evitar el uso de objetos internos no compatibles por el motor de JavaScript y pueden proporcionar polyfill para estos objetos internos. (Polyfill se refiere a los códigos de API no compatibles utilizados para implementar navegadores u otros motores de JavaScript, como [babel-polyfill](https://babeljs.io/docs/en/babel-polyfill).)

# Soportes de Sistemas Operativos Cliente para Objetos Internos de la Extensión ES6

La tabla a continuación enumera los sistemas operativos que admiten los objetos internos de la extensión ES6.

<table>
  <thead>
    <tr>
      <th>Objeto</th>
      <th>iOS 9</th>
      <th>iOS 10 y superior</th>
      <th>Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Object.is</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Object.assign</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Object.keys</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Object.getOwnPropertyDescriptor</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Object.getOwnPropertyNames</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Object.getOwnPropertySymbols</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>String</th>
      <th>iOS 9</th>
      <th>iOS 10 y superior</th>
      <th>Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>String.prototype.codePointAt</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>String.prototype.normalize</td>
      <td>Sin soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>String.prototype.includes</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>String.prototype.startsWith</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>String.prototype.endsWith</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>String.prototype.repeat</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>String.fromCodePoint</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Array</th>
      <th>iOS 9</th>
      <th>iOS 10 y superior</th>
      <th>Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Array.prototype.copyWithin</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.prototype.find</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.prototype.findIndex</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.prototype.entries</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.prototype.keys</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.prototype.values</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Sin soporte</td>
    </tr>
    <tr>
      <td>Array.prototype.includes</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.from</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Array.of</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Number</th>
      <th>iOS 9</th>
      <th>iOS 10 y superior</th>
      <th>Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Number.isFinite</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Number.isNaN</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Number.parseInt</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Number.parseFloat</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Number.isInteger</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Number.EPSILON</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Number.isSafeInteger</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Math</th>
      <th>iOS 9</th>
      <th>iOS 10 y superior</th>
      <th>Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Math.trunc</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.sign</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.cbrt</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.clz32</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.imul</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.fround</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.hypot</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.expm1</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.log1p</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.log10</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.log2</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.sinh</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.cosh</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.tanh</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.asinh</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.acosh</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Math.atanh</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Objetos Internos</th>
      <th>iOS 9</th>
      <th>iOS 10 y superior</th>
      <th>Android</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Set</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Map</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Proxy</td>
      <td>Sin soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Reflect</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
    <tr>
      <td>Promise</td>
      <td>Soporte</td>
      <td>Soporte</td>
      <td>Soporte</td>
    </tr>
  </tbody>
</table>

## Limitaciones en el script de ejecución dinámica

En aras de la seguridad, el mini programa limita parte de la sintaxis y las API de ES.

- No es compatible con eval.

- setTimeout y setInterval, y solo admite la función para los parámetros de devolución de llamada. La ejecución dinámica de códigos no es compatible.

- No es compatible con el uso de new Function para crear una función.


## Palabras reservadas del nombre del módulo

La capa lógica del Mini Programa admite la sintaxis de módulos ES2015, pero considera algunos nombres de objetos internos (como `window` y `document` del navegador como palabras reservadas para necesidades de emergencia en el futuro. Estas palabras reservadas no pueden ser utilizadas como nombre de módulo. Las palabras reservadas incluyen `globalThis`, `global`, `fetch`, `self`, `window`, `document`, `location` y `XMLHttpRequest`. Para más detalles, consulta las descripciones de las palabras reservadas de nombre de módulo en la [descripción del framework](/).


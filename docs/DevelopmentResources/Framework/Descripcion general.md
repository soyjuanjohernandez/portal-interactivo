---
sidebar_position: 1
---

# Descripción general

## Estructura de archivo

El mini program se divide en dos capas: aplicación y página.La aplicación describe todo el programa; la página describe las páginas individuales.

La aplicación consta de tres archivos y debe colocarse en el directorio raíz del proyecto.

<table>
	<tr>
		<th>File</th>
		<th>Mandatory</th>
		<th>Function</th>
	</tr>
<tbody>
	<tr>
		<td>app.js</td>
		<td>Sí</td>
		<td>lógica de Mini Program.</td>
	</tr>
	<tr>
		<td>app.json</td>
		<td>Sí</td>
		<td>Configuración global de Mini Programa.</td>
	</tr>
	<tr>
		<td>app.acss</td>
		<td>No</td>
		<td>Hoja de estilo global de Mini Programa.</td>
	</tr>
</tbody>
</table>

La página consta de cuatro tipos de archivos:

<table>
    <tr>
        <th>Tipo de archivo</th>
        <th>Obligatoria</th>
        <th>Función</th>
    </tr>
    <tbody>
    <tr>
        <td>js</td>
        <td>Sí</td>
        <td>Lógica de la página.</td>
    </tr>
    <tr>
        <td>axml</td>
        <td>Sí</td>
        <td>Estructura de página.</td>
    </tr>
    <tr>
        <td>acss</td>
        <td>No</td>
        <td>Hoja de estilo de página.</td>
    </tr>
    <tr>
        <td>json</td>
        <td>No</td>
        <td>Configuración de la página.</td>
    </tr>
    </tbody>
</table>

**Nota**: Para la comodidad de los desarrolladores, especificamos que estos cuatro archivos deben tener la misma ruta y nombre de archivo.Todos los códigos escritos por el desarrollador eventualmente se empaquetarán en un script de JavaScript que se ejecuta cuando el mini programa comience y se destruye cuando el mini programa termine de ejecutarse.

## Estructura lógica

El núcleo del programa mini es un sistema de enlace de datos receptivo, compuesto por la capa de vista y la capa lógica.Las dos capas se mantienen siempre sincrónicas.Cada vez que los datos se modifican en la capa lógica, la capa de vista se actualiza en consecuencia.

Vea el siguiente ejemplo simple.

```js
<!-- View layer -->
<view> Hello {{name}}! </view>
<button onTap="changeName"> Click me! </button>
```

```js
// Capa lógica
var initialData = {
  name: 'AppContainer'
};
// Registre una página.
Page({
  data: initialData,
  changeName(e) {
    // sent data change to view
    this.setData({
      name: 'Mini Program'
    })
  }
});
```

En los códigos anteriores, el framework vincula automáticamente el nombre en la capa lógica al nombre en la capa de vista, por lo que cada vez que se abre la página, ¡muestra Hello AppContainer!

Cuando el usuario presiona el botón, la capa de vista envía el evento ChangeName a la capa lógica.La capa lógica encuentra el controlador de eventos correspondiente.La capa lógica ejecuta la operación SetData, cambiando el nombre de AppContainer a mini programa.Dado que la capa lógica y la capa de vista ya están vinculadas, la visualización de la capa de vista cambia automáticamente a Hello Mini Program!.

**Nota**: Dado que el marco no funciona en el navegador, algunas capacidades web de JavaScript no se pueden usar, como el documento y los objetos de la ventana.

Para la capa lógica JS, los códigos se pueden organizar a través de la sintaxis del módulo ES2015:

```js
import util from './util'; // Loading relative path
import absolute from '/absolute'; // Loading project root directory path
```

## Nombres reservados para el módulo

El mini programa considera algunos nombres de objetos en el navegador como ```window```, ```document``` como nombres reservados para uso futuro.Los nombres reservados incluyen **globalThis**, **global**, **fetch**, **self**, **window**, **document**, **location**, **XMLHttpRequest**. No use estos nombres para el nombre del módulo, o el módulo no se puede usar normalmente.Por ejemplo:

```js
import { window } from './myWindow'
console.log(window) // undefined
```

Los códigos anteriores muestran que si se usa el nombre reservado como nombre del módulo, el módulo importado estará ```undefined```. Por lo tanto, no debe usar estos nombres reservados ni cambiar el nombre del nombre del módulo utilizando ```as``` cuando se importa el módulo. Por ejemplo:

```js
import { window as myWindow } from './myWindow'
console.log(myWindow)
```

## Modulo de NPM de Terceros

El soporte para Mini Program admite la introducción del módulo de terceros. Se requiere ejecutar primero el siguiente comando para instalar el módulo en el directorio de raíz del Mini Program:

```npm
$ npm install lodash --save
```

Después de la instalación, se puede usar directamente en la capa lógica:

```js
import lodash from 'lodash'; // Loading the third-party npm module
```

Nota: Dado que el módulo de terceros en el nodo_modules no pasa por el convertidor, para la compatibilidad en varios terminales, los códigos en el node_modules deben convertirse en el formato ES5 antes de usar. Para el formato del módulo, se recomienda utilizar la importación/exportación de ES2015. Mientras tanto, las capacidades relacionadas con el navegador del navegador tampoco se pueden usar.
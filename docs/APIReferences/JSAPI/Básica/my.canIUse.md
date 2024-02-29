---
sidebar_position: 1
---


# my.canIUse

Compruebe si la API del programa MINI actual, el parámetro entrante o el valor de retorno, el componente, el atributo, etc. son compatibles con la versión actual.

Los parámetros se llaman a través del modo```${API}.${type}.${param}.${option}``` o ```${component}.${attribute}.${option}```.

* API es el nombre de la API
* Tipo de valor de valor/retorno/devolución de llamada, indicando el tipo de juicio de API
* Param indica un nombre de atributo del parámetro
* La opción indica el valor de atributo detallado del atributo de parámetro
* El componente indica el nombre del componente
* El atributo indica el nombre del atributo de componente
* La opción indica el valor del atributo de componente

## Código de muestra

```js
// Compruebe si la API recién agregada está disponible
my.canIUse('getFileInfo')
// Verifique si está disponible una propiedad recientemente agregada de API
my.canIUse('getLocation.object.type')
// Verifique si está disponible la propiedad de API devuelta recientemente agregada
my.canIUse('getSystemInfo.return.brand')
// Compruebe si está disponible la propiedad recién agregada del componente
my.canIUse('button.open-type.getAuthorize')
```
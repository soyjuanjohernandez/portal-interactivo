---
sidebar_position: 1
---


# Descripción general

## Introducción
La biblioteca de componentes extendidos del mini programa proporciona capacidades adicionales importantes en base a la [biblioteca de componentes básicos](/). La biblioteca de componentes extendidos contiene un conjunto de componentes de UI de código abierto, que se desarrollan sobre la base de las especificaciones de [componentes personalizados de Mini Program](/). Los desarrolladores de mini programa pueden reutilizar los componentes extendidos rápidamente.

## Instalación
Use el siguiente código de muestra para instalar la dependencia:

```
$ npm install mini-ali-ui --save
```

## Procedimientos
Para usar el componente, complete los siguientes pasos:

1. Registre el componente en el archivo JSON de la página relacionada.Por ejemplo, el registro del componente del título es el siguiente:

```js
{

  "usingComponents": {

    "title": "mini-ali-ui/es/title/index"
  }
}
```

Si instala la versión RPX de la biblioteca de componentes extendidos, modifique el nombre del componente durante el registro:

```js
{

  "usingComponents": {

    "title": "mini-ali-ui-rpx/es/title/index"
  }

}
```
2. Llame al componente en el archivo AXML.
```axml
<title

  hasLine="true"

  iconURL="https://example.com/images/T1HHFgXXVeXXXXXXXX.png"

  type="close"

  onActionTap="titleClose"

>the internal title can be closed 
</title>
```

## Internacionalización
Se traducen los textos de todos los componentes.Y los siguientes idiomas ahora son compatibles:
- [中文](/)
- [en-US](/)

**Note:**

El idioma predeterminado es **chino**.

## Method
Para habilitar la internalización para mini programas, agregue la siguiente clave y valor al campo `globalData` en el archivo **app.js**.

<table>
    <tr>
        <th>llave</th>
        <th>valor</th>
    </tr>
    <tr>
        <td>miniAliUiLang</td>
        <td>''、'en-US'</td>
    </tr>
</table>

Si la clave Minialiuilang está nula o no está definida, el idioma predeterminado será chino.

## Ejemplos
Verifique la siguiente muestra: 
```js
App({
  globalData: {
    miniAliUiLang: 'en-US',
  },
  onLaunch() {},
});
```
## Actualización de la versión
Actualizar la versión del componente de interfaz de usuario utilizando el siguiente comando:

```
$ npm update mini-ali-ui --save
```

**Nota:**

La última versión es 1.3.0.
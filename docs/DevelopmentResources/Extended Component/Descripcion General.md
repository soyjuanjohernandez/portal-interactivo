# Visión general

## Introducción

La biblioteca de componentes extendidos de Mini Program proporciona capacidades adicionales importantes sobre la [base de la biblioteca de componentes básicos](/). La biblioteca de componentes extendidos contiene un conjunto de componentes de UI de código abierto, que se desarrollan sobre la base de las [especificaciones de componentes personalizados de Mini Program](/). Los desarrolladores de Mini Program pueden reutilizar rápidamente los componentes extendidos.

## Instalación

Utilice el siguiente código de muestra para instalar la dependencia:

```bash
$ npm install mini-ali-ui --save
```

## Procedimientos

Para usar el componente, complete los siguientes pasos:

1. Registre el componente en el archivo JSON de la página relacionada. Por ejemplo, el registro del componente de título es el siguiente:

```js
{
  "usingComponents": {
    "title": "mini-ali-ui/es/title/index"
  }
}
```

Si instala la versión rpx de la biblioteca de componentes extendidos, modifique el nombre del componente durante el registro:

```js
{
  "usingComponents": {
    "title": "mini-ali-ui-rpx/es/title/index"
  }
}
```

2. Llame al componente en el archivo AXML.

```xml
<title
  hasLine="true"
  iconURL="https://example.com/images/T1HHFgXXVeXXXXXXXX.png"
  type="close"
  onActionTap="titleClose"
>el título interno puede cerrarse</title>
```

## Internacionalización

Los textos de todos los componentes están traducidos. Y los siguientes idiomas son compatibles:

- [中文](/)
- [en-US](/)

**Nota:**

El idioma predeterminado es el **chino**.

### Método

Para habilitar la internacionalización para mini programas, agregue la siguiente clave y valor al campo `globalData` en el archivo **app.js**.

| Clave        | Valor         |
|--------------|--------------|
| miniAliUiLang | ''、'en-US' |

Si la clave `miniAliUiLang` está vacía o no está definida, el idioma predeterminado será el chino.

### Ejemplos

Verifique el siguiente ejemplo:

```js
App({
  globalData: {
    miniAliUiLang: 'en-US',
  },
  onLaunch() {},
});
```

## Actualización de versión

Actualice la versión del componente de UI utilizando el siguiente comando:

```bash
$ npm update mini-ali-ui --save
```

Nota:

La última versión es 1.3.0.
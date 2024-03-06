# Referencia de archivo

El axml proporciona dos métodos de referencia de archivo: ```import``` e ```include```.

## import

La importación puede cargar una ```template``` definido.

Por ejemplo, se definió un ```item``` llamado ```template``` en el ```item.axml```.

```xml
<!-- item.axml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

Cuando se hace referencia a item.axml en index.axml, se puede usar la plantilla ```item```.

```xml
<import src="./item.axml"/>
<template is="item" data="{{text: 'forbar'}}"/>
```

El import tiene el concepto de alcance de acción.Solo se importa la plantilla definida en el archivo de destino, pero la importada al archivo de destino no se importa.

Por ejemplo, C import D, D import a, en C es posible usar la plantilla definida en D, en D es posible usar la plantilla definida en A, pero en C es imposible usar la plantilla definida en A.

```xml
<!-- a.axml -->
<template name="A">
  <text> A template </text>
</template>
```

```xml
<!-- b.axml -->
<import src="./a.axml"/>
<template name="B">
  <text> B template </text>
</template>
```

```xml
<!-- c.axml -->
<import src="./b.axml"/>
<template is="A"/>  <!-- Nota: no se puede usar importar A -->
<template is="B"/>
```

Tenga en cuenta que el sub-nodo de la plantilla puede ser solo uno. Por ejemplo:

**Ejemplo permitido:**

```xml
<template name="x">
  <view />
</template>
```

**Ejemplo no permitido:**

```xml
<template name="x">
  <view />
  <view />
</template>
```

## include

La inclusión puede introducir los códigos completos, excepto ```<template/>```, que es equivalente a copiar a la posición de incluir.

Código de ejemplo:

```xml
<!-- index.axml -->
<include src="./header.axml"/>
<view> body </view>
<include src="./footer.axml"/>
```

```xml
<!-- header.axml -->
<view> header </view>
```

```xml
<!-- footer.axml -->
<view> footer </view>
```

## Introduction Path

La ruta de introducción de la plantilla admite la ruta relativa, la ruta absoluta y el módulo de terceros cargado desde el directorio Node_Modules.

```xml 
<import src="./a.axml"/> <!-- relative path -->
<import src="/a.axml"/> <!-- absolute path of the project -->
<import src="third-party/x.axml"/> <!-- path of the third-party npm package -->
```
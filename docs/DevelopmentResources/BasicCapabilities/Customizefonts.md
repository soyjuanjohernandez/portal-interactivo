---
sidebar_position: 2
---

# Customize fonts

Este tema ayuda a los desarrolladores de mini-programas a personalizar las fuentes en mini programas para mejorar el atractivo visual.Al personalizar las fuentes, los desarrolladores de mini-programas pueden elegir entre las siguientes dos opciones:
- Use las fuentes del sistema
- Use fuentes externas

## Antes de que empieces
Antes de personalizar las fuentes en sus mini programas, asegúrese de estar familiarizado con lo siguiente:

- Desarrollo frontal
- [La estructura de los mini programas](/)
- El archivo [ACSS](/)
- La regla de [@font-face](/)


## Use las fuentes del sistema
Tome los siguientes pasos para usar las fuentes del sistema:

1. Abra el archivo App.ACSS en su proyecto mini-Programa.
2. Localice el selector de comodín `*` o cree un nuevo selector para definir los estilos de fuentes.
3. Use la propiedad de `font-family` para especificar la fuente deseada.Puede enumerar múltiples fuentes para proporcionar opciones de respaldo.Consulte el siguiente código para obtener un ejemplo:

```css
* {
    font-style: normal;
    font-weight: normal;
    font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
}
```

## Usar fuentes externas
Tome los siguientes pasos para usar fuentes externas:

1. Abra el archivo App.ACSS en su proyecto mini-Programa.
2. Dentro del archivo, use la regla de @font-face para definir su fuente personalizada con las siguientes dos propiedades:
    - `font-Family`: especifique un nombre para su fuente.
    - `src`: especifique la ubicación de sus archivos de fuentes.Puede incluir múltiples formatos para garantizar la compatibilidad en diferentes plataformas.Se admiten archivos de fuentes remotos y almacenados localmente, pero se recomienda almacenar sus archivos de fuentes en un servidor remoto para evitar un gran tamaño de paquete de proyecto.Consulte el siguiente código para obtener un ejemplo:

```js
@font-face {
  font-family: "My Font";
  src: url("/fonts/myfont.woff2") format("woff2"),
       url("/fonts/myfont.woff") format("woff"),
       url("https://mdn.mozillademos.org/files/2468/myfont.ttf") format("opentype");
}
```

Para aplicar la fuente personalizada a estilos específicos, como una página, simplemente use la propiedad `font-Family` y especifique el nombre de fuente que definió en la regla `@Font-face`. Consulte el siguiente código para obtener un ejemplo:

```js
page {
    font-family: "My Font";
}
```
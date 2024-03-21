---
sidebar_position: 9
---

# SearchBar

La función de búsqueda permite consultas de texto para los usuarios. Sobre la base del contenido de la página actual, el usuario puede realizar búsquedas exactas o búsquedas difusas para filtrar y localizar contenido y aumentar la productividad en las consultas. Cuando se activa la barra de búsqueda, aparece el botón de cancelación. Nota: Solo para fines de presentación de la interfaz de usuario. No hay función lógica de servicio disponible.

## Código de Ejemplo

```js
// API-DEMO page/component/search-bar/search-bar.json
{
  "defaultTitle": "Biblioteca de componentes Mini Program AntUI",
  "usingComponents": {
    "search-bar": "mini-antui/es/search-bar/index"
  }
}
```

```axml
<!-- API-DEMO page/component/search-bar/search-bar.axml -->
<view>
  <search-bar
    value="{{value}}"
    placeholder="Buscar "
    onInput="handleInput"
    onClear="handleClear"
    onFocus="handleFocus"
    onBlur="handleBlur"
    onCancel="handleCancel"
    onSubmit="handleSubmit"
    showCancelButton="{{false}}" />
</view>
```

```js
// API-DEMO page/component/search-bar/search-bar.js
Page({
  data: {
    value: 'Comida',
  },
  handleInput(value) {
    this.setData({
      value,
    });
  },
  handleClear(value) {
    this.setData({
      value: '',
    });
  },
  handleFocus() {},
  handleBlur() {},
  handleCancel() {
    this.setData({
      value: '',
    });
  },
  handleSubmit(value) {
    my.alert({
      content: value,
    });
  },
});
```

## Atributos

| Propiedad           | Descripción                                               | Tipo                   | Valor por Defecto | Requerido |
|---------------------|-----------------------------------------------------------|------------------------|-------------------|-----------|
| value               | Valor actual en el cuadro de búsqueda.                   | String                 | -                 | No        |
| placeholder         | Marcador de posición.                                     | String                 | -                 | No        |
| focus               | Obtener cursor automáticamente.                          | Boolean                | false             | No        |
| onInput             | Disparador al introducir desde el teclado.               | (valor: String) => void| -                 | No        |
| onClear             | Disparador al hacer clic en el icono de limpieza.        | (val: String) => void | -                 | No        |
| onFocus             | Disparador al obtener el foco.                           | () => void             | -                 | No        |
| onBlur              | Disparador al perder el foco.                            | () => void             | -                 | No        |
| onCancel            | Disparador al hacer clic en cancelar.                   | () => void             | -                 | No        |
| onSubmit            | Disparador al hacer clic en enter en el botón.          | (val: String) => void | -                 | No        |
| disabled            | Establecer desactivado.                                  | Boolean                | -                 | No        |
| maxLength           | Número máximo de caracteres permitidos para la entrada. | Number.                | -                 | No        |
| showCancelButton   | Mostrar siempre el botón de cancelación o no.            | Boolean                | -                 | No        |


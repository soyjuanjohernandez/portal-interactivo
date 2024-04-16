---
sidebar_position: 2
---

# Configuración global

```app.json``` se utiliza para implementar la configuración global y establecer la ruta de los archivos de página, la visualización de la ventana, pestañas múltiples, entre otros.

Aquí tienes un ejemplo básico de configuración:

```js
{
  "pages": [
    "pages/index/index",
    "pages/logs/index"
  ],
  "window": {
    "defaultTitle": "Demo"
  }
}
```

Elemento de configuración completo:

<table>
    <tr>
      <th>Atributo</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  <tbody>
    <tr>
      <td>pages</td>
      <td>Array</td>
      <td>Sí</td>
      <td>Establece la ruta de la página.</td>
    </tr>
    <tr>
      <td>window</td>
      <td>Objeto</td>
      <td>No</td>
      <td>Establece la visualización predeterminada de la ventana para todas las páginas.</td>
    </tr>
    <tr>
      <td>tabBar</td>
      <td>Objeto</td>
      <td>No</td>
      <td>Establece la visualización de la barra de pestañas inferior.</td>
    </tr>
  </tbody>
</table>

## páginas

En el archivo app.json, las ```pages``` tienen el atributo de array, con cadenas para cada miembro en el array, utilizado para especificar las ```pages``` del Mini Programa. En el Mini Programa, agregar o eliminar ```pages``` modifica el array de ```pages```.
Cada miembro del array de paginas representa la ruta de la página relacionada. El primer miembro indica la página de inicio del Mini Programa.
La ruta de la página no necesita ningún sufijo. El framework carga automáticamente los archivos .json, .js, .axml y .acss con el mismo nombre. Por ejemplo, si el directorio de desarrollo es:

```js
├── pages
│   ├──index
│   │    ├── index.json
│   │    ├── index.js
│   │    ├── index.axml
│   │    └── index.acss
│   ├──logs
│   │    ├── logs.json
│   │    ├── logs.js
│   │    └── logs.axml
├── app.json
├── app.js
└── app.acss
```

La siguiente configuración se realizará en la ```app.json```:

```js
{
  "pages":[
    "pages/index/index",
    "pages/logs/logs"
  ]
}
```

## window

La window se usa para configurar la barra de estado, la barra de navegación, el título, el color de fondo de la ventana, etc. para el mini programa.

Códigos de muestra:

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
      <th>Versión Mínima</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>defaultTitle</td>
      <td>String</td>
      <td>NO</td>
      <td>Título predeterminado de la página.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>pullRefresh</td>
      <td>String</td>
      <td>NO</td>
      <td>Permite el tirón para refrescar o no, NO por defecto. Notas: La condición previa para que el tirón para refrescar surta efecto es permiteBounceVertical YES.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>allowsBounceVertical</td>
      <td>String</td>
      <td>NO</td>
      <td>Permite el rebote vertical o no SÍ por defecto, compatible con ```YES / NO```.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>transparentTitle</td>
      <td>String</td>
      <td>NO</td>
      <td>Configuración de transparencia de la barra de navegación ningún por defecto, compatible con siempre (siempre transparente) / auto (adaptación deslizante) / ninguno (no transparente).</td>
      <td>-</td>
    </tr>
    <tr>
      <td>titlePenetrate</td>
      <td>String</td>
      <td>NO</td>
      <td>Permite el clic a través de la barra de navegación o no No por defecto, compatible con ```YES / NO```.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>showTitleLoading</td>
      <td>String</td>
      <td>NO</td>
      <td>Mostrar carga de la barra de navegación o no al entrar No por defecto, compatible con ```YES / NO```.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>titleImage</td>
      <td>String</td>
      <td>NO</td>
      <td>Dirección de la imagen de la barra de navegación.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>titleBarColor</td>
      <td>HexColor</td>
      <td>NO</td>
      <td>Color de fondo de la barra de navegación, valor de color decimal (0-255).</td>
      <td>-</td>
    </tr>
    <tr>
      <td>backgroundColor</td>
      <td>HexColor</td>
      <td>NO</td>
      <td>Color de fondo de la página, valor de color decimal (0-255).</td>
      <td>-</td>
    </tr>
    <tr>
      <td>backgroundImageColor</td>
      <td>HexColor</td>
      <td>NO</td>
      <td>Color de fondo para mostrar durante el desplazamiento hacia abajo, valor de color decimal (0-255).</td>
      <td>-</td>
    </tr>
    <tr>
      <td>backgroundImageUrl</td>
      <td>String</td>
      <td>NO</td>
      <td>URL del fondo para mostrar durante el desplazamiento hacia abajo.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>gestureBack</td>
      <td>String</td>
      <td>NO</td>
      <td>Solo para iOS, compatible con el retorno de gestos o no No por defecto, compatible con ```YES / NO```.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>enableScrollBar</td>
      <td>Boolean</td>
      <td>NO</td>
      <td>Solo para Android, muestra la barra de desplazamiento del WebView o no SÍ por defecto, compatible con ```YES / NO```.</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onReachBottomDistance</td>
      <td>Número</td>
      <td>NO</td>
      <td>Distancia al fondo de la página para activar el agotamiento durante el desplazamiento hacia arriba, en px. Documentos relacionados con el [manejador de eventos de página](/). </td>
      <td>Actualmente, ```iOS``` no admite configuraciones en el ```page.json```, y solo se admiten configuraciones globales.</td>
    </tr>
  </tbody>
</table>

## tabBar

Si el Mini Program es una aplicación múlti pestaña (páginas conmutables en la barra inferior de la ventana del cliente), el elemento de configuración ```TabBar``` 'se puede utilizar para especificar el patrón de presentación de pestaña y la página correspondiente en caso de pestañacambiar.

**Nota:**:

* En la página de destino a través de salto de página ([my.navigateTo](/)) o redirección de la página ([my.redirectTo](/)), la barra de pestaña inferior no se muestra incluso cuando la página se define en la configuración de TabBar.

El TabBar tiene los siguientes elementos de configuración:

<table>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>textColor</td>
      <td>HexColor</td>
      <td>NO</td>
      <td>Color del texto.</td>
    </tr>
    <tr>
      <td>selectedColor</td>
      <td>HexColor</td>
      <td>NO</td>
      <td>Color del texto resaltado.</td>
    </tr>
    <tr>
      <td>backgroundColor</td>
      <td>HexColor</td>
      <td>NO</td>
      <td>Color de fondo.</td>
    </tr>
    <tr>
      <td>items</td>
      <td>Array</td>
      <td>Yes</td>
      <td>Cada configuración de pestaña.</td>
    </tr>
</table>

Cada item de configuración:

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>pagePath</td>
      <td>String</td>
      <td>Yes</td>
      <td>Establece la ruta de la página.</td>
    </tr>
    <tr>
      <td>name</td>
      <td>String</td>
      <td>Yes</td>
      <td>Nombre.</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>String</td>
      <td>NO</td>
      <td>Ruta común del icono.</td>
    </tr>
    <tr>
      <td>activeIcon</td>
      <td>String</td>
      <td>NO</td>
      <td>Ruta del icono resaltado.</td>
    </tr>
  </tbody>
</table>

El tamaño recomendado del icono es 60 × 60 px. Las imágenes que no están en el tamaño recomendado se estirarán o escalarán en una proporción desigual.
Código de ejemplo:

```js
{
  "tabBar": {
    "textColor": "#dddddd",
    "selectedColor": "#49a9ee",
    "backgroundColor": "#ffffff",
    "items": [
      {
        "pagePath": "pages/index/index",
        "name": "Home"
      },
      {
        "pagePath": "pages/logs/logs",
        "name": "Log"
      }
    ]
  }
}
```
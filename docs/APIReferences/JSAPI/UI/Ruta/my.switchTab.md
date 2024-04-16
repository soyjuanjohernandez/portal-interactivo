---
sidebar_position: 1
---

# my.switchTab

## Introducción

Salta a la página TabBar especificada y luego cierre todas las demás páginas que no son TabBar.

Si el Mini Programa tiene múltiples pestañas, puede utilizar ```TabBar``` para configurar el comportamiento de la pestaña especificada, y la página a mostrar durante el cambio de pestaña (Puede cambiar de pestaña en la parte inferior de la ventana del cliente).

:::info[NOTA]
Puede saltar a la página mediante salto de página (```my.navigateTo```) o redirección de página (```my.redirectTo```). Aunque la página esté definida en la configuración de la tabBar, no se mostrará la barra de pestañas inferior. Además, la primera página de la ```tabBar``` debe ser la página de inicio.
:::

## Código de muestra

```js
// app.json
{
  "tabBar": {
    "items": [{
      "pagePath": "page/home/index",
      "name": "Home"
    },{
      "pagePath": "page/user/index",
      "name": "User"
    }]
  }
}
```
```js
my.switchTab({
  url: 'page/home/index'
})
```
## Parámetros
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>url</td>
        <td>String</td>
        <td>Si</td>
        <td>
            Ruta de la página TabBar de salto (página que se definirá en el campo TabBar en la App.json).
            **Nota:** La ruta no puede ser seguida por parámetros.
        </td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (para ser ejecutado en el éxito de la llamada o el fracaso).</td>
     </tr>
</table>

## Configuración de TabBar

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>textColor</td>
        <td>Color hexadecimal</td>
        <td>No</td>
        <td>Color de texto.</td>
     </tr>
     <tr>
        <td>selectedColor</td>
        <td>Color hexadecimal</td>
        <td>No</td>
        <td>Color del texto resaltado.</td>
     </tr>
     <tr>
        <td>backgroundColor</td>
         <td>Color hexadecimal</td>
        <td>No</td>
        <td>Color de fondo.</td>
     </tr>
      <tr>
        <td>items</td>
        <td>Array</td>
        <td>Yes</td>
        <td>Configurado para cada pestaña.</td>
     </tr>
</table>

Configurado para cada elemento:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>pagePath</td>
        <td>String</td>
        <td>Si</td>
        <td>Establezca la ruta de la página.</td>
     </tr>
     <tr>
        <td>name</td>
        <td>String</td>
        <td>Si</td>
        <td>Nombre.</td>
     </tr>
     <tr>
        <td>icon</td>
         <td>String</td>
        <td>No</td>
        <td>Ruta de icono normal.</td>
     </tr>
      <tr>
        <td>activeIcon</td>
        <td>String</td>
        <td>No</td>
        <td>Ruta de icono resaltada.</td>
     </tr>
</table>

El tamaño de icono recomendado es 60*60px. El sistema realiza un estiramiento y escala desigual para cualquier imagen entrante.

Ejemplo:

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
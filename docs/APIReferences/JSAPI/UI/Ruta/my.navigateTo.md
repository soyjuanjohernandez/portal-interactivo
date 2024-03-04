---
sidebar_position: 2
---

# my.navigateTo

Mantenga la página actual y salte a la página especificada dentro de la aplicación.Use my.navigateback para volver a la página original.

Note: 

:::info[NOTA]
La profundidad máxima de la página es 10. En otras palabras, el Navigateto se puede llamar 10 veces como máximo.
:::

## Código de muestra

```js
my.navigateTo({
  url: 'new_page?count=100'
})  

Page({
  onLoad(query){
    my.alert({
      content: JSON.stringify(query),
    });
  }
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
        <td>La aplicación para el salto no incluye la ruta de la página de destino del TabBar.La ruta puede ser seguida por parámetros. Reglas para los parámetros: la ruta y el parámetro se separan con?, La clave del parámetro y el valor del parámetro están conectados con =, y diferentes parámetros deben separarse con &, como ruta? Key1 = value1 & key2 = value2.</td>
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
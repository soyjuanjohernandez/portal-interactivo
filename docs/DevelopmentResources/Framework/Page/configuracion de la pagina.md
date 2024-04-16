---
sidebar_position: 2
---

# Configuración de Page 

En el directorio ```/pages```, el archivo .json se utiliza para configurar la visualización de la ventana de la página actual. La configuración de la página es mucho más simple que la configuración global de ```app.json```. Es posible establecer solo los elementos de configuración relacionados con ```window```, pero no es necesario escribir la clave ```window```. Las configuraciones de las páginas tienen prioridad sobre las configuraciones globales.

Las configuraciones de ```window``` son iguales que la [Global Configuration](/) y además admiten los siguientes puntos:

Apoyo a la configuración del ícono de navegación ```optionMenu```, que activa ```onOptionMenuClick``` al hacer clic. Sin embargo, ten en cuenta que la configuración ```optionMenu``` será obsoleta.
Apoyo a ```titlePenetrate``` para establecer el paso a través de clics en la barra de navegación.
Apoyo a ```barButtonTheme``` para establecer el esquema de íconos de la barra de navegación.

Configuraciones completas

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Requerido</th>
    <th>Descripción</th>
    <th>Versión Mínima</th>
  </tr>
  <tr>
    <td>optionMenu</td>
    <td>Object</td>
    <td>NO</td>
    <td>Establece un icono adicional en la barra de navegación, admitiendo el atributo icon con valor de URL de icono (comenzando con https/http) o cadena base64, tamaño sugerido 30*30 px.</td>
    <td>Librería Base 1.3.0</td>
  </tr>
  <tr>
    <td>titlePenetrate</td>
    <td>BOOL</td>
    <td>NO</td>
    <td>Establece la capacidad de hacer clic a través de la barra de navegación.</td>
    <td>-</td>
  </tr>
  <tr>
    <td>barButtonTheme</td>
    <td>String</td>
    <td>NO</td>
    <td>Establece el esquema de iconos de la barra de navegación, "default" para icono azul o "light" para icono blanco.</td>
    <td>-</td>
  </tr>
</table>

Aquí un ejemplo básico: 

```js
{
	"optionMenu": {
	"icon": "https://img.example.com/example.png"
	},
	"titlePenetrate": "YES",
	"barButtonTheme": "light"
}
```
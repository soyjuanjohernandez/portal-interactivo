---
sidebar_position: 4
---

# my.redirectTo

Cierre la página actual y salte a la página especificada dentro de la aplicación.

## Código de muestra

```js
my.redirectTo({
  url: 'new_page?count=100'
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
---
sidebar_position: 5
---

# my.reLaunch

Cierre las pilas de página y salte a la página especificada dentro de la aplicación.

## Código de muestra

```js
my.reLaunch({
  url: "/page/index",
});
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
        <td className="p-no-margin">
            Ruta de la página Si la página no es una página TabBar, la ruta puede ser seguida por los parámetros.Reglas para los parámetros: la ruta y el parámetro están separados con:
            
            ```?```
            
            , la tecla de parámetro y el [valor](/) del parámetro están conectados con 
            
            ```=```
            
            , ay los parámetros diferentes deben estar separados con
            
            ```&```
            
            , como 
            
            ```path?key1=value1&key2=value2```
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

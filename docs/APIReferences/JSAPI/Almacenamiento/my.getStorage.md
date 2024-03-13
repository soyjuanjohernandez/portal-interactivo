---
sidebar_position: 1
---

# my.getStorage

Obtener datos en caché.

Se trata de una interfaz asíncrona.

soporta el aislamiento entre la caché de la webview embebida y la caché del Mini Programa. La obtención de la caché de la clave especificada del webview incrustado no devolverá los datos en caché de la misma clave del Mini Programa.

## Código de muestra

```js
my.getStorage({
  key: 'currentCity',
  success: function(res) {
    my.alert({content: 'Success' + res.data.cityName});
  },
  fail: function(res){
    my.alert({content: res.errorMessage});
  }
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
        <td>key</td>
        <td>String</td>
        <td>Si</td>
        <td>Clave de datos de caché.</td>
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

### Función de devolución de llamada de éxito

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>data</td>
        <td>Object/String</td>
        <td>Contenido correspondiente de la clave.</td>
     </tr>
</table>
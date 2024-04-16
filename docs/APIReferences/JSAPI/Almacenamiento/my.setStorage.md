---
sidebar_position: 3
---

# my.setStorage

Almacena los datos con una clave especificada en la caché local. Esto superpondrá los datos originales utilizando la misma clave.

Se trata de una interfaz asíncrona.

Soporta el aislamiento del almacenamiento webview-embedded y el almacenamiento Mini Program. La especificación de datos clave de almacenamiento en webview embebido no solapa los datos correspondientes a la misma clave del propio Mini Programa.

## Código de muestra

```js
my.setStorage({
  key: 'currentCity',
  data: {
    cityName: 'London',
    adCode: '330100',
    spell: ' London',
  },
  success: function() {
    my.alert({content: 'Set Success'});
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
        <td>data</td>
        <td>Object/String</td>
        <td>Si</td>
        <td>Datos a almacenar en caché.</td>
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


:::info[NOTA:]
Cuando un solo datos se convierte en una cadena, la longitud de la cadena es máxima 200*1024.Para el mismo usuario, el caché de un mini programa tiene un límite superior de 10 MB.
:::
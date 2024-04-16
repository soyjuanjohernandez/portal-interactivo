---
sidebar_position: 5
---

# my.removeStorage

Eliminar datos en caché.

Esta es una interfaz asíncrona.

La eliminación de los datos de almacenamiento incrustados de WebView no eliminará los datos de almacenamiento del mini programa.

## Código de muestra

```js
my.removeStorage({
  key: 'currentCity',
  success: function(){
    my.alert({content: 'remove success'});
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
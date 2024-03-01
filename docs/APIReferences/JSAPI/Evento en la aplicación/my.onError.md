---
sidebar_position: 6
---

# my.onError
Escuche el evento de que ocurran errores en el programa mini.Actualmente solo son compatibles con los errores JS.El tiempo activado y los parámetros requeridos son los mismos con los del método [OnError()](/).

## Código de muestra

Muestra de errores generales:

```js
// .js
App({
  onLaunch() {
    // El tipo de error es cadena.
    my.onError(function(error) {
   // Los errores ocurren al ejecutar el mini programa.
      console.error(error);
    });
  }
})
```
Muestra de errores JS:

```js
onShow: function() {

    // Los errores ocurren al ejecutar el mini programa.
    my.onError(function(error) {
      // Mensaje de error que se muestra en la página
      console.warn(error, '1212');
    });
  }
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>callback</td>
        <td>Función</td>
        <td>La función de devolución de llamada para el evento de que los errores JS ocurran en el mini programa.</td>
     </tr>
</table>

### Valor devuelto

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>error</td>
        <td>Función</td>
        <td>Mensaje de error.</td>
     </tr>
</table>
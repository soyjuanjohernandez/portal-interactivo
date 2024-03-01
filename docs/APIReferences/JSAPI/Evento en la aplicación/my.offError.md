---
sidebar_position: 5
---

# my.offError
No escuchar en caso de que se produzcan errores JS en el miniprograma

## Código de muestra

```js
// .js
App({
  onShow() {
    this.handleError = error => {
      // Los errores ocurren al ejecutar el mini programa.
      console.log(error);
    }
    // The type of error is String.
    my.onError(this.handleError);
  },
  onHide() {
    // No se indique el evento de que los errores de JS ocurran en el mini programa.
    my.offError(this.handleError);
  }
})
```

## Parámetros
El parámetro está en tipo de objeto y tiene la siguiente propiedad:

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
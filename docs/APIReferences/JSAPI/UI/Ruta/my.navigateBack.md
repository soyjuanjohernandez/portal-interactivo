---
sidebar_position: 3
---

# my.navigateBack

Cierre la página actual y vuelva a la anterior una o más páginas.Es posible usar ```GetCurrentPages``` para obtener la información actual de la pila de página y decidir cuántos niveles regresar.

## Código de muestra

```js
// Nota: Al llamar a la API navigateTo, la página que llamó el método se agregará a la pila.

// Esta es la página uno
my.navigateTo({
  url: 'two?pageId=10000'
})

// Esta es la página dos
my.navigateTo({
  url: 'one?pageId=99999'
})

// navigateBack en la página tres, devolverá la página uno
my.navigateBack({
  delta: 2
})
```
## Parámetros
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Por defecto</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>delta</td>
        <td>Number</td>
        <td>1</td>
        <td>Número de páginas para devolver. Si Delta es mayor que el número de páginas abiertas, regresa a la página de inicio.</td>
     </tr>
</table>
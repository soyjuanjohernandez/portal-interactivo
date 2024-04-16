---
sidebar_position: 6
---

# getCurrentPages

```GetCurrentPages()``` se utiliza para obtener la instancia de la pila de página, devolverá una matriz de la página.El primer elemento es la página de inicio, y el último elemento es la página actual.

El marco mantiene las páginas actuales por pila.Y la relación del interruptor de enrutamiento y la pila de páginas se muestra en la siguiente tabla.

<table>
  <tr>
    <th>Enrutamiento</th>
    <th>Comportamiento de la Pila de Páginas</th>
  </tr>
  <tr>
    <td>Inicialización</td>
    <td>Añadir nueva página a la pila.</td>
  </tr>
  <tr>
    <td>Abrir una nueva página</td>
    <td>Añadir nueva página a la pila.</td>
  </tr>
  <tr>
    <td>Redireccionar página</td>
    <td>Quitar la página actual de la pila y añadir nueva página a la pila.</td>
  </tr>
  <tr>
    <td>Página retornada</td>
    <td>Quitar la página actual de la pila.</td>
  </tr>
  <tr>
    <td>Cambio de pestaña</td>
    <td>Quitar todas las páginas de la pila excepto la nueva página de pestaña.</td>
  </tr>
</table>

Los siguientes códigos pueden ayudar a detectar si la pila de corriente alcanza 5 capa de páginas.

```js 
if (getCurrentPages().length === 5) {
    my.redirectTo({
        url: '/pages/logs/logs'
    });
} else {
    my.navigateTo({
        url: '/pages/index/index'
    });
}
```

**Nota:** no intentes modificar la pila de páginas, ya que podría provocar errores relacionados con el enrutamiento de páginas y el estado de las páginas.

# Preguntas Frecuentes

P: Cómo obtener la ruta de la página actual por **```getCurrentPages()```**?

R: ```JSON.stringify(getCurrentPages()[0].__proto__.route)``` puede obtener la ruta de la página actual.

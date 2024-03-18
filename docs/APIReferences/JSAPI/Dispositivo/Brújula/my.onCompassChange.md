---
sidebar_position: 1
---

# my.onCompassChange

Utilice esta API para escuchar el evento de cambio de datos de la brújula. Tras la llamada a la interfaz, la escucha se inicia automáticamente. El intervalo de devolución de llamada es de 500 ms. Puede utilizar [my.offCompassChange](./my.offCompassChange) para detener la escucha.

## Código de muestra

```js
my.onCompassChange(function (res) {
  console.log(res.direction);
})
```
## Parámetros
La propiedad es una función de devolución de llamada que utiliza propiedades del objeto con la siguiente propiedad:
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>direction</td>
        <td>Número</td>
        <td>El grado de la dirección que enfrenta.</td>
     </tr>
</table>


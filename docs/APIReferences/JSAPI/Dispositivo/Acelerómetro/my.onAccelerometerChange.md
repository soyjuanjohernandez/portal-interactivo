---
sidebar_position: 1
---

# my.onAccelerometerChange

Utilice esta API para escuchar el evento de datos de aceleración. El intervalo de devolución de llamada es de 500 ms. Después de llamar a la interfaz, la escucha se inicia automáticamente. Puede utilizar [my.offAccelerometerChange](./my.offAccelerometerChange) para detener la escucha.**

## Código de muestra

```js
my.onAccelerometerChange(function(res) {
  console.log(res.x);
  console.log(res.y);
  console.log(res.z);
})
```
## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>x</td>
        <td>Número</td>
        <td>x-axis</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Número</td>
        <td>y-axis</td>
     </tr>
     <tr>
        <td>z</td>
        <td>Número</td>
        <td>z-axis</td>
     </tr>
</table>


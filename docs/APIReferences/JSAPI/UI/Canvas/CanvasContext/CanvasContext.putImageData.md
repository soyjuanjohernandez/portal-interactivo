---
sidebar_position: 20
---

# CanvasContext.putImageData

Dibuja los datos de píxeles en canvas.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>data</td>
        <td>Uint8ClampedArray</td>
        <td>Si</td>
        <td>Datos de píxeles de imagen, es un array, y los cuatro elementos representan los datos rgba.</td>
     </tr>
     <tr>
        <td>x</td>
        <td>Number</td>
        <td>Si</td>
        <td>El desplazamiento x de los datos originales en el canvas de destino.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>Si</td>
        <td>El desplazamiento x de los datos originales en el canvas de destino.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>Si</td>
        <td>El ancho de los datos originales.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>Si</td>
        <td>The height of the original data.</td>
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

## Código de muestra

```js
// .js
const data = new Uint8ClampedArray([255, 0, 0, 1])
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.putImageData({
    x: 0,
    y: 0,
    width: 1,
    height: 1,
    data: data,
    success(res) {}
})
```


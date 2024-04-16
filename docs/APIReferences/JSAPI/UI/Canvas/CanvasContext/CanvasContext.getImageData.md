---
sidebar_position: 17
---

# CanvasContext.getImageData

Obtenga los datos de píxeles del área implícita de canvas. 

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
        <td>x</td>
        <td>Number</td>
        <td>Si</td>
        <td>La coordenada x de la esquina superior izquierda del área del rectángulo de la imagen que debe obtenerse.</td>
     </tr>
     <tr>
        <td>y</td>
        <td>Number</td>
        <td>Si</td>
        <td>La coordenada y de la esquina superior izquierda del área del rectángulo de la imagen que debe obtenerse.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>Si</td>
        <td>La anchura del área de imagen rect que necesita ser obtenida.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>Si</td>
        <td>La altura del área rectangular de la imagen que debe ser obtenida.</td>
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

## El valor de devolución de éxito

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>La anchura del rectángulo de la imagen.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>Number</td>
        <td>La altura del rectángulo de la imagen.</td>
     </tr>
</table>

## Código de muestra

```js
// .js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.getImageData({
  x: 0,
  y: 0,
  width: 100,
  height: 100,
  success(res) {
    console.log(res.width) // 100
    console.log(res.height) // 100
    console.log(res.data instanceof Uint8ClampedArray) // true
    console.log(res.data.length) // 100 * 100 * 4
  }
})
```


---
sidebar_position: 12
---

# CanvasContext.draw

Dibuje la descripción en el contexto como el ruta, el estilo a canvas.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Valor por defecto</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>reserve</td>
        <td>Boolean</td>
        <td>No</td>
        <td>false</td>
        <td>Si este dibujo continúa con el dibujo anterior, es decir, el parámetro de reserva es falso, entonces la capa nativa primero debe vaciar canvas antes de que se llame al dibujo drawCanvas. Si el parámetro de la reserva es verdadero, el contenido de canvas actual se conserva y el contenido dibujado por la llamada a drawCanvas se anulan.</td>
     </tr>
     <tr>
        <td>callback</td>
        <td>Function</td>
        <td>No</td>
        <td>-</td>
        <td>La función de devolución de llamada al finalizar el dibujo.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.setFillStyle('blue')
ctx.fillRect(20, 20, 180, 80)
ctx.draw()
ctx.fillRect(60, 60, 250, 120)
// keep the last draw result
ctx.draw(true)
```

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.setFillStyle('blue')
ctx.fillRect(20, 20, 180, 80)
ctx.draw()
ctx.fillRect(60, 60, 250, 120)
// do not keep the last draw result
ctx.draw(false)
```
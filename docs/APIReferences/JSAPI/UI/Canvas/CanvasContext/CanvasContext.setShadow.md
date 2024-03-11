---
sidebar_position: 33
---

# CanvasContext.setShadow

Establezca el estilo que incluye la ubicación del color para la sombra.

## Parámetros

Es tipo de objeto.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Rango</th>
        <th>Valor por defecto</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>offsetX</td>
        <td>Número</td>
        <td>-</td>
        <td>0</td>
        <td>El desplazamiento de la sombra desde la dirección horizontal de la forma.</td>
     </tr>
     <tr>
        <td>offsetY</td>
        <td>Número</td>
        <td>-</td>
        <td>0</td>
        <td>El desplazamiento de la sombra desde la dirección vertical de la forma.</td>
     </tr>
     <tr>
        <td>blur</td>
        <td>Número</td>
        <td>0-100</td>
        <td>0</td>
        <td>El nivel de desenfoque de la sombra, cuanto mayor sea el valor, más borroso.</td>
     </tr>
     <tr>
        <td>color</td>
        <td>Color</td>
        <td>-</td>
        <td>negro</td>
        <td>El color de la sombra.</td>
     </tr>
</table>


## Código de muestra

```js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.setFillStyle('red')
ctx.setShadow(15, 45, 45, 'yellow')
ctx.fillRect(20, 20, 100, 175)
ctx.draw()
```


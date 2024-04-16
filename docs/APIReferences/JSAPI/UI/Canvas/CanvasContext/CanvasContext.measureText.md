---
sidebar_position: 18
---

# CanvasContext.measureText

Mida el tamaño del texto, la corriente solo se devuelve la bruja, y es una interfaz sincrónica.

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
        <td>text</td>
        <td>Number</td>
        <td>Si</td>
        <td>El texto que debe medirse.</td>
     </tr>
</table>

## Valor de retorno

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>width</td>
        <td>Number</td>
        <td>El ancho del texto.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.font = 'italic bold 50px cursive'
const { width } = ctx.measureText('hello world')
console.log(width)
```


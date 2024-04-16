---
sidebar_position: 2
---

# my.setTabBarStyle

Use esta API para establecer el estilo general de la barra de pestaña, como el color de texto, el color de fondo y el estilo de borde.

Para más información, ver [Preguntas frecuentes de la barra de pestañas](/).

:::info [NOTA]
Actualmente, la simulación en IDE no es compatible. Depurar en el entorno de producción.
:::

## Código de muestra

```js
my.setTabBarStyle({
    color: '#FF0000',
    selectedColor: '#00FF00',
    backgroundColor: '#0000FF',
    borderStyle: 'white'
})
```
## Parámetros
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>color</td>
        <td>HexColor</td>
        <td>Si</td>
        <td>El color predeterminado del texto en la pestaña.</td>
     </tr>
     <tr>
        <td>selectedColor</td>
        <td>HexColor</td>
        <td>Si</td>
        <td>El color del texto seleccionado en la pestaña.</td>
     </tr>
     <tr>
        <td>backgroundColor</td>
        <td>HexColor</td>
        <td>Si</td>
        <td>El color de fondo de la pestaña.</td>
     </tr>
     <tr>
        <td>borderStyle</td>
        <td>String</td>
        <td>Si</td>
        <td>El color del borde de la barra de tabulación, que solo admite el negro/blanco.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada API exitosa.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>TLa función de devolución de llamada utilizada cuando se completa la llamada API. Esta función siempre se ejecuta sin importar que la llamada tenga éxito o falle.</td>
     </tr>
</table>
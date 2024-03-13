---
sidebar_position: 1
---

# my.setBackgroundColor

Establezca dinámicamente el color de fondo de la ventana.

## Código de muestra

```js
my.setBackgroundColor({
  	backgroundColor: '#ff0000',
    backgroundColorTop: '#00ff00',
    backgroundColorBottom: '#ff00ff'
})
```

## Parámetros
El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>backgroundColor</td>
        <td>HexColor</td>
        <td>No</td>
        <td>Color de fondo de la ventana. Para Android, esta propiedad es obligatoria.</td>
     </tr>
     <tr>
        <td>backgroundColorTop</td>
        <td>HexColor</td>
        <td>No</td>
        <td>Color de fondo de la ventana superior, sólo compatible con iOS.</td>
     </tr>
     <tr>
        <td>backgroundColorBottom</td>
        <td>HexColor</td>
        <td>No</td>
        <td>Color de fondo de la ventana inferior, sólo compatible con iOS.</td>
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

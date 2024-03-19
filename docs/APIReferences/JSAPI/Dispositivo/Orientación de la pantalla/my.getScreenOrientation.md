---
sidebar_position: 1
---

# my.getScreenOrientation

Llame a esta API para obtener la orientación de la pantalla.

## Código de muestra

```js
my.getScreenOrientation({   
  success: (res) => {
    my.alert({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail: (res) => {
    my.alert({
      title: 'fail',
      content: JSON.stringify(res)
    })
  } 
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

### Función de devolución de llamada de éxito
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Booleano</td>
        <td>Especifica si la llamada es exitosa. Cuando el valor es ```verdadero```, la llamada es exitosa.</td>
     </tr>
     <tr>
        <td>orientation</td>
        <td>String</td>
        <td>Indica la orientación de la pantalla, ```vertical``` u ```horizontal```.</td>
     </tr>
</table>

### Función de devolución de llamada en caso de fallo
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>error</td>
        <td>Número</td>
        <td>El código de error para la falla</td>
     </tr>
     <tr>
        <td>errorMessage</td>
        <td>String</td>
        <td>El mensaje de error</td>
     </tr>
</table>


---
sidebar_position: 4
---

# my.getRunScene

Use esta API para obtener la versión en ejecución del Mini Programa actual.

## Código de muestra
```js
my.getRunScene({
  success(result) {
     my.alert({
      title: 'Mini Program version',
      content:`${result.envVersion}`
    });
  },
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
        <td>Exito</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada API exitosa.</td>
     </tr>
     <tr>
        <td>Falla</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada API fallida.</td>
     </tr>
     <tr>
        <td>Completa</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada API. Esta función siempre se ejecuta sin importar que la llamada tenga éxito o falle.</td>
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
        <td>envVersion</td>
        <td>String</td>
        <td>
                The current running version of the Mini Program. Valid values are:
                - develop: development version
                - release: release version 
        </td>
     </tr>
</table>
	
### Función de devolución de llamada de error
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>error</td>
        <td>String</td>
        <td>El código de error.</td>
     </tr>
     <tr>
        <td>errorMessage</td>
        <td>String</td>
        <td>El mensaje de error.</td>
     </tr>
</table>

## Error Code
<table>
    <tr>
        <th>Código de error</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>3</td>
        <td>Un error desconocido ha ocurrido.</td>
     </tr>
</table>

---
sidebar_position: 2
---

# my.confirm

Confirma la caja.

## Código de muestra

```js
my.confirm({
  title: 'Tips',
  content: 'Do you want to check the courier number: 1234567890?',
  confirmButtonText: 'Inquire now',
  cancelButtonText: 'Not needed',
  success: (result) => {
    my.alert({
      title: `${result.confirm}`,
    });
  },
});
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
        <td>title</td>
        <td>String</td>
        <td>No</td>
        <td>Título de la caja de confirmación.</td>
     </tr>
     <tr>
        <td>content</td>
        <td>String</td>
        <td>No</td>
        <td>Contenido de la caja de confirmación.</td>
     </tr>
     <tr>
        <td>confirmButtonText</td>
        <td>String</td>
        <td>No</td>
        <td>Aceptar texto del botón, que está "Aceptar" de forma predeterminada.</td>
     </tr>
     <tr>
        <td>cancelButtonText</td>
        <td>String</td>
        <td>No</td>
        <td>Aceptar texto del botón, que es "cancelar" de forma predeterminada.</td>
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

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>confirm</td>
        <td>Boolean</td>
        <td>Haga clic en Confirmar para devolver verdadero; Haga clic en Cancelar para devolver falso.</td>
     </tr>
</table>
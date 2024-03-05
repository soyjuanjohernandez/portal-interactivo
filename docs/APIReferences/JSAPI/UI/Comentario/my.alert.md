---
sidebar_position: 1
---

# my.alert 

Caja de alerta

## Código de muestra

```js
my.alert({
  title: 'Tips',
  content: 'Your bill for this month has been released',
  buttonText: 'Show',
  success: () => {
    my.alert({
      title: 'Click「Show」',
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
        <td>Título del cuadro de alerta.</td>
     </tr>
     <tr>
        <td>content</td>
        <td>String</td>
        <td>No</td>
        <td>Contenido del cuadro de alerta.</td>
     </tr>
     <tr>
        <td>buttonText</td>
        <td>String</td>
        <td>No</td>
        <td>Texto del botón, que está bien de forma predeterminada.</td>
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
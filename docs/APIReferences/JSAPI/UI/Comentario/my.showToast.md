---
sidebar_position: 6
---

# my.showToast

Muestra el diálogo Toast, que desaparece con la duración especificada.

## Código de muestra

```js
my.showToast({
  type: 'success',
  content: 'Success',
  duration: 3000,
  success: () => {
    my.alert({
      title: 'toast is missing',
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
        <td>content</td>
        <td>String</td>
        <td>No</td>
        <td>Contenido del texto.</td>
     </tr>
     <tr>
        <td>type</td>
        <td>String</td>
        <td>No</td>
        <td>Tipo de toast, que muestra el icono relacionado, ninguno de forma predeterminada, admite éxito/fallas/excepción/ninguno aquí. Si es una excepción, el contenido es obligatorio.</td>
     </tr>
      <tr>
        <td>duration</td>
        <td>Número</td>
        <td>No</td>
        <td>Mostrando duración, en MS, 2000 de forma predeterminada.</td>
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
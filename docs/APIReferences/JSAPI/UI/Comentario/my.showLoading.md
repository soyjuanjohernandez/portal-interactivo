---
sidebar_position: 4
---

# my.showLoading

Muestre el diálogo de carga.

## Código de muestra

```js
my.showLoading({
  content: 'loading...',
  delay: 1000,
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
        <td>Contenido de texto de carga.</td>
     </tr>
     <tr>
        <td>delay</td>
        <td>Número</td>
        <td>No</td>
        <td>Retraso de visualización, en ms, 0 por defecto Si my.hideLoading fue llamado antes de este tiempo, no se muestra.</td>
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
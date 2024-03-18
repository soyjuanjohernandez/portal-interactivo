---
sidebar_position: 2
---

# my.setClipboard

Establezca los datos del portapapeles.

## Código de muestra

```js
Page({
  data: {
    text: '3.1415926',
    copy: '',
  },

  handleCopy() {
    my.setClipboard({
      text: this.data.text,
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
        <td>text</td>
        <td>String</td>
        <td>Si</td>
        <td>Datos de portapapeles.</td>
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

---
sidebar_position: 5
---

# my.removeSavedFile

Elimina un archivo guardado.

## Código de muestra

```js
my.getSavedFileList({
  success:(res)=>{
    my.removeSavedFile({
      apFilePath:res.fileList[0].apFilePath,
      success:(res)=>{
        console.log('remove success')
      }
    })
  }
});
```
## Parámetros

Tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>apFilePath</td>
        <td>String</td>
        <td>Si</td>
        <td>Ruta de archivo.</td>
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
        <td>Función de devolución de llamada al finalizar la llamada (se ejecutará al tener éxito o falla).</td>
     </tr>
</table>

---
sidebar_position: 3
---

# my.getSavedFileInfo

Obtenga información de archivo guardada.

## Código de muestra

La dirección guardada [my.saveFile](./my.saveFile) es necesaria para utilizar my.getSavedFileInfo

```js
var that = this;
my.chooseImage({
  success: (res) => {
    console.log(res.apFilePaths[0], 1212)
    my.saveFile({
      apFilePath: res.apFilePaths[0],
      success: (result) => {
        console.log(result, 1212)
        my.getSavedFileInfo({
          apFilePath: result.apFilePath,
          success: (resu) => {
            console.log(JSON.stringify(resu))
            that.filePath = resu
          }
        })
      },
    });
  },
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


### Función de devolución de llamada de éxito

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>size</td>
        <td>Número</td>
        <td>Tamaño del archivo.</td>
     </tr>
     <tr>
        <td>createTime</td>
        <td>Número</td>
        <td>Marca de tiempo para la hora de creación.</td>
     </tr>
</table>

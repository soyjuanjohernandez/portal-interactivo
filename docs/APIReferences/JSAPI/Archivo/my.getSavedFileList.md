---
sidebar_position: 4
---

# my.getSavedFileList

Obtenga información de todos los archivos guardados.

## Código de muestra

```js
my.getSavedFileList({
  success:(res)=>{
    console.log(JSON.stringify(res))
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
        <td>fileList</td>
        <td>Lista</td>
        <td>Lista de archivos.</td>
     </tr>
</table>

### Atributo de objeto de archivo

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
        <td>Hora de creación.</td>
     </tr>
     <tr>
        <td>apFilePath</td>
        <td>String</td>
        <td>Ruta de archivo.</td>
     </tr>
</table>

---
sidebar_position: 2
---

# my.getFileInfo

Obtener información de archivo.

## Código de muestra

```js
my.getFileInfo({
    apFilePath: 'https://resource/apml953bb093ebd2834530196f50a4413a87.video',
  	digestAlgorithm: 'sha1',
    success: (res)=> {
        console.log(JSON.stringify(res))
    }
})
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
        <td>digestAlgorithm</td>
        <td>String</td>
        <td>No</td>
        <td>Algoritmo de resumen, compatible con md5 y sha1, md5 por defecto.</td>
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
        <td>digest</td>
        <td>String</td>
        <td>Digiere el resultado.</td>
     </tr>
</table>

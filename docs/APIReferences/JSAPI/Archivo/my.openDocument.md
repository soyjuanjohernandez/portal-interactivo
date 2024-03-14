---
sidebar_position: 7
---

# my.openDocument

La API my.openDocument permite a los usuarios previsualizar un archivo PDF dentro del miniprograma. 

 

Tras hacer clic en el archivo PDF, el usuario puede previsualizarlo sin salir del miniprograma. Después de cerrar la vista previa, el usuario seguirá en la página actual del miniprograma.

## Código de muestra

### .js

```js
// .js
my.downloadFile({
  // Sample url that is not real
      url: 'http://documentExample.com/alipay.pdf',
      success({ apFilePath }) {
        my.hideLoading();
        my.openDocument({
          filePath: apFilePath,
          fileType: 'pdf',
          success: (res) => {
            console.log('open document success')
            }
          })
        }
      })
```

## Parámetros

### Tipo de objeto

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>filePath</td>
        <td>String</td>
        <td>Si</td>
        <td>Obtener ruta de archivo a través de [my.downloadFile](/).</td>
     </tr>
     <tr>
        <td>fileType</td>
        <td>String</td>
        <td>Si</td>
        <td>Tipo de archivo.</td>
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


### Valores legales para el tipo de archivo

<table>
    <tr>
        <th>Valor</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>pdf</td>
        <td>Formato PDF.</td>
     </tr>
</table>

## Códigos de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Solución</th>
    </tr>
    <tr>
        <td>4011</td>
        <td>La ruta del archivo no es válida o no tiene permiso para acceder a la ruta entrante.</td>
        <td>Verifique la ruta del archivo entrante.</td>
     </tr>
     <tr>
        <td>4012</td>
        <td> Los archivos de vista previa no existen.</td>
        <td>Asegúrese de que existan archivos que corresponden a la ruta de archivo.</td>
     </tr>
     <tr>
        <td>4013</td>
        <td>El formato de archivo no es compatible.</td>
        <td>Actualmente se admite la vista previa de los archivos PDF.</td>
     </tr>
</table>
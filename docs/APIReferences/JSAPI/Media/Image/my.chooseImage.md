---
sidebar_position: 1
---

Elija una imagen de la cámara o galería de un dispositivo.

## Código de muestra

```js title="js"
my.chooseImage({
    success: (res) => {
        img.src = res.apFilePaths[0];
    },
});  
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>sizeType</td>
        <td>StringArray</td>
        <td>No</td>
        <td>Imagen original, imagen comprimida, ambas de forma predeterminada.</td>
    </tr>
    <tr>
        <td>sourceType</td>
        <td>tring Array	</td>
        <td>No</td>
        <td>Cámara o álbum, [‘camera’,‘album’] por defecto.</td>
    </tr>
    <tr>
        <td>success	</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (se ejecutará al tener éxito o falla).</td>
    </tr>
</table>

### Éxito Callback Function

The incoming parameter is of the Object type with the following attributes:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>apFilePaths	</td>
        <td>String Array</td>
        <td>Descripción del archivo de imagen.</td>
    </tr>
</table>

## Código de error

<table>
    <tr>
        <th>Error</th>
        <th>Descripció</th>
    </tr>
    <tr>
        <td>11</td>
        <td>El usuario cancela la operación</td>
    </tr>
</table>






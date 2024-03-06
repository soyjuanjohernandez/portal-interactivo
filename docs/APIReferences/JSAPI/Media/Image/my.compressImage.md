---
sidebar_position: 5
---

Comprima imágenes grandes para cumplir con las restricciones de tamaño de algunos mini programas.

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>apFilePaths</td>
        <td>Array</td>
        <td>Yes</td>
        <td>Una matriz de las rutas de imagen a comprimirse.</td>
    </tr>
    <tr>
        <td>compressLevel</td>
        <td>int</td>
        <td>No</td>
        <td>
            La calidad de imagen después de la compresa.Los valores válidos son:
                * 0: Baja calidad
                * 1: Calidad media
                * 2: Alta calidad
                * 4: La calidad depende de la red.Cuando la red es Wi-Fi, la imagen se comprime a la imagen de alta calidad.De lo contrario, la imagen se comprime a la imagen de calidad media.
                <br/>
            El valor predeterminado es 4.
        </td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada(Callback) que indica una llamada exitosa.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada(Callback) que indica una llamada fallida.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada(Callback) que indica la llamada se completa (esto se ejecutará independientemente de si la llamada tiene éxito o falla).</td>
    </tr>
</table>

### Función de devolución de llamada(Callback) de éxito

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>apFilePaths</td>
        <td>Array</td>
        <td>Yes</td>
        <td>La ruta del archivo local de la imagen comprimida.</td>
    </tr>
</table>

### Código de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td rowspan="2">2</td>
        <td>Compress failed</td>
        <td>No se pudo comprimir todas las imágenes.</td>
    </tr>
    <tr>
        <td>Invalid parameter</td>
        <td>No se pudo comprimir una de todas las imágenes.</td>
    </tr>
</table>










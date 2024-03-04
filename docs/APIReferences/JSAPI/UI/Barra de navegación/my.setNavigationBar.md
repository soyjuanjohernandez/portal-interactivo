---
sidebar_position: 4
---

# my.setNavigationBar

Set the navigation bar text and style

## Código de muestra

```js
my.setNavigationBar({
  title: 'hello',
  backgroundColor: '#108ee9',
  success() {
    my.alert({
      content: 'Success', 
    });
  },
  fail() {
    my.alert({
      content: 'Failed',
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
        <td>title</td>
        <td>String</td>
        <td>No</td>
        <td>Título de la barra de navegación.</td>
     </tr>
     <tr>
        <td>imagen</td>
        <td>String</td>
        <td>No</td>
        <td>Dirección de enlace de imagen, debe ser HTTPS. Use 3x imágenes de alta definición. Si la imagen está configurada, el parámetro del título está inactivo.Actualmente, las imágenes SVG no son compatibles.</td>
     </tr>
     <tr>
        <td>backgroundColor</td>
        <td>String</td>
        <td>No</td>
        <td>Color de fondo de la barra de navegación, soporte del valor de color hexadecimal.</td>
     </tr>
     <tr>
        <td>borderBottomColor</td>
        <td>String</td>
        <td>No</td>
        <td>Barra de navegación Color del borde inferior, que soporta el valor de color hexadecimal Si se establece el fondo de la cabeza, el borderbottomcolor no surta efecto. El backgroundcolor se usa de forma predeterminada.</td>
     </tr>
     <tr>
        <td>reset</td>
        <td>Booleano</td>
        <td>No</td>
        <td>Si la barra de navegación se restablece al color predeterminado, falso de forma predeterminada.</td>
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
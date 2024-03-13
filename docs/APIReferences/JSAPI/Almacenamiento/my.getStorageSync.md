---
sidebar_position: 2
---

# my.getStorageSync

Obtenga datos en caché sincrónicamente.

Esta es una interfaz sincrónica.

## Código de muestra

```js
let res = my.getStorageSync({ key: 'currentCity' });
 my.alert({
    content: JSON.stringify(res.data),
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
        <td>key</td>
        <td>String</td>
        <td>Si</td>
        <td>Clave de datos de caché.</td>
     </tr>
</table>

### Valor de retorno

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>data</td>
        <td>Object/String</td>
        <td>Contenido correspondiente de la clave.</td>
     </tr>
</table>
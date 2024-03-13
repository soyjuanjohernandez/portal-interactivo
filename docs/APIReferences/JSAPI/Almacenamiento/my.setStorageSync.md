---
sidebar_position: 4
---

# my.setStorageSync

Almacene sincrónicamente los datos en la clave especificada en el caché local.

Esta es una interfaz sincrónica.

## Código de muestra

```js
my.setStorageSync({
  key: 'currentCity',
  data: {
    cityName: 'London',
    adCode: '330100',
    spell: ' London',
  }
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
     <tr>
        <td>data</td>
        <td>Object/String</td>
        <td>Si</td>
        <td>Datos a almacenar en caché.</td>
     </tr>
</table>



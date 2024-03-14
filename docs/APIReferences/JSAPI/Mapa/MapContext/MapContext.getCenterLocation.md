---
sidebar_position: 4
---

Obtenga la ubicación central del mapa actual.

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>success	</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica una llamada exitosa.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica una llamada fallida.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>El método de devolución de llamada que indica la llamada se completa (esto se ejecutará independientemente de si la llamada tiene éxito o falla).</td>
    </tr>
</table>


### Función de devolución de llamada(Callback) de éxito

Los parámetros están en tipo de objeto y tienen las siguientes propiedades:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>longitude</td>
        <td>Number</td>
        <td>Longitude.</td>
    </tr>
    <tr>
        <td>latitude</td>
        <td>Number</td>
        <td>Latitude.</td>
    </tr>
</table>

## Código de muestra

```js title="js"
this.mapCtx = my.createMapContext('map');
this.mapCtx.getCenterLocation({
success: res => {
my.alert({
    content: 'longitude:' + res.longitude + '\nlatitude:' + res.latitude,
});
console.log(res.longitude);
console.log(res.latitude);
}
});
```








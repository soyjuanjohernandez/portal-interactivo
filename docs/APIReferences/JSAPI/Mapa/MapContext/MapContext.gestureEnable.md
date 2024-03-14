---
sidebar_position: 3
---

Habilitar o deshabilitar todos los gestos.

* 1: Habilitar todos los gestos.
* 0: Deshabilitar todos los gestos.

## Parámetro

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>isGestureEnable</td>
        <td>Int</td>
        <td>Yes</td>
        <td>Un indicador de si los gestos están habilitados.</td>
    </tr>
</table>

## Código de muestra

```js title="js"
this.mapCtx = my.createMapContext('map');
this.mapCtx.gestureEnable({isGestureEnable:1});
```



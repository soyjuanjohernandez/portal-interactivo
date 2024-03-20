---
sidebar_position: 2
---

# my.getBatteryInfoSync

Utilice esta API para obtener de forma sincrónica el nivel de batería y el estado de carga del dispositivo actual. No se requieren parámetros.

## Valores de retorno

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>level</td>
        <td>Int</td>
        <td>El nivel de batería del dispositivo actual.</td>
     </tr>
     <tr>
        <td>isCharging</td>
        <td>Boolean</td>
        <td>Esta propiedad indica si el dispositivo está cargando.</td>
     </tr>
</table>



## Código de muestra

```js
var res = my.getBatteryInfoSync();
my.alert({content: 'System information：'+JSON.stringify(res)});
console.log({content: 'System information：'+JSON.stringify(res),});
```

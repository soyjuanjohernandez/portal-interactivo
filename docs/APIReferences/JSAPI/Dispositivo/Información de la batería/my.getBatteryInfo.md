---
sidebar_position: 1
---

# my.getBatteryInfo

Use esta API para obtener asincrónicamente el nivel de batería y el estado de carga del dispositivo actual.No se requieren parámetros

## Código de muestra

```js
my.getBatteryInfo({
  success: (res) => {
    my.alert({ content: 'System information：' + JSON.stringify(res), });
    console.log({ content: 'System information：' + JSON.stringify(res), });
  },
  fail: (error) => {
    my.alert({ content: 'Inquiry failed' + JSON.stringify(error), });
  },
  complete: () => {
    my.alert({ title: 'Complete callback', });
  },
})
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
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada exitosa a la API.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada a la API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada a la API. Esta función se ejecuta siempre, independientemente de que la llamada se realice correctamente o no.</td>
     </tr>
</table>

### Función de devolución de llamada de éxito

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

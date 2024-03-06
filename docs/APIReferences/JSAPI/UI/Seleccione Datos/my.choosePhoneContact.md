---
sidebar_position: 1
---

# my.datePicker

Use esta API para abrir la lista de selección de fechas.

## Código de muestra

index.json
```js
// API-DEMO page/API/date-picker/date-picker.json
{
    "defaultTitle": "Date Picker"
}
```
index.axml

```js
<!-- API-DEMO page/API/date-picker/date-picker.axml -->
<view class="page">
  <view class="page-description">Date picker API</view>
  <view class="page-section">
    <view class="page-section-title">my.datePicker</view>
    <view class="page-section-demo">
      <button class="page-body-button" type="primary" onTap="datePicker">Pick Date-1</button>
      <button class="page-body-button" type="primary" onTap="datePickerHMS">Pick Date-2</button>
      <button class="page-body-button" type="primary" onTap="datePickerYMDHMS">Pick Date-3</button>
    </view>
  </view>
</view>
```

index.js

```js
// API-DEMO page/API/date-picker/date-picker.js
Page({
  datePicker() {
    my.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerHMS() {
    my.datePicker({
      format: 'HH:mm',
      currentDate: '12:12',
      startDate: '11:11',
      endDate: '13:13',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
  datePickerYMDHMS() {
    my.datePicker({
      format: 'yyyy-MM-dd HH:mm',
      currentDate: '2012-01-09 11:11',
      startDate: '2012-01-01 11:11',
      endDate: '2012-01-10 11:11',
      success: (res) => {
        my.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
    });
  },
});
```
index.acss
```js
/* API-DEMO page/API/date-picker/date-picker.acss */
button + button {
  margin-top: 20rpx;
}
```
## Parámetros

Tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>format</td>
        <td>String</td>
        <td>No</td>
        <td>El formato de fecha devuelto.</td>
     </tr>
      <tr>
        <td>currentDate</td>
        <td>String</td>
        <td>No</td>
        <td>La fecha y la hora inicialmente seleccionadas. Por defecto, se utilizan la fecha y la hora actuales.</td>
     </tr>
     <tr>
        <td>startDate</td>
        <td>String</td>
        <td>No</td>
        <td>Fecha y hora mínima.</td>
     </tr>
     <tr>
        <td>endDate</td>
        <td>String</td>
        <td>No</td>
        <td>Fecha y hora máxima.</td>
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

Los formatos de fecha devueltos incluyen:

* aaaa-MM-dd (por defecto)
* HH:mm
* aaaa-MM-dd HH:mm
* aaaa-MM. Pase canIUse('datePicker.object.format.yyyy-MM') a [my.canIUse](/docs/APIReferences/JSAPI/Básica/my.canIUse.md) para consultar si se puede utilizar la versión actual.
* yyyy. Pase canIUse('datePicker.object.format.yyyy') a [my.canIUse](/docs/APIReferences/JSAPI/Básica/my.canIUse.md) para consultar si se puede utilizar la versión actual.

### Función de devolución de llamada de éxito

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>date</td>
        <td>String</td>
        <td>La fecha seleccionada.</td>
     </tr>
</table>

### Código de error

<table>
    <tr>
        <th>Código de error</th>
        <th>Descripción</th>
        <th>Solución</th>
    </tr>
     <tr>
        <td>11</td>
        <td>El usuario canceló la operación.</td>
        <td>El usuario canceló la operación y no se requiere ninguna acción.</td>
     </tr>
</table>
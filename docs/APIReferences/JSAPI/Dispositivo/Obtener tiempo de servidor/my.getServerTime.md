---
sidebar_position: 1
---

# my.getServerTime

Obtenga tiempo actual del servidor en milisegundos.

## Código de muestra

```js
<!-- API-DEMO page/API/get-server-time/get-server-time.axml-->
<view class="page">
  <view class="page-section">
    <view class="page-section-btns">
      <view onTap="getServerTime">Get server time </view>
    </view>
  </view>
</view>
```
```js
// API-DEMO page/API/get-server-time/get-server-time.js
Page({
  getServerTime(){
    my.getServerTime({
      success: (res) => {
        my.alert({
          content: res.time,
        });
      },
    });
  }
})
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

### Función de devolución de llamada de éxito
El tipo de parámetro entrante es el objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>time</td>
        <td>Número</td>
        <td>Obtenga el tiempo actual del servidor. Se devuelve un valor numérico, lo que indica los milisegundos desde 0:0:0 de enero 1 de 1970 (UTC).</td>
     </tr>
</table>


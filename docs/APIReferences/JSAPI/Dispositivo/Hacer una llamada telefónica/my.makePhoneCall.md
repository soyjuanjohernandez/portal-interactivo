---
sidebar_position: 1
---

# my.makePhoneCall

Hacer una llamada telefónica.

:::info[NOTA:]
El simulador Mini Program Studio no soporta la simulación temporalmente. Por favor, utilice la máquina real para depurar.
:::

## Código de muestra

```js
// API-DEMO page/API/make-phone-call/make-phone-call.json
{
    "defaultTitle": "Make a phone call"
}
```
```js
// API-DEMO page/API/make-phone-call/make-phone-call.axml
<view class="page">
  <view class="page-section">
    <view class="page-section-title">my.makePhoneCall</view>
    <view class="page-section-btns">
      <view onTap="makePhoneCall">Make a phone call</view>
    </view>
  </view>
</view>
```
```js
// API-DEMO page/API/make-phone-call/make-phone-call.js
Page({
  makePhoneCall() {
    my.makePhoneCall({ number: '00000' });
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
        <td>number</td>
        <td>String</td>
        <td>Si</td>
        <td>Número de teléfono.</td>
     </tr>
</table>

## Preguntas más frecuentes

**'Is not a function' error after calling my.makePhoneCall?**

El simulador Mini Program Studio no soporta la simulación temporalmente. Por favor, utilice la máquina real para depurar.
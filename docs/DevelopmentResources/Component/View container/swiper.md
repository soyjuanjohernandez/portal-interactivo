---
sidebar_position: 2
---

# swiper

Contenedor de vista de Swiper

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Predeterminado</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>indicator-dots</td>
      <td>Booleano</td>
      <td>falso</td>
      <td>Mostrar indicador o no.</td>
    </tr>
    <tr>
      <td>indicator-color</td>
      <td>Color</td>
      <td>rgba(0, 0, 0, .3)</td>
      <td>Color del indicador.</td>
    </tr>
    <tr>
      <td>indicator-active-color</td>
      <td>Color</td>
      <td>#000</td>
      <td>Color del indicador actualmente seleccionado.</td>
    </tr>
    <tr>
      <td>autoplay</td>
      <td>Booleano</td>
      <td>falso</td>
      <td>Cambio automático o no.</td>
    </tr>
    <tr>
      <td>actual</td>
      <td>Número</td>
      <td>0</td>
      <td>Índice de página actual.</td>
    </tr>
    <tr>
      <td>duración</td>
      <td>Número</td>
      <td>500(ms)</td>
      <td>Duración de la animación de deslizamiento.</td>
    </tr>
    <tr>
      <td>intervalo</td>
      <td>Número</td>
      <td>5000(ms)</td>
      <td>Intervalo de cambio automático.</td>
    </tr>
    <tr>
      <td>circular</td>
      <td>Booleano</td>
      <td>falso</td>
      <td>Habilitar deslizamiento infinito o no.</td>
    </tr>
    <tr>
      <td>vertical</td>
      <td>Booleano</td>
      <td>falso</td>
      <td>¿La dirección del deslizamiento es vertical o no?</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>Manejador de eventos</td>
      <td>No</td>
      <td>Se activa en cambio actual, ```event.detail = {current, current}```.</td>
    </tr>
  </tbody>
</table>

### Swiper-item
Se puede colocar en un componente o no; el ancho y la altura se establecen automáticamente como 100%.

### Captura de pantalla
![Imagen de Swiper](../img/swiper.png)

### Ejemplo del código

```xml
<swiper
  indicator-dots="{{indicatorDots}}"
  autoplay="{{autoplay}}"
  interval="{{interval}}"
>
  <block a:for="{{background}}">
    <swiper-item>
      <view class="swiper-item bc_{{item}}"></view>
    </swiper-item>
  </block>
</swiper>
<view class="btn-area">
  <button class="btn-area-button" type="default" onTap="changeIndicatorDots">indicator-dots</button>
  <button class="btn-area-button" type="default" onTap="changeAutoplay">autoplay</button>
</view>
<slider onChange="intervalChange" value="{{interval}}" show-value min="2000" max="10000"/>
<view class="section__title">interval</view>
```

```js
Page({
  data: {
    background: ['verde', 'rojo', 'amarillo'],
    indicatorDots: true,
    autoplay: false,
    interval: 3000,
  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
})
```
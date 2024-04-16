---
sidebar_position: 3
---

# scroll-view

Región de vista desplazable

## Propiedades

<table>
    <thead>
        <tr>
            <th>Propiedad</th>
            <th>Tipo</th>
            <th>Por defecto</th>
            <th>Descripción</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>class</td>
            <td>String</td>
            <td></td>
            <td>Nombre de estilo externo.</td>
        </tr>
        <tr>
            <td>style</td>
            <td>String</td>
            <td></td>
            <td>Nombre de estilo en línea.</td>
        </tr>
        <tr>
            <td>scroll-x</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Permitir desplazamiento horizontal.</td>
        </tr>
        <tr>
            <td>scroll-y</td>
            <td>Boolean</td>
            <td>false</td>
            <td>Permitir desplazamiento vertical.</td>
        </tr>
        <tr>
            <td>upper-threshold</td>
            <td>Number</td>
            <td>50</td>
            <td>Qué tan lejos está del tope/izquierda (en px) para activar el evento scrolltoupper.</td>
        </tr>
        <tr>
            <td>lower-threshold</td>
            <td>Number</td>
            <td>50</td>
            <td>Qué tan lejos está del fondo/derecha (en px) para activar el evento scrolltolower.</td>
        </tr>
        <tr>
            <td>scroll-top</td>
            <td>Number</td>
            <td></td>
            <td>Establecer la ubicación de la barra de desplazamiento vertical.</td>
        </tr>
        <tr>
            <td>scroll-left</td>
            <td>Number</td>
            <td></td>
            <td>Establecer la ubicación de la barra de desplazamiento horizontal.</td>
        </tr>
        <tr>
            <td>scroll-into-view</td>
            <td>String</td>
            <td></td>
            <td>El valor es un ID de elemento, desplazándose hacia ese elemento, alineando la parte superior del
                elemento con la parte superior de la región de desplazamiento.</td>
        </tr>
        <tr>
            <td>onScrollToUpper</td>
            <td>Manejador de eventos</td>
            <td></td>
            <td>Desplazarse hacia arriba/izquierda activa el evento scrolltoupper.</td>
        </tr>
        <tr>
            <td>onScrollToLower</td>
            <td>Manejador de eventos</td>
            <td></td>
            <td>Desplazarse hacia abajo/derecha activa el evento scrolltolower.</td>
        </tr>
        <tr>
            <td>onScroll</td>
            <td>Manejador de eventos</td>
            <td></td>
            <td>Se activará con el scroll, ```event.detail = {scrollLeft, scrollTop, scrollHeight, scrollWidth}```.</td>
        </tr>
    </tbody>
</table>

:::note[Nota]
    Cuando se usa el desplazamiento vertical, se requiere una altura fija, que se establece utilizando acss.
:::

## Ejemplo de código

```xml
<view class="page">
  <view class="page-description">Región de vista desplazable</view>
  <view class="page-section">
    <view class="page-section-title">desplazamiento vertical</view>
    <view class="page-section-demo">
      <scroll-view scroll-y="{{true}}" style="height: 200px;" onScrollToUpper="upper" onScrollToLower="lower" onScroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}">
        <view id="blue" class="scroll-view-item bc_blue"></view>
        <view id="red"  class="scroll-view-item bc_red"></view>
        <view id="yellow" class="scroll-view-item bc_yellow"></view>
        <view id="green" class="scroll-view-item bc_green"></view>
      </scroll-view>
    </view>
    <view class="page-section-btns">
      <view onTap="tap">next</view>
      <view onTap="tapMove">move</view>
      <view onTap="scrollToTop">scrollToTop</view>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">desplazamiento horizontal</view>
    <view class="page-section-demo">
      <scroll-view class="scroll-view_H" scroll-x="{{true}}" style="width: 100%" >
        <view id="blue2" class="scroll-view-item_H bc_blue"></view>
        <view id="red2"  class="scroll-view-item_H bc_red"></view>
        <view id="yellow2" class="scroll-view-item_H bc_yellow"></view>
        <view id="green2" class="scroll-view-item_H bc_green"></view>
      </scroll-view>
    </view>
  </view>
</view>
```

```js
const order = ['blue', 'red', 'green', 'yellow'];
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
  },
  upper(e) {
    console.log(e);
  },
  lower(e) {
    console.log(e);
  },
  scroll(e) {
    console.log(e.detail.scrollTop);
  },
  scrollToTop(e) {
    console.log(e);
    this.setData({
      scrollTop: 0,
    });
  },
});
```

## Consejos

- scroll-into-view tiene una prioridad mayor que scroll-top.
- Previene el retroceso de página en scroll-view, por lo que el desplazamiento en scroll-view no activará onPullDownRefresh.
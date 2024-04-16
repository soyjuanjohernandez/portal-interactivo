# movable-area

Un área móvil del componente [movable-view](/). movable-area debe establecer las propiedades de ancho y alto. De lo contrario, se usa el valor predeterminado de 10px.

## Código de Ejemplo

**index.axml**

```xml
<!-- API-DEMO page/component/movable-view.axml -->
<view class="page">
  <view class="page-description">movable-view</view>
  <view class="page-section">
    <view class="page-section-title">movable-view es menor que movable-area</view>
    <view class="page-section-demo">
      <movable-area>
        <movable-view x="{{x}}" y="{{y}}" direction="all">movable-view</movable-view>
      </movable-area>
    </view>
    <button style="margin-left: 10px; margin-right: 10px;" type="primary" onTap="onButtonTap">Haz clic para mover a (30px, 30px)</button>
  </view>
  <view class="page-section">
    <view class="page-section-title">movable-view es mayor que movable-area</view>
    <view class="page-section-demo">
      <movable-area>
        <movable-view class="max" direction="all">movable-view</movable-view>
      </movable-area>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Solo se puede mover lateralmente</view>
    <view class="page-section-demo">
     <movable-area>
        <movable-view direction="horizontal">
          movable-view
        </movable-view>
      </movable-area>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Solo se puede mover verticalmente</view>
    <view class="page-section-demo">
     <movable-area>
        <movable-view direction="vertical">
          movable-view
        </movable-view>
      </movable-area>
    </view>
  </view>
</view>
```

**index.js**

```js
// API-DEMO page/component/movable-view.js
Page({
  data: {
    x: 0,
    y: 0,
  },
  onButtonTap() {
    const { x, y } = this.data;
    if (x === 30) {
      this.setData({
        x: x + 1,
        y: y + 1,
      });
    } else {
      this.setData({
        x: 30,
        y: 30
      });
    }
  },
});
```

**index.json**

```js
// API-DEMO page/component/movable-view.json
{
  "allowsBounceVertical": "NO"
}
```

**index.acss**

```css
/* API-DEMO page/component/movable-view.acss */
movable-area {
  height: 400rpx;
  width: 400rpx;
  margin: 50rpx 0rpx 0 50rpx;
  background-color: #ccc;
  overflow: hidden;
}

movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200rpx;
  width: 200rpx;
  background: #108ee9;
  color: #fff;
}

.max {
  width: 600rpx;
  height: 600rpx;
}
```

## Parámetros

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Predeterminado</th>
      <th>Requerido</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>scale-area</td>
      <td>Booleano</td>
      <td>false</td>
      <td>No</td>
      <td>Cuando el componente movable-view está configurado para admitir escalado de dos dedos, este componente te permite modificar el área efectiva para gestos de escalado a toda el área móvil.</td>
    </tr>
  </tbody>
</table>


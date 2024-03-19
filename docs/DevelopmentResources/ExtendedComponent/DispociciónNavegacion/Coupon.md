---
sidebar_position: 9
---


# Coupon

Puede usar el componente de cupón para mostrar el cupón, el paquete rojo y el boleto que los usuarios pueden canjearse.

## Código de muestra
Consulte los códigos de muestra en diferentes idiomas:

### .json

```js
{

  "defaultTitle": "Coupon",
  "usingComponents":{
    "coupon":"mini-ali-ui/es/coupon/index",
    "button": "mini-ali-ui/es/button/index",
    "am-checkbox": "mini-ali-ui/es/am-checkbox/index",
    "stepper": "mini-ali-ui/es/stepper/index"

  }

}
```
## .axml
```xml
<view style="margin-top: 10px;"></view>

<view>
  <coupon title="coupon title1"
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}">
  </coupon>
</view>
<view>

  <coupon title="coupon title2" 
    subtitle="coupon subtitle" 
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}">
  </coupon>
</view>

<view>

  <coupon title="coupon title3" 
    subtitle="coupon subtitle" 
    used="{{true}}"
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}">
    <view slot="date">Valid period：2020.02.14-2020.02.29</view>
    <view slot="detail" class="coupon_rule">
      <text>1. Rule details；</text>
      <text>2. Rule details；</text>
    </view>
  </coupon>
</view>

<view>
  <coupon title="coupon title4" 
    subtitle="coupon subtitle" 
    onCouponClick="onCouponClick"
    thumb="{{thumb}}">
    <view slot="category" class="categoryDemo">
      <text class="price">50</text><text class="unit">CNY Yuan</text><text class="type">money off coupon</text>
    </view>
    <button shape="capsule" slot="action" onTap="onButtonTap" type="ghost">Use immediately</button>
    <view slot="date">Valid period：2020.02.14-2020.02.29</view>
    <view slot="detail" class="coupon_rule">
      <text>1. Rule details；</text>
      <text>2. Rule details；</text>
    </view>
  </coupon>
</view>

<view>
  <coupon title="coupon title5" 
    subtitle="coupon subtitle" 
    onCouponClick="onCouponClick"
    extra="{{false}}"
    thumb="{{thumb}}">
    <button shape="capsule" slot="action" onTap="onButtonTap" type="ghost">Use immediately</button>
    <view slot="date">Valid period：2020.02.14-2020.02.29</view>
    <view slot="detail" class="coupon_rule">
      <text>1. Rule details；</text>
      <text>2. Rule details；</text>
    </view>
  </coupon>
</view>

<view>
  <coupon title="coupon title6" 
    subtitle="coupon subtitle" 
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}"
  >
    <button shape="capsule" slot="action" onTap="onButtonTap" type="ghost">Use immediately</button>
  </coupon>
</view>
<view>

  <coupon title="coupon title7" 
    subtitle="coupon subtitle"
    moreBtn="see more"
    moreHide="{{false}}"
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}">
    <button shape="capsule" slot="action" onTap="onButtonTap" type="primary">Use immediately</button>
    <view slot="date">vadility：2020.02.14-2020.02.29</view>
    <view slot="detail" class="coupon_rule">
      <text>1. Rule details；</text>
      <text>2. Rule details；</text>
    </view>
  </coupon>
</view>
<view>

  <coupon title="coupon title8" 
    subtitle="coupon subtitle" 
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}">
    <am-checkbox slot="action" onTap="onButtonTap" />
  </coupon>
</view>

<view>
  <coupon title="coupon title9" 
    subtitle="coupon subtitle" 
    onCouponClick="onCouponClick" 
    thumb="{{thumb}}">
    <stepper
      slot="action"
      step="{{1}}"
      showNumber
      min="{{2}}"
    />
  </coupon>
</view>
<view style="margin-top: 50px;"></view>

```
## .js
```js
Page({
  data: {
    thumb: 'https://example.com/mdn/rms_ce4c6f/afts/img/A*b-kqQ4RZgsYAAAAAAAAAAABkARQnAQ',
  },
  onCouponClick(e) {
    if (e.currentTarget.dataset.used) {
      return false;
    } else {
      my.alert({
        content: 'available coupons, The coupon clicks the event',
      });
    }
  },
  onButtonTap() {
    my.alert({
      content: 'The capsule button clicks the event',
    });
  },
});
```

## .acss


```css
.container {
  padding-bottom: 50px;
}

.coupon_rule text {
  display: block;
  margin-bottom: 8rpx;
}


/* el estilo de los derechos e intereses contenido a la izquierda slot="category" */

.categoryDemo {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  align-items: baseline;
  align-self: flex-start;
}

.categoryDemo .price {
  font-size: 60rpx;
  color: #FF6010;
}

.categoryDemo .unit {
  padding-left: 4rpx;
  font-weight: bold;
  font-size: 26rpx;
  color: #FF6010;
}

.categoryDemo .type {
  flex: 1 1 100%;
  text-align: center;
  font-size: 22rpx;
  color: #999;
}

```


## Parameters 

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>thumb</td>
        <td>String</td>
        <td>No</td>
        <td>URL de la imagen de miniatura de cupón.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>String</td>
        <td>Yes</td>
        <td>Título del cupón.</td>
    </tr>
    <tr>
        <td>subTitle	</td>
        <td>String	</td>
        <td>No</td>
        <td>Subtítulo de cupón.</td>
    </tr>
    <tr>
        <td>onCouponClick	</td>
        <td>Function	</td>
        <td>No</td>
        <td>The event that is triggered when uses tap the coupon.</td>
    </tr>
    <tr>
        <td>extra</td>
        <td>Boolean</td>
        <td>No</td>
        <td>Un indicador de si se debe mostrar la información extendida del cupón a la izquierda. El valor predeterminado es `true`. </td>
    </tr>
    <tr>
        <td>moreBtn</td>
        <td>String</td>
        <td>No</td>
        <td>El texto que se puede hacer clic.Después de hacer clic en el texto, los usuarios pueden ver las reglas sobre cómo usar el cupón en detalle. El valor predeterminado es `More`. </td>
    </tr>
    <tr>
        <td>moreHide</td>
        <td>Boolean</td>
        <td>No</td>
        <td>Un indicador de si debe mostrar las reglas sobre cómo usar el cupón en detalle. El valor predeterminado es `true`.</td>
    </tr>
    <tr>
        <td>used</td>
        <td>Boolean</td>
        <td>No</td>
        <td>Un indicador de si el cupón es válido. El valor predeterminado es `false`.</td>
    </tr>
</table>


## slots
<table>
    <tr>
        <th>Nombre del slot</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>action</td>
        <td>La ranura en el lado derecho del cupón. Después de hacer clic en la ranura, los usuarios pueden usar el cupón.</td>
    </tr>
    <tr>
        <td>date</td>
        <td>La ranura para el tiempo de vencimiento del cupón.</td>
    </tr>
    <tr>
        <td>detail</td>
        <td>La ranura que se usa para mostrar reglas sobre cómo usar el cupón en detalle.</td>
    </tr>
    <tr>
        <td>category</td>
        <td>La ranura a la izquierda del cupón, que se utiliza para mostrar el tipo de cupón.</td>
    </tr>
</table>

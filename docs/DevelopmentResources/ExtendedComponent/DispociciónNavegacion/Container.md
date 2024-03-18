---
sidebar_position: 1
---

# Container

Puede usar el componente del contenedor para que el estilo de todos los elementos en el contenedor sea más consistente, como los márgenes entre elementos.

## Código de muestra

Consulte los códigos de muestra en diferentes idiomas:

### .json

```js
{
 "defaultTitle": "Container",
 "usingComponents": {
   "container": "mini-ali-ui/es/container/index",
   "title": "mini-ali-ui/es/title/index"
 }
}
```

### .axml

```xml
<view className="container">
  <container className="container-item"
    title="Customized title"
    thumb="https://img.alicdn.com/tfs/TB1Go8lh9R26e4jSZFEXXbwuXXa-84-84.png"
    onActionTap="titleClick"
  >
    <view slot="operation" style="color: red;">is slot</view>
    <view class="item">The container component's own title properties. If the icon property is not specified, you can insert a slot named operation.</view>
  </container>

  <container className="container-item"
    title="Title with an arrow"
    icon="arrow"
    thumb="https://img.alicdn.com/tfs/TB1Q19sTNv1gK0jSZFFXXb0sXXa-112-112.png"
    onActionTap="titleClick"
  >
    <view class="item">The container component's own title properties</view>
  </container>

  <container className="container-item"
    title="Title with a close icon"
    icon="close"
    thumb="https://img.alicdn.com/tfs/TB1Go8lh9R26e4jSZFEXXbwuXXa-84-84.png"
    onActionTap="titleClick"
  >
    <view class="item">The container component's own title properties</view>
  </container>

  <container className="container-item"
    title="Title with a more icon"
    icon="more"
    thumb="https://img.alicdn.com/tfs/TB1Q19sTNv1gK0jSZFFXXb0sXXa-112-112.png"
    onActionTap="titleClick"
  >
    <view class="item">The container component's own title properties</view>
  </container>

  <container className="container-item"
    title="Title without icon"
    thumb="https://img.alicdn.com/tfs/TB1Go8lh9R26e4jSZFEXXbwuXXa-84-84.png"
    onActionTap="titleClick"
  >
    <view class="item">The container component's own title properties</view>
  </container>
</view>

<view className="container">
  <container className="container-item">
    <view class="item">a1</view>
  </container>
  <container className="container-item">
    <view class="item">b1</view>
    <view class="item">b2</view>
  </container>
  <container className="container-item">
    <title slot="header" hasLine="true" showIcon="true" iconURL="https://example.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original">Title without onActionType</title>
    <view class="item">c1</view>
    <view class="item">c2</view>
    <view class="item">c3</view>
    <view slot="footer" class="footer" style="padding-left: 12px;">Bottom display area</view>
  </container>
  <container className="container-item">
    <title slot="header">slide</title>
    <swiper indicator-dots="{{true}}" class="item">
      <block a:for="{{['#0abc80','#00b7f4']}}">
        <swiper-item>
          <view style="background-color: {{item}};width:100%;height:300rpx;border-radius:16rpx;"/>
        </swiper-item>
      </block>
    </swiper>
  </container>
  <container className="container-item" type="onewithtwo">
    <view class="grid-item" style ="height: 300rpx;" slot="first">first</view>
    <view class="grid-item" slot="second">second</view>
    <view class="grid-item" slot="third">third</view>
  </container>
</view>
```

### .js

```js
Page({
  data: {},
  onLoad() {},
  titleClick() {
    my.alert({
      title: "onActionTap callback",
      content: "Click the operation area after the title",
    });
  },
});
```

###.acss

```css
.container {
  background: #f5f5f5;
  padding: 24rpx;
  height: 100%;
}

.container-item {
  margin-bottom: 24rpx;
}

.footer {
  color: #333;
  margin-top: 24rpx;
}

.item {
  background: #eeeeee;
  text-align: center;
  height: 200rpx;
  padding-top: 20rpx;
}

.grid-item {
  background: #eeeeee;
  text-align: center;
}
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>tipo</td>
        <td>string</td>
        <td>
        Tipo de diseño de contenedor.Los valores válidos son:
          - `line`
          - `onewithtwo`
         El valor predeterminado es la `line`. Cuando el valor es `line`, todos los elementos se dividen igualmente en múltiples filas o columnas.
        </td>
    </tr>
    <tr>
        <td>className</td>
        <td>String</td>
        <td>Nombre de estilo personalizado.</td>
    </tr>
    <tr>
        <td>title</td>
        <td>String</td>
        <td>Nombre del título.El componente del título se puede usar si se especifica esta propiedad.</td>
    </tr>
    <tr>
        <td>thumb</td>
        <td>String</td>
        <td>URL del ícono en el título.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>String</td>
        <td>
        Ícono en el lado derecho del título.Los valores válidos son:
        - `arrow`
        - `close`
        - `more`
        </td>
    </tr>
    <tr>
        <td>onActionTap</td>
        <td>EventHandle</td>
        <td>
          El evento que se activa cuando los usuarios tocan el icono a la derecha del título.
          El valor predeterminado es() => {}
        </td>
    </tr>
</table>


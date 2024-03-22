# AMIcon

Icono.

**Nota:**

- Se recomienda usar una fuente con un tamaño pequeño.
- El Amicon no admite el evento onTap, aunque se puede agregar una etiqueta de vista a su exterior.
- AMIcon es el componente de extensión encapsulado con componentes personalizados donde no está disponible el evento de clic.

El evento de clic vinculado a él no funcionará. Es posible encontrar los códigos fuente en los módulos y modificar el código para agregar el evento de clic.

## Código de muestra

```json
// API-DEMO page/component/am-icon/am-icon.json
{
  "defaultTitle": "Biblioteca de componentes Mini Program AntUI",
  "usingComponents": {
    "am-icon": "mini-antui/es/am-icon/index"
  }
}
```

```html
<!-- API-DEMO page/component/am-icon/am-icon.axml -->
<view>
  <view class="icon-title">Básico</view>
  <view class="icon-list">
    <block a:for="{{basicTypes}}">
      <view class="icon-item">
        <am-icon type="{{item}}" />
        <text class="icon-desc">{{item}}</text>
      </view>
    </block>
  </view>
  <view class="icon-title">Estilo de contorno</view>
  <view class="icon-list">
    <block a:for="{{strokeTypes}}">
      <view class="icon-item">
        <am-icon type="{{item}}" />
        <text class="icon-desc">{{item}}</text>
      </view>
    </block>
  </view>
  <view class="icon-title">Estilo sólido</view>
  <view class="icon-list">
    <block a:for="{{solidTypes}}">
      <view class="icon-item">
        <am-icon type="{{item}}" />
        <text class="icon-desc">{{item}}</text>
      </view>
    </block>
  </view>
</view>
```

```javascript
// API-DEMO page/component/am-icom/am-icon.js
Page({
  data: {
    basicTypes: [
      'arrow-left',
      'arrow-up',
      'arrow-right',
      'arrow-down',
      'cross',
      'plus',
    ],
    strokeTypes: [
      'close-o',
      'dislike-o',
      'heart-o',
      'help-o',
      'like-o',
      'location-o',
      'info-o',
      'success-o',
      'wait-o',
      'warning-o',
      'star-o',
      'download',
      'friends',
      'circle',
      'delete',
      'charge',
      'card',
      'notice',
      'qrcode',
      'reload',
      'scan',
      'money',
      'search',
      'setting',
      'share',
      'zoom-in',
      'zoom-out',
    ],
    solidTypes: [
      'close',
      'dislike',
      'heart',
      'help',
      'like',
      'location',
      'info',
      'success',
      'wait',
      'warning',
      'star',
    ],
  },
});
```

```css
/* API-DEMO page/component/am-icon/am-icon.acss */
.icon-title {
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 10px;
  color: #333;
  font-size: 16px;
}

.icon-list {
  background: #fff;
}

.icon-item {
  display: inline-flex;
  width: 33.33333%;
  height: 80px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.icon-desc {
  margin-top: 10px;
}
```

## Atributos

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>Tipo del icono. Para obtener un efecto específico, escanee el código QR anterior para obtener una vista previa (los valores efectivos se enumeran en la tabla siguiente).</td>
      <td>Cadena</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td>size</td>
      <td>Tamaño del icono, en píxeles.</td>
      <td>Cadena</td>
      <td>No</td>
    </tr>
    <tr>
      <td>color</td>
      <td>Color del icono, igual que el color en CSS.</td>
      <td>Cadena</td>
      <td>No</td>
    </tr>
  </tbody>
</table>


### Valores efectivos de type

<table>
  <thead>
    <tr>
      <th>Estilo del icono</th>
      <th>Valores efectivos de type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Tipo básico</td>
      <td>arrow-left, arrow-up, arrow-right, arrow-down, cross, plus</td>
    </tr>
    <tr>
      <td>Estilo de contorno</td>
      <td>Close-o, dislike-o, heart-o, help-o, like-o, location-o, info-o, success-o, wait-o, warning-o, star-o, download, friends, circle, delete, charge, card, notice, qrcode, reload, scan, money, search, setting, share, zoom-in, dislike-o, heart-o, help-o, like-o, location-o, info-o, success-o, wait-o, warning-o, star-o, download, friends, circle, delete, charge, card, notice, qrcode, reload, scan, money, search, setting, share, zoom-in, zoom-out</td>
    </tr>
    <tr>
      <td>Estilo sólido</td>
      <td>close, dislike, heart, help, like, location, info, success, wait, warning, star</td>
    </tr>
  </tbody>
</table>

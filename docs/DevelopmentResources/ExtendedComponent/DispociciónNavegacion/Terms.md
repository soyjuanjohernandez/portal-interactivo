---
sidebar_position: 13
---

# Terms

Puede usar el componente de términos cuando los usuarios deben estar de acuerdo con los términos antes de usar o activar el servicio.Normalmente se proporciona un enlace a los términos para la referencia del usuario.

## Código de muestra

Consulte los códigos de muestra en diferentes idiomas:

### .json

```js
{
   "defaultTitle": "Terms",
   "usingComponents": {
     "terms": "mini-ali-ui/es/terms/index"
   }
}
```

### .axml

```xml

<view>
  <terms
    onSelect="onSelect"
    related="{{c1.related}}"
    hasDesc="{{c1.hasDesc}}"
    agreeBtn="{{c1.agreeBtn}}"
    cancelBtn="{{c1.cancelBtn}}"
  >
    <view class="text" slot="header">
      <text>
        Agree
        <navigator class="link" url="https://example.com"
          >Términos de autorización de usuario</navigator
        >
      </text>
    </view>
  </terms>

  <text class="title">botón doble</text>
</view>

<view>
  <terms
    onSelect="onSelect"
    fixed="{{c2.fixed}}"
    related="{{c2.related}}"
    hasDesc="{{c2.hasDesc}}"
    agreeBtn="{{c2.agreeBtn}}"
    cancelBtn="{{c2.cancelBtn}}"
    shape="{{c2.shape}}"
    capsuleMinWidth="{{c2.capsuleMinWidth}}"
    capsuleSize="{{c2.capsuleSize}}"
  >
    <view class="text" slot="desc">
      <text>
        controlar
        <navigator class="link" url="https://example.com"
          >ETC Service User Terms</navigator
        >
        Autorizar el servicio ETC para obtener la tarjeta de identificación y la
        dirección de entrega para la aplicación ETC.Preste atención al número de
        vida útil del propietario para su aprobación ；
      </text>
    </view>
  </terms>
  <text class="title">Título con descripción ddicional</text>
</view>

<view>
  <terms
    onSelect="onSelect"
    fixed="{{c3.fixed}}"
    related="{{c3.related}}"
    hasDesc="{{c3.hasDesc}}"
    agreeBtn="{{c3.agreeBtn}}"
    cancelBtn="{{c3.cancelBtn}}"
  >
    <view class="text" slot="header">
      <text>
        agree
        <navigator class="link" url="https://example.com"
          >Términos de autorización de usuario</navigator
        >
      </text>
    </view>
  </terms>
  <text class="title">Se selecciona el protocolo de unión</text>
</view>

<view>
  <terms
    onSelect="onSelect"
    fixed="{{c4.fixed}}"
    related="{{c4.related}}"
    hasDesc="{{c4.hasDesc}}"
    agreeBtn="{{c4.agreeBtn}}"
    cancelBtn="{{c4.cancelBtn}}"
    shape="{{c4.shape}}"
    capsuleMinWidth="{{c4.capsuleMinWidth}}"
    capsuleSize="{{c4.capsuleSize}}"
  >
    <view class="text" slot="header">
      <text>
        aceptar
        <navigator class="link" url="https://example.com"
          >Términos de autorización de usuario</navigator
        >
      </text>
    </view>
  </terms>
  <text class="title">No se selecciona el protocolo de unión</text>
</view>

<view>
  <terms
    fixed="{{c5.fixed}}"
    related="{{c5.related}}"
    hasDesc="{{c5.hasDesc}}"
    agreeBtn="{{c5.agreeBtn}}"
    cancelBtn="{{c5.cancelBtn}}"
    shape="{{c5.shape}}"
    capsuleMinWidth="{{c5.capsuleMinWidth}}"
    capsuleSize="{{c5.capsuleSize}}"
  >
    <view class="text" slot="header">
      <text>
        aceptar
        <navigator class="link" url="https://example.com"
          >Términos de autorización de usuario</navigator
        >
      </text>
    </view>
  </terms>
  <text class="title">sin protocolo de unión</text>
</view>

<view style="padding-bottom: 30px">
  <terms
    fixed="{{c6.fixed}}"
    related="{{c6.related}}"
    hasDesc="{{c6.hasDesc}}"
    agreeBtn="{{c6.agreeBtn}}"
    cancelBtn="{{c6.cancelBtn}}"
    shape="{{c6.shape}}"
    capsuleMinWidth="{{c6.capsuleMinWidth}}"
    capsuleSize="{{c6.capsuleSize}}"
  >
    <view class="text" slot="header">
      <text>
        aceptar
        <navigator class="link" url="https://example.com"
          >Términos de autorización de usuario</navigator
        >
      </text>
    </view>
  </terms>
  <text class="title">succión inferior</text>
</view>

```

### .acss

```css
.title {
  text-align: center;
  display: block;
  width: 100%;
  margin: 20px 0;
}
page {
  padding: 24px 12px;
}
```

### .js

```js
const cfg = {
  c1: {
    related: false,
    agreeBtn: {
      title: "Acuerde el término y abre",
    },
    cancelBtn: {
      title: "No abierto temporalmente, pago manual",
    },
    hasDesc: false,
  },
  c2: {
    related: false,
    agreeBtn: {
      title: "Acuerde el término y abre",
    },
    hasDesc: true,
  },
  c3: {
    related: true,
    agreeBtn: {
      checked: true,
      title: "entregar",
    },
  },
  c4: {
    related: true,
    agreeBtn: {
      title: "entregar",
    },
  },
  c5: {
    related: false,
    agreeBtn: {
      title: "acordar el término y enviar",
    },
  },
  c6: {
    related: true,
    fixed: true,
    agreeBtn: {
      checked: true,
      title: "entregar",
    },
  },
};
Page({
  data: cfg,
  onLoad() {},
  onSelect(e) {
    const selectedData = e.currentTarget.dataset.name || "";
    selectedData &&
      my.alert({
        title: "Términos btns",
        content: selectedData,
      });
  },
});
```

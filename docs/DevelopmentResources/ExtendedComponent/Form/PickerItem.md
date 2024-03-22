---
sidebar_position: 3
---

## PickerItem

Entrada de selección.

### Código de ejemplo

```js
// API-DEMO page/component/input-item/input-item.json
{
  "defaultTitle": "Biblioteca de componentes Mini Program AntUI",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "input-item": "mini-antui/es/input-item/index",
    "picker-item": "mini-antui/es/picker-item/index"
  }
}
```

```xml
<!-- API-DEMO page/component/input-item/input-item.axml -->
<view>
  <view style="margin-top: 10px;" />
  <list>
    <input-item
      data-field="cardNo"
      clear="{{true}}"
      value="{{cardNo}}"
      className="dadada"
      placeholder="Número de tarjeta bancaria"
      focus="{{inputFocus}}"
      onInput="onItemInput"
      onFocus="onItemFocus"
      onBlur="onItemBlur"
      onConfirm="onItemConfirm"
      onClear="onClear"
    >
      Número de tarjeta
      <view slot="extra" class="extra" onTap="onExtraTap"></view>
    </input-item>
    <picker-item
      data-field="bank"
      placeholder="Seleccione el banco emisor"
      value="{{bank}}"
      onPickerTap="onPickerTap"
    >
      Banco emisor
    </picker-item>
    <input-item
      data-field="name"
      placeholder="Nombre"
      type="text"
      value="{{name}}"
      clear="{{true}}"
      onInput="onItemInput"
      onClear="onClear"
    >
      Nombre
    </input-item>
    <input-item
      data-field="password"
      placeholder="Contraseña"
      password
    >
      Contraseña
    </input-item>
    <input-item
      data-field="remark"
      placeholder="Observaciones"
      last="{{true}}"
    />
  </list>
  <view style="margin: 10px;">
    <button type="primary" onTap="onAutoFocus">Enfocar</button>
  </view>
</view>
```

```js
// API-DEMO page/component/input-item/input-item.js
const banks = ['Mi banco', 'CCB', 'ICBC', 'SPDB']

Page({
  data: {
    cardNo: '1234****',
    inputFocus: true,
    bank: '',
    name: '',
  },
  onAutoFocus() {
    this.setData({
      inputFocus: true,
    });
  },
  onExtraTap() {
    my.alert({
      content: 'extra tocado',
    });
  },
  onItemInput(e) {
    this.setData({
      [e.target.dataset.field]: e.detail.value,
    });
  },
  onItemFocus() {
    this.setData({
      inputFocus: false,
    });
  },
  onItemBlur() {},
  onItemConfirm() {},
  onClear(e) {
    this.setData({
      [e.target.dataset.field]: '',
    });
  },
  onPickerTap() {
    my.showActionSheet({
      title: 'Seleccionar banco emisor',
      items: banks,
      success: (res) => {
        this.setData({
          bank: banks[res.index],
        });
      },
    });
  },
});
```

```css
/* API-DEMO page/component/input-item/input-item.acss */
.extra {
  background-image: url('https://img.example.com/example.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right center;
  opacity: 0.2;
  height: 20px;
  width: 20px;
  padding-left: 10px;
}
```

### Atributos

| Propiedad  | Descripción                                       | Tipo                | Predeterminado |
|------------|---------------------------------------------------|---------------------|----------------|
| className  | Clase personalizada.                              | String              | -              |
| labelCls   | Clase de etiqueta personalizada.                  | String              | -              |
| pickerCls  | Clase de región de selección personalizada.       | String              | -              |
| last       | ¿Es la última fila o no?                          | Booleano            | false          |
| value      | Contenido inicial.                                | String              | -              |
| name       | Nombre del componente, usado para obtener datos mediante el envío de formularios. | String | -              |
| placeholder | Marcador de posición.                             | String              | -              |
| onPickerTap | Disparador al hacer clic en pickeritem.          | (e: Objeto) => void | -              |

### Slots

| Nombre del slot | Descripción                                           | Requerido |
|---------------------|-------------------------------------------------------|-----------|
| extra               | Se utiliza para renderizar la descripción a la derecha del picker-item. | No        |

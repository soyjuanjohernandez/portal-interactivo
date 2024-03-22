---
sidebar_position: 1
---

# InputItem

Texto de entrada.

## Código de muestra
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
      placeholder="Seleccionar banco emisor"
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
```javascript
// API-DEMO page/component/input-item/input-item.js
const banks = ['Mi banco', 'CCB', 'ICBC', 'SPDB'];

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

## Atributos

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Por Defecto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>Clase personalizada.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>labelCls</td>
      <td>Clase de etiqueta personalizada.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>inputCls</td>
      <td>Clase de entrada personalizada.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>last</td>
      <td>¿Es la última fila o no?</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Contenido inicial.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>name</td>
      <td>Nombre del componente, utilizado para obtener datos mediante el envío de formularios.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Tipo de entrada, valores efectivos incluyen texto, número, identificación y dígito (ver tabla a continuación para más detalles).</td>
      <td>String</td>
      <td>text</td>
    </tr>
    <tr>
      <td>password</td>
      <td>¿Es de tipo contraseña o no?</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Placeholder.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placeholderStyle</td>
      <td>Especifica el estilo del marcador de posición.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placeholderClass</td>
      <td>Especifica la clase de estilo del marcador de posición.</td>
      <td>String</td>
      <td>''</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>¿Deshabilitar o no?</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>maxlength</td>
      <td>Longitud máxima.</td>
      <td>Número</td>
      <td>140</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>Obtener el enfoque.</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>clear</td>
      <td>¿Tiene función de borrar o no, solo tiene efecto cuando disabled es false?</td>
      <td>Boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>onInput</td>
      <td>Dispara el evento de entrada en la entrada del teclado.</td>
      <td>(e: Object) => void</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onConfirm</td>
      <td>Dispara al hacer clic en la finalización del teclado.</td>
      <td>(e: Object) => void</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onFocus</td>
      <td>Dispara al obtener el enfoque.</td>
      <td>(e: Object) => void</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onBlur</td>
      <td>Dispara al perder el enfoque.</td>
      <td>(e: Object) => void</td>
      <td>-</td>
    </tr>
    <tr>
      <td>onClear</td>
      <td>Dispara al hacer clic en el icono de borrar.</td>
      <td>() => void</td>
      <td>-</td>
    </tr>
  </tbody>
</table>

### Descripción del valor del atributo type

- **text**: Cuadro de entrada de caracteres
- **number**: Cuadro de entrada de número puro (número del 0 al 9)
- **idcard**: Cuadro de entrada para número de documento de identidad (número del 0 al 9 y caracter x)
- **digit**: Cuadro de entrada de número (número del 0 al 9 y punto decimal . utilizado para números que contienen un decimal)

Nota: El valor del atributo type afecta al tipo de teclado con la máquina real y puede que no sea efectivo en simuladores.

## Ranuras

| Nombre de ranura | Descripción | Requerido |
| ---------------- | ----------- | --------- |
| extra            | Se utiliza para renderizar la descripción a la derecha de input-item. | No |

## Preguntas comunes

- Cuando los datos de `setData` están vacíos, el valor del dinero del punto de interrupción se establece en vacío, pero ¿por qué todavía se muestra 0 en el cuadro de entrada?
- Cuando `this.setData` establece los datos como vacíos, no renderiza la página. Se recomienda usar el componente limpio
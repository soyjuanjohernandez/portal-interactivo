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
### Propiedad

| Descripción     | Tipo   | Por defecto |
| --------------- | ------ | ----------- |
| className       | Clase personalizada. | String | '' |
| labelCls        | Clase de etiqueta personalizada. | String | '' |
| inputCls        | Clase de entrada personalizada. | String | '' |
| last            | ¿Es la última fila o no? | Boolean | false |
| value           | Contenido inicial. | String | '' |
| name            | Nombre del componente, utilizado para obtener datos mediante el envío de formularios. | String | '' |
| type            | Tipo de entrada, valores efectivos incluyendo texto, número, idcard y dígito (ver tabla a continuación para más detalles). | String | 'text' |
| password        | ¿Es tipo contraseña o no? | Boolean | false |
| placeholder     | Marcador de posición. | String | '' |
| placeholderStyle| Especifica el estilo del marcador de posición. | String | '' |
| placeholderClass| Especifica la clase de estilo del marcador de posición. | String | '' |
| disabled        | ¿Desactivado o no? | Boolean | false |
| maxlength       | Longitud máxima. | Número | 140 |
| focus           | Obtener el foco. | Boolean | false |
| clear           | ¿Tiene función de limpieza o no, solo tiene efecto cuando disabled es falso? | Boolean | false |
| onInput         | Desencadena el evento de entrada en la entrada del teclado. | (e: Object) => void | - |
| onConfirm       | Desencadena al hacer clic en la finalización del teclado. | (e: Object) => void | - |
| onFocus         | Desencadena al obtener el foco. | (e: Object) => void | - |
| onBlur          | Desencadena al perder el foco. | (e: Object) => void | - |
| onClear         | Desencadena al hacer clic en el icono de borrar. | () => void | - |

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
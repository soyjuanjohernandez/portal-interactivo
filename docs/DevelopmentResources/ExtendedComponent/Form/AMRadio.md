---
sidebar_position: 10
---

# AMRadio

Puedes usar el componente am-radio para permitir a los usuarios seleccionar botones de radio. El uso específico es consistente con el componente de [radio](/) básico, pero se añaden más estilos en el componente extendido am-switch.

## Código de ejemplo

Consulta los códigos de ejemplo en diferentes lenguajes:

### .json

```js
{
 "defaultTitle": "am-radio",
 "usingComponents": {
   "am-radio": "mini-ali-ui/es/am-radio/index",
   "list": "mini-ali-ui/es/list/index",
   "list-item": "mini-ali-ui/es/list/list-item/index"
 }
}
```

### .axml

```xml
<view class="page">
 <view class="page-description">AMRdiao</view>
 <view class="page-section">
   <view class="section section_gap">
     <form onSubmit="onSubmit" onReset="onReset">
       <view class="page-section-demo">
         <radio-group class="radio-group" onChange="radioChange" name="lib">
           <label class="radio" a:for="{{items}}" key="label-{{index}}">
             <am-radio value="{{item.value}}" checked="{{item.checked}}" disabled="{{item.disabled}}" />
             <view style="display:inline-block;">{{item.desc}}</view>
           </label>
         </radio-group>
       </view>
       <view class="page-section-demo">
         <radio-group class="radio-group" onChange="radioChange" name="lib">
           <label class="radio" a:for="{{items1}}" key="label-{{index}}">
             <am-radio value="{{item.value}}" checked="{{item.checked}}" disabled="{{item.disabled}}" />
             <view style="display:inline-block;">{{item.desc}}</view>
           </label>
         </radio-group>
       </view>
     </form>
   </view>
 </view>
</view>
```

### .acss

```css
.radio {
 display: flex; align-items: center;
}
.page-section-demo {
 padding: 24rpx;
}
```

### .js

```js
Page({
 data: {
   items: [
     { checked: true, disabled: false, value: 'a', desc: 'AMRadio-checked', id: 'checkbox1' },
     { checked: false, disabled: false, value: 'b', desc: 'AMRadio-unchecked', id: 'checkbox2' },
   ],
   items1: [
     { checked: true, disabled: true, value: 'c', desc: 'AMRadio-checked disabled', id: 'checkbox3' },
   ],
 },
 radioChange() {
 },
});
```

## Parámetros

| Propiedad | Tipo   | Descripción                                                                                            |
|-----------|--------|--------------------------------------------------------------------------------------------------------|
| value     | String | Valor del componente. Cuando se selecciona el radio, se obtiene el valor del componente mediante el evento onChange. |
| checked   | Boolean| Un indicador de si el radio está seleccionado. El valor predeterminado es false.                       |
| disabled  | Boolean| Un indicador de si se deshabilita la selección del radio. El valor predeterminado es false.           |
| id        | String | ID del radio, que se utiliza en combinación con la propiedad for del componente label.                 |

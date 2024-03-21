---
sidebar_position: 11
---

# AMCheckBox

Casilla de verificación

## Código de muestra

```js
// Página/componente API-DEMO/am-checkbox/am-checkbox.json
{
  "defaultTitle": "Biblioteca de componentes Mini Program AntUI",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "am-checkbox": "mini-antui/es/am-checkbox/index"
  }
}
```

```xml
<!-- Página/componente API-DEMO/am-checkbox/am-checkbox.axml -->
<list>
  <view slot="header">
    Lista + Casilla de verificación
  </view>
  <block a:for="{{items}}">
    <list-item
      thumb=""
      arrow="{{false}}"
      index="{{index}}"
      key="items-{{index}}"
      last="{{index === (items.length - 1)}}"
    >
      <view slot="prefix" style="display: flex; align-items: center;">
        <am-checkbox id="{{item.id}}" data-name="{{item.value}}" disabled="{{item.disabled}}" checked="{{item.checked}}" onChange="onChange" />
      </view>
      <label for="{{item.id}}">{{item.title}}</label>
    </list-item>
  </block>
</list>
<view style="padding: 16px;">
  <view style="color: #888; font-size: 14px;">
    Protocolo
  </view>
  <view style="margin-top: 10px;">
    <label style="display: flex; line-height: 24px;">
      <am-checkbox />
      <text style="text-indent: 8px; color: #888">Aceptar el Contrato de Servicio de Pago con Tarjeta de Crédito</text>
    </label>
  </view>
</view>
<view style="padding: 16px; background-color: #fff;">
  <form onSubmit="onSubmit" onReset="onReset">
    <view>
      <view style="color: #666; font-size: 14px; margin-bottom: 5px;">Seleccione el framework que ha utilizado:</view>
      <view>
        <checkbox-group name="libs">
          <label a:for="{{items2}}" style="display: flex; align-items: center; height: 30px;">
            <am-checkbox value="{{item.name}}" checked="{{item.checked}}" disabled="{{item.disabled}}" />
            <text style="color: #888; font-size: 14px; margin-left: 8px;">{{item.value}}</text>
          </label>
        </checkbox-group>
      </view>
      <view style="margin-top: 10px;">
        <button type="primary" size="mini" formType="submit">enviar</button>
      </view>
    </view>
  </form>
</view>
```

```js
// Página/componente API-DEMO/am-checkbox/am-checkbox.js
Page({
  data: {
    items: [
      { checked: true, disabled: false, value: 'a', title: 'Casilla de verificación - Marcada por defecto', id: 'checkbox1' },
      { checked: false, disabled: false, value: 'b', title: 'Casilla de verificación - No marcada por defecto', id: 'checkbox2' },
      { checked: true, disabled: true, value: 'c', title: 'Casilla de verificación - deshabilitada marcada por defecto', id: 'checkbox3' },
      { checked: false, disabled: true, value: 'd', title: 'Casilla de verificación - deshabilitada no marcada por defecto', id: 'checkbox4' },
    ],
    items2: [
      { name: 'react', value: 'React', checked: true },
      { name: 'vue', value: 'Vue.js' },
      { name: 'ember', value: 'Ember.js' },
      { name: 'backbone', value: 'Backbone.js', disabled: true },
    ],
  },
  onSubmit(e) {
    my.alert({
      content: `Ha seleccionado el framework ${e.detail.value.libs.join(', ')}`,
    });
  },
  onReset() {},
  onChange(e) { console.log(e); },
});
```

## Atributos

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Predeterminado</th>
      <th>Requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>value</td>
      <td>Valor del componente, el valor transportado con el evento de cambio cuando está marcado.</td>
      <td>String</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>checked</td>
      <td>Marcado o no, permitiendo la configuración de marcado por defecto.</td>
      <td>Boolean</td>
      <td>false</td>
      <td>No</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Deshabilitar o no.</td>
      <td>Boolean</td>
      <td>false</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>Función de devolución de llamada desencadenada por el evento de cambio.</td>
      <td>(e: Objeto) =&gt; void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>id</td>
      <td>Funciona con el atributo for del componente de etiqueta.</td>
      <td>String</td>
      <td>-</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

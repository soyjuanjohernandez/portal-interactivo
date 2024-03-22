# Stepper

Aumenta o disminuye el valor actual.

**Nota:**

- No hay una solicitud para ingresar un valor máximo. Si excede el máximo, el sistema muestra automáticamente el valor como el máximo.
- No se admite la entrada de decimales. Es posible usar + y - para cambiar el valor.

## Código de Ejemplo

```js
// API-DEMO page/component/stepper/stepper.json
{
  "defaultTitle": "Stepper",
  "usingComponents":{
    "stepper": "mini-antui/es/stepper/index",
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index"
  }
}
```

```xml
<!-- API-DEMO page/component/stepper/stepper.axml -->
<list>
  <list-item disabled="{{true}}">
    Mostrar valor numérico
    <view slot="extra">
      <stepper onChange="callBackFn" step="{{1}}" showNumber readOnly="{{false}}" value="{{value}}" min="{{2}}" max="{{12}}" />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    No mostrar valor numérico
    <view slot="extra">
      <stepper onChange="callBackFn" step="{{1}}" readOnly="{{false}}" value="{{value}}" min="{{2}}" max="{{12}}" />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    Deshabilitado
    <view slot="extra">
      <stepper onChange="callBackFn" showNumber value="{{11}}" min="{{2}}" max="{{12}}" disabled />
    </view>
  </list-item>
  <list-item disabled="{{true}}">
    Solo lectura
    <view slot="extra">
      <stepper onChange="callBackFn" showNumber value="{{11}}" min="{{2}}" max="{{12}}" readOnly />
    </view>
  </list-item>
  <list-item>
    <button onTap="modifyValue">Modificar valor inicial del stepper</button>
  </list-item>
</list>
```

```js
// API-DEMO page/component/stepper/stepper.js
Page({
  data: {
    value: 8,
  },
  callBackFn(value){
    console.log(value);
  },
  modifyValue() {
    this.setData({
      value: this.data.value + 1,
    });
  }
});
```

## Atributos

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
      <th>Type</th>
      <th>Default</th>
      <th>Required</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>min</td>
      <td>Minimum.</td>
      <td>Number</td>
      <td>0</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>max</td>
      <td>Maximum.</td>
      <td>Number</td>
      <td>10000</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Initial value.</td>
      <td>Number</td>
      <td>10</td>
      <td>Yes</td>
    </tr>
    <tr>
      <td>step</td>
      <td>Change step, can be a decimal.</td>
      <td>Number</td>
      <td>1</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onChange</td>
      <td>Change callback function.</td>
      <td>(value: Number) =&gt; void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Disabled.</td>
      <td>Boolean</td>
      <td>false</td>
      <td>No</td>
    </tr>
    <tr>
      <td>readOnly</td>
      <td>Input read-only.</td>
      <td>Boolean</td>
      <td>false</td>
      <td>No</td>
    </tr>
    <tr>
      <td>showNumber</td>
      <td>Show number or not, not shown by default.</td>
      <td>Boolean</td>
      <td>false</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

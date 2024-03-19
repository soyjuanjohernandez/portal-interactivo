---
sidebar_position: 3
---

# Badge

Punto rojo, número o texto. Se utiliza para informar a los usuarios sobre actualizaciones.

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
      <td>text</td>
      <td>Number or text to be displayed.</td>
      <td>String/Number</td>
      <td></td>
      <td>No</td>
    </tr>
    <tr>
      <td>dot</td>
      <td>Show a red dot instead of number.</td>
      <td>Boolean</td>
      <td></td>
      <td>No</td>
    </tr>
    <tr>
      <td>overflowCount</td>
      <td>Top number to be shown, "+" shown for more.</td>
      <td>Number</td>
      <td>99</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Slots

| Nombre del Slot | Descripción |
|-----------------|-------------|
| inner           | Opcional, cuando el badge es un envoltorio, se utiliza para renderizar la región interna. |

## Ejemplo

```js
{
  "defaultTitle": "Biblioteca de Componentes AntUI",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "badge": "mini-antui/es/badge/index"
  }
}
```

```xml
<view>
  <list>
    <block a:for="{{items}}">
      <list-item
        arrow="{{true}}"
        index="{{index}}"
        key="items-{{index}}"
        last="{{index === (items.length - 1)}}"
      >
        <view>
          <badge a:if="{{item.isWrap}}" text="{{item.text}}" dot="{{item.dot}}">
            <view slot="inner" style="height: 26px; width: 26px; background-color: #ddd;"></view>
          </badge>
          <text style="margin-left: \{\{ item.isWrap ? '12px' : '0' \}\}">{{item.intro}}</text>
        </view>
        <view slot="extra">
          <badge a:if="{{item.isWrap}}" text="{{item.text}}" dot="{{item.dot}}" overflowCount="{{item.overflowCount}}" /> 
        </view>
      </list-item>
    </block>
  </list>
</view>
```

```javascript
Page({
  data: {
    items: [
      {
        dot: true,
        text: '',
        isWrap: true,
        intro: 'Dot Badge',
      },
      {
        dot: false,
        text: 1,
        isWrap: true,
        intro: 'Text Badge',
      },
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: 'Number Badge',
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: 'OverflowCount',
      },
      {
        dot: false,
        text: 'new',
        isWrap: false,
        intro: 'Text Badge',
      },
    ],
  },
});
```
---
sidebar_position: 3
---

# List

Lista

## Lista

<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
    </tr>
    <tr>
        <td>className</td>
        <td>Custom class.</td>
        <td>String</td>
    </tr>
</table>

## Slots

<table>
    <tr>
        <th>slotName</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>header	</td>
        <td>Opcional, encabezado de lista.</td>
    </tr>
    <tr>
        <td>footer	</td>
        <td>Opcional, utilizado para representar el pie de página de la lista.</td>
    </tr>
</table>

##  List-item

<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Por defecto</th>
    </tr>
    <tr>
        <td>className</td>
        <td>Clase personalizada.</td>
        <td>String</td>
        <td></td>
    </tr>
    <tr>
        <td>thumb	</td>
        <td>Miniatura, dirección de imagen.</td>
        <td>String	</td>
        <td></td>
    </tr>
    <tr>
        <td>arrow	</td>
        <td>Con flecha o no.</td>
        <td>Boolean	</td>
        <td>false</td>
    </tr>
    <tr>
        <td>align	</td>
        <td>Alineación vertical de subelementos, opciones: arriba, media, abajo</td>
        <td>String	</td>
        <td>middle</td>
    </tr>
    <tr>
        <td>index	</td>
        <td>Índice único del elemento de la lista.</td>
        <td>String	</td>
        <td></td>
    </tr>
    <tr>
        <td>onClick	</td>
        <td>Llame a esta función al hacer clic en la lista.</td>
        <td>`({index, target}) => void`	</td>
        <td></td>
    </tr>
    <tr>
        <td>last	</td>
        <td>Si es el último elemento de lista.</td>
        <td>Boolean	</td>
        <td>false</td>
    </tr>
    <tr>
        <td>disabled	</td>
        <td>No se puede hacer clic, no hay efecto de desplazamiento.</td>
        <td>Boolean	</td>
        <td>false</td>
    </tr>
    <tr>
        <td>multipleLine	</td>
        <td>Múltiples líneas.</td>
        <td>Boolean	f</td>
        <td>alse</td>
    </tr>
    <tr>
        <td>wrap	</td>
        <td>Envolver o no.Por defecto, la longitud excesiva del texto está oculta.</td>
        <td>Boolean	</td>
        <td>false</td>
    </tr>
</table>



## Slots
<table>
    <tr>
        <th>slotname	</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>extra	</td>
        <td>Opcional, utilizado para representar notas de la derecha del elemento de la lista.</td>
    </tr>
    <tr>
        <td>prefix	</td>
        <td>Opcional, utilizado para representar notas de la izquierda del elemento de la lista.</td>
    </tr>
</table>

    

## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index"
  }
}
```


```xml
<view>
  <list>
    <view slot="header">
      List Header
    </view>
    <block a:for="{{items}}">
      <list-item
        thumb="{{item.thumb}}"
        arrow="{{item.arrow}}"
        align="{{item.align}}"
        index="{{index}}"
        onClick="onItemClick"
        key="items-{{index}}"
        last="{{index === (items.length - 1)}}"
      >
      {{item.title}}
        <view class="am-list-brief">{{item.brief}}</view>
        <view slot="extra">
          {{item.extra}}
        </view>
      </list-item>
    </block>
    <view slot="footer">
      List footer
    </view>
  </list>
  <list>
    <view slot="header">
      List Header
    </view>
    <block a:for="{{items2}}">
      <list-item
        thumb="{{item.thumb}}"
        arrow="{{item.arrow}}"
        onClick="onItemClick"
        index="items2-{{index}}"
        key="items2-{{index}}"
        last="{{index === (items2.length - 1)}}"
      >
       {{item.title}}
        <view class="am-list-brief">{{item.brief}}</view>
        <view a:if="{{item.extra}}" slot="extra">
          {{item.extra}}
        </view>
      </list-item>
    </block>
    <view slot="footer">
      List footer
    </view>
  </list>
</view>
```
```js
Page({
  data: {
    items: [
      {
        title: 'Simple List',
        extra: 'Details',
      },
    ],
    items2: [
      {
        title: 'Complex List',
        arrow: true,
      },
      {
        title: 'Complex List',
        arrow: 'up',
      },
      {
        title: 'Complex List',
        arrow: 'down',
      },
      {
        title: 'Complex List',
        arrow: 'empty',
      },
      {
        title: 'Complex List',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: `Click the ${ev.index} row`,
    });
  },
});
```



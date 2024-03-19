---
sidebar_position: 4
---

# List-term

Puede usar el componente List-Item para personalizar los elementos en una lista.

## Código de muestra

Consulte los códigos de muestra en diferentes idiomas:

## .json

```js
{
  "defaultTitle": "List",
  "usingComponents":{
    "list": "mini-ali-ui/es/list/index",
    "list-item": "mini-ali-ui/es/list/list-item/index"
  }}
```

## .axml

```xml
<list>

  <view slot="header">
    list header
  </view>

  <list-item thumb="http://thumb.link.png"
    arrow="{{true}}"
    onClick="onItemClick"
    upperSubtitle="upper subtitle"
    lowerSubtitle="lower subtitle" >
    main title
    <view slot="extra">
      additional information
    </view>
  </list-item>

  <view slot="footer">
    list footer
  </view>
  
 </list>
```

## .js

```js
Page({
  onItemClick() {
    my.alert({
      content: "click the event on list item",
    });
  },
});
```

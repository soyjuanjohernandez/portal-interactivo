---
sidebar_position: 1
---

# my.createSelectorQuery

Devuelve una instancia de objeto SelectorQuery.

## Valor de retorno

[SelectorQuery](/)

## Código de muestra

index.json
```js
<!-- .axml -->
<view class="page">
  <view class="page-description">Node query API</view>
  <view class="page-section">
    <view className="all">Node all1</view>
    <view className="all">Node all2</view>
    <view id="one">Node one</view>
    <view id="scroll" style="height:200px;overflow: auto">
      <view style="height:400px">Independent scroll region</view>
    </view>
    <button type="primary" onTap="createSelectorQuery">Node query</button>
  </view>
</view>
```
```js
//.js
Page({
  createSelectorQuery() {
    my.createSelectorQuery()
      .select('#non-exists').boundingClientRect()
      .select('#one').boundingClientRect()
      .selectAll('.all').boundingClientRect()
      .select('#scroll').scrollOffset()
      .selectViewport().boundingClientRect()
      .selectViewport().scrollOffset().exec((ret) => {
      console.log(ret);
      my.alert({
        content: JSON.stringify(ret, null, 2),
      });
    })
  },
});
```

### Ret Structure

```js
[
  null,
  {
    "x": 1,
    "y": 2,
    "width": 1367,
    "height": 18,
    "top": 2,
    "right": 1368,
    "bottom": 20,
    "left": 1
  },
  [
    {
      "x": 1,
      "y": -34,
      "width": 1367,
      "height": 18,
      "top": -34,
      "right": 1368,
      "bottom": -16,
      "left": 1
    },
    {
      "x": 1,
      "y": -16,
      "width": 1367,
      "height": 18,
      "top": -16,
      "right": 1368,
      "bottom": 2,
      "left": 1
    }
  ],
  {
    "scrollTop": 0,
    "scrollLeft": 0
  },
  {
    "width": 1384,
    "height": 360
  },
  {
    "scrollTop": 35,
    "scrollLeft": 0
  }
]
```

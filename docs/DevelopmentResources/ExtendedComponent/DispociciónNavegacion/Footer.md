---
sidebar_position: 12
---

# Footer

Muestre el pie de página de la página.

<table>
    <tr>
        <th>Property	</th>
        <th>Description	</th>
        <th>Type	</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>copyright	</td>
        <td>Copyright information.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>links	</td>
        <td>Footer link.	</td>
        <td>`Array<text, url>`	</td>
        <td>No</td>
    </tr>
</table>

## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents":{
    "footer": "mini-antui/es/footer/index"
  }
}
```
```xml
<view>
  <footer
    copyright="{{copyright}}"
    links="{{links}}" />
</view>
```
```js
Page({
 data: {
    copyright: '© 2004-2017 *.com. All rights reserved.',
    links: [
      { text: 'Bottom link', url: '../../list/demo/index' },
      { text: 'Bottom link', url: '../../card/demo/index' },
    ],
 },
});
```

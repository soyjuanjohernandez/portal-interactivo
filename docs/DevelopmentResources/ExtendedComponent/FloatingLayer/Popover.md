---
sidebar_position: 1
---


# Popover

Bubble It is possible to set Popover-item width and height to change the bubble size. Text adaptive width & height is not supported.
Note: The setting popover is located right below the specific element. It is possible to place the element within the popover and set the position as bottom.

## Código de muestra

```js
    // API-DEMO page/component/popover.json
    {  
      "defaultTitle": "Popover",
      "usingComponents": {
        "popover": "mini-antui/es/popover/index",
        "popover-item": "mini-antui/es/popover/popover-item/index"
      }
    }
```
```xml
    <!-- API-DEMO page/component/popover/.axml-->
    <view class="demo-popover">
      <popover
        position="{{position}}"
        show="{{show}}"
        showMask="{{showMask}}"
        onMaskClick="onMaskClick"
      >
        <view class="demo-popover-btn" onTap="onShowPopoverTap">Click {{show ? 'hide' : 'show'}}</view>
        <view slot="items">
          <popover-item onItemClick="itemTap1">
            <text>{{position}}</text>
          </popover-item>
          <popover-item onItemClick="itemTap2">
            <text>line2</text>
          </popover-item>
        </view>
      </popover>
    </view>
    <view class="demo-popover-test-btns">
      <button class="demo-popover-test-btn" onTap="onNextPositionTap">Next position</button>
      <button class="demo-popover-test-btn" onTap="onMaskChangeTap">Mask{{showMask ? 'hide' : 'show'}}</button>
    </view>
```
```js
    // API-DEMO page/component/popover.js
    const position = ['top', 'topRight', 'rightTop', 'right', 'rightBottom', 'bottomRight', 'bottom', 'bottomLeft', 'leftBottom', 'left', 'leftTop', 'topLeft'];
    Page({
      data: {
        position: position[0],
        show: false,
        showMask: true,
      },
      onShowPopoverTap() {
        this.setData({
          show: !this.data.show,
        });
      },
      onNextPositionTap() {
        let index = position.indexOf(this.data.position);
        index = index >= position.length - 1 ? 0 : index + 1;
        this.setData({
          show: true,
          position: position[index],
        });
      },
      onMaskChangeTap() {
        this.setData({
          showMask: !this.data.showMask,
        });
      },
      onMaskClick() {
        this.setData({
          show: false,
        });
      },
      itemTap1() {
        my.alert({
          content: 'Click1',
        });
      },
      itemTap2() {
        my.alert({
          content: 'Click2',
        });
      },
    });
```
```css

    /* API-DEMO page/component/popover.css */
    .demo-popover {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 400px;
    }
    .demo-popover-btn {
      width: 100px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: #fff;
      border: 1px solid #dddddd;
      border-radius: 2px;
    }
    .demo-popover-test-btns {
      display: flex;
      justify-content: space-around;
    }
    .demo-popover-test-btn {
      width: 45%;
    }

```
## Attributes

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Por defecto</th>
    <th>Requerido</th>
  </tr>
  <tr>
    <td>className	</td>
    <td>Estilo de diseño más externo.	</td>
    <td>String	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>show	</td>
    <td>Muestra burbuja o no.	</td>
    <td>Boolean	</td>
    <td>false	</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>showMask	</td>
    <td>Mostrar máscara o no.	</td>
    <td>Boolean	</td>
    <td>true	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>position	</td>
    <td>Bubble position options: top, topRight, topLeft, bottom, bottomLeft, bottomRight, right, rightTop, rightBottom, left, leftBottom, leftTop.	</td>
    <td>String	</td>
    <td>bottomRight	</td>
    <td>No</td>
  </tr>
</table>


## popover-item

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
  </tr>
  <tr>
    <td>className	</td>
    <td>Estilo de un solo artículo.	</td>
    <td>String</td>
  </tr>
  <tr>
    <td>onItemClick	</td>
    <td>Single Elemento haga clic en el evento.	</td>
    <td>() => void</td>
  </tr>
</table>


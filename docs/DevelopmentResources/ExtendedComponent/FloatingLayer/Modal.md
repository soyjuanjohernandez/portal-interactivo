---
sidebar_position: 3
---


# Modal

Caja de diálogo.

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Por defecto</th>
  </tr>
  <tr>
    <td>className	</td>
    <td>Clase personalizada.	</td>
    <td>String</td>
    <td></td>
  </tr>
  <tr>
    <td>show	</td>
    <td>Mostrar modal o no.	</td>
    <td>Boolean	</td>
    <td>false</td>
  </tr>
  <tr>
    <td>showClose	</td>
    <td>Apague el render o no.	</td>
    <td>Boolean	</td>
    <td>true</td>
  </tr>
  <tr>
    <td>closeType	</td>
    <td>Tipo de gráfico cerrado 0: gray icon 1: white icon.	</td>
    <td>String	</td>
    <td>0</td>
  </tr>
  <tr>
    <td>onModalClick	</td>
    <td>Callback al hacer clic en el `footer.</td>
    <td>() => void	</td>
    <td></td>
  </tr>
  <tr>
    <td>onModalClose	</td>
    <td>Callback al hacer clic en Cerrar, no se requiere cuando showClose Es falso.	</td>
    <td>() => void	</td>
    <td></td>
  </tr>
  <tr>
    <td>topImage	</td>
    <td>Imagen superior.</td>
    <td>String	</td>
    <td></td>
  </tr>
  <tr>
    <td>topImageSize	</td>
    <td>Regla de imagen superior, opciones que incluyen `lg`, `md` and `sm`.</td>
    <td>String	</td>
    <td>md</td>
  </tr>
  <tr>
    <td>advice	</td>
    <td>Es operación emergente o no.	</td>
    <td>Boolean	</td>
    <td>false</td>
  </tr>
</table>

## Slots
<table>
  <tr>
    <th>nombre de lote</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>header	</td>
    <td>Encabezado opcional, modal.</td>
  </tr>
  <tr>
    <td>footer	</td>
    <td>Pie de pie de página modal opcional.</td>
  </tr>
</table>

## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "modal": "mini-antui/es/modal/index"
  }
}
```
```xml
<view>
  <button onTap="openModal">Show Modal</button>
  <modal
    show="{{modalOpened}}"
    onModalClick="onModalClick"
    onModalClose="onModalClose"
    topImage="https://img.example.com/example.png"
  >
    <view slot="header">Title</view>
    Explain the current status, prompt the user solution, preferably no more than two lines
    <view slot="footer">Confirm</view>
  </modal>
</view>
```
```js
Page({
  data: {
    modalOpened: false,
  },
  openModal() {
    this.setData({
      modalOpened: true,
    });
  },
  onModalClick() {
    this.setData({
      modalOpened: false,
    });
  },
  onModalClose() {
    this.setData({
      modalOpened: false,
    });
  }
});
```

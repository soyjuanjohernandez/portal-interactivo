---
sidebar_position: 4
---


# Popup

Ventana emergente.

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
    <td>Clase personalizada.</td>
    <td>String	</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td>show	</td>
    <td>Mostrar menú o no.</td>
    <td>Boolean	</td>
    <td>false	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>animation	</td>
    <td>Habilitar animación o no.</td>
    <td>Boolean	</td>
    <td>true	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>mask	</td>
    <td>Mostrar máscara o no.Hacer clic en el exterior no se activa en OnClose cuando no est shown.	</td>
    <td>Boolean	</td>
    <td>true	</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>position	</td>
    <td>Controle la dirección en la que aparece el menú.Inferior indicando la parte inferior del lado, izquierda, la izquierda, cubra la parte superior y la derecha del lado derecho.	</td>
    <td>String	</td>
    <td>bottom	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>disableScroll	</td>
    <td>Desactivar el desplazamiento de la página o no cuando se muestra la máscara.	</td>
    <td>Boolean	</td>
    <td>true	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>zIndex	</td>
    <td>Defina el número de niveles emergentes.	</td>
    <td>Number	</td>
    <td>0	</td>
    <td>No</td>
  </tr>
</table>

## Slots

Es posible definir las piezas que se mostrarán en el componente emergente.Vea el siguiente ejemplo para obtener detalles.

## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "popup": "mini-antui/es/popup/index"
  }
}
```
```xml
<view>
  <view class="btn-container">
    <button onTap="onTopBtnTap">Popup</button>
  </view>
  <popup show="{{showTop}}" position="top" onClose="onPopupClose">
    <view style="height: 200px; background: #fff; display: flex; justify-content: center; align-items: center;">hello world</view>
  </popup>
</view>
```
```js
Page({
  data: {
    showTop: false,
  },
  onTopBtnTap() {
    this.setData({
      showTop: true,
    });
  },
  onPopupClose() {
    this.setData({
      showTop: false,
    });
  },
});
```
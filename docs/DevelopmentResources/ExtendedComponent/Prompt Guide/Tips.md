---
sidebar_position: 1
---

# Tips

Consejos de herramientas, incluidos dos tipos de ``tips-dialog`` y ``tips-plain``.

### tips-dialog

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Por defecto</th>
      <th>Requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>Clase personalizada.</td>
      <td>String</td>
      <td></td>
      <td>No</td>
    </tr>
    <tr>
      <td>show</td>
      <td>Mostrar componente de control o no.</td>
      <td>Booleano</td>
      <td>true</td>
      <td>No</td>
    </tr>
    <tr>
      <td>type</td>
      <td>Indica el estilo de la caja de diálogo, rectángulo para estilo rectangular.</td>
      <td>String</td>
      <td>dialog</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onCloseTap</td>
      <td>Cuando el valor de tipo es rectángulo, cierre del componente haciendo clic en el icono de cierre.</td>
      <td>() => void</td>
      <td></td>
      <td>No</td>
    </tr>
    <tr>
      <td>iconUrl</td>
      <td>Mostrar la URL del icono.</td>
      <td>String</td>
      <td></td>
      <td>No</td>
    </tr>
  </tbody>
</table>

### Slots

Nombre del slot | Descripción
---|---
content | Se utiliza para renderizar el contenido del texto de consejo.
operation | Se utiliza para renderizar el área de operación a la derecha.

### tips-plain

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Por defecto</th>
      <th>Requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>className</td>
      <td>Clase personalizada.</td>
      <td>String</td>
      <td></td>
      <td>No</td>
    </tr>
    <tr>
      <td>time</td>
      <td>Tiempo de cierre automático. (en milisegundos)</td>
      <td>Número</td>
      <td>5000(ms)</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onClose</td>
      <td>Devolución de llamada y cierre de la caja de consejos.</td>
      <td>() => void</td>
      <td></td>
      <td>No</td>
    </tr>
  </tbody>
</table>

## Ejemplo

```js
{
  "defaultTitle": "Biblioteca de componentes AntUI",
  "usingComponents": {
    "tips-dialog": "mini-antui/es/tips/tips-dialog/index",
    "tips-plain": "mini-antui/es/tips/tips-plain/index"
  }
}
```

### tips-dialog

```xml
<view>
  <tips-dialog
    show="{{showDialog}}"
    className="dialog"
    type="dialog"
  >
    <view class="content" slot="content">
      <view>¡Hola!</view>
      <view>Bienvenido a usar la biblioteca de componentes de extensión del Mini Programa</view>
    </view>
    <view slot="operation" class="opt-button" onTap="onDialogTap">OK</view> 
  </tips-dialog>
  <tips-dialog
    iconUrl="https://img.example.com/example.png"
    type="rectangle"
    className="rectangle"
    onCloseTap="onCloseTap"
    show="{{showRectangle}}">
    <view class="content" slot="content">
      Agregar a la página de inicio
    </view>
    <view slot="operation" class="add-home" onTap="onRectangleTap">Agregar ahora</view>
  </tips-dialog>
</view>
```

```js
Page({
  data: {
    showRectangle: true,
    showDialog: true,
  },
  onCloseTap() {
    this.setData({
      showRectangle: false,
    });
  },
  onRectangleTap() {
    my.alert({
      content: 'Hacer algo',
    });
  },
  onDialogTap() {
    this.setData({
      showDialog: false,
    });
  },
});
```

```css
.rectangle {
  position: fixed;
  bottom: 100px;
}

.dialog {
  position: fixed;
  bottom: 10px;
}

.content {
  font-size: 14px;
  color: #fff;
}

.opt-button {
  width: 51px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 12px;
  border: #68BAF7 solid 1rpx;
}

.add-home {
  width: 72px;
  height: 27px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #56ADEB;
  color: #fff;
  font-size: 14px;
}
```

### tips-plain

```xml
<tips-plain onClose="onClose" time="{{time}}">{{content}}</tips-plain>
```

```js
Page({
  data: {
    content: 'OK',
    time: 2000,
  },
  onClose() {
    my.alert({
      title: '12321'
    });
  }
});
```
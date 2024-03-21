# SwipeAction

Celda deslizante

## Código de ejemplo

```js
// API-DEMO page/component/swiper-action/swiper-action.json
{
  "defaultTitle": "SwipeAction",
  "usingComponents": {
    "list": "mini-antui/es/list/index",
    "list-item": "mini-antui/es/list/list-item/index",
    "swipe-action": "mini-antui/es/swipe-action/index"
  }
}
```

```xml
<!-- API-DEMO page/component/swiper-action/swiper-action.axml -->
<view>
  <list>
    <view a:for="{{list}}" key="{{item.content}}">
      <swipe-action
        index="{{index}}"
        restore="{{swipeIndex === null || swipeIndex !== index}}"
        right="{{item.right}}"
        onRightItemClick="onRightItemClick"
        onSwipeStart="onSwipeStart"
        extra="item{{index}}"
      >
        <list-item
          arrow="horizontal"
          index="{{index}}"
          key="items-{{index}}"
          onClick="onItemClick"
          last="{{index === list.length - 1}}"
        >
          {{item.content}}
        </list-item>
      </swipe-action>
    </view>
  </list>
</view>
```

```javascript
// Página/componente API-DEMO/swiper-action/swiper-action.js
Page({
  data: {
    swipeIndex: null,
    list: [
      { right: [{ type: 'edit', text: ' Desfavorito ', bgColor: '#ccc', fColor: '#f00' }, { type: 'delete', text: ' Eliminar ', bgColor: '#0ff', fColor: '#333' }], content: ' Cambiar color de texto y fondo al mismo tiempo Ejecutar recuperación de eliminación deslizante ' },
      { right: [{ type: 'delete', text: ' Eliminar ' }], content: 'AAA' },
      { right: [{ type: 'edit', text: ' Desfavorito ' }, { type: 'delete', text: ' Eliminar ' }], content: 'BBB' },
      { right: [{ type: 'delete', text: ' Eliminar ' }], content: 'CCC' },
    ],
  },
  onRightItemClick(e) {
    const { type } = e.detail;
    my.confirm({
      title: 'Consejos',
      content: `${e.index}-${e.extra}-${JSON.stringify(e.detail)}`,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      success: (result) => {
        const { list } = this.data;
        if (result.confirm) {
          if (type === 'delete') {
            list.splice(this.data.swipeIndex, 1);
            this.setData({
              list: [...list],
            });
          }

          my.showToast({
            content: 'Confirmar => Ejecutar recuperación de eliminación deslizante ',
          });
          e.done();
        } else {
          my.showToast({
            content: 'Cancelar => El estado de eliminación deslizante permanece sin cambios ',
          });
        }
      },
    });
  },
  onItemClick(e) {
    my.alert({
      content: `dada${e.index}`,
    });
  },
  onSwipeStart(e) {
    this.setData({
      swipeIndex: e.index,
    });
  },
});
```

## Atributos

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Predeterminado</th>
  </tr>
  <tr>
    <td>className</td>
    <td>Clase personalizada.</td>
    <td>String</td>
    <td>-</td>
  </tr>
  <tr>
    <td>right</td>
    <td>Opción de deslizamiento, como máximo dos opciones.</td>
    <td>`Array[Object{type: edit/delete, text: string, fColor: 'Valor de color', bgColor: 'Valor de color'}]`</td>
    <td>[]</td>
  </tr>
  <tr>
    <td>onRightItemClick</td>
    <td>Hacer clic en la opción de deslizamiento.</td>
    <td>`({index, detail, extra, done}) => void`</td>
    <td>Llamar a done para plegar swipeAction</td>
  </tr>
  <tr>
    <td>restore</td>
    <td>Restaurar el componente a su estado inicial. Cuando hay varios componentes de SwipeAction, para deslizar uno de ellos, es necesario establecer el atributo restore de los otros como true, lo que evita que varios SwipeAction se activen en la misma página.</td>
    <td>Booleano</td>
    <td>false</td>
  </tr>
  <tr>
    <td>onSwipeStart</td>
    <td>Callback de inicio de deslizamiento.</td>
    <td>(e: Object) => void</td>
    <td>-</td>
  </tr>
  <tr>
    <td>extra</td>
    <td>Información adicional, para obtenerla en el callback onRightItemClick.</td>
    <td>any</td>
    <td>-</td>
  </tr>
</table>


---
sidebar_position: 5
---

## movable-view

Puede arrastrar y deslizar movable-view en la página. El componente movable-view debe estar dentro del componente [movable-area](/) y debe ser un nodo hijo directo. De lo contrario, el componente no puede moverse.

**Notas:**

- movable-view debe establecer las propiedades de ancho y alto. De lo contrario, se utiliza el valor predeterminado de 10px.
- Por defecto, movable-view utiliza posicionamiento absoluto, que no se puede cambiar. Los valores de las propiedades de arriba y izquierda son 0 px.
- Cuando movable-view es más pequeño que movable-area, el rango de movimiento de movable-view está dentro de movable-area. Cuando movable-view es más grande que movable-area, el rango de movimiento de movable-view debe cubrir movable-area. Se consideran por separado la dirección del eje x y la dirección del eje y.

**Código de ejemplo:**

**index.axml**

```xml
<!-- API-DEMO page/component/movable-view.axml -->
<view class="page">
  <view class="page-description">movable-view</view>
  <view class="page-section">
    <view class="page-section-title">movable-view es menor que movable-area</view>
    <view class="page-section-demo">
      <movable-area>
        <movable-view x="{{x}}" y="{{y}}" direction="all">movable-view</movable-view>
      </movable-area>
    </view>
    <button style="margin-left: 10px; margin-right: 10px;" type="primary" onTap="onButtonTap">Haz clic para mover a (30px, 30px)</button>
  </view>
  <view class="page-section">
    <view class="page-section-title">movable-view es mayor que movable-area</view>
    <view class="page-section-demo">
      <movable-area>
        <movable-view class="max" direction="all">movable-view</movable-view>
      </movable-area>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Solo puede moverse lateralmente</view>
    <view class="page-section-demo">
     <movable-area>
        <movable-view direction="horizontal">
          movable-view
        </movable-view>
      </movable-area>
    </view>
  </view>
  <view class="page-section">
    <view class="page-section-title">Solo puede moverse verticalmente</view>
    <view class="page-section-demo">
     <movable-area>
        <movable-view direction="vertical">
          movable-view
        </movable-view>
      </movable-area>
    </view>
  </view>
</view>
```

**index.js**

```js
// API-DEMO page/component/movable-view.js
Page({
  data: {
    x: 0,
    y: 0,
  },
  onButtonTap() {
    const { x, y } = this.data;
    if (x === 30) {
      this.setData({
        x: x + 1,
        y: y + 1,
      });
    } else {
      this.setData({
        x: 30,
        y: 30
      });
    }
  },
});
```

**index.json**

```js
// API-DEMO page/component/movable-view.json
{
  "allowsBounceVertical": "NO"
}
```

**index.acss**

```css
/* API-DEMO page/component/movable-view.acss */
movable-area {
  height: 400rpx;
  width: 400rpx;
  margin: 50rpx 0rpx 0 50rpx;
  background-color: #ccc;
  overflow: hidden;
}

movable-view {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200rpx;
  width: 200rpx;
  background: #108ee9;
  color: #fff;
}

.max {
  width: 600rpx;
  height: 600rpx;
}
```

**Parámetros:**

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Valor Predeterminado</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>direction</td>
    <td>String</td>
    <td>ninguna</td>
    <td>La dirección de movimiento de movable-view. Los valores válidos son "todos", "vertical", "horizontal" y "ninguno".</td>
  </tr>
  <tr>
    <td>inertia</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Este campo especifica si movable-view tiene inercia.</td>
  </tr>
  <tr>
    <td>out-of-bounds</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Este campo especifica si movable-view puede moverse después de que el contenedor de vista esté fuera del área movible.</td>
  </tr>
  <tr>
    <td>x</td>
    <td>Número</td>
    <td>0</td>
    <td>Este campo define el desplazamiento en la dirección del eje x, que se convierte en la propiedad left del componente. Si el valor de x no está dentro del rango movible, el componente se mueve automáticamente al rango movible.</td>
  </tr>
  <tr>
    <td>y</td>
    <td>Número</td>
    <td>0</td>
    <td>Este campo define el desplazamiento en la dirección del eje Y, que se convierte en la propiedad top del componente. Si el valor de Y no está dentro del rango movible, se moverá automáticamente al rango movible.</td>
  </tr>
  <tr>
    <td>damping</td>
    <td>Número</td>
    <td>20</td>
    <td>El coeficiente de amortiguación, que se utiliza para controlar la animación que se activa cuando cambia el valor de x o y y la animación que se retira cuando el componente supera el rango. Un valor más alto conduce a un movimiento más rápido.</td>
  </tr>
  <tr>
    <td>friction</td>
    <td>Número</td>
    <td>2</td>
    <td>El coeficiente de fricción, que se utiliza para controlar la animación que se mueve debido a la inercia. Un valor más alto conduce a una mayor fricción e indica que el movimiento se detiene antes. Debe ser mayor que 0. De lo contrario, se utiliza el valor predeterminado.</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Este campo especifica si se debe desactivar el componente.</td>
  </tr>
  <tr>
    <td>scale</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Este campo especifica si se debe admitir el escalado con dos dedos. El área efectiva para gestos de escalado se encuentra dentro de movable-view de forma predeterminada.</td>
  </tr>
  <tr>
    <td>scale-min</td>
    <td>Número</td>
    <td>0.5</td>
    <td>El valor mínimo del nivel de escala.</td>
  </tr>
  <tr>
    <td>scale-max</td>
    <td>Número</td>
    <td>10</td>
    <td>El valor máximo del nivel de escala.</td>
  </tr>
  <tr>
    <td>scale-value</td>
    <td>Número</td>
    <td>1</td>
    <td>El nivel de escala. Puede variar de 0.5 a 10.</td>
  </tr>
  <tr>
    <td>animation</td>
    <td>Booleano</td>
    <td>false</td>
    <td>Este campo especifica si se deben usar animaciones.</td>
  </tr>
  <tr>
    <td>onTouchStart</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El inicio del toque del dedo y este evento se pasa al nodo padre.</td>
  </tr>
  <tr>
    <td>catchTouchStart</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El inicio del toque del dedo y este evento solo actúa sobre el componente y no se pasa al nodo padre.</td>
  </tr>
  <tr>
    <td>onTouchMove</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El dedo se mueve después del toque, el evento se pasa al nodo padre.</td>
  </tr>
  <tr>
    <td>catchTouchMove</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El dedo se mueve después del toque, el evento solo actúa sobre el componente y no se pasa al nodo padre.</td>
  </tr>
  <tr>
    <td>onTouchEnd</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>La acción de tocar termina, el evento se pasa al nodo padre.</td>
  </tr>
  <tr>
    <td>catchTouchEnd</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>La acción de tocar termina, el evento solo actúa sobre el componente y no se pasa al nodo padre.</td>
  </tr>
  <tr>
    <td>onTouchCancel</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>La acción de tocar se interrumpe, como recordatorio de llamada y ventanas emergentes.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El evento desencadenado durante el arrastre, evento. ```detail = {x: x, y: y, source: touch}```, donde source muestra la razón del movimiento, por ejemplo, el valor es touch.</td>
  </tr>
  <tr>
    <td>onChangeEnd</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El evento desencadenado después del arrastre, ```event.detail = {x: x, y: y}```.</td>
  </tr>
  <tr>
    <td>onScale</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>El evento desencadenado durante el zoom, ```event.detail = {x, y, scale}```.</td>
  </tr>
</table>

## onChange valor de retorno detail.source

El campo de origen muestra la razón del movimiento.

<table>
  <thead>
    <tr>
      <th>Valor</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>touch</td>
      <td>Dragging.</td>
    </tr>
    <tr>
      <td>touch-out-of-bounds</td>
      <td>Se excede el rango móvil.</td>
    </tr>
    <tr>
      <td>out-of-bounds</td>
      <td>Pullback después de exceder el rango móvil.</td>
    </tr>
    <tr>
      <td>friction</td>
      <td>Inertia.</td>
    </tr>
    <tr>
      <td>Cadena vacía</td>
      <td>setData.</td>
    </tr>
  </tbody>
</table>

**Instrucción:** Por favor, revise el tipo de evento en la [introducción del event](/) para eventos de burbujeo.

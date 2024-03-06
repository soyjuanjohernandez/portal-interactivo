---
sidebar_position: 1
---

# my.createAnimation

Crea una instancia de animación. Llama al método de instancia para describir la animación y luego use el método de ```exportación``` de instancia de animación para exportar los datos de animación y transferir al atributo de ```animación``` de componentes.

:::info[NOTA]
Después de que se llame al método de ```exportación```, se borrará la operación de animación anterior.
:::

## Código de muestra

```js
//.json
{
    "defaultTitle": "Animation"
}
```

```js
<!-- .axml -->
<view class="page">
  <view class="page-description">Animation API</view>
  <view class="page-section">
    <view class="page-section-title">my.createAnimation</view>
    <view class="page-section-demo">
      <view class="animation-element" animation="{{animation}}"></view>
    </view>
    <view class="page-section-btns">
      <view type="primary" onTap="rotate">Rotate</view>
      <view type="primary" onTap="scale"> Scale</view>
      <view type="primary" onTap="translate">Translate</view>
    </view>
    <view class="page-section-btns">
      <view type="primary" onTap="skew">Skew</view>
      <view type="primary" onTap="rotateAndScale">Rotate and scale</view>
      <view type="primary" onTap="rotateThenScale">Rotate and then scale</view>
    </view>
    <view class="page-section-btns">
      <view type="primary" onTap="all">Expand all simultaneously </view>
      <view type="primary" onTap="allInQueue">Expand all in order</view>
      <view type="primary" onTap="reset">Reset</view>
    </view>
  </view>
</view>
```

```js
//.js
Page({
  onReady() {
    this.animation = my.createAnimation()
  },
  rotate() {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setData({ animation: this.animation.export() })
  },
  scale() {
    this.animation.scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  translate() {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setData({ animation: this.animation.export() })
  },
  skew() {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  rotateAndScale() {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  rotateThenScale() {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
    this.setData({ animation: this.animation.export() })
  },
  all() {
    this.animation.rotate(Math.random() * 720 - 360)
      .scale(Math.random() * 2)
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
      .skew(Math.random() * 90, Math.random() * 90)
      .step()
    this.setData({ animation: this.animation.export() })
  },
  allInQueue() {
    this.animation.rotate(Math.random() * 720 - 360).step()
      .scale(Math.random() * 2).step()
      .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
      .skew(Math.random() * 90, Math.random() * 90).step()
    this.setData({ animation: this.animation.export() })
  },
  reset() {
    this.animation.rotate3d(0, 0, 0, 0)
      .rotateX(0)
      .rotateY(0)
      .rotateZ(0)
      .scale(1)
      .translate(0, 0)
      .skew(0, 0)
      .step({ duration: 0 })
    this.setData({ animation: this.animation.export() })
  }
})
```
```js
.animation-element {
  width: 200rpx;
  height: 200rpx;
  background-color: #108ee9;
  transform: scaleX(1) scaleY(1);
}
```
## Parámetros

Tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>duration</td>
        <td>Integer</td>
        <td>No</td>
        <td>Duración de animación, en ms, 400 por defecto.</td>
     </tr>
      <tr>
        <td>timeFunction</td>
        <td>String</td>
        <td>No</td>
        <td>Define el efecto de animación, lineal por defecto, valores efectivos incluyendo lineal, suave, suave-entrante, suave-entrante-saliente, suave-saliente, paso-inicio y paso-final.</td>
     </tr>
     <tr>
        <td>delay</td>
        <td>Integer</td>
        <td>No</td>
        <td>Retardo de animación, en ms, 0 por defecto.</td>
     </tr>
     <tr>
        <td>transformOrigin</td>
        <td>String</td>
        <td>No</td>
        <td>Establece transformación de origen, 50% 50% 0 por defecto.</td>
     </tr>
</table>

## Código de muestra

```js
//.js
const animation = my.createAnimation({
  transformOrigin: "top right",
  duration: 3000,
  timeFunction: "ease-in-out",
  delay: 100,
})
```
## Animación
La instancia de animación puede llamar al siguiente método para describir la animación.Al final de la llamada, se devuelve la instancia en sí.El estilo de llamada en cadena es compatible.Cuando el atributo de animación de vista se inicializa como ```{}```, el error puede aparecer en Basic Library 1.11.0 (sin incluir 1.11.0) y la versión inferior.Se recomienda inicializar como ```null```.

### Style 

<table>
    <tr>
        <th>Método</th>
        <th>Parámetros</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>opacity</td>
        <td>value</td>
        <td>Transparencia, rango 0~1.</td>
     </tr>
     <tr>
        <td>backgroundColor</td>
        <td>color</td>
        <td>Valor de color.</td>
     </tr>
     <tr>
        <td>width</td>
        <td>length</td>
        <td>Establezca la altura: valores de longitud, en px, como 300 px.</td>
     </tr>
     <tr>
        <td>height</td>
        <td>length</td>
        <td>Establece el ancho: valores de longitud, en px, como 300 px.</td>
     </tr>
     <tr>
        <td>top</td>
        <td>length</td>
        <td>Establece los valores de arriba: longitud, en px, como 300 px.</td>
     </tr>
     <tr>
        <td>left</td>
        <td>length</td>
        <td>Establece los valores de la izquierda: longitud, en px, como 300 px.</td>
     </tr>
     <tr>
        <td>bottom</td>
        <td>length</td>
        <td>Establezca los valores de fondo: longitud, en px, como 300 px.</td>
     </tr>
     <tr>
        <td>right</td>
        <td>length</td>
        <td>Establece los valores de la derecha: longitud, en px, como 300 px.</td>
     </tr>      
</table>

### Rotación

<table>
    <tr>
        <th>Método</th>
        <th>Parámetros</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>rotate</td>
        <td>deg</td>
        <td>Rango de grados -180 ~ 180, girar grados en el sentido de las agujas del reloj desde el origen.</td>
     </tr>
     <tr>
        <td>rotateX</td>
        <td>deg</td>
        <td>Rango de grados -180 ~ 180, rota grados en el eje X.</td>
     </tr>
     <tr>
        <td>rotateY</td>
        <td>deg</td>
        <td>Rango de grados -180 ~ 180, rota grados en el eje Y.</td>
     </tr>
     <tr>
        <td>rotateZ</td>
        <td>deg</td>
        <td>Rango de grados -180 ~ 180, rota grados en el eje Z.</td>
     </tr>
     <tr>
        <td>rotate3d</td>
        <td>(x, y , z, deg)</td>
        <td>Igual que [transform-function rotate3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate3d).</td>
     </tr>
</table>

###  Escala

<table>
    <tr>
        <th>Método</th>
        <th>Parámetros</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>scale</td>
        <td>sx,[sy]</td>
        <td className="p-no-margin">
          Cuando solo hay un parámetro, indica escala SX tiempos en las exises x e y al mismo tiempo.

          Cuando hay dos parámetros, indica escala SX Times en el eje x y los tiempos de SY en el eje y.
        </td>
     </tr>
     <tr>
        <td>scaleX</td>
        <td>sx</td>
        <td>Escala sx veces en el eje X.</td>
     </tr>
     <tr>
        <td>scaleY</td>
        <td>sy</td>
        <td>Escala sx veces en el eje Y.</td>
     </tr>
     <tr>
        <td>scaleZ</td>
        <td>sz</td>
        <td>Escala sx veces en el eje Z.</td>
     </tr>
     <tr>
        <td>scale3d</td>
        <td>(sx,sy,sz)</td>
        <td>Traslada por tx en el eje X, ty en el eje Y y tz en el eje Z, en px.</td>
     </tr>
</table>

### Sesgar

<table>
    <tr>
        <th>Método</th>
        <th>Parámetros</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>skew</td>
        <td>ax,[ay]</td>
        <td>Rango -180~180 Cuando sólo hay un parámetro, Y permanece invariable y X se desvía ax grados en el sentido de las agujas del reloj. Cuando hay dos parámetros, X se inclina ax grados e Y se inclina ay grados.</td>
     </tr>
     <tr>
        <td>skewX</td>
        <td>ax</td>
        <td>Rango -180~180 Y permanece invariable y X se desvía un eje en el sentido de las agujas del reloj. Grado.</td>
     </tr>
     <tr>
        <td>skewY</td>
        <td>ay</td>
        <td>Rango -180~180 X permanece invariable e Y se desvía ay grados en el sentido de las agujas del reloj.</td>
     </tr>
</table>

### Transformación de matriz

<table>
    <tr>
        <th>Método</th>
        <th>Parámetros</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>matrix</td>
        <td>(a,b,c,d,tx,ty)</td>
        <td>Igual que [transform-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix).</td>
     </tr>
     <tr>
        <td>matrix3d</td>
        <td>(a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3, a4, b4, c4, d4)</td>
        <td>Igual que [transform-function matrix3d](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/matrix3d).</td>
     </tr>
</table>

## Animación en cola

•	Cuando se llama al método de operación de animación, es necesario llamar a ```step()``` para indicar la finalización de un grupo de animaciones. Dentro de un grupo de animación, es posible llamar a cualquier número de métodos de animación. Todas las animaciones del grupo comienzan al mismo tiempo. No se entra en el siguiente grupo hasta que finaliza el grupo de animación actual.

•	El ```step()``` puede transferir un parámetro de configuración que es el mismo que ```my.createAnimation()```, que se utiliza para especificar la configuración del grupo de animación actual.
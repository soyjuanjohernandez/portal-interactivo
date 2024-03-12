---
sidebar_position: 1
---

# my.pageScrollTo

Desplácese a la posición de destino en la página.

:::info[NOTA]

* El desplazamiento hacia arriba tiene mayor prioridad que el selector.
* Cuando se utiliza my.pageScrollTo para saltar a la parte superior del Mini Programa, el valor scrollTop debe establecerse como un número mayor que 0 para que el salto sea posible.
:::

## Código de muestra

```js
<!-- .axml -->
<view class="page">
  <view class="page-description">Page scroll API</view>

  <view class="page-section">
    <view class="page-section-title">
      my.pageScrollTo
    </view>
    <view class="page-section-demo">
      <input type="text" placeholder="key" name="key" value="{{scrollTop}}" onInput="scrollTopChange"></input>
    </view>
    <view class="page-section-btns">
      <view onTap="scrollTo">Page scroll </view>
    </view>
  </view>

  <view style="height:1000px"/>
</view>
```

```js
//.js
Page({
  data: {
    scrollTop: 0,
  },
  scrollTopChange(e) {
    this.setData({
      scrollTop: e.detail.value,
    });
  },
  onPageScroll({ scrollTop }) {
    console.log('onPageScroll', scrollTop);
  },
  scrollTo() {
    my.pageScrollTo({
      scrollTop: parseInt(this.data.scrollTop),
      duration: 300,
    });
  },
});
```

## Parámetros
Tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Por defecto</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>scrollTop</td>
        <td>Number</td>
        <td>-</td>
        <td>No</td>
        <td>Desplácese a la posición de destino en la página, en px, cuando my.pagescrollto se usa para saltar a la parte superior del programa mini, el valor de scrolltop debe establecerse como un número mayor que 0 para hacer posible saltar.</td>
     </tr>
     <tr>
        <td>duration</td>
        <td>Number</td>
        <td>0</td>
        <td>No</td>
        <td>Duración de la animación de desplazamiento, en ms.</td>
     </tr>
     <tr>
        <td>selector</td>
        <td>String</td>
        <td>-</td>
        <td>No</td>
        <td>Selector.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>-</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>-</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
         <td>-</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (para ser ejecutado en el éxito de la llamada o el fracaso).</td>
     </tr>
</table>

### Sintaxis del selector

Cuando se transfiere el parámetro selector, el marco ejecuta document.querySelector(selector) para seleccionar el nodo de destino.
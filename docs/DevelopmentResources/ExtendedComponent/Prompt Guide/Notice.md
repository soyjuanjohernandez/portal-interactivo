---
sidebar_position: 2
---

# Notice

Guía.

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Por Defecto</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>mode</td>
      <td>Tipo de opción de aviso: ```link```, ```closable```.</td>
      <td>Cadena</td>
      <td>''</td>
    </tr>
    <tr>
      <td>action</td>
      <td>Texto que muestra el aviso.</td>
      <td>Cadena</td>
      <td>''</td>
    </tr>
    <tr>
      <td>actionCls</td>
      <td>Clase personalizada de texto que muestra el aviso.</td>
      <td>Cadena</td>
      <td>''</td>
    </tr>
    <tr>
      <td>show</td>
      <td>Mostrar la barra de aviso o no.</td>
      <td>Booleano</td>
      <td>true</td>
    </tr>
    <tr>
      <td>onClick</td>
      <td>Devolución de llamada al hacer clic en el botón.</td>
      <td>() = void</td>
      <td></td>
    </tr>
    <tr>
      <td>enableMarquee</td>
      <td>Habilitar la animación o no.</td>
      <td>Booleano</td>
      <td>false</td>
    </tr>
    <tr>
      <td>marqueeProps</td>
      <td>Parámetro de marquesina, bucle para repetición, leading para una pausa antes de la animación, trailing para pausa entre animaciones cuando el bucle es verdadero, fps para la velocidad de fotogramas.</td>
      <td>
      Objeto 
      
      ```<loop, leading, trailing, fps>```
      </td>
      <td>```{loop: false, leading: 500, trailing: 800, fps: 40}```</td>
    </tr>
  </tbody>
</table>

## Ejemplo

```js
{
  "defaultTitle": "Biblioteca de Componentes AntUI",
  "usingComponents": {
    "notice": "mini-antui/es/notice/index"
  }
}
```

```xml
<view class="demo-title">NoticeBar</view>
<view class="demo-item">
  <notice>Debido a la actualización del sistema nacional de ciudadanía, agregue tarjeta bancaria </notice>
</view>
<view class="demo-item">
  <notice mode="link" onClick="linkClick">Debido a la actualización del sistema nacional de ciudadanía, agregue tarjeta bancaria</notice>
</view>
<view class="demo-item">
  <notice mode="closable" onClick="closableClick" show="{{closeShow}}">Debido a la actualización del sistema nacional de ciudadanía, agregue tarjeta bancaria</notice>
</view>
<view class="demo-item">
  <notice mode="link" action="Ver detalles" onClick="linkActionClick">Debido a la actualización del sistema nacional de ciudadanía, agregue tarjeta bancaria</notice>
</view>
<view class="demo-item">
  <notice mode="closable" action="No recordar nuevamente" onClick="closableActionClick" show="{{closeActionShow}}">Debido a la actualización del sistema nacional de ciudadanía, agregue tarjeta bancaria</notice>
</view>
```

```js
Page({
  data:{
    closeShow:true,
    closeActionShow:true
  },
  linkClick() {
    my.showToast({
      content: 'Hacer clic en el ícono',
      duration: 3000
    });
  },
  closableClick() {
    this.setData({
      closeShow:false
    })
    my.showToast({
      content: 'Hacer clic en el ícono',
      duration: 3000
    });
  },
  linkActionClick() {
    my.showToast({
      content: 'Hacer clic en el texto',
      duration: 3000
    });
  },
  closableActionClick() {
    this.setData({
      closeActionShow:false
    })
    my.showToast({
      content: 'Hacer clic en el texto',
      duration: 3000
    });
  }
})
```

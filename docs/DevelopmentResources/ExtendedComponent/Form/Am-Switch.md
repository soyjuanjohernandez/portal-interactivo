---
sidebar_position: 8
---

# Am-Switch

Puedes usar el componente am-switch para cambiar el estado activado o desactivado. El uso específico es consistente con el componente básico de interruptor, pero se añaden más estilos en el componente extendido am-switch.

**Nota:**

En iOS, la forma del interruptor es redonda, mientras que en Android la forma del interruptor es cuadrada.

## Código de ejemplo

Consulta los códigos de muestra en diferentes lenguajes:

### .json

```json
{
 "defaultTitle": "am-switch",
 "usingComponents": {
   "am-switch": "mini-ali-ui/es/am-switch/index"
 }
}
```

### .axml

```xml
<view class="page">
 <view class="page-description">am-switch</view>
 <view class="page-section">
   <view class="page-section-demo switch-list">
     <view class="switch-item">
       <am-switch checked onChange="switch1Change"/>
     </view>
     <view class="switch-item">
       <am-switch color="red" checked />
     </view>
   </view>
 </view>
</view>
```

**.js**
```javascript
Page({
 switch1Change(e) {
   console.log('switch1 ha sucedido un evento de cambio, el valor transportado es', e.detail.value);
 },
});
```

## Parámetros

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Nombre del componente, que se utiliza para obtener datos mediante el envío del formulario.</td>
  </tr>
  <tr>
    <td>checked</td>
    <td>Boolean</td>
    <td>Un indicador de si el estado está activado. El valor predeterminado es <code>false</code>.</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Boolean</td>
    <td>Un indicador de si se debe desactivar el interruptor. El valor predeterminado es <code>false</code>.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios cambian el estado.</td>
  </tr>
  <tr>
    <td>color</td>
    <td>String</td>
    <td>Color del componente. Especifique el valor del color en CSS.</td>
  </tr>
  <tr>
    <td>controlled</td>
    <td>Boolean</td>
    <td>Un indicador de si el componente está controlado. El valor predeterminado es <code>false</code>. Si el valor es <code>true</code>, el valor de _checked_ está controlado por _setData_.</td>
  </tr>
</table>

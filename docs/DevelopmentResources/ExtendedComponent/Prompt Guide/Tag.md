---
sidebar_position: 4
---

# Tag

Puedes usar el componente de etiqueta para resaltar la información, como advertencia.

## Código de muestra

Ver los códigos de muestra en diferentes lenguajes:

### .json

```js
{
 "defaultTitle": "Tag",
 "usingComponents": {
   "tag": "mini-ali-ui/es/tag/index",
   "list-item": "mini-ali-ui/es/list/list-item/index",
   "am-switch": "mini-ali-ui/es/am-switch/index"
 }
}
```

### .axml

```xml
<view style="padding: 12px;">

  <view style="display: flex; justify-content: space-evenly;">

    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="primary">tag</tag>

    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="warning">tag</tag>

    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="danger">tag</tag>

    <tag size="lg" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="success">tag</tag>

  </view>

  <view style="display: flex; justify-content: space-evenly; margin-top: 20px;">

    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="primary">tag</tag>

    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="warning">tag</tag>

    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="danger">tag</tag>

    <tag size="sm" iconType="{{useIcon ? 'qr' : ''}}" ghost="{{ghost}}" type="success">tag</tag>

  </view>

  <view style="padding: 20px 10px;">

    <list-item>

      icon

      <am-switch slot="extra" onChange="setInfo" data-name="useIcon" checked="{{useIcon}}"/>

    </list-item>

    <list-item>

      el estilo del marco de alambre

      <am-switch slot="extra" onChange="setInfo" data-name="ghost" checked="{{ghost}}"/>

    </list-item>

  </view>

</view>  
```

### .js

```js
Page({

  data: {},

  onLoad() {},

  setInfo(e) {

    const { dataset } = e.target;

    const { name } = dataset;

    this.setData({

      [name]: e.detail.value,

    });

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
    <td>className</td>
    <td>String</td>
    <td>Nombre de la clase.</td>
  </tr>
  <tr>
    <td>type</td>
    <td>String</td>
    <td>
    Tipo de etiqueta. Los valores válidos son: 
    - ```primary```
    - ```success``` 
    - ```warning```
    - ```danger```
    
    El valor predeterminado es ```primary```.
    </td>
  </tr>
  <tr>
    <td>iconType</td>
    <td>String</td>
    <td>Tipo de icono. El icono es una imagen en miniatura en la etiqueta.</td>
  </tr>
  <tr>
    <td>size</td>
    <td>String</td>
    <td>
    Tamaño de la etiqueta. Los valores válidos son: 
    - ```lg``` (grande) 
    - ```sm``` (pequeño) 
    El valor predeterminado es ```lg```.
    </td>
  </tr>
  <tr>
    <td>ghost</td>
    <td>Boolean</td>
    <td>Un indicador de si la etiqueta tiene un marco. El valor predeterminado es ```false```.</td>
  </tr>
</table>

### slot

<table>
  <tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>extra</td>
    <td>The slot that is used to display texts in the tag.</td>
  </tr>
</table>

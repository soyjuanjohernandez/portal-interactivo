---
sidebar_position: 5
---


# Mask

Puedes utilizar el componente de máscara para mostrar el elemento emergente con una máscara.

## Código de Ejemplo

Mira los códigos de ejemplo en diferentes lenguajes:

### .json

```json
{
  "defaultTitle": "Máscara",
  "usingComponents": {
    "mask": "mini-ali-ui/es/mask/index"
  }
}
```

### .axml

```html
<mask type="{{type}}" show="{{show}}" maskZindex="{{maskZindex}}" onMaskTap="maskClick"></mask>
```

### .js

```javascript
Page({
 data: {
   type: 'market',
   maskZindex: 10,
 },
 maskClick() {
   if (this.data.type === 'market') {
     this.setData({
       type: 'product',
     });
   } else {
     this.setData({
       type: 'market',
       show: false,
     });
   }
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
    <td>type</td>
    <td>String</td>
    <td>
    La máscara con diferentes opacidades. Los valores válidos son: 
    - ```product```: el elemento emergente para mostrar información sobre el producto, con un valor de opacidad de 0.55. 
    - ```market```: el elemento emergente para mostrar información sobre el marketing, con un valor de opacidad de 0.75. 
    
    El valor predeterminado es ```product```.
    </td>
  </tr>
  <tr>
    <td>maskZindex</td>
    <td>Número</td>
    <td>La propiedad z-index de la máscara personalizada.</td>
  </tr>
  <tr>
    <td>show</td>
    <td>Boolean</td>
    <td>Un indicador de si mostrar la máscara.</td>
  </tr>
  <tr>
    <td>onMaskTap</td>
    <td>Evento</td>
    <td>El evento que se desencadena cuando los usuarios tocan la máscara. El valor predeterminado es ```() => { }```.</td>
  </tr>
  <tr>
    <td>fixMaskFull</td>
    <td>Boolean</td>
    <td>Un indicador de si resolver la visualización incompleta de la máscara afectada por transformaciones. El valor predeterminado es ```false```.</td>
  </tr>
</table>


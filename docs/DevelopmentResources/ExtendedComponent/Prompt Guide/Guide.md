---
sidebar_position: 6
---

# Guía

Puedes usar el componente *guía* para enseñar a los usuarios a usar funciones en una máscara.

## Código de Ejemplo

Consulta los códigos de ejemplo en diferentes lenguajes:

### .json
```json
{
 "defaultTitle": "Guía",
 "usingComponents":{
   "guía": "mini-ali-ui/es/guide/index"
 }
}
```

### .axml
```xml
<guía
  show="{{mostrarGuía}}"
  hasJump="{{saltarGuía}}"
  guíaLista="{{lista}}"
  btn_siguiente="Paso siguiente"
  btn_saltar="Cerrar o Saltar"
  btn_finalizar="Finalizar"
  onGuíaTerminada="cerrarGuía"
  clicMáscara="{{true}}"
></guía>

<button size="default" type="primary" onTap="mostrarSaltarGuía">*Orientación que los usuarios pueden saltar*</button>
<button size="default" type="primary" onTap="mostrarGuía">*Orientación general*</button>
```

### .js
```javascript
Page({
 data: {
   lista: [
     {
       url: 'https://example.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
       x: '150rpx',
       y: '100rpx',
       ancho: '200px',
       alto: '300px',
     },
     {
       url: 'https://example.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
       x: '250rpx',
       y: '50rpx',
       ancho: '200px',
       alto: '100px',
     },
     {
       url: 'https://example.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
       x: '350rpx',
       y: '200rpx',
       ancho: '100px',
       alto: '300px',
     },
     {
       url: 'https://example.com/as/g/dnestFEGroup/dnestCompetFE/0.3.54/public/ii_bg1.49350b69.jpg',
       x: '400rpx',
       y: '200rpx',
       ancho: '200rpx',
       alto: '300rpx',
     },
   ],
 },
 onLoad() {},
 cerrarGuía() {
   this.setData({
     mostrarGuía: false,
   });
 },
});
```

## Parámetros

<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Required</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>btn_next</td>
    <td>String</td>
    <td>No</td>
    <td>Text on the button that guides users to the next step. The default value is ```Next step```.</td>
  </tr>
  <tr>
    <td>btn_jump</td>
    <td>String</td>
    <td>No</td>
    <td>Text on the button that allows users to skip the step. The default value is ```Skip```.</td>
  </tr>
  <tr>
    <td>btn_over</td>
    <td>String</td>
    <td>No</td>
    <td>Text on the button that is displayed on the last page. The default value is ```OK```.</td>
  </tr>
  <tr>
    <td>hasJump</td>
    <td>Boolean</td>
    <td>No</td>
    <td>An indicator of whether to display the skip button. The default value is ```false```.</td>
  </tr>
  <tr>
    <td>show</td>
    <td>Boolean</td>
    <td>No</td>
    <td>An indicator of whether to use a mask. The default value is ```false```.</td>
  </tr>
  <tr>
    <td>guideList</td>
    <td>Array</td>
    <td>Yes</td>
    <td>Content of each step. The default value is ```[]```.</td>
  </tr>
  <tr>
    <td>onGuideOver</td>
    <td>EventHandle</td>
    <td>No</td>
    <td>The event that is triggered when users skip or close the guidance. The default value is ```() => { }```.</td>
  </tr>
  <tr>
    <td>maskClick</td>
    <td>Boolean</td>
    <td>No</td>
    <td>An indicator of whether to trigger an event when users click the mask. The default value is false.</td>
  </tr>
</table>

**Notas:**

- Si el valor de *saltar* es `false`, los usuarios no pueden saltar pasos.
- Usa *guíaLista* para controlar el contenido, posición y tamaño de la imagen en cada paso. El tipo de *guíaLista* es array y el formato es `[{ url: '', x: '', y: '', ancho: '', alto: ''}]`:
  - *url*: URL de la imagen
  - *x*: coordenada x de la imagen
  - *y*: coordenada y de la imagen
  - *ancho*: ancho de la imagen
  - *alto*: alto de la imagen
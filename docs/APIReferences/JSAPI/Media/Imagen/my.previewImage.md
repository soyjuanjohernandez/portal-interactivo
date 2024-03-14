---
sidebar_position: 2
---

La "ruta de imagen local" de la imagen previa no es compatible.

## Código de muestra

```json title="json"
{
    "defaultTitle": "Picture"
}
```

```html title="axml"
<view class="page">
  <view class="page-section">
    <view class="page-section-btns">
      <view onTap="chooseImage">Select image</view>
      <view onTap="previewImage">Preview image</view>
      <view onTap="saveImage">Save image</view>
    </view>
  </view>
</view>
```

```js title="js"
Page({
  chooseImage() {
    my.chooseImage({
      sourceType: ['camera','album'],
      count: 2,
      success: (res) => {
        my.alert({
          content: JSON.stringify(res),
          
        });
      },
      fail:()=>{
        my.showToast({
          content: 'fail', // text contents 
        });
      }
    })
  },
  previewImage() {
    my.previewImage({
      current: 2,
      urls: [
        'https://img.example.com/example1.jpg',
        'https://img.example.com/example2.jpg',
        'https://img.example.com/example3.jpg'
      ],
    });
  },
  saveImage() {
    my.saveImage({
      url: 'https://img.example.com/example1.jpg',
      showActionSheet: true,
      success: () => {
        my.alert({
          title: 'Save success',
        });
      },
    });
  }
});
```

## Parámetros

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propieda</th>
        <th>Tip</th>
        <th>Requerid</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>urls</td>
        <td>Array</td>
        <td>Ye</td>
        <td>Lista de URL HTTP de las imágenes que se mostrarán en la vista previa.</td>
    </tr>
    <tr>
        <td>current</td>
        <td>Number</td>
        <td>No</td>
        <td>Índice de la imagen actualmente mostrada, 0 por defecto, indicando la primera imagen en los URL.</td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada(Callback) al éxito de la llamada.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada(Callback) al fracaso de la llamada.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>"Función de devolución de llamada(Callback) al completarse la llamada (para ser ejecutada tanto en caso de éxito como en caso de fracaso).</td>
    </tr>
</table>








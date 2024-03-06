---
sidebar_position: 4
---

Obtenga información de imágenes.

## Código de muestra

```html title="axml"
<view class="page">
  <view class="page-description">Get picture info API</view>
  <view class="page-section">
    <view class="page-section-title">my.getImageInfo</view>
    <view class="page-section-demo">
      <image src="{{src}}" onError="imageError" onLoad="imageLoad" />
      <button type="primary" onTap="getImageInfo">Get picture info</button>
    </view>
  </view>
</view>
```

```js title="js"
// Network picture path
my.getImageInfo({
  src:'https://img.example.com/example.jpg',
  success:(res)=>{
    console.log(JSON.stringify(res))
  }
})
    
//apFilePath
my.chooseImage({
  success: (res) => {
    my.getImageInfo({
      src:res.apFilePaths[0],
      success:(res)=>{
        console.log(JSON.stringify(res))
      }
    })
  },
})

//Relative path
my.getImageInfo({
  src:'image/api.png',
  success:(res)=>{
    console.log(JSON.stringify(res))
  }
})
```

## Parámetros

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>src</td>
        <td>String</td>
        <td>No</td>
        <td>Ruta de imagen, soporte de red de red, ruta de apfilepath y ruta relativa.</td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada (Callback) al éxito de la llamada.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada (Callback) al fracaso de la llamada.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada (Callback) al completarse la llamada (para ser ejecutada tanto en caso de éxito como en caso de fracaso)."</td>
    </tr>
</table>

### Función de devolución de llamada(Callback) con éxito.

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>width</td>
        <td>Number</td>
        <td>Ancho de imagen (en PX).</td>
    </tr>
    <tr>
        <td>height</td>
        <td>Number</td>
        <td>Altura de la imagen (en PX).</td>
    </tr>
    <tr>
        <td>path</td>
        <td>String</td>
        <td>Camino local de la imagen.</td>
    </tr>
    <tr>
        <td>orientation</td>
        <td>String</td>
        <td>Regrese la orientación de la imagen.Los valores efectivos se enumeran a continuación.</td>
    </tr>
    <tr>
        <td>type</td>
        <td>String</td>
        <td>Formato de imagen de regreso.</td>
    </tr>
</table>

### Descripción del parámetro de orientación

<table>
    <tr>
        <th>Enumerador</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>up</td>
        <td>Por defecto.</td>
    </tr>
    <tr>
        <td>down</td>
        <td>Rotación de 180 grados.</td>
    </tr>
    <tr>
        <td>left</td>
        <td>Gire por 90 grados en sentido antihorario.</td>
    </tr>
    <tr>
        <td>right</td>
        <td>Gire por 90 grados en sentido horario.</td>
    </tr>
    <tr>
        <td>up-mirrored</td>
        <td>Lo mismo que arriba, excepto por voltear horizontalmente.</td>
    </tr>
    <tr>
        <td>down-mirrored</td>
        <td>Lo mismo que hacia abajo, excepto por voltear horizontalmente.</td>
    </tr>
    <tr>
        <td>left-mirrored</td>
        <td>Igual que la izquierda excepto para voltear verticalmente.</td>
    </tr>
    <tr>
        <td>right-mirrored	</td>
        <td>Igual que el derecho excepto por voltear verticalmente.</td>
    </tr>
</table>





















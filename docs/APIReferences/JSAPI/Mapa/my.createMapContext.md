---
sidebar_position: 1
---

Llame a esta API para crear y devolver un objeto de contexto de mapa [mapContext](/).

Para obtener más información sobre los componentes relacionados, ver [map](/).

## Parámetro

<table>
    <tr>
        <th>Propiedad</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>mapId</td>
        <td>Yes</td>
        <td>La identificación del [map component](/).</td>
    </tr>
</table>


## Valor de retorno

El valor de retorno es [MapContext](/).

## Código de muestra

```html title="axml"
<view class="page-section">
      <map
        id="map"
        customMapStyle="light"
        longitude="{{longitude}}"
        latitude="{{latitude}}"
        scale="{{scale}}"
        controls="{{controls}}"
        onControlTap="controltap"
        markers="{{markers}}"
        onMarkerTap="markertap"
        polyline="{{polyline}}"
        polygon="{{polygon}}"
        circles="{{circles}}"
        onRegionChange="regionchange"
        onTap="tap"
        onCalloutTap="callouttap"
        show-location style="width: 100%; height: 200px;"
        include-points="{{includePoints}}"
        ground-overlays="{{ground-overlays}}">
      </map>
  </view>
```
## PageContext.setData(Object)

Llame a esta operación para inicializar o restablecer los datos del mapa.Los parámetros son opcionales.

### Código de muestra

```js title="js"
this.setData({
    scale: 14,
    longitude: 120.131441,
    latitude: 30.279383,
    'show-location':true,
    // Add a ground overlay. Feature added in v10.1.35.
    'ground-overlays':[{
        'include-points':[{// Upper-right
            latitude: 39.935029,
            longitude: 116.384377,
          },{// Lower-left
            latitude: 39.939577,
            longitude: 116.388331,
          }],
        image:'/image/groundoverlay.png',
        alpha:0.75,
        zIndex:0,
    }],
    // Add a tile overlay. It is a feature added in v10.1.35.
    'tile-overlay':{
      url:'http://xixi.fullspeed.cn/public/map',
      type:0,
      tileWidth:256,
      tileHeight:256,
      zIndex:1,
    },
    markers:[{},{}],
    'include-points':[{},{}],
    // New overview logic added in v10.1.35.
    'include-padding':{left:0, right:0, top:0, bottom:0},
    polyline: [{},{}],
    circles: [{},{}],
    controls: [{},{}],
    polygon: [{},{}],
    'include-padding':{},
    // Support settings at map initialization. It is a feature added in v10.1.50.
    setting:{
        // Gesture
        gestureEnable:0/1,
        // Scale
        showScale:0/1,
        // Compass
        showCompass:0/1,
        // Tilt gestures with both hands
        tiltGesturesEnabled:0/1,
        // Show or hide traffic
        trafficEnabled:0/1,                     
        // Map POI
        showMapText:0/1, 
        // Map logo position
        logoPosition:{centerX:150, centerY:90},                       
    },
});
```



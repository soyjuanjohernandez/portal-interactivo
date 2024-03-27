# MapContext.updateComponents

Actualiza el API del mapa de manera incremental.

## Parámetros

| Propiedad         | Tipo    | Descripción                                                  |
|-------------------|---------|--------------------------------------------------------------|
| latitude          | Number  | La latitud de la ubicación central.                          |
| longitude         | Number  | La longitud de la ubicación central.                         |
| scale             | Number  | Nivel de zoom. El valor varía de 5 a 18. El valor predeterminado es 16. |
| markers           | Array   | Marcadores de puntos que se superponen en el mapa.           |
| polyline          | Array   | Un conjunto de puntos consecutivos (una ruta) que se superpone en el mapa. |
| include-points    | Array   | Amplía ligeramente el mapa para incluir estos puntos.        |
| include-padding   | Object  | Muestra el mapa dentro del área que incluye rellenos.        |
| settings          | Object  | La configuración.                                            |

## Código de muestra

```js
this.mapCtx = my.createMapContext('map');
this.mapCtx.updateComponents({
  scale: 14,
  longitude: 103.863718,
  latitude: 1.351628,
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
    // Points of interest on the map
    showMapText:0/1,
    // Location of Amap logo
    logoPosition:{centerX:150, centerY:90},
  },
  markers:[{},{}],
  polyline:[{},{}],
  include-points:[{},{}],
  include-padding:{left:0, right:0, top:0, bottom:0},
});
```

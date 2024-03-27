# MapContext.showRoute

Obtener la ruta predeterminada para caminar planificada. Solo se muestra una ruta.

**Nota:** 

- Para mini programas lanzados en Alipay CN, las API relacionadas con mapas están respaldadas por Gaode Map.
- Para mini programas lanzados en otras aplicaciones asociadas de Alipay+, las API relacionadas con mapas están respaldadas por Google Maps. Estas llamadas de API tienen un costo, por lo que debe proporcionar su propia gAPIKey en lugar de usar la clave de API de la super aplicación. Contacte a nuestro soporte técnico para obtener más detalles.
- El simulador de IDE no puede obtener los valores de retorno. Utilice el entorno de desarrollo real para obtener los valores de retorno.

### Parámetros

<table>
<thead>
<tr>
<th>Propiedad</th>
<th>Tipo</th>
<th>Requerido</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>_searchType_</td>
<td>String</td>
<td>No</td>
<td>
Indica el modo de transporte.
Los valores válidos son:
- ```walk```: caminata
- ```bus```: transporte público
- ```drive```: manejo
- ```ride```: ciclismo
**Nota:** El valor predeterminado es ```walk```.
</td>
</tr>
<tr>
<td>startLat</td>
<td>Número</td>
<td>Sí</td>
<td>Indica la latitud del punto de inicio.</td>
</tr>
<tr>
<td>startLng</td>
<td>Número</td>
<td>Sí</td>
<td>Indica la longitud del punto de inicio.</td>
</tr>
<tr>
<td>endLat</td>
<td>Número</td>
<td>Sí</td>
<td>Indica la latitud del punto final.</td>
</tr>
<tr>
<td>endLng</td>
<td>Número</td>
<td>Sí</td>
<td>Indica la longitud del punto final.</td>
</tr>
<tr>
<td>throughPoints</td>
<td>Array</td>
<td>No</td>
<td>Para Google Maps:
Indica un conjunto de puntos a lo largo de la ruta. Este parámetro no está disponible cuando el valor de _searchType_ es bus, es decir, este parámetro está disponible cuando el valor de _searchType_ es ```walk```, ```drive``` o ```ride```.
Para Alipay CN (Gaode Map):
Indica un conjunto de puntos a lo largo de la ruta. Este parámetro solo está disponible para conducir, es decir, cuando el valor de _searchType_ es ```drive```.</td>
</tr>
<tr>
<td>routeColor</td>
<td>HexColor</td>
<td>No</td>
<td>Indica el color de la ruta. Este parámetro solo tiene efecto en mapas 2D.</td>
</tr>
<tr>
<td>iconPath</td>
<td>String</td>
<td>No</td>
<td>Indica la textura de la ruta. En la biblioteca base v1.11.0 y versiones anteriores, este parámetro tiene prioridad sobre routeColor en mapas 3D. Las rutas están cubiertas por textura en lugar de un color sólido. Se sugiere que este parámetro no se especifique en las versiones de la biblioteca base v1.13.0 y posteriores, porque se proporciona un patrón de textura predeterminado en mapas 3D. También se sugiere establecer el tamaño de la imagen en una potencia entera de 2, como 64*64.</td>
</tr>
<tr>
<td>iconWidth</td>
<td>Int</td>
<td>No</td>
<td>Indica el ancho de la textura. Este parámetro solo tiene efecto en la biblioteca base v1.11.0 y versiones anteriores. Se sugiere que este parámetro no se especifique en las versiones de la biblioteca base v1.13.0 y posteriores, porque se establece un ancho de textura predeterminado en mapas 3D.</td>
</tr>
<tr>
<td>routeWidth</td>
<td>Int</td>
<td>No</td>
<td>Indica el ancho de la ruta. Este parámetro solo tiene efecto cuando no se utiliza textura. Se sugiere que este parámetro no se especifique en las versiones de la biblioteca base v1.13.0 y posteriores, porque se establece un valor predeterminado en mapas 2D y ya no es necesario en mapas 3D.</td>
</tr>
<tr>
<td>zIndex</td>
<td>Int</td>
<td>No</td>
<td>El índice del eje Z de la superposición.</td>
</tr>
<tr>
<td>mode</td>
<td>Int</td>
<td>No</td>
<td>Indica diferentes modos de la ruta. Solo es compatible con los modos de conducción y tránsito público, es decir, cuando el valor de _searchType_ es ```drive``` o ```bus```. Para obtener más información, consulte los valores de modo.
**Nota:** Este parámetro solo está disponible para Alipay CN (Gaode Map).</td>
</tr>
<tr>
<td>city</td>
<td>String</td>
<td>Sí</td>
<td>Indica la ciudad de la ruta. Es obligatorio en el modo de tránsito público, es decir, cuando el valor de _searchType_ es ```bus```.
**Nota:** Este parámetro solo está disponible para Alipay CN (Gaode Map).</td>
</tr>
<tr>
<td>destinationCity</td>
<td>String</td>
<td>Sí</td>
<td>Indica la ciudad de destino donde termina la ruta. Este parámetro es obligatorio en el modo de tránsito público entre ciudades, es decir, cuando el valor de _searchType_ es ```bus```.
**Nota:** Este parámetro solo está disponible para Alipay CN (Gaode Map).</td>
</tr>
<tr>
<td>gAPIKey</td>
<td>String</td>
<td>No</td>
<td>
Indica la clave API necesaria para llamar a esta API. Para aprender cómo obtener _gAPIKey_, consulta la [clave API](/).
**Notas:**
- Este parámetro solo está disponible para Google Maps. Por defecto, se usa la clave API de la superaplicación.
- Si no proporcionas este parámetro y se impide que tu mini programa utilice la clave API de la superaplicación, se producirá un error al llamar a esta API.
</td>
</tr>
</tbody>
</table>

**Notas:** 

- Este parámetro solo está disponible para Google Maps. Por defecto, se utiliza la clave API de la super aplicación. Si no proporciona este parámetro y su mini programa se ve impedido de usar la clave API de la super aplicación, ocurrirá un error al llamar a esta API.

### Valores de modo

La siguiente tabla lista los valores de modo detallados, solo disponibles para Alipay CN (Gaode Map):

<table>
<thead>
<tr>
<th>Modo</th>
<th>Bus</th>
<th>Drive</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>Ruta más rápida</td>
<td>Primero la velocidad (tiempo)</td>
</tr>
<tr>
<td>1</td>
<td>Ruta más económica</td>
<td>Menor costo (Elija la ruta más rápida sin peaje)</td>
</tr>
<tr>
<td>2</td>
<td>Transferencias mínimas</td>
<td>Distancia más corta</td>
</tr>
<tr>
<td>3</td>
<td>Distancia de caminata más corta</td>
<td>Evitar autopistas</td>
</tr>
<tr>
<td>4</td>
<td>Ruta más acogedora</td>
<td>Planificación de ruta en tiempo real (para evitar atascos de tráfico)</td>
</tr>
<tr>
<td>5</td>
<td>Evitar el metro</td>
<td>Estrategias múltiples (considerando de manera integral las estrategias de velocidad, costo mínimo y distancia más corta)</td>
</tr>
<tr>
<td>6</td>
<td>-</td>
<td>Evitar autopistas</td>
</tr>
<tr>
<td>7</td>
<td>-</td>
<td>Evitar autopistas y peajes</td>
</tr>
<tr>
<td>8</td>
<td>-</td>
<td>Evitar peajes y atascos de tráfico</td>
</tr>
<tr>
<td>9</td>
<td>-</td>
<td>Evitar autopistas, peajes y atascos de tráfico</td>
</tr>
</tbody>
</table>

## API key

Puedes usar tu propia clave API al llamar a las APIs relacionadas con mapas respaldadas por Google Maps. Sigue los pasos a continuación para la configuración:

1. Obtén una clave API de Google: Sigue las instrucciones de Google para obtener una clave API, que es requerida al usar el servicio de Google Maps.

2. Encripta tu clave API de Google: Para encriptar tu clave API de Google, contacta a nuestro soporte técnico. Luego, reemplaza `ENCRYPTED_CUSTOM_GOOGLE_API_KEY` con tu clave API de Google encriptada:

```js
this.mapCtx.showRoute({   
  data: "",
  gAPIKey: "ENCRYPTED_CUSTOM_GOOGLE_API_KEY", // La clave API debe estar encriptada
  success: function (res) {   },
  fail: function (res) {  }
});
```

### Códigos de error

#### Google Maps

```js
{
    "success": false,
    "errorCode": 1900,
    "status": "INVALID_REQUEST",
    "errorMessage": "Se requieren exactamente dos puntos intermedios en las solicitudes de tránsito"
}
```

El código de error predeterminado es `1900` (compatible con Gaode Map, lo que significa que el código de error `1900` de Gaode Map se utiliza para lanzar cualquier instancia de error de Google Maps). Para obtener detalles sobre errores de Google Maps, consulte status y errorMessage. Tenga en cuenta que status corresponde a DirectionStatus en Google Maps. Para obtener más información, consulte [Estado de la consulta de direcciones](/) en la Plataforma de Google Maps.

#### Gaode Map

```js
{
    "success": false,
    "errorCode": 1900
}
```

Lo siguiente proporciona los códigos de error y descripciones de Gaode Map en diferentes sistemas operativos móviles:

- [Códigos de error de iOS](/)
- [Códigos de error de Android](/)

### Función de devolución de llamada exitosa

El parámetro entrante es un parámetro de objeto con los siguientes atributos:

<table>
<thead>
<tr>
<th>Propiedad</th>
<th>Tipo</th>
<th>Descripción</th>
</tr>
</thead>
<tbody>
<tr>
<td>success</td>
<td>Boolean</td>
<td>Especifica si la llamada de API es exitosa. Cuando el valor es verdadero, la llamada de API es exitosa.</td>
</tr>
<tr>
<td>distance</td>
<td>Number</td>
<td>Indica la distancia entre el punto de partida y el punto final.</td>
</tr>
<tr>
<td>duration</td>
<td>Number</td>
<td>Indica la duración del tiempo según la ruta planificada, en segundos.</td>
</tr>
</tbody>
</table>

### Código de ejemplo

```js
onReady() {
  // Llama a my.createMapContext para obtener el contexto del mapa.
  this.mapCtx.showRoute({
      searchType: "walk",         // searchType: "walk", "bus", "drive", "ride". Valor predeterminado: walk. Añadido en v10.1.50.
      startLat: 1.339712,        // Latitud del punto de inicio.
      startLng: 103.855457,       // Longitud del punto de inicio.
      endLat: 1.342983,         // Latitud del punto final.
      endLng: 103.867935,        // Longitud del punto final.
      throughPoints: [{ lat: 1.343573, lng: 103.861916 }],// Un conjunto de puntos a lo largo de la ruta. Solo está disponible para planificación de conducción, es decir, disponible cuando searchType="drive". Añadido en v10.1.50.
      routeColor: '#FFB90F',       // Color de la ruta. Este parámetro solo tiene efecto en mapas 2D en versiones posteriores a 10.1.50.
      iconWidth: 10,           // Ancho de la textura. En v10.1.35, este parámetro solo tiene efecto cuando se especifica iconPath. Se recomienda no especificar este parámetro en v10.1.50. Se establece un ancho de textura predeterminado en mapas 3D.
      routeWidth: 10,          // Ancho de la ruta. Este parámetro tiene efecto cuando no se utiliza textura. Se recomienda no especificar este parámetro en v10.1.50, porque se establece un valor predeterminado en mapas 2D y ya no es necesario en mapas 3D.
      zIndex: 4,             // Índice del eje Z de la superposición 10.1.35
      mode: 0,             // Solo compatible con modos de conducción y tránsito público. Para obtener más información sobre sus valores, consulta la lista de valores de modo a continuación.
      city: 'Singapur',         // Requerido en el modo de tránsito público.
      destinationCity: 'Singapur',    // Requerido en el modo de tránsito público entre ciudades.
      success:(res)=>{
      console.log(res.distance);
      console.log(res.duration);
    }
  });
},
onLoad() {
  //  this.mapCtx = my.createMapContext('map');
  this.mapCtx = my.createMapContext('map');
  this.setData({
    includePoints:[ {
      latitude: 1.347016,
      longitude: 103.860167,
    },{
      latitude: 1.351628,
      longitude: 103.863718,
    }]
  })
}
```

```xml
//.axml
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
```

### Ejemplo de la función de devolución de la llamada satisfactoria

```js
{
    "distance": 328,
    "duration": 262,
    "success": true
}
```
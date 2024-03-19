---
sidebar_position: 1
---

# Map

Fecha: 2022-11-04 05:47

Este tema introduce los componentes del mapa. Si se muestran varios componentes de mapa en la misma página, se requieren IDs diferentes. Los componentes del mapa son los componentes nativos en una aplicación, que tienen el nivel más alto en la jerarquía.

Nota: Para la API relacionada, consulta my.createMapContext(mapId).

## Prerrequisitos

Antes de comenzar, asegúrate de haber entendido los siguientes requisitos previos:

- No utilices los componentes de mapa en scroll-view.
- Los componentes de mapa no admiten animaciones CSS.
- Si el usuario hace zoom dentro o fuera del mapa, restablece el valor de escala en la función onRegionChange antes de establecer la latitud y longitud de la ubicación. De lo contrario, el mapa se restaura a su tamaño original. Consulta los códigos de muestra de regionchange para más detalles.
- El mini programa no admite la obtención de la latitud y longitud del mapa actual.

## Códigos de muestra

Consulta los siguientes códigos de muestra del componente de mapa:

```html
<view>
 <map id="map" longitude="103.855457" latitude="1.339712" scale="{{scale}}"
 markers="{{markers}}"
 onMarkerTap="markertap"
 polyline="{{polyline}}"
 circles="{{circles}}"
 onRegionChange="regionchange"
 onTap="tap"
 show-location style="width: 100%; height: 300px;"
 include-points="{{includePoints}}"></map>
 <button onTap="changeScale">changeScale</button>
 <button onTap="getCenterLocation">getCenterLocation</button>
 <button onTap="moveToLocation">moveToLocation</button>
 <button onTap="changeCenter">changeCenter</button>
 <button onTap="changeMarkers">changeMarkers</button>
</view>
```

```javascript
Page({
  data: {
    scale: 14,
    longitude: 103.855457,
    latitude: 1.339712,
    markers: [{
      iconPath: "/image/green_tri.png",
      id: 10,
      latitude:  1.342983,
      longitude: 103.867935,
      width: 50,
      height: 50
   },
              {
      iconPath: "/image/green_tri.png",
      id: 11,
      latitude: 1.343573,
      longitude: 103.861916,
      width: 50,
      height: 50,
   }],
    includePoints: [{
      latitude: 1.347016,
      longitude: 103.860167,
   }],
    polyline: [{
      points: [{
        longitude: 103.863218,
        latitude: 1.351628
     }, {
        longitude: 103.862718,
        latitude: 1.351428
     }, {
        longitude: 103.862218,
        latitude: 1.350828
     }, {
        longitude: 103.861718,
        latitude: 1.350428
     }, {
        longitude: 103.861018,
        latitude: 1.351028
     }],
      color: ```"#FF0000DD"```,
      width: 5,
   }],
    circles: [{
      latitude: 1.351628,
      longitude: 103.863718,
      color: ```"#000000AA"```,
      fillColor: ```"#000000AA"```,
      radius: 80,
      strokeWidth: 5,
   }],
 },
 
 onReady(e) {
   // Usa my.createMapContext para obtener el contexto del mapa.
   this.mapCtx = my.createMapContext('map')
 },
 
 // Resto del código de JavaScript omitido para la brevedad...
})
```

## Parámetros

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
      <td>id</td>
      <td>Cadena</td>
      <td>El ID para identificar el componente de mapa.</td>
    </tr>
    <tr>
      <td>estilo</td>
      <td>Cadena</td>
      <td>Estilo en línea.</td>
    </tr>
    <tr>
      <td>latitud</td>
      <td>Número</td>
      <td>La latitud del punto central.</td>
    </tr>
    <tr>
      <td>longitud</td>
      <td>Número</td>
      <td>La longitud del punto central.</td>
    </tr>
    <tr>
      <td>escala</td>
      <td>Número</td>
      <td>El nivel de zoom. El valor varía de ```5``` a ```18``` y es ```16``` por defecto.</td>
    </tr>
    <tr>
      <td>marcadores</td>
      <td>Array</td>
      <td>El marcador de ubicación. Ver marcadores para más detalles.</td>
    </tr>
    <tr>
      <td>polilínea</td>
      <td>Array</td>
      <td>La polilínea. Ver polilínea para más detalles.</td>
    </tr>
    <tr>
      <td>círculos</td>
      <td>Array</td>
      <td>El círculo. Ver círculos para más detalles.</td>
    </tr>
    <tr>
      <td>polígono</td>
      <td>Array</td>
      <td>El polígono. Ver polígono para más detalles.</td>
    </tr>
    <tr>
      <td>mostrar-ubicación</td>
      <td>Booleano</td>
      <td>
         Un indicador de si mostrar la ubicación actual. Cuando el valor es verdadero, se muestra la ubicación actual.
      </td>
    </tr>
    <tr>
      <td>incluir-puntos</td>
      <td>Array</td>
      <td className="p-no-margin">
        La vista se extiende en una pequeña escala con las coordenadas pasadas.
        Ejemplo:

        ```[{```

          ```latitud: 1.350428,```  

          ```longitud: 103.861718,```

        ```}]```

      </td>
    </tr>
    <tr>
      <td>incluir-relleno</td>
      <td>Objeto</td>
      <td className="p-no-margin">
        La vista se muestra dentro del relleno del mapa.
        Ejemplo:

        `[{`

            `left:0, right:0,`

            `top:0, bottom:0`

         `}]`

      </td>
    </tr>
    <tr>
      <td>ajuste</td>
      <td>Objeto</td>
      <td className="p-no-margin">
        Ajustes.
        Ejemplo:

        `{`		

            `activar-gestos: 1,	`

            `mostrar-escala: 1,`

            `mostrar-brújula: 1,`

            `activar-inclinación-gestos: 1,`

            `tráfico-activado: 0,`	

            `mostrar-texto-mapa: 0	`

         `}`

      </td>
    </tr>
    <tr>
      <td>al-marcar-tap</td>
      <td>Manejador de Eventos</td>
      <td className="p-no-margin">
        Llamar a esta función al hacer clic en el marcador.
        Ejemplo:

        `{`

            `idMarcador,`

            `latitud,`

            `longitud,`

        `}`

      </td>
    </tr>
    <tr>
      <td>al-cambiar-región</td>
      <td>Manejador de Eventos</td>
      <td className="p-no-margin">
        Llamar a esta función cuando la vista cambie.
        Ejemplo:

        `{`

            `tipo: "inicio/fin",`

            `latitud,`

            `longitud,`

            `escala`

        `}`

      </td>
    </tr>
    <tr>
      <td>al-tap</td>
      <td>Manejador de Eventos</td>
      <td className="p-no-margin">
        Llamar a esta función al hacer clic en el mapa.
        Ejemplo:

        ```{```   

            ```latitud,``` 

            ```longitud,```

        ```}```

      </td>
    </tr>
  </tbody>
</table>

## Marcadores

Especifica un marcador de ubicación que identifica una ubicación en el mapa.

**Notas:**
  - Con el parámetro `markers`, se pueden mostrar varios marcadores de ubicación.
  - La descripción del marcador de ubicación no admite inglés.

  Aquí está la tabla en HTML con la traducción solicitada:

  <table>
    <thead>
      <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Type</th>
        <th>Requerido</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>id</td>
        <td>El ID del marcador de ubicación, cuando se devuelve en la devolución de llamada del evento de clic.</td>
        <td>Number</td>
        <td>Sí</td>
      </tr>
      <tr>
        <td>latitude</td>
        <td>
          La latitud de la ubicación.
          Rango de valor: -90 - 90
        </td>
        <td>Flotante</td>
        <td>Sí</td>
      </tr>
      <tr>
        <td>longitude</td>
        <td>
          La longitud de la ubicación.
          Rango de valor: -180 - 180
        </td>
        <td>Flotante</td>
        <td>Sí</td>
      </tr>
      <tr>
        <td>width</td>
        <td>La anchura real de la imagen por defecto.</td>
        <td>Number</td>
        <td>No</td>
      </tr>
      <tr>
        <td>height</td>
        <td>La altura real de la imagen por defecto.</td>
        <td>Number</td>
        <td>No</td>
      </tr>
      <tr>
        <td>alpha</td>
        <td>La transparencia de la imagen. Por defecto, el valor es `1`, lo que significa que la imagen es totalmente opaca. Un valor de `0` significa totalmente transparente.</td>
        <td>Number</td>
        <td>No</td>
      </tr>
      <tr>
        <td>iconPath</td>
        <td>La ruta de la imagen en el directorio del proyecto, que no puede ser una ruta relativa, sino que solo puede ser una ruta absoluta que comience con /.</td>
        <td>Cadena</td>
        <td>Sí</td>
      </tr>
      <tr>
        <td>label</td>
        <td>Consulta label para más detalles.</td>
        <td>Objeto</td>
        <td>No</td>
      </tr>
    </tbody>
  </table>

## Polígono

Especifica una serie de coordenadas, que forman un polígono cerrado basado en los puntos.

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>points</td>
      <td className="p-no-margin">
      Una matriz de latitud y longitud.
      Ejemplo: 

      `[{`

        `latitude: 0,` 

        `longitude: 0`

      `}]

      </td>
      <td>Array</td>
      <td>Sí</td>
    </tr>
    <tr>
      <td>color</td>
      <td>
      El color de trazo. Usa números hexadecimales para establecer colores. 
      Ejemplo: ```#eeeeeeAA```
      </td>
      <td>String</td>
      <td>No</td>
    </tr>
    <tr>
      <td>fillColor</td>
      <td>
      El color de relleno. Usa números hexadecimales para establecer colores. 
      Ejemplo: ```#eeeeeeAA```
      </td>
      <td>String</td>
      <td>No</td>
    </tr>
    <tr>
      <td>width</td>
      <td>El ancho del trazo.</td>
      <td>Número</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

# polilínea

Especifica una serie de coordenadas que están conectadas desde el primer elemento hasta el último elemento en un array.

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Requerido</th>
  </tr>
  <tr>
    <td>points</td>
    <td>
      Una matriz de latitud y longitud.
      Ejemplo:

      ```js
      [{
      latitude: 0,
      longitude: 0
      }]
      ```

    </td>
    <td>Array</td>
    <td>Sí</td>
  </tr>
  <tr>
    <td>color</td>
    <td>
      El color de trazo. Usa números ```hexadecimales``` para establecer colores.
      Ejemplo: ```#eeeeeeAA```
    </td>
    <td>String</td>
    <td>No</td>
  </tr>
  <tr>
    <td>width</td>
    <td>El ancho del trazo.</td>
    <td>Número</td>
    <td>No</td>
  </tr>
</table>

# círculos

Muestra un círculo en el mapa.

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Requerido</th>
  </tr>
  <tr>
    <td>latitude</td>
    <td>
      La latitud. El valor oscila entre ```-90``` y ```90```.
    </td>
    <td>Float</td>
    <td>Sí</td>
  </tr>
  <tr>
    <td>longitude</td>
    <td>
      La longitud. El valor oscila entre ```-180``` y ```180```.
    </td>
    <td>Float</td>
    <td>Sí</td>
  </tr>
  <tr>
    <td>color</td>
    <td>
      El color de trazo. Usa números ```hexadecimales``` para establecer colores.
      Ejemplo: ```#eeeeeeAA```
    </td>
    <td>String</td>
    <td>No</td>
  </tr>
  <tr>
    <td>fillColor</td>
    <td>
      El color de relleno. Usa números ```hexadecimales``` para establecer colores.
      Ejemplo: ```#eeeeeeAA```
    </td>
    <td>String</td>
    <td>No</td>
  </tr>
  <tr>
    <td>radius</td>
    <td>El radio en metros.</td>
    <td>Número</td>
    <td>Sí</td>
  </tr>
  <tr>
    <td>strokeWidth</td>
    <td>El ancho del trazo.</td>
    <td>Número</td>
    <td>No</td>
  </tr>
</table>

# Diseño del marcador de ubicación

## label

<table>
  <tr>
    <th>Propiedad</th>
    <th>Requerido</th>
    <th>Nota</th>
  </tr>
  <tr>
    <td>content</td>
    <td>Sí</td>
    <td>-</td>
  </tr>
  <tr>
    <td>color</td>
    <td>No</td>
    <td>El valor predeterminado es ```#000000```.</td>
  </tr>
  <tr>
    <td>fontsize</td>
    <td>No</td>
    <td>El valor predeterminado es ```14```.</td>
  </tr>
  <tr>
    <td>borderRadius</td>
    <td>No</td>
    <td>El valor predeterminado es ```20```.</td>
  </tr>
  <tr>
    <td>bgColor</td>
    <td>No</td>
    <td>El valor predeterminado es ```#FFFFFF```.</td>
  </tr>
  <tr>
    <td>padding</td>
    <td>No</td>
    <td>El valor predeterminado es ```10```.</td>
  </tr>
</table>

### Preguntas frecuentes

- **¿Cómo redirigen los componentes del mapa el mini programa a Google Maps para la navegación?**

   Utiliza la API [my.openLocation](/).

- **¿Cómo obtener el valor de escala cuando la propiedad _optimize_ de los componentes del mapa está establecida en verdadero?**

   Utiliza la función `onRegionChange`.

- **¿Cómo crear el área de un polígono en el mapa manualmente?**

   Utiliza la propiedad _polygon_.

- **¿Cómo modificar los íconos del primer elemento y el último elemento en los componentes del mapa después de establecer _iconPath_?**

   Actualmente, la modificación no está soportada.

## Más información

- [my.createMapContext](https://example.com)
- [Visión general de MapContext](https://example.com)
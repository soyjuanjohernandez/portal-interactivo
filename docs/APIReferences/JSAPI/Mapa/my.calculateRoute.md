---
sidebar_position: 2
---

Llame a esta API para calcular la ruta.

:::note
* Para los mini programas lanzados a Alipay CN, las API relacionadas con el mapa están respaldadas por Gaode Map.
* Para los mini programas lanzados a otras aplicaciones de Alipay+ Partner, las API relacionadas con el mapa están respaldadas por Google Maps.Estas llamadas de API se cargan, por lo que debe proporcionar su propia GapiAkey en lugar de usar la clave API de la Super App.Póngase en contacto con nuestro soporte técnico para obtener detalles.
* El simulador IDE no puede obtener los valores de retorno.Use el entorno de desarrollo real para obtener los valores de retorno.
:::

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>searchType</td>
        <td>String</td>
        <td>No</td>
        <td>
            Indica el modo de transporte.
            <></>
            Los valores válidos son:
                * ``walk``: walking
                * ``bus``: public transit
                * ``drive``: driving
                * ``ride``: cycling
            <></>
            **Nota:** El valor predeterminado es ``walk``.
        </td>
    </tr>
    <tr>
        <td>startLat</td>
        <td>Number</td>
        <td>Yes</td>
        <td>Indica la latitud del punto de partida.</td>
    </tr>
    <tr>
        <td>startLng</td>
        <td>Number</td>
        <td>Yes</td>
        <td>Indica la longitud del punto de partida.</td>
    </tr>
    <tr>
        <td>endLat</td>
        <td>Number</td>
        <td>Yes</td>
        <td>Indica la latitud del punto final.</td>
    </tr>
    <tr>
        <td>endLng</td>
        <td>Number</td>
        <td>Yes</td>
        <td>Indica la longitud del punto final.</td>
    </tr>
    <tr>
        <td>throughPoints</td>
        <td>Array</td>
        <td>No</td>
        <td>
            Para Google Maps:
            <></>
            Indica un conjunto de puntos a lo largo de la ruta. Este parámetro no está disponible cuando el valor de *searchType* es ``bus``, es decir, este parámetro está disponible cuando el valor de *searchType* es ``walk``, ``drive``, o ``ride``.
            Para Alipay CN (Gaode Map):
            <></>
            Indica un conjunto de puntos a lo largo de la ruta. Este parámetro solo está disponible para conducir, es decir, cuando el valor de *searchType* es ``drive``.
        </td>
    </tr>
    <tr>
        <td>mode</td>
        <td>Number</td>
        <td>No</td>
        <td>
            Indica diferentes modos de la ruta. Solo es compatible con los modos de conducción y tránsito público, es decir, cuando el valor de *searchType* es ``drive`` o ``bus``. Para obtener más información, consulta los valores de modo.
            <></>
            **Nota:** Este parámetro solo está disponible para Alipay CN (Gaode Map).
        </td>
    </tr>
    <tr>
        <td>city</td>
        <td>String</td>
        <td>Yes</td>
        <td>
            Indica la ciudad de la ruta. Es requerido en el modo de tránsito público, es decir, cuando el valor de *searchType* es ``bus``.
            <></>
            **Nota:** Este parámetro solo está disponible para Alipay CN (Gaode Map).
        </td>
    </tr>
    <tr>
        <td>destinationCity</td>
        <td>String</td>
        <td>Yes</td>
        <td>
            Indica la ciudad de destino donde finaliza la ruta. Este parámetro es requerido en el modo de tránsito público entre ciudades, es decir, cuando el valor de *searchType* es ``bus``.
            <></>
            **Nota:** Este parámetro solo está disponible para Alipay CN (Gaode Map).
        </td>
    </tr>
    <tr>
        <td>gAPIKey</td>
        <td>String</td>
        <td>No</td>
        <td>
            Indica la clave API requerida para llamar a esta API. Para aprender cómo obtener *gAPIKey*, consulta la clave API.
            <></>
            **Notas:**
            * Este parámetro solo está disponible para Google Maps. Por defecto, se utiliza la clave API de la superaplicación.
            * Si no proporcionas este parámetro y se impide que tu mini programa utilice la clave API de la superaplicación, se producirá un error al llamar a esta API.
        </td>
    </tr>
</table>

## Valores de modo

La siguiente tabla enumera los valores de modo detallado, solo disponibles para Alipay CN (mapa Gaode):

<table>
    <tr>
        <th>Modo</th>
        <th>Bus</th>
        <th>Drive</th>
    </tr>
    <tr>
        <td>0</td>
        <td>Ruta más rápida</td>
        <td>Velocidad primero (tiempo)</td>
    </tr>
    <tr>
        <td>1</td>
        <td>Ruta más económica</td>
        <td>Menor costo (La ruta más rápida sin peajes)</td>
    </tr>
    <tr>
        <td>2</td>
        <td>Mínimo de trasbordos</td>
        <td>Distancia más corta</td>
    </tr>
    <tr>
        <td>3</td>
        <td>Distancia a pie más corta</td>
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
        <td>Múltiples estrategias (considerando de manera integral la velocidad primero, el menor costo y la distancia más corta)</td>
    </tr>
    <tr>
        <td>6</td>
        <td>-</td>
        <td>Evitar autopistas</td>
    </tr>
    <tr>
        <td>7</td>
        <td>-</td>
        <td>Evitar autopistas y carreteras de peaje.</td>
    </tr>
    <tr>
        <td>8</td>
        <td>-</td>
        <td>Evitar carreteras de peaje y atascos de tráfico.</td>
    </tr>
    <tr>
        <td>9</td>
        <td>-</td>
        <td>Evitar autopistas, carreteras de peaje y atascos de tráfico.</td>
    </tr>
</table>

## API key

Puede usar su propia clave API al llamar a las API relacionadas con el mapa respaldadas por Google Maps.Siga los pasos a continuación para la configuración:

1. Obtenga una clave API de Google: siga las instrucciones de Google para obtener una clave API, que se requiere al usar el servicio Google Maps.

2. Cifre su clave de Google API: para cifrar su clave de Google API, comuníquese con nuestro soporte técnico.Luego reemplazar ``ENCRYPTED_CUSTOM_GOOGLE_API_KEY`` with Su clave de API de Google cifrada:

```js title="js"
this.mapCtx.showRoute({   
  data: "",
  gAPIKey: "ENCRYPTED_CUSTOM_GOOGLE_API_KEY", // The API key must be encrypted
  success: function (res) {   },
  fail: function (res) {  }
});
```

## Códigos de error

### Google Maps

```json title="json"
{
    "success": false,
    "errorCode": 1900,
    "status": "INVALID_REQUEST",
    "errorMessage": "Exactly two waypoints required in transit requests"
}
```

El código de error predeterminado es ``1900`` (compatible con Gaode Map, lo que significa que el código de error ``1900`` de Gaode Map se utiliza para lanzar cualquier instancia de error de Google Maps). Para obtener detalles sobre errores en Google Maps, consulta el *status* y *errorMessage*. Ten en cuenta que *status* corresponde a *DirectionStatus* en Google Maps. Para obtener más información, consulta el estado de la consulta de direcciones en la Plataforma de Google Maps.

```json title="json"
{
    "success": false,
    "errorCode": 1900
}
```

A continuación se proporciona los códigos de error y las descripciones del mapa Gaode en diferentes sistemas operativos móviles:

* Códigos de error de iOS
* Códigos de error de Android

## Función de devolución de llamada(Callback) de éxito

El parámetro entrante es un parámetro de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>success</td>
        <td>Boolean</td>
        <td>Especifica si la llamada API es exitosa.Cuando el valor es ``true``, la llamada API es exitosa.</td>
    </tr>
    <tr>
        <td>distance</td>
        <td>Number</td>
        <td>Indica la distancia entre el punto de partida y el punto final.</td>
    </tr>
    <tr>
        <td>duration</td>
        <td>Number</td>
        <td>Indica el período de tiempo que pasó de acuerdo con la ruta planificada, en segundos.</td>
    </tr>
</table>


## Código de muestra

```js title="js"
my.calculateRoute({
  searchType: "walk",        // searchType: "walk", "bus", "drive", "ride". Valor por defecto: walk. Added in v10.1.50.
  startLat: 1.339712,        // La latitud del punto de partida.
  startLng: 103.855457,      // La longitud del punto de partida.
  endLat: 1.342983,          // La latitud del punto final.
  endLng: 103.867935,        // La longitud del punto final.
  throughPoints: [{ lat: 1.343573, lng: 103.861916 }], // Un conjunto de puntos a lo largo de la ruta.
  mode:0,                          // Solo disponible para Alipay CN
  city:'hangzhou',                 // Solo disponible para Alipay CN
  destinationCity:'hangzhou',      // Solo disponible para Alipay CN
  success:(res)=>{
    console.log(res.distance);
    console.log(res.duration);
  }
});
```

### Muestra de la función de devolución de llamada(Callback) de éxito

```json title="json"
{
    "distance": 328,
    "duration": 262,
    "success": true
}
```

### Muestra de la función de devolución de llamada(Callback) fallida

```json title="json"
{
    "success": false,
    "errorCode": 1900,
    "status": "INVALID_REQUEST",
    "errorMessage": "Exactly two waypoints required in transit requests"
}
```



















 










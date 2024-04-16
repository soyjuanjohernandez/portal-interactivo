---
sidebar_position: 1
---
# Integrate SDK components

Al integrar el SDK de iApminiprogram, las capacidades básicas de los miniprogramas se incluyen en su proyecto.Sin embargo, debido al tamaño del paquete y las preocupaciones de revisión de la tienda de aplicaciones, las capacidades mejoradas del SDK OIS IAPminiprogram no se incluyen de forma predeterminada.

Puede mejorar las capacidades SDK integrando los siguientes componentes SDK predefinidos:

- **Map**: Este componente permite a los usuarios implementar las capacidades de Google Map en sus miniprogramas.Para obtener más información, consulte [Integrar el componente del mapa](/).
- **Video**:Este componente permite a los usuarios reproducir videos en sus mini programa. Para obtener más información, [consulte Integrar el componente de video](/).
- **Lottie**: Este componente permite a los usuarios implementar las capacidades de Lottie en sus mini programa.Para obtener más información, [consulte Integrar el componente Lottie](/).
- **Livestreaming**: Este componente permite a los usuarios reproducir videos de transmisión en vivo en sus mini programa.Para obtener más información, consulte Integrar el [componente de transmisión en vivo](/).
- **Bluetooth**: TSu componente permite a los usuarios implementar las capacidades Bluetooth en sus mini-programas.Para obtener más información, consulte [Integrar el componente Bluetooth](/).
- **Biometric Authentication**: Este componente permite a los usuarios implementar las capacidades de autenticación biométrica en sus mini programas. Para obtener más información, consulte Integrar el [componente de autenticación biométrica](/).

:::info[Notas:]
Si un componente no está integrado, los mini programas encontrarán errores al llamar a JSAPIS relacionados con el componente.
Para las aplicaciones Super de terceros, si no integra ciertos componentes, se recomienda eliminar la documentación de JSAPI relacionada de su centro de documentación para evitar errores inesperados.
:::

##Integre el componente del mapa
Para permitir a los usuarios evocar un mapa en sus mini programa, debe integrar el componente del mapa en su proyecto.Para los usuarios de iOS, se admiten dos mapas para integrarse:

- [Google Maps](/): Lea esta sección para aprender sobre cómo integrar los mapas de Google en su aplicación.
- [Apple Maps](/): Lea esta sección para aprender sobre cómo integrar los mapas de Apple en su aplicación.


## Google Maps

### Paso 1: Agregue una clave al archivo Plist
Debido a las limitaciones del sistema iOS, debe agregar una clave específica con una descripción de privacidad al archivo PLIST antes de usar las capacidades.Por ejemplo, para usar las capacidades de ubicación, debe agregar las siguientes claves:

```xml
<key>NSLocationAlwaysAndWhenInUseUsageDescription</key>
<string>...</string>
<key>NSLocationAlwaysUsageDescription</key>
<string>...</string>
<key>NSLocationWhenInUseUsageDescription</key>
<string>...</string>
```
### Paso 2: Importar el componente del mapa
Luego, debe importar el componente MAP del SDK iAs IAPminiprogram en su proyecto.Consulte el siguiente código de muestra:
```js
let configuration = GRVConfiguration()
configuration.apiKeyForGoogleMaps = "YOUR_API_KEY"
// Make sure your default coordinates are relevant
configuration.defaultCoordinate = CLLocationCoordinate2D(latitude: 0, longitude: 0)
```

Cuando use el código de muestra anterior, tenga en cuenta las siguientes cosas:

- Package size: El componente del mapa contribuye aproximadamente 426 kb a su producto binario (ARM64 Arch).
- Properties: Al inicializar el SDK IAPMiniprogram, dos propiedades de ```GrvConfiguration``` (apiKeyForGoogleMaps y defaultCoordinate) deben establecerse correctamente:
    - *apiKeyForGoogleMaps*: Indica la clave de la API de Google que se requiere para usar Google Maps.Para obtener una clave de Google API, consulte el uso de [claves API en la documentación de Google](/).
    - *defaultCoordinate*: Indica las coordenadas predeterminadas, incluida la latitud y la longitud.Asegúrese de que sus coordenadas predeterminadas sean relevantes.

### (Opcional) Paso 3: evitar que los mini-programas específicos usen la clave API de su aplicación

Si un miniprograma no proporciona una clave de Google API, la clave API de su aplicación se usa de forma predeterminada.Para evitar cobrar las tarifas irrazonables de su aplicación en los servicios de Google Maps utilizados en miniprogramas específicos, debe evitar que los mini-programas usen la clave API de su aplicación.

Implemente grvmapCustomapikeyDelegate con el siguiente código:

```js
class DemoCustomAPIKeyDelegate: NSObject, GRVMapCustomAPIKeyDelegate {
  func canUseGoogleAPIKey(forApp appId: String) -> Bool {
    return false
  }
}
```

### Más información
Para obtener más información sobre los componentes del mapa, consulte los siguientes documentos:

- [map components](/)
- [my.createMapContext](/)
- [MapContext](/)



## Apple Maps
Para permitir a los usuarios evocar Apple Maps en sus mini-Programas, actualice su Podfile con el siguiente código:
```
pod 'IAPMiniProgram/AppleMap'
```

Para obtener más información sobre la JSAPI relacionada con el mapa, consulte [my.CreateMapContext](/).

## Integre el componente de video
Para permitir a los usuarios reproducir videos en sus mini programa, debe integrar el componente de video en su proyecto.

Actualice su podfile con el siguiente código:
```
pod 'IAPMiniProgram/Video'
```
Para obtener más información sobre el componente de video, consulte [my.createVideoContext](/).

## Integre el componente Lottie
Para permitir a los usuarios implementar las capacidades de Lottie en sus mini programa, debe integrar el componente Lottie en su proyecto.

Actualice su podfile con el siguiente código:
```
pod 'IAPMiniProgram/Lottie'
```
Para obtener más información sobre la JSAPI relacionada con el mapa, ver [my.createMapContext](/).

## Integrar el componente de transmisión en vivo
Para permitir a los usuarios reproducir videos de transmisión en vivo en sus miniprogramas, debe integrar el componente de transmisión en vivo en su proyecto.

Update your Podfile with the following code:
```
pod 'IAPMiniProgram/Media'
```
Para obtener más información sobre el componente de transmisión en vivo, consulte [my.createLivePlayerContext](/).

## Integre el componente Bluetooth
Para permitir a los usuarios implementar las capacidades Bluetooth en sus miniprogramas, debe integrar el componente Bluetooth en su proyecto.

Actualice su podfile con el siguiente código:
```
pod 'IAPMiniProgram/Bluetooth'
```
Para obtener más información sobre el componente Bluetooth, consulte [Bluetooth JSAPIs](/).

## Integre el componente de autenticación biométrica
Para permitir a los usuarios implementar capacidades de autenticación biométrica en sus mini programas, debe integrar el componente de autenticación biométrica en su proyecto.

Antes de integrarse, asegúrese de que su versión SDK de iAs IApminiprogram sea 2.51.1 o posterior.Luego complete las siguientes dos tareas para integrar este componente:

### Agregue una clave al archivo Plist
Para utilizar la capacidad de reconocimiento facial en los dispositivos iOS, debe incluir la clave NSFACEIDUSEGIDECTIVE en el archivo de información de su aplicación y proporcionar una cadena de propósito para esta clave.Para agregar la clave, consulte el siguiente código de muestra:
```js
<key>NSFaceIDUsageDescription</key>
<string>...</string>
```
### Actualizar podfile
Actualice su podfile con el siguiente código:
```
pod 'IAPMiniProgram/BioAuth'
```
### More information
Para obtener más información sobre el componente de autenticación biométrica, consulte D[escripción general de la API de autenticación biométrica](/).
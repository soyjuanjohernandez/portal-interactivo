---
sidebar_position: 1
---

# Integrar componentes SDK

Al integrar el SDK de Android IAPminiprogram, las capacidades básicas de los mini-programas se incluyen en su proyecto. Sin embargo, debido a las preocupaciones del tamaño del paquete, las capacidades mejoradas del SDK de Android IAPminiprogram no se incluyen de forma predeterminada.

Puede mejorar las capacidades SDK integrando los siguientes componentes SDK predefinidos:

* Mapa: este componente permite a los usuarios implementar las capacidades de Google Map en sus miniprogramas.Para obtener más información, consulte [Integrar el componente del mapa.](/)
* VIDEO: Este componente permite a los usuarios reproducir videos en sus miniprogramas.Para obtener más información, consulte [Integrar el componente de video.](/)
* Lottie: este componente permite a los usuarios implementar las capacidades de Lottie en sus miniprogramas.Para obtener más información, consulte [Integrar el componente Lottie.](/)
* Livestressreaming: este componente permite a los usuarios reproducir videos de transmisión en vivo en sus mini programa.Para obtener más información, consulte [Integrar el componente de transmisión en vivo.](/)
* Bluetooth: este componente permite a los usuarios implementar las capacidades de Bluetooth en sus mini programa.Para obtener más información, consulte [Integrar el componente Bluetooth.](/)
* Autenticación biométrica: este componente permite a los usuarios implementar las capacidades de autenticación biométrica en sus mini programas.Para obtener más información, consulte [Integrar el componente de autenticación biométrica.](/)

:::info

* Si un componente no está integrado, los mini programas encontrarán errores al llamar a JSAPIS relacionados con el componente.
* Para las aplicaciones Super de terceros, si no integra ciertos componentes, se recomienda eliminar la documentación de JSAPI relacionada de su centro de documentación para evitar errores inesperados.

:::

## Integrate the Map component
To allow users to call Google Maps in your mini-programs, you need to integrate the Map component into your project by taking the following steps:

### Paso 1: Integre el SDK de Google Maps
En primer lugar, necesita integrar el SDK de Google Maps tomando los siguientes pasos:

1. Obtenga una clave de Google API. Para obtener instrucciones paso a paso, consulte [Uso de las llaves API](/) en la documentación de Google.
2. Guarde la clave API en el archivo *local.properties* como se muestra a continuación.

```MAPS_API_KEY=YOUR_API_KEY```

3. Update the build.gradle file to inject the mapsApiKey variable into the AndroidManifest.xml file as below.

```js

android {
    defaultConfig {
        // ...
        // Establezca las propiedades dentro 'local.properties' en un 'Properties' clase para que valores
        // dentro `local.properties` (e.g. Maps API key) son accesibles en este archivo.
        Properties properties = new Properties()
        if (rootProject.file("local.properties").exists()) {
           properties.load(rootProject.file("local.properties").newDataInputStream())
        }
        manifestPlaceholders = [ mapsApiKey : properties.getProperty("MAPS_API_KEY", "") ]
    }
}

```


### Paso 2: Agregue el repositorio maven
Agregue el repositorio maven en su archivo *built.gradle* con el siguiente código:

```js
repositories{
    jcenter()
}
```

### Paso 3: Agregue las dependencias de los mapas
Agregue las dependencias de mapas en el app-level *build.gradle* con el siguiente código:

```js
dependencies {
    implementation "com.alipay.plus.android:iapminiprogram-gmap:${iapminiprogram_version}"
}
```

### (Opcional) Paso 4: evitar que los mini-programas específicos usen la clave API de su aplicación
Si un miniprograma no proporciona una clave de Google API, la clave API de su aplicación se usa de forma predeterminada.Para evitar cobrar las tarifas irrazonables de su aplicación en los servicios de Google Maps utilizados en miniprogramas específicos, debe evitar que los mini-programas usen la clave API de su aplicación. Da los siguientes pasos:

1. Implementar `` `GrivermapCustomapikeExExtension`` 'con cualquiera de los siguientes códigos:

**Kotlin**

```js
class DemoGriverMapCustomAPIKeyExtension: GriverMapCustomAPIKeyExtension {
    override fun canUseGoogleAPIKey(appId: String?): Boolean {
        return false
    }
}

```


**Java**

```js
public class DemoGriverMapCustomAPIKeyExtension implements GriverMapCustomAPIKeyExtension {
    @Override
    public boolean canUseGoogleAPIKey(String appId) {
        return false;
    }
}
```

2. Registre la ```Extension``` después de que el SDK se inicialice como se muestra a continuación.

```js
Griver.registerExtension(new GriverExtensionManifest(GriverMapCustomAPIKeyExtension.class, new DemoGriverMapCustomAPIKeyExtension()));
```

### Más información
Para obtener más información sobre los componentes del mapa, consulte los siguientes documentos:

* [map components](/)
* [my.createMapContext](/)
* [MapContext](/)


## Integre el componente de video
Para permitir a los usuarios reproducir videos en sus mini programa, debe integrar el componente de video en su proyecto.

Agregue las dependencias de video en el archivo ```build.gradle``` de nivel de la aplicación con el siguiente código:

```js
dependencies {
    implementation "com.alipay.plus.android:iapminiprogram-video:${iapminiprogram_version}"
}
```

Para obtener más información sobre el componente de video, consulte [my.CreateVideOcontext](/).



## Integrate the Lottie component
Para permitir a los usuarios implementar las capacidades de Lottie en sus mini programa, debe integrar el componente Lottie en su proyecto.

Agregue las dependencias de Lottie en el archivo *build.gradle* de nivel de la aplicación con el siguiente código:

```js
dependencies {
    implementation "com.alipay.plus.android:iapminiprogram-lottie:${iapminiprogram_version}"
}
```

For more information about the Lottie component, see [my.createLottieContext](/).


## Integre el componente Bluetooth
Para permitir a los usuarios implementar las capacidades Bluetooth en sus miniprogramas, debe integrar el componente Bluetooth en su proyecto.

Agregue las dependencias de Bluetooth al archivo *build.gradle* de nivel de la aplicación con el siguiente código:

```js
dependencies {
    implementation "com.alipay.plus.android:iapminiprogram-bluetooth:${iapminiprogram_version}"
}
```

Para obtener más información sobre el componente Bluetooth, [consulte Bluetooth JSAPIS](/).


## Integrata el componente de autenticación biométrica

Para permitir a los usuarios implementar capacidades de autenticación biométrica en sus mini programas, debe integrar el componente de autenticación biométrica en su proyecto.

Antes de integrarse, asegúrese de que su versión SDK de Android IAPMiniprogram sea 2.51.0 o posterior.Luego agregue las dependencias de autenticación biométrica al archivo Build.gradle a nivel de aplicación con el siguiente código:

```js

dependencies {
  implementation "com.alipay.plus.android:iapminiprogram-bio-auth:${iapminiprogram_version}"
}

```

Durante el proceso de embalaje de su aplicación, el SDK puede incluir automáticamente lo siguiente ```<uses-permission>``` elementos en el archivo manifiesto de la aplicación:

```xml
<uses-permission android:name="android.permission.USE_BIOMETRIC" />
<uses-permission android:name="android.permission.USE_FINGERPRINT" />
```

Para obtener más información sobre el componente de autenticación biométrica, consulte [Descripción general de la API de autenticación biométrica](/).


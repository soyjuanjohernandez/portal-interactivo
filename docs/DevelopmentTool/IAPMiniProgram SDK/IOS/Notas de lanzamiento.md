---
sidebar_position: 6
---

# Notas de lanzamiento

## v2.53.0
Fecha de lanzamiento: 2024-02-29

### Fixed
Aseguró las siguientes funciones del componente de [`input`](/) cuando el valor de tipo es el número:
- Muestra el teclado numérico.
- Limite correctamente la longitud de entrada que se especifica por maxlength.
## v2.52.0
Fecha de lanzamiento: 2024-01-31

### Mejorada
- Se agregó un archivo manifiesto de privacidad para declarar el uso de las API de razones requeridas, asegurando el cumplimiento de las políticas de privacidad de iOS.Para obtener más información, consulte la documentación de iOS sobre [los archivos manifiesto de privacidad](/).
- Mejoró el my.uploadfile jsapi de la siguiente manera:
    - Obsoleto el parámetro de fileType .
    - Se agregó el parámetro de *timeout* para habilitar los desarrolladores de mini-programas para establecer un período de tiempo de espera para las solicitudes.
    - Se agregó el parámetro de solicitud de *hideLoading*  para habilitar los desarrolladores de mini-programas para personalizar la visualización de un icono de carga durante el proceso de carga.
- Habilitó las API de  [fetchAppInfosByIds](/) y [fetchApps](/) para devolver la información de mini-Programa de acuerdo con la preferencia de idioma en el dispositivo del usuario.
### Fixed
Se solucionó un problema de borrador de caché con la API **fetchLaunchableGroupsWithCodes**, asegurando una pantalla de idioma correcta cuando cambia la preferencia de idioma del usuario.
## v2.51.1
Fecha de lanzamiento: 2024-01-09

### New
- Se agregó el componente de autenticación biométrica para la autenticación del usuario en mini programas, lo que permite el uso de huellas digitales o ID de cara.Para obtener más información, consulte [Integrar el componente de autenticación biométrica](/).
-Se agregó el componente de visión de cobertura para habilitar los desarrolladores de mini-programas para superponer una vista de texto sobre los componentes nativos.Para obtener más información, consulte [cover-view](/).
- Se agregó la funcionalidad de calificación del usuario, permitiendo que los usuarios de mini-programas califiquen y proporcionen revisiones para mini programas.
- Habilitó la propiedad de `titlePenetrate` en el atributo de ventana para permitir que los desarrolladores de mini-programas establezcan la capacidad de clic en la barra de navegación.Para obtener más información, consulte [window](/).
- Se agregó GRVSecurelocalStorageEncryptorProtocol para permitir que Super Apps cifre los datos locales almacenados a través de JSAPIS de almacenamiento local.Para obtener más información, consulte los [datos locales en cifrado para obtener una seguridad mejorada](/).
### Fixed
- Se solucionó el problema donde la barra de pestañas podía cubrir parcialmente el contenido de la página.
- Se corrigió un bloqueo potencial al consumir imágenes IconFont en páginas HTML5.
- Se corrigió un accidente ocasional al abrir páginas HTML5 en ciertas versiones de iOS.
- Se solucionó un problema con el selector de fecha causado por un error en `NSCalendar` en iOS 17.
- Se solucionó el problema donde las páginas HTML5 que se abrieron a través de my.pushwindow jsapi no podían recuperar los parámetros de inicio de la página HTML5 anterior.
## v2.50.2
Fecha de lanzamiento: 2023-11-24

### New
Se agregó español a los idiomas apoyados.Para obtener más información, consulte [idioma](/).

### Fixed
- Se solucionó el problema en el que los programas HTML5 mini no pudieron recuperar los parámetros de inicio con la llamada **my.getstartupparams** jsapi cuando se abrió a través de my.pushwindow jsapi.
- Eliminaron archivos no válidos que podrían representar riesgos de seguridad.
## v2.50.1
Fecha de lanzamiento: 2023-11-10

### Fixed
- Se solucionó un problema en iOS IApminiprogram SDK v2.50.0, donde faltaba la restricción de la versión en las descripciones de dependencia para IaPresourCemanager (el marco interno).
- Se solucionó un problema específico para los programas Mini Alipay+ D-Store en iOS IAPminiprogram SDK.La solución garantiza que el valor correcto se pase al parámetro de entrada de tipo de la función GetAuthCode para su implementación local de IAPWalletoAuthServicesignature.Puede ignorar esta solución si alguna de las siguientes situaciones se aplica a usted:
    - Nunca ha utilizado el parámetro de entrada de tipo mencionado.
    - Usted ha anulado la implementación del[ my.getAuthcode](/) JSAPI.
    - Su super aplicación no tiene ningún programa Alipay+ D-Store Mini.
## v2.50.0
Fecha de lanzamiento: 2023-10-27
:::INFO[Nota]
Esta versión de iOS IApminiprogram SDK v2.50.0 contiene un error crítico en IaPresourCemanager (el marco interno).Actualice a iOS IAPminiprogram SDK V2.50.1, que resuelve este problema.
:::

### New
- Árabe agregado a los idiomas apoyados.Para obtener más información, consulte el idioma.
- Habilitado para optimizar la entrega de recursos para programas H5+ Mini.
### Mejorada
- Se agregó la anotación de anulabilidad al grvurlnavigationEventDelegate y las interfaces GRVNavigationContext para mejorar la compatibilidad con Swift.
- Actualizó el [My.Request](/) JSapi de la siguiente manera:
    - Admitieron múltiples encabezados de cocción de juego en la respuesta.
    - Se agregó el parámetro de solicitud de habilito.
### Fixed
- Se corrigió el bloqueo potencial con [my.ChooseFileFromDisk](/) JSAPI.
- Se corrigió un posible bloqueo de la red.
- Se solucionó el problema de la funcionalidad de TabBar que causó que los clics en el TabBar interactúen involuntariamente con la página subyacente.
- Se corrigió el comportamiento potencial de no responder de la ventana emergente activada por el [my.datepicker](/) jsapi.
- Se solucionó el problema donde la URL dentro del Iflame no se actualizó en consecuencia cuando ocurrió una redirección 302.
- Se solucionó el problema donde el SDK de iAs iApminiprogram no se inicializó correctamente cuando se usó wkwebView antes de la inicialización de SDK.
- Se solucionó el problema en el que el componente de visión web de los mini programas DSL podría dejar de representar cuando la super aplicación se trasladó al primer plano en iOS 17.
## v2.47.0
Fecha de lanzamiento: 2023-08-11

### New
Carga de subpacaje habilitado en mini programas.Para obtener más información sobre esta función, consulte la carga de subpackage.
### Fixed
Se solucionó el problema de los botones de acción que no responden en una ventana emergente de selección de fechas que se activó llamando al my.datepicker jsapi varias veces.

## v2.45.6
Fecha de lanzamiento: 2023-07-10

### Fixed
Se solucionó el problema de que el color de la barra de navegación era permanentemente blanco en iOS 17 Beta pública.
## v2.45.1
Fecha de lanzamiento: 2023-06-28

### New
Se agregó la etiqueta `<youTube-player>` para admitir videos de YouTube en mini programas.

###Mejorado
Mejoró la integración con la función de compartir en el menú Más de Mini Programas agregando un nuevo punto de extensión ###.
### Fixed
Se corrigió el potencial se bloquea al usar componentes de configuración para guardar datos que contienen matrices.
## v2.44.0
Fecha de lanzamiento: 2023-05-30

### New
- Se agregó el [my.CreateLivePlayContext](/) Jsapi para admitir que la reproducción de videos de transmisión en vivo.
- Admitió la compilación XCode 14, que requiere una versión mínima del sistema de iOS 11.
- Apoyó el protocolo HTTP/3 para HTML5 IAPminiprogram SDK.
### Fixed
Se solucionó el problema donde la imagen de botón favorita personalizada no puede cambiar su color para adaptarse al tema de la barra de navegación.
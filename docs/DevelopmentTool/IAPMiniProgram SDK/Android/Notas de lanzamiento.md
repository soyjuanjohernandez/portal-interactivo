---
sidebar_position: 6
---

# Notas de lanzamiento

## v2.53.0

Fecha de lanzamiento: 2024-02-29

### Mejorada

Habilite la función [```page.onShareAppMessage```](/) para mostrar el panel compartido de forma predeterminada sin implementar la interfaz [```GriverSharePanelExtension```](/).

### Solucionado
- Asegura las siguientes funciones del componente [```input```](/) cuando el vaor del *type* es ```number```
    - Muestra el teclado numérico.
    - Limite correctamente la longitud de entrada que se especifica por MaxLength.
- Se solucionó el problema en el que la barra de pestaña no podía mostrar correctamente cuando se llamó al [my.reLaunch](/) jsapi para abrir una nueva página en ciertas circunstancias.
- Se solucionó un problema con el [my.getLocation](/) JSAPI para garantizar el servicio de ubicación adecuado al servicio de ubicación del dispositivo cuando GMS (Google Mobile Services) no estaba disponible.

## v2.52.0
Release date: 2024-01-31

### Mejorado
- Mejoró el[ my.uploadfile](/) jsapi de la siguiente manera:
    - Descargado el parámetro de solicitud del tipo de archivo.
    - Se agregó el parámetro de solicitud de tiempo de espera para habilitar los desarrolladores de mini-programas para establecer un período de tiempo de espera para las solicitudes.
    - Se agregó el parámetro de solicitud de ocultación para habilitar los desarrolladores de mini-programas para personalizar la visualización de un icono de carga durante el proceso de carga.
- Habilitó las API de [FetchAppinFolistByids](/) y [FetchApps](/) para devolver la información mini-Programa de acuerdo con la preferencia de idioma en el dispositivo del usuario.
### Solucionado
- Mejoró el inicio SDK para solucionar un problema ANR (aplicación que no responde) causado por una duración de inicio prolongada.
- Se solucionó un problema de borde de caché con la API FetchLaunchableSwithCodes, asegurando una pantalla de idioma correcta cuando cambia la preferencia de idioma del usuario.

## v2.51.0
Fecha de lanzamiento: 2024-01-09
### Nuevo
- Se agregó el componente de autenticación biométrica para la autenticación del usuario en mini programas, lo que permite el uso de huellas digitales o ID de cara. Para obtener más información, consulte Integrar [componente de autenticación biométrica](/).
-Se agregó el componente ```cover-view``` para habilitar los desarrolladores de mini-programas para superponer una vista de texto sobre los componentes nativos.Para obtener más información, consulte [cover-view](/).
- Se agregó la funcionalidad de calificación del usuario, permitiendo que los usuarios de mini-programas califiquen y proporcionen revisiones para mini programas.
- Se agregó soporte para Android 14 (TargetSDKVersion 34).
- Se agregó ```GriversecurityExtension``` para habilitar Super Apps para cifrar los datos locales almacenados a través de JSAPIS de almacenamiento local.Para obtener más información, consulte los [datos locales en cifrado para obtener una seguridad mejorada](/).
### Mejorado
- eliminó la necesidad de permisos de llamadas telefónicas del [my.getnetworktype](/) jsapi.
- eliminó la necesidad de permisos de álbum y audio del [my.ChooseFileFromDisk](/) JSAPI.
- eliminó la necesidad de permisos de álbum del [my.openDocument](/) jsapi.
- Eliminó la necesidad de permisos de álbum y audio de las selecciones de archivos con el elemento HTML ```<input>```.
### Solucionado
- Se solucionó un problema con la barra de título mini-programa, asegurando una fuente consistente y una alineación central completa del texto.
- Se solucionó los siguientes problemas que son específicos para el [my.chooseVideo](/) JSAPI:
    - Devuelto tamaños y dimensiones de video incorrectos.
    - devueltos rutas de video no deseadas.
- Se corrigió un bloqueo potencial de la aplicación que ocurrió al cambiar la aplicación al primer plano con un programa HTML5 abierto abierto, y el sistema recicló la aplicación en segundo plano.
- Se solucionó el problema donde el texto en las páginas de error no se podía mostrar correctamente bajo ciertos escenarios.
- Se solucionó el problema donde los archivos PDF se mostraron con distorsión cuando se abrieron a través del [my.openDocument](/) JSAPI.


## v2.50.3
Fecha de lanzamiento: 2023-11-24
### Nuevo
Se agregó español a los idiomas apoyados.Para obtener más información, consulte el [idioma](/).
### Mejorado
Mejoró la funcionalidad de los mini programas HTML5 para manejar archivos PDF de la siguiente manera:
- Apertura habilitada de archivos PDF que carecen de una extensión .pdf.
- Eliminó la página en blanco que apareció previamente durante el proceso de carga del archivo PDF.
### Solucionado
- Se solucionó el problema donde el my.getLocation JSAPI pasó un código de error incorrecto a los programas mini cuando el usuario deshabilitó el permiso de ubicación de la aplicación durante la llamada JSAPI.
- eliminó archivos y enlaces no válidos que podrían representar riesgos de seguridad.


## v2.50.2
Fecha de lanzamiento: 2023-10-27
### Nuevo
- Árabe agregado a los idiomas apoyados.Para obtener más información, consulte el [idioma](/).
- Se agregó un botón de retroceso a la barra de título tanto para HTML5 como para Mini Programas nativos.
- Habilitado para optimizar la entrega de recursos para programas H5+ Mini.
### Mejorado
Actualizó el [my.request](/) jsapi de la siguiente manera:
- Admitió múltiples encabezados de cocción de conjunto en la respuesta.
- Se agregó el parámetro de solicitud de habilito.
### Solucionado
- Se corrigió los errores ocasionales de cálculo de altura de la página que causaron el aumento del diseño de la página en los teléfonos inteligentes con botones virtuales después de salir de videos de pantalla completa.
- Se solucionó el problema donde la página de error de estado personalizada apareció en blanco en ciertos escenarios debido a los parámetros de consulta duplicada.
- Se corrigió el comportamiento de falta de respuesta del **Open File With** con el botón cuando el [my.openDocument](/) JSAPI no ha obtenido los permisos del sistema correspondientes.
- Se solucionó el problema donde la página Splash mostraba el nombre y el icono de mini-programas incorrectos al abrir un mini programa a través de los códigos QR para la vista previa o la depuración.
- Se solucionó el problema donde el diálogo de tostadas activado por la API [my.showToast](/) no se mostró en algunos dispositivos Huawei.
- Se solucionó el problema donde el parámetro de respuesta del idioma del [my.getSysteminfo](/) JSAPI no se actualizó de inmediato debido al almacenamiento en caché.

## v2.47.0
Fecha de lanzamiento: 2023-08-11
### Nuevo
Carga de subpacaje habilitado en mini programas.Para obtener más información sobre esta función, consulte la [carga de subpackage](/).
### Solucionado
- Se solucionó el problema donde las páginas HTML5 no se pueden abrir cuando sus URL incluyen el parámetro de consulta U.
- Se solucionó el problema en el que el título de la página del Mini Programa se mostró de manera anormal debido a la actualización de WebView del sistema Android.
#### Notas:
- Hemos migrado bibliotecas de soporte antiguas a las bibliotecas de Androidx desde esta versión.Para garantizar el rendimiento de SDK, se recomienda realizar una prueba de compatibilidad después de la integración.Para obtener más información sobre la migración, consulte la documentación de Android sobre[ Migrate a Androidx](/).
- De Android IAPminiprogram SDK V2.47.0, el SDK se adapta para admitir Google Maps Versión 21.0.1.Esta versión actualizada de Google Maps presenta cambios y mejoras de API.Para obtener más información, consulte la nota de [lanzamiento de Google el 13 de octubre de 2022](/). Si tiene una dependencia local de Google Maps, asegúrese de actualizar su biblioteca de ```play-services-location``` a la versión 21.0.1 o superior con los siguientes códigos de muestra:

```js
implementation 'com.google.android.gms:play-services-location:21.0.1'
```

## v2.45.1
Fecha de lanzamiento: 2023-07-12
### Solucionado
Se solucionó el problema de que el parámetro del encabezado en el [my.downloadfile](/) jsapi no se consumió cuando se aprobó.

## v2.45.0
Fecha de lanzamiento: 2023-06-28
### Nuevo
Se agregó la etiqueta ```<YouTube-player>``` para admitir que reproduce videos de YouTube en mini programas.
### Mejorado
Mejoró la integración con la función de compartir en el menú más de Mini Programas agregando un nuevo punto de extensión.
### Solucionado
- Se corrigió los siguientes dos problemas relacionados con la función previa:
    - El valor del parámetro de consulta obtenido cada vez son los parámetros iniciales de inicio al abrir un mini programa varias veces.
    - Problemas de conversión de formato al llamar al método ```getBackgroundFetchData``` en ciertos escenarios.
- Se corrigieron los choques en los siguientes escenarios:
    - Abra archivos PDF grandes
    - Llame al método ```addEmbedView``` al renderizar a través de componentes de representación de la misma capa
    - Comience a reproducir video cuando el estado de reproducción de los componentes del reproductor de video no lo admite
    - Pase los valores que incluyen el carácter especial ```/``` al método de ```openUrl```

## v2.44.1
Fecha de lanzamiento: 2023-06-15
### Solucionado
Se solucionó el problema de la pantalla de título anormal de la página en mini programas causados por la actualización del sistema WebView del sistema Android.

## v2.44.0
Fecha de lanzamiento: 2023-05-30
### Nuevo
Se agregó el My.CreateLivePlayContext Jsapi para admitir que la reproducción de videos de transmisión en vivo.
### Mejorado
Enlaces eliminados utilizando el protocolo HTTP del SDK de Android IAPminiprogram para mejorar la seguridad.
### Solucionado
Resuelto la incompatibilidad con Google Maps Versión 21.
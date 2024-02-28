---
sidebar_position: 1
---


# Referencia de JSAPI

## Básica

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.canIUse](/)</td>
      <td>Juzga si la API del programa MINI actual, el parámetro entrante o el valor de retorno, el componente, el atributo, etc. son compatibles con la versión actual.</td>
    </tr>
    <tr>
      <td>[my.SDKVersion](/)</td>
      <td>Obtiene la versión SDK.</td>
    </tr>
    <tr>
      <td>[my.getAppIdSync](/)</td>
      <td>Obtiene la ID de la aplicación mini programa sincrónicamente.</td>
    </tr>
    <tr>
      <td>[my.getRunScene](/)</td>
      <td>Obtiene la versión en ejecución del mini programa actual.</td>
    </tr>
  </tbody>
</table>

## Evento en la aplicación

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.offAppHide](/)</td>
      <td>No se indica el evento de que el Mini Programa se cambia a fondo desde primer plano.</td>
    </tr>
    <tr>
      <td>[my.offAppShow](/)</td>
      <td>No se indica el evento de que el Mini Programa se cambia a primer plano desde el fondo.</td>
    </tr>
    <tr>
      <td>[my.onAppHide](/)</td>
      <td>Indica el evento de que el mini programa se cambie a fondo desde primer plano.</td>
    </tr>
    <tr>
      <td>[my.onAppShow](/)</td>
      <td>Indica el evento de que el mini programa se cambie a primer plano desde el fondo.</td>
    </tr>
     <tr>
      <td>[my.offError](/)</td>
      <td>No se indica el evento de que los errores de JS ocurran en el mini programa.</td>
    </tr>
    <tr>
      <td>[my.onError](/)</td>
      <td>Indica el evento de que ocurran errores en el mini programa.</td>
    </tr>
    <tr>
      <td>[my.offUnhandledRejection](/)</td>
      <td>No se indica para el evento de detección de no control.</td>
    </tr>
    <tr>
      <td>[my.onUnhandledRejection](/)</td>
      <td>Indica el evento de revisión de no control.</td>
    </tr>
  </tbody>
</table>

## UI

### Barra de navegación

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.hideBackHome](/)</td>
      <td>Esconde de nuevo al botón de inicio.</td>
    </tr>
    <tr>
      <td>[my.showNavigationBarLoading](/)</td>
      <td>Mostrar carga de barra de navegación.</td>
    </tr>
    <tr>
      <td>[my.hideNavigationBarLoading](/)</td>
      <td>Ocultar la carga de la barra de navegación.</td>
    </tr>
    <tr>
      <td>[my.setNavigationBar](/)</td>
      <td>Establezca el texto y el estilo de la barra de navegación.</td>
    </tr>
  </tbody>
</table>

### Barra de pestañas.

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.hideTabBar](/)</td>
      <td>Oculta la barra de pestañas.</td>
    </tr>
    <tr>
      <td>[my.setTabBarStyle](/)</td>
      <td>Establezca el estilo de la barra de tabulación.</td>
    </tr>
  </tbody>
</table>
Nota: Para las preguntas frecuentes de la barra de pestañas, ver [Preguntas frecuentes de barra de pestañas](/).

### Ruta

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.switchTab](/)</td>
      <td>Salta a la página de TabBar especificada y cierre todas las demás páginas que no son TabBar.</td>
    </tr>
    <tr>
      <td>[my.navigateTo](/)</td>
      <td>Mantenga la página actual y salte a la página especificada dentro de la aplicación. Use 
      ```my.navigateback``` para volver a la página original.</td>
    </tr>
    <tr>
      <td>[my.navigateBack](/)</td>
      <td>Cierre la página actual y vuelva a la anterior una o más páginas.</td>
    </tr>
    <tr>
      <td>[my.redirectTo](/)</td>
      <td>Cierre la página actual y salte a la página especificada dentro de la aplicación.</td>
    </tr>
    <tr>
      <td>[my.reLaunch](/)</td>
      <td>Cierre todas las páginas actuales y salte a la página especificada dentro de la aplicación.</td>
    </tr>
  </tbody>
</table>

### Comentarios
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.alert](/)</td>
      <td>Cuadro de alerta.</td>
    </tr>
    <tr>
      <td>[my.confirm](/)</td>
      <td>Confirmar el cuadro.</td>
    </tr>
    <tr>
      <td>[my.prompt](/)</td>
      <td>Cuadro inmediato.</td>
    </tr>
    <tr>
      <td>[my.showLoading](/)</td>
      <td>Muestre la indicación de carga.</td>
    </tr>
    <tr>
      <td>[my.hideLoading](/)</td>
      <td>Ocultar la indicación de carga.</td>
    </tr>
    <tr>
      <td>[my.showToast](/)</td>
      <td>Muestre una indicación débil, que desaparece en los segundos especificados.</td>
    </tr>
    <tr>
      <td>[my.hideToast](/)</td>
      <td>Esconde la indicación débil.</td>
    </tr>
    <tr>
      <td>[my.showActionSheet](/)</td>
      <td>Muestra un menú de operación.</td>
    </tr>
  </tbody>
</table>

### Desplegable

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.startPullDownRefresh](/)</td>
      <td>Inicie la función pull-to-refresh.</td>
    </tr>
    <tr>
      <td>[onPullDownRefresh](/)</td>
      <td>En la página, personaliza la función onPullDownRefresh para indicar el evento pull-to-refresh del usuario.</td>
    </tr>
    <tr>
      <td>[my.stopPullDownRefresh](/)</td>
      <td>Detener el pull-to-refresh para la página actual.</td>
    </tr>
  </tbody>
</table>

### Contacto

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.choosePhoneContact](/)</td>
      <td>Seleccione un contacto del sistema.</td>
    </tr>
  </tbody>
</table>

### Seleccione Datos
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.datePicker](/)</td>
      <td>Abrir una lista de selección de fechas.</td>
    </tr>
  </tbody>
</table>

### Animación
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.createAnimation](/)</td>
      <td>Crear una instancia de animación.</td>
    </tr>
  </tbody>
</table>

### Canvas

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.createCanvasContext](/)</td>
      <td>Crea el contexto para canvas</td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre contexto de Canvas, ver [Contexto Canvas Descripción general](/).

### Teclado
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.hideKeyboard](/)</td>
      <td>Ocultar teclado</td>
    </tr>
  </tbody>
</table>

### Desplazarse
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.pageScrollTo](/)</td>
      <td>Desplácese hasta la ubicación de destino de la página.</td>
    </tr>
  </tbody>
</table>

### Consulta del selector
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.createSelectorQuery](/)</td>
      <td>Crear una instancia de la consulta del selector</td>
    </tr>
  </tbody>
</table>

### Selección de varios niveles
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.multiLevelSelect](/)</td>
      <td>Selector de varios niveles, utilizado para la selección asociada con varios niveles.</td>
    </tr>
  </tbody>
</table>

### Definir fondo
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.setBackgroundColor](/)</td>
      <td>Establece el color de fondo.</td>
    </tr>
  </tbody>
</table>

### Establecer página desplegable
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.setCanPullDown](/)</td>
      <td>Establece si la página puede soportar desplegables.</td>
    </tr>
  </tbody>
</table>

## Media

### Imagen
<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.chooseImage](/)</td>
      <td>Elige una imagen de la cámara o del álbum del móvil.</td>
    </tr>
    <tr>
      <td>[my.previewImage](/)</td>
      <td>Vista previa de la imagen.</td>
    </tr>
    <tr>
      <td>[my.saveImage](/)</td>
      <td>Guarda las imágenes en línea en el álbum del móvil.</td>
    </tr>
    <tr>
      <td>[my.getImageInfo](/)</td>
      <td>Obtener la información de la imagen.</td>
    </tr>
    <tr>
      <td>[my.compressImage](/)</td>
      <td>Comprime imágenes grandes para cumplir las restricciones de tamaño de algunos miniprogramas.</td>
    </tr>
  </tbody>
</table>

### Video

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.chooseVideo](/)</td>
      <td>Graba un vídeo o elige un vídeo del álbum.</td>
    </tr>
  </tbody>
</table>

### Lottie

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.createLottieContext](/)</td>
      <td>Crea y devuelve un objeto de contexto Lottie [lottieContext](/).</td>
    </tr>
  </tbody>
</table>

## Almacenamiento

<table>
  <thead>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>[my.getStorage](/)</td>
      <td>Obtener datos en caché.</td>
    </tr>
    <tr>
      <td>[my.getStorageSync](/)</td>
      <td>Obtener datos en caché de forma sincrónica.</td>
    </tr>
    <tr>
      <td>[my.setStorage](/)</td>
      <td>Almacena los datos de la clave especificada en la caché local, que se superponen a los datos originales correspondientes a la clave.</td>
    </tr>
    <tr>
      <td>[my.setStorageSync](/)</td>
      <td>Almacena los datos de la clave especificada en la caché local, que se superponen a los datos originales correspondientes a la clave.</td>
    </tr>
    <tr>
      <td>[my.removeStorage](/)</td>
      <td>Eliminar los datos almacenados en caché.</td>
    </tr>
    <tr>
      <td>[my.removeStorageSync](/)</td>
      <td>Eliminar datos en caché de forma sincrónica</td>
    </tr>
    <tr>
      <td>[my.clearStorage](/)</td>
      <td>Borra la caché de datos local.</td>
    </tr>
    <tr>
      <td>[my.clearStorageSync](/)</td>
      <td>Borra la caché de datos local de forma sincrónica.</td>
    </tr>
  </tbody>
</table>

## Archivo
<table>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
    <tr>
      <td>[my.saveFile](/)</td>
      <td>Guarda el archivo en el dispositivo.</td>
    </tr>
    <tr>
      <td>[my.getFileInfo](/)</td>
      <td>Obtener la información del archivo.</td>
    </tr>
    <tr>
      <td>[my.getSavedFileInfo](/)</td>
      <td>Obtiene la información del archivo guardado.</td>
    </tr>
    <tr>
      <td>[my.getSavedFileList](/)</td>
      <td>Obtiene la información de todos los archivos guardados.</td>
    </tr>
    <tr>
      <td>[my.removeSavedFile](/)</td>
      <td>Elimina el archivo guardado.</td>
    </tr>
     <tr>
      <td>[my.chooseFileFromDisk](/)</td>
      <td>Elegir un archivo para cargar.</td>
    </tr>
    <tr>
      <td>[my.openDocument](/)</td>
      <td>Permite a los usuarios previsualizar un archivo PDF dentro del miniprograma.</td>
    </tr>
</table>

## Ubicación
<table>
    <tr>
      <th>Nombre del API</th>
      <th>Descripción de la función</th>
    </tr>
    <tr>
      <td>[my.getLocation](/)</td>
      <td>Obtenga la ubicación geográfica actual del usuario.</td>
    </tr>
    <tr>
      <td>[my.openLocation](/)</td>
      <td>Vea la ubicación en el mapa incorporado.</td>
    </tr>
    <tr>
      <td>[my.chooseLocation](/)</td>
      <td>Abra el mapa incorporado para elegir una ubicación.</td>
    </tr>
</table>

## Mapa
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.createMapContext](/)</td>
        <td>Crea y devuelve un objeto de contexto de mapa mapContext.</td>
    </tr>
    <tr>
        <td>[my.calculateRoute](/)</td>
        <td>Calcula la ruta.</td>
    </tr>
</table>

## Red
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.request](/)</td>
        <td>Solicitud de red.</td>
    </tr>
    <tr>
        <td>[my.uploadFile](/)</td>
        <td>Cargue el recurso local al servidor de desarrolladores.</td>
    </tr>
    <tr>
        <td>[my.downloadFile](/)</td>
        <td>Descargue el recurso de archivo a la ubicación local.</td>
    </tr>
    <tr>
        <td>[my.connectSocket](/)</td>
        <td>Crea una conexión WebSocket.</td>
    </tr>
    <tr>
        <td>[my.onSocketOpen](/)</td>
        <td>Escuche el evento de habilitar la conexión WebSocket.</td>
    </tr>
    <tr>
        <td>[my.offSocketOpen](/)</td>
        <td>No se indique el evento de habilitar la conexión WebSocket.</td>
    </tr>
    <tr>
        <td>[my.onSocketError](/)</td>
        <td>Escuche los eventos de error de WebSocket.</td>
    </tr>
    <tr>
        <td>[my.offSocketError](/)</td>
        <td>No se deja a WebSocket Eventos de error.</td>
    </tr>
    <tr>
        <td>[my.sendSocketMessage](/)</td>
        <td>Enviar datos a través de la conexión WebSocket.</td>
    </tr>
    <tr>
        <td>[my.onSocketMessage](/)</td>
        <td>Escuche el evento de recibir mensajes del servidor por WebSocket.</td>
    </tr>
    <tr>
        <td>[my.offSocketMessage](/)</td>
        <td>No se indique el evento de recibir mensajes del servidor por WebSocket.</td>
    </tr>
    <tr>
        <td>[my.closeSocket](/)</td>
        <td>Cierre la conexión WebSocket.</td>
    </tr>
    <tr>
        <td>[my.onSocketClose](/)</td>
        <td>Escuche el evento de cerrar la conexión WebSocket.</td>
    </tr>
    <tr>
        <td>[my.offSocketClose](/)</td>
        <td>No se indique el caso de cerrar la conexión WebSocket.</td>
    </tr>
</table>

## Dispositivo
### Información del sistema

<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getSystemInfo](/)</td>
        <td>Obtener información del sistema.</td>
    </tr>
</table>

### Estado de la red
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getNetworkType](/)</td>
        <td>Obtener el estado actual de la red.</td>
    </tr>
</table>

### Portapapeles
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getClipboard](/)</td>
        <td>Obtenga los datos del portapapeles.</td>
    </tr>
    <tr>
        <td>[my.setClipboard](/)</td>
        <td>Establezca los datos del portapapeles.</td>
    </tr>
</table>

### Mira Shake
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.watchShake](/)</td>
        <td>La función de los WatchShake.</td>
    </tr>
</table>

### Acelerómetro
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.onAccelerometerChange](/)</td>
        <td>Indica el evento de datos de aceleración.</td>
    </tr>
    <tr>
        <td>[my.offAccelerometerChange](/)</td>
        <td>No se indica al evento de datos de aceleración.</td>
    </tr>
</table>

### Compass

<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

### Vibrate 
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
</table>

### Make Phone Call
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
</table>

### Get Server Time
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
</table>

### Capture Screen
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

### Screen Brightness
### Screen Orientation
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

### Settings
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

### Add Phone Contact
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
</table>

### Permission Guide
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
</table>

### Scan
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
</table>

### Memory Warning
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

### Battery Information
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <th></th>
        <th></th>
    </tr>
    <tr>
        <td></td>
        <td></td>
    </tr>
</table>

### Bluetooth
#### Reference
#### BLE
#### Bluetooth
### Biometric authentication
## Sharing
## Update
## web-view
## Alipay Connect
## Open Capabilities

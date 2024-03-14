---
sidebar_position: 2
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
      <td>[my.canIUse](./Básica/my.canIUse)</td>
      <td>Juzga si la API del programa MINI actual, el parámetro entrante o el valor de retorno, el componente, el atributo, etc. son compatibles con la versión actual.</td>
    </tr>
    <tr>
      <td>[my.SDKVersion](./Básica/my.SDKVersion)</td>
      <td>Obtiene la versión SDK.</td>
    </tr>
    <tr>
      <td>[my.getAppIdSync](./Básica/my.getAppIdSync)</td>
      <td>Obtiene la ID de la aplicación mini programa sincrónicamente.</td>
    </tr>
    <tr>
      <td>[my.getRunScene](./Básica/my.getRunScene)</td>
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
      <td>[my.offAppHide](./Evento%20en%20la%20aplicación/my.offAppHide)</td>
      <td>No se indica el evento de que el Mini Programa se cambia a fondo desde primer plano.</td>
    </tr>
    <tr>
      <td>[my.offAppShow](./Evento%20en%20la%20aplicación/my.offAppShow)</td>
      <td>No se indica el evento de que el Mini Programa se cambia a primer plano desde el fondo.</td>
    </tr>
    <tr>
      <td>[my.onAppHide](./Evento%20en%20la%20aplicación/my.onAppHide)</td>
      <td>Indica el evento de que el mini programa se cambie a fondo desde primer plano.</td>
    </tr>
    <tr>
      <td>[my.onAppShow](./Evento%20en%20la%20aplicación/my.onAppShow)</td>
      <td>Indica el evento de que el mini programa se cambie a primer plano desde el fondo.</td>
    </tr>
     <tr>
      <td>[my.offError](./Evento%20en%20la%20aplicación/my.offError)</td>
      <td>No se indica el evento de que los errores de JS ocurran en el mini programa.</td>
    </tr>
    <tr>
      <td>[my.onError](./Evento%20en%20la%20aplicación/my.onError)</td>
      <td>Indica el evento de que ocurran errores en el mini programa.</td>
    </tr>
    <tr>
      <td>[my.offUnhandledRejection](./Evento%20en%20la%20aplicación/my.offUnhandledRejection)</td>
      <td>No se indica para el evento de *unhandledrejection*.</td>
    </tr>
    <tr>
      <td>[my.onUnhandledRejection](./Evento%20en%20la%20aplicación/my.onUnhandledRejection)</td>
      <td>Indica el evento de *unhandledrejection*.</td>
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
      <td>[my.hideBackHome](./UI/Barra%20de%20navegación/my.hideBackHome)</td>
      <td>Esconde de nuevo al botón de inicio.</td>
    </tr>
    <tr>
      <td>[my.showNavigationBarLoading](./UI/Barra%20de%20navegación/my.showNavigationBarLoading)</td>
      <td>Mostrar carga de barra de navegación.</td>
    </tr>
    <tr>
      <td>[my.hideNavigationBarLoading](./UI/Barra%20de%20navegación/my.hideNavigationBarLoading)</td>
      <td>Ocultar la carga de la barra de navegación.</td>
    </tr>
    <tr>
      <td>[my.setNavigationBar](./UI/Barra%20de%20navegación/my.setNavigationBar)</td>
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
      <td>[my.hideTabBar](./UI/Barra%20de%20pestañas/my.hideTabBar)</td>
      <td>Oculta la barra de pestañas.</td>
    </tr>
    <tr>
      <td>[my.setTabBarStyle](./UI/Barra%20de%20pestañas/my.setTabBarStyle)</td>
      <td>Establezca el estilo de la barra de tabulación.</td>
    </tr>
  </tbody>
</table>
:::info[NOTA] 
Para las preguntas frecuentes de la barra de pestañas, ver [Preguntas frecuentes de barra de pestañas](./UI/Barra%20de%20pestañas/TabBar%20FAQs).
:::

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
      <td>[my.switchTab](./UI/Ruta/my.switchTab)</td>
      <td>Salta a la página de TabBar especificada y cierre todas las demás páginas que no son TabBar.</td>
    </tr>
    <tr>
      <td>[my.navigateTo](./UI/Ruta/my.navigateTo)</td>
      <td>Mantenga la página actual y salte a la página especificada dentro de la aplicación. Use 
      ```my.navigateback``` para volver a la página original.</td>
    </tr>
    <tr>
      <td>[my.navigateBack](./UI/Ruta/my.navigateBack)</td>
      <td>Cierre la página actual y vuelva a la anterior una o más páginas.</td>
    </tr>
    <tr>
      <td>[my.redirectTo](./UI/Ruta/my.redirectTo)</td>
      <td>Cierre la página actual y salte a la página especificada dentro de la aplicación.</td>
    </tr>
    <tr>
      <td>[my.reLaunch](./UI/Ruta/my.reLaunch)</td>
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
      <td>[my.alert](./UI/Comentario/my.alert)</td>
      <td>Cuadro de alerta.</td>
    </tr>
    <tr>
      <td>[my.confirm](./UI/Comentario/my.confirm)</td>
      <td>Confirmar el cuadro.</td>
    </tr>
    <tr>
      <td>[my.prompt](./UI/Comentario/my.prompt)</td>
      <td>Cuadro inmediato.</td>
    </tr>
    <tr>
      <td>[my.showLoading](./UI/Comentario/my.showLoading)</td>
      <td>Muestre la indicación de carga.</td>
    </tr>
    <tr>
      <td>[my.hideLoading](./UI/Comentario/my.hideLoading)</td>
      <td>Ocultar la indicación de carga.</td>
    </tr>
    <tr>
      <td>[my.showToast](./UI/Comentario/my.showToast)</td>
      <td>Muestre una indicación débil, que desaparece en los segundos especificados.</td>
    </tr>
    <tr>
      <td>[my.hideToast](./UI/Comentario/my.hideToast)</td>
      <td>Esconde la indicación débil.</td>
    </tr>
    <tr>
      <td>[my.showActionSheet](./UI/Comentario/my.showActionSheet)</td>
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
      <td>[my.startPullDownRefresh](./UI/Desplegable/my.startPullDownRefresh)</td>
      <td>Inicie la función pull-to-refresh.</td>
    </tr>
    <tr>
      <td>[onPullDownRefresh](./UI/Desplegable/onPullDownRefresh)</td>
      <td>En la página, personaliza la función onPullDownRefresh para indicar el evento pull-to-refresh del usuario.</td>
    </tr>
    <tr>
      <td>[my.stopPullDownRefresh](./UI/Desplegable/my.stopPullDownRefresh)</td>
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
      <td>[my.choosePhoneContact](./UI/Contacto/my.choosePhoneContact)</td>
      <td>Seleccione un contacto del sistema.</td>
    </tr>
  </tbody>
</table>

### Selector de Fecha
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
      <td>[my.createAnimation](./UI/Animaci%C3%B3n/my.createAnimation)</td>
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
      <td>[my.createCanvasContext](./UI/Canvas/my.createCanvasContext)</td>
      <td>Crea el contexto para canvas</td>
    </tr>
  </tbody>
</table>

Para obtener más información sobre contexto de Canvas, ver [Descripción general CanvasContext](./UI/Canvas/CanvasContext/Descripci%C3%B3n%20general%20CanvasContext).

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
      <td>[my.hideKeyboard](./UI/Teclado/my.hideKeyboard)</td>
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
      <td>[my.pageScrollTo](./UI/Desplazarse/my.pageScrollTo)</td>
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
      <td>[my.createSelectorQuery](./UI/Seleccione%20Datos/my.createSelectorQuery)</td>
      <td>Crear una instancia de la consulta del selector</td>
    </tr>
  </tbody>
</table>

:::info[NOTA]
Para obtener más información sobre SelectorQuery, consulte [Descripción general SelectorQuery](./UI/Seleccione%20Datos/Objeto%20SelectorQuery/Descripción%20general%20CanvasContext).
:::

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
      <td>[my.multiLevelSelect](./UI/Selección%20de%20varios%20niveles/my.multiLevelSelect)</td>
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
      <td>[my.setBackgroundColor](./UI/Definir%20fondo/my.setBackgroundColor)</td>
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
      <td>[my.setCanPullDown](./UI/Establecer%20página%20desplegable/my.setCanPullDown)</td>
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
      <td>Crea y devuelve un objeto de contexto Lottie [*lottieContext*](/).</td>
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
      <td>[my.getStorage](./Almacenamiento/my.getStorage)</td>
      <td>Obtener datos en caché.</td>
    </tr>
    <tr>
      <td>[my.getStorageSync](./Almacenamiento/my.getStorageSync)</td>
      <td>Obtener datos en caché de forma sincrónica.</td>
    </tr>
    <tr>
      <td>[my.setStorage](./Almacenamiento/my.setStorage)</td>
      <td>Almacena los datos de la clave especificada en la caché local, que se superponen a los datos originales correspondientes a la clave.</td>
    </tr>
    <tr>
      <td>[my.setStorageSync](./Almacenamiento/my.setStorageSync)</td>
      <td>Almacena los datos de la clave especificada en la caché local, que se superponen a los datos originales correspondientes a la clave.</td>
    </tr>
    <tr>
      <td>[my.removeStorage](./Almacenamiento/my.removeStorage)</td>
      <td>Eliminar los datos almacenados en caché.</td>
    </tr>
    <tr>
      <td>[my.removeStorageSync](./Almacenamiento/my.removeStorageSync)</td>
      <td>Eliminar datos en caché de forma sincrónica</td>
    </tr>
    <tr>
      <td>[my.clearStorage](./Almacenamiento/my.clearStorage)</td>
      <td>Borra la caché de datos local.</td>
    </tr>
    <tr>
      <td>[my.clearStorageSync](./Almacenamiento/my.clearStorageSync)</td>
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

### Brújula

<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.onCompassChange](/)</td>
        <td>Escucha el evento de cambio de datos de la brújula.</td>
    </tr>
    <tr>
        <td>[my.offCompassChange](/)</td>
        <td>Desactiva la escucha del evento de cambio de datos de la brújula.</td>
    </tr>
</table>

### Vibrar
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.vibrate](/)</td>
        <td>Invoca la capacidad de vibración del dispositivo.</td>
    </tr>
</table>

### Hacer una llamada telefónica
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.makePhoneCall](/)</td>
        <td>Hacer una llamada telefónica.</td>
    </tr>
</table>

### Obtener tiempo de servidor
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getServerTime](/)</td>
        <td>Obtiene el tiempo del servidor.</td>
    </tr>
</table>

### Captura de pantalla
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.onUserCaptureScreen](/)</td>
        <td>Escucha el evento de captura de pantalla por los usuarios.</td>
    </tr>
    <tr>
        <td>[my.offUserCaptureScreen](/)</td>
        <td>Cancela la escucha del evento de captura de pantalla por los usuarios.</td>
    </tr>
</table>

### Brillo de la pantalla
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.setKeepScreenOn](/)</td>
        <td>Establece si la pantalla se mantiene despierta.</td>
    </tr>
    <tr>
        <td>[my.getScreenBrightness](/)</td>
        <td>Obtiente el brillo de la pantalla.</td>
    </tr>
    <tr>
        <td>[my.setScreenBrightness](/)</td>
        <td>Establece el brillo de la pantalla.</td>
    </tr>
</table>

### Orientación de la pantalla
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getScreenOrientation](/)</td>
        <td>Obtiene orientación a la pantalla</td>
    </tr>
    <tr>
        <td>[my.setScreenOrientation](/)</td>
        <td>Establece orientación de pantalla</td>
    </tr>
</table>

### Ajustes
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.openSetting](/)</td>
        <td>Abre la página de configuración del mini programa.</td>
    </tr>
    <tr>
        <td>[my.getSetting](/)</td>
        <td>Obtiene la configuración actual del usuario.</td>
    </tr>
</table>

### Agregar contacto telefónico
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.addPhoneContact](/)</td>
        <td>Agrega el contacto al contacto telefónico.</td>
    </tr>
</table>

### Guía de permiso
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.showAuthGuide](/)</td>
        <td>Guía al usuario para otorgar la autorización cuando el permiso sea necesario.</td>
    </tr>
</table>

### Escanear
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.scan](/)</td>
        <td>Llama a la función de código de escaneo QR.</td>
    </tr>
</table>

### Advertencia de memoria
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.onMemoryWarning](/)</td>
        <td>Escucha el evento de alarma de memoria insuficiente.</td>
    </tr>
    <tr>
        <td>[my.offMemoryWarning](/)</td>
        <td>Desactiva la alarma de memoria insuficiente.</td>
    </tr>
</table>

### Información de la batería
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getBatteryInfo](/)</td>
        <td>Obtiene el nivel de batería y el estado de carga del dispositivo actual asincrónicamente.</td>
    </tr>
    <tr>
        <td>[my.getBatteryInfoSync](/)</td>
        <td>Obtiene el nivel de batería y el estado de carga del dispositivo actual sincrónicamente.</td>
    </tr>
</table>

### Bluetooth

#### Referencia
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[Bluetooth API Overview](/)</td>
        <td>Proporciona el requisito del sistema y el flujo del proceso sobre cómo funcionan las API Bluetooth.</td>
    </tr>
    <tr>
        <td>[Bluetooth API Error Codes](/)</td>
        <td>Enumera el código de error normal y las soluciones relativas.</td>
    </tr>
    <tr>
        <td>[Bluetooth API FAQ](/)</td>
        <td>Preguntas frecuentes sobre el uso de la API Bluetooth.</td>
    </tr>
</table>

#### BLE
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.connectBLEDevice](/)</td>
        <td>Conecta a dispositivos Bluetooth de baja energía.</td>
    </tr>
    <tr>
        <td>[my.disconnectBLEDevice](/)</td>
        <td>Desconecta los dispositivos Bluetooth de baja energía.</td>
    </tr>
    <tr>
        <td>[my.getBLEDeviceCharacteristics](/)</td>
        <td>Obtiene las características de los dispositivos Bluetooth de baja energía.</td>
    </tr>
    <tr>
        <td>[my.getBLEDeviceServices](/)</td>
        <td>Obtiene todos los dispositivos Bluetooth de baja energía que se descubran, incluidos los dispositivos conectados.</td>
    </tr>
    <tr>
        <td>[my.notifyBLECharacteristicValueChange](/)</td>
        <td>Habilita la función para notificar los cambios al valor característico.</td>
    </tr>
    <tr>
        <td>[my.offBLECharacteristicValueChange](/)</td>
        <td>Deshabilita la función para notificar los cambios al valor característico.</td>
    </tr>
    <tr>
        <td>[my.offBLEConnectionStateChanged](/)</td>
        <td>Deshabilita el oyente del evento para el estado de conexión.</td>
    </tr>
    <tr>
        <td>[my.onBLECharacteristicValueChange](/)</td>
        <td>Habilita al oyente de eventos para los cambios en el valor característico.</td>
    </tr>
    <tr>
        <td>[my.onBLEConnectionStateChanged](/)</td>
        <td>Habilita al oyente de eventos para los cambios en el estado de conexión, como el dispositivo perdido y desconectado del dispositivo.</td>
    </tr>
    <tr>
        <td>[my.readBLECharacteristicValue](/)</td>
        <td>Lea el valor característico.</td>
    </tr>
    <tr>
        <td>[my.writeBLECharacteristicValue](/)</td>
        <td>Escriba datos al valor característico.</td>
    </tr>
</table>

#### Bluetooth
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.closeBluetoothAdapter](/)</td>
        <td>Cierra el módulo Bluetooth en el mini programa.</td>
    </tr>
    <tr>
        <td>[my.openBluetoothAdapter](/)</td>
        <td>Inicializa el módulo Bluetooth en el mini programa.</td>
    </tr>
    <tr>
        <td>[my.getBluetoothAdapterState](/)</td>
        <td>Verifica el estado del adaptador Bluetooth en el mini programa.</td>
    </tr>
    <tr>
        <td>[my.startBluetoothDevicesDiscovery](/)</td>
        <td>Comienza a descubrir dispositivos Bluetooth.</td>
    </tr>
    <tr>
        <td>[my.stopBluetoothDevicesDiscovery](/)</td>
        <td>Deja de descubrir dispositivos Bluetooth.</td>
    </tr>
    <tr>
        <td>[my.getBluetoothDevices](/)</td>
        <td>Obtiene todos los dispositivos Bluetooth que se descubren, incluidos los que están conectados al dispositivo actual.</td>
    </tr>
    <tr>
        <td>[my.getConnectedBluetoothDevices](/)</td>
        <td>Obtiene los dispositivos Bluetooth que están conectados.</td>
    </tr>
    <tr>
        <td>[my.onBluetoothDeviceFound](/)</td>
        <td>Usa esta API cuando se encuentre un nuevo dispositivo Bluetooth.</td>
    </tr>
    <tr>
        <td>[my.offBluetoothDeviceFound](/)</td>
        <td>Retira los dispositivos Bluetooth que se encuentran.</td>
    </tr>
    <tr>
        <td>[my.onBluetoothAdapterStateChange](/)</td>
        <td>Monitorea los cambios en el estado del adaptador Bluetooth.</td>
    </tr>
    <tr>
        <td>[my.offBluetoothAdapterStateChange](/)</td>
        <td>Retira el adaptador Bluetooth con un cambio de estado.</td>
    </tr>
</table>

### Autenticación biométrica

<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.checkLocalBioAuthSupported](/)</td>
        <td>Verifica la disponibilidad de autenticación biométrica en el dispositivo del usuario.</td>
    </tr>
    <tr>
        <td>[my.startLocalBioAuth](/)</td>
        <td>Inicia un proceso de autenticación biométrica en el dispositivo del usuario.</td>
    </tr>
</table> 

## Intercambio
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.showSharePanel](/)</td>
        <td>Activa el intercambio.</td>
    </tr>
</table> 

## Actualizar
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getUpdateManager](/)</td>
        <td>Create an [*UpdateManager*](/) object.</td>
    </tr>
</table> 

## Vista web
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.createWebViewContext](/)</td>
        <td>Al crear ```WebViewContext```, Mini Program puede enviar un mensaje a ```Web-View```. Esta API creará una instancia de ```WebViewContext```.</td>
    </tr>
</table> 

## Conectar con Alipay
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.getSiteInfo](/)</td>
        <td>Obtiene la información del sitio asignado por Alipay Connect.</td>
    </tr>
</table> 


## Capacidades abiertas
<table>
    <tr>
        <th>Nombre del API</th>
        <th>Descripción de la función</th>
    </tr>
    <tr>
        <td>[my.navigateToMiniProgram](/)</td>
        <td>Salta a otro mini programa.</td>
    </tr>
    <tr>
        <td>[my.navigateBackMiniProgram](/)</td>
        <td>Regresa al mini programa anterior, solo cuando otro mini programa salta al mini programa actual.</td>
    </tr>
    <tr>
        <td>[my.getAuthCode](/)</td>
        <td>Obtiene código de autenticación.</td>
    </tr>
    <tr>
        <td>[my.getOpenUserInfo](/)</td>
        <td>Obtiene información básica sobre el usuario.</td>
    </tr>
    <tr>
        <td>[my.tradePay](/)</td>
        <td>Empienza a pagar.</td>
    </tr>
    <tr>
        <td>[my.signContract](/)</td>
        <td>Firma el contrato de retención.</td>
    </tr>
</table> 











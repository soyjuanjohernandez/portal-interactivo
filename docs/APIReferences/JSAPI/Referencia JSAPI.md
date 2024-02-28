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
      my.navigateback para volver a la página original.</td>
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

### Image
### Video
### Lottie

## Storage

## File

## Location

## Map

## Network

## Device

### System Information
### Network Status
### Clipboard
### Whatch Shake
### Accelerometer
### Compass
### Vibrate 
### Make Phone Call
### Get Server Time
### Capture Screen
### Screen Brightness
### Screen Orientation
### Settings
### Add Phone Contact
### Permission Guide
### Scan
### Memory Warning
### Battery Information
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

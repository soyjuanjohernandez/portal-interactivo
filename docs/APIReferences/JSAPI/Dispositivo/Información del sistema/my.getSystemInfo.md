---
sidebar_position: 1
---

# my.getSystemInfo

Obtiene información del sistema.

## Código de muestra

```js
Page({
  data: {
    systemInfo: {}
  },
  getSystemInfoPage() {
    my.getSystemInfo({
      success: (res) => {
        this.setData({
          systemInfo: res
        })
      }
    })
  },
})
```
## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (para ser ejecutado en el éxito de la llamada o el fracaso).</td>
     </tr>
</table>

### Función de devolución de llamada de éxito
El tipo de parámetro entrante es el objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>model</td>
        <td>String</td>
        <td>Modelo de teléfono celular</td>
     </tr>
     <tr>
        <td>pixelRatio</td>
        <td>Número</td>
        <td>Relación de píxel del dispositivo</td>
     </tr>
     <tr>
        <td>windowWidth</td>
        <td>Número</td>
        <td>Ancho de la ventana</td>
     </tr>
     <tr>
        <td>windowHeight</td>
        <td>Número</td>
        <td>Altura de la ventana</td>
     </tr>
     <tr>
        <td>language</td>
        <td>String</td>
        <td>El lenguaje establecido por el usuario en la aplicación. Si la aplicación no admite la configuración del idioma, devuelva el idioma del sistema.</td>
     </tr>
     <tr>
        <td>version</td>
        <td>String</td>
        <td>Número de versión de la aplicación.</td>
     </tr>
     <tr>
        <td>storage</td>
        <td>String</td>
        <td>Capacidad del disco del dispositivo.</td>
     </tr>
     <tr>
        <td>currentBattery</td>
        <td>String</td>
        <td>Porcentaje de batería actual</td>
     </tr>
     <tr>
        <td>system</td>
        <td>String</td>
        <td>Versión del sistema</td>
     </tr>
     <tr>
        <td>platform</td>
        <td>String</td>
        <td className='p-no-margin'>
            Nombre del sistema: 
            * Android
            * iOS
        </td>
    </tr>
    <tr>
        <td>titleBarHeight</td>
        <td>Número</td>
        <td>Altura de la barra de título</td>
     </tr>
     <tr>
        <td>statusBarHeight</td>
        <td>Número</td>
        <td>Altura de la barra de estado</td>
     </tr>
     <tr>
        <td>screenWidth</td>
        <td>Número</td>
        <td>Ancho de pantalla</td>
     </tr>
     <tr>
        <td>screenHeight</td>
        <td>Número</td>
        <td>Altura de la pantalla</td>
     </tr>
     <tr>
        <td>brand</td>
        <td>String</td>
        <td>Marca de teléfonos celulares</td>
     </tr>
     <tr>
        <td>fontSizeSetting</td>
        <td>Número</td>
        <td>Tamaño de fuente de configuración de usuario</td>
     </tr>
     <tr>
        <td>app</td>
        <td>String</td>
        <td>El cliente actual en el que se ejecuta el mini programa</td>
     </tr>
</table>

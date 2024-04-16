---
sidebar_position: 9
---

#  Mecanismos de operación del Mini program

## Descarga

El Mini program no necesita instalación. Cuando es utilizado por primera vez por el usuario, AppContainer descarga recursos del Mini Program desde el servidor. Los recursos descargados del Mini Program son almacenados en la aplicación móvil cliente por algún tiempo. Cuando el Mini Program con los recursos almacenados es abierto nuevamente, el proceso de descarga es omitido para que el Mini Program se abra más rápido.

## Arranque en Caliente y en Frío

- **Arranque en frio**: Cuando el usuario abre un Mini Program que no ha sido iniciado o ha sido destruido, esto se llama un inicio en frío. Aquí, el Mini Program inicia el proceso de inicialización. Cuando el proceso es completado, activa la función de devolución de llamada ```onLaunch```.
- **Arranque en caliente**: Cuando el usuario abre un Mini Program que ha sido abierto pero está corriendo en segundo plano, esto se llama un inicio en caliente. Aquí, el Mini Program no es destruido y reiniciado. En su lugar, es cambiado de segundo plano a primer plano. La función de devolución de llamada ```onLaunch``` no es activada.

## Ejecución en Primer Plano/Segundo Plano

- **Ejecución en primer plano:** Cuando el usuario abre un Mini Program por primera vez, el Mini Program corre en primer plano.

- **Ejecución en segundo plano:** Cuando el usuario hace clic en el botón de cerrar en la esquina superior derecha para cerrar el Mini Program o presiona el botón de inicio para salir de la Aplicación móvil, el Mini Program no es destruido pero es cambiado a segundo plano.

- **Cambio de segundo plano a primer plano:** Cuando el Mini Program que no ha sido destruido por el sistema es reabierto o reactivado, es cambiado de segundo plano a primer plano.
 
La función de devolución de llamada para el cambio de primer plano/segundo plano puede ser registrada en [app.js](/). Cuando el Mini Program cambia de segundo plano a primer plano, activa ```onShow```; conversamente activa ```onHide```.

## Cache

El sistema de caché local puede proveer la habilidad de almacenar, obtener y remover caché. Un Mini Program puede almacenar como máximo 10 MB de datos. Hay dos tipos de API: API sincrónica y API asincrónica. La API sincrónica bloqueará la tarea actual hasta que el método termine y la API asincrónica no bloqueará la tarea actual.

<table>
  <thead>
    <tr>
      <th>Operation</th>
      <th>Sync API</th>
      <th>Async API</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Store</td>
      <td>[my.setStorageSync](/)</td>
      <td>[my.setStorage](/)</td>
      <td>Almacena los datos según la clave; los datos originales serán sobrescritos si la clave es la misma.</td>
    </tr>
    <tr>
      <td>Get</td>
      <td>[my.getStorageSync](/)</td>
      <td>[my.getStorage](/)</td>
      <td>Lee datos de la caché.</td>
    </tr>
    <tr>
      <td>Remove</td>
      <td>[my.removeStorageSync](/)</td>
      <td>[my.removeStorage](/)</td>
      <td>Elimina datos específicos.</td>
    </tr>
    <tr>
      <td>Clear</td>
      <td>[my.clearStorageSync](/)</td>
      <td>[my.clearStorage](/)</td>
      <td>Elimina todos los datos de la caché.</td>
    </tr>
  </tbody>
</table>

## Destroy

Cuando el usuario hace clic en el botón de cerrar en la esquina superior derecha para cerrar el Mini Program, el Mini Program no es destruido, sino que se cambia a segundo plano. Solo cuando el Mini Program permanece en segundo plano durante algún tiempo o el consumo de recursos del sistema es demasiado alto, es realmente destruido.



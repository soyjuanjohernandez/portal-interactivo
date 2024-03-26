---
sidebar_position: 1
---

# Descripción general de UpdateManager

El objeto UpdateManager se utiliza para gestionar las actualizaciones del miniprograma. Llame a my.getUpdateManager para obtener una instancia de UpdateManager.

## Métodos

<table>
    <tr>
        <th>Nombre</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>[UpdateManager.applyUpdate](./UpdateManager.applyUpdate)</td>
        <td>Forzar para reiniciar el mini programa y actualizar a la última versión.Esta API se llama después de que se recibe la devolución de llamada OnUpdaterady, lo que significa que se descarga la nueva versión del Mini Programa.</td>
    </tr>
    <tr>
        <td>[UpdateManager.onCheckForUpdate](./UpdateManager.onCheckForUpdate)</td>
        <td>Escuche el evento de que se envíe una solicitud al servidor para verificar las actualizaciones.</td>
    </tr>
    <tr>
        <td>[UpdateManager.onUpdateReady](./UpdateManager.onUpdateReady)</td>
        <td>Escuche el evento en que hay una nueva versión de Mini Program disponible.</td>
    </tr>
    <tr>
        <td>[UpdateManager.onUpdateFailed](./UpdateManager.onUpdateFailed)</td>
        <td>Escuche el evento de que la actualización de Mini del programa falle.</td>
    </tr>
</table>

## Código de muestra

```js
const updateManager = my.getUpdateManager()

updateManager.onCheckForUpdate(function (res) {
  // Callback of onCheckForUpdate
  console.log(res.hasUpdate)
})

updateManager.onUpdateReady(function () {
  my.confirm({
    title: 'Update reminder',
    content: 'The new version is ready. Do you want to restart the mini program?',
    success: function (res) {
      if (res.confirm) {
        // Se descarga la nueva versión.Llame a updatemanager.applyupdate para reiniciar y aplique la nueva versión.
        updateManager.applyUpdate()
      }
    }
  })
})

updateManager.onUpdateFailed(function () {
  // La nueva versión del Mini Program no se puede descargar.
})
```


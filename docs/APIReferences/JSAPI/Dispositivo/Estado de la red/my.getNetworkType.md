---
sidebar_position: 1
---

# my.getNetworkType

Obtenga el estado de red actual.

## Código de muestra

```js
Page({
  data: {
    hasNetworkType: false
  },
  getNetworkType() {
    my.getNetworkType({
      success: (res) => {
        this.setData({
          hasNetworkType: true,
          networkType: res.networkType
        })
      }
    })
  },
  clear() {
    this.setData({
      hasNetworkType: false,
      networkType: ''
    })
  },
});
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
        <td>networkAvailable</td>
        <td>Boolean</td>
        <td>Si la red está disponible.</td>
     </tr>
     <tr>
        <td>networkType	</td>
        <td>String	</td>
        <td>Tipo de red, desconocido / NotReachable / wifi / 3g / 2g / 4g / wwan.</td>
     </tr>
</table>

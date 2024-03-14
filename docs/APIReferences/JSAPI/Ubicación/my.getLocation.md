---
sidebar_position: 1
---

Get the current geographical location of the user.

## Código de muestra

```js title="js"
my.getLocation({
  success(res) {
    my.hideLoading();
    console.log(res)
    that.setData({
      hasLocation: true,
      location: formatLocation(res.longitude, res.latitude)
    })
  },
  fail() {
    my.hideLoading();
    my.alert({ title: 'location failed' });
  },
})
```

## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>cacheTimeout</td>
        <td>Number</td>
        <td>No</td>
        <td>Longitud y latitud ubicación de caché Tiempo de vencimiento en segundos.El valor predeterminado es 30s.El uso de caché puede acelerar el proceso de ubicación.La reubicación se realiza al vencimiento de la memoria caché.</td>
    </tr>
    <tr>
        <td>type</td>
        <td>Number</td>
        <td>No</td>
        <td>0: predeterminado, obtenga la longitud y la latitud.</td>
    </tr>
    <tr>
        <td>success</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada(Callback) al éxito de llamadas.</td>
    </tr>
    <tr>
        <td>fail</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada(Callback) tras falla de llamada.</td>
    </tr>
    <tr>
        <td>complete</td>
        <td>Function</td>
        <td>No</td>
        <td>Función de devolución de llamada(Callback) al finalizar la llamada (se ejecutará al tener éxito o falla).</td>
    </tr>
</table>

### Función de devolución de llamad(Callback) de éxito

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>longitude</td>
        <td>String</td>
        <td>Longitud.</td>
    </tr>
    <tr>
        <td>latitude</td>
        <td>String</td>
        <td>Latitud.</td>
    </tr>
    <tr>
        <td>accuracy</td>
        <td>String</td>
        <td>Precisión, en m.</td>
    </tr>
</table>

## Código de error

<table>
    <tr>
        <th>Error</th>
        <th>Descripción</th>
        <th>Solución</th>
    </tr>
    <tr>
        <td>11</td>
        <td>Asegúrese de que el derecho relacionado con la ubicación haya sido habilitado.</td>
        <td>Solicite al usuario que habilite el permiso de ubicación.</td>
    </tr>
    <tr>
        <td>12</td>
        <td>Anormidad de la red, intente nuevamente más tarde.</td>
        <td>Solicite al usuario que verifique la red actual.</td>
    </tr>
    <tr>
        <td>13</td>
        <td>Falla de ubicación, intente nuevamente más tarde.</td>
        <td>-</td>
    </tr>
    <tr>
        <td>14</td>
        <td>Tiempo de espera de ubicación de servicio.</td>
        <td>Solicite al usuario que vuelva a intentarlo.</td>
    </tr>
</table>




















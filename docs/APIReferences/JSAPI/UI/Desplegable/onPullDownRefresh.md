---
sidebar_position: 2
---

# onPullDownRefresh

En la página, personalice la función OnpuldownRefresh para escuchar el evento pull-to-Fresh del usuario.

* Las opciones ```"pullRefresh": verdadero``` deben configurarse en el archivo de configuración ```.json``` de la página relacionada para habilitar el evento pull-to-Refresh.
* Cuando la actualización de datos se procese por completo, llame a ```my.stoppuldownrefresh``` para detener el retiro para refrescar para esa página.

## Código de muestra

En el archivo de configuración de ```pull-down-refresh.json```, la configuración del código es la siguiente:

```js
{
    "pullRefresh": true
}
```

En la página, defina la función de procesamiento onPullDownRefresh:

```js
onPullDownRefresh() {
    console.log('onPullDownRefresh', new Date())
}
```

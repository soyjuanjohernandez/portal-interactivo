---
sidebar_position: 4
---

# my.onAppShow
Escuche el evento de que el mini programa se cambie a fondo desde primer plano.El tiempo desencadenado de la API es el mismo con el del método(/) [```onShow()```](/). Para no admitir el evento de que el mini programa se cambia a fondo desde primer plano, ver [my.offAppShow](/).

## Código de muestra

.axml

```js
<!-- .axml-->
<button size="default" onTap="offAppShowHanlder" type="primary">Unlisten for the event that the mini program is switched to foreground from background</button>
```

.js

```js
//.js
onLoad() {
    my.onAppShow(this.onAppShowHandler)
},
//El método indica el evento de que el mini programa se cambie a primer plano desde el fondo
onAppShowHandler() {
    console.log('The mini program is switched to foreground from background')
},
//El método no indica el evento que el mini programa se cambie a primer plano desde el fondo
offAppShowHanlder() {
    my.offAppShow(this.onAppShowHandler)
},
apphide() {
    console.log('The mini program is switched to background from foreground')
}
```

## Parámetros
El parámetro está en tipo de objeto y tiene la siguiente propiedad:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>callback</td>
        <td>Función</td>
        <td>La función de devolución de llamada para el evento de que el mini  programa se cambie a primer plano desde el fondo. Para obtener más información sobre los parámetros de devolución de llamada, mira [metodo](/) [```onShow()```](/).</td>
     </tr>
</table>
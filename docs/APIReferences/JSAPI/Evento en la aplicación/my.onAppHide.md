---
sidebar_position: 3
---

# my.onAppHide
Indica el evento de que el mini programa se cambie a fondo desde primer plano. El tiempo desencadenado de la API es el mismo con el del onHide() método [```onHide()```](/).Para no admitir el evento de que el mini programa se cambie a fondo desde primer plano, vea [my.offAppHide](/).

## Código de muestra

.axml

```js
<!-- .axml-->
<button size="default" onTap="offAppHideHanlder" type="primary">Unlisten for the event tha the mini program is switched to background</button>
```

.js

```js
//.js
onLoad() {
    my.onAppHide(this.onAppHideHandler)
},
// El método de escuchar el evento de que el mini programa se cambie a fondo
onAppHideHandler() {
    console.log('The method of listening for the event that the mini program is switched to background')
},
// El método de no admitir para el evento de que el mini programa se cambie a fondo
offAppHideHanlder() {
    my.offAppHide(this.onAppHideHandler)
},
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
        <td>La función devolución de llamada para el caso de que el miniprograma se cambie a fondo.</td>
     </tr>
</table>
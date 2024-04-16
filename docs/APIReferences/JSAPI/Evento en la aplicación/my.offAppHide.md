---
sidebar_position: 1
---

# my.offAppHide

No se indique el evento de que el Mini Programa se cambia a fondo desde primer plano.

## Código de muestra
.axml

```js
<!-- .axml-->
<button size="default" onTap="offAppHideHanlder" type="primary">Unlisten for the event that the mini program is switched to background</button>
```
.js

```js
//.js
onLoad() {
    my.onAppHide(this.onAppHideHandler)
},
// El método de escuchar el evento de que el mini programa se cambie a fondo desde primer plano
onAppHideHandler() {
    console.log('The method of listening for the event that the mini program is switched to background from foreground')
},
// El método de no admitir el evento de que el mini programa se cambie a fondo desde primer plano
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
        <td>La función de devolución de llamada para el evento de que el mini programa se cambie a fondo.</td>
     </tr>
</table>
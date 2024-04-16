---
sidebar_position: 2
---

# my.offAppShow
No se indique el evento de que el mini Programa se cambia a primer plano desde el fondo.

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
//El método de escuchar el evento de que el mini programa se cambie a primer plano desde el fondo
onAppShowHandler() {
    console.log('The mini program is switched to foreground from background')
},
//El método de no apalancamiento para el evento de que el mini programa se cambie a primer plano desde el fondo
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
        <td>La función devolución de llamada para el caso de que el miniprograma pase a primer plano.</td>
     </tr>
</table>
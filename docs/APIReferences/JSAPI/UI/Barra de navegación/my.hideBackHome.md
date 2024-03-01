---
sidebar_position: 1
---

# my.hideBackHome

Use esta API para ocultar el botón de inicio en la barra de navegación superior y la opción de retorno de casa en la barra de pestaña en la esquina superior derecha.

**Notas:**

* De manera predeterminada, el botón de inicio se muestra si la página en la que un usuario entra al iniciar el programa MINI no es la página de inicio.
* Si la barra de pestaña está configurada para redirigir a páginas/índice/index en el app.json, no se muestra la opción return-home.

## Código de muestra

```js
//.js
Page({
  onReady() {
    if (my.canIUse('hideBackHome')) {
      my.hideBackHome();
    }
  },
});
```
```js
//.js
onLoad(){
    my.reLaunch({
    url:'../swiper/swiper'// Una página agregada que no sea la página de inicio
  })
  
  setTimeout(() => {
    //Ocultar el botón de inicio después de 5 segundos
    my.hideBackHome()
  }, 5000)
}
```
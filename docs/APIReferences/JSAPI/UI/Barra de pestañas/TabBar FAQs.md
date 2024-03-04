---
sidebar_position: 3
---

# Preguntas frecuentes de la barra de pestañas

## Preguntas frecuentes de funciones compatibles

### P: ¿La página de la barra de pestaña admite redireccionamiento con parámetros?
R: Sí, la página de la barra de pestaña es compatible con los parámetros.

### P: ¿La ubicación de la barra de pestaña admite que se establece en la parte superior?
R: La ubicación de la barra de pestañas no admite la configuración personalizada ahora.

### P: How to monitor tab bar tapping events?
R: Puede monitorear eventos de tapping de barra de pestañas usando ```onTabItemTap``` en el mini programa.

### P: ¿El icono de la barra de tabulación admite el formato SVG?
R: El formato SVG no es compatible. Solo se admiten los formatos png/jpeg/jpg/gif.

### P: ¿Cómo establecer el estilo de la barra de pestaña?
R: Puede establecer el estilo de la barra de tabulación en el JSON, que se muestra de la siguiente manera .Y también puede llamar [my.setTabBarStyle](/) para establecer el estilo.

```js
"tabBar": {
    "textColor": "#404040",
    "selectedColor": "#108ee9",
    "backgroundColor": "#F5F5F9"
}
```

## Solicitudes de excepción Preguntas frecuentes
### P: ¿Qué hacer si un error "no puede leer la propiedad ```GetCurrentPage``` of Undefined" se produce al cambiar la barra de pestaña?
R: Ruta de error. Consulte la ruta de la barra de pestaña.

### P: ¿Por qué la barra de pestaña no se muestra después de redirigirse la página?
R: Si el usuario ingresa a la página por [my.navigateTo](/) o [my.redirectTo](/), no se muestra la barra de pestaña inferior. La primera página de la barra de pestaña debe ser la página de inicio.

### P: ¿Cómo obtener la ruta de la página superior después de ingresar a la página de la barra de pestañas?
R: Guarde la ruta de la página actual a nivel mundial al ingresar la página de la barra de pestañas, y puede obtener la ruta de la página superior utilizando la dirección global al cambiar las páginas de barras de pestaña.

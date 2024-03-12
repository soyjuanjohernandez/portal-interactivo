---
sidebar_position: 1
---

## View

### Descripción
Equivalente al elemento `div` en desarrollo web o al componente `View` en React Native.

### Propiedades

| Propiedad         | Tipo     | Por defecto | Descripción                                                  |
|-------------------|----------|-------------|--------------------------------------------------------------|
| disable-scroll    | Booleano | falso       | Prohíbe desplazar la página dentro de la región.             |
| hover-class       | String   |             | Clase de estilo que se agregará al hacer clic.               |
| hover-start-time  | Número   |             | Tiempo en milisegundos para iniciar el estado de clic después de mantener. |
| hover-stay-time   | Número   |             | Tiempo en milisegundos para mantener el estado de clic después de soltar. |
| hidden            | Boolean | falso       | Si ocultar la vista o no.                                    |
| class             | String   |             | Nombre de clase de estilo personalizado.                      |
| style             | String   |             | Estilo en línea.                                             |
| onTap             | EventHandle |       | clics.                             |
| onTouchStart      | EventHandle |       | acción de inicio de toque en pantalla.          |
| onTouchMove       | EventHandle |       | acción de movimiento de toque en pantalla.      |
| onTouchEnd        | EventHandle |       | acción de fin de toque en pantalla.            |
| onTouchCancel     | EventHandle |       | interrupción de acción de toque en pantalla.    |
| onLongTap         | EventHandle |       | pulsación larga.                   |

:::note[Nota:]
La animación generada con my.createAnimation utiliza transiciones y solo activa onTransitionEnd, no onAnimationStart, onAnimationIteration o onAnimationEnd.
:::

### Código de Ejemplo

```xml
<view class="post">
  <!-- Oculto -->
  <view class="postUser" hidden>
    <view class="postUser__name">Jessie</view>
  </view>
  <!-- Clase hover -->
  <view class="postBody" hover-class="red">
    <view class="postBody__content">
      ¡Bien!
    </view>
    <view class="postBody__date">
      1 de Junio
    </view>
  </view>
</view>
```
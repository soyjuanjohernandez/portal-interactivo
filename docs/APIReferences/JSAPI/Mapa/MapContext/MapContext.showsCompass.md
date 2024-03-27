
# MapContext.showsCompass

Establece la visibilidad de la brújula.

- 1: visible.
- 0: invisible.

#### Parámetro
El parámetro es de tipo objeto y tiene la siguiente propiedad:

| Propiedad     | Tipo | Requerido | Descripción                                |
|---------------|------|-----------|--------------------------------------------|
| isShowsCompass| Int  | Sí        | Un indicador de si la brújula es visible. |

#### Ejemplo de código

```js
this.mapCtx = my.createMapContext('map');
this.mapCtx.showsCompass({isShowsCompass:1});
```
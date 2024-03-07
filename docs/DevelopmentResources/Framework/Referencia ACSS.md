---
sidebar_position: 7
---

# Referencias de ACSS

El acss se usa para describir el estilo de página.Es un conjunto de lenguaje de estilo, utilizado para describir el estilo del componente AXML y decidir el modo de visualización del componente AXML.

Para facilitar la mayoría de los desarrolladores front-end, nuestro ACSS tiene la mayoría de las características de CSS.Mientras tanto, ampliamos el CSS para que sea más adecuado para Mini Program.

A diferencia de CSS, nuestras características de extensión incluyen:

### Rpx

El **rpx**(Pixel de respuesta) puede adaptarse con la especificación de ancho de pantalla 750rpx.Tome el iPhone6 como ejemplo.El ancho de la pantalla es de 375 px y tiene un total de 750 píxeles físicos, 750rpx = 375px = 750 píxeles físicos, 1rpx = 0.5px = 1 píxel físico.

<table>
  <thead>
    <tr>
      <th>Device</th>
      <th>rpx converted to px (screen width / 750)</th>
      <th>px converted to rpx (750 / screen width)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>iPhone5</td>
      <td>1rpx = 0.42px</td>
      <td>1px = 2.34rpx</td>
    </tr>
    <tr>
      <td>iPhone6</td>
      <td>1rpx = 0.5px</td>
      <td>1px = 2rpx</td>
    </tr>
    <tr>
      <td>iPhone6 Plus</td>
      <td>1rpx = 0.552px</td>
      <td>1px = 1.81rpx</td>
    </tr>
  </tbody>
</table>

### Importación de estilo

Use la declaración ```@Import``` para importar hojas de estilo externo.El ```@import``` debe seguirse con la ruta relativa de la hoja de estilo externo, con ";"indicando el final.

Códigos de muestra:

```js
/** button.acss **/
.sm-button {
 padding: 5px;
}
```

```js
/** app.acss **/
@import "./button.acss";
.md-button {
 padding: 15px;
}
```

La ruta de importación admite Node_Modules Directory Cargando el módulo de terceros, como page.acss:

```js
@import "./button.acss"; /*relative path*/
@import "/button.acss"; /*project absolute path*/
@import "third-party/page.acss"; /*third-party npm package path*/
```

### Estilo en línea

El componente admite el uso del **style**, y el atributo **class** para el control del control.

#### Atributo de estilo

Se usa para recibir un estilo dinámico, el estilo se analizará en la ejecución.La regla de prioridad ```!important``` no es compatible.

```xml
<view style="color:{{color}};" />
```

#### Atributo de clase

Se usa para recibir estilo estático. El valor del atributo es el conjunto de nombre selector de clases (nombre de clase de estilo) en las reglas de estilo.El nombre de la clase de estilo no necesita el ".", Y usa espacio para separarse entre sí.

```xml
<view class="my-awesome-view" />
```

**El estilo estático se escribe uniformemente en clase.No escriba el estilo estático en estilo, de lo contrario, la velocidad de renderizado se verá afectada.**

### Selector

Igual que CSS3.

**Nota:**

* Los selectores de clase que comienzan con ```.a-``` y ```.am-``` están ocupados por el componente del sistema.No los uses.

* El selector de atributos no es compatible.

### Estilos globales y estilos locales

Los estilos definidos en la app.acss son los **estilos globales** y actúa en cada página.

Los estilos definidos en el archivo acss de la página son los **estilos locales** y actúa solo en la página correspondiente.Sobrescribe el mismo selector en app.acss.

### Estilos de contenedor de página

El selector de elementos de página se utiliza para establecer el estilo del contenedor de página, como el color de fondo de la página:

```css
page {
 background-color: red;
}
```

### Referencias locales

Utilice la ruta absoluta para referir el archivo local en ACSS, la ruta relativa no es compatible.

```js
/* Supported */
background-image: url('/images/mini-program.png');
/* Not supported */
background-image: url('./images/mini-program.png');
```

### Preguntas Frecuentes

**P: ¿Cómo resolver la contaminación del estilo cuando un AXML incluye múltiples componentes o plantillas personalizadas?**

R: Utilice el espacio de nombres para separarlos.

**P: La altura del 100% no es válida, ¿por qué?**

R: Agregue la posición absoluta para resolverlo, o ajustará la altura de acuerdo con la altura del contenido en la página.
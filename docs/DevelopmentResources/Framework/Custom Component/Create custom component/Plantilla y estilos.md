---
sidebar_position: 4
---

# Plantilla y estilos

Similar a una página, un componente personalizado tiene su propia plantilla AXML y estilo ACSS.

## axml
El axml es la parte obligatoria del componente personalizado. 

**Nota:** A diferencia de una página, los eventos personalizados del usuario deben colocarse en los métodos. 

**Ejemplo:**

```xml
<!-- /components/xx/index.axml -->
<view onTap="onMyClick" id="c-{{$id}}"/>
```

```js
Component({
  methods: {
  	onMyClick(e) {
	  console.log(this.is, this.$id);
	},
  },
});
```

### Slot

Al admitir props en el componente js, el componente personalizado puede interactuar con el llamador externo, aceptando los datos transferidos del llamador externo, llamando a la función transferida desde el llamador externo y notificando el cambio interno del componente al llamador externo.

Sin embargo, esto no es suficiente, porque el componente personalizado no es lo suficientemente flexible. Además del procesamiento de datos y la notificación, el Mini Programa proporciona un slot, para que la estructura axml del componente personalizado pueda ser ensamblada usando el axml transferido desde el llamador externo. El llamador externo puede transferir axml al componente personalizado, que el componente personalizado utiliza para ensamblar la estructura final del axml del componente.

#### Slot predeterminado

**Ejemplo del código:**

```xml
<!-- /components/xx/index.axml -->
<view>
  <slot>
    <view>ranura predeterminada y valor predeterminado</view>
  </slot>
  <view>otro</view>
</view>
```

**La llamada no transfiere axml**

```xml
<!-- /pages/index/index.axml -->
<xx />
```

**Salida de la Page**

```js
Default slot & default value
other
```

**Transferencias de llamadas axml**

```xml
<!-- /pages/index/index.axml -->
<xx>
  <view>xx</view>
  <view>yy</view>
</xx>
```

**Salida de la Page:**

```js

xx
yy
other

```

El "slot" puede ser interpretado como la ranura. El "slot predeterminado" es la ranura predeterminada. Si el llamador no transfiere axml en la etiqueta del componente, se renderiza el slot predeterminado. Si el llamador transfiere axml en la etiqueta del componente, se utiliza para reemplazar el slot predeterminado y ensamblar el axml final para renderizar.

# Slot Nombrado

El slot predeterminado puede transferir un conjunto de axml. Para componentes complicados, es necesario renderizar diferentes axml en diferentes ubicaciones, es decir, transferir múltiples axml. Aquí es donde se necesitan las ranuras nombradas.
**Código de ejemplo:**

```xml
<!-- /components/xx/index.axml -->
<view>
  <slot>
    <view>ranura predeterminada y valor predeterminado</view>
  </slot>
  <slot name="header"/>
  <view>cuerpo</view>
  <slot name="footer"/>
</view>
```

**Transferir solo la ranura nombrada**

```xml
<!-- /pages/index/index.axml -->
<xx>
  <view slot="header">header</view>
  <view slot="footer">footer</view>
</xx>
```

**Salida de la página**

```js
default slot & default value
header
body
footer
```

**Transferencia con nombre de ranura y ranura predeterminada**

```xml
<!-- /pages/index/index.axml -->
<xx>
  <view>Esto es para la ranura predeterminada</view>
  <view slot="header">encabezamiento</view>
  <view slot="footer">pie de página</view>
</xx>
```

**Salida de la Page**

```js
this is to default slot
header
body
footer
```

La ranura nombrada es la ranura con un nombre. En la sub etiqueta de la etiqueta del componente personalizado, el llamador externo puede especificar qué parte de axml colocar en qué ranura nombrada del componente personalizado. La parte sin ranura nombrada especificada en la subetiqueta de la etiqueta del componente personalizado se coloca en el slot predeterminado. Si solo transfiere la ranura nombrada, el slot predeterminado no será sobrescrito.

#### Slot-scope

A través de la ranura nombrada, el axml del componente personalizado utiliza tanto el axml del componente personalizado como el axml del llamador externo (como la página).
Al utilizar el axml del componente personalizado, es posible acceder a los datos dentro del componente. Mientras tanto, a través del atributo props, es posible acceder a los datos del llamador externo.
**Ejemplo:**

```js
// /components/xx/index.js
Component({
  data: {
    x: 1,
  },
  props: {
    y: '',
  },
});
```

```xml
<!-- /components/xx/index.axml -->
<view>component data: {{x}}</view>
<view>page data: {{y}}</view>
```

```js
// /pages/index/index.js
Page({
  data: { y: 2 },
});
```

```xml
<!-- /pages/index/index.axml -->
<xx y="{{y}}" />
```

**Salida de la Page:**

```js
component data: 1
page data: 2
```

Cuando el componente personalizado usa axml de llamadas externas (como página) a través de la ranura, puede acceder a los datos de la persona que llama externa solamente.

**Ejemplo del código:**

```xml
<!-- /components/xx/index.axml -->
<view>
  <slot>
    <view>Ranura predeterminada y valor predeterminado</view>
  </slot>
  <view>cuerpo</view>
</view>
```

```js
// /pages/index/index.js
Page({
  data: { y: 2 },
});
```

```xml
<!-- /pages/index/index.axml -->
<xx>
  <view>page data: {{y}}</view>
</xx>
```

**Salida de la Page:**

```
page data: 2
```

El alcance de la ranura permite que el contenido de la ranura pueda acceder a los datos dentro del componente.
**Código de ejemplo:**

```js
// /components/xx/index.js
Component({
  data: {
    x: 1,
  },
});
```

```xml
<!-- /components/xx/index.axml -->
<view>
  <slot x="{{x}}">
    <view>ranura predeterminada & valor por defecto</view>
  </slot>
  <view>body</view>
</view>
```

```js
// /pages/index/index.js
Page({
  data: { y: 2 },
});
```

```xml
<!-- /pages/index/index.axml -->
<xx>
  <view slot-scope="props">
    <view>Datos de componentes: {{props.x}}</view>
    <view>Datos de la página: {{y}}</view>
  </view>
</xx>
```

**Salida de la Page:**

```js
component data: 1
page data: 2
body
```

Como se muestra arriba, el componente personalizado expone los datos del componente interno definiendo el atributo de ranura.Cuando la página usa el componente, la ranura de alcance de acción se declara a través de la ranura.El valor del atributo define los accesorios de nombre de la variable temporal, así accesible a los datos internos del componente.

## acss

Al igual que la página, el componente personalizado puede tener su propio estilo acss definido. El acss se introduce automáticamente en la página que utiliza el componente sin necesidad de una introducción manual en la página.
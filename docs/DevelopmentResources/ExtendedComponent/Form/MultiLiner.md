---
sidebar_position: 5
---

# Multi Liner

Puedes usar el componente de multi-línea para permitir a los usuarios ingresar múltiples líneas de contenido en una caja de entrada de texto.

**Nota:**

Las características del componente de multi-línea se basan principalmente en el componente de [textarea](/). Puedes ver [textarea](/) como referencia.

## Código de muestra

Mira los códigos de muestra en diferentes lenguajes:

### .json

```json
{
  "defaultTitle": "Multi-liner",
  "usingComponents": {
    "multi-liner": "mini-ali-ui/es/multi-liner/index"
  }
}
```
### .axml

```xml
<view>
  <view style="margin-top: 10px;" />
  <view class="title">multi-liner</view>
  <multi-liner
    placeholder="Conteo de palabras↘" 
    value="{{value}}" 
    onInput="onInput" 
    last="{{true}}" 
    auto-height="{{true}}" 
    controlled="{{controlled}}"/>
  <view style="margin: 10px;" />
</view>
```
### .js

```javascript
Page({
  data: {
    value: 'contenido',
    controlled: true,
  },
  onInput(e) {
    this.setData({
      value: e.detail.value,
    });
  },
});
```
## Parámetros

Aquí tienes la tabla convertida a formato HTML con las palabras "true" y "false" resaltadas con comillas invertidas:

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>className</td>
    <td>String</td>
    <td>Clase personalizada.</td>
  </tr>
  <tr>
    <td>inputCls</td>
    <td>String</td>
    <td>Clase personalizada para el cuadro de entrada que usa el componente de entrada.</td>
  </tr>
  <tr>
    <td>last</td>
    <td>Boolean</td>
    <td>Un indicador de si el cuadro de entrada es el último. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>String</td>
    <td>Contenido inicial en el cuadro de entrada.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Nombre del componente, que se utiliza para obtener datos al enviar el formulario.</td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>String</td>
    <td>Marcador de posición.</td>
  </tr>
  <tr>
    <td>placeholderStyle</td>
    <td>String</td>
    <td>Estilo del marcador de posición.</td>
  </tr>
  <tr>
    <td>placeholderClass</td>
    <td>String</td>
    <td>Clase de estilo del marcador de posición.</td>
  </tr>
  <tr>
    <td>disabled</td>
    <td>Boolean</td>
    <td>Un indicador de si desactivar la función de borrar el contenido ingresado. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>maxlength</td>
    <td>Number</td>
    <td>Longitud máxima del código de verificación. El valor predeterminado es 140.</td>
  </tr>
  <tr>
    <td>focus</td>
    <td>Boolean</td>
    <td>Un indicador de si obtener el foco. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>auto-height</td>
    <td>Boolean</td>
    <td>Un indicador de si aumentar automáticamente el cuadro de entrada con las líneas aumentadas. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>show-count</td>
    <td>Boolean</td>
    <td>Un indicador de si mostrar el número de palabras ingresadas. El valor predeterminado es ``true``.</td>
  </tr>
  <tr>
    <td>controlled</td>
    <td>Boolean</td>
    <td>Un indicador de si el componente de multi-línea es un componente controlado. Si el valor es **``true``**, el contenido en la caja de entrada de texto es controlado por _setData_.</td>
  </tr>
  <tr>
    <td>onInput</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el teclado.</td>
  </tr>
  <tr>
    <td>onConfirm</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el botón **Done** en el teclado.</td>
  </tr>
  <tr>
    <td>onFocus</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando un elemento recibe el foco.</td>
  </tr>
  <tr>
    <td>onBlur</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando un elemento pierde el foco.</td>
  </tr>
</table>
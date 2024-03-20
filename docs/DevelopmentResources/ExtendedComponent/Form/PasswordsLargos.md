# Long Password

Puedes usar el componente long-password para mostrar el cuadro de entrada de la contraseña.

**Nota:**

El long-password es un componente controlado. El valor del componente debe obtenerse mediante el evento onInput.

## Código de Ejemplo

Consulta los códigos de ejemplo en diferentes lenguajes:

### .json

```js
{
  "defaultTitle": "verify-code",
  "usingComponents":{
    "long-password": "mini-ali-ui/es/long-password/index"
  }
}
```

### .axml

```xml
<view>
  <view style="margin-top: 10px;" />
  <view style="padding: 0 10px;">Cuadro de contraseña larga</view>
  <view style="margin-top: 10px;" />
  <long-password
    placeholder="" 
    value="{{longPassword}}" 
    clear="{{true}}" 
    onInput="onInput" 
    onClear="onClear" />
</view>
```

### .js

```js
Page({
  data: {
    longPassword: '',
  },
  onInput(e) {
    this.setData({
      longPassword: e.detail.value,
    });
  },
  onClear() {
    this.setData({
      longPassword: '',
    });
  },
});
```

## Parámetros

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
    <td>Clase personalizada para el cuadro de entrada que utiliza el componente de [input](/).</td>
  </tr>
  <tr>
    <td>last</td>
    <td>Boolean</td>
    <td>Un indicador de si el cuadro de entrada es el último. El valor predeterminado es ```false```.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>String</td>
    <td>Contenido inicial.</td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Nombre del componente, que se utiliza para obtener datos mediante la presentación del formulario.</td>
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
    <td>Un indicador de si deshabilitar la función de limpieza de la contraseña. El valor predeterminado es ```false```.</td>
  </tr>
  <tr>
    <td>maxlength</td>
    <td>Number</td>
    <td>Longitud máxima de la contraseña. El valor predeterminado es `140`.</td>
  </tr>
  <tr>
    <td>focus</td>
    <td>Boolean</td>
    <td>Un indicador de si obtener el foco. El valor predeterminado es ```false```.</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>Boolean</td>
    <td>Un indicador de si limpiar la entrada. El valor predeterminado es ```verdadero```, y solo tiene efecto cuando el valor de disabled es ```false```.</td>
  </tr>
  <tr>
    <td>onInput</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el teclado.</td>
  </tr>
  <tr>
    <td>onConfirm</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el botón Hecho en el teclado.</td>
  </tr>
  <tr>
    <td>onFocus</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando un elemento obtiene el enfoque.</td>
  </tr>
  <tr>
    <td>onBlur</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando un elemento pierde el enfoque.</td>
  </tr>
  <tr>
    <td>onClear</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el botón Limpiar.</td>
  </tr>
</table>

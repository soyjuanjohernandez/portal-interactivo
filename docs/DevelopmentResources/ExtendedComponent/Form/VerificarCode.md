# Código de Verificación

Puedes usar el componente verify-code para mostrar el cuadro de entrada del código de verificación.

**Nota:**

El verify-code es un componente controlado. El valor del componente debe obtenerse mediante el evento onInput.

## Código de muestra
Ver los códigos de muestra en diferentes lenguajes:

### .json
```json
{
  "defaultTitle": "Código de verificación",
  "usingComponents": {
    "verify-code": "mini-ali-ui/es/verify-code/index"
  }
}
```

### .axml
```xml
<view>
  <view style="margin-top: 10px;" />
  <view style="padding: 0 10px;">cuadro de código de verificación</view>
  <view style="margin-top: 10px;" />
  <verify-code
    onInput="onInput" 
    value="{{verifyCode}}" 
    onClear="onClear" 
    last="{{true}}" 
    countDown="{{10}}" 
    initActive="{{false}}"
    onSend="onSend"></verify-code>
</view>
```

### .js
```javascript
Page({
  data: {
    verifyCode: '',
  },
  onSend() {
    my.alert({
      title: 'código de verificación enviado',
    });
  },
  onInput(e) {
    this.setData({
      verifyCode: e.detail.value,
    });
  },
});
```

## Parámetros 

<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>className</td>
    <td>String</td>
    <td>Clase personalizada.</td>
  </tr>
  <tr>
    <td>label</td>
    <td>String</td>
    <td>Texto de etiqueta personalizado. El valor predeterminado es `Verification Code`.</td>
  </tr>
  <tr>
    <td>labelCls</td>
    <td>String</td>
    <td>Clase personalizada para la etiqueta.</td>
  </tr>
  <tr>
    <td>inputCls</td>
    <td>String</td>
    <td>Clase personalizada para el cuadro de entrada.</td>
  </tr>
  <tr>
    <td>last</td>
    <td>Boolean</td>
    <td>Un indicador de si el cuadro de entrada es el último. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>value</td>
    <td>String</td>
    <td>Valor del cuadro de entrada.</td>
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
    <td>Un indicador de si deshabilitar la función de borrar el código de verificación. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>maxlength</td>
    <td>Number</td>
    <td>Longitud máxima del código de verificación. El valor predeterminado es 140.</td>
  </tr>
  <tr>
    <td>focus</td>
    <td>Boolean</td>
    <td>Un indicador de si obtener el enfoque. El valor predeterminado es ``false``.</td>
  </tr>
  <tr>
    <td>clear</td>
    <td>Boolean</td>
    <td>Un indicador de si borrar la entrada. El valor predeterminado es ``true``, y solo tiene efecto cuando el valor de disabled es ``false``.</td>
  </tr>
  <tr>
    <td>onInput</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el teclado.</td>
  </tr>
  <tr>
    <td>onConfirm</td>
    <td>(e: Object) => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el botón Done en el teclado.</td>
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
    <td>() => void</td>
    <td>El evento que se desencadena cuando los usuarios tocan el botón Limpiar.</td>
  </tr>
  <tr>
    <td>txtSend</td>
    <td>String</td>
    <td>Texto en el botón de enviar código de verificación. El valor predeterminado es Enviar.</td>
  </tr>
  <tr>
    <td>txtSendAgain</td>
    <td>String</td>
    <td>Texto en el botón de reenviar código de verificación. El valor predeterminado es Reenviar.</td>
  </tr>
  <tr>
    <td>txtCountDown</td>
    <td>String</td>
    <td>Texto de cuenta regresiva antes de reenviar el código de verificación, que no incluye el tiempo. El valor predeterminado es Reenviar más tarde.</td>
  </tr>
  <tr>
    <td>initActive</td>
    <td>Boolean</td>
    <td>Un indicador de si activar el botón de enviar de manera activa. El valor predeterminado es ``false``. Cuando el valor es ``true``, cuenta regresivamente el tiempo de reenvío automáticamente después de que se carga inicialmente el componente. Puede configurar la información de aviso según sus requisitos.</td>
  </tr>
</table>

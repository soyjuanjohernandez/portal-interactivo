# Button

Puedes usar el componente de botón para permitir a los usuarios realizar acciones o tomar decisiones. El componente se utiliza a menudo para enviar formularios, redirigir a los usuarios a otra interfaz o guiar a los usuarios hacia los siguientes pasos. El uso es consistente con el componente básico de botón, pero se añaden más estilos en el componente de botón extendido.

## Código de ejemplo

Consulta los códigos de ejemplo en diferentes lenguajes:

**.json**
```json
{
 "defaultTitle": "Botón",
 "usingComponents": {
   "button": "mini-ali-ui/es/button/index",
   "radio": "mini-ali-ui/es/am-radio/index",
   "checkbox": "mini-ali-ui/es/am-checkbox/index"
 }
}
```

**.axml**
```xml
<view class="container">
 <button onTap="onTest" showLoading="{{showLoading}}" dataName="{{dataName}}" type="{{type}}" subtitle="{{subtitle}}" disabled="{{disabled}}" shape="{{shape}}" capsuleSize="{{capsuleSize}}" capsuleMinWidth="{{capsuleMinWidth}}">
   {{title}}
 </button>
 <view>título principal</view>
 <input value="{{title}}" onInput="titleChange"/>
 <view>subtítulo</view>
 <input value="{{subtitle}}" onInput="subtitleChange"/>
 <view>tipo de botón</view>
 <radio-group class="radio-group" onChange="typeChange" name="type">
   <label class="radio" a:for="{{types}}" key="label-{{index}}">
     <radio value="{{item.name}}" checked="{{item.checked}}" />
     <text class="radio-text">{{item.value}}</text>
   </label>
 </radio-group>
 <view>forma</view>
 <radio-group class="radio-group" onChange="shapeChange" name="shape">
   <label class="radio" a:for="{{shapes}}" key="label-{{index}}">
     <radio value="{{item.name}}" checked="{{item.checked}}" />
     <text class="radio-text">{{item.value}}</text>
   </label>
 </radio-group>
 <view>tamaño del botón cápsula</view>
 <radio-group class="radio-group" onChange="sizeChange" name="size">
   <label class="radio" a:for="{{capsuleSizes}}" key="label-{{index}}">
     <radio value="{{item.name}}" checked="{{item.checked}}" />
     <text class="radio-text">{{item.value}}</text>
   </label>
 </radio-group>
 <view>habilitar o no</view>
 <checkbox onChange='onDisableChange'/>
 <view>Habilitar ancho mínimo del botón cápsula o no</view>
 <checkbox onChange='onMinWidthChange'/>
 <view>lograr carga o no</view>
 <checkbox onChange='onLoadingChange'/>
</view>
```

**.acss**
```css
.container {
  padding: 20rpx;
}

.container button {
  margin-bottom: 24rpx;
}
```

**.js**
```js
Page({
  data: {
    title: 'Control de botón push Normal',
    subtitle: '',
    disabled: false,
    dataName: '1',
    type: '',
    shape: 'default',
    capsuleSize: 'medium',
    capsuleMinWidth: false,
    showLoading: false,
    types: [
      { name: 'default', value: 'default', checked: true },
      { name: 'primary', value: 'primary' },
      { name: 'ghost', value: 'ghost' },
      { name: 'text', value: 'text' },
      { name: 'warn', value: 'warn' },
      { name: 'warn-ghost', value: 'warn-ghost' },
      { name: 'light', value: 'light' },
    ],
    shapes: [
      { name: 'default', value: 'default', checked: true },
      { name: 'capsule', value: 'capsule' },
    ],
    capsuleSizes: [
      { name: 'small', value: 'small' },
      { name: 'medium', value: 'medium', checked: true },
      { name: 'large', value: 'large' },
    ],
  },
  onLoad() {
  },
  typeChange(e) {
    this.setData({
      type: e.detail.value,
    });
  },
  shapeChange(e) {
    this.setData({
      shape: e.detail.value,
    });
  },
  sizeChange(e) {
    this.setData({
      capsuleSize: e.detail.value,
    });
  },
  titleChange(e) {
    this.setData({
      title: e.detail.value,
    });
  },
  subtitleChange(e) {
    this.setData({
      subtitle: e.detail.value,
    });
  },
  onDisableChange(e) {
    this.setData({
      disabled: e.detail.value,
    });
  },
  onMinWidthChange(e) {
    this.setData({
      capsuleMinWidth: e.detail.value,
    });
  },
  onTap() {
    // e.target.dataset.name
  },
  onLoadingChange(e) {
    this.setData({
      showLoading: e.detail.value,
    });
  },
});
```

## Parámetros

Aquí está la tabla HTML con las listas de texto dentro de las celdas:

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>
      Estilo del botón. Los Valores válidos son: 
      - `default` 
      - `primary` 
      - `ghost` 
      - `warn` 
      - `warn-ghost` 
      - `text` 
      - `light`. 
      
      Valor predeterminado: `default`.
      </td>
    </tr>
    <tr>
      <td>subtitle</td>
      <td>String</td>
      <td>Subtítulo.</td>
    </tr>
    <tr>
      <td>shape</td>
      <td>String</td>
      <td>
        Forma del botón. Valores válidos: 
        - `default` 
        
        - `capsule`. 
      
      Valor predeterminado: `default`.
      </td>
    </tr>
    <tr>
      <td>capsuleSize</td>
      <td>String</td>
      <td>
      Tamaño del botón cápsula. los Valores válidos son: 
        - `large` 
        - `medium` 
        - `small`. 

        El Valor predeterminado es: `medium`.
      </td>
    </tr>
    <tr>
      <td>capsuleMinWidth</td>
      <td>Boolean</td>
      <td>Indicador de si se debe usar el ancho mínimo para el botón cápsula. Valor predeterminado: `false`.</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>Boolean</td>
      <td>Indicador de si se debe deshabilitar el botón. Valor predeterminado: `false`.</td>
    </tr>
    <tr>
      <td>showLoading</td>
      <td>Boolean</td>
      <td>Indicador de si se debe mostrar el ícono de carga en el botón. Valor predeterminado: `false`.</td>
    </tr>
    <tr>
      <td>hover-class</td>
      <td>String</td>
      <td>Clase de estilo después de que se presiona el botón. Clase predeterminada: `button-hover`. Estilo: 
        `{background-color: rgba(0, 0, 0, 0.1); opacity: 0.7;}`. Si el valor es `none`, no se producen cambios de estilo al presionar el botón.</td>
    </tr>
    <tr>
      <td>hover-start-time</td>
      <td>Número</td>
      <td>Duración en milisegundos entre dos momentos. Valor predeterminado: `20`.</td>
    </tr>
    <tr>
      <td>hover-stay-time</td>
      <td>Número</td>
      <td>Duración en milisegundos que dura el estado presionado después de que los usuarios presionan el botón. Valor predeterminado: `70`.</td>
    </tr>
    <tr>
      <td>hover-stop-propagation</td>
      <td>Boolean</td>
      <td>Indicador de si se debe evitar que el estado presionado se propague desde el elemento padre del elemento actual. Valor predeterminado: `false`.</td>
    </tr>
    <tr>
      <td>form-type</td>
      <td>String</td>
      <td>
      Tipo de botón utilizado en el componente de [formulario](/). Los Valores válidos son: 
      
      - `submit` 
      - `reset`. 

      Cuando los usuarios presionan el botón, se activa el evento `onSubmit` o `onReset`.
      
      </td>
    </tr>
    <tr>
      <td>open-type</td>
      <td>String</td>
      <td>Capacidad de apertura, como la capacidad de pago.</td>
    </tr>
    <tr>
      <td>scope</td>
      <td>String</td>
      <td>Alcance de autorización, válido cuando el valor de _open-type_ es `getAuthorize`.</td>
    </tr>
    <tr>
      <td>onTap</td>
      <td>Manejador de eventos</td>
      <td>Evento desencadenado cuando los usuarios presionan el botón.</td>
    </tr>
    <tr>
      <td>app-parameter</td>
      <td>String</td>
      <td>Parámetros transmitidos a la aplicación abierta, válido cuando el valor de _open-type_ es `launchApp`.</td>
    </tr>
  </tbody>
</table>

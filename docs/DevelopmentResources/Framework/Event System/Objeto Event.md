# Objeto de evento

Cuando el componente desencadena el evento, el controlador de eventos limitado con la capa lógica recibe un objeto de evento.

## BaseEvent

Lista de atributos del objeto de eventos básicos de BaseEvent:

<table>
  <thead>
    <tr>
      <th>Property</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>String</td>
      <td>Tipo de evento.</td>
    </tr>
    <tr>
      <td>timeStamp</td>
      <td>Integer</td>
      <td>Marca de tiempo del evento generado.</td>
    </tr>
    <tr>
      <td>target</td>
      <td>Object</td>
      <td>Valor del atributo establecido del componente que desencadena el evento.</td>
    </tr>
  </tbody>
</table>

### Type

Type: Tipo de evento

### Timestamp

timeStamp: Marca de tiempo generada por el evento

### Target

```dataset``` define datos en el componente, y los datos se transfieren a través del evento a la capa lógica. Comienza con ```data-``` y utiliza guiones ```-``` para conectar múltiples palabras que deben estar en minúsculas (las mayúsculas se convierten automáticamente en minúsculas). Por ejemplo, el ```data-element-type``` eventualmente convertirá el guion en joroba ```elementType``` en el ```event.target.dataset```.

Ejemplo de Código:

```xml
<view data-alpha-beta="1" data-alphaBeta="2" onTap="bindViewTap"> DataSet Test </view>
```

```js
Page({
 bindViewTap:function(event){
   event.target.dataset.alphaBeta === 1 // - Will convert into hump writing
   event.target.dataset.alphabeta === 2 // Upper case converted into lower case
 }
})
```

Tarjet: Recurso del Objeto de componente que desencadena el evento, Lista de atributos:

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
      <td>id</td>
      <td>String</td>
      <td>Identificación del componente fuente del evento.</td>
    </tr>
    <tr>
      <td>tagName</td>
      <td>String</td>
      <td>Tipo actual del componente.</td>
    </tr>
    <tr>
      <td>dataset</td>
      <td>Object</td>
      <td>Conjunto de atributos personalizados que comienzan con data- en el componente vinculado con el evento.</td>
    </tr>
    <tr>
      <td>targetDataset</td>
      <td>Object</td>
      <td>Conjunto de atributos personalizados que comienzan con data- en el componente que realmente desencadena el evento.</td>
    </tr>
  </tbody>
</table>

## CustomEvent

Lista de atributos de objetos de eventos personalizados de CustomEvent (heredado de BaseEvent)

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
      <td>detail</td>
      <td>Objeto</td>
      <td>Información adicional.</td>
    </tr>
  </tbody>
</table>

### Detail

Datos llevados en el evento personalizado. El evento del componente de formulario lleva información de entrada del usuario.Por ejemplo, el componente de conmutación, cuando OnChange dispara, obtiene el valor de estado seleccionado por el usuario a través de event.detail.value. El evento de error de medios lleva información de error. **Para más detalles, consulte la descripción del evento del documento de componente.**

### TouchEvent

Lista de atributos de objeto de evento TouchEvent Touch (heredado de BaseEvent)

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
      <td>touches</td>
      <td>Array</td>
      <td>Arreglo de información sobre puntos de contacto que permanecen actuales en la pantalla.</td>
    </tr>
    <tr>
      <td>changedTouches</td>
      <td>Array</td>
      <td>Arreglo de información sobre puntos de contacto que están cambiando actualmente.</td>
    </tr>
  </tbody>
</table>

Los toques son una matriz.Cada uno de sus elementos es un objeto táctil (los toques transportados en el evento táctil de **canvas** son la matriz CanvasTouch), lo que indica que el punto de contacto permanece en la pantalla.
El formato de datos de Touches cambiados es el mismo que los toques.Indica el punto de contacto cambiante, como desde ninguno para iniciar (touchstart), cambio de ubicación (touchmove), de toque a extremo (touchend, touchcancel).

### Objeto Touch

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
      <td>identifier</td>
      <td>Número</td>
      <td>Identificador del punto de contacto táctil.</td>
    </tr>
    <tr>
      <td>pageX, pageY</td>
      <td>Número</td>
      <td>Distancia hasta la esquina superior izquierda del documento, con la esquina superior izquierda como origen, la dirección horizontal como eje x y la dirección vertical como eje y.</td>
    </tr>
    <tr>
      <td>clientX, clientY</td>
      <td>Número</td>
      <td>Distancia hasta la región visible de la página (pantalla excepto la barra de navegación), con la esquina superior izquierda como origen, la dirección horizontal como eje x y la dirección vertical como eje y.</td>
    </tr>
  </tbody>
</table>

### Objeto CanvasTouch

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
      <td>identificador</td>
      <td>Número</td>
      <td>Identificador del punto de contacto táctil.</td>
    </tr>
    <tr>
      <td>x, y</td>
      <td>Número</td>
      <td>Distancia hasta la esquina superior izquierda del lienzo, con la esquina superior izquierda del lienzo como origen, la dirección horizontal como eje x y la dirección vertical como eje y.</td>
    </tr>
  </tbody>
</table>

### Ejemplo

Tome el evento ```touchMove``` como ejemplo, cuando el usuario toque el siguiente componente.

```xml
<view class="move-view" onTouchMove="touchMoveHandle">
</view>
```

El ```touchMoveHandle``` se invocará en la página, el TouchEvent actuará como el parámetro.

```js
Page({
  touchMoveHandle(e){
    console.log(e)
  }
});
```
La salida de la consola

```js
{
  "type": "touchMove",
  "timeStamp": 1562241425847,
  "target": {
    "targetDataset": {},
    "tagName": "view",
    "dataset": {},
    "offsetLeft": 0,
    "offsetTop": 0
  },
  "currentTarget": {
    "tagName": "view",
    "dataset": {},
    "offsetLeft": 0,
    "offsetTop": 0
  },
  "touches": [
    {
      "clientX": 49.69140625,
      "clientY": 54.1640625,
      "identifier": 0,
      "pageX": 49.69140625,
      "pageY": 54.1640625
    }
  ],
  "changedTouches": [
    {
      "clientX": 49.69140625,
      "clientY": 54.1640625,
      "identifier": 0,
      "pageX": 49.69140625,
      "pageY": 54.1640625
    }
  ]
}
```
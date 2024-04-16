# Introducción a los Eventos

¿Qué es el Event?

- El Event es la forma de comunicación de la capa de vista a la capa lógica.
- El event alimenta los comportamientos del usuario a la capa lógica para el manejo.
- Event puede estar vinculado al componente.Cuando ocurre la condición de activación, el controlador de event correspondiente se ejecuta en la capa lógica.
- El objeto Event puede llevar información adicional, como ID, conjunto de datos y toques.

## Uso

Si deseas vincular un manejador de eventos en un componente, por ejemplo `onTap`, necesitas definir la función `onTap` en el objeto `Page` en el archivo `.js` relativo.

```js
<view id="tapTest" data-hi="Mini Program" onTap="tapName">
  <view id="tapTestInner" data-hi="Mini Program Inner">
    Click me! 
  </view>
</view>
```

En la ```Page``` relativa, ```tapName``` debe ser definido para manejar el evento, y el parámetro de la función es ```event```.

```js
Page({
  tapName(event) {
    console.log(event);
  },
});
```

La salida en consola

```js
{
  "type": "tap",
  "timeStamp": 1550561469952,
  "target": {
    "id": "tapTestInner",
    "dataset": {
      "hi": "Mini Program"
    },
    "targetDataset": {
      "hi": "Mini Program Inner"
    }
  },
  "currentTarget": {
    "id": "tapTest",
    "dataset": {
      "hi": "Mini Program"
    }
  }
}
```

En el uso de componentes (componente básico, componente extendido y componente personalizado), los eventos disponibles en el componente dependen del soporte del propio componente. Los eventos admitidos se especifican claramente en el documento del componente específico.

Tipo de Evento
Los eventos se dividen en eventos de propagación y eventos no de propagación:

Bubbling events: Con ```on``` como prefijo, cuando se desencadena el evento de un componente, el evento se transfiere al nodo padre.
Non-bubbling events: Con ```catch``` como prefijo, cuando se desencadena el evento de un componente, el evento no se transfiere al nodo padre.
La vinculación de eventos se escribe de la misma forma que el atributo del componente en forma de ```key```, ```value```.

La key comienza con ```on``` o ```catch```, seguido del tipo de evento, como onTap y catchTap.
El value es una cadena que corresponde al nombre de la función definida en la Página. Se informa un error cuando no existe ningún evento de activación.

```js
<view id="outter" onTap="handleTap1">
 view1
 <view id="middle" catchTap="handleTap2">
   view2
   <view id="inner" onTap="handleTap3">
     view3
   </view>
 </view>
</view>
```

En los códigos anteriores, al hacer clic en view3 se activan handleTap3 y handleTap2 (porque el evento de toque se propaga hasta view2, mientras que view2 evita la propagación del evento de toque y no se transfiere al nodo padre). Al hacer clic en view2 se activa handleTap2; al hacer clic en view1 se activa handleTap1.

**Todos los eventos de propagación:**

<table>
  <thead>
    <tr>
      <th>Tipo</th>
      <th>Condición de Activación</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>touchStart</td>
      <td>Inicio de la acción táctil.</td>
    </tr>
    <tr>
      <td>touchMove</td>
      <td>Movimiento después del toque.</td>
    </tr>
    <tr>
      <td>touchEnd</td>
      <td>Fin de la acción táctil.</td>
    </tr>
    <tr>
      <td>touchCancel</td>
      <td>Acción táctil interrumpida, como una llamada entrante o una ventana emergente.</td>
    </tr>
    <tr>
      <td>tap</td>
      <td>Toca y deja inmediatamente.</td>
    </tr>
    <tr>
      <td>longTap</td>
      <td>Toca y deja después de 500ms.</td>
    </tr>
  </tbody>
</table>

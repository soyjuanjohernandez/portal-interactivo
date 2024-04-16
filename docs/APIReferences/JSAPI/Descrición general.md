---
sidebar_position: 1
---


# Descripción general

## API
El marco proporciona a los desarrolladores más capacidades JSAPI y OpenAPI para que puedan lanzar servicios convenientes diversificados a los usuarios.

## NOTAS
Las API iniciadas con My.on se utilizan para escuchar los eventos del sistema y aceptar una función de devolución de llamada como parámetro. Cuando se activa el evento, llama a la función de devolución de llamada, que se transferirá a la API relacionada comenzó con My.Off para cancelar la relación de escucha.Si la API comenzó con My.Off se llama directamente, todas las relaciones auditivas serán canceladas. Ejemplo

```js
Page({
  onLoad() {
    this.callback = this.callback.bind(this);
    my.onBLECharacteristicValueChange(this.callback);
  },
  onUnload() {
    //Eliminar el oyente cuando descargue la página
    my.offBLECharacteristicValueChange(this.callback);
  },
  callback(res) {
    console.log(res);
  },
});
```

Todas las demás interfaces API aceptan un objeto como parámetro.Es posible especificar el éxito (éxito de llamadas), fallar (falla de la llamada) y completar (éxito de llamada o falla) CTO Recibe el resultado de la llamada de interfaz.El resultado de la devolución de llamada es generalmente un objeto a menos que se especifique lo contrario.Si se incluye un error/errorMessage, indica falla de la llamada. El valor del resultado después de la llamada es un objeto prometedor. Ejemplo

```js
my.httpRequest({
  url: '/x.htm',
  success(res1) {},
}).then((res2) => {
  // res1 === res2
},(res) => {
  console.log(res.error, res.errorMessage);
  })
```

# my.navigateBackMiniProgram

Volver al Mini Program anterior. Solo se usa cuando otro Mini Programa vuelve al Mini Programa en primer plano.

## Ejemplo del código

```js
my.navigateBackMiniProgram({
    extraData:{
    "data1":"test"
    },
    success: (res) => {
    console.log(JSON.stringify(res))
    },
    fail: (res) => {
    console.log(JSON.stringify(res))
    }
});
```

## Parámetros

| Propiedad  | Tipo      | Requerido | Descripción                                                                                                  |
|------------|-----------|-----------|--------------------------------------------------------------------------------------------------------------|
| extraData  | Objeto    | No        | Los datos adicionales que deben devolverse al Mini Programa de destino, y el Mini Programa de destino puede obtenerlos en `App.onLaunch()` o `App.onShow()`. |
| success    | Función   | No        | Función de devolución de llamada al tener éxito en la llamada.                                                 |
| fail       | Función   | No        | Función de devolución de llamada al fallar la llamada.                                                         |
| complete   | Función   | No        | Función de devolución de llamada al completarse la llamada (para ejecutarse tanto al tener éxito como al fallar la llamada).    |

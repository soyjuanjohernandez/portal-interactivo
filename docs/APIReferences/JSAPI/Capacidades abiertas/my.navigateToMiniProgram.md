# my.navigateToMiniProgram

Salta a otro Mini Programa.

## Ejemplo de código

```js
my.navigateToMiniProgram({
    appId: 'xxxx',
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

| Propiedad  | Tipo      | Requerido | Descripción                                                                                   |
|------------|-----------|-----------|-----------------------------------------------------------------------------------------------|
| appId      | String    | Sí        | El appId del Mini Programa objetivo al que se desea saltar.                                    |
| path       | String    | No        | La ruta del Mini Programa objetivo al que se desea saltar. Abre la página principal si está vacía. |
| extraData  | Object    | No        | Datos adicionales que deben pasarse al Mini Programa objetivo, y que este puede recibir en App.onLaunch() o App.onShow(). |
| success    | Function  | No        | Función de retorno de llamada al éxito de la llamada.                                           |
| fail       | Function  | No        | Función de retorno de llamada al fracaso de la llamada.                                         |
| complete   | Function  | No        | Función de retorno de llamada al completarse la llamada (se ejecutará tanto en caso de éxito como de fracaso). |

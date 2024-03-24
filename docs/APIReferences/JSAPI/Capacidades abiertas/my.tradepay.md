# my.tradePay

Inicia una transacción de pago.

## Código de muestra

```js
my.tradePay({
  tradeNO: '201711152100110410533667792', // obtener tradeNo del servidor primero
  success: (res) => {
    my.alert({
      content: JSON.stringify(res),
    });
  },
  fail: (res) => {
    my.alert({
      content: JSON.stringify(res),
    });
  }
});
```

## Parámetros

| Propiedad  | Tipo     | Requerido | Descripción                                                           |
|------------|----------|-----------|-----------------------------------------------------------------------|
| tradeNO    | String   | No        | El número de transacción. Su longitud máxima es 64. Ver detalles [aquí](#). |
| orderStr   | String   | No        | Una cadena de parámetros de pago completos, que se recomienda obtener del servidor. Ver detalles [aquí](#). |
| paymentUrl | String   | No        | La URL de la página de pago. Ver detalles [aquí](#).                     |
| success    | Function | No        | Función de devolución de llamada al éxito de la llamada.                |
| fail       | Function | No        | Función de devolución de llamada al fallo de la llamada.                |
| complete   | Function | No        | Función de devolución de llamada al completar la llamada (para ejecutar en caso de éxito o fallo). |

El `tradeNO`, `orderStr` y `paymentUrl` son diferentes formas de iniciar la transacción de pago. **El Mini Program deberia usar uno de ellos para iniciar una transacción de pago según el servicio de pago proporcionado por la aplicación host.**

## Función de devolución de llamada satisfactoria

El parámetro entrante es de tipo Object con los siguientes atributos:

| Propiedad   | Tipo   | Requerido | Descripción                 |
|-------------|--------|-----------|-----------------------------|
| resultCode  | String | Sí        | El código de resultado del proceso de pago. |

Un ejemplo de un mensaje devuelto con éxito es el siguiente:

```js
{
    "resultCode":"9000"
}
```

## Código de resultado

| resultCode | Descripción                    |
|------------|--------------------------------|
| 9000       | El pago se realizó con éxito. |
| 8000       | La transacción está en proceso. |
| 4000       | El pago ha fallado.           |
| 6001       | El usuario cancela el pago.   |
| 6002       | Excepción de red.             |
| 6004       | Resultado de pago desconocido, puede ser exitoso. |
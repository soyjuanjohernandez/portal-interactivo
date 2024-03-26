# my.getSiteInfo

Utiliza esta API para obtener la información del sitio asignada por Alipay+, la cual se utiliza en el negocio de Alipay+, como el nombre del sitio.

**Nota:**

Asegúrate de utilizar la versión de la aplicación 1.24.6 o superior para poder utilizar esta API.

## Código de ejemplo

```js
my.getSiteInfo({
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

## Parámetros de entrada

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Requerido</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>success</td>
    <td>Función</td>
    <td>No</td>
    <td>Función de devolución de llamada al tener éxito la llamada.</td>
  </tr>
  <tr>
    <td>fail</td>
    <td>Función</td>
    <td>No</td>
    <td>Función de devolución de llamada al fallar la llamada.</td>
  </tr>
  <tr>
    <td>complete</td>
    <td>Función</td>
    <td>No</td>
    <td>Función de devolución de llamada al completarse la llamada (se ejecutará al tener éxito o al fallar la llamada).</td>
  </tr>
</table>

## Función de retorno de llamada satisfactoria

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>siteName</td>
    <td>String</td>
    <td>
    El nombre del sitio asignado por Alipay+, que puede ser utilizado en el negocio de Alipay+. Los valores admitidos son: 
    - EASYPAISA
    - DANA
    - GCASH
    - TRUEMONEY
    - TNG
    - BKASH
    - KAKAOPAY
    - ALIPAY_CN
    - ALIPAY_HK.
    </td>
  </tr>
</table>

Un ejemplo de mensaje devuelto con éxito es el siguiente:

```js
{
  "siteName":"EASYPAISA"
}
```
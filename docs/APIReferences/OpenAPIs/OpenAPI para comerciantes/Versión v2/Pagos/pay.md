---
sidebar_position: 1
---

# /v2/payments/pay



POST `/v2/payments/pay`

La API de `pay` se utiliza para iniciar una solicitud de pago a las billeteras.

**Nota:** Un pago que tiene lugar en las billeteras.

1）El comerciante/socio inicia una solicitud de pago para la billetera a través de esta interfaz.

2） La billetera manejará diferentes escenarios de pago según los parámetros de la solicitud.

Actualmente, esta API admite los siguientes escenarios:

- Pago de cajero: generalmente utilizado en el escenario de pago en línea.En este escenario, el comerciante/socio llamará a esta API para crear un pedido, y la billetera devolverá la URL de la página del cajero al comerciante/socio, y luego redirigirá a esta página del cajero.Entonces el usuario puede finalizar el pago en la página del cajero.


## Estructura de mensajes

### Request




<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo de datos</th>
    <th>Requerido</th>
    <th>Descripción</th>
    <th>Ejemplo</th>
  </tr>
  <tr>
    <td>appId</td>
    <td>String </td>
    <td>Yes</td>
    <td>
        The Mini Program app ID.
        Max. length: 32 characters.
    </td>
    <td>"3333010071465913xxx"</td>
  </tr>
  <tr>
    <td>productCode</td>
    <td>String </td>
    <td>No</td>
    <td>
    The product code, AGREEMENT_PAYMENT, IN_STORE_PAYMENT, CASHIER_PAYMENT 
    Max. length: 32 characters.
    </td>
    <td>"CASHIER_PAYMENT"</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
---
sidebar_position: 3
---

# UpdateManager.onCheckForUpdate

Escucha el evento en el que se envía una petición al servidor para comprobar si hay actualizaciones. En lugar de ser activada activamente por el desarrollador, la comprobación de la actualización de la versión se activa automáticamente durante el arranque en frío del miniprograma.

## Parámetro

El parámetro está en tipo de objeto y tiene la siguiente propiedad:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>hasUpdate</td>
        <td>Booleano</td>
        <td>Sí</td>
        <td>Un indicador de si hay una nueva versión disponible.</td>
    </tr>
</table>

---
sidebar_position: 2
---

# Códigos de error de la API Bluetooth

La siguiente tabla enumera los errores para las API Bluetooth. Puede encontrar códigos de error, mensajes de error y soluciones para resolver los errores.
## Requisitos del sistema

<table>
    <tr>
        <th>Código de error</th>
        <th>Mensaje de error</th>
        <th>Soluciones</th>
    </tr>
     <tr>
        <td>10000</td>
        <td>El adaptador Bluetooth no se inicializa.</td>
        <td>Llame a API [my.openBluetoothAdapter](/) para la inicialización.</td>
     </tr>
     <tr>
        <td>10001</td>
        <td>El adaptador Bluetooth no está disponible.</td>
        <td>Compruebe si BLE es compatible con su dispositivo y habilite la función si es compatible.</td>
     </tr>
     <tr>
        <td>10002</td>
        <td>Dispositivo no encontrado</td>
        <td>Verifique la ID del dispositivo y asegúrese de que esté habilitada la transmisión periférica del dispositivo de destino.</td>
     </tr>
     <tr>
        <td>10003</td>
        <td>La conexión falló</td>
        <td>Verifique la ID del dispositivo y asegúrese de que esté habilitada la transmisión periférica del dispositivo de destino.</td>
     </tr>
     <tr>
        <td>10004</td>
        <td>Servicio no encontrado</td>
        <td>Verifique la ID del dispositivo y asegúrese de que el servicio esté disponible para dispositivos de destino.</td>
     </tr>
     <tr>
        <td>10005</td>
        <td>Característica no encontrada</td>
        <td>Use una ID de característica correcta y asegúrese de que la característica esté habilitada para el servicio.</td>
     </tr>
     <tr>
        <td>10006	</td>
        <td>Conexión perdida</td>
        <td>Desconectar e intentar de nuevo.</td>
     </tr>
     <tr>
        <td>10007</td>
        <td>Característica no compatible</td>
        <td>Consulte las funciones de lectura, escritura y notificación de la característica actual.</td>
     </tr>
     <tr>
        <td>10008</td>
        <td>Error del sistema</td>
        <td>Un error de sistema desconocido.</td>
     </tr>
     <tr>
        <td>10009</td>
        <td>BLE no es compatible con los sistemas Android con versiones inferiores a 4.3.</td>
        <td>Recuerde a los usuarios que no es compatible en la versión actual del sistema Android.</td>
     </tr>
     <tr>
        <td>10010</td>
        <td>Descriptor no encontrado</td>
        <td>Use una identificación de servicio correcta y una identificación característica.</td>
     </tr>
     <tr>
        <td>10011</td>
        <td>ID de dispositivo no válido</td>
        <td>Use una ID de dispositivo correcta.</td>
     </tr>
     <tr>
        <td>10012</td>
        <td>ID de servicio no válido</td>
        <td>Use una ID de servicio correcta.</td>
     </tr>
     <tr>
        <td>10013</td>
        <td>Identificación de Charateristic no válida</td>
        <td>Use una identificación de carateística correcta.</td>
     </tr>
     <tr>
        <td>10014</td>
        <td>Datos inválidos</td>
        <td>Usar datos válidos.</td>
     </tr>
     <tr>
        <td>10015</td>
        <td>Se acabó el tiempo</td>
        <td>Intentar otra vez.</td>
     </tr>
     <tr>
        <td>10016</td>
        <td>Parámetros no es suficiente</td>
        <td>Verifique los parámetros y vuelva a intentarlo.</td>
     </tr>
     <tr>
        <td>10017</td>
        <td>No se pudo escribir característico</td>
        <td>Asegúrese de que la escritura sea compatible con Charateristic periférico.No se desconecte.</td>
     </tr>
     <tr>
        <td>10018</td>
        <td>No se pudo leer la característica</td>
        <td>Asegúrese de que la lectura sea compatible con el charaterista periférico. No se desconecte.</td>
     </tr>
</table>




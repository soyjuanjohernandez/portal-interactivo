---
sidebar_position: 5
---

# Bluetooth API Preguntas frecuentes

P: ¿La llamada a la API de ```my. WriteBLECharacteristicValue``` devuelve un valor vacío?

R: No. La llamada a esta API devuelve el valor de lo que se escribe.

P: ¿Por qué la llamada a la API de ```my.onBLECharacteristicValueChange``` no permite escuchar? ¿Tengo que escribir antes de poder escuchar?

R: Sí. Para llamar a esta API, primero tiene que escribir antes de poder escuchar. Con el fin de evitar múltiples devoluciones de llamada de un evento causado por múltiples oyentes de eventos registrados, se recomienda llamar al método off para escuchar un evento y cerrar el oyente de eventos anterior, antes de llamar al método on.

P: ¿Por qué obtengo un código de error ```10014``` con la llamada a la API de ```my. Why writeBLECharacteristicValue```?

R: El código de error ```10014``` significa que los datos que envía están vacíos o mal formateados. Se recomienda comprobar si hay errores en los datos escritos o en la conversión HEX.

P: ¿Puedo utilizar la matriz hexadecimal para escribir el valor característico con la API ```my writeBLECharacteristicValue```?

R: No. Los valores de característica que se escriben son cadenas hexadecimales, que están limitadas a 20 bytes.

P: ¿Cuál es el formato ```deviceId``` para dispositivos Android e iOS?

A:

* Un dispositivo Android obtiene la dirección MAC para bluetooth, como por ejemplo: ```11:22:33:44:55:66```.
* Un dispositivo iOS obtiene el UUID del bluetooth, como por ejemplo ```00000000-0000-0000-0000-000000000000```.

P: ¿Por qué no puedo buscar ningún dispositivo con la llamada a la API ```my.startBluetoothDevicesDiscovery```?


R: Asegúrese de que el dispositivo es detectable. Si la API se pasa a Servicios, asegúrese de que el contenido detectable del dispositivo contiene el UUID del servicio.

P: Si el posicionamiento GPS no está activado al llamar a una API bluetooth, algunos dispositivos informarán de un mensaje de error que indica que el bluetooth no puede conectarse porque el servicio de posicionamiento no está activado.

R: La función bluetooth del miniprograma depende del posicionamiento GPS, ya que cerca del 20% de los teléfonos móviles dependen del GPS para habilitar el bluetooth. Se recomienda guiar a los usuarios para que activen el servicio de posicionamiento GPS para poder conectarse con bluetooth.

P: ¿Cómo resuelvo el fallo de conexión del dispositivo?

R: Por favor, asegúrese de que el ```deviceId``` correcto se transmite con señales fuertes. Si la señal es débil, puede producirse un fallo en la conexión del dispositivo.

P: ¿Cómo resolver el fallo de escritura/lectura de datos?

R: Asegúrese de comprobar los siguientes ajustes:

* ```DeviceId```, ```serviceId``` y ```characteristicId``` se transmiten en el formato correcto.
* ```DeviceId``` está conectado (Puede llamar a la API ```my. OnBLEConnectionStateChanged``` para escuchar los cambios de estado de la conexión; Llame a la API ```my. GetConnectedBluetoothDevices``` para comprobar si hay dispositivos conectados.
* Escribe un método en el estado conectado.
* Comprueba y asegúrate de que ```characteristicId``` pertenece a este Servicio.
* Esta característica admite escritura/lectura.

P: ¿Cómo recibo notificaciones de datos?

A:

* Asegúrese de llamar a la API ```my notifyBLECharacteristicValueChange``` con los parámetros correctos.
* Notifique o indique que las características son compatibles con el ```characteristicID``` transmitido.
* Asegúrese de que se notifica al hardware.
* Preste atención a la secuencia de flujo básica, es decir, llame a la API ```notifyBLECharacteristicValueChange``` una vez que esté conectado.

P: ¿Por qué se llama varias veces a las llamadas de retorno de eventos?

R: Se ha escuchado el mismo evento debido a múltiples registros de funciones anónimas. Se recomienda llamar al método off para escuchar un evento y cerrar el escuchador de eventos anterior, antes de llamar al método on.
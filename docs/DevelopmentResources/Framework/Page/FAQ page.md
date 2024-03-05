---
sidebar_position: 7
---

# Page: Preguntas frecuentes

**P: ¿Cómo usar las cookies en Mini Program?**

R: Las cookies no se sugieren para ser utilizadas en Mini Program, las cookies establecidas por el servidor no serán prohibidas y se establecerán en el proceso del Mini Program. En la próxima solicitud, la cookie se establecerá automáticamente en la solicitud. En el lado del frente, la cookie no se puede obtener y no hará nada con respecto a la cookie.

**P: ¿Cómo obtener los parámetros de onload en cierta página?**

R: Desde ```getCurrentPages```, se puede obtener la instancia de la pila de páginas, luego se pueden obtener los parámetros.

**P: ¿Puede el Mini Program escuchar el evento de cierre? ¿Qué función se invocará al hacer clic en el botón de cierre?**

R: El Mini Program no puede escuchar el evento de cierre y no se invocará nada al hacer clic en el botón de cierre.

**P: Los datos no se actualizan al llamar a setData**

R: Por favor, verifica la efectividad de esta instancia de ```this``` y asegúrate de que la lógica del código sea correcta.

**P: Se muestra una página en blanco al saltar a una nueva página, ¿cómo solucionarlo?**

R: Si se utiliza una ```request``` para obtener datos del lado del servidor, por favor asegúrate de que la lista blanca de dominios esté configurada. De lo contrario, los datos no se pueden solicitar, lo que puede causar una página en blanco.

**P: ¿Cómo obtener el parámetro en el enlace al saltar a una nueva página?**

R: Usa ```onLaunch``` para escuchar la inicialización del Mini Programa, la consulta se puede obtener del parámetro ```onLaunch```.

**P: ¿Cómo importar js en Mini Program?**

R: Usa ```import {Ajax} from '/util (o ./util)'``` para importar js.

**P: ¿Cómo desencadenar una función automáticamente sin hacer clic?**

R: Llama a la función en ```onload``` o ```onshow```.
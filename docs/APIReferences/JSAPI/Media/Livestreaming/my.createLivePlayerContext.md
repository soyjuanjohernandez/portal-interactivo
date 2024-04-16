---
sidebar_position: 1
---

La API **my.createLivePlayerContext** se utiliza para reproducir vídeos en directo en mini programas. Puedes llamar a esta API para pasar el *playerId*, que crea y devuelve un objeto de contexto de reproductor en directo - *LivePlayerContext*. Aquí, el *playerId* es personalizado por el desarrollador en el atributo ID de la etiqueta correspondiente ``<live-player>``, y puedes usar *LivePlayerContext* para operar un componente de reproductor en directo. Para obtener más información sobre el objeto de contexto, consulta la sección de métodos de *LivePlayerContext*.

## Antes de que empieces

Antes de llamar a la API **my.createLivePlayerContext**, asegúrese de cumplir con los siguientes dos requisitos:

* Su biblioteca de núcleo de miniprograma (también conocida como APPX o LIB) debe ser la versión 2.0 o posterior. Puede comunicarse con su arquitecto de solución para las instrucciones de actualización.
* La super aplicación donde se ejecuta su mini programa debe integrar IAPminiprogram SDK versión 2.44.0 o posterior.

## Parámetros

La siguiente tabla enumera los parámetros de solicitud de la API **my.createLivePlayContext**.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Valor por defecto</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>src</td>
        <td>String</td>
        <td>""</td>
        <td>La URL de la fuente de video en live-streaming. Solo se admiten URL de RTMP.</td>
    </tr>
    <tr>
        <td>mode</td>
        <td>String</td>
        <td>"live"</td>
        <td>La modalidad de transmisión del video en vivo. El valor válido es: <br /> ``live``: Indica que el video se transmite en modo de emisión en vivo, donde no se admiten chats de voz en vivo.</td>
    </tr>
    <tr>
        <td>orientation</td>
        <td>String</td>
        <td>"vertical"</td>
        <td>
            La orientación inicial del video. El valor válido es:
            <></>
            ``vertical``: Indica que la orientación del video es vertical cuando los usuarios ingresan a la interfaz de reproducción de video.
         </td>
    </tr>
    <tr>
        <td>onStateChange</td>
        <td>Function</td>
        <td>N/A</td>
        <td>
            Oyente para los siguientes dos eventos:
            * El estado del jugador cambia.Consulte la sección Códigos de estado para más detalles.
            * Los errores de devolución de llamada.Consulte la sección Códigos de error para obtener más detalles.
        </td>
    </tr>
    <tr>
        <td>muted</td>
        <td>Boolean</td>
        <td>false</td>
        <td>
            Silencia el video o no cuando comienza la reproducción. Los valores válidos son:
            * ``true``: Indica comenzar a reproducir el video en silencio.
            * ``false``: Indica comenzar a reproducir el video con sonido.
        </td>
    </tr>
    <tr>
        <td>onFullScreenChange</td>
        <td>Function</td>
        <td>N/A</td>
        <td>
            Oyente para las rotaciones de pantalla en el modo de pantalla completa. Los valores válidos son:
            * ``90``: La pantalla se gira en la dirección en sentido antihorario en 90 grados.
            * ``0``: La pantalla se gira a la posición vertical normal.
            * ``-90``: La pantalla gira en sentido horario en 90 grados.
        </td>
    </tr>
</table>

### LivePlayerConetxt methods

La siguiente tabla enumera los métodos que puedes usar para operar un componente de reproductor en directo.

<table>
    <tr>
        <th>Método</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>play</td>
        <td>Comienza a reproducir el video.</td>
    </tr>
    <tr>
        <td>pause</td>
        <td>Pausa el video.</td>
    </tr>
    <tr>
        <td>resume</td>
        <td>Continúa reproduciendo el video. Puedes usar este método para operar videos en pausa (con el método ``pause``) solamente, lo que significa que el método no puede aplicarse a videos finalizados (con el método ``stop``).</td>
    </tr>
    <tr>
        <td>stop</td>
        <td>Deja de reproducir el video.</td>
    </tr>
    <tr>
        <td>mute</td>
        <td>
            Momete el video o no.Puede pasar un objeto JSON para cambiar la configuración de sonido con cualquiera de los siguientes dos valores válidos:
            * ``true``: Indica silenciar el video
            * ``false``: Indica activar el video.
            <></>
            La muestra del código de solicitud puede ser la siguiente: ``{ison:true,}``.
        </td>
    </tr>
    <tr>
        <td>requestFullScreen</td>
        <td>
            Entra en el modo de pantalla completa.Puede pasar un objeto JSON para establecer la orientación de video para este modo con uno de los siguientes tres valores válidos:
            * ``0``: Indica que el video se reproduce verticalmente en posición vertical normal.
            * ``90``: Indica que el video se gira en la dirección en sentido antihorario en 90 grados.
            * ``-90``: Indica que el video se gira en sentido horario en 90 grados.
            <></>
            Si no se especifica este parámetro, la dirección se determina automáticamente por la relación de aspecto del video.
            <></>
            La muestra del código de solicitud puede ser la siguiente: ``{direction: -90,}``. 
        </td>
    </tr>
    <tr>
        <td>exitFullScreen</td>
        <td>Deja el modo de pantalla completa.</td>
    </tr>
</table>

## Códigos de resultados

The status codes reflecting the player's states and error codes specified by the *onStateChange* function are as follows.

### Códigos de estado

La siguiente tabla enumera los códigos de estado y sus descripciones.

<table>
    <tr>
        <th>Código de resultados</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>2004</td>
        <td>El video se está reproduciendo.</td>
    </tr>
    <tr>
        <td>2005</td>
        <td>El video se detiene.</td>
    </tr>
    <tr>
        <td>2006</td>
        <td>El video se detiene.</td>
    </tr>
    <tr>
        <td>2007</td>
        <td>El video se está cargando.</td>
    </tr>
</table>

### Códigos de error

La siguiente tabla enumera los códigos de error, sus descripciones, acciones adicionales y si los códigos de error son compatibles con el sistema Android o iOS.

<table>
    <tr>
        <th>Código de error</th>
        <th>Descripción</th>
        <th>Nuevas medidas</th>
        <th>Android</th>
        <th>iOS</th>
    </tr>
    <tr>
        <td>1002</td>
        <td>Error del sistema de jugadores.</td>
        <td>Verifique el sistema de reproductor y si la versión SDK del contenedor cumple con los requisitos e intente nuevamente.Si el problema persiste, comuníquese con Mini Program Platform para soporte técnico.</td>
        <td>√</td>
        <td>√</td>
    </tr>
    <tr>
        <td>1005</td>
        <td>Los dispositivos de los usuarios no se conectaron a la red.</td>
        <td>Pídale a los usuarios que revisen sus conexiones de red y vuelvan a intentarlo.</td>
        <td>√</td>
        <td></td>
    </tr>
    <tr>
        <td>1006</td>
        <td>La URL especificada en el parámetro SRC no es válida.</td>
        <td>Compruebe si la URL es correcta.</td>
        <td>√</td>
        <td>√</td>
    </tr>
    <tr>
        <td>1007</td>
        <td>Error de inicialización del jugador.</td>
        <td>Inicializa el jugador y vuelve a intentarlo.Si el problema persiste, comuníquese con Mini Program Platform para soporte técnico.</td>
        <td>√</td>
        <td></td>
    </tr>
    <tr>
        <td>1008</td>
        <td>No se pudo reproducir el video debido a un error de red.</td>
        <td>Pídale a los usuarios que revisen sus conexiones de red y vuelvan a intentarlo.</td>
        <td>√</td>
        <td></td>
    </tr>
    <tr>
        <td>1010</td>
        <td>Tiempo de espera de conexión debido a una red lenta.</td>
        <td>Pídale a los usuarios que revisen sus conexiones de red y vuelvan a intentarlo.</td>
        <td>√</td>
        <td></td>
    </tr>
    <tr>
        <td>3002</td>
        <td>Error de decodificación de hardware.</td>
        <td>Informe a los usuarios que el video no pudo reproducir debido a un error de decodificación de hardware.También se recomienda proporcionar instrucciones para ayudar a los usuarios a solucionar problemas de este problema.</td>
        <td>√</td>
        <td></td>
    </tr>
</table>

## Código de muestra

### .axml

Consulte la siguiente muestra para aprender sobre cómo usar AXML para llamar a la API.

```html title="axml"
<live-player style="width:100%"
  id="liveplayer"
  src="{{src}}"
  autoplay="{{true}}"
  class="live"
  orientation="{{}}"
  onStateChange="onStateChange"
  onFullscreenChange="onFullscreenChange"
  />
```

### .js

Consulte la siguiente muestra para aprender sobre cómo usar JavaScript para llamar a la API.

```js title="js"
Page({
    data: {
        url: "xxxxxxxxx",
        state: "0",
        direction: 90,
        error: "0",
        isMute: false,
        direction: 90,
    },

    onLoad() {
        this.liveplayerContext = my.createLivePlayerContext('liveplayer');
    },

    play() {
        this.liveplayerContext.play();
    },

    pause() {
        this.liveplayerContext.pause();
    },

    resume() {
        this.liveplayerContext.resume();
    },

    stop() {
        this.liveplayerContext.stop();
    },

    mute() {
        console.log("mute");
        this.data.isMute = !this.data.isMute;
        
        this.liveplayerContext.mute({
            ison: this.data.isMute,
        });
        console.log("mute finished, val=" + this.data.isMute);
    },
  onStateChange(e) {
        console.log("onStateChange, e=" + JSON.stringify(e));
        this.setData({
            state: e.detail.code,
        });

    const item = {
      name: "onStateChange",
      message: JSON.stringify(e, null, 2)
    };
    let events = this.data.events;
    events.push(item)
    this.setData({
      'events': events
    });
    },

    onFullscreenChange(e) {
        console.log("arguments.length=" + arguments.length);
        console.log("onFullscreenChange, e=" + JSON.stringify(e));
        this.setData({
            direction: e.detail.direction + "-" + e.detail.fullScreen,
        });

    const item = {
      name: "onFullscreenChange",
      message: JSON.stringify(e, null, 2)
    };
    let events = this.data.events;
    events.push(item)
    this.setData({
      'events': events
    });
    },
  });
```











































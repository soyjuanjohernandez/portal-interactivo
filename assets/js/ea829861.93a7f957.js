"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[9635],{67053:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var s=n(74848),i=n(28453);const d={sidebar_position:1},t=void 0,a={id:"APIReferences/JSAPI/Media/Livestreaming/my.createLivePlayerContext",title:"my.createLivePlayerContext",description:"La API my.createLivePlayerContext se utiliza para reproducir v\xeddeos en directo en mini programas. Puedes llamar a esta API para pasar el playerId, que crea y devuelve un objeto de contexto de reproductor en directo - LivePlayerContext. Aqu\xed, el playerId es personalizado por el desarrollador en el atributo ID de la etiqueta correspondiente ``, y puedes usar LivePlayerContext para operar un componente de reproductor en directo. Para obtener m\xe1s informaci\xf3n sobre el objeto de contexto, consulta la secci\xf3n de m\xe9todos de LivePlayerContext.",source:"@site/docs/APIReferences/JSAPI/Media/Livestreaming/my.createLivePlayerContext.md",sourceDirName:"APIReferences/JSAPI/Media/Livestreaming",slug:"/APIReferences/JSAPI/Media/Livestreaming/my.createLivePlayerContext",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Media/Livestreaming/my.createLivePlayerContext",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Livestreaming",permalink:"/portal-interactivo/docs/category/livestreaming"},next:{title:"Almacenamiento",permalink:"/portal-interactivo/docs/category/almacenamiento"}},l={},o=[{value:"Antes de que empieces",id:"antes-de-que-empieces",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"LivePlayerConetxt methods",id:"liveplayerconetxt-methods",level:3},{value:"C\xf3digos de resultados",id:"c\xf3digos-de-resultados",level:2},{value:"C\xf3digos de estado",id:"c\xf3digos-de-estado",level:3},{value:"C\xf3digos de error",id:"c\xf3digos-de-error",level:3},{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2},{value:".axml",id:"axml",level:3},{value:".js",id:"js",level:3}];function c(e){const r={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["La API ",(0,s.jsx)(r.strong,{children:"my.createLivePlayerContext"})," se utiliza para reproducir v\xeddeos en directo en mini programas. Puedes llamar a esta API para pasar el ",(0,s.jsx)(r.em,{children:"playerId"}),", que crea y devuelve un objeto de contexto de reproductor en directo - ",(0,s.jsx)(r.em,{children:"LivePlayerContext"}),". Aqu\xed, el ",(0,s.jsx)(r.em,{children:"playerId"})," es personalizado por el desarrollador en el atributo ID de la etiqueta correspondiente ",(0,s.jsx)(r.code,{children:"<live-player>"}),", y puedes usar ",(0,s.jsx)(r.em,{children:"LivePlayerContext"})," para operar un componente de reproductor en directo. Para obtener m\xe1s informaci\xf3n sobre el objeto de contexto, consulta la secci\xf3n de m\xe9todos de ",(0,s.jsx)(r.em,{children:"LivePlayerContext"}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"antes-de-que-empieces",children:"Antes de que empieces"}),"\n",(0,s.jsxs)(r.p,{children:["Antes de llamar a la API ",(0,s.jsx)(r.strong,{children:"my.createLivePlayerContext"}),", aseg\xfarese de cumplir con los siguientes dos requisitos:"]}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"Su biblioteca de n\xfacleo de miniprograma (tambi\xe9n conocida como APPX o LIB) debe ser la versi\xf3n 2.0 o posterior. Puede comunicarse con su arquitecto de soluci\xf3n para las instrucciones de actualizaci\xf3n."}),"\n",(0,s.jsx)(r.li,{children:"La super aplicaci\xf3n donde se ejecuta su mini programa debe integrar IAPminiprogram SDK versi\xf3n 2.44.0 o posterior."}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,s.jsxs)(r.p,{children:["La siguiente tabla enumera los par\xe1metros de solicitud de la API ",(0,s.jsx)(r.strong,{children:"my.createLivePlayContext"}),"."]}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Propiedad"}),(0,s.jsx)("th",{children:"Tipo"}),(0,s.jsx)("th",{children:"Valor por defecto"}),(0,s.jsx)("th",{children:"Descripci\xf3n"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"src"}),(0,s.jsx)("td",{children:"String"}),(0,s.jsx)("td",{children:'""'}),(0,s.jsx)("td",{children:"La URL de la fuente de video en live-streaming. Solo se admiten URL de RTMP."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"mode"}),(0,s.jsx)("td",{children:"String"}),(0,s.jsx)("td",{children:'"live"'}),(0,s.jsxs)("td",{children:["La modalidad de transmisi\xf3n del video en vivo. El valor v\xe1lido es: ",(0,s.jsx)("br",{})," ",(0,s.jsx)(r.code,{children:"live"}),": Indica que el video se transmite en modo de emisi\xf3n en vivo, donde no se admiten chats de voz en vivo."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"orientation"}),(0,s.jsx)("td",{children:"String"}),(0,s.jsx)("td",{children:'"vertical"'}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"La orientaci\xf3n inicial del video. El valor v\xe1lido es:"}),(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"vertical"}),": Indica que la orientaci\xf3n del video es vertical cuando los usuarios ingresan a la interfaz de reproducci\xf3n de video."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"onStateChange"}),(0,s.jsx)("td",{children:"Function"}),(0,s.jsx)("td",{children:"N/A"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Oyente para los siguientes dos eventos:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:"El estado del jugador cambia.Consulte la secci\xf3n C\xf3digos de estado para m\xe1s detalles."}),"\n",(0,s.jsx)(r.li,{children:"Los errores de devoluci\xf3n de llamada.Consulte la secci\xf3n C\xf3digos de error para obtener m\xe1s detalles."}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"muted"}),(0,s.jsx)("td",{children:"Boolean"}),(0,s.jsx)("td",{children:"false"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Silencia el video o no cuando comienza la reproducci\xf3n. Los valores v\xe1lidos son:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"true"}),": Indica comenzar a reproducir el video en silencio."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"false"}),": Indica comenzar a reproducir el video con sonido."]}),"\n"]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"onFullScreenChange"}),(0,s.jsx)("td",{children:"Function"}),(0,s.jsx)("td",{children:"N/A"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Oyente para las rotaciones de pantalla en el modo de pantalla completa. Los valores v\xe1lidos son:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"90"}),": La pantalla se gira en la direcci\xf3n en sentido antihorario en 90 grados."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"0"}),": La pantalla se gira a la posici\xf3n vertical normal."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"-90"}),": La pantalla gira en sentido horario en 90 grados."]}),"\n"]})]})]})]}),"\n",(0,s.jsx)(r.h3,{id:"liveplayerconetxt-methods",children:"LivePlayerConetxt methods"}),"\n",(0,s.jsx)(r.p,{children:"La siguiente tabla enumera los m\xe9todos que puedes usar para operar un componente de reproductor en directo."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"M\xe9todo"}),(0,s.jsx)("th",{children:"Descripci\xf3n"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"play"}),(0,s.jsx)("td",{children:"Comienza a reproducir el video."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"pause"}),(0,s.jsx)("td",{children:"Pausa el video."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"resume"}),(0,s.jsxs)("td",{children:["Contin\xfaa reproduciendo el video. Puedes usar este m\xe9todo para operar videos en pausa (con el m\xe9todo ",(0,s.jsx)(r.code,{children:"pause"}),") solamente, lo que significa que el m\xe9todo no puede aplicarse a videos finalizados (con el m\xe9todo ",(0,s.jsx)(r.code,{children:"stop"}),")."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"stop"}),(0,s.jsx)("td",{children:"Deja de reproducir el video."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"mute"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Momete el video o no.Puede pasar un objeto JSON para cambiar la configuraci\xf3n de sonido con cualquiera de los siguientes dos valores v\xe1lidos:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"true"}),": Indica silenciar el video"]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"false"}),": Indica activar el video."]}),"\n"]}),(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)(r.p,{children:["La muestra del c\xf3digo de solicitud puede ser la siguiente: ",(0,s.jsx)(r.code,{children:"{ison:true,}"}),"."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"requestFullScreen"}),(0,s.jsxs)("td",{children:[(0,s.jsx)(r.p,{children:"Entra en el modo de pantalla completa.Puede pasar un objeto JSON para establecer la orientaci\xf3n de video para este modo con uno de los siguientes tres valores v\xe1lidos:"}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"0"}),": Indica que el video se reproduce verticalmente en posici\xf3n vertical normal."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"90"}),": Indica que el video se gira en la direcci\xf3n en sentido antihorario en 90 grados."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"-90"}),": Indica que el video se gira en sentido horario en 90 grados."]}),"\n"]}),(0,s.jsx)(s.Fragment,{}),(0,s.jsx)(r.p,{children:"Si no se especifica este par\xe1metro, la direcci\xf3n se determina autom\xe1ticamente por la relaci\xf3n de aspecto del video."}),(0,s.jsx)(s.Fragment,{}),(0,s.jsxs)(r.p,{children:["La muestra del c\xf3digo de solicitud puede ser la siguiente: ",(0,s.jsx)(r.code,{children:"{direction: -90,}"}),"."]})]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"exitFullScreen"}),(0,s.jsx)("td",{children:"Deja el modo de pantalla completa."})]})]}),"\n",(0,s.jsx)(r.h2,{id:"c\xf3digos-de-resultados",children:"C\xf3digos de resultados"}),"\n",(0,s.jsxs)(r.p,{children:["The status codes reflecting the player's states and error codes specified by the ",(0,s.jsx)(r.em,{children:"onStateChange"})," function are as follows."]}),"\n",(0,s.jsx)(r.h3,{id:"c\xf3digos-de-estado",children:"C\xf3digos de estado"}),"\n",(0,s.jsx)(r.p,{children:"La siguiente tabla enumera los c\xf3digos de estado y sus descripciones."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"C\xf3digo de resultados"}),(0,s.jsx)("th",{children:"Descripci\xf3n"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2004"}),(0,s.jsx)("td",{children:"El video se est\xe1 reproduciendo."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2005"}),(0,s.jsx)("td",{children:"El video se detiene."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2006"}),(0,s.jsx)("td",{children:"El video se detiene."})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"2007"}),(0,s.jsx)("td",{children:"El video se est\xe1 cargando."})]})]}),"\n",(0,s.jsx)(r.h3,{id:"c\xf3digos-de-error",children:"C\xf3digos de error"}),"\n",(0,s.jsx)(r.p,{children:"La siguiente tabla enumera los c\xf3digos de error, sus descripciones, acciones adicionales y si los c\xf3digos de error son compatibles con el sistema Android o iOS."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"C\xf3digo de error"}),(0,s.jsx)("th",{children:"Descripci\xf3n"}),(0,s.jsx)("th",{children:"Nuevas medidas"}),(0,s.jsx)("th",{children:"Android"}),(0,s.jsx)("th",{children:"iOS"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1002"}),(0,s.jsx)("td",{children:"Error del sistema de jugadores."}),(0,s.jsx)("td",{children:"Verifique el sistema de reproductor y si la versi\xf3n SDK del contenedor cumple con los requisitos e intente nuevamente.Si el problema persiste, comun\xedquese con Mini Program Platform para soporte t\xe9cnico."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{children:"\u221a"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1005"}),(0,s.jsx)("td",{children:"Los dispositivos de los usuarios no se conectaron a la red."}),(0,s.jsx)("td",{children:"P\xeddale a los usuarios que revisen sus conexiones de red y vuelvan a intentarlo."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1006"}),(0,s.jsx)("td",{children:"La URL especificada en el par\xe1metro SRC no es v\xe1lida."}),(0,s.jsx)("td",{children:"Compruebe si la URL es correcta."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{children:"\u221a"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1007"}),(0,s.jsx)("td",{children:"Error de inicializaci\xf3n del jugador."}),(0,s.jsx)("td",{children:"Inicializa el jugador y vuelve a intentarlo.Si el problema persiste, comun\xedquese con Mini Program Platform para soporte t\xe9cnico."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1008"}),(0,s.jsx)("td",{children:"No se pudo reproducir el video debido a un error de red."}),(0,s.jsx)("td",{children:"P\xeddale a los usuarios que revisen sus conexiones de red y vuelvan a intentarlo."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"1010"}),(0,s.jsx)("td",{children:"Tiempo de espera de conexi\xf3n debido a una red lenta."}),(0,s.jsx)("td",{children:"P\xeddale a los usuarios que revisen sus conexiones de red y vuelvan a intentarlo."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"3002"}),(0,s.jsx)("td",{children:"Error de decodificaci\xf3n de hardware."}),(0,s.jsx)("td",{children:"Informe a los usuarios que el video no pudo reproducir debido a un error de decodificaci\xf3n de hardware.Tambi\xe9n se recomienda proporcionar instrucciones para ayudar a los usuarios a solucionar problemas de este problema."}),(0,s.jsx)("td",{children:"\u221a"}),(0,s.jsx)("td",{})]})]}),"\n",(0,s.jsx)(r.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,s.jsx)(r.h3,{id:"axml",children:".axml"}),"\n",(0,s.jsx)(r.p,{children:"Consulte la siguiente muestra para aprender sobre c\xf3mo usar AXML para llamar a la API."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-html",metastring:'title="axml"',children:'<live-player style="width:100%"\r\n  id="liveplayer"\r\n  src="{{src}}"\r\n  autoplay="{{true}}"\r\n  class="live"\r\n  orientation="{{}}"\r\n  onStateChange="onStateChange"\r\n  onFullscreenChange="onFullscreenChange"\r\n  />\n'})}),"\n",(0,s.jsx)(r.h3,{id:"js",children:".js"}),"\n",(0,s.jsx)(r.p,{children:"Consulte la siguiente muestra para aprender sobre c\xf3mo usar JavaScript para llamar a la API."}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-js",metastring:'title="js"',children:'Page({\r\n    data: {\r\n        url: "xxxxxxxxx",\r\n        state: "0",\r\n        direction: 90,\r\n        error: "0",\r\n        isMute: false,\r\n        direction: 90,\r\n    },\r\n\r\n    onLoad() {\r\n        this.liveplayerContext = my.createLivePlayerContext(\'liveplayer\');\r\n    },\r\n\r\n    play() {\r\n        this.liveplayerContext.play();\r\n    },\r\n\r\n    pause() {\r\n        this.liveplayerContext.pause();\r\n    },\r\n\r\n    resume() {\r\n        this.liveplayerContext.resume();\r\n    },\r\n\r\n    stop() {\r\n        this.liveplayerContext.stop();\r\n    },\r\n\r\n    mute() {\r\n        console.log("mute");\r\n        this.data.isMute = !this.data.isMute;\r\n        \r\n        this.liveplayerContext.mute({\r\n            ison: this.data.isMute,\r\n        });\r\n        console.log("mute finished, val=" + this.data.isMute);\r\n    },\r\n  onStateChange(e) {\r\n        console.log("onStateChange, e=" + JSON.stringify(e));\r\n        this.setData({\r\n            state: e.detail.code,\r\n        });\r\n\r\n    const item = {\r\n      name: "onStateChange",\r\n      message: JSON.stringify(e, null, 2)\r\n    };\r\n    let events = this.data.events;\r\n    events.push(item)\r\n    this.setData({\r\n      \'events\': events\r\n    });\r\n    },\r\n\r\n    onFullscreenChange(e) {\r\n        console.log("arguments.length=" + arguments.length);\r\n        console.log("onFullscreenChange, e=" + JSON.stringify(e));\r\n        this.setData({\r\n            direction: e.detail.direction + "-" + e.detail.fullScreen,\r\n        });\r\n\r\n    const item = {\r\n      name: "onFullscreenChange",\r\n      message: JSON.stringify(e, null, 2)\r\n    };\r\n    let events = this.data.events;\r\n    events.push(item)\r\n    this.setData({\r\n      \'events\': events\r\n    });\r\n    },\r\n  });\n'})})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>a});var s=n(96540);const i={},d=s.createContext(i);function t(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);
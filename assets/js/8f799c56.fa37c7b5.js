"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[3220],{49476:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>t});var i=r(74848),d=r(28453);const o={sidebar_position:2},s=void 0,a={id:"APIReferences/JSAPI/Media/Video/my.createVideoContext",title:"my.createVideoContext",description:"La my.createVideoContext API se utiliza para reproducir v\xeddeos en mini-programas. Puedes llamar a esta API para ingresar videoId y devolver videoContext, donde videoId se refiere al atributo de ID personalizado por el desarrollador en la pesta\xf1a de v\xeddeo correspondiente, y puedes operar un componente de v\xeddeo a trav\xe9s de videoContext.",source:"@site/docs/APIReferences/JSAPI/Media/Video/my.createVideoContext.md",sourceDirName:"APIReferences/JSAPI/Media/Video",slug:"/APIReferences/JSAPI/Media/Video/my.createVideoContext",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Media/Video/my.createVideoContext",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"my.chooseVideo",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Media/Video/my.chooseVideo"},next:{title:"Lottie",permalink:"/portal-interactivo/docs/category/lottie"}},l={},t=[{value:"Antes de que empieces",id:"antes-de-que-empieces",level:2},{value:"Efecto",id:"efecto",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"C\xf3digos de error",id:"c\xf3digos-de-error",level:2},{value:"C\xf3digos de muestra",id:"c\xf3digos-de-muestra",level:2},{value:".axml",id:"axml",level:3},{value:".js",id:"js",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Cuando el usuario ve un video que se carg\xf3 y se ve una vez en el componente de video, \xbfdebe cargarse el video nuevamente?",id:"cuando-el-usuario-ve-un-video-que-se-carg\xf3-y-se-ve-una-vez-en-el-componente-de-video-debe-cargarse-el-video-nuevamente",level:3},{value:"\xbfCu\xe1ndo se borran los videos en el cach\xe9?",id:"cu\xe1ndo-se-borran-los-videos-en-el-cach\xe9",level:3},{value:"\xbfC\xf3mo puede el mini programa obtener la longitud del video?",id:"c\xf3mo-puede-el-mini-programa-obtener-la-longitud-del-video",level:3},{value:"\xbfC\xf3mo puedo solucionar problemas?",id:"c\xf3mo-puedo-solucionar-problemas",level:3},{value:"Ap\xe9ndice",id:"ap\xe9ndice",level:2},{value:"C\xf3mo obtener sus versiones actuales",id:"c\xf3mo-obtener-sus-versiones-actuales",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["La ",(0,i.jsx)(n.strong,{children:"my.createVideoContext"})," API se utiliza para reproducir v\xeddeos en mini-programas. Puedes llamar a esta API para ingresar ",(0,i.jsx)(n.em,{children:"videoId"})," y devolver ",(0,i.jsx)(n.em,{children:"videoContext"}),", donde ",(0,i.jsx)(n.em,{children:"videoId"})," se refiere al atributo de ID personalizado por el desarrollador en la pesta\xf1a de v\xeddeo correspondiente, y puedes operar un componente de v\xeddeo a trav\xe9s de ",(0,i.jsx)(n.em,{children:"videoContext"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"antes-de-que-empieces",children:"Antes de que empieces"}),"\n",(0,i.jsx)(n.p,{children:"Antes de llamar a la API my.createVideocontext, debe tener en cuenta las siguientes cosas:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"La versi\xf3n GriversDK debe ser al menos 2.48.0.Si la versi\xf3n es anterior a 2.48.0, llamar a esta API puede causar bloqueos de aplicaciones."}),"\n",(0,i.jsx)(n.li,{children:"La Mini Biblioteca Core del Programa (APPX) debe ser la versi\xf3n 2.0.Para obtener m\xe1s informaci\xf3n sobre c\xf3mo actualizar APPX a 2.0, comun\xedquese con su arquitecto de soluci\xf3n para la documentaci\xf3n."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Para aprender sobre qu\xe9 versiones son los APPX y el GriversDK que integran, consulte c\xf3mo obtener sus versiones actuales."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Las animaciones CSS no son compatibles."}),"\n",(0,i.jsx)(n.li,{children:"Formato de paquete de video compatible para iOS y Android: MP4"}),"\n",(0,i.jsx)(n.li,{children:"Formato de codificaci\xf3n compatible para iOS y Android: H.264"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"efecto",children:"Efecto"}),"\n",(0,i.jsx)(n.p,{children:"La siguiente figura muestra el efecto de la reproducci\xf3n de video."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"phone-video",src:r(12232).A+"",width:"618",height:"1308"})}),"\n",(0,i.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,i.jsx)(n.p,{children:"La siguiente tabla enumera los par\xe1metros de solicitud de la API my.createVideocontext."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Propiedad"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"scr"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:"La URL del recurso de video.Solo se admiten URL HTTPS."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"poster"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:"La URL del p\xf3ster de video.Si este par\xe1metro no se especifica, el p\xf3ster se establece por defecto como la primera trama del video."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"poster-size"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["El tama\xf1o para mostrar el p\xf3ster del v\xeddeo cuando la relaci\xf3n de aspecto del p\xf3ster es inconsistente con la relaci\xf3n de aspecto del v\xeddeo. Especifica este par\xe1metro siguiendo la misma regla para especificar el par\xe1metro ",(0,i.jsx)(n.em,{children:"background-size"}),". Para obtener m\xe1s informaci\xf3n sobre c\xf3mo especificar ",(0,i.jsx)(n.em,{children:"background-size"}),", consulta Tama\xf1o de im\xe1genes: la propiedad 'background-size'.\r\n",(0,i.jsx)("br",{}),"Valor predeterminado: ",(0,i.jsx)(n.code,{children:"contain"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"initial-time"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:(0,i.jsx)(n.p,{children:"El momento espec\xedfico en que el video comienza a reproducirse.La unidad de este par\xe1metro es s (segundo)."})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"controls"}),(0,i.jsx)("td",{children:"Boolean"}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["Indica si debe mostrar los controles de reproducci\xf3n predeterminados, como el bot\xf3n de reproducci\xf3n, el bot\xf3n de pausa, la barra de progreso y la longitud del video.\r\nValor por defecto: ",(0,i.jsx)(n.code,{children:"true"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"autoplay"}),(0,i.jsx)("td",{children:"Boolean"}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["Indica si reproducir el video autom\xe1ticamente.\r\nValor por defecto: ",(0,i.jsx)(n.code,{children:"false"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"direction"}),(0,i.jsx)("td",{children:"Number"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"La direcci\xf3n cuando el video se reproduce en pantalla completa.Los valores v\xe1lidos son:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"0: Indica que el video se reproduce en una direcci\xf3n vertical."}),"\n",(0,i.jsx)(n.li,{children:"90: Indica que el video se gira en la direcci\xf3n en sentido antihorario en 90 grados."}),"\n",(0,i.jsx)(n.li,{children:"-90: Indica que el video se gira en sentido horario en 90 grados."}),"\n"]}),(0,i.jsx)(i.Fragment,{}),(0,i.jsx)(n.p,{children:"Si no se especifica este par\xe1metro, la direcci\xf3n se determina autom\xe1ticamente por la relaci\xf3n de aspecto del video."})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"loop"}),(0,i.jsx)("td",{children:"Boolean"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"Indica si se debe enojar el video."}),(0,i.jsx)(i.Fragment,{}),(0,i.jsxs)(n.p,{children:["Valor por defecto: ",(0,i.jsx)(n.code,{children:"false"})]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"muted"}),(0,i.jsx)("td",{children:"Boolean"}),(0,i.jsxs)("td",{children:["Indica si reproducir el video en silencio. Valor por defecto: ",(0,i.jsx)(n.code,{children:"false"})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onPlay"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Reproduce el video cuando el video comienza o contin\xfaa reproduciendo."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onPause"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Haga una pausa del video cuando el video se detiene para reproducir."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onEnded"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Termina el video cuando el video termina de reproducirse."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onTimeUpdate"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["Actualiza el momento en que se reproduce el video.\r\nLa muestra de c\xf3digo devuelta puede ser la siguiente: ",(0,i.jsx)(n.code,{children:"event.detail = {currentTime: 'current position of the video playback',userPlayDuration:'user watching duration',videoDuration:'video length'}"})]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onLoading"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Carga el video cuando se est\xe1 cargando el video."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onError"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Desencadena el c\xf3digo de error cuando se produce un error cuando se reproduce el video.Para obtener m\xe1s informaci\xf3n sobre los c\xf3digos de error, consulte los c\xf3digos de error."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onFullScreenChange"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:(0,i.jsxs)(n.p,{children:["Entra o abandona el modo de pantalla completa.\r\nLa muestra de c\xf3digo devuelta puede ser la siguiente: ",(0,i.jsx)(n.code,{children:"event.detail = {fullScreen, direction}"}),"  , donde la ",(0,i.jsx)(n.code,{children:"direction"})," debe establecerse como ",(0,i.jsx)(n.code,{children:"vertical"})," u ",(0,i.jsx)(n.code,{children:"horizontal"}),"."]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onUserAction"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsxs)("td",{children:[(0,i.jsxs)(n.p,{children:["El usuario opera la reproducci\xf3n de video.\r\nLa muestra de c\xf3digo devuelta puede ser la siguiente: ",(0,i.jsx)(n.code,{children:'event.detail = {tag:"mute", value:0}'}),", d\xf3nde tag es el elemento que opera el usuario. Valores v\xe1lidos de tag son:"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"play"}),": Indica el bot\xf3n en la parte inferior para reproducir el video."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"centerplay"}),": Indica el bot\xf3n en el centro para reproducir el video."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mute"}),": Indica el bot\xf3n para silenciar el video."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fullscreen"}),": Indica el bot\xf3n para hacer el video de pantalla completa."]}),"\n"]})]})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onStop"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Deja de reproducir el video."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"onRenderStart"}),(0,i.jsx)("td",{children:"EventHandler"}),(0,i.jsx)("td",{children:"Comienza a reproducir el video cuando se carga el video."})]})]}),"\n",(0,i.jsx)(n.h2,{id:"c\xf3digos-de-error",children:"C\xf3digos de error"}),"\n",(0,i.jsx)(n.p,{children:"La siguiente tabla enumera los c\xf3digos de error, sus descripciones, acciones adicionales y si los c\xf3digos de error son compatibles con el sistema Android o iOS."}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"C\xf3digo de error"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Nuevas medidas"}),(0,i.jsx)("th",{children:"Android"}),(0,i.jsx)("th",{children:"iOS"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1"}),(0,i.jsx)("td",{children:"Excepci\xf3n desconocida"}),(0,i.jsx)("td",{children:"Pruebe la llamada API nuevamente."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\u2705"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1002"}),(0,i.jsx)("td",{children:"Error del sistema de jugadores"}),(0,i.jsx)("td",{children:"Verifique el sistema de reproductor."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\u2705"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1005"}),(0,i.jsx)("td",{children:"Error de red"}),(0,i.jsx)("td",{children:"Consulte la red."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\ud83d\udd32"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1006"}),(0,i.jsx)("td",{children:"Error de metadatos"}),(0,i.jsx)("td",{children:"Revise los metadatos."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\u2705"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"1007"}),(0,i.jsx)("td",{children:"Error de inicializaci\xf3n del jugador"}),(0,i.jsx)("td",{children:"Revise el jugador e inicialice nuevamente."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\ud83d\udd32"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"3001"}),(0,i.jsx)("td",{children:"Error de renderizado de audio"}),(0,i.jsx)("td",{children:"Compruebe si el recurso de audio cumple con los requisitos."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\ud83d\udd32"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"3002"}),(0,i.jsx)("td",{children:"Error de decodificaci\xf3n de hardware"}),(0,i.jsx)("td",{children:"Compruebe si la decodificaci\xf3n de hardware funciona."}),(0,i.jsx)("td",{children:"\u2705"}),(0,i.jsx)("td",{children:"\ud83d\udd32"})]})]}),"\n",(0,i.jsx)(n.h2,{id:"c\xf3digos-de-muestra",children:"C\xf3digos de muestra"}),"\n",(0,i.jsx)(n.h3,{id:"axml",children:".axml"}),"\n",(0,i.jsx)(n.p,{children:"Refer to the following sample to learn about how to use AXML to call the API."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:'title="axml"',children:'<view style="width:100%">\r\n  <video\r\n    style="width:100%"\r\n    id="myVideo"\r\n    src="{{video.src}}"\r\n    poster-size="{{video.posterSize}}"\r\n    poster="{{video.poster}}"\r\n    controls="{{video.showAllControls}}"\r\n    loop="{{video.isLooping}}"\r\n    muted="{{video.muteWhenPlaying}}"\r\n    autoplay="{{video.autoPlay}}"\r\n    direction="{{video.directionWhenFullScreen}}"\r\n    initial-time="{{video.initTime}}"\r\n    onPlay="onPlay"\r\n    onPause="onPause"\r\n    onTap="onTap"\r\n    onEnded="onEnded"\r\n    onError="onError"\r\n    onRenderStart="onRenderStart"\r\n    onTimeUpdate="onTimeUpdate"\r\n    onUserAction="onUserAction"\r\n    onFullScreenChange="onFullScreenChange"\r\n    onLoading="onLoading"\r\n  ></video>\r\n  <button type="default" size="defaultSize" onTap="play">Play</button>\r\n  <button type="default" size="defaultSize" onTap="pause">Pause</button>\r\n  <button type="default" size="defaultSize" onTap="stop">stop</button>\r\n  <button type="default" size="defaultSize" onTap="seek">seek</button>\r\n  <button type="default" size="defaultSize" onTap="requestFullScreen">\r\n    requestFullScreen\r\n  </button>\r\n  <button type="default" size="defaultSize" onTap="exitFullScreen">\r\n    exitFullScreen\r\n  </button>\r\n  <button type="default" size="defaultSize" onTap="mute">mute</button>\r\n  <view style="height:1000">\r\n  </view>\r\n</view>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"js",children:".js"}),"\n",(0,i.jsx)(n.p,{children:"Consulte la siguiente muestra para aprender sobre c\xf3mo usar JavaScript para llamar a la API."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="js"',children:"Page({\r\n  data: {\r\n    video: {\r\n      src: 'https://xxx.mp4',\r\n      poster: \"https://xxx.jpg\",\r\n      posterSize: \"contain\", //contain, cover\r\n      showAllControls: false,\r\n      isLooping: false,\r\n      muteWhenPlaying: false,\r\n      initTime: 0,\r\n      autoPlay: false,\r\n      directionWhenFullScreen: 0\r\n    }\r\n  },\r\n  onLoad() {\r\n    this.videoContext = my.createVideoContext('myVideo');\r\n  },\r\n  play() {\r\n    this.videoContext.play();\r\n  },\r\n  pause() {\r\n    this.videoContext.pause();\r\n  },\r\n  stop() {\r\n    this.videoContext.stop();\r\n  },\r\n  seek() {\r\n    this.videoContext.seek(15);\r\n  },\r\n  requestFullScreen() {\r\n    this.videoContext.requestFullScreen({\r\n      direction: -90,\r\n    });\r\n  },\r\n  exitFullScreen() {\r\n    this.videoContext.exitFullScreen();\r\n  },\r\n  mute() {\r\n    this.videoContext.mute(false);\r\n  },\r\n  onPlay(e) {\r\n    console.log('video: onPlay');\r\n  },\r\n  onPause(e) {\r\n    console.log('video: onPause');\r\n  },\r\n  onEnded(e) {\r\n    console.log('video: onEnded');\r\n  },\r\n  onError(e) {\r\n    console.log('video: onPlayError, e=' + JSON.stringify(e));\r\n  },\r\n  onRenderStart(e) {\r\n    console.log('video: onRenderStart');\r\n  },\r\n  onTimeUpdate(e) {\r\n    // console.log('video: onTimeUpdate: ' +  JSON.stringify(e));\r\n  },\r\n  onUserAction(e) {\r\n   console.log('video: onUserAction: ' +  JSON.stringify(e));\r\n  },\r\n  onTap(e) {\r\n    console.log('video: onTap: ' +  JSON.stringify(e));\r\n  },\r\n  onFullScreenChange(e) {\r\n    console.log('video: onFullScreenChange: ' +  JSON.stringify(e));\r\n  },\r\n  onLoading(e) {\r\n    console.log('video: onLoading: ' +  JSON.stringify(e));\r\n  },\r\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"faqs",children:"FAQs"}),"\n",(0,i.jsx)(n.h3,{id:"cuando-el-usuario-ve-un-video-que-se-carg\xf3-y-se-ve-una-vez-en-el-componente-de-video-debe-cargarse-el-video-nuevamente",children:"Cuando el usuario ve un video que se carg\xf3 y se ve una vez en el componente de video, \xbfdebe cargarse el video nuevamente?"}),"\n",(0,i.jsx)(n.p,{children:"Si el video se reproduce en un bucle, el cach\xe9 del video se extrae cuando el usuario lo ve nuevamente;De lo contrario, el video debe cargarse nuevamente."}),"\n",(0,i.jsx)(n.h3,{id:"cu\xe1ndo-se-borran-los-videos-en-el-cach\xe9",children:"\xbfCu\xe1ndo se borran los videos en el cach\xe9?"}),"\n",(0,i.jsx)(n.p,{children:"Cuando la p\xe1gina o el mini programa est\xe1n cerrados, se borra los videos en el cach\xe9."}),"\n",(0,i.jsx)(n.h3,{id:"c\xf3mo-puede-el-mini-programa-obtener-la-longitud-del-video",children:"\xbfC\xf3mo puede el mini programa obtener la longitud del video?"}),"\n",(0,i.jsxs)(n.p,{children:["El mini programa puede obtener la longitud del video a trav\xe9s del ",(0,i.jsx)(n.code,{children:"onTimeUpdate"})," par\xe1metro."]}),"\n",(0,i.jsx)(n.h3,{id:"c\xf3mo-puedo-solucionar-problemas",children:"\xbfC\xf3mo puedo solucionar problemas?"}),"\n",(0,i.jsx)(n.p,{children:"Da los siguientes pasos para la resoluci\xf3n de problemas:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aseg\xfarese de que el c\xf3digo AXML contenga el par\xe1metro ",(0,i.jsx)(n.em,{children:"id"}),", por ejemplo, ",(0,i.jsx)(n.code,{children:'id="your-video-id"'}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aseg\xfarate de que el valor del par\xe1metro ",(0,i.jsx)(n.em,{children:"id"})," no sea una palabra reservada, como drawing-area-root, content-root, RenderView, contenedor TileGrid, contenci\xf3n de pageTiledBacking, o recorte de ancestros."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aseg\xfarate de que el valor del par\xe1metro ",(0,i.jsx)(n.em,{children:"id"})," consista solo en letras, ",(0,i.jsx)(n.code,{children:"-"}),", y ",(0,i.jsx)(n.code,{children:"_"}),", y no contenga caracteres especiales como ",(0,i.jsx)(n.code,{children:"*"})," y ",(0,i.jsx)(n.code,{children:"/"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aseg\xfarate de que el valor del par\xe1metro ",(0,i.jsx)(n.em,{children:"id"})," no sea demasiado largo debido a contener el ID del mini programa o la marca de tiempo Unix actual."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Aseg\xfarate de que el valor del par\xe1metro ",(0,i.jsx)(n.em,{children:"id"})," sea \xfanico. Por ejemplo, si el valor de ",(0,i.jsx)(n.em,{children:"id"})," es ",(0,i.jsx)(n.code,{children:"main-video"}),", no especifiques ning\xfan valor similar como ",(0,i.jsx)(n.code,{children:"main-video-wrapper"}),"; de lo contrario, se generar\xe1 ",(0,i.jsx)(n.code,{children:"WKCompositingView"}),", lo que puede causar errores en la posici\xf3n de los componentes en la misma capa."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Prueba la propiedad raw-controls para resolver el problema donde el componente de video est\xe1 posicionado incorrectamente en una capa alta en tu mini programa."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"ap\xe9ndice",children:"Ap\xe9ndice"}),"\n",(0,i.jsx)(n.h3,{id:"c\xf3mo-obtener-sus-versiones-actuales",children:"C\xf3mo obtener sus versiones actuales"}),"\n",(0,i.jsx)(n.p,{children:"Las actualizaciones del n\xfamero de versi\xf3n menor o de parche del Mini Program AppX o GriversDK traen funciones nuevas o mejoradas en elementos b\xe1sicos, API o caracter\xedsticas de rendimiento.Para garantizar que estas funciones puedan funcionar en su mini programa, debe aprender sobre qu\xe9 versiones integra actualmente y considerar la compatibilidad si es necesario."}),"\n",(0,i.jsxs)(n.p,{children:["Consulte el siguiente c\xf3digo de muestra para obtener las versiones actuales de su mini programa AppX y GriversDK, donde las versiones son ambas cadenas en el formato de ",(0,i.jsx)(n.code,{children:"major.minor.patch"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="js"',children:'/**\r\n * @description Appx version\r\n * @example "2.8.0"\r\n */\r\nconst sdkVersion = my.SDKVersion;\r\n/**\r\n * @description GriverSDK version\r\n * @example "2.48.0"\r\n */\r\nconst griverVersion = my.getSystemInfoSync().griverVersion;\n'})}),"\n",(0,i.jsx)(n.p,{children:"Adem\xe1s, puede llamar a la funci\xf3n de comparaci\xf3n para comparar las versiones actuales que integra con las versiones m\xe1s bajas que se requieren en la secci\xf3n Begins You Begin.El siguiente c\xf3digo muestra un ejemplo de llamar a la funci\xf3n de comparaci\xf3n."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title="js"',children:'/**\r\n * @param {string} v1\r\n * @param {string} v2\r\n * @returns {-1 | 0 | 1}\r\n */\r\nfunction compareVersion(v1, v2) {\r\n  var s1 = v1.split(".");\r\n  var s2 = v2.split(".");\r\n  var len = Math.max(s1.length, s2.length);\r\n  for (let i = 0; i < len; i++) {\r\n    var num1 = parseInt(s1[i] || "0");\r\n    var num2 = parseInt(s2[i] || "0");\r\n    if (num1 > num2) {\r\n      return 1;\r\n    } else if (num1 < num2) {\r\n      return -1;\r\n    }\r\n  }\r\n  return 0;\r\n}\r\n// v1 > v2 return 1\r\n1 === compareVersion("2.6.8", "1.24.10");\r\n// v1 = v2 return 0\r\n0 === compareVersion("2.6", "2.6.0"); \n'})})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},12232:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/phone-video-ec13ea63fb48dbc0f49160fda62d88d1.png"},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>a});var i=r(96540);const d={},o=i.createContext(d);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);
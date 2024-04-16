"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[1373],{34435:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=a(74848),r=a(28453);const s={sidebar_position:8},o="Capacidad de la informaci\xf3n del usuario",l={id:"APIReferences/Capabilities/userinfo capacidad",title:"Capacidad de la informaci\xf3n del usuario",description:"Toda la informaci\xf3n del usuario en la plataforma de los mini program requiere la autorizaci\xf3n del usuario.Seg\xfan el mecanismo de autorizaci\xf3n est\xe1ndar de la industria OAuth2.0, los desarrolladores de mini programas pueden obtener la autorizaci\xf3n del usuario para obtener informaci\xf3n del usuario.",source:"@site/docs/APIReferences/Capabilities/userinfo capacidad.md",sourceDirName:"APIReferences/Capabilities",slug:"/APIReferences/Capabilities/userinfo capacidad",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/userinfo capacidad",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"Capacidad de pago",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/Capacidad de pago"},next:{title:"JSAPI",permalink:"/portal-interactivo/docs/category/jsapi"}},d={},c=[{value:"Requisitos previos",id:"requisitos-previos",level:2},{value:"Proceso de interacci\xf3n",id:"proceso-de-interacci\xf3n",level:2},{value:"Modo silencioso",id:"modo-silencioso",level:3},{value:"Modo de consentimiento de usuario",id:"modo-de-consentimiento-de-usuario",level:2},{value:"Obtenga informaci\xf3n de apertura del usuario",id:"obtenga-informaci\xf3n-de-apertura-del-usuario",level:4},{value:"Obtener c\xf3digo de autores",id:"obtener-c\xf3digo-de-autores",level:4},{value:"Lista de la API",id:"lista-de-la-api",level:2},{value:"Mas informaci\xf3n",id:"mas-informaci\xf3n",level:2}];function t(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"capacidad-de-la-informaci\xf3n-del-usuario",children:"Capacidad de la informaci\xf3n del usuario"}),"\n",(0,n.jsx)(i.p,{children:"Toda la informaci\xf3n del usuario en la plataforma de los mini program requiere la autorizaci\xf3n del usuario.Seg\xfan el mecanismo de autorizaci\xf3n est\xe1ndar de la industria OAuth2.0, los desarrolladores de mini programas pueden obtener la autorizaci\xf3n del usuario para obtener informaci\xf3n del usuario."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Nota"}),": Los desarrolladores deben respetar completamente la privacidad de los usuarios y usar correctamente la autorizaci\xf3n del usuario.Si se encuentra que la informaci\xf3n se utiliza m\xe1s all\xe1 del alcance acordado o el uso razonable, la plataforma tiene el derecho de retirar permanentemente la autoridad de interfaz del Mini Programa."]}),"\n",(0,n.jsx)(i.h2,{id:"requisitos-previos",children:"Requisitos previos"}),"\n",(0,n.jsx)(i.p,{children:"Esta capacidad est\xe1 abierta a comerciantes que se han convertido en socios comerciales de la billetera.s de la billetera.\r\nAseg\xfarese de que la integraci\xf3n y la configuraci\xf3n se hayan completado y se haya lanzado el mini programa."}),"\n",(0,n.jsx)(i.h2,{id:"proceso-de-interacci\xf3n",children:"Proceso de interacci\xf3n"}),"\n",(0,n.jsx)(i.h3,{id:"modo-silencioso",children:"Modo silencioso"}),"\n",(0,n.jsx)(i.p,{children:"El modo silencioso requiere que el consentimiento del usuario en una aplicaci\xf3n nativa recopile la informaci\xf3n requerida.El flujo de interacci\xf3n del modo de silencio se ilustra como se muestra a continuaci\xf3n:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Silence mode",src:a(17432).A+"",width:"1280",height:"720"})}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"El usuario abre la aplicaci\xf3n de billetera y se redirige al Mini Programa Mercant."}),"\n",(0,n.jsx)(i.li,{children:"El Mini programa Merchant llama al GetAuthcode JSAPI para solicitar AuthCode de la aplicaci\xf3n de billetera."}),"\n",(0,n.jsx)(i.li,{children:"La aplicaci\xf3n de billetera devuelve AuthCode al programa Merchant Mini, que env\xeda AuthCode al servidor ISV o Merchant."}),"\n",(0,n.jsxs)(i.li,{children:["Con el C\xf3digo ",(0,n.jsx)(i.code,{children:"authCode"})," obtenido en el Paso 3, el servidor ISV o comerciante llama a ",(0,n.jsx)(i.code,{children:"/{versi\xf3n}/oauths/applyToke"})," OpenApi para solicitar AccessToken y UID desde el servidor de billetera."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["Nota: La ",(0,n.jsx)(i.code,{children:"version"})," es la versi\xf3n de Open APIs, por ejemplo, V1 o V2."]}),"\n",(0,n.jsxs)(i.ol,{start:"5",children:["\n",(0,n.jsx)(i.li,{children:"El servidor de billetera devuelve AccessToken y UID al ISV o Merchant Server."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Notas:"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"AuthCode se utiliza para intercambiar por AccessToken.Cada vez que se completa la autorizaci\xf3n del usuario, AuthCode en la respuesta JSAPI es diferente.Authcode solo se puede usar una vez y expirar\xe1 autom\xe1ticamente en un d\xeda."}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Despu\xe9s de que el ISV o el comerciante obtengan AccessToken y UID:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"El ISV o el comerciante pueden usar AccessToken para llamar a otros OpenApis.Por ejemplo, llame a la investigaci\xf3n de consultyUserInfobyAccessToken OpenAPI para consultar la informaci\xf3n del usuario."}),"\n",(0,n.jsx)(i.li,{children:"El ISV o el comerciante pueden generar una sesi\xf3n que se asigna a AccessToken y UID, luego establecer el tiempo de vencimiento de la sesi\xf3n y almacenar el mapeo.La sesi\xf3n se almacenar\xe1 en el marco de mini del programa."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"modo-de-consentimiento-de-usuario",children:"Modo de consentimiento de usuario"}),"\n",(0,n.jsx)(i.p,{children:"El modo de consentimiento del usuario se utiliza para obtener informaci\xf3n p\xfablica del usuario sin un permiso adicional de las billeteras.El flujo de interacci\xf3n del modo de consentimiento del usuario se ilustra como se muestra a continuaci\xf3n:"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"user consent",src:a(84190).A+"",width:"1280",height:"720"})}),"\n",(0,n.jsx)(i.h4,{id:"obtenga-informaci\xf3n-de-apertura-del-usuario",children:"Obtenga informaci\xf3n de apertura del usuario"}),"\n",(0,n.jsx)(i.p,{children:"Cuando el Merchant Mini programa tiene la intenci\xf3n de obtener informaci\xf3n p\xfablica de usuarios, como Name and Avatar, use el modo de consentimiento del usuario con GetOpenuserInfo JSAPI.El usuario debe firmar el acuerdo y hacer clic en el bot\xf3n Aceptar.Esta funci\xf3n se utiliza para mostrar algunos datos personales del usuario en el mini programa."}),"\n",(0,n.jsx)(i.h4,{id:"obtener-c\xf3digo-de-autores",children:"Obtener c\xf3digo de autores"}),"\n",(0,n.jsxs)(i.p,{children:["Cuando el programa Merchant Mini tiene la intenci\xf3n de obtener AuthCode para un uso adicional, llame al ",(0,n.jsx)(i.code,{children:"getAuthCode"})," JSAPI especificando el campo de ",(0,n.jsx)(i.code,{children:"scope"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"lista-de-la-api",children:"Lista de la API"}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"JSAPI"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Descripci\xf3n"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"my.getOpenUserInfo"})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Obtiene informaci\xf3n b\xe1sica del usuario, como avatar, nombre de usuario, etc."})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(i.code,{children:"my.getAuthCode"})}),(0,n.jsx)("td",{children:"Obtiene el c\xf3digo de autenticaci\xf3n del usuario."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"OpenAPI"})}),(0,n.jsx)("th",{children:(0,n.jsx)(i.p,{children:"Descripci\xf3n"})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"/{versi\xf3n}/autorizaciones/{apiname}"}),"\r\nNota: La versi\xf3n de api abierta, por eJemplo, v1 o v2"]})}),(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:"Para m\xe1s detalles, consulte las API abiertas para los comerciantes un cap\xedtulo."})})]}),(0,n.jsx)("tr",{children:(0,n.jsx)("td",{children:(0,n.jsx)(i.p,{children:(0,n.jsx)(i.code,{children:"/{version}/users/inquiryUserInfo"})})})})]})}),"\n",(0,n.jsx)(i.h2,{id:"mas-informaci\xf3n",children:"Mas informaci\xf3n"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/",children:"Capacidades"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/",children:"JSAPIs"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/",children:"Open APIs"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/",children:"Desarrollo de mini program"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/",children:"Uso de Mini Program Platform"})}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.a,{href:"/",children:"Caracter\xedsticas"})})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},84190:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/consentMode-5eac9877dcbeec11bfaa3b050619522c.jpeg"},17432:(e,i,a)=>{a.d(i,{A:()=>n});const n=a.p+"assets/images/interactionprocess-ecf5a160890ce01e8638011650eea728.jpeg"},28453:(e,i,a)=>{a.d(i,{R:()=>o,x:()=>l});var n=a(96540);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
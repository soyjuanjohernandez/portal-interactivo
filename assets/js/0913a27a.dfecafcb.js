"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[9959],{97441:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=o(74848),i=o(28453);const a={sidebar_position:2},t="my.offAppShow",s={id:"APIReferences/JSAPI/Evento en la aplicaci\xf3n/my.offAppShow",title:"my.offAppShow",description:"No se indique el evento de que el mini Programa se cambia a primer plano desde el fondo.",source:"@site/docs/APIReferences/JSAPI/Evento en la aplicaci\xf3n/my.offAppShow.md",sourceDirName:"APIReferences/JSAPI/Evento en la aplicaci\xf3n",slug:"/APIReferences/JSAPI/Evento en la aplicaci\xf3n/my.offAppShow",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Evento en la aplicaci\xf3n/my.offAppShow",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"my.offAppHide",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Evento en la aplicaci\xf3n/my.offAppHide"},next:{title:"my.onAppHide",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Evento en la aplicaci\xf3n/my.onAppHide"}},d={},c=[{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"myoffappshow",children:"my.offAppShow"}),"\n",(0,r.jsx)(n.p,{children:"No se indique el evento de que el mini Programa se cambia a primer plano desde el fondo."}),"\n",(0,r.jsx)(n.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,r.jsx)(n.p,{children:".axml"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'\x3c!-- .axml--\x3e\r\n<button size="default" onTap="offAppShowHanlder" type="primary">Unlisten for the event that the mini program is switched to foreground from background</button>\n'})}),"\n",(0,r.jsx)(n.p,{children:".js"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//.js\r\nonLoad() {\r\n    my.onAppShow(this.onAppShowHandler)\r\n},\r\n//El m\xe9todo de escuchar el evento de que el mini programa se cambie a primer plano desde el fondo\r\nonAppShowHandler() {\r\n    console.log('The mini program is switched to foreground from background')\r\n},\r\n//El m\xe9todo de no apalancamiento para el evento de que el mini programa se cambie a primer plano desde el fondo\r\noffAppShowHanlder() {\r\n    my.offAppShow(this.onAppShowHandler)\r\n},\r\napphide() {\r\n    console.log('The mini program is switched to background from foreground')\r\n}\n"})}),"\n",(0,r.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,r.jsx)(n.p,{children:"El par\xe1metro est\xe1 en tipo de objeto y tiene la siguiente propiedad:"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Propiedad"}),(0,r.jsx)("th",{children:"Tipo"}),(0,r.jsx)("th",{children:"Descripci\xf3n"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"callback"}),(0,r.jsx)("td",{children:"Funci\xf3n"}),(0,r.jsx)("td",{children:"La funci\xf3n devoluci\xf3n de llamada para el caso de que el miniprograma pase a primer plano."})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>t,x:()=>s});var r=o(96540);const i={},a=r.createContext(i);function t(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);
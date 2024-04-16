"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[8782],{3108:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=r(74848),o=r(28453);const i={sidebar_position:5},s="canDecodeUrlContent",d={id:"DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/canDecodeUrlContent",title:"canDecodeUrlContent",description:"La API de canDecodeUrlContent es llamado por la super aplicaci\xf3n para verificar si la URL puede decodificarse mediante una plataforma de Mini program.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/canDecodeUrlContent.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/IOS/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/canDecodeUrlContent",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/canDecodeUrlContent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"fetchAppInfosByIds",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/fetchAppInfosByIds"},next:{title:"decodeUrlContent",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/decodeUrlContent"}},c={},a=[{value:"Firma de m\xe9todo",id:"firma-de-m\xe9todo",level:2},{value:"Par\xe1metros de solicitud",id:"par\xe1metros-de-solicitud",level:2},{value:"Par\xe1metros de respuesta",id:"par\xe1metros-de-respuesta",level:2},{value:"Sample",id:"sample",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"candecodeurlcontent",children:"canDecodeUrlContent"}),"\n",(0,t.jsxs)(n.p,{children:["La API de ",(0,t.jsx)(n.strong,{children:"canDecodeUrlContent"})," es llamado por la super aplicaci\xf3n para verificar si la URL puede decodificarse mediante una plataforma de Mini program."]}),"\n",(0,t.jsx)(n.h2,{id:"firma-de-m\xe9todo",children:"Firma de m\xe9todo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"+ (BOOL)canDecodeURLContent:(NSString *)urlContent;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"par\xe1metros-de-solicitud",children:"Par\xe1metros de solicitud"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Nombre"}),(0,t.jsx)("th",{children:"Tipo"}),(0,t.jsx)("th",{children:"Descripci\xf3n"}),(0,t.jsx)("th",{children:"Requerido"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"url"}),(0,t.jsx)("td",{children:"String"}),(0,t.jsx)("td",{children:"El contenido de URL que se usa para verificar si la URL se puede decodificar."}),(0,t.jsx)("td",{children:"M"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"par\xe1metros-de-respuesta",children:"Par\xe1metros de respuesta"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:"Tipo"}),(0,t.jsx)("th",{children:"Longitud"}),(0,t.jsx)("th",{children:"Descripci\xf3n"}),(0,t.jsx)("th",{children:"Requerido"})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:"Boolean"}),(0,t.jsx)("td",{children:"/"}),(0,t.jsx)("td",{children:"Specify whether the user is in Alipay+ supported region."}),(0,t.jsx)("td",{children:"M"})]})]}),"\n",(0,t.jsx)(n.h2,{id:"sample",children:"Sample"}),"\n",(0,t.jsxs)(n.p,{children:["La siguiente muestra muestra c\xf3mo llamar a la API ",(0,t.jsx)(n.strong,{children:"canDecodeUrlContent"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"BOOL canDecode = GRVURLContentDecoder.canDecodeURLContent(uriContent);\r\nif(canDecode) {\r\n    //following code is like\r\n    //GRVURLContentDecoder.decodeURLContent(uriContent, completionHandler)\r\n} else {\r\n    //other logic \r\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>d});var t=r(96540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);
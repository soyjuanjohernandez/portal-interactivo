"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[1319],{27828:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(74848),t=r(28453);const i={sidebar_position:6},d="decodeUrlContent",s={id:"DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/decodeUrlContent",title:"decodeUrlContent",description:"La API de decodeUrlContent es llamado por la super aplicaci\xf3n para decodificar la URL que se genera a partir de un c\xf3digo QR de promoci\xf3n.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/decodeUrlContent.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/IOS/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/decodeUrlContent",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/decodeUrlContent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"canDecodeUrlContent",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/APIs/canDecodeUrlContent"},next:{title:"Referencias de API",permalink:"/portal-interactivo/docs/category/referencias-de-api"}},c={},l=[{value:"Firma de m\xe9todo",id:"firma-de-m\xe9todo",level:2},{value:"Par\xe1metros de solicitud",id:"par\xe1metros-de-solicitud",level:2},{value:"completion",id:"completion",level:2},{value:"Response parameters",id:"response-parameters",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"decodeurlcontent",children:"decodeUrlContent"}),"\n",(0,o.jsxs)(n.p,{children:["La API de ",(0,o.jsx)(n.strong,{children:"decodeUrlContent"})," es llamado por la super aplicaci\xf3n para decodificar la URL que se genera a partir de un c\xf3digo QR de promoci\xf3n."]}),"\n",(0,o.jsx)(n.h2,{id:"firma-de-m\xe9todo",children:"Firma de m\xe9todo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"+ (void)decodeURLContent:(NSString *)urlContent completion:(void(^)(GRVURLContentDecodeResponse *response))completion;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"par\xe1metros-de-solicitud",children:"Par\xe1metros de solicitud"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Nombre"}),(0,o.jsx)("th",{children:"Tipo"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"url"}),(0,o.jsx)("td",{children:"String"}),(0,o.jsx)("td",{children:"El contenido de URL se decodificar\xe1."}),(0,o.jsx)("td",{children:"M"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"callback"}),(0,o.jsx)("td",{children:"GriverDecodeUrlCallback"}),(0,o.jsxs)("td",{children:["El callback que se invoca despu\xe9s de que finaliza el proceso. Ver ",(0,o.jsx)(n.a,{href:"/",children:"finalizaci\xf3n"})," para m\xe1s detalles."]}),(0,o.jsx)("td",{children:"M"})]})]}),"\n",(0,o.jsx)(n.h2,{id:"completion",children:"completion"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Nombre"}),(0,o.jsx)("th",{children:"Tipo"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"response"}),(0,o.jsx)("td",{children:(0,o.jsx)(n.a,{href:"/",children:"GRVURLContentDecodeResponse"})}),(0,o.jsx)("td",{children:"El resultado de decodificaci\xf3n.Se requiere este par\xe1metro si la solicitud tiene \xe9xito."}),(0,o.jsx)("td",{children:"O"})]})]}),"\n",(0,o.jsx)(n.h2,{id:"response-parameters",children:"Response parameters"}),"\n",(0,o.jsx)(n.p,{children:"N/A"}),"\n",(0,o.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsxs)(n.p,{children:["El siguiente ejemplo muestra c\xf3mo llamar a la API ",(0,o.jsx)(n.strong,{children:"decodeUrlContent"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"GRVURLContentDecoder.decodeURLContent(uriContent) { (response) in\r\n   // Use la URL decodificada para abrir un mini programa\r\n    if response.success, let decodedURL = response.decodedURL {\r\n       // Al decodificar tiene \xe9xito, puede abrir el decodeuri // como GRVAppContainerLaunch.sharedInstance().openApp(withUrl: decodedUR\r\n        //L, extraParams: [:])\r\n    } else {\r\n       // Cuando fall\xf3 la decodificaci\xf3n, puede abrir el uRicontent original\r\n        //como GRVAppContainerLaunch.sharedInstance().openApp(withUrl: uriConten\r\n        //t, extraParams: [:])\r\n    }\r\n}\r\n\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var o=r(96540);const t={},i=o.createContext(t);function d(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
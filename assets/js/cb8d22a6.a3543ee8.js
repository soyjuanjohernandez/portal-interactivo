"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[1741],{38130:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>d,metadata:()=>l,toc:()=>a});var o=n(74848),i=n(28453);const d={sidebar_position:6},t="decodeUrlContent",l={id:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs/decodeUrlContent",title:"decodeUrlContent",description:"La API de decodeUrlContent es llamado por la super aplicaci\xf3n para decodificar la URL que se genera a partir de un c\xf3digo QR de promoci\xf3n.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/decodeUrlContent.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/decodeUrlContent",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/decodeUrlContent",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"canDecodeUrl",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/canDecodeUrl"},next:{title:"registerBridge",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerBridge"}},c={},a=[{value:"Firma de m\xe9todo",id:"firma-de-m\xe9todo",level:2},{value:"Par\xe1metros de solicitud",id:"par\xe1metros-de-solicitud",level:2},{value:"Response parameters",id:"response-parameters",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function s(e){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"decodeurlcontent",children:"decodeUrlContent"}),"\n",(0,o.jsxs)(r.p,{children:["La API de ",(0,o.jsx)(r.strong,{children:"decodeUrlContent"})," es llamado por la super aplicaci\xf3n para decodificar la URL que se genera a partir de un c\xf3digo QR de promoci\xf3n."]}),"\n",(0,o.jsx)(r.h2,{id:"firma-de-m\xe9todo",children:"Firma de m\xe9todo"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"public static synchronized void decodeUrlContent(final String url, final GriverDecodeUrlCallback callback);\n"})}),"\n",(0,o.jsx)(r.h2,{id:"par\xe1metros-de-solicitud",children:"Par\xe1metros de solicitud"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Nombre"}),(0,o.jsx)("th",{children:"Tipo"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"url"}),(0,o.jsx)("td",{children:"String"}),(0,o.jsx)("td",{children:"El contenido de URL se decodificar\xe1."}),(0,o.jsx)("td",{children:"M"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"callback"}),(0,o.jsx)("td",{children:"GriverDecodeUrlCallback"}),(0,o.jsx)("td",{children:"El callback que se invoca despu\xe9s de que finaliza el proceso."}),(0,o.jsx)("td",{children:"M"})]})]}),"\n",(0,o.jsx)(r.h2,{id:"response-parameters",children:"Response parameters"}),"\n",(0,o.jsx)(r.p,{children:"N/A"}),"\n",(0,o.jsx)(r.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(r.p,{children:"El siguiente ejemplo muestra c\xf3mo llamar a la API decodeUrlContent."}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"GriverDecodeUrl.decodeUrlContent(uriContent, new GriverDecodeUrlCallback() {\r\n     @Override\r\n     public void onDecodeSuccess(String url) {\r\n        // Al decodificar, puede abrir la URL\r\n        //Bundle bundle = new Bundle();\r\n        //Griver.openUrl(activity, url, bundle);\r\n     }\r\n\r\n      @Override\r\n      public void onDecodeFailed(int errorCode, String errorMessage) {\r\n       // Cuando fall\xf3 la decodificaci\xf3n, puede abrir el uRicontent original\r\n        //Bundle bundle = new Bundle();\r\n        //Griver.openUrl(activity, uriContent, bundle);\r\n      }\r\n});\r\n\n"})})]})}function p(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>t,x:()=>l});var o=n(96540);const i={},d=o.createContext(i);function t(e){const r=o.useContext(d);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),o.createElement(d.Provider,{value:r},e.children)}}}]);
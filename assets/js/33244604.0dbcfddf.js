"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[4641],{58301:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>t});var i=n(74848),l=n(28453);const o={sidebar_position:2},d="openUrl",a={id:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openUrl",title:"openUrl",description:"La API de OpenUrl es llamada por la super aplicaci\xf3n para abrir Mini Programs con URL, la URL del Mini Programa.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openUrl.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openUrl",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openUrl",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"openApp",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openApp"},next:{title:"fetchApps",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/fetchApps"}},s={},t=[{value:"Firma de m\xe9todo",id:"firma-de-m\xe9todo",level:2},{value:"Par\xe1metros de solicitud",id:"par\xe1metros-de-solicitud",level:2},{value:"Par\xe1metros de respuesta",id:"par\xe1metros-de-respuesta",level:2},{value:"C\xf3digos de error",id:"c\xf3digos-de-error",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"openurl",children:"openUrl"}),"\n",(0,i.jsx)(r.p,{children:"La API de OpenUrl es llamada por la super aplicaci\xf3n para abrir Mini Programs con URL, la URL del Mini Programa."}),"\n",(0,i.jsx)(r.h2,{id:"firma-de-m\xe9todo",children:"Firma de m\xe9todo"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"void openUrl(Context context, String url, Bundle extraParams, GriverContainerAPICallBack callBack)\n"})}),"\n",(0,i.jsx)(r.h2,{id:"par\xe1metros-de-solicitud",children:"Par\xe1metros de solicitud"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Nombre"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Requerida"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"context"}),(0,i.jsx)("td",{children:"Context"}),(0,i.jsx)("td",{children:"Interfaz a informaci\xf3n global sobre un entorno de aplicaci\xf3n."}),(0,i.jsx)("td",{children:"M"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"url"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"La URL del esquema del mini programa.La URL debe usar los protocolos HTTP o HTTPS e incluir los par\xe1metros _ariver_appid, _ariver_path y _ariver_version de la cadena de consultas.Puede obtener la URL de la consola de plataforma Mini del programa."})}),(0,i.jsx)("td",{children:"M"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"extraParams"}),(0,i.jsx)("td",{children:"Bundle"}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["Este par\xe1metro se utiliza para pasar los par\xe1metros de inicio al SDK del IAPMiniprogram para personalizar el comportamiento de un mini programa durante el inicio.Los par\xe1metros aprobados deben incluirse en la definici\xf3n de ",(0,i.jsx)(r.code,{children:"{@linkgriverparams.launchParams}"}),".Para obtener c\xf3mo especificar los par\xe1metros de inicio, consulte los ",(0,i.jsx)(r.a,{href:"/",children:"par\xe1metros de inicio"}),"."]})}),(0,i.jsx)("td",{children:"O"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"callback"}),(0,i.jsx)("td",{children:(0,i.jsx)(r.a,{href:"/",children:"GriverContainerAPICallBack"})}),(0,i.jsx)("td",{children:"La devoluci\xf3n de llamada que se utiliza para escuchar las fallas de lanzamiento de mini del programa."}),(0,i.jsx)("td",{children:"O"})]})]}),"\n",(0,i.jsx)(r.h2,{id:"par\xe1metros-de-respuesta",children:"Par\xe1metros de respuesta"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Nombre"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Required"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"error"}),(0,i.jsx)("td",{children:"Error"}),(0,i.jsx)("td",{children:"Un objeto que se usa para devolver el c\xf3digo de error y el mensaje de error cuando falla el Mini Program."}),(0,i.jsx)("td",{children:"O"})]})]}),"\n",(0,i.jsx)(r.h2,{id:"c\xf3digos-de-error",children:"C\xf3digos de error"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"C\xf3digo de error"}),(0,i.jsx)("th",{children:"Mensaje de error"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"M\xe1s acciones"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"90002"}),(0,i.jsx)("td",{children:"GRV_CONTAINER_NOT_INITIALIZED"}),(0,i.jsx)("td",{children:"IAPMiniProgram SDK no se inicializa."}),(0,i.jsx)("td",{children:"Initialize the SDK."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"90003"}),(0,i.jsx)("td",{children:"GRV_CONTAINER_ERROR_UNKNOWN"}),(0,i.jsx)("td",{children:"error de parametro."}),(0,i.jsx)("td",{children:"Consulte la tabla de par\xe1metros de solicitud y verifique si todos los tipos de par\xe1metros son correctos y si se especifican todos los par\xe1metros requeridos."})]})]}),"\n",(0,i.jsx)(r.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsx)(r.h3,{id:"kotlin",children:"Kotlin"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'val bundle = Bundle()\r\nbundle.putString("query", "a=b&c=d")\r\nGriver.openUrl(context, url, bundle,\r\n               GriverContainerAPICallBack { errorCode, errorMessage ->\r\n                   //devuelve el c\xf3digo de error y el mensaje de error si el lanzamiento del mini program falla\r\n               })\n'})}),"\n",(0,i.jsx)(r.h3,{id:"java",children:"Java"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'Bundle bundle = new Bundle();\r\nbundle.putString("query", "a=b&c=d");\r\nGriver.openUrl(context, appId, bundle, new GriverContainerAPICallBack() {\r\n    @Override\r\n    public void error(int errorCode, String errorMessage) {\r\n        //devuelve el c\xf3digo de error y el mensaje de error si el lanzamiento del mini program falla\r\n    }\r\n});\n'})})]})}function p(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>a});var i=n(96540);const l={},o=i.createContext(l);function d(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);
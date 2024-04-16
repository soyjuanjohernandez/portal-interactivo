"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[8487],{99483:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>t});var i=n(74848),a=n(28453);const o={sidebar_position:1},d="openApp",l={id:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openApp",title:"openApp",description:"La API de openApp es llamada por la super aplicaci\xf3n para abrir Mini Programs con appId, la ID \xfanico del Mini Program.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openApp.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openApp",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openApp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"APIs",permalink:"/portal-interactivo/docs/category/apis"},next:{title:"openUrl",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/openUrl"}},s={},t=[{value:"Firma del m\xe9todo",id:"firma-del-m\xe9todo",level:2},{value:"Par\xe1metros de solicitud",id:"par\xe1metros-de-solicitud",level:2},{value:"Par\xe1metros de respuesta",id:"par\xe1metros-de-respuesta",level:2},{value:"Error codes",id:"error-codes",level:2},{value:"Muestra",id:"muestra",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"openapp",children:"openApp"}),"\n",(0,i.jsxs)(r.p,{children:["La API de openApp es llamada por la super aplicaci\xf3n para abrir Mini Programs con ",(0,i.jsx)(r.em,{children:"appId"}),", la ID \xfanico del Mini Program."]}),"\n",(0,i.jsx)(r.h2,{id:"firma-del-m\xe9todo",children:"Firma del m\xe9todo"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"void openApp(Context context, String appId, Bundle extraParams, GriverContainerAPICallBack callBack) \n"})}),"\n",(0,i.jsx)(r.h2,{id:"par\xe1metros-de-solicitud",children:"Par\xe1metros de solicitud"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Name"}),(0,i.jsx)("th",{children:"Type"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Required"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"context"}),(0,i.jsx)("td",{children:"Context"}),(0,i.jsx)("td",{children:"Interface to global information about an application environment."}),(0,i.jsx)("td",{children:"M"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"appId"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["La ID \xfanica asignada por Mini Program Platform para identificar un mini program. Puede obtener la identificaci\xf3n de la consola de la plataforma Mini del program o obteniendo informaci\xf3n del mini program con la API ",(0,i.jsx)(r.a,{href:"/",children:"fetchApps"}),"."]})}),(0,i.jsx)("td",{children:"M"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"extraParams"}),(0,i.jsx)("td",{children:"Bundle"}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:["Este par\xe1metro se utiliza para pasar los par\xe1metros de inicio al SDK del IAPMiniprograma para personalizar el comportamiento de un mini program durante el inicio.Los par\xe1metros aprobados deben incluirse en la definici\xf3n de ",(0,i.jsx)(r.code,{children:"{@linkgriverparams.launchParams}"}),". Para obtener c\xf3mo especificar los par\xe1metros de inicio, consulte los ",(0,i.jsx)(r.a,{href:"/",children:"Startup parameters"}),"."]})}),(0,i.jsx)("td",{children:"O"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"callBack"}),(0,i.jsx)("td",{children:(0,i.jsx)(r.a,{href:"/",children:"GriverContainerAPICallBack"})}),(0,i.jsx)("td",{children:"La callBack que se utiliza para escuchar las fallas de lanzamiento del mini program."}),(0,i.jsx)("td",{children:"O"})]})]}),"\n",(0,i.jsx)(r.h2,{id:"par\xe1metros-de-respuesta",children:"Par\xe1metros de respuesta"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Nombre"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Requerido"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"error"}),(0,i.jsx)("td",{children:"Error"}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Un objeto que se usa para devolver el c\xf3digo de error y el mensaje de error cuando falla el Mini Program."})}),(0,i.jsx)("td",{children:"O"})]})]}),"\n",(0,i.jsx)(r.h2,{id:"error-codes",children:"Error codes"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"C\xf3digo de error"}),(0,i.jsx)("th",{children:"Mensaje de error"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Nuevas medidas"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"90002"}),(0,i.jsx)("td",{children:"GRV_CONTAINER_NOT_INITIALIZED"}),(0,i.jsx)("td",{children:"IApminiprogram SDK no se inicializa."}),(0,i.jsx)("td",{children:"Inicializar el SDK."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"90003"}),(0,i.jsx)("td",{children:"GRV_CONTAINER_ERROR_UNKNOWN"}),(0,i.jsx)("td",{children:"Error de parametro."}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Consulte la tabla de par\xe1metros de solicitud y verifique si todos los tipos de par\xe1metros son correctos y si se especifican todos los par\xe1metros requeridos."})})]})]}),"\n",(0,i.jsx)(r.h2,{id:"muestra",children:"Muestra"}),"\n",(0,i.jsx)(r.h3,{id:"kotlin",children:"Kotlin"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'val bundle = Bundle()\r\nbundle.putString("query", "a=b&c=d")\r\nGriver.openApp(context, appId, bundle,\r\n               GriverContainerAPICallBack { errorCode, errorMessage ->\r\n                   //devuelve el c\xf3digo de error y el mensaje de error si el lanzamiento del mini programa falla\r\n               })\n'})}),"\n",(0,i.jsx)(r.h3,{id:"java",children:"Java"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:'Bundle bundle = new Bundle();\r\nbundle.putString("query", "a=b&c=d");\r\nGriver.openApp(context, appId, bundle, new GriverContainerAPICallBack() {\r\n    @Override\r\n    public void error(int errorCode, String errorMessage) {\r\n        //devuelve el c\xf3digo de error y el mensaje de error si el lanzamiento del mini programa falla\r\n    }\r\n});\n'})})]})}function p(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var i=n(96540);const a={},o=i.createContext(a);function d(e){const r=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(o.Provider,{value:r},e.children)}}}]);
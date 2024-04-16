"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[3234],{40067:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>v,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var i=n(74848),s=n(28453);const t={sidebar_position:8},d="registerEventHandler",o={id:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerEventHandler",title:"registerEventHandler",description:"La API de registerEventHandler es utilizado por la S\xfaper Aplicaci\xf3n para registrar el controlador de eventos SDK.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerEventHandler.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerEventHandler",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerEventHandler",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"docsSidebar",previous:{title:"registerBridge",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerBridge"},next:{title:"registerExtension",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerExtension"}},l={},a=[{value:"Method signature",id:"method-signature",level:2},{value:"Par\xe1metros de solicitud",id:"par\xe1metros-de-solicitud",level:2},{value:"Par\xe1metros de respuesta",id:"par\xe1metros-de-respuesta",level:2},{value:"C\xf3digos de error",id:"c\xf3digos-de-error",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h1,{id:"registereventhandler",children:"registerEventHandler"}),"\n",(0,i.jsx)(r.p,{children:"La API de registerEventHandler es utilizado por la S\xfaper Aplicaci\xf3n para registrar el controlador de eventos SDK."}),"\n",(0,i.jsx)(r.h2,{id:"method-signature",children:"Method signature"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"void registerEventHandler(GriverEventManifest manifest, GriverContainerAPICallBack callBack) \n"})}),"\n",(0,i.jsx)(r.h2,{id:"par\xe1metros-de-solicitud",children:"Par\xe1metros de solicitud"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Nombre"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Requerido"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"manifest"}),(0,i.jsx)("td",{children:"GriverEventManifest"}),(0,i.jsx)("td",{children:"El objeto del controlador de eventos."}),(0,i.jsx)("td",{children:"M"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"callBack"}),(0,i.jsx)("td",{children:"GriverContainerAPICallBack"}),(0,i.jsx)("td",{children:"La callback que se utiliza para devolver el resultado del registro del controlador de eventos."}),(0,i.jsx)("td",{children:"O"})]})]}),"\n",(0,i.jsx)(r.h2,{id:"par\xe1metros-de-respuesta",children:"Par\xe1metros de respuesta"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Nombre"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Requerido"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"error"}),(0,i.jsx)("td",{children:"Error"}),(0,i.jsx)("td",{children:"Un objeto que se usa para devolver el c\xf3digo de error y el mensaje de error cuando el registro falla."}),(0,i.jsx)("td",{children:"O"})]})]}),"\n",(0,i.jsx)(r.h2,{id:"c\xf3digos-de-error",children:"C\xf3digos de error"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"C\xf3digo de error"}),(0,i.jsx)("th",{children:"Mensaje de error"}),(0,i.jsx)("th",{children:"Descripci\xf3n"}),(0,i.jsx)("th",{children:"Nuevas medidas"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"90002"}),(0,i.jsx)("td",{children:"GRV_CONTAINER_NOT_INITIALIZED"}),(0,i.jsx)("td",{children:"IAPMiniProgram SDKno se inicializa."}),(0,i.jsx)("td",{children:"Inicializar el SDK."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"90003"}),(0,i.jsx)("td",{children:"GRV_CONTAINER_ERROR_UNKNOWN"}),(0,i.jsx)("td",{children:"Error de parametro."}),(0,i.jsx)("td",{children:"Consulte la tabla de par\xe1metros de solicitud y verifique si todos los tipos de par\xe1metros son correctos y si se especifican todos los par\xe1metros requeridos."})]})]}),"\n",(0,i.jsx)(r.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,i.jsx)(r.h3,{id:"kotlin",children:"Kotlin"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"class DemoGriverBackPressedPointEvent : GriverBackPressedPointEvent {\r\n    override fun onInitialized() {\r\n\r\n    }\r\n\r\n    override fun onFinalized() {\r\n\r\n    }\r\n\r\n    override fun handleBackPressed(page: Page?) {\r\n        // por favor haga clic en\r\n    }\r\n}\r\nGriver.registerEventHandler(GriverEventManifest(DemoGriverBackPressedPointEvent::class.java.getName(), Arrays.asList<String>(GriverTitleBarCloseClickEvent::class.java.getName()),App::class.java)) { error, errorMessage -> }\n"})}),"\n",(0,i.jsx)(r.h3,{id:"java",children:"Java"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-js",children:"public class DemoGriverBackPressedPointEvent implements GriverBackPressedPointEvent {\r\n    \r\n    @Override\r\n    public void handleBackPressed(Page var1) {\r\n    }\r\n    \r\n    @Override\r\n    public void onInitialized() {\r\n    }\r\n    \r\n    @Override\r\n    public void onFinalized() {\r\n    }\r\n}\r\n\r\nGriver.registerEventHandler(new GriverEventManifest(DemoGriverBackPressedPointEvent.class.getName(), Arrays.asList(GriverTitleBarCloseClickEvent.class.getName()), App.class), new GriverContainerAPICallBack() {\r\n    @Override\r\n    public void error(int error, String errorMessage) {\r\n\r\n    }\r\n});\n"})})]})}function v(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>o});var i=n(96540);const s={},t=i.createContext(s);function d(e){const r=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(t.Provider,{value:r},e.children)}}}]);
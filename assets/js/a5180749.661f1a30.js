"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[1628],{13010:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>a});var n=i(74848),s=i(28453);const t={sidebar_position:7},d="registerBridge",o={id:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerBridge",title:"registerBridge",description:"La API de registerBridge es llamada por la Super app para registrar el JSAPIS incorporado reci\xe9n creado o anulado abuilt-in JSAPIs con IAPMiniprogram SDK.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerBridge.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/Android/APIs",slug:"/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerBridge",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerBridge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docsSidebar",previous:{title:"decodeUrlContent",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/decodeUrlContent"},next:{title:"registerEventHandler",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/APIs/registerEventHandler"}},l={},a=[{value:"Firma de m\xe9todo",id:"firma-de-m\xe9todo",level:2},{value:"Request parameters",id:"request-parameters",level:2},{value:"Par\xe1metros de respuest",id:"par\xe1metros-de-respuest",level:2},{value:"C\xf3digos de error",id:"c\xf3digos-de-error",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Kotlin",id:"kotlin",level:3},{value:"Java",id:"java",level:3}];function c(e){const r={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"registerbridge",children:"registerBridge"}),"\n",(0,n.jsx)(r.p,{children:"La API de registerBridge es llamada por la Super app para registrar el JSAPIS incorporado reci\xe9n creado o anulado abuilt-in JSAPIs con IAPMiniprogram SDK."}),"\n",(0,n.jsx)(r.h2,{id:"firma-de-m\xe9todo",children:"Firma de m\xe9todo"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:"void registerBridge(GriverBridgeManifest bridgeManifest, GriverContainerAPICallBack callBack) \n"})}),"\n",(0,n.jsx)(r.h2,{id:"request-parameters",children:"Request parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Nombre"}),(0,n.jsx)("th",{children:"Tipo"}),(0,n.jsx)("th",{children:"Descripci\xf3n"}),(0,n.jsx)("th",{children:"Requerido"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"bridgeManifest"}),(0,n.jsx)("td",{children:"GriverBridgeManifest"}),(0,n.jsx)("td",{children:"La informaci\xf3n de clase del JSAPI."}),(0,n.jsx)("td",{children:"M"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"callBack"}),(0,n.jsx)("td",{children:"GriverContainerAPICallBack"}),(0,n.jsx)("td",{children:"La devoluci\xf3n de llamada que se utiliza para escuchar el resultado del registro de JSAPI."}),(0,n.jsx)("td",{children:"O"})]})]}),"\n",(0,n.jsx)(r.h2,{id:"par\xe1metros-de-respuest",children:"Par\xe1metros de respuest"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"Nombre"}),(0,n.jsx)("th",{children:"Tipo"}),(0,n.jsx)("th",{children:"Descripci\xf3n"}),(0,n.jsx)("th",{children:"Requerido"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"error"}),(0,n.jsx)("td",{children:"Error"}),(0,n.jsx)("td",{children:"Un objeto que se usa para devolver el c\xf3digo de error y el mensaje de error cuando el registro falla."}),(0,n.jsx)("td",{children:"O"})]})]}),"\n",(0,n.jsx)(r.h2,{id:"c\xf3digos-de-error",children:"C\xf3digos de error"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"C\xf3digo de error"}),(0,n.jsx)("th",{children:"Mensaje de error"}),(0,n.jsx)("th",{children:"Descripci\xf3n"}),(0,n.jsx)("th",{children:"Nuevas medidas"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"90002"}),(0,n.jsx)("td",{children:"GRV_CONTAINER_NOT_INITIALIZED"}),(0,n.jsx)("td",{children:"IAPMiniProgram SDKno se inicializa."}),(0,n.jsx)("td",{children:"Inicializar el SDK."})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"90003"}),(0,n.jsx)("td",{children:"GRV_CONTAINER_ERROR_UNKNOWN"}),(0,n.jsx)("td",{children:"Error de parametro."}),(0,n.jsx)("td",{children:"Consulte la tabla de par\xe1metros de solicitud y verifique si todos los tipos de par\xe1metros son correctos y si se especifican todos los par\xe1metros requeridos."})]})]}),"\n",(0,n.jsx)(r.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,n.jsx)(r.h3,{id:"kotlin",children:"Kotlin"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'class TestBridgeExtension : SimpleBridgeExtension() {\r\n    @ActionFilter\r\n    @ThreadType(ExecutorType.UI)\r\n    fun test(\r\n        @BindingApiContext apiContext: ApiContext?,\r\n        @BindingCallback bridgeCallback: BridgeCallback\r\n    ) {\r\n        val result = JSONObject()\r\n        result.put("test", "test")\r\n        bridgeCallback.sendJSONResponse(result)\r\n    }\r\n}\r\n\r\nGriver.registerBridge(GriverBridgeManifest(TestBridgeExtension::class.java, Arrays.asList<String>("test"))) { errorCode, errorMessage ->\r\n            //Devuelva los errores cuando falla el registro\r\n}\n'})}),"\n",(0,n.jsx)(r.h3,{id:"java",children:"Java"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-js",children:'public class TestBridgeExtension extends SimpleBridgeExtension {\r\n    @ActionFilter\r\n    @ThreadType(ExecutorType.UI)\r\n    public void test(@BindingApiContext ApiContext apiContext,\r\n                     @BindingCallback BridgeCallback bridgeCallback) {\r\n        JSONObject result = new JSONObject();\r\n        result.put("test", "test");\r\n        bridgeCallback.sendJSONResponse(result);\r\n    }\r\n}\r\n\r\nGriver.registerBridge(new GriverBridgeManifest(TestBridgeExtension.class, Arrays.asList("test")), new GriverContainerAPICallBack() {\r\n    @Override\r\n    public void error(int errorCode, String errorMessage) {\r\n        //Return the errors when the registration fails\r\n    }\r\n});\n'})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,r,i)=>{i.d(r,{R:()=>d,x:()=>o});var n=i(96540);const s={},t=n.createContext(s);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);
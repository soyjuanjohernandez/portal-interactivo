"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[1615],{30667:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(74848),a=r(28453);const s={sidebar_position:1},o="Inicio r\xe1pido",l={id:"DevelopmentTool/IAPMiniProgram SDK/Android/Inicio r\xe1pido/Inicio r\xe1pido",title:"Inicio r\xe1pido",description:"Este tema presenta c\xf3mo configurar r\xe1pidamente el SDK de Android IAPminiprogram e implementar capacidades b\xe1sicas de mini-programa.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/Android/Inicio r\xe1pido/Inicio r\xe1pido.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/Android/Inicio r\xe1pido",slug:"/DevelopmentTool/IAPMiniProgram SDK/Android/Inicio r\xe1pido/",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/Inicio r\xe1pido/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"\ud83d\ude80 Inicio r\xe1pido"},next:{title:"Credentials",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/Android/Inicio r\xe1pido/Credentials"}},c={},d=[{value:"Antes de que empieces",id:"antes-de-que-empieces",level:2},{value:"Empezar",id:"empezar",level:2},{value:"Step 1: Descargar el SDK",id:"step-1-descargar-el-sdk",level:3},{value:"Paso 2: Agregue el archivo de configuraci\xf3n",id:"paso-2-agregue-el-archivo-de-configuraci\xf3n",level:3},{value:"Step 3: Agregue el repositorio maven",id:"step-3-agregue-el-repositorio-maven",level:3},{value:"Step 4: Agregar dependencias",id:"step-4-agregar-dependencias",level:3},{value:"Step 5: Inicializar el SDK",id:"step-5-inicializar-el-sdk",level:3},{value:"Kotlin",id:"kotlin",level:4},{value:"Java",id:"java",level:4},{value:"Step 6: IImplementar capacidades b\xe1sicas",id:"step-6-iimplementar-capacidades-b\xe1sicas",level:3},{value:"Abrir un mini-programa",id:"abrir-un-mini-programa",level:4},{value:"Obtener la lista de mini-program",id:"obtener-la-lista-de-mini-program",level:4},{value:"Pr\xf3ximos pasos",id:"pr\xf3ximos-pasos",level:2}];function t(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"inicio-r\xe1pido",children:"Inicio r\xe1pido"}),"\n",(0,n.jsx)(i.p,{children:"Este tema presenta c\xf3mo configurar r\xe1pidamente el SDK de Android IAPminiprogram e implementar capacidades b\xe1sicas de mini-programa."}),"\n",(0,n.jsx)(i.h2,{id:"antes-de-que-empieces",children:"Antes de que empieces"}),"\n",(0,n.jsx)(i.p,{children:"Antes de comenzar, aseg\xfarese de estar familiarizado con las siguientes cosas:"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)(i.p,{children:"Sistemas operativos:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(i.p,{children:"Para ejecutar miniprogramas HTML5, su dispositivo debe ser Android 4.1 (nivel AP 16) o superior."})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.p,{children:"Para ejecutar miniprogramas basados en DSL (Domain Specific Language), su dispositivo debe ser Android 6.0 (nivel API 23) o superior."})})]})]}),(0,n.jsx)("li",{children:(0,n.jsx)(i.p,{children:"Android Studio est\xe1 instalado en su computadora."})}),(0,n.jsx)("li",{children:(0,n.jsx)(i.p,{children:"La versi\xf3n del complemento de Gradle debe ser 4.1 o m\xe1s."})}),(0,n.jsx)("li",{children:(0,n.jsxs)(i.p,{children:["Las dependencias de la biblioteca de terceros del SDK de Android IAPminiprogram podr\xedan entrar en conflicto con los requisitos de la versi\xf3n de otros SDK o su aplicaci\xf3n.Se recomienda probar a fondo las funcionalidades de su aplicaci\xf3n despu\xe9s de la integraci\xf3n.Para obtener m\xe1s informaci\xf3n, consulte las dependencias de ",(0,n.jsx)(i.a,{href:"/",children:"biblioteca de terceros"}),"."]})})]}),"\n",(0,n.jsx)(i.h2,{id:"empezar",children:"Empezar"}),"\n",(0,n.jsx)(i.p,{children:"Para comenzar con IAPminiprogram SDK, realice las siguientes acciones:"}),"\n",(0,n.jsx)(i.h3,{id:"step-1-descargar-el-sdk",children:"Step 1: Descargar el SDK"}),"\n",(0,n.jsxs)(i.p,{children:["Inicie sesi\xf3n en la plataforma de mini programa, vaya a la p\xe1gina  ",(0,n.jsx)(i.strong,{children:"App Manage"}),", y haga click en ",(0,n.jsx)(i.strong,{children:"Resource > Android Resource"})," Para descargar IApminiprogram SDK para Android. Un archivo llamado ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"iapconnect_config_full"})})," se descargar\xe1 a su computadora."]}),"\n",(0,n.jsx)(i.p,{children:"Para obtener m\xe1s informaci\xf3n sobre c\xf3mo descargar los recursos de la aplicaci\xf3n, consulte los recursos de descarga de la aplicaci\xf3n."}),"\n",(0,n.jsx)(i.h3,{id:"paso-2-agregue-el-archivo-de-configuraci\xf3n",children:"Paso 2: Agregue el archivo de configuraci\xf3n"}),"\n",(0,n.jsxs)(i.p,{children:["Agregue el archivo ",(0,n.jsx)(i.em,{children:(0,n.jsx)(i.strong,{children:"iapconnect_config_full"})})," en el directorio de activos de su proyecto Android."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"iapconnect_config_ful",src:r(21238).A+"",width:"920",height:"570"})}),"\n",(0,n.jsx)(i.h3,{id:"step-3-agregue-el-repositorio-maven",children:"Step 3: Agregue el repositorio maven"}),"\n",(0,n.jsx)(i.p,{children:"Agregue el repositorio maven a su archivo de construcci\xf3n ra\xedz."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-json",children:"repositories {\r\n    maven {\r\n        url 'https://globaltech.alipay.com/api/v1/file/repository/minisdk/'\r\n        credentials {\r\n            username = USERNAME\r\n            password = PASSWORD\r\n        }\r\n    }\r\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["En el c\xf3digo anterior, los valores de nombre de usuario y contrase\xf1a est\xe1n desensibilizados. Para obtener los c\xf3digos de muestra con los valores, consulte ",(0,n.jsx)(i.a,{href:"/",children:"Credenciales"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"step-4-agregar-dependencias",children:"Step 4: Agregar dependencias"}),"\n",(0,n.jsx)(i.p,{children:"Para agregar dependencias, siga estos pasos:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Agregue las dependencias en el archivo Build.gradle de la aplicaci\xf3n a nivel con el siguiente c\xf3digo:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:'// en app build.gradle\r\n// Si hay algunos conflictos con el SDK existente, excluirlos\r\ndependencies {\r\n    implementation "com.alipay.plus.android:iapminiprogram:${iapminiprogram_version}"\r\n}\n'})}),"\n",(0,n.jsxs)(i.ol,{start:"2",children:["\n",(0,n.jsx)(i.li,{children:"Externalice el n\xfamero de versi\xf3n en el archivo build.gradle para administrar f\xe1cilmente las actualizaciones con el siguiente c\xf3digo:"}),"\n"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"ext {\r\n    iapminiprogram_version = 'IAPMINPROGRAM_VERSION'\r\n}\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Reemplace el valor de ",(0,n.jsx)(i.code,{children:"IAPMINPROGRAM_VERSION"})," con el \xfaltimo n\xfamero de versi\xf3n que se proporciona en las notas de ",(0,n.jsx)(i.a,{href:"/",children:"versi\xf3n de Android"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"step-5-inicializar-el-sdk",children:"Step 5: Inicializar el SDK"}),"\n",(0,n.jsxs)(i.p,{children:["Despu\xe9s de agregar dependencias, debe inicializar el SDK en el evento ",(0,n.jsx)(i.code,{children:"OnCreate"})," de la aplicaci\xf3n. Consulte los siguientes c\xf3digos para obtener m\xe1s detalles."]}),"\n",(0,n.jsx)(i.h4,{id:"kotlin",children:"Kotlin"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"class YourApplication : Application() {\r\n    override fun onCreate() {\r\n        super.onCreate()\r\n        IAPConnect.init(this, InitConfig(), object : InitCallback {\r\n            override fun onSuccess() {\r\n                //success\r\n            }\r\n            override fun onFailure(errorCode: InitErrorCode?, errorMsg: String?) {\r\n                // failure\r\n            }\r\n        })\r\n    }\r\n}\r\n\n"})}),"\n",(0,n.jsx)(i.h4,{id:"java",children:"Java"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-js",children:"public class YourApplication extends Application {\r\n    @Override\r\n    public void onCreate() {\r\n        super.onCreate();\r\n        InitConfig initConfig = new InitConfig();\r\n        IAPConnect.init(this, initConfig, new InitCallback() {\r\n            @Override\r\n            public void onSuccess() {\r\n                // success\r\n            }\r\n            @Override\r\n            public void onFailure(String errorCode, String errorMessage) {\r\n                // failure\r\n            }\r\n        });  \r\n    }\r\n}\n"})}),"\n",(0,n.jsx)(i.h3,{id:"step-6-iimplementar-capacidades-b\xe1sicas",children:"Step 6: IImplementar capacidades b\xe1sicas"}),"\n",(0,n.jsx)(i.h4,{id:"abrir-un-mini-programa",children:"Abrir un mini-programa"}),"\n",(0,n.jsx)(i.p,{children:"Para abrir un mini programa en su aplicaci\xf3n, llame a cualquiera de las siguientes API:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"openApp"}),": Llame a esta API para abrir un miniprograma con appId."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"openUrl"}),": Llame a esta API para abrir un miniprograma con una URL."]}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"obtener-la-lista-de-mini-program",children:"Obtener la lista de mini-program"}),"\n",(0,n.jsx)(i.p,{children:"Para obtener la lista de mini-programs en su aplicaci\xf3n, llame a cualquiera de las siguientes API:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"fetchApps"}),":Llame"," a esta API para obtener la lista de mini-programas con FetchAppRequestVO."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"fetchAppInfoListByIds"}),": Llame a esta API para obtener la lista de mini-programa con ID de mini-program."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"pr\xf3ximos-pasos",children:"Pr\xf3ximos pasos"}),"\n",(0,n.jsx)(i.p,{children:"Los pasos anteriores se centran en c\xf3mo integrar el SDK de Android IAPminiprogram e implementar sus capacidades b\xe1sicas.Adem\xe1s de eso, los desarrolladores pueden consultar selectivamente los siguientes cap\xedtulos para implementar capacidades avanzadas del SDK de Android IAPMiniprogram."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"Integrar los componentes SDK"}),": para implementar capacidades relacionadas con MAP, multimedia o Bluetooth, consulte esta gu\xeda para integrar los componentes SDK predefinidos correspondientes."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"Escuche los eventos SDK"}),": para realizar operaciones especificadas en un evento determinado, consulte esta gu\xeda para implementar interfaces espec\xedficas para escuchar eventos SDK."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"Personalizar capacidades relacionadas con la interfaz de usuario"}),": para personalizar ciertas interfaces de usuario y capacidades relacionadas, consulte esta gu\xeda para implementar interfaces espec\xedficas."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"Personalizar JSAPIS"}),": para extender las funcionalidades de SDK a trav\xe9s de JSAPIS, consulte esta gu\xeda para crear nuevos JSAPIS y anular la implementaci\xf3n predeterminada de JSAPIS incorporado."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/",children:"Abra un mini programa a trav\xe9s de un c\xf3digo QR promocional"}),": para permitir a los usuarios abrir mini programas y obtener beneficios a trav\xe9s de c\xf3digos QR promocionales, consulte esta gu\xeda para habilitar la apertura de mini programas escaneando dichos c\xf3digos."]}),"\n"]})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},21238:(e,i,r)=>{r.d(i,{A:()=>n});const n=r.p+"assets/images/androidQuik1-c9cf22a32ae2e934e5ed53b4a14571a8.png"},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>l});var n=r(96540);const a={},s=n.createContext(a);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[4473],{38264:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>t,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=i(74848),l=i(28453);const n={sidebar_position:6},o="Utilice PaymentUrl para pagar",s={id:"APIReferences/Capabilities/PaymentUrl para pago",title:"Utilice PaymentUrl para pagar",description:"Los usuarios pueden usar la aplicaci\xf3n de billetera para pagar el pedido realizado en el programa mini si la aplicaci\xf3n de billetera proporciona el servicio de pago.Este documento presenta el pago llamando a la API My.Tradepay con PaymentUrl.Tanto los procesos de integraci\xf3n para los desarrolladores de mini programas como la experiencia del usuario para los usuarios son similares a los del pago por Tradeno.",source:"@site/docs/APIReferences/Capabilities/PaymentUrl para pago.md",sourceDirName:"APIReferences/Capabilities",slug:"/APIReferences/Capabilities/PaymentUrl para pago",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/PaymentUrl para pago",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Uso de OrderStr para pagos",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/OrderStr para pago"},next:{title:"Capacidad de pago",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/Capacidad de pago"}},d={},p=[{value:"Experiencia de usuario",id:"experiencia-de-usuario",level:2},{value:"Procedimientos",id:"procedimientos",level:2},{value:"Proceso de pago",id:"proceso-de-pago",level:2}];function c(e){const a={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"utilice-paymenturl-para-pagar",children:"Utilice PaymentUrl para pagar"}),"\n",(0,r.jsx)(a.p,{children:"Los usuarios pueden usar la aplicaci\xf3n de billetera para pagar el pedido realizado en el programa mini si la aplicaci\xf3n de billetera proporciona el servicio de pago.Este documento presenta el pago llamando a la API My.Tradepay con PaymentUrl.Tanto los procesos de integraci\xf3n para los desarrolladores de mini programas como la experiencia del usuario para los usuarios son similares a los del pago por Tradeno."}),"\n",(0,r.jsx)(a.h2,{id:"experiencia-de-usuario",children:"Experiencia de usuario"}),"\n",(0,r.jsx)(a.p,{children:"Para completar un pago en el programa mini, Los usuarios generalme siguen los pasos una continua:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"El usuario elige bienes en el programa mini y crea un pedido, luego presiona el bot\xf3n de pago en el mini program."}),"\n",(0,r.jsx)(a.li,{children:"El mini programa redirige al usuario a la aplicaci\xf3n de billetera y la aplicaci\xf3n de billetera muestra la p\xe1gina de pago."}),"\n",(0,r.jsx)(a.li,{children:"El usuario confirma la informaci\xf3n del pedido, como el beneficiario y el monto, luego hace clic en el bot\xf3n de pago para realizar el pago."}),"\n",(0,r.jsx)(a.li,{children:"Despu\xe9s de confirmar el pago, la aplicaci\xf3n de billetera muestra el resultado del pago y redirige al usuario a la p\xe1gina del resultado del pago en el mini programa."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"procedimientos",children:"Procedimientos"}),"\n",(0,r.jsxs)(a.p,{children:["Para usar la API ",(0,r.jsx)(a.code,{children:"my.tradePay"})," para iniciar un pago en el Mini Programa, los desarrolladores de Mini del Programa deben completar los siguientes pasos:"]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Confirme que el servicio de pago proporcionado por la aplicaci\xf3n de billetera admite el pago por pago y obtenga la gu\xeda de integraci\xf3n de la aplicaci\xf3n de billetera."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Integre el servicio de pago en el lado del servidor Mini del programa."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Cree un mini programa en el espacio de trabajo de la billetera en la plataforma Mini Program, o aseg\xfarese de que el Mini programa pueda publicarse en la aplicaci\xf3n de billetera."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Proporcionar bienes y servicios de pago en el Mini Programa."}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Publique el mini programa."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"proceso-de-pago",children:"Proceso de pago"}),"\n",(0,r.jsx)(a.p,{children:"La siguiente figura ilustra el proceso de pago:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Proceso de pago",src:i(37161).A+"",width:"2916",height:"2058"})}),"\n",(0,r.jsx)(a.p,{children:"El proceso de pago contiene los siguientes pasos:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"El usuario realiza un pedido en el Mini Programa (Paso 1)."}),"\n",(0,r.jsx)(a.li,{children:"El cliente mini del programa env\xeda una solicitud para crear el pedido al servidor MINI del programa llamando a la API My.Request (Paso 2)."}),"\n",(0,r.jsx)(a.li,{children:"El servidor MINI del programa crea el pedido y env\xeda la solicitud al servidor de billetera a trav\xe9s de la API del servidor proporcionada por la billetera (paso 3 y 4)."}),"\n",(0,r.jsx)(a.li,{children:"El servidor de la billetera crea el pedido y genera pagos, luego devuelve el pago de pagos al servidor Mini del programa (paso 5-7)."}),"\n",(0,r.jsx)(a.li,{children:"El servidor Mini del programa devuelve el pago al cliente mini del programa (paso 8)."}),"\n",(0,r.jsx)(a.li,{children:"El Cliente Mini del Programa inicia la solicitud de pago llamando a la API My.Tradepay con PaymentUrl a la aplicaci\xf3n de billetera (Paso 9)."}),"\n",(0,r.jsx)(a.li,{children:"La aplicaci\xf3n de billetera obtiene la informaci\xf3n del pedido y hace que la p\xe1gina del cajero (paso 10-13)."}),"\n",(0,r.jsx)(a.li,{children:"El usuario confirma el pago y la billetera procesa la solicitud de pago (paso 14-17)."}),"\n",(0,r.jsx)(a.li,{children:"La aplicaci\xf3n de billetera devuelve el resultado de pago al cliente mini del programa.Al mismo tiempo, el servidor de billetera devuelve el resultado de pago al servidor MINI del programa (paso 18 y 19)."}),"\n",(0,r.jsx)(a.li,{children:"El cliente mini del programa muestra el resultado del pago (paso 20)."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Nota:"}),"\n",(0,r.jsx)(a.p,{children:"El flujo de pago es para referencia y puede variar seg\xfan la implementaci\xf3n de la API de la billetera."}),"\n",(0,r.jsx)(a.p,{children:"Codigo de ejemplo:"}),"\n",(0,r.jsx)(a.p,{children:"C\xf3digo de muestra para el my.tradepay API llamadas con PaymentUrl es el siguiente:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"my.tradePay({\r\n    paymentUrl: 'payment url',  \r\n    success: function(res) {            \r\n        my.alert({\r\n            content: JSON.stringify(res),\r\n        });\r\n    },\r\n    fail: function(res) {  \r\n        my.alert({\r\n            content: JSON.stringify(res),\r\n        });\r\n    },\r\n});\n"})})]})}function t(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},37161:(e,a,i)=>{i.d(a,{A:()=>r});const r=i.p+"assets/images/paymenturl-b128199347eebb57ae8735357a1b7f84.png"},28453:(e,a,i)=>{i.d(a,{R:()=>o,x:()=>s});var r=i(96540);const l={},n=r.createContext(l);function o(e){const a=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),r.createElement(n.Provider,{value:a},e.children)}}}]);
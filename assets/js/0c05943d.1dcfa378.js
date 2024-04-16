"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[1811],{4780:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>d,contentTitle:()=>n,default:()=>t,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(74848),l=i(28453);const o={sidebar_position:5},n="Uso de OrderStr para pagos",s={id:"APIReferences/Capabilities/OrderStr para pago",title:"Uso de OrderStr para pagos",description:"Los usuarios pueden usar la aplicaci\xf3n de billetera para pagar el pedido realizado en el mini program si la aplicaci\xf3n de billetera proporciona el servicio de pago.Este documento presenta el pago llamando a la API My.Tradepay con OrderStr.Se admiten los siguientes dos tipos de pago:",source:"@site/docs/APIReferences/Capabilities/OrderStr para pago.md",sourceDirName:"APIReferences/Capabilities",slug:"/APIReferences/Capabilities/OrderStr para pago",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/OrderStr para pago",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Uso de TradeNO para pagos",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/TradeNo para pago"},next:{title:"Utilice PaymentUrl para pagar",permalink:"/portal-interactivo/docs/APIReferences/Capabilities/PaymentUrl para pago"}},d={},c=[{value:"Pago general en l\xednea",id:"pago-general-en-l\xednea",level:2},{value:"Experiencia de usuario",id:"experiencia-de-usuario",level:2},{value:"Procedimientos",id:"procedimientos",level:2},{value:"Proceso de pago",id:"proceso-de-pago",level:2},{value:"Pago previo a la autorizaci\xf3n",id:"pago-previo-a-la-autorizaci\xf3n",level:2},{value:"Experiencia de usuario",id:"experiencia-de-usuario-1",level:3},{value:"Procedimientos",id:"procedimientos-1",level:3},{value:"Proceso de pago",id:"proceso-de-pago-1",level:3},{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2}];function p(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"uso-de-orderstr-para-pagos",children:"Uso de OrderStr para pagos"}),"\n",(0,r.jsx)(a.p,{children:"Los usuarios pueden usar la aplicaci\xf3n de billetera para pagar el pedido realizado en el mini program si la aplicaci\xf3n de billetera proporciona el servicio de pago.Este documento presenta el pago llamando a la API My.Tradepay con OrderStr.Se admiten los siguientes dos tipos de pago:"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Pago general en l\xednea"}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsx)(a.p,{children:"Pago previo a la autorizaci\xf3n"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"pago-general-en-l\xednea",children:"Pago general en l\xednea"}),"\n",(0,r.jsx)(a.p,{children:"Los usuarios pueden completar un pago general en l\xednea en el mini programa."}),"\n",(0,r.jsx)(a.h2,{id:"experiencia-de-usuario",children:"Experiencia de usuario"}),"\n",(0,r.jsx)(a.p,{children:"Para completar un pago en el mini program, los usuarios generalmente siguen los pasos a continuaci\xf3n:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"El usuario elige bienes en el mini program y crea un pedido, luego presiona el bot\xf3n de pago en el mini program."}),"\n",(0,r.jsx)(a.li,{children:"El mini program redirige al usuario a la aplicaci\xf3n de billetera y la aplicaci\xf3n de billetera muestra la p\xe1gina de pago."}),"\n",(0,r.jsx)(a.li,{children:"El usuario confirma la informaci\xf3n del pedido, como el beneficiario y el monto, luego hace clic en el bot\xf3n de pago para realizar el pago."}),"\n",(0,r.jsx)(a.li,{children:"Despu\xe9s de confirmar el pago, la aplicaci\xf3n de billetera muestra el resultado del pago y redirige al usuario a la p\xe1gina del resultado del pago en el mini program."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"procedimientos",children:"Procedimientos"}),"\n",(0,r.jsxs)(a.p,{children:["Para usar la api ",(0,r.jsx)(a.code,{children:"My.Tradepay"})," Para Iniciary Pago en El mini program, Los Desarrolladores de Mini del Programa Deben Agrupo los Sigenes Pasos:"]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Confirme que el servicio de pago proporcionado por la aplicaci\xf3n de billetera admite el pago por OrderStr y obtenga la gu\xeda de integraci\xf3n de la aplicaci\xf3n de billetera."}),"\n",(0,r.jsx)(a.li,{children:"Integre el servicio de pago en el lado del servidor Mini del programa."}),"\n",(0,r.jsx)(a.li,{children:"Cree un mini programa en el espacio de trabajo de la billetera en la plataforma Mini Program, o aseg\xfarese de que el Mini programa pueda publicarse en la aplicaci\xf3n de billetera."}),"\n",(0,r.jsx)(a.li,{children:"Proporcione bienes y servicios de pago en el mini program."}),"\n",(0,r.jsx)(a.li,{children:"Publique el mini programa.."}),"\n"]}),"\n",(0,r.jsx)(a.h2,{id:"proceso-de-pago",children:"Proceso de pago"}),"\n",(0,r.jsx)(a.p,{children:"La siguiente figura ilustra el proceso de pago:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Proceso de pago",src:i(28830).A+"",width:"2463",height:"2250"})}),"\n",(0,r.jsx)(a.p,{children:"El proceso de pago contiene los siguientes pasos:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"El usuario realiza un pedido en el Mini Programa (Paso 1)."}),"\n",(0,r.jsxs)(a.li,{children:["El Cliente de Mini del Programa env\xeda una solicitud para crear el pedido al servidor MINI del programa llamando a la API ",(0,r.jsx)(a.a,{href:"/",children:"my.request"})," (paso 1.1)."]}),"\n",(0,r.jsxs)(a.li,{children:["El servidor MINI del programa crea el pedido y devuelve ",(0,r.jsx)(a.code,{children:"orderStr"})," al cliente MINI del programa (paso 1.1.1 y 1.1.2)."]}),"\n",(0,r.jsx)(a.li,{children:"El Cliente de Mini del Programa inicia la solicitud de pago llamando a la API my.Tradepay con OrderStr a la aplicaci\xf3n de billetera (paso 1.1.2.1)."}),"\n",(0,r.jsx)(a.li,{children:"La billetera procesa la solicitud de pago internamente y la aplicaci\xf3n de billetera representa la p\xe1gina del cajero (paso 1.1.2.1.1 - 1.1.2.1.3)."}),"\n",(0,r.jsx)(a.li,{children:"El usuario confirma el pago y la aplicaci\xf3n de billetera muestra el resultado del pago (Paso 2 - 2.2)."}),"\n",(0,r.jsx)(a.li,{children:"La aplicaci\xf3n de billetera devuelve el resultado de pago al cliente mini del programa.Al mismo tiempo, el servidor de billetera devuelve el resultado de pago al servidor MINI del programa (paso 2.3)."}),"\n",(0,r.jsx)(a.li,{children:"El cliente mini del programa muestra el resultado de pago (paso 2.3.1)."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Nota:"})}),"\n",(0,r.jsx)(a.p,{children:"El flujo de pago es para referencia y puede variar seg\xfan la implementaci\xf3n de la API de la billetera."}),"\n",(0,r.jsx)(a.h2,{id:"pago-previo-a-la-autorizaci\xf3n",children:"Pago previo a la autorizaci\xf3n"}),"\n",(0,r.jsx)(a.p,{children:"El pago previo a la autorizaci\xf3n es una pr\xe1ctica com\xfan en las industrias de alquiler y hoteles donde el usuario puede pre-autorizar un pago por adelantado.A diferencia de los bienes con precios confirmados, el precio de algunos servicios solo se puede determinar cuando el usuario ha terminado de usar el servicio.Como tal, los comerciantes de servicios pueden usar pagos de preautorizaci\xf3n para garantizar que el pedido se pueda pagar antes de proporcionar el servicio."}),"\n",(0,r.jsxs)(a.p,{children:["Los comerciantes pueden llamar a la API ",(0,r.jsx)(a.a,{href:"/",children:"my.tradePay"})," con ",(0,r.jsx)(a.code,{children:"orderStr"})," para iniciar una solicitud de pago de preautorizaci\xf3n a trav\xe9s del mini program. Despu\xe9s de que el usuario ha otorgado la preautorizaci\xf3n, los fondos son capturados por el comerciante autom\xe1ticamente despu\xe9s de que se resuelva el monto del servicio."]}),"\n",(0,r.jsx)(a.h3,{id:"experiencia-de-usuario-1",children:"Experiencia de usuario"}),"\n",(0,r.jsx)(a.p,{children:"Para completar un pago previo a la autorizaci\xf3n, los usuarios generalmente siguen los pasos a continuaci\xf3n:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"El usuario confirma usar el servicio proporcionado por el mini program."}),"\n",(0,r.jsx)(a.li,{children:"El mini program redirige al usuario a la p\xe1gina previa a la autorizaci\xf3n en la aplicaci\xf3n de billetera."}),"\n",(0,r.jsx)(a.li,{children:"El usuario confirma la autorizaci\xf3n, luego la aplicaci\xf3n de billetera redirige al usuario al mini program.El usuario comienza a usar el servicio."}),"\n",(0,r.jsx)(a.li,{children:"Despu\xe9s de que el usuario haya terminado de usar el servicio y se confirma la tarifa de servicio, el comerciante deduce los fondos autom\xe1ticamente y el usuario recibe una notificaci\xf3n en la aplicaci\xf3n de billetera."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"procedimientos-1",children:"Procedimientos"}),"\n",(0,r.jsxs)(a.p,{children:["Para usar la API ",(0,r.jsx)(a.code,{children:"my.tradePay"})," para completar la preautorizaci\xf3n en el mini program, los desarrolladores de mini del programa deben completar los siguientes pasos:"]}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Confirme que la aplicaci\xf3n de billetera admite la capacidad de preautorizaci\xf3n y obtenga la gu\xeda de integraci\xf3n de la billetera."}),"\n",(0,r.jsx)(a.li,{children:"Integre el servicio de pago en el lado del servidor mini program."}),"\n",(0,r.jsx)(a.li,{children:"Cree un mini programa en el espacio de trabajo de la billetera en la plataforma Mini Program, o aseg\xfarese de que el Mini programa pueda publicarse en la aplicaci\xf3n de billetera."}),"\n",(0,r.jsx)(a.li,{children:"Proporcione el servicio que requiere la autorizaci\xf3n previa en el mini program."}),"\n",(0,r.jsx)(a.li,{children:"Publique el mini program."}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"proceso-de-pago-1",children:"Proceso de pago"}),"\n",(0,r.jsx)(a.p,{children:"La siguiente figura ilustra el proceso de pago previo a la autorizaci\xf3n:"}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.img,{alt:"Proceso de pago 2",src:i(65557).A+"",width:"2463",height:"2421"})}),"\n",(0,r.jsx)(a.p,{children:"El proceso de pago contiene los siguientes pasos:"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"El usuario comienza a usar el servicio en el mini program (Paso 1)."}),"\n",(0,r.jsxs)(a.li,{children:["El Cliente del mini program env\xeda una solicitud para crear el pedido al servidor de Mini del Programa llamando a la API ",(0,r.jsx)(a.a,{href:"/",children:"my.request"})," (Paso 2)."]}),"\n",(0,r.jsxs)(a.li,{children:["El servidor mini program crea el pedido y devuelve ",(0,r.jsx)(a.code,{children:"orderStr"})," al Mini Cliente del Programa (Paso 3 y 4)."]}),"\n",(0,r.jsxs)(a.li,{children:["El Mini Cliente del Programa inicia la solicitud de preautorizaci\xf3n llamando a la API ",(0,r.jsx)(a.a,{href:"/",children:"my.tradePay"})," con ",(0,r.jsx)(a.code,{children:"orderStr"})," a la aplicaci\xf3n de billetera (paso 1.1.2.1)."]}),"\n",(0,r.jsx)(a.li,{children:"La billetera procesa la solicitud de preautorizaci\xf3n internamente y la aplicaci\xf3n de billetera representa la p\xe1gina de preautorizaci\xf3n (Paso 6-8)."}),"\n",(0,r.jsx)(a.li,{children:"El usuario completa la preautorizaci\xf3n y la aplicaci\xf3n de billetera devuelve el resultado previo a la autorizaci\xf3n al cliente mini del programa (paso 10-12)."}),"\n",(0,r.jsxs)(a.li,{children:["El usuario comienza a utilizar el servicio proporcionado por el mini program.Cuando el usuario ha terminado de usar el servicio, el cliente Mini del programa env\xeda la solicitud de pago al servidor de MINI del programa llamando a la API ",(0,r.jsx)(a.a,{href:"/",children:"my.request"})," (paso 13 - 15)."]}),"\n",(0,r.jsx)(a.li,{children:"El servidor Mini del programa env\xeda la solicitud de pago llamando a la API del servidor proporcionada por la billetera y el servidor de la billetera devuelve el resultado de pago (paso 16 y 17)."}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:(0,r.jsx)(a.strong,{children:"Nota:"})}),"\n",(0,r.jsx)(a.p,{children:"El flujo de pago es para referencia y puede variar seg\xfan la implementaci\xf3n de la API de la billetera."}),"\n",(0,r.jsx)(a.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,r.jsxs)(a.p,{children:["El c\xf3digo de muestra para la llamada de la API de ",(0,r.jsx)(a.code,{children:"my.tradePay"})," es el siguiente:"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"my.tradePay({\r\n    orderStr: 'app_id=2018112803019836&biz_content=%7B%22amount%22%3A%220.02%22%2C%22extra_param%22%3A%22%7B%5C%22category%5C%22%3A%5C%22CHARGE_PILE_CAR%5C%22%7D%22%2C%22order_title%22%3A%22%D6%A7%B8%B6%B1%A6%D4%A4%CA%DA%C8%A8%22%2C%22out_order_no%22%3A%22ZMOutOrderNoAppFreeze2018052915543415090975%22%2C%22out_request_no%22%3A%22ZMOutReqNoAppFreeze20180529155434581875858%22%2C%22pay_timeout%22%3A%222d%22%2C%22payee_user_id%22%3A%222088202224929664%22%2C%22product_code%22%3A%22PRE_AUTH_ONLINE%22%7D&charset=GBK&format=json&sign=L4wk%2FNKcbJOo3n6Q5qbPzn0jUsvZlK4jr7iXnghudR0zeWJMmeNC71qIBSQfIz45n%2B5iTd0NQ5IK581xI2xCShTCiKAywnQcDmA%2Bjf%2BrRdKCDQCMLfCz%2BZ37C%2B6zxAX3e81%2F8Hr29lw4VPFfHkp9FmMwKw%2FGkNfV5ZlWoh7UtN8%3D&sign_type=RSA&timestamp=2018-05-29+15%3A54%3A35&version=1.0',  \r\n    success: function(res) {            \r\n        my.alert({\r\n            content: JSON.stringify(res),\r\n        });\r\n    },\r\n    fail: function(res) {  \r\n        my.alert({\r\n            content: JSON.stringify(res),\r\n        });\r\n    },\r\n});\n"})})]})}function t(e={}){const{wrapper:a}={...(0,l.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},28830:(e,a,i)=>{i.d(a,{A:()=>r});const r=i.p+"assets/images/orderStrpay1-7d2df693565d2a944fe66e78d845ea11.png"},65557:(e,a,i)=>{i.d(a,{A:()=>r});const r=i.p+"assets/images/orderStrpay2-a42155890d60f1aec1fb89d2ed101d63.png"},28453:(e,a,i)=>{i.d(a,{R:()=>n,x:()=>s});var r=i(96540);const l={},o=r.createContext(l);function n(e){const a=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function s(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:n(e.components),r.createElement(o.Provider,{value:a},e.children)}}}]);
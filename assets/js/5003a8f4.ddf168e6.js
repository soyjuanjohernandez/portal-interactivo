"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[4806],{140:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var s=a(74848),i=a(28453);const t={sidebar_position:2},d=void 0,o={id:"APIReferences/OpenAPIs/Idempotency",title:"Idempotency",description:"Si se produce un error de tiempo de espera de solicitud cuando llama a una API, puede intentar reenviar la solicitud. En este caso, puede configurar los campos de Idempotency especificados en la solicitud para ayudar a evitar la duplicaci\xf3n no deseada en caso de fallas y reintentos.",source:"@site/docs/APIReferences/OpenAPIs/Idempotency.md",sourceDirName:"APIReferences/OpenAPIs",slug:"/APIReferences/OpenAPIs/Idempotency",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/Idempotency",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Descripci\xf3n general",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/Descrici\xf3n general"},next:{title:"Codificaci\xf3n de mensajes",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/Codificaci\xf3n de mensajes"}},r={},c=[{value:"Idempotency campos",id:"idempotency-campos",level:2}];function l(e){const n={br:"br",code:"code",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Si se produce un error de tiempo de espera de solicitud cuando llama a una API, puede intentar reenviar la solicitud. En este caso, puede configurar los campos de Idempotency especificados en la solicitud para ayudar a evitar la duplicaci\xf3n no deseada en caso de fallas y reintentos."}),"\n",(0,s.jsx)(n.p,{children:"Una llamada API es ideMpotent si tiene el mismo resultado, sin importar cu\xe1ntas veces se aplique la llamada API. Por ejemplo, Idempotency puede garantizar que el pago se cobre solo una vez si la misma llamada de pago de API se retira varias veces en el caso de un error de tiempo de espera. Puede volver a intentar la solicitud utilizando el mismo campo Idempotency para garantizar que no se cree m\xe1s de un cargo."}),"\n",(0,s.jsx)(n.h2,{id:"idempotency-campos",children:"Idempotency campos"}),"\n",(0,s.jsx)(n.p,{children:"La siguiente tabla enumera los campos de idempotencia de OpenAPI espec\xedficos."}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"  API name             "}),(0,s.jsx)("th",{children:"Idempotency field"}),(0,s.jsx)("th",{children:"Rule"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:["  /v1/payments/pay",(0,s.jsx)(n.br,{}),"\n","/v2/payments/pay"]}),(0,s.jsx)("td",{children:"paymentRequestId"}),(0,s.jsxs)("td",{children:["Este campo se utiliza para el control de idempotencia. Para las solicitudes de pago que se inician con el mismo ",(0,s.jsx)(n.code,{children:"PaymentRequestid"})," y alcanzan un estado final (S o F), la aplicaci\xf3n nativa debe devolver el resultado \xfanico."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"/v1/payments/refund\r\n/v2/payments/refund"}),(0,s.jsx)("td",{children:"refundRequestId"}),(0,s.jsxs)("td",{children:["Este campo se utiliza para el control de idempotencia.Para las solicitudes de reembolso que se inician con la misma",(0,s.jsx)(n.code,{children:"refundRequestId"})," ay alcanzar un estado final (s o f), el nativo debe devolver el resultado \xfanico."]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"v2/miniprogram/message/send"}),(0,s.jsx)("td",{children:"requestId"}),(0,s.jsxs)("td",{children:["This field is an API idempotency field. For the notifications which are sent with the same ",(0,s.jsx)(n.code,{children:"requestId"})," and reach an S status, the native app must return the same ",(0,s.jsx)(n.code,{children:"messageId"}),". "]})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"/v2/miniprogram/qrcode/create"}),(0,s.jsx)("td",{children:"appId, appQrCodePage, appQrCodePage, and appQrCodeParams"}),(0,s.jsxs)("td",{children:["Estos cuatro campos son campos de idempotencia cuando se usan al mismo tiempo. Para el c\xf3digo QR generado con el mismo ",(0,s.jsx)(n.code,{children:"APPID"}),", ",(0,s.jsx)(n.code,{children:"APPQRCODEPAGE"}),", ",(0,s.jsx)(n.code,{children:"APPQRCODEPAGE"})," y ",(0,s.jsx)(n.code,{children:"APPQRCODEPARAMS"})," y alcanzar\xe1 el mismo estado de c\xf3digo QR y la imagen."]})]})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>d,x:()=>o});var s=a(96540);const i={},t=s.createContext(i);function d(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);
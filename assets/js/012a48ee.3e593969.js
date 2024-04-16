"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[3651],{54619:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>i,metadata:()=>t,toc:()=>o});var r=s(74848),a=s(28453);const i={sidebar_position:2},d=void 0,t={id:"APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-consultaPago",title:"v1-pagos-consultaPago",description:"POST `/v1/payments/inquiryPayment`",source:"@site/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-consultaPago.md",sourceDirName:"APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos",slug:"/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-consultaPago",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-consultaPago",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"v1-pagos-pagar",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-pagar"},next:{title:"reembolso-de-pagos-V1",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/reembolso-de-pagos-V1"}},l={},o=[{value:"Message structure",id:"message-structure",level:2},{value:"Request",id:"request",level:2},{value:"Response",id:"response",level:3},{value:"Result Process Logic",id:"result-process-logic",level:3},{value:"Result",id:"result",level:3},{value:"Sample",id:"sample",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["POST ",(0,r.jsx)(n.code,{children:"/v1/payments/inquiryPayment"})]}),"\n",(0,r.jsx)(n.p,{children:"La API de consulta se utiliza para preguntar el resultado del pago, generalmente cuando no puede recibir el resultado del pago despu\xe9s de un largo per\xedodo de tiempo.Como:"}),"\n",(0,r.jsx)(n.p,{children:"Nota:"}),"\n",(0,r.jsx)(n.p,{children:"1).Despu\xe9s de que el comerciante inicia el pago y no pueda recibir el resultado del pago despu\xe9s de un largo per\xedodo de tiempo, puede encuestar la interfaz de consulta del estado de pago.\r\n2). El comerciante utiliza la investigaci\xf3n de consultas para determinar el estado de pago en el escenario de procesamiento de pagos as\xedncronos.\r\nIntervalo de round-robin, recomendado 5s una vez, hasta 1 minuto."}),"\n",(0,r.jsx)(n.h2,{id:"message-structure",children:"Message structure"}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Propiedad"}),(0,r.jsx)("th",{children:"Tipo de datos"}),(0,r.jsx)("th",{children:"Requerido"}),(0,r.jsx)("th",{children:"Descripci\xf3n"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"partnerId"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"Yes"}),(0,r.jsx)("td",{children:"El socio asignado por la billetera.\r\nMax.Longitud: 32 caracteres."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentId"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La identificaci\xf3n \xfanica de un pago generado por la billetera.Max.Longitud: 64 caracteres."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentRequestId"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La identificaci\xf3n \xfanica de un pago generado por los comerciantes de billetera.Max.Longitud: 64 caracteres."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"extendInfo"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La informaci\xf3n extendida, la billetera y el comerciante pueden poner informaci\xf3n extendida aqu\xed.\r\nMax.Longitud: 4096 caracteres."})]})]}),"\n",(0,r.jsx)(n.h3,{id:"response",children:"Response"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Propiedad"}),(0,r.jsx)("th",{children:"Tipo de datos"}),(0,r.jsx)("th",{children:"Requerido"}),(0,r.jsx)("th",{children:"Descripci\xf3n"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"result"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.a,{href:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/Version%20v1/Diccionario%20de%20datos%20para%20v1",children:"Result"})}),(0,r.jsx)("td",{children:"Yes"}),(0,r.jsx)("td",{children:"El resultado de la solicitud, que contiene informaci\xf3n relacionada con el resultado de la solicitud, como los c\xf3digos de estado y error."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentId"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La identificaci\xf3n \xfanica de un pago generado por la billetera.Max.Longitud: 64 caracteres."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentRequestId"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La identificaci\xf3n \xfanica de un pago generado por los comerciantes de billetera.Max.Longitud: 64 caracteres."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentAmount"}),(0,r.jsx)("td",{children:(0,r.jsx)(n.a,{href:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/Version%20v1/Diccionario%20de%20datos%20para%20v1",children:"Amount"})}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"Monto del pedido para la visualizaci\xf3n de registros de consumo de usuario, p\xe1gina de resultados de pago."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentTime"}),(0,r.jsx)("td",{children:"String/Datetime"}),(0,r.jsx)("td",{children:"No"}),(0,r.jsxs)("td",{children:["Tiempo de \xe9xito del pago, que sigue al ",(0,r.jsx)(n.a,{href:"https://www.iso.org/iso-8601-date-and-time-format.html",children:"ISO 8601"})," est\xe1ndar."]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentStatus"}),(0,r.jsx)("td",{children:"String"}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"\xc9xito: el orden es sucedido.\r\nFALLO - El orden fallece.\r\nProcesamiento: el pedido no se paga o se paga, pero no termina.\r\nCancelado: el pedido se cancela."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"paymentFailReason"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La orden de pago de la orden de pago cuando el pago de pagos es fallado.\r\nMax.Longitud: 256 caracteres."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"authExpiryTime"}),(0,r.jsx)("td",{children:"String/Datetime"}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"El tiempo de vencimiento de la autorizaci\xf3n solo tiene valor cuando PaymentFactor. isAuthorizationPayment es verdad."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"extendInfo"}),(0,r.jsx)("td",{children:"String "}),(0,r.jsx)("td",{children:"No"}),(0,r.jsx)("td",{children:"La informaci\xf3n extendida, la billetera y el comerciante pueden poner informaci\xf3n extendida aqu\xed.\r\nMax.Longitud: 4096 caracteres."})]})]}),"\n",(0,r.jsx)(n.h3,{id:"result-process-logic",children:"Result Process Logic"}),"\n",(0,r.jsx)(n.p,{children:"Para diferentes resultados de solicitud, se deben realizar diferentes acciones.Consulte la siguiente lista para m\xe1s detalles:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Si el valor de ",(0,r.jsx)(n.strong,{children:"result.resultStatus"})," es ",(0,r.jsx)(n.strong,{children:"S"}),", Eso significa que la consulta del estado de pago es exitosa, luego verifique el estado de pago:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["si ",(0,r.jsx)(n.strong,{children:"paymentStatus"})," es procesar, significa que el pedido no se paga o se paga, pero no termina;"]}),"\n",(0,r.jsxs)(n.li,{children:["si ",(0,r.jsx)(n.strong,{children:"paymentStatus"})," es el ",(0,r.jsx)(n.strong,{children:"\xe9xito"}),", significa que el orden es sucedido;"]}),"\n",(0,r.jsxs)(n.li,{children:["si ",(0,r.jsx)(n.strong,{children:"paymentStatus"})," es ",(0,r.jsx)(n.strong,{children:"fallar"}),", significa que el orden fallece."]}),"\n",(0,r.jsxs)(n.li,{children:["si ",(0,r.jsx)(n.strong,{children:"paymentStatus"})," se ",(0,r.jsx)(n.strong,{children:"cancela"}),", significa que el pedido se cancela."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Si el valor del resultado.ResultStatus es F, eso significa que la consulta del estado de pago es falla.Cuando el resultado del resultado is ORDER_NOT_EXIST, Significa que el pago a\xfan no se acepta y puede tratarse como una falla de pago.Por la otra raz\xf3n de falla, se recomienda la intervenci\xf3n humana.\r\nSi el valor del resultado.ResultStatus es U, eso significa que se produce una excepci\xf3n desconocida en el lado de la billetera, el comerciante puede intentarlo nuevamente."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"result",children:"Result"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"No"}),(0,r.jsx)("th",{children:"ResultStatus"}),(0,r.jsx)("th",{children:"c\xf3digo de resultado"}),(0,r.jsx)("th",{children:"resultado"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"1"}),(0,r.jsx)("td",{children:"S"}),(0,r.jsx)("td",{children:"SUCCESS"}),(0,r.jsx)("td",{children:"\xc9xito."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"2"}),(0,r.jsx)("td",{children:"U"}),(0,r.jsx)("td",{children:"UNKNOWN_EXCEPTION"}),(0,r.jsx)("td",{children:"Se fall\xf3 una llamada de API, que es causada por razones desconocidas."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"3"}),(0,r.jsx)("td",{children:"U"}),(0,r.jsx)("td",{children:"REQUEST_TRAFFIC_EXCEED_LIMIT"}),(0,r.jsx)("td",{children:"El tr\xe1fico de solicitud excede el l\xedmite."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"4"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"ORDER_NOT_EXIST"}),(0,r.jsx)("td",{children:"El pedido no existe."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"5"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"INVALID_API"}),(0,r.jsx)("td",{children:"La API llamada no es v\xe1lida o no activa."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"6"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"PARAM_ILLEGAL"}),(0,r.jsx)("td",{children:"Par\xe1metros ilegales.Por ejemplo, entrada no num\xe9rica, fecha no v\xe1lida."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"7"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"PROCESS_FAIL"}),(0,r.jsx)("td",{children:"Se produjo una falla comercial general.No vuelva a intentarlo."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"8"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"ACCESS_DENIED"}),(0,r.jsx)("td",{children:"El acceso se niega."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"9"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"EXPIRED_AGENT_TOKEN"}),(0,r.jsx)("td",{children:"El token de acceso de Mini Program ha caducado."})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:"10"}),(0,r.jsx)("td",{children:"F"}),(0,r.jsx)("td",{children:"INVALID_AGENT_TOKEN"}),(0,r.jsx)("td",{children:"El token de acceso del mini programa no es v\xe1lido."})]})]}),"\n",(0,r.jsx)(n.h2,{id:"sample",children:"Sample"}),"\n",(0,r.jsx)(n.p,{children:"Ejemplo: un usuario ruso (Bob) compr\xf3 un producto de 100 USD en la plataforma de comercio electr\xf3nico, pagado con tarjeta de cr\xe9dito y present\xf3 el pago sincr\xf3nicamente, resultados de pago de encuestas as\xedncronas."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:s(45407).A+"",children:"ConsultaPagos"})}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["The Mini Program calls ",(0,r.jsx)(n.code,{children:"my.tradePay"})," interfaz para hacer el pago (paso 1)."]}),"\n",(0,r.jsx)(n.li,{children:"La aplicaci\xf3n E-Wallet devuelve el resultado del pago al Mini Programa (Paso 5)."}),"\n",(0,r.jsx)(n.li,{children:"Tambi\xe9n la billetera electr\xf3nica notifica el resultado del pago con el pago NotifyUrl proporcionado por el comerciante (paso 4)."}),"\n",(0,r.jsx)(n.li,{children:"Adem\xe1s del comerciante podr\xeda llamar /v1/payments/inquiryPayment interfaz para consultar el resultado del pago (Paso 6)."}),"\n",(0,r.jsx)(n.li,{children:"E-Wallet devolver\xe1 el resultado de la consulta del estado de pago al servidor comercial (Paso 7)."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"request-1",children:"Request"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"A. Inquiry By paymentRequestId"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\r\n "paymentRequestId":"1022172000000000001xxxx",\r\n "partnerId":"20200101234567890132xxxx",\r\n "extendInfo": "{\\"customerBelongsTo\\":\\"siteNameExample\\"}"\r\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"B. Inquiry By paymentId"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\r\n "paymentId":"1022172000000000001xxxx",\r\n "partnerId":"20200101234567890132xxxx",\r\n "extendInfo": "{\\"customerBelongsTo\\":\\"siteNameExample\\"}"\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"paymentId"})," La identificaci\xf3n \xfanica de un pago generado por la billetera."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"paymentRequestId"})," La identificaci\xf3n \xfanica de un pago generado por los comerciantes de billetera."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"partnerId"})," El socio asignado por la billetera."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"extendInfo"}),", Incluye Key - CustomerBelongsto la billetera electr\xf3nica que usa el cliente.Correspondiente al campo 'Sitename' que obtuvo de la API 'my.getSiteInfo', en el escenario de mini programa esto es obligatorio."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["TSu interfaz admite la consulta del ingenioh ",(0,r.jsx)(n.strong,{children:"paymentId"})," or ",(0,r.jsx)(n.strong,{children:"paymentRequestId"}),". ",(0,r.jsx)(n.strong,{children:"paymentId"})," tiene una prioridad m\xe1s alta que ",(0,r.jsx)(n.strong,{children:"paymentRequestId"}),", lo que significa que si ofrece ambos ",(0,r.jsx)(n.strong,{children:"paymentId"})," y ",(0,r.jsx)(n.strong,{children:"paymentRequestId"}),", usaremos ",(0,r.jsx)(n.strong,{children:"paymentId"})," e ignorar ",(0,r.jsx)(n.strong,{children:"paymentRequestId"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"response-1",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'{\r\n "result": {\r\n    "resultCode":"SUCCESS",\r\n    "resultStatus":"S",\r\n    "resultMessage":"success"\r\n  },\r\n "paymentId":"20200101234567890133333xxxx", \r\n "paymentRequestId":"20200101234567890133333xxxx", \r\n "paymentTime": "2020-01-01T12:01:01+08:30",\r\n "paymentAmount":{\r\n    "value":"100",\r\n    "currency":"USD"\r\n },\r\n "paymentStatus":"SUCCESS"\r\n}\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"result.resultStatus==S"})," shows that the inquiry is successful."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"paymentId"})," the unique Id of a payment generated by Wallet."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"paymentRequestId"})," the unique Id of a payment generated by Wallet merchants."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"paymentTime"}),"  describes the date time of the successful Wallet payment."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"paymentAmount"}),"  describes the payment amount."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"paymentStatus.PROCESSING"})," order is not paid or is paid but not finish."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"paymentStatus.SUCCESS"}),"  order is succeeded."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"paymentStatus.FAIL"}),"  order is failed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"paymentStatus.CANCELLED"}),"  order is cancelled."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"paymentFailReason"}),"  Describe la raz\xf3n de fracaso de pago cuando PaymentStatus = Fail.\r\n*** AuthExpiryTime ** describe el tiempo de caducidad de autorizaci\xf3n de pago, cuando la orden de pago es PaymentFactor.isAuthorizationPayment=true."]}),"\n"]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},45407:(e,n,s)=>{s.d(n,{A:()=>r});const r=s.p+"assets/files/ConsultasPagos-1aeabad5ee3db0dacae1ceb62a8c0e8e.png"},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(96540);const a={},i=r.createContext(a);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[3487],{32902:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var a=n(74848),i=n(28453);const s={sidebar_position:1},d=void 0,l={id:"APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-pagar",title:"v1-pagos-pagar",description:"POST `/v1/payments/pay`",source:"@site/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-pagar.md",sourceDirName:"APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos",slug:"/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-pagar",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-pagar",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"v1 autorizaciones applyToken",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Autorizaciones/v1 autorizaciones applyToken"},next:{title:"v1-pagos-consultaPago",permalink:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI para comerciantes/Version v1/Pagos/v1-pagos-consultaPago"}},t={},c=[{value:"Message structure",id:"message-structure",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:2},{value:"L\xf3gica del proceso de resultados",id:"l\xf3gica-del-proceso-de-resultados",level:3},{value:"Result",id:"result",level:3},{value:"Muestra",id:"muestra",level:2},{value:"Pago del cajero",id:"pago-del-cajero",level:3},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3}];function o(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["POST ",(0,a.jsx)(r.code,{children:"/v1/payments/pay"})]}),"\n",(0,a.jsxs)(r.p,{children:["La ",(0,a.jsx)(r.code,{children:"pay"})," La API se utiliza para iniciar un pago en la billetera."]}),"\n",(0,a.jsx)(r.p,{children:"Nota: Un pago que tiene lugar en la billetera."}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"merchant/partner Inicia la solicitud de pago a la billetera a trav\xe9s de la interfaz de pago."}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"La billetera manejar\xe1 diferentes escenarios de pago base en los par\xe1metros en solicitud."}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"Actualmente, el soporte de API de pago despu\xe9s de la adquisici\xf3n de escenarios:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Pago de cajero: generalmente se usa en el escenario de pago en l\xednea. En este escenario, merchant/partner Llamar\xe1 a esta API de pago para crear un pedido, y la billetera devolver\xe1 la URL de la p\xe1gina del cajero a merchant/partner, y luego redirige a esta p\xe1gina de cajero.Entonces el usuario puede terminar el pago en la p\xe1gina del cajero."}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"message-structure",children:"Message structure"}),"\n",(0,a.jsx)(r.h3,{id:"request",children:"Request"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Propiedad"}),(0,a.jsx)("th",{children:"Tipo de datos"}),(0,a.jsx)("th",{children:"Requerido"}),(0,a.jsx)("th",{children:"Descripci\xf3n"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"partnerId"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"El socio asignado por la billetera.\r\nMax.Longitud: 32 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"appId"}),(0,a.jsx)("td",{children:"String"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"La mini ID de programa.\r\nMax.Longitud: 32 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"productCode"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Definido por la billetera, la billetera usar\xe1 ProductCode para obtener la configuraci\xf3n del contrato que incluye tarifa, limita la informaci\xf3n.\r\nMax.Longitud: 32 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentOrderTitle"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"El t\xedtulo de la orden de este pago.\r\nMax.Longitud: 256 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentRequestId"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsxs)("td",{children:[(0,a.jsx)(r.p,{children:"La identificaci\xf3n \xfanica de un pago generado por el comerciante."}),(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"M\xe1x.Longitud: 64 caracteres."}),"\n",(0,a.jsxs)(r.li,{children:["Este campo se usa para el control de ",(0,a.jsx)(r.a,{href:"/portal-interactivo/docs/APIReferences/OpenAPIs/Idempotency",children:"idempotence"})," Para las solicitudes de pago que se inician con el mismo ",(0,a.jsx)(r.code,{children:"PaymentRequestid"})," y alcanzan un estado final (S o F), la billetera debe devolver el resultado \xfanico."]}),"\n"]})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentAmount"}),(0,a.jsxs)("td",{children:[" ",(0,a.jsx)(r.a,{href:"/",children:"Amount"})]}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"Monto del pedido para la visualizaci\xf3n de registros de consumo de usuario, p\xe1gina de resultados de pago."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentMethods"}),(0,a.jsx)("td",{children:(0,a.jsx)(r.a,{href:"/",children:"PaymentMethod"})}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"El pago de pago utilizado para recolectar fondos por billetera."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentAuthCode"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Si PayFactor.IsagreementPay es verdadero, entonces es el acceso al usuario de la billetera, si PayFactor.\r\nISpaymentCode es verdadero, entonces es el c\xf3digo de autores del usuario de la billetera.\r\nMax.Longitud: 128 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentFactor"}),(0,a.jsx)("td",{children:(0,a.jsx)(r.a,{href:"/",children:"PaymentFactor"})}),(0,a.jsx)("td",{children:"No"}),(0,a.jsxs)("td",{children:["En el mini escenario del programa, es valor fijo, formato de mapa, ",(0,a.jsx)(r.code,{children:'{"isCashierPayment" : true}'}),"."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentExpiryTime"}),(0,a.jsx)("td",{children:"String/Datetime"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"La orden de pago de la orden de pago definida por Merchant, que sigue el est\xe1ndar ISO 8601."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentReturnUrl"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"La URL de redirecci\xf3n definida por Merchan.\r\nMax.Longitud: 1024 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentNotifyUrl"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"El \xe9xito de pago notifica a la URL definida por el comerciante.\r\nMax.Longitud: 1024 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"mcc"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"El c\xf3digo de categor\xeda de comerciante.\r\nMax.Longitud: 32 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"extraParams"}),(0,a.jsx)("td",{children:"Map"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Formato de mapa, capacidad de pago espec\xedfica que proporcionada por la billetera, ahora solo apoyamos 1 key : ORDER."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"extendInfo"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"La informaci\xf3n extendida, la billetera y el comerciante pueden poner informaci\xf3n extendida aqu\xed.\r\nMax.Longitud: 4096 caracteres."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"envInfo"}),(0,a.jsx)("td",{children:(0,a.jsx)(r.a,{href:"/",children:"EnvInfo"})}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Informaci\xf3n del entorno del tel\xe9fono m\xf3vil"})]})]}),"\n",(0,a.jsx)(r.h2,{id:"response",children:"Response"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Propiedad"}),(0,a.jsx)("th",{children:"Tipo de datos"}),(0,a.jsx)("th",{children:"Requerido"}),(0,a.jsx)("th",{children:"Descripci\xf3n"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"result"}),(0,a.jsx)("td",{children:(0,a.jsx)(r.a,{href:"/",children:"Result"})}),(0,a.jsx)("td",{children:"Yes"}),(0,a.jsx)("td",{children:"El resultado de la solicitud, que contiene informaci\xf3n relacionada con el resultado de la solicitud, como los c\xf3digos de estado y error."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentId"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"The unique ID of a payment generated by Wallet.\r\nMax. length: 64 characters."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"paymentTime"}),(0,a.jsx)("td",{children:"String/Datetime"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsxs)("td",{children:["Payment success time, which follows the ",(0,a.jsx)(r.a,{href:"https://www.iso.org/iso-8601-date-and-time-format.html",children:"ISO 8601"})," standard."]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"actionForm"}),(0,a.jsx)("td",{children:(0,a.jsx)(r.a,{href:"/",children:"ActionForm"})}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"authExpiryTime"}),(0,a.jsx)("td",{children:"String/Datetime"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"El tiempo de expiraci\xf3n de la autorizaci\xf3n solo tiene valor cuando PaymentFactor.ISauthorizationPayment es cierto."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"extendInfo"}),(0,a.jsx)("td",{children:"String "}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"La informaci\xf3n extendida, la billetera y el comerciante pueden poner informaci\xf3n extendida aqu\xed.\r\nMax.Longitud: 4096 caracteres."})]})]}),"\n",(0,a.jsx)(r.h3,{id:"l\xf3gica-del-proceso-de-resultados",children:"L\xf3gica del proceso de resultados"}),"\n",(0,a.jsx)(r.p,{children:"Para diferentes resultados de solicitud, se deben realizar diferentes acciones.Consulte la siguiente lista para m\xe1s detalles:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"result.resultStatus = S"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Eso significa que esta transacci\xf3n es el \xe9xito, merchant/partner cUna transacci\xf3n de actualizaci\xf3n al \xe9xito. Lo que necesita notar es :"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"En el escenario de evaluaci\xf3n de pagos, 's' solo significa evaluar el \xe9xito, no hay transferencia de fondos real."}),"\n",(0,a.jsx)(r.li,{children:"En el escenario de pago de autorizaci\xf3n, \"S 'solo significa el \xe9xito de la autorizaci\xf3n, necesita esperar a que la operaci\xf3n de captura finalice la transacci\xf3n(finish final fund flow)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"result.resultStatus = A"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Eso significa que la transacci\xf3n ya acepta por la billetera. Merchant/partner Necesita continuar la operaci\xf3n del siguiente paso de acuerdo con la respuesta de ActionForm.Como el c\xf3digo de pedido de visualizaci\xf3n al usuario o redirigir a la p\xe1gina de cajero de billetera."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"result.resultStatus = F"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Eso significa que esta transacci\xf3n est\xe1 fallida, la raz\xf3n fallida puede referirse al par\xe1metro del c\xf3digo de resultado.Por lo general, las transacciones F no pueden volver a tener \xe9xito si usa la misma solicitud de pago para llamar a la billetera."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"result.resultStatus = U"})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"Eso significa que se produce una excepci\xf3n desconocida en el lado de la billetera. Merchant/partner \xbfPuede la consulta el resultado del pago o esperar la notificaci\xf3n del estado de pago para obtener el resultado de pago real? Lo que necesita notar es:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"El escenario de evaluaci\xf3n de pagos no puede consultar."}),"\n",(0,a.jsx)(r.li,{children:"U el estado no se puede configurar para fallar o tener \xe9xito en merchant/partner system."}),"\n",(0,a.jsx)(r.li,{children:"U el estado no puede reembolsar al usuario sin conexi\xf3n(Maybe will make fund loss)."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"result",children:"Result"}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"ResultStatus"}),(0,a.jsx)("th",{children:"c\xf3digo de resultado"}),(0,a.jsx)("th",{children:"resulta"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"S"}),(0,a.jsx)("td",{children:"SUCCESS"}),(0,a.jsx)("td",{children:"\xc9xito."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"U"}),(0,a.jsx)("td",{children:"UNKNOWN_EXCEPTION"}),(0,a.jsx)("td",{children:"Se fall\xf3 una llamada de API, que es causada por razones desconocidas."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"U"}),(0,a.jsx)("td",{children:"REQUEST_TRAFFIC_EXCEED_LIMIT"}),(0,a.jsx)("td",{children:"El tr\xe1fico de solicitud excede el l\xedmite."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"U"}),(0,a.jsx)("td",{children:"PAYMENT_IN_PROCESS"}),(0,a.jsx)("td",{children:"El pago a\xfan est\xe1 en proceso."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"A"}),(0,a.jsx)("td",{children:"ACCEPT"}),(0,a.jsx)("td",{children:"Necesita la siguiente acci\xf3n de acuerdo con ActionForm."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"REPEAT_REQ_INCONSISTENT"}),(0,a.jsx)("td",{children:"Env\xedo repetido, y las solicitudes son inconsistentes."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"PROCESS_FAIL"}),(0,a.jsx)("td",{children:"Se produjo una falla comercial general.No vuelva a intentarlo."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"INVALID_API"}),(0,a.jsx)("td",{children:"La API llamada es inv\xe1lida o no activa."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"PARAM_ILLEGAL"}),(0,a.jsx)("td",{children:"Existen par\xe1metros ilegales.Por ejemplo, una entrada no num\xe9rica o una fecha no v\xe1lida."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"ACCESS_DENIED"}),(0,a.jsx)("td",{children:"Se niega el acceso."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"PAYMENT_AMOUNT_EXCEED_LIMIT"}),(0,a.jsx)("td",{children:"El monto del pago excede el l\xedmite."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"USER_NOT_EXIST"}),(0,a.jsx)("td",{children:"No existe ese usuario."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"USER_STATUS_ABNORMAL"}),(0,a.jsx)("td",{children:"El estado del usuario es anormal."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"USER_BALANCE_NOT_ENOUGH"}),(0,a.jsx)("td",{children:"El saldo del usuario no es suficiente para este pago."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"PARTNER_NOT_EXIST"}),(0,a.jsx)("td",{children:"Pareja no existe."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"PARTNER_STATUS_ABNORMAL"}),(0,a.jsx)("td",{children:"Estado de la pareja anormal."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"RISK_REJECT"}),(0,a.jsx)("td",{children:"Riesgo de rechazo."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"CURRENCY_NOT_SUPPORT"}),(0,a.jsx)("td",{children:"La moneda no es compatible."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"ORDER_STATUS_INVALID"}),(0,a.jsx)("td",{children:"El pedido est\xe1 en estado no v\xe1lido como cerrado."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"INVALID_ACCESS_TOKEN"}),(0,a.jsx)("td",{children:"Accesstoken inv\xe1lido."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"USER_AMOUNT_EXCEED_LIMIT"}),(0,a.jsx)("td",{children:"El monto del pago excede el l\xedmite de la cantidad del usuario."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"EXPIRED_ACCESS_TOKEN"}),(0,a.jsx)("td",{children:"El token de acceso est\xe1 expirado."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"AUTH_CODE_ALREADY_USED"}),(0,a.jsx)("td",{children:"C\xf3digo de autenticaci\xf3n ya utilizado."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"INVALID_CODE"}),(0,a.jsx)("td",{children:"Auth Code Ilegal."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"EXPIRED_AGENT_TOKEN"}),(0,a.jsx)("td",{children:"El token de acceso de Mini Program ha caducado."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"F"}),(0,a.jsx)("td",{children:"INVALID_AGENT_TOKEN"}),(0,a.jsx)("td",{children:"El token de acceso del mini programa no es v\xe1lido."})]})]}),"\n",(0,a.jsx)(r.h2,{id:"muestra",children:"Muestra"}),"\n",(0,a.jsx)(r.h3,{id:"pago-del-cajero",children:"Pago del cajero"}),"\n",(0,a.jsx)(r.p,{children:"Por ejemplo, un usuario compra una mercanc\xeda de 100 USD en el merchant/partner(online merchant usually) , merchant/partner Llame a esta API de pago para crear primero la orden de pago, la billetera devolver\xe1 la identificaci\xf3n de la orden de pago y la URL de la p\xe1gina del cajero de la billetera a merchant/partner, then merchant/partner puede redirigir el usuario a la p\xe1gina de la billetera con My.tradepay API."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:n(36769).A+"",children:"PAYMENTS-PAY"})}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsx)(r.li,{children:"En primer lugar, el mini programa crea orden (Paso 1)."}),"\n",(0,a.jsxs)(r.li,{children:["El servidor comercial llama ",(0,a.jsx)(r.code,{children:"/v1/payments/pay"})," Interfaz con ",(0,a.jsx)(r.code,{children:"PaymentNotifyUrl"})," para iniciar el flujo de pago (paso 2)."]}),"\n",(0,a.jsx)(r.li,{children:"El servidor E-Wallet devuelve informaci\xf3n de detalles de pago con PaymentId al servidor comercial (Paso 3)."}),"\n",(0,a.jsx)(r.li,{children:"El servidor comercial tiene que pasar la informaci\xf3n de los detalles de pago al Mini Programa (Paso 4)."}),"\n",(0,a.jsxs)(r.li,{children:["Y el Mini programa debe llamar a my.",(0,a.jsx)(r.code,{children:"tradePay"})," Interface para hacer el pago (Paso 5)."]}),"\n",(0,a.jsxs)(r.li,{children:["Cuando el pago alcanza el estado final, E Wallet Server notifica el resultado del pago al servidor comercial con ",(0,a.jsx)(r.code,{children:"paymentNotifyUrl"}),"  proporcionado en el Paso 2 (Paso 8)."]}),"\n",(0,a.jsx)(r.li,{children:"Tambi\xe9n la aplicaci\xf3n de billetera electr\xf3nica devuelve el resultado del pago al programa MINI (Paso 9)."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"request-1",children:"Request"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'{\r\n    "partnerId": "P000000000000001xxxx",\r\n    "paymentRequestId": "2019112719074101000700000077771xxxx",\r\n    "paymentOrderTitle": "SHOES",\r\n    "productCode": "PC_5800000001",\r\n    "mcc": "4399",\r\n    "paymentAmount": {\r\n        "currency": "USD",\r\n        "value": "10000"\r\n    },\r\n    "paymentFactor": {\r\n        "isCashierPayment": true\r\n    },\r\n    "paymentReturnUrl":"https://www.merchant.com/redirectxxx",\r\n    "paymentNotifyUrl":"https://www.merchant.com/paymentNotifyxxx",\r\n    "extraParams": {\r\n        "ORDER": "{\\"referenceOrderId\\":\\"ID_000001\\",\\"orderAmount\\":\\"{\\\\\\"currency\\\\\\":\\\\\\"USD\\\\\\",\\\\\\"value\\\\\\":\\\\\\"10000\\\\\\"}\\"}"\r\n    },\r\n    "extendInfo": "{\\"customerBelongsTo\\":\\"siteNameExample\\"}", \r\n    "envInfo": {\r\n        "osType": "IOS",\r\n        "terminalType": "APP"\r\n    }\r\n}\n'})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"partnerId"})," es el identificador de unmerchant/partner, asignado por billetera."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"paymentRequestId"})," se genera por merchant/partner, uniquely identifies the payment. Wallet must make use of paymentRequestId and partnerId for idempotent control. For example, if a payment with paymentRequestId== 2019112719074101000700000077771xxxx and partnerId==P000000000000001xxxx  hcomo ha sido procesado con \xe9xito por la billetera, cuando merchant/partner Utiliza el mismo PaymentRquestid y PartnerID para el pago, la billetera responder\xe1 con un pago exitoso."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"productCode"})," Definido por la billetera, la billetera usar\xe1 ProductCode para obtener la configuraci\xf3n del contrato que incluye tarifa, limita la informaci\xf3n."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"paymentFactor"})," En el escenario de mini programa, el ",(0,a.jsx)(r.strong,{children:(0,a.jsx)(r.code,{children:"PaymentFactor"})})," solo tiene el valor fijo: ",(0,a.jsx)(r.code,{children:"isCashierPayment = true"})]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"paymentReturnUrl"})," \xbfEst\xe1 la URL definida pormerchant/partner.  En el escenario de pago del cajero, despu\xe9s de que el usuario termin\xf3 el pago en la p\xe1gina de la billetera, la billetera dirigir\xe1 a la base de comerciante en esta URL."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"paymentNotifyUrl"})," \xbfEst\xe1 la URL definida por merchant/partner.  En el escenario de pago del cajero, despu\xe9s de que el usuario termin\xf3 el pago en la p\xe1gina de la billetera, la billetera notificar\xe1 a que el comerciante la base del resultado del pago en esta URL."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"paymentAmount"})," describes the amount of 100 USD to be collected by Wallet from user account for this payment."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"extraParams"}),", Solo incluye 1 clave: ",(0,a.jsx)(r.a,{href:"/portal-interactivo/docs/APIReferences/OpenAPIs/OpenAPI%20para%20comerciantes/Version%20v1/Diccionario%20de%20datos%20para%20v1",children:"ORDER"})," ahora. El pedido describe los detalles del pedido de la compra de la mercanc\xeda de 100 USD por parte del usuario del comerciante.Como el comerciante, el comprador, los bienes, etc. se incluyen en orden.La informaci\xf3n en el pedido solo se usa para mostrar la p\xe1gina de resultados de pago del usuario y el historial de transacciones, los informes de regulaci\xf3n, etc. No utilizar\xe1 el monto en el pedido de operaci\xf3n del fondo."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"extendInfo"}),", includes key - customerBelongsTo the e-wallet that the customer uses. Corresponding to the field 'siteName' el obtenido de la API 'my.getSiteInfo', En el mini escenario del programa, esto es obligatorio."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"response-1",children:"Response"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-js",children:'{\r\n "result": {\r\n    "resultCode":"ACCEPT",\r\n    "resultStatus":"A",\r\n    "resultMessage":"accept"\r\n },\r\n "paymentId": "string",\r\n "actionForm":{\r\n    "actionFormType":"REDIRECTION",\r\n    "redirectionUrl":"http://www.merchant.com/cashier?orderId=xxxxxxx"\r\n }\r\n}\n'})}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"result.resultStatus ==A"})," muestra que el pago es aceptar el \xe9xito.Despu\xe9s de que el usuario finalice el pago en la p\xe1gina del cajero, el pago cambiar\xe1 al \xe9xito."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"paymentId"})," se genera por billetera, identifica de manera \xfanica el pago."]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.strong,{children:"actionForm"})," devolver\xe1 la p\xe1gina de la p\xe1gina del cajero al comerciante/socio, despu\xe9s merchant/partner Recibido de aceptaci\xf3n del resultado, redirigir\xe1 a esta URL."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},36769:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/files/PAYMENTS-PAY-e9099e9c4c29dcee5700b8bee1c687b9.png"},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>l});var a=n(96540);const i={},s=a.createContext(i);function d(e){const r=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);
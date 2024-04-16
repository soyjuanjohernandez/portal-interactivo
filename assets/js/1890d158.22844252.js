"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[865],{83942:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var d=r(74848),t=r(28453);const i={sidebar_position:3},s="my.prompt",l={id:"APIReferences/JSAPI/UI/Comentario/my.prompt",title:"my.prompt",description:"Explica un cuadro de di\xe1logo para mostrar el mensaje de inmediato.",source:"@site/docs/APIReferences/JSAPI/UI/Comentario/my.prompt.md",sourceDirName:"APIReferences/JSAPI/UI/Comentario",slug:"/APIReferences/JSAPI/UI/Comentario/my.prompt",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Comentario/my.prompt",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"my.confirm",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Comentario/my.confirm"},next:{title:"my.showLoading",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Comentario/my.showLoading"}},o={},a=[{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Funci\xf3n de devoluci\xf3n de llamada de \xe9xito",id:"funci\xf3n-de-devoluci\xf3n-de-llamada-de-\xe9xito",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"myprompt",children:"my.prompt"}),"\n",(0,d.jsx)(n.p,{children:"Explica un cuadro de di\xe1logo para mostrar el mensaje de inmediato."}),"\n",(0,d.jsx)(n.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-js",children:"my.prompt({\r\n  title: 'Title',\r\n  message: 'Explain the current status and prompt the user solution. It is best not to exceed two lines.',\r\n  placeholder: 'Leave a message to a friend',\r\n  okButtonText: 'Confirm',\r\n  cancelButtonText: 'Cancel',\r\n  success: (result) => {\r\n    my.alert({\r\n      title: JSON.stringify(result),\r\n    });\r\n  },\r\n});\n"})}),"\n",(0,d.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Propiedad"}),(0,d.jsx)("th",{children:"Tipo"}),(0,d.jsx)("th",{children:"Requerida"}),(0,d.jsx)("th",{children:"Descripci\xf3n"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"title"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsx)("td",{children:"T\xedtulo del cuadro r\xe1pido."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"message"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsx)("td",{children:'Texto del cuadro de solicitud, que es "Ingrese el contenido aqu\xed" de forma predeterminada.'})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"placeholder"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsx)("td",{children:"Mensaje de texto para el cuadro de entrada."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"align"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsxs)("td",{className:"p-no-margin",children:[(0,d.jsx)(n.p,{children:"Alineaci\xf3n de mensajes.Los valores v\xe1lidos son:"}),(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"izquierda"}),"\n",(0,d.jsx)(n.li,{children:"centro"}),"\n",(0,d.jsx)(n.li,{children:"derecha"}),"\n"]}),(0,d.jsxs)(n.p,{children:["El valor predeterminado es el ",(0,d.jsx)(n.code,{children:"centro"})," para iOS y Android."]})]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"okButtonText"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsxs)("td",{children:["Aceptar texto del bot\xf3n, que est\xe1 ",(0,d.jsx)(n.strong,{children:"bien"})," de forma predeterminada."]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"cancelButtonText"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsxs)("td",{children:["Cancelar texto del bot\xf3n, que se ",(0,d.jsx)(n.strong,{children:"cancela"})," de forma predeterminada."]})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"success"}),(0,d.jsx)("td",{children:"Funci\xf3n"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsx)("td",{children:"Funci\xf3n de devoluci\xf3n de llamada al \xe9xito de llamadas."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"fail"}),(0,d.jsx)("td",{children:"Funci\xf3n"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsx)("td",{children:"Funci\xf3n de devoluci\xf3n de llamada tras falla de llamada."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"complete"}),(0,d.jsx)("td",{children:"Funci\xf3n"}),(0,d.jsx)("td",{children:"No"}),(0,d.jsx)("td",{children:"Funci\xf3n de devoluci\xf3n de llamada al finalizar la llamada (para ser ejecutado en el \xe9xito de la llamada o el fracaso)."})]})]}),"\n",(0,d.jsx)(n.h3,{id:"funci\xf3n-de-devoluci\xf3n-de-llamada-de-\xe9xito",children:"Funci\xf3n de devoluci\xf3n de llamada de \xe9xito"}),"\n",(0,d.jsx)(n.p,{children:"El par\xe1metro entrante es del tipo de objeto con los siguientes atributos:"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("th",{children:"Propiedad"}),(0,d.jsx)("th",{children:"Tipo"}),(0,d.jsx)("th",{children:"Descripci\xf3n"})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"ok"}),(0,d.jsx)("td",{children:"Boolean"}),(0,d.jsx)("td",{children:"Haga clic en Aceptar para devolver verdadero; Haga clic en Cancelar para devolver falso."})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"inputValue"}),(0,d.jsx)("td",{children:"String"}),(0,d.jsx)("td",{children:"Cuando OK es verdadero, devuelve la entrada del usuario."})]})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var d=r(96540);const t={},i=d.createContext(t);function s(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);
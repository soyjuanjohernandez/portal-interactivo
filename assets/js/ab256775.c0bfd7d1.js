"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[4708],{56900:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>t});var r=n(74848),s=n(28453);const l={sidebar_position:1},c="Descripci\xf3n general",o={id:"APIReferences/JSAPI/Descrici\xf3n general",title:"Descripci\xf3n general",description:"API",source:"@site/docs/APIReferences/JSAPI/Descrici\xf3n general.md",sourceDirName:"APIReferences/JSAPI",slug:"/APIReferences/JSAPI/Descrici\xf3n general",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Descrici\xf3n general",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"JSAPI",permalink:"/portal-interactivo/docs/category/jsapi"},next:{title:"Referencia de JSAPI",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/Referencia JSAPI"}},i={},t=[{value:"API",id:"api",level:2},{value:"NOTAS",id:"notas",level:2}];function d(e){const a={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.h1,{id:"descripci\xf3n-general",children:"Descripci\xf3n general"}),"\n",(0,r.jsx)(a.h2,{id:"api",children:"API"}),"\n",(0,r.jsx)(a.p,{children:"El marco proporciona a los desarrolladores m\xe1s capacidades JSAPI y OpenAPI para que puedan lanzar servicios convenientes diversificados a los usuarios."}),"\n",(0,r.jsx)(a.h2,{id:"notas",children:"NOTAS"}),"\n",(0,r.jsx)(a.p,{children:"Las API iniciadas con My.on se utilizan para escuchar los eventos del sistema y aceptar una funci\xf3n de devoluci\xf3n de llamada como par\xe1metro. Cuando se activa el evento, llama a la funci\xf3n de devoluci\xf3n de llamada, que se transferir\xe1 a la API relacionada comenz\xf3 con My.Off para cancelar la relaci\xf3n de escucha.Si la API comenz\xf3 con My.Off se llama directamente, todas las relaciones auditivas ser\xe1n canceladas. Ejemplo"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"Page({\r\n  onLoad() {\r\n    this.callback = this.callback.bind(this);\r\n    my.onBLECharacteristicValueChange(this.callback);\r\n  },\r\n  onUnload() {\r\n    //Eliminar el oyente cuando descargue la p\xe1gina\r\n    my.offBLECharacteristicValueChange(this.callback);\r\n  },\r\n  callback(res) {\r\n    console.log(res);\r\n  },\r\n});\n"})}),"\n",(0,r.jsx)(a.p,{children:"Todas las dem\xe1s interfaces API aceptan un objeto como par\xe1metro.Es posible especificar el \xe9xito (\xe9xito de llamadas), fallar (falla de la llamada) y completar (\xe9xito de llamada o falla) CTO Recibe el resultado de la llamada de interfaz.El resultado de la devoluci\xf3n de llamada es generalmente un objeto a menos que se especifique lo contrario.Si se incluye un error/errorMessage, indica falla de la llamada. El valor del resultado despu\xe9s de la llamada es un objeto prometedor. Ejemplo"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-js",children:"my.httpRequest({\r\n  url: '/x.htm',\r\n  success(res1) {},\r\n}).then((res2) => {\r\n  // res1 === res2\r\n},(res) => {\r\n  console.log(res.error, res.errorMessage);\r\n  })\n"})})]})}function u(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>c,x:()=>o});var r=n(96540);const s={},l=r.createContext(s);function c(e){const a=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(l.Provider,{value:a},e.children)}}}]);
"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[8236],{78156:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>t,toc:()=>a});var i=r(74848),d=r(28453);const c={sidebar_position:4},l="my.getRunScene",t={id:"APIReferences/JSAPI/B\xe1sica/my.getRunScene",title:"my.getRunScene",description:"Use esta API para obtener la versi\xf3n en ejecuci\xf3n del Mini Programa actual.",source:"@site/docs/APIReferences/JSAPI/B\xe1sica/my.getRunScene.md",sourceDirName:"APIReferences/JSAPI/B\xe1sica",slug:"/APIReferences/JSAPI/B\xe1sica/my.getRunScene",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/B\xe1sica/my.getRunScene",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"my.getAppIdSync",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/B\xe1sica/my.getAppIdSync"},next:{title:"Evento en la aplicaci\xf3n",permalink:"/portal-interactivo/docs/category/evento-en-la-aplicaci\xf3n"}},s={},a=[{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Funci\xf3n de devoluci\xf3n de llamada de \xe9xito",id:"funci\xf3n-de-devoluci\xf3n-de-llamada-de-\xe9xito",level:3},{value:"Funci\xf3n de devoluci\xf3n de llamada de error",id:"funci\xf3n-de-devoluci\xf3n-de-llamada-de-error",level:3},{value:"Error Code",id:"error-code",level:2}];function o(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"mygetrunscene",children:"my.getRunScene"}),"\n",(0,i.jsx)(n.p,{children:"Use esta API para obtener la versi\xf3n en ejecuci\xf3n del Mini Programa actual."}),"\n",(0,i.jsx)(n.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"my.getRunScene({\r\n  success(result) {\r\n     my.alert({\r\n      title: 'Mini Program version',\r\n      content:`${result.envVersion}`\r\n    });\r\n  },\r\n})\n"})}),"\n",(0,i.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Propiedad"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Requerida"}),(0,i.jsx)("th",{children:"Descripci\xf3n"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Exito"}),(0,i.jsx)("td",{children:"Funci\xf3n"}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:"La funci\xf3n de devoluci\xf3n de llamada para una llamada API exitosa."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Falla"}),(0,i.jsx)("td",{children:"Funci\xf3n"}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:"La funci\xf3n de devoluci\xf3n de llamada para una llamada API fallida."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Completa"}),(0,i.jsx)("td",{children:"Funci\xf3n"}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:"La funci\xf3n de devoluci\xf3n de llamada utilizada cuando se completa la llamada API. Esta funci\xf3n siempre se ejecuta sin importar que la llamada tenga \xe9xito o falle."})]})]}),"\n",(0,i.jsx)(n.h3,{id:"funci\xf3n-de-devoluci\xf3n-de-llamada-de-\xe9xito",children:"Funci\xf3n de devoluci\xf3n de llamada de \xe9xito"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Propiedad"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"envVersion"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsxs)("td",{children:[(0,i.jsx)(n.p,{children:"The current running version of the Mini Program. Valid values are:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"develop: development version"}),"\n",(0,i.jsx)(n.li,{children:"release: release version"}),"\n"]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"funci\xf3n-de-devoluci\xf3n-de-llamada-de-error",children:"Funci\xf3n de devoluci\xf3n de llamada de error"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Propiedad"}),(0,i.jsx)("th",{children:"Tipo"}),(0,i.jsx)("th",{children:"Descripci\xf3n"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"error"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:"El c\xf3digo de error."})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"errorMessage"}),(0,i.jsx)("td",{children:"String"}),(0,i.jsx)("td",{children:"El mensaje de error."})]})]}),"\n",(0,i.jsx)(n.h2,{id:"error-code",children:"Error Code"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"C\xf3digo de error"}),(0,i.jsx)("th",{children:"Descripci\xf3n"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"3"}),(0,i.jsx)("td",{children:"Un error desconocido ha ocurrido."})]})]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>t});var i=r(96540);const d={},c=i.createContext(d);function l(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);
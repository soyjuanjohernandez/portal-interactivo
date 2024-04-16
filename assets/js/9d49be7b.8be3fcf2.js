"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[6777],{58931:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var r=a(74848),i=a(28453);const o={sidebar_position:1},s="my.hideBackHome",t={id:"APIReferences/JSAPI/UI/Barra de navegaci\xf3n/my.hideBackHome",title:"my.hideBackHome",description:"Use esta API para ocultar el bot\xf3n de inicio en la barra de navegaci\xf3n superior y la opci\xf3n de retorno de casa en la barra de pesta\xf1a en la esquina superior derecha.",source:"@site/docs/APIReferences/JSAPI/UI/Barra de navegaci\xf3n/my.hideBackHome.md",sourceDirName:"APIReferences/JSAPI/UI/Barra de navegaci\xf3n",slug:"/APIReferences/JSAPI/UI/Barra de navegaci\xf3n/my.hideBackHome",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Barra de navegaci\xf3n/my.hideBackHome",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Barra de navegaci\xf3n",permalink:"/portal-interactivo/docs/category/barra-de-navegaci\xf3n"},next:{title:"my.showNavigationBarLoading",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Barra de navegaci\xf3n/my.showNavigationBarLoading"}},c={},d=[{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"myhidebackhome",children:"my.hideBackHome"}),"\n",(0,r.jsx)(n.p,{children:"Use esta API para ocultar el bot\xf3n de inicio en la barra de navegaci\xf3n superior y la opci\xf3n de retorno de casa en la barra de pesta\xf1a en la esquina superior derecha."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"De manera predeterminada, el bot\xf3n de inicio se muestra si la p\xe1gina en la que un usuario entra al iniciar el programa MINI no es la p\xe1gina de inicio."}),"\n",(0,r.jsx)(n.li,{children:"Si la barra de pesta\xf1a est\xe1 configurada para redirigir a p\xe1ginas/\xedndice/index en el app.json, no se muestra la opci\xf3n return-home."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//.js\r\nPage({\r\n  onReady() {\r\n    if (my.canIUse('hideBackHome')) {\r\n      my.hideBackHome();\r\n    }\r\n  },\r\n});\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"//.js\r\nonLoad(){\r\n    my.reLaunch({\r\n    url:'../swiper/swiper'// Una p\xe1gina agregada que no sea la p\xe1gina de inicio\r\n  })\r\n  \r\n  setTimeout(() => {\r\n    //Ocultar el bot\xf3n de inicio despu\xe9s de 5 segundos\r\n    my.hideBackHome()\r\n  }, 5000)\r\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>t});var r=a(96540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
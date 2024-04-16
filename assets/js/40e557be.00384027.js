"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[3970],{20768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=t(74848),s=t(28453);const r={sidebar_position:20},d="CanvasContext.putImageData",i={id:"APIReferences/JSAPI/UI/Canvas/CanvasContext/CanvasContext.putImageData",title:"CanvasContext.putImageData",description:"Dibuja los datos de p\xedxeles en canvas.",source:"@site/docs/APIReferences/JSAPI/UI/Canvas/CanvasContext/CanvasContext.putImageData.md",sourceDirName:"APIReferences/JSAPI/UI/Canvas/CanvasContext",slug:"/APIReferences/JSAPI/UI/Canvas/CanvasContext/CanvasContext.putImageData",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Canvas/CanvasContext/CanvasContext.putImageData",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"docsSidebar",previous:{title:"CanvasContext.moveTo",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Canvas/CanvasContext/CanvasContext.moveTo"},next:{title:"CanvasContext.quadraticCurveTo",permalink:"/portal-interactivo/docs/APIReferences/JSAPI/UI/Canvas/CanvasContext/CanvasContext.quadraticCurveTo"}},o={},c=[{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"C\xf3digo de muestra",id:"c\xf3digo-de-muestra",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"canvascontextputimagedata",children:"CanvasContext.putImageData"}),"\n",(0,a.jsx)(n.p,{children:"Dibuja los datos de p\xedxeles en canvas."}),"\n",(0,a.jsx)(n.h2,{id:"par\xe1metros",children:"Par\xe1metros"}),"\n",(0,a.jsx)(n.p,{children:"Es tipo de objeto."}),"\n",(0,a.jsxs)("table",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{children:"Propiedad"}),(0,a.jsx)("th",{children:"Tipo"}),(0,a.jsx)("th",{children:"Requerida"}),(0,a.jsx)("th",{children:"Descripci\xf3n"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"data"}),(0,a.jsx)("td",{children:"Uint8ClampedArray"}),(0,a.jsx)("td",{children:"Si"}),(0,a.jsx)("td",{children:"Datos de p\xedxeles de imagen, es un array, y los cuatro elementos representan los datos rgba."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"x"}),(0,a.jsx)("td",{children:"Number"}),(0,a.jsx)("td",{children:"Si"}),(0,a.jsx)("td",{children:"El desplazamiento x de los datos originales en el canvas de destino."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"y"}),(0,a.jsx)("td",{children:"Number"}),(0,a.jsx)("td",{children:"Si"}),(0,a.jsx)("td",{children:"El desplazamiento x de los datos originales en el canvas de destino."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"width"}),(0,a.jsx)("td",{children:"Number"}),(0,a.jsx)("td",{children:"Si"}),(0,a.jsx)("td",{children:"El ancho de los datos originales."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"height"}),(0,a.jsx)("td",{children:"Number"}),(0,a.jsx)("td",{children:"Si"}),(0,a.jsx)("td",{children:"The height of the original data."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"success"}),(0,a.jsx)("td",{children:"Funci\xf3n"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Funci\xf3n de devoluci\xf3n de llamada al \xe9xito de llamadas."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"fail"}),(0,a.jsx)("td",{children:"Funci\xf3n"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Funci\xf3n de devoluci\xf3n de llamada tras falla de llamada."})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"complete"}),(0,a.jsx)("td",{children:"Funci\xf3n"}),(0,a.jsx)("td",{children:"No"}),(0,a.jsx)("td",{children:"Funci\xf3n de devoluci\xf3n de llamada al finalizar la llamada (para ser ejecutado en el \xe9xito de la llamada o el fracaso)."})]})]}),"\n",(0,a.jsx)(n.h2,{id:"c\xf3digo-de-muestra",children:"C\xf3digo de muestra"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// .js\r\nconst data = new Uint8ClampedArray([255, 0, 0, 1])\r\nconst ctx = my.createCanvasContext('awesomeCanvas')\r\n\r\nctx.putImageData({\r\n    x: 0,\r\n    y: 0,\r\n    width: 1,\r\n    height: 1,\r\n    data: data,\r\n    success(res) {}\r\n})\n"})})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var a=t(96540);const s={},r=a.createContext(s);function d(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);
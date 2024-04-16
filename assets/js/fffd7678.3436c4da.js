"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[4455],{60857:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var s=r(74848),t=r(28453);const a={sidebar_position:5},i="Declaraci\xf3n (Statement)",c={id:"DevelopmentResources/Framework/SJS Reference/Declaracion",title:"Declaraci\xf3n (Statement)",description:"if statement",source:"@site/docs/DevelopmentResources/Framework/SJS Reference/Declaracion.md",sourceDirName:"DevelopmentResources/Framework/SJS Reference",slug:"/DevelopmentResources/Framework/SJS Reference/Declaracion",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/SJS Reference/Declaracion",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Operadores",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/SJS Reference/Operator"},next:{title:"Tipos de datos",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/SJS Reference/Tipo de datos"}},o={},l=[{value:"if statement",id:"if-statement",level:2},{value:"switch statement",id:"switch-statement",level:2},{value:"for statement",id:"for-statement",level:2},{value:"While Statement",id:"while-statement",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"declaraci\xf3n-statement",children:"Declaraci\xf3n (Statement)"}),"\n",(0,s.jsx)(n.h2,{id:"if-statement",children:"if statement"}),"\n",(0,s.jsxs)(n.p,{children:["En el archivo .sjs, es posible usar la ",(0,s.jsx)(n.code,{children:"instrucci\xf3n if"})," en los siguientes formatos:"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"if (expression) statement"}),": cuando la expresi\xf3n es verdadera, ejecutar ",(0,s.jsx)(n.code,{children:"statement"}),".\r\n",(0,s.jsx)(n.code,{children:"if (expression) statement1"})," else ",(0,s.jsx)(n.code,{children:"statement2"}),": cuando la expresi\xf3n es verdadera, ejecutar ",(0,s.jsx)(n.code,{children:"statement1"}),". De lo contrario, ejecutar ",(0,s.jsx)(n.code,{children:"statement2"}),".\r\n",(0,s.jsx)(n.code,{children:"if ... else if ... else statementN"})," Esta ",(0,s.jsx)(n.code,{children:"instrucci\xf3n"})," permite seleccionar uno de ",(0,s.jsx)(n.code,{children:"statement1"})," ~ ",(0,s.jsx)(n.code,{children:"statementN"})," para su ejecuci\xf3n."]}),"\n",(0,s.jsx)(n.p,{children:"Sintaxis de ejemplo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// if ...\r\nif (expression) statement;\r\n\r\nif (expression)\r\n  statement;\r\n\r\nif (expression) {\r\n  Code block;\r\n}\r\n\r\n// if ... else\r\nif (expression) statement;\r\nelse statement;\r\n\r\nif (expression)\r\n  statement;\r\nelse\r\n  statement;\r\n\r\nif (expression) {\r\n  Code block;\r\n} else {\r\n  Code block;\r\n}\r\n\r\n// if ... else if ... else ...\r\nif (expression) {\r\n  Code block;\r\n} else if (expression) {\r\n  Code block;\r\n} else if (expression) {\r\n  Code block;\r\n} else {\r\n  Code block;\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"switch-statement",children:"switch statement"}),"\n",(0,s.jsx)(n.p,{children:"Sintaxis de muestra:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"switch (expression) {\r\n  case variable:\r\n    statement;\r\n  case number:\r\n    statement;\r\n    break;\r\n  case string:\r\n    statement;\r\n  default:\r\n    statement;\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se pueden omitir las ramas por ",(0,s.jsx)(n.code,{children:"default"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Detr\xe1s de la palabra clave del ",(0,s.jsx)(n.code,{children:"case"}),", use solo ",(0,s.jsx)(n.code,{children:"variable"}),", ",(0,s.jsx)(n.code,{children:"number"}),", ",(0,s.jsx)(n.code,{children:"string"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplos de c\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'var exp = 10;\r\n\r\nswitch ( exp ) {\r\ncase "10":\r\n  console.log("string 10");\r\n  break;\r\ncase 10:\r\n  console.log("number 10");\r\n  break;\r\ncase exp:\r\n  console.log("var exp");\r\n  break;\r\ndefault:\r\n  console.log("default");\r\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Salida:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"number 10\n"})}),"\n",(0,s.jsx)(n.h2,{id:"for-statement",children:"for statement"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Sample syntax:\r\n\tfor (statement; statement; statement)\r\n  statement;\r\n\r\nfor (statement; statement; statement) {\r\n  Code block;\r\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apoyo al uso de las palabras clave de descanso y continuar."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ejemplo del C\xf3digo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"for (var i = 0; i < 3; ++i) {\r\n  console.log(i);\r\n  if( i >= 1) break;\r\n} \n"})}),"\n",(0,s.jsx)(n.p,{children:"Salida:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0\r\n1\n"})}),"\n",(0,s.jsx)(n.h2,{id:"while-statement",children:"While Statement"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Sample syntax:\r\nwhile (expression)\r\n  statement;\r\n\r\nwhile (expression){\r\n  Code block;\r\n}\r\n\r\ndo {\r\n  Code block;\r\n} while (expression)\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Cuando la ",(0,s.jsx)(n.code,{children:"expresssion"})," es verdadera, haga la ejecuci\xf3n del bucle del ",(0,s.jsx)(n.code,{children:"statement"})," o el ",(0,s.jsx)(n.code,{children:"code block"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Soporta tambien el uso de las palabras clave de ",(0,s.jsx)(n.code,{children:"break"})," y ",(0,s.jsx)(n.code,{children:"continue"}),"."]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(96540);const t={},a=s.createContext(t);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
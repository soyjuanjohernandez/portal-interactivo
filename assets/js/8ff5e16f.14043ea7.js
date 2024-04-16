"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[548],{39839:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(74848),t=r(28453);const a={},i="Ciclo de vida",s={id:"DevelopmentResources/Framework/Custom Component/Create custom component/Ciclo de vida",title:"Ciclo de vida",description:"Funci\xf3n del ciclo de vida",source:"@site/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Ciclo de vida.md",sourceDirName:"DevelopmentResources/Framework/Custom Component/Create custom component",slug:"/DevelopmentResources/Framework/Custom Component/Create custom component/Ciclo de vida",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Ciclo de vida",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Mixins",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Mixins"},next:{title:"Uso de \u201cref\u201d para obtener la instancia de un componente",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Uso de ref para obtener la instancia de un componente"}},d={},c=[{value:"Funci\xf3n del ciclo de vida",id:"funci\xf3n-del-ciclo-de-vida",level:2},{value:"onInit",id:"oninit",level:3},{value:"deriveDataFromProps",id:"derivedatafromprops",level:2},{value:"C\xf3digo de ejemplo:",id:"c\xf3digo-de-ejemplo",level:3},{value:"didMount",id:"didmount",level:3},{value:"didUpdate",id:"didupdate",level:3},{value:"didUnmount",id:"didunmount",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"ciclo-de-vida",children:"Ciclo de vida"}),"\n",(0,o.jsx)(n.h2,{id:"funci\xf3n-del-ciclo-de-vida",children:"Funci\xf3n del ciclo de vida"}),"\n",(0,o.jsx)(n.p,{children:"La funci\xf3n del ciclo de vida de un componente se activa en momentos espec\xedficos por el framework. A continuaci\xf3n, se presenta una descripci\xf3n detallada de cada m\xe9todo del ciclo de vida:"}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Ciclo de Vida"}),(0,o.jsx)("th",{children:"Par\xe1metro"}),(0,o.jsx)("th",{children:"Descripci\xf3n"})]})}),(0,o.jsxs)("tbody",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"onInit"}),(0,o.jsx)("td",{children:"No"}),(0,o.jsx)("td",{children:"Se activa al crear el componente."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"deriveDataFromProps"}),(0,o.jsx)("td",{children:"nextProps"}),(0,o.jsx)("td",{children:"Se activa al crear el componente y antes de las actualizaciones."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"didMount"}),(0,o.jsx)("td",{children:"No"}),(0,o.jsx)("td",{children:"Se activa al completar la creaci\xf3n del componente."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"didUpdate"}),(0,o.jsx)("td",{children:"(prevProps, prevData)"}),(0,o.jsx)("td",{children:"Se activa al completar las actualizaciones del componente, con acceso a las props y datos anteriores."})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"didUnmount"}),(0,o.jsx)("td",{children:"No"}),(0,o.jsx)("td",{children:"Se activa cuando se elimina el componente."})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"oninit",children:"onInit"}),"\n",(0,o.jsx)(n.p,{children:"El evento onInit se activa al crear el componente. En onInit, es posible:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Acceder a atributos como this.is, this.$id y this.$page."}),"\n",(0,o.jsx)(n.li,{children:"Acceder a this.data y this.props."}),"\n",(0,o.jsx)(n.li,{children:'Acceder al atributo personalizado en los "m\xe9todos" del componente.'}),"\n",(0,o.jsx)(n.li,{children:"Llamar a this.setData y this.$spliceData para modificar datos."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Ejemplo 1:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// /components/counter/index.js\r\nComponent({\r\n  data: {\r\n    counter: 0,\r\n  },\r\n  onInit() {\r\n    this.setData({\r\n      counter: 1,\r\n      is: this.is,\r\n    });\r\n  },\r\n})\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"\x3c!-- /components/counter/index.axml --\x3e\r\n<view>{{counter}}</view>\r\n<view>{{is}}</view>\n"})}),"\n",(0,o.jsx)(n.p,{children:"Cuando el componente se renderiza en la p\xe1gina, la salida ser\xe1 la siguiente:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"1\r\n/components/counter/index\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Ejemplo 2:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// /components/counter/index.js\r\nComponent({\r\n  onInit() {\r\n\tthis.xxx = 2;\r\n\tthis.data = { counter: 0 };\r\n  },\r\n})\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"\x3c!-- /components/counter/index.axml --\x3e\r\n<view>{{counter}}</view>\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"0\n"})}),"\n",(0,o.jsx)(n.h2,{id:"derivedatafromprops",children:"deriveDataFromProps"}),"\n",(0,o.jsx)(n.p,{children:"deriveDataFromProps se activa en la creaci\xf3n y actualizaci\xf3n del componente. En deriveDataFromProps, es posible:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Acceder a atributos como this.is, this.$id y this.$page"}),"\n",(0,o.jsx)(n.li,{children:"Acceder a this.data y this.props"}),"\n",(0,o.jsx)(n.li,{children:'Acceder al atributo personalizado en los "m\xe9todos" del componente'}),"\n",(0,o.jsx)(n.li,{children:"Llamar a this.setData y this.$spliceData para modificar datos"}),"\n",(0,o.jsx)(n.li,{children:"Utilizar el par\xe1metro nextProps para obtener los par\xe1metros de props que se actualizar\xe1n"}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"c\xf3digo-de-ejemplo",children:"C\xf3digo de ejemplo:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"}),"\r\nEn este ejemplo, haz clic en el bot\xf3n + y el contador en la p\xe1gina permanece sin cambios hasta que el valor de ",(0,o.jsx)(n.code,{children:"pCounter"})," sea mayor que 5."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// /components/counter/index.js\r\nComponent({\r\n  data: {\r\n    counter: 5,\r\n  },\r\n  deriveDataFromProps(nextProps) {\r\n    if (this.data.counter < nextProps.pCounter) {\r\n      this.setData({\r\n        counter: nextProps.pCounter,\r\n      });\r\n    }\r\n  },\r\n})\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"\x3c!-- /components/counter/index.axml --\x3e\r\n<view>{{counter}}</view>\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// /pages/index/index.js\r\nPage({\r\n  data: {\r\n\tcounter: 1,\r\n  },\r\n  plus() {\r\n\tthis.setData({ counter: this.data.counter + 1 })\r\n  },\r\n})\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:'\x3c!-- /pages/index/index.axml --\x3e\r\n<counter pCounter="{{counter}}" />\r\n<button onTap="plus">+</button>\n'})}),"\n",(0,o.jsx)(n.h3,{id:"didmount",children:"didMount"}),"\n",(0,o.jsxs)(n.p,{children:["El ",(0,o.jsx)(n.code,{children:"didMount"})," es el callback despu\xe9s de la renderizaci\xf3n inicial del componente personalizado. Ahora que la p\xe1gina ha sido renderizada, generalmente se solicitan datos del servidor."]}),"\n",(0,o.jsx)(n.p,{children:"A continuaci\xf3n se muestra un ejemplo de c\xf3digo:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"Component({\r\n  data: {},\r\n  didMount() {\r\n    let that = this;\r\n    my.httpRequest({\r\n      url: 'http://httpbin.org/post',\r\n      success: function(res) {\r\n\t\tconsole.log(res);\r\n        that.setData({name: 'Ejemplo de Nombre'});               \r\n      }\r\n    });\r\n  },\r\n});\n"})}),"\n",(0,o.jsx)(n.h3,{id:"didupdate",children:"didUpdate"}),"\n",(0,o.jsxs)(n.p,{children:["El ",(0,o.jsx)(n.code,{children:"didUpdate"})," es el callback despu\xe9s de la actualizaci\xf3n del componente personalizado. Se llama cada vez que cambian los datos del componente."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"C\xf3digo de ejemplo:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"Component({\r\n  data: {},\r\n  didUpdate(prevProps, prevData) {\r\n    console.log(prevProps, this.props, prevData, this.data);\r\n  },\r\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:"Nota:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"La llamada interna de this.setData en el componente desencadena didUpdate."}),"\n",(0,o.jsx)(n.li,{children:"La llamada externa de this.setData tambi\xe9n desencadena didUpdate."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"didunmount",children:"didUnmount"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"didUnmount"})," es la devoluci\xf3n de llamada que se ejecuta despu\xe9s de la eliminaci\xf3n del componente personalizado. Se llama cada vez que la instancia del componente se descarga de la p\xe1gina."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Ejemplo de c\xf3digo:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"Component({\r\n  data: {},\r\n  didUnmount() {\r\n    console.log(this);\r\n  },\r\n});\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Component Lifecyle",src:r(92447).A+"",width:"3644",height:"2004"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},92447:(e,n,r)=>{r.d(n,{A:()=>o});const o=r.p+"assets/images/componentLifecycle-a4ea056e58e36c605bc2fee7e673cbdd.png"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>s});var o=r(96540);const t={},a=o.createContext(t);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
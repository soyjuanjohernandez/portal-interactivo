"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[7234],{63012:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var r=o(74848),t=o(28453);const s={sidebar_position:6},i="Mixins",a={id:"DevelopmentResources/Framework/Custom Component/Create custom component/Mixins",title:"Mixins",description:"El desarrollador puede implementar m\xfaltiples componentes personalizados que pueden tener una l\xf3gica com\xfan para ser procesada. El Mini Program proporciona las Mixins para cumplir con el requisito.",source:"@site/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Mixins.md",sourceDirName:"DevelopmentResources/Framework/Custom Component/Create custom component",slug:"/DevelopmentResources/Framework/Custom Component/Create custom component/Mixins",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Mixins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Plantilla y estilos",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Plantilla y estilos"},next:{title:"Ciclo de vida",permalink:"/portal-interactivo/docs/DevelopmentResources/Framework/Custom Component/Create custom component/Ciclo de vida"}},c={},p=[];function l(e){const n={code:"code",h1:"h1",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"mixins",children:"Mixins"}),"\n",(0,r.jsx)(n.p,{children:"El desarrollador puede implementar m\xfaltiples componentes personalizados que pueden tener una l\xf3gica com\xfan para ser procesada. El Mini Program proporciona las Mixins para cumplir con el requisito."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Ejemplo del C\xf3digo:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// /minxins/lifecylce.js\r\nexport default {\r\n  onInit(){}, \r\n  deriveDataFromProps(nextProps){},\r\n  didMount(){},\r\n  didUpdate(prevProps,prevData){},\r\n  didUnmount(){},\r\n};\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"// /pages/components/xx/index.js\r\nimport lifecylce from '../../minxins/lifecylce';\r\nconst initialState = {\r\n  data: {\r\n    y: 2\r\n  },\r\n};\r\nconst defaultProps = {\r\n  props: {\r\n    a: 3,\r\n  },\r\n};\r\nconst methods = {\r\n  methods: {\r\n  \tonTapHandler() {},\r\n  },\r\n}\r\nComponent({\r\n  mixins: [\r\n    lifecylce,\r\n    initialState,\r\n    defaultProps,\r\n    methods\r\n  ],\r\n  data: {\r\n    x: 1,\r\n  },\r\n});\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>a});var r=o(96540);const t={},s=r.createContext(t);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
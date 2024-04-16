"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[3516],{8835:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(74848),o=r(28453);const i={sidebar_position:5},d=void 0,s={id:"QuickStartGuide/Aprenda m\xe1s de Todo App Demo",title:"Aprenda m\xe1s de Todo App Demo",description:"Descripci\xf3n general",source:"@site/docs/QuickStartGuide/Aprenda m\xe1s de Todo App Demo.md",sourceDirName:"QuickStartGuide",slug:"/QuickStartGuide/Aprenda m\xe1s de Todo App Demo",permalink:"/portal-interactivo/docs/QuickStartGuide/Aprenda m\xe1s de Todo App Demo",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Comprendiendo la estructura de archivos del miniprogram",permalink:"/portal-interactivo/docs/QuickStartGuide/Comprendiendo la estructura de archivos del miniprogram"},next:{title:"Publicar un miniprogram",permalink:"/portal-interactivo/docs/QuickStartGuide/Publicar un miniprogram"}},l={},c=[{value:"Descripci\xf3n general",id:"descripci\xf3n-general",level:2},{value:"configuraci\xf3n global",id:"configuraci\xf3n-global",level:2},{value:"P\xe1gina Mini Program",id:"p\xe1gina-mini-program",level:2},{value:"P\xe1gina Todo List",id:"p\xe1gina-todo-list",level:2},{value:"Agregar p\xe1gina Todo",id:"agregar-p\xe1gina-todo",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"descripci\xf3n-general",children:"Descripci\xf3n general"}),"\n",(0,a.jsx)(n.p,{children:"Presentaremos el desarrollo de un mini programa en detalle a trav\xe9s de la demostraci\xf3n de la aplicaci\xf3n TODO."}),"\n",(0,a.jsx)(n.h2,{id:"configuraci\xf3n-global",children:"configuraci\xf3n global"}),"\n",(0,a.jsxs)(n.p,{children:["El App.js es el punto de entrada a un mini programa, puede configurar el ciclo de vida de un mini programa, declarar variables globales y realizar la inicializaci\xf3n de la aplicaci\xf3n en este archivo. El siguiente fragmento de c\xf3digo muestra un ejemplo de llamadas a las API para el almacenamiento y obtener informaci\xf3n del usuario. Para obtener m\xe1s API, consulte el documento ",(0,a.jsx)(n.a,{href:"/",children:"API"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Llame a la API de almacenamiento para obtener los datos almacenados\r\nconst todos = my.getStorageSync({key:'todos'}).data || [\r\n    { text: 'Learning Javascript', completed: true },\r\n    { text: 'Learning ES2016', completed: true },\r\n    { text: 'Learning Mini Program ', completed: false },\r\n  ];\r\n\r\nApp({\r\n  //Declarar datos globales\r\n  todos,\r\n\r\n  userInfo: null,\r\n\r\n  // Declarar el m\xe9todo global\r\n  setTodos(todos) {\r\n    this.todos = todos;\r\n    // API de almacenamiento de llamadas para almacenar datos\r\n    my.setStorageSync({key:'todos', data:todos});\r\n  },\r\n\r\n  getUserInfo() {\r\n    return new Promise((resolve, reject) => {\r\n      if (this.userInfo) resolve(this.userInfo);\r\n      // Llame a la API de autorizaci\xf3n del usuario para obtener informaci\xf3n del usuario\r\n      my.getAuthCode({\r\n        success: (authcode) => {\r\n          console.info(authcode);\r\n\r\n          my.getAuthUserInfo({\r\n            scopes: ['auth_user'],\r\n            success: (res) => {\r\n              this.userInfo = res;\r\n              resolve(this.userInfo);\r\n            },\r\n            fail: () => { \r\n              reject({});\r\n            },\r\n          });\r\n        },\r\n        fail: () => { \r\n          reject({});\r\n        },\r\n      });\r\n    });\r\n  },\r\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)("code",{children:"App.json"})," es el archivo de configuraci\xf3n global del Mini Program, donde es posible configurar el t\xedtulo general de la barra de navegaci\xf3n, el color de fondo de la ventana y otras configuraciones del programa MINI.Para obtener m\xe1s configuraciones, consulte la ",(0,a.jsx)(n.a,{href:"/",children:"documentaci\xf3n de configuraci\xf3n global"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\r\n    "pages": [\r\n        "pages/todos/todos",    \r\n    "pages/add-todo/add-todo"\r\n  ],\r\n  "window": {\r\n      "defaultTitle": "Todo App"\r\n  }\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)("code",{children:"App.acss"})," es el estilo global de un mini programa. Los selectores definidos en la App.acss se pueden aplicar a todas las p\xe1ginas del Proyecto del Mini Program."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"page {\r\n  flex: 1;\r\n  display: flex;\r\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"El selector de p\xe1ginas es un selector especial admitido por el framework, que funciona con el contenedor de nodo ra\xedz de p\xe1gina disponible en el framework."}),"\n",(0,a.jsx)(n.h2,{id:"p\xe1gina-mini-program",children:"P\xe1gina Mini Program"}),"\n",(0,a.jsxs)(n.p,{children:["Tenemos dos p\xe1ginas en este proyecto de demostraci\xf3n: Todo List page y Add Todo page, ambas residen en el directorio de p\xe1ginas. Todas las rutas de p\xe1gina del Mini Program deben declararse en la ",(0,a.jsx)("code",{children:"App.json"}),", y una ruta de p\xe1gina comienza desde el directorio ra\xedz del proyecto y debe omitir la extensi\xf3n del nombre de archivo. La primera ruta declarada ",(0,a.jsx)("code",{children:"App.json"})," es la p\xe1gina de inicio de un mini programa."]}),"\n",(0,a.jsxs)(n.p,{children:["Cada ",(0,a.jsx)(n.a,{href:"/",children:"p\xe1gina de mini program"})," consta de cuatro tipos de archivos en el mismo directorio:"]}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["JS archivo de secuencia de comandos l\xf3gicos con la extensi\xf3n ",(0,a.jsx)("code",{children:".js"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Archivo de configuraci\xf3n con la extensi\xf3n ",(0,a.jsx)("code",{children:".json"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Archivo de estilo con la extensi\xf3n ",(0,a.jsx)("code",{children:".acss"})]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Archivo de dise\xf1o de UI con la extensi\xf3n ",(0,a.jsx)("code",{children:".axml"}),"."]})})]}),"\n",(0,a.jsx)(n.h2,{id:"p\xe1gina-todo-list",children:"P\xe1gina Todo List"}),"\n",(0,a.jsx)(n.p,{children:"El todos.axml es el archivo de plantilla de estructura de la p\xe1gina:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<view class="page-todos">\r\n  <view class="user">\r\n    <image class="avatar" src="{{user.avatar}}" background-size="cover"></image>\r\n    <view class="nickname">{{user.nickName}}\'s Todo List</view>\r\n  </view>\r\n  <view class="todo-items">\r\n    <checkbox-group class="todo-items-group" onChange="onTodoChanged">\r\n      <label class="todo-item" a:for="{{todos}}">\r\n        <checkbox value="{{item.text}}" checked="{{item.completed}}" />\r\n        <text class="{{item.completed ? \'checked\' : \'\'}}">{{item.text}}</text>\r\n      </label>\r\n    </checkbox-group>\r\n    <view class="todo-item">\r\n      <button onTap="addTodo">Add Todo</button>\r\n    </view>\r\n  </view>\r\n</view>\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Su dise\xf1o de UI tiene componentes de interfaz de usuario incorporados como ",(0,a.jsx)(n.code,{children:"<view/>"}),",",(0,a.jsx)(n.code,{children:"<image/>"}),",",(0,a.jsx)(n.code,{children:"<text/>"}),",",(0,a.jsx)(n.code,{children:"<button/>"}),",",(0,a.jsx)(n.code,{children:"label/>"})," y ",(0,a.jsx)(n.code,{children:"<checkbox/>"})," Para construir la estructura de la p\xe1gina, y utilizamos un: para el atributo para realizar la representaci\xf3n de la lista que itera la lista de TODOS y representa una etiqueta para cada datos de TODO respectivamente."]}),"\n",(0,a.jsxs)(n.p,{children:["Para datos vinculantes, consulte el documento de ",(0,a.jsx)(n.a,{href:"/",children:"enlace de datos"}),". Para un evento vinculante, consulte el documento de ",(0,a.jsx)(n.a,{href:"/",children:"manejo de eventos"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.code,{children:"todos.js"})," es el archivo de script l\xf3gico de la p\xe1gina:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"// Obtener una instancia de aplicaci\xf3n global\r\nconst app = getApp();\r\n\r\nPage({\r\n  data: {},\r\n  onLoad() {\r\n    //Obtener informaci\xf3n de usuario y renderizar\r\n    app.getUserInfo().then(\r\n      user => this.setData({\r\n        user,\r\n      }),\r\n    );\r\n  },\r\n  // Escuche el ciclo de vida\r\n  onShow() {\r\n    // Renderizar datos globales a la p\xe1gina actual\r\n    this.setData({ todos: app.todos });\r\n  },\r\n  // Controlador de eventos\r\n  onTodoChanged(e) {\r\n    // Modificar los datos globales y volver a renderizar\r\n    const checkedTodos = e.detail.value;\r\n    app.setTodos(app.todos.map(todo => ({\r\n      ...todo,\r\n      completed: checkedTodos.indexOf(todo.text) > -1,\r\n    })));\r\n    this.setData({ todos: app.todos });\r\n  },\r\n  addTodo() {\r\n    // Llame a la API de salto de la p\xe1gina para el salto de la p\xe1gina\r\n    my.navigateTo({ url: '../add-todo/add-todo' });\r\n  },\r\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:"En este archivo tenemos:"}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Escuche y procese la funci\xf3n del ciclo de vida de la p\xe1gina (",(0,a.jsx)(n.code,{children:"onHide"}),", ",(0,a.jsx)(n.code,{children:"onShow"}),", ",(0,a.jsx)(n.code,{children:"onLoad"}),", ",(0,a.jsx)(n.code,{children:"onUnload"}),", ",(0,a.jsx)(n.code,{children:"onReady"}),")."]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Obtenga una instancia de la aplicaci\xf3n Mini del programa y otras instancias de p\xe1gina (",(0,a.jsx)(n.code,{children:"getApp"}),", ",(0,a.jsx)(n.code,{children:"getCurrentPages"}),")."]})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.p,{children:"Declarar y procesar datos"})}),(0,a.jsx)("li",{children:(0,a.jsx)(n.p,{children:"Responder a los eventos de interacci\xf3n de la p\xe1gina, llamados APIs, etc."})}),(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Atenci\xf3n aqu\xed: el ",(0,a.jsx)(n.code,{children:"app.todos"})," El objeto es la variable global definida en ",(0,a.jsx)(n.code,{children:"app.js"}),"."]})})]}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.code,{children:"todos.acss"})," es el archivo de estilo de la p\xe1gina:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-css",children:".page-todos {\r\n  flex: 1;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.user {\r\n  display: flex;\r\n  padding: 30px 30px 0 30px;\r\n}\r\n\r\n.avatar {\r\n  width: 128rpx;\r\n  height: 128rpx;\r\n  margin-right: 40rpx;\r\n  border-radius: 50%;\r\n}\r\n\r\n.nickname {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  font-size: 40rpx;\r\n}\r\n\r\n.todo-items {\r\n  padding: 80rpx;\r\n}\r\n\r\n.todo-items-group {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.checked {\r\n  color: #d9d9d9;\r\n  text-decoration: line-through;\r\n}\r\n\r\n.todo-item {\r\n  margin-bottom: 15px;\r\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["La ",(0,a.jsx)("code",{children:"acss"})," El archivo de estilo no es obligatorio. Ver el documento ",(0,a.jsx)(n.a,{href:"/",children:"Style"}),"  para la sintaxis ",(0,a.jsx)("code",{children:"acss"}),". Cuando una p\xe1gina tiene la hoja de estilo, la regla de estilo en la hoja de estilo de la p\xe1gina anula las reglas de estilo en el ",(0,a.jsx)("code",{children:"app.acss"}),". Si la hoja de estilo no se especifica para la p\xe1gina, tambi\xe9n es posible usar directamente las reglas de estilo especificadas en ",(0,a.jsx)("code",{children:"app.acss"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)("code",{children:"todos.json"})," es el archivo de configuraci\xf3n de la p\xe1gina. Aqu\xed est\xe1 un archivo vac\xedo."]}),"\n",(0,a.jsxs)(n.p,{children:["El archivo de configuraci\xf3n no es obligatorio.Cuando una p\xe1gina tiene el archivo de configuraci\xf3n, el elemento de configuraci\xf3n sobrescribe los mismos elementos de configuraci\xf3n en la ventana de ",(0,a.jsx)("code",{children:"app.json"}),". Si no se especifica ning\xfan archivo de configuraci\xf3n de p\xe1gina, la p\xe1gina utiliza directamente la configuraci\xf3n predeterminada en ",(0,a.jsx)("code",{children:"app.json"}),". Por lo tanto, el t\xedtulo de la p\xe1gina de \xedndice es la aplicaci\xf3n TODO especificada para ",(0,a.jsx)("code",{children:"app.json"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"agregar-p\xe1gina-todo",children:"Agregar p\xe1gina Todo"}),"\n",(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)("code",{children:"add-todo.axml"})," es el archivo de estructura de la p\xe1gina:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'<view class="page-add-todo">\r\n  <view class="add-todo">\r\n    <input \r\n      class="add-todo-input" \r\n      placeholder="What needs to be done?"\r\n      onBlur="onBlur"\r\n      value="{{inputValue}}"\r\n    />\r\n  </view>\r\n  <view class="todo-footer">\r\n    <add-button text="Add Todo" onClickMe="add" ></add-button>\r\n  </view>\r\n</view>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Hay dos funciones principales en la p\xe1gina:"}),"\n",(0,a.jsxs)("ol",{children:[(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.code,{children:"<input/>"})," component to accept user input."]})}),(0,a.jsx)("li",{children:(0,a.jsxs)(n.p,{children:["El ",(0,a.jsx)(n.code,{children:"<add-button>"})," es un ",(0,a.jsx)(n.a,{href:"/",children:"componente personalizado"}),". Podemos envolver todos los c\xf3digos de alguna funci\xf3n en un componente personalizado para una f\xe1cil reutilizaci\xf3n en otro lugar."]})})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("code",{children:"add-todo.js"})," C\xf3digo l\xf3gico de la p\xe1gina:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const app = getApp();\r\n\r\nPage({\r\n  data: {\r\n    inputValue: '',\r\n  },\r\n  onBlur(e) {\r\n    this.setData({\r\n      inputValue: e.detail.value,\r\n    });\r\n  },\r\n  add() {\r\n    app.todos = app.todos.concat([\r\n      {\r\n        text: this.data.inputValue,\r\n        compeleted: false,\r\n      },\r\n    ]);\r\n    my.navigateBack();\r\n  },\r\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)("code",{children:"add-todo.acss"})," es consistente con el uso de ",(0,a.jsx)("code",{children:"todos.acss"})," y no se describir\xe1 nuevamente."]}),"\n",(0,a.jsxs)(n.p,{children:["Dado que el ",(0,a.jsx)("code",{children:"add-todo.json"})," se refiere a un componente personalizado, debe declararse en json, de lo contrario se informar\xe1 el error:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'"usingComponents": {\r\n    "add-button": "/components/add-button/add-button"\r\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Aprenderemos c\xf3mo publicar un mini programa en el ",(0,a.jsx)(n.a,{href:"/",children:"pr\xf3ximo tutorial"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(t,{...e})}):t(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>s});var a=r(96540);const o={},i=a.createContext(o);function d(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);
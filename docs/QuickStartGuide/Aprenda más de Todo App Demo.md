---
sidebar_position: 5
---

## Descripción general

Presentaremos el desarrollo de un mini programa en detalle a través de la demostración de la aplicación TODO.


## configuración global

El App.js es el punto de entrada a un mini programa, puede configurar el ciclo de vida de un mini programa, declarar variables globales y realizar la inicialización de la aplicación en este archivo. El siguiente fragmento de código muestra un ejemplo de llamadas a las API para el almacenamiento y obtener información del usuario. Para obtener más API, consulte el documento [API](/).

```js
// Llame a la API de almacenamiento para obtener los datos almacenados
const todos = my.getStorageSync({key:'todos'}).data || [
    { text: 'Learning Javascript', completed: true },
    { text: 'Learning ES2016', completed: true },
    { text: 'Learning Mini Program ', completed: false },
  ];

App({
  //Declarar datos globales
  todos,

  userInfo: null,

  // Declarar el método global
  setTodos(todos) {
    this.todos = todos;
    // API de almacenamiento de llamadas para almacenar datos
    my.setStorageSync({key:'todos', data:todos});
  },

  getUserInfo() {
    return new Promise((resolve, reject) => {
      if (this.userInfo) resolve(this.userInfo);
      // Llame a la API de autorización del usuario para obtener información del usuario
      my.getAuthCode({
        success: (authcode) => {
          console.info(authcode);

          my.getAuthUserInfo({
            scopes: ['auth_user'],
            success: (res) => {
              this.userInfo = res;
              resolve(this.userInfo);
            },
            fail: () => { 
              reject({});
            },
          });
        },
        fail: () => { 
          reject({});
        },
      });
    });
  },
});
```


El <code>App.json</code> es el archivo de configuración global del Mini Program, donde es posible configurar el título general de la barra de navegación, el color de fondo de la ventana y otras configuraciones del programa MINI.Para obtener más configuraciones, consulte la [documentación de configuración global](/).

```js
{
    "pages": [
        "pages/todos/todos",    
    "pages/add-todo/add-todo"
  ],
  "window": {
      "defaultTitle": "Todo App"
  }
}
```

El <code>App.acss</code> es el estilo global de un mini programa. Los selectores definidos en la App.acss se pueden aplicar a todas las páginas del Proyecto del Mini Program.

```js
page {
  flex: 1;
  display: flex;
}
```

El selector de páginas es un selector especial admitido por el framework, que funciona con el contenedor de nodo raíz de página disponible en el framework.


## Página Mini Program 
Tenemos dos páginas en este proyecto de demostración: Todo List page y Add Todo page, ambas residen en el directorio de páginas. Todas las rutas de página del Mini Program deben declararse en la <code>App.json</code>, y una ruta de página comienza desde el directorio raíz del proyecto y debe omitir la extensión del nombre de archivo. La primera ruta declarada <code>App.json</code> es la página de inicio de un mini programa.

Cada [página de mini program](/) consta de cuatro tipos de archivos en el mismo directorio:

<ul>
  <li>
    JS archivo de secuencia de comandos lógicos con la extensión <code>.js</code>
  </li>
  <li>
    Archivo de configuración con la extensión <code>.json</code>
  </li>
  <li>
    Archivo de estilo con la extensión <code>.acss</code>
  </li>
  <li>
    Archivo de diseño de UI con la extensión <code>.axml</code>.
  </li>
</ul>


## Página Todo List 
El todos.axml es el archivo de plantilla de estructura de la página:

```xml
<view class="page-todos">
  <view class="user">
    <image class="avatar" src="{{user.avatar}}" background-size="cover"></image>
    <view class="nickname">{{user.nickName}}'s Todo List</view>
  </view>
  <view class="todo-items">
    <checkbox-group class="todo-items-group" onChange="onTodoChanged">
      <label class="todo-item" a:for="{{todos}}">
        <checkbox value="{{item.text}}" checked="{{item.completed}}" />
        <text class="{{item.completed ? 'checked' : ''}}">{{item.text}}</text>
      </label>
    </checkbox-group>
    <view class="todo-item">
      <button onTap="addTodo">Add Todo</button>
    </view>
  </view>
</view>
```

Su diseño de UI tiene componentes de interfaz de usuario incorporados como ```<view/>```,```<image/>```,```<text/>```,```<button/>```,```label/>``` y ```<checkbox/>``` Para construir la estructura de la página, y utilizamos un: para el atributo para realizar la representación de la lista que itera la lista de TODOS y representa una etiqueta para cada datos de TODO respectivamente.

Para datos vinculantes, consulte el documento de [enlace de datos](/). Para un evento vinculante, consulte el documento de [manejo de eventos](/).

El ```todos.js``` es el archivo de script lógico de la página:

```js
// Obtener una instancia de aplicación global
const app = getApp();

Page({
  data: {},
  onLoad() {
    //Obtener información de usuario y renderizar
    app.getUserInfo().then(
      user => this.setData({
        user,
      }),
    );
  },
  // Escuche el ciclo de vida
  onShow() {
    // Renderizar datos globales a la página actual
    this.setData({ todos: app.todos });
  },
  // Controlador de eventos
  onTodoChanged(e) {
    // Modificar los datos globales y volver a renderizar
    const checkedTodos = e.detail.value;
    app.setTodos(app.todos.map(todo => ({
      ...todo,
      completed: checkedTodos.indexOf(todo.text) > -1,
    })));
    this.setData({ todos: app.todos });
  },
  addTodo() {
    // Llame a la API de salto de la página para el salto de la página
    my.navigateTo({ url: '../add-todo/add-todo' });
  },
});
```

En este archivo tenemos:

<ul>
  <li>
Escuche y procese la función del ciclo de vida de la página (```onHide```, ```onShow```, ```onLoad```, ```onUnload```, ```onReady```).
  </li>
  <li>
Obtenga una instancia de la aplicación Mini del programa y otras instancias de página (```getApp```, ```getCurrentPages```).
  </li>
  <li>
Declarar y procesar datos
  </li>
  <li>
Responder a los eventos de interacción de la página, llamados APIs, etc.
  </li>
  <li>
Atención aquí: el ```app.todos``` El objeto es la variable global definida en ```app.js```.
  </li>
</ul>


El ```todos.acss``` es el archivo de estilo de la página:

```css
.page-todos {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.user {
  display: flex;
  padding: 30px 30px 0 30px;
}

.avatar {
  width: 128rpx;
  height: 128rpx;
  margin-right: 40rpx;
  border-radius: 50%;
}

.nickname {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 40rpx;
}

.todo-items {
  padding: 80rpx;
}

.todo-items-group {
  display: flex;
  flex-direction: column;
}

.checked {
  color: #d9d9d9;
  text-decoration: line-through;
}

.todo-item {
  margin-bottom: 15px;
}
```

La <code>acss</code> El archivo de estilo no es obligatorio. Ver el documento [Style](/)  para la sintaxis <code>acss</code>. Cuando una página tiene la hoja de estilo, la regla de estilo en la hoja de estilo de la página anula las reglas de estilo en el <code>app.acss</code>. Si la hoja de estilo no se especifica para la página, también es posible usar directamente las reglas de estilo especificadas en <code>app.acss</code>.

El <code>todos.json</code> es el archivo de configuración de la página. Aquí está un archivo vacío.

El archivo de configuración no es obligatorio.Cuando una página tiene el archivo de configuración, el elemento de configuración sobrescribe los mismos elementos de configuración en la ventana de <code>app.json</code>. Si no se especifica ningún archivo de configuración de página, la página utiliza directamente la configuración predeterminada en <code>app.json</code>. Por lo tanto, el título de la página de índice es la aplicación TODO especificada para <code>app.json</code>.


## Agregar página Todo

El <code>add-todo.axml</code> es el archivo de estructura de la página:

```xml
<view class="page-add-todo">
  <view class="add-todo">
    <input 
      class="add-todo-input" 
      placeholder="What needs to be done?"
      onBlur="onBlur"
      value="{{inputValue}}"
    />
  </view>
  <view class="todo-footer">
    <add-button text="Add Todo" onClickMe="add" ></add-button>
  </view>
</view>
```

Hay dos funciones principales en la página:

<ol>
  <li>
Use the ```<input/>``` component to accept user input.
  </li>
  <li>
El ```<add-button>``` es un [componente personalizado](/). Podemos envolver todos los códigos de alguna función en un componente personalizado para una fácil reutilización en otro lugar.
  </li>
  
</ol>

<code>add-todo.js</code> Código lógico de la página:


```js
const app = getApp();

Page({
  data: {
    inputValue: '',
  },
  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },
  add() {
    app.todos = app.todos.concat([
      {
        text: this.data.inputValue,
        compeleted: false,
      },
    ]);
    my.navigateBack();
  },
});
```

<code>add-todo.acss</code> es consistente con el uso de <code>todos.acss</code> y no se describirá nuevamente.

Dado que el <code>add-todo.json</code> se refiere a un componente personalizado, debe declararse en json, de lo contrario se informará el error:

```js
"usingComponents": {
    "add-button": "/components/add-button/add-button"
}
```

Aprenderemos cómo publicar un mini programa en el [próximo tutorial](/).
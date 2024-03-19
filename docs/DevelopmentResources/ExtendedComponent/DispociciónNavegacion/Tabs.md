---
sidebar_position: 6
---

# Tabs

Las pestañas permiten al usuario cambiar entre diferentes vistas.

## Tabs

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Por defecto</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>className	</td>
        <td>String</td>
        <td></td>
        <td>No</td>
        <td>Clase personalizada.</td>
    </tr>
    <tr>
        <td>activeCls	</td>
        <td>String			</td>
        <td></td>
        <td></td>
        <td>Clase personalizada para activar TabBar.</td>
    </tr>
    <tr>
        <td>tabs	</td>
        <td>Array</td>
        <td></td>
        <td>Yes</td>
        <td>Datos de pestaña, incluido el título de pestaña.El tipo de insignia badgetype incluye puntos y texto, y no se muestra si no se establece el badgetype.El texto de la insignia badgetext en vigencia cuando el tipo de badgetype es texto.</td>
    </tr>
    <tr>
        <td>activeTab	</td>
        <td>Number	</td>
        <td></td>
        <td>Yes	</td>
        <td>Índice de la pestaña actualmente activa.</td>
    </tr>
    <tr>
        <td>showPlus	</td>
        <td>Boolean	</td>
        <td>false	</td>
        <td>No</td>
        <td>Muestre el icono "+" o no.</td>
    </tr>
    <tr>
        <td>onPlusClick	</td>
        <td>() => {}</td>
        <td></td>
        <td>No</td>
        <td>Devolución de llamada cuando se hace clic en el icono "+".</td>
    </tr>
    <tr>
        <td>onTabClick	</td>
        <td>(index: Number) => void	</td>
        <td></td>
        <td>No</td>
        <td>Devolución de llamada cuando se hace clic en la pestaña.</td>
    </tr>
    <tr>
        <td>onChange	</td>
        <td>(index: Number) => void</td>
        <td></td>
        <td>No</td>
        <td>Activado cuando cambia la pestaña.</td>
    </tr>
    <tr>
        <td>swipeable	</td>
        <td>Boolean	</td>
        <td>true	</td>
        <td>No</td>
        <td>Si es posible cambiar el contenido deslizando.</td>
    </tr>
    <tr>
        <td>duration	</td>
        <td>Number	</td>
        <td>500(ms)	</td>
        <td>No</td>
        <td>Duración de la animación de limpieza en MS, cuando el deslizable es verdadero.</td>
    </tr>
    <tr>
        <td>tabBarBackgroundColor	</td>
        <td>String</td>
        <td></td>
        <td>No</td>
        <td>Color de fondo de Tabbar.</td>
    </tr>
    <tr>
        <td>tabBarActiveTextColor	</td>
        <td>String		</td>
        <td></td>
        <td>No</td>
        <td>Color de texto de pestaña activa del TabBar.</td>
    </tr>
    <tr>
        <td>tabBarInactiveTextColor	</td>
        <td>String		</td>
        <td></td>
        <td>No</td>
        <td>Color de texto de pestaña inactiva del Tabbar.</td>
    </tr>
    <tr>
        <td>tabBarUnderlineColor	</td>
        <td>String		</td>
        <td></td>
        <td>No</td>
        <td>Tabbar subraye el color.</td>
    </tr>
    <tr>
        <td>tabBarCls	</td>
        <td>String		</td>
        <td></td>
        <td>No</td>
        <td>Clase de estilo personalizado Tabbar.</td>
    </tr>
</table>




## Tab-content

Ver contenido


<table>
    <tr>
        <th>Propiedad	</th>
        <th>Descripción</th>
        <th>Tipo</th>
    </tr>
    <tr>
        <td>index	</td>
        <td>Índice único del elemento de la lista.</td>
        <td>String</td>
    </tr>
</table>

## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "tabs": "mini-antui/es/tabs/index",
    "tab-content": "mini-antui/es/tabs/tab-content/index"
  }
}
```

```xml
<view>
  <tabs
    tabs="{{tabs}}"
    showPlus="{{true}}"
    onTabClick="handleTabClick"
    onChange="handleTabChange"
    onPlusClick="handlePlusClick"
    activeTab="{{activeTab}}"
  >
    <block a:for="{{tabs}}">
      <tab-content key="{{index}}">
        <view class="tab-content">content of {{item.title}}</view>
      </tab-content>
    </block>
  </tabs>
</view>
```

```js
Page({
  data: {
    tabs: [
      {
        title: 'Option',
        badgeType: 'text',
        badgeText: '6',
      },
      {
        title: 'Option two',
        badgeType: 'dot',
      },
      { title: '3 Tab' },
      { title: '4 Tab' },
      { title: '5 Tab' },
    ],
    activeTab: 2,
  },
  handleTabClick({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handleTabChange({ index }) {
    this.setData({
      activeTab: index,
    });
  },
  handlePlusClick() {
    my.alert({
      content: 'plus clicked',
    });
  },
});
```

```css
.tab-content {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}
```























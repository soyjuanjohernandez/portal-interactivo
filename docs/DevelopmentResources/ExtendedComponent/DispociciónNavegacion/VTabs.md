---
sidebar_position: 7
---


# VTabs

Las pestañas permiten al usuario cambiar entre diferentes vistas.

## Vtabs

<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>activeTab	</td>
        <td>Índice de la pestaña actualmente activa.</td>
        <td>Number	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>tabs	</td>
        <td>Los datos de pestañas, incluido el título de pestaña, el valor único de anclaje de la lista, así como el tipo de insignia Badgetype, que incluye puntos y texto, y no se muestra si el badgetype no está configurado.El texto de la insignia badgetext entra en vigencia cuando Badgetype es texto.</td>
        <td>Array	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>swipeable	</td>
        <td>Un indicador de si la pestaña se puede deslizar o no.	</td>
        <td>Boolean	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>tabBarActiveBgColor	</td>
        <td>Color de fondo Tabbar en estado activo.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>tabBarInactiveBgColor	</td>
        <td>Tabbar Color de fondo en estado inactivo.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>tabBarActiveTextColor	</td>
        <td>Color de texto de pestaña activa del TabBar.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>tabBarInactiveTextColor	</td>
        <td>Color de texto de pestaña inactiva del Tabbar.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>tabBarlineColor	</td>
        <td>Color lateral de Tabbar.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>onTabClick	</td>
        <td>Devolución de llamada cuando se hace clic en la pestaña.	</td>
        <td>(index: Number) => void	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>onChange	</td>
        <td>Disparar en el cambio de contenido VTAB.	</td>
        <td>(index: Number) => void	</td>
        <td>No</td>
    </tr>
</table>


## Vtab-content
Ver contenido

<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>anchor	</td>
        <td>Valor de anclaje único de la lista.	</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
</table>



## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "vtabs": "mini-antui/es/vtabs/index",
    "vtab-content": "mini-antui/es/vtabs/vtab-content/index"
  }
}
```
```xml
<view>
  <vtabs
    tabs="{{tabs}}"
    onTabClick="handleChange"
    onChange="onChange"
    activeTab="{{activeTab}}"
  >
    <block a:for="{{tabs}}">
      <vtab-content anchor="{{item.anchor}}">
        <view style="border: 1px solid #eee; height: 800px; box-sizing: border-box">
          <text>content of {{item.title}}</text>
        </view>
      </vtab-content>
    </block>
  </vtabs>
</view>
```
```js
Page({
  data: {
    activeTab: 2,
    tabs: [
      { title: 'Option two', anchor: 'a', badgeType: 'dot' },
      { title: 'Option', anchor: 'b', badgeType: 'text', badgeText: 'New' },
      { title: 'Option three', anchor: 'c' },
      { title: 'Option four', anchor: 'd' },
      { title: 'Option five', anchor: 'e' },
      { title: 'Option six', anchor: 'f' },
    ],
  },
  handleChange(index) {
    this.setData({
      activeTab: index,
    });
  },
  onChange(index) {
    console.log('onChange', index);
    this.setData({
      activeTab: index,
    });
  },
});
```









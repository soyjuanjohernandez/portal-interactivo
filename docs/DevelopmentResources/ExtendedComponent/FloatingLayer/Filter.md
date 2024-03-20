---
sidebar_position: 2
---

# Filter

Use como filtro de pestaña.

## Filter

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Por defecto</th>
    <th>Requerida</th>
  </tr>
  <tr>
    <td>show	</td>
    <td>Mostrar o no, opcional, mostrar escondite.</td>
    <td>String	</td>
    <td>hide	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>max	</td>
    <td>Opciones máximas, 1 para opción única.	</td>
    <td>Number	</td>
    <td>10000	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>onChange	</td>
    <td>Envíe la devolución de llamada de selección en la opción múltiple.</td>
    <td>(e: Object) => void	</td>
    <td></td>
    <td>No</td>
  </tr>
</table>

## Filter-item

<table>
  <tr>
    <th>Property</th>
    <th>Description</th>
    <th>Type</th>
    <th>Default</th>
    <th>Required</th>
  </tr>
  <tr>
    <td>className	</td>
    <td>Estilo personalizado.</td>
    <td>String	</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td>value	</td>
    <td>Valor.	</td>
    <td>String</td>
    <td></td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>id	</td>
    <td>Identificador personalizado.</td>
    <td>String	</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td>selected	</td>
    <td>Seleccionado por defecto.	</td>
    <td>Boolean	</td>
    <td>false	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>onChange	</td>
    <td>Envíe la devolución de llamada de selección en la elección única.</td>
    <td>(e:  Object) => void</td>
    <td></td>
    <td>No</td>
  </tr>
</table>

## Example
```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "filter": "mini-antui/es/filter/index",
    "filter-item": "mini-antui/es/filter/filter-item/index"
  }
}
```
```xml
<filter show="{{show}}" max="{{5}}" onChange="handleCallBack">
  <block a:for="{{items}}">
    <filter-item value="{{item.value}}" id="{{item.id}}" selected="{{item.selected}}"/>
  </block>
</filter>
```
```js
Page({
  data: {
    show: true,
    items: [
      { id: 1, value: 'Clothes', selected: true },
      { id: 1, value: 'Cupboard' },
      { id: 1, value: 'Hanger' },
      { id: 3, value: 'Digital' },
      { id: 4, value: 'Door' },
      { id: 5, value: 'Chair' },
      { id: 7, value: 'Monitor' },
      { id: 6, value: 'Game' },
      { id: 8, value: 'Food' },
    ]
  },
  handleCallBack(data) {
    my.alert({
      content: data
    });
  },
  toggleFilter() {
    this.setData({
      show: !this.data.show,
    });
  }
});
 ``
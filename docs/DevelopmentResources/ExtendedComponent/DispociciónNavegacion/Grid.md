---
sidebar_position: 10
---

# Grid

Grid.

<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Por defecto</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>list	</td>
        <td>Datos de la cuadrícula.	</td>
        <td>`Array<icon, text>`	</td>
        <td>[]	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>onGridItemClick	</td>
        <td>Devolución de llamada cuando se hace clic en la cuadrícula.	</td>
        <td>(index: Number) => void		</td>
        <td>No</td>
        <td></td>
    </tr>
    <tr>
        <td>columnNum	</td>
        <td>Número de columnas que se muestran por fila</td>
        <td>2, 3, 4, 5	</td>
        <td>3	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>circular	</td>
        <td>Circular o no, entra en vigencia cuando el valor del nombre de columna es 4.	</td>
        <td>Boolean	</td>
        <td>false	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>hasLine	</td>
        <td>Tener límite o no.	</td>
        <td>Boolean	</td>
        <td>true	</td>
        <td>No</td>
    </tr>
</table>



## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "grid": "mini-antui/es/grid/index"
  }
}
```
```xml
<grid onGridItemClick="onItemClick" columnNum="{{3}}" list="{{list3}}" />
```
```js
Page({
  data: {
    list3: [
      {
        icon: 'https://img.example.com/example1.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example2.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example3.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example4.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example5.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example6.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example7.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example8.png',
        text: 'Title',
        desc: 'text',
      },
      {
        icon: 'https://img.example.com/example9.png',
        text: 'Title',
        desc: 'text',
      },
    ],
  },
  onItemClick(ev) {
    my.alert({
      content: ev.detail.index,
    });
  },
});
```

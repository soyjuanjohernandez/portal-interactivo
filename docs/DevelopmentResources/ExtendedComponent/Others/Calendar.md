
# Calendar

Calendario

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Predeterminado</th>
    <th>Requerido</th>
  </tr>
  <tr>
    <td>type</td>
    <td>Tipo de selección single: Fecha única range: Rango de fechas.</td>
    <td>Cadena</td>
    <td>single</td>
    <td>No</td>
  </tr>
  <tr>
    <td>tagData</td>
    <td>Datos de etiqueta, incluyendo fecha, etiqueta, desactivado o no, color de etiqueta tagColor. El tagColor incluye 1.#f5a911, 2.#e8541e, 3.#07a89b 4.#108ee9 y 5.#b5b5b5.</td>
    <td>Array&lt;fecha, etiqueta, tagColor&gt;</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td>onSelect</td>
    <td>Callback de selección de rango.</td>
    <td>([startDate, endDate]) =&gt; void</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td>onMonthChange</td>
    <td>Callback al hacer clic en el cambio de mes, incluyendo dos parámetros currentMonth (cambiar al siguiente mes) y prevMonth (cambiar al mes anterior).</td>
    <td>(currentMonth, prevMonth) =&gt; void</td>
    <td></td>
    <td>No</td>
  </tr>
  <tr>
    <td>onSelectHasDisableDate</td>
    <td>El rango seleccionado incluye una fecha no utilizable.</td>
    <td>(currentMonth, prevMonth) =&gt; void</td>
    <td></td>
    <td>No</td>
  </tr>
</table>


## Ejemplo

```js
{
  "defaultTitle": "Biblioteca de Componentes AntUI",
  "usingComponents":{
    "calendar": "mini-antui/es/calendar/index"
  }
}
```

```xml
<view>
  <calendar
    type="single"
    tagData="{{tagData}}"
    onSelect="handleSelect" />
</view>
```

```js
Page({
  data: {
    tagData: [
      { date: '2018-05-14', tag: 'Hipoteca devuelta', tagColor: 5 },
      { date: '2018-05-28', tag: 'Fondo de previsión', tagColor: 2 },
    ],
  },
  handleSelect() {},
  onMonthChange() {},
});
```
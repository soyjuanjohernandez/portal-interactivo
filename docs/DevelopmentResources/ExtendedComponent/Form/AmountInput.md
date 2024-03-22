---
sidebar_position: 6
---

# AmountInput

Cuadro de entrada de cantidad

## Código de muestra

```js
// Página/componente de API-DEMO/amount-input/amount-input.json
{
  "defaultTitle": "Biblioteca de componentes Mini Program AntUI",
  "usingComponents": {
    "amount-input": "mini-antui/es/amount-input/index"
  }
}
```

```xml
<!-- Página/componente de API-DEMO/amount-input/amount-input.axml -->
<view>
  <amount-input
    type="digit"
    title="Monto del cargo"
    extra="Sugerir monto de cargo superior a ¥100"
    placeholder="Ingrese el monto del cargo"
    value="{{value}}"
    maxLength="5"
    focus="{{true}}"
    btnText="Retirar todo"
    onClear="onInputClear"
    onInput="onInput"
    onConfirm="onInputConfirm" />
</view>
```

```js
// Página/componente de API-DEMO/amount-input/amount-input.js
Page({
  data: {
    value: 200,
  },
  onInputClear() {
    this.setData({
      value: '',
    });
  },
  onInputConfirm(e) {
    console.log(e);
    my.alert({
      content: 'confirmado',
    });
  },
  onInput(e) {
    console.log(e);
    const { value } = e.detail;
    this.setData({
      value,
    });
  },
  onButtonClick() {
    my.alert({
      content: 'botón clickeado',
    });
  },
  onInputFocus(e) {
    console.log(e);
  },
  onInputBlur(e) {
    console.log(e);
  },
});
```

## Atributos

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
      <th>Tipo</th>
      <th>Por defecto</th>
      <th>Requerido</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>type</td>
      <td>Tipo de entrada, los valores efectivos incluyen digit y number.</td>
      <td>Cadena</td>
      <td>number</td>
      <td>No</td>
    </tr>
    <tr>
      <td>title</td>
      <td>Título en la esquina superior izquierda.</td>
      <td>Cadena</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>extra</td>
      <td>Descripción en la esquina inferior derecha.</td>
      <td>Cadena</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>value</td>
      <td>Valor actual del cuadro de entrada.</td>
      <td>Cadena</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>btnText</td>
      <td>Texto del botón en la esquina inferior derecha.</td>
      <td>Cadena</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>Marcador de posición.</td>
      <td>Cadena</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>Obtener automáticamente el cursor.</td>
      <td>Booleano</td>
      <td>false</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onInput</td>
      <td>Se activa al introducir desde el teclado.</td>
      <td>(e: Objeto) => void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onFocus</td>
      <td>Se activa al obtener foco.</td>
      <td>(e: Objeto) => void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onBlur</td>
      <td>Se activa al perder el foco.</td>
      <td>(e: Objeto) => void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onConfirm</td>
      <td>Se activa al hacer clic en la finalización del teclado.</td>
      <td>(e: Objeto) => void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onClear</td>
      <td>Se activa al hacer clic en el ícono de borrar.</td>
      <td>() => void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>onButtonClick</td>
      <td>Se activa al hacer clic en el botón de la esquina inferior derecha.</td>
      <td>() => void</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>Número máximo de caracteres permitidos para la entrada.</td>
      <td>Número</td>
      <td>-</td>
      <td>No</td>
    </tr>
    <tr>
      <td>controlled</td>
      <td>¿Es un componente controlado o no? Si es verdadero, el contenido del valor está bajo el control total de setData.</td>
      <td>Booleano</td>
      <td>false</td>
      <td>No</td>
    </tr>
  </tbody>
</table>

---
sidebar_position: 2
---

# Title

Puede usar el componente de título para mostrar el título de cada página.

## Código de muestra
Consulte los códigos de muestra en diferentes idiomas:
## .json
```js
{
 "defaultTitle": "title",
 "usingComponents": {
   "title": "mini-ali-ui/es/title/index"
 }
 ```
## .axml
```xml
<title
 hasLine="true"
 type="more"
 onActionTap="titleMore"
>Title without icon</title>
<title
 hasLine="true"
 iconURL="https://example.com/images/T1HHFgXXVeXXXXXXXX.png"
 type="close"
 onActionTap="titleClose"
>Title with a close action</title>
<title
 hasLine="true"
 className="changeColor"
 iconURL="https://example.com/mdn/miniProgram_mendian/afts/img/A*wiFYTo5I0m8AAAAAAAAAAABjAQAAAQ/original"
 type="arrow"
 onActionTap="titleGo"
>Modify the style by class</title>
```
## .acss
```css
.changeColor {
 font-size: 30px;
 color: #f32600;
}
```
## .js
```js
Page({
 data: {},
 onLoad() {},
 titleGo() {
   my.showToast({
     content: 'click the arrow to jump',
   });
 },
 titleMore() {
   my.showToast({
     content: 'click the more to display bubble menu',
   });
 },
 titleClose() {
   my.showToast({
     content: 'click the close to close',
   });
 },
});
```
## Parámetros

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>className</td>
        <td>String</td>
        <td>Customized class.</td>
    </tr>
    <tr>
        <td>hasLine</td>
        <td>Boolean</td>
        <td>un Indicador de si se requiere una línea bajo el título.El valor predeterminado es `false`.</td>
    </tr>
    <tr>
        <td>iconURL</td>
        <td>String	</td>
        <td>URL del icono junto al nombre del título.El icono se muestra como una imagen cuadrada de forma predeterminada.</td>
    </tr>
    <tr>
        <td>type	</td>
        <td>String	</td>
        <td>
        Tipo del icono que los usuarios pueden tocar.Los valores válidos son:
            - `arrow`
            - `close`
            - `more`
            - `custom`: El contenido personalizado está vacío de forma predeterminada y debe especificar la ranura que se llama operación.
            Esta propiedad es nula por defecto.Cuando la propiedad es nula, OnActionTap no es válido.
        </td>
    </tr>
    <tr>
        <td>onActionTap	</td>
        <td>EventHandle	</td>
        <td>
        El evento que se activa cuando los usuarios tocan el icono a la derecha del título.El valor predeterminado es `() => {}`. El evento es válido solo cuando se especifica el tipo.
        </td>
    </tr>
</table>






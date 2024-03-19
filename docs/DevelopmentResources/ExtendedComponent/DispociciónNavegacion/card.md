---
sidebar_position: 8
---

# Card

Tarjeta.


<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>thumb	</td>
        <td>Dirección de la miniatura de la tarjeta.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>title 	</td>
        <td>Título de tarjeta.	</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>subTitle	</td>
        <td>Subtítulo de la tarjeta.</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>footer	</td>
        <td>Texto de pie de página.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>footerImg	</td>
        <td>Dirección de la imagen del pie de página.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>onCardClick</td>
        <td>Devolución de llamada cuando se hace clic en la tarjeta.	</td>
        <td>(info: Object) => void	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>info	</td>
        <td>Se utiliza para transferir datos al exterior cuando se hace clic en la tarjeta.	</td>
        <td>String	</td>
        <td>No</td>
    </tr>
</table>







## Ejemplo

```js
{
  "defaultTitle": "AntUI Component Library",
  "usingComponents": {
    "card": "mini-antui/es/card/index"
  }
}
```
```xml
<card
  thumb="{{thumb}}"
  title="Card Title"
  subTitle="Subtitle is not required"
  onClick="onCardClick"
  footer="Description"
  footerImg="{{footerImg}}"
  info="Click the card"
/>
```
```js
Page({
	data: {
		thumb: 'https://img.example.com/example.png',
		footerImg: 'https://img.example.com/example.png',
	},
	onCardClick: function(ev) {
		my.showToast({
  			content: ev.info,
		});
	}
});
```

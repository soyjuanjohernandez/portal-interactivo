---
sidebar_position: 2
---

# Message

Página de resultados.

## Código de muestra

```js
	// API-DEMO page/component/message/message.json
	{
	  "defaultTitle": "Mini Program AntUI component library",
	  "usingComponents": {
	    "message": "mini-antui/es/message/index"
	  }
	}
```
```xml
	<!-- API-DEMO page/component/message/message.axml -->
	<view>
	  <message
	    title="{{title}}"
	    subTitle="{{subTitle}}"
	    type="success" 
	    mainButton="{{messageButton.mainButton}}" 
	    subButton="{{messageButton.subButton}}" 
	    onTapMain="goBack">
	  </message>
	</view>
```
```js
	// API-DEMO page/component/message/message.js
	Page({
	  data: {
	    title: "Operation succeeded",
	    subTitle: "Content details can be wrapped. Up to two lines are recommended",
	    messageButton: {
	      mainButton: {
	        buttonText: "Main operation"
	      },
	      subButton: {
	        buttonText: "Auxiliary operation"
	      }
	    }
	  },
	  goBack() {
	    my.navigateBack();
	  }
	});
```
    
## Atributos

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Por defecto</th>
    <th>Requerido</th>
  </tr>
  <tr>
    <td>className	</td>
    <td>Clase personalizada.</td>
    <td>String	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>type	</td>
    <td>Cinco tipos de estado incluyen éxito, fallas, información, advertencia y espera, éxito de forma predeterminada.	</td>
    <td>String	</td>
    <td>success	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>title	</td>
    <td>Titulo principal.</td>
    <td>String	</td>
    <td>-	</td>
    <td>Yes</td>
  </tr>
  <tr>
    <td>subTitle	</td>
    <td>Subtítulo.	</td>
    <td>String	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>mainButton	</td>
    <td>El texto del botón principal está relacionado con la disponibilidad.</td>
    <td>`Object<buttonText, disabled>`	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>subButton	</td>
    <td>El texto del botón auxiliar está relacionado con la disponibilidad.</td>
    <td>`Object<buttonText, disabled>`	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>onTapMain	</td>
    <td>Haga clic en la función del botón principal.	</td>
    <td>`() => {}`	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>onTapSub	</td>
    <td>Haga clic en la función del botón auxiliar.</td>
    <td>`() => {}`	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
 
</table>



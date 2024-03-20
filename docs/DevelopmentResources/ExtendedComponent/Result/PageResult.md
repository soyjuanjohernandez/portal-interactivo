---
sidebar_position: 1
---

# PageResult

Página de falla.

## Código de muestra
```js
	// API-DEMO page/component/page-result/page-result.json
	{
	  "defaultTitle": "fault feedback",
	  "usingComponents": {
	    "page-result": "mini-antui/es/page-result/index"
	  }
	}
```
```xml
	<!-- API-DEMO page/component/page-result/page-result.axml -->
	<page-result
	  type="network"
	  title="Network is poor"
	  brief="It looks like the furthest distance in the world"
	/>
	<page-result
	  type="network"
	  title="Network is poor"
	  brief="It looks like the furthest distance in the world"
	>
	  <view class="am-page-result-btns">
	    <view onTap="backHome">Back home</view>
	    <view>Sample button</view>
	  </view>
	</page-result>
```
```js
	// API-DEMO page/component/page-result/page-result.js
	Page({
	  backHome() {
	    my.navigateBack();
	  }
	});
```
```css
	.am-page-result {
	  display: flex;
	  flex-direction: column;
	}
	.am-page-result-btns {
	  flex: 1;
	  display: flex;
	  flex-direction: column;
	  justify-content: flex-end;
	  align-content: center;
	  padding-bottom: 100rpx;
	}
	.am-page-result-btns > view {
	  color: #108EE9;
	  font-size: 40rpx;
	  margin-top: 52rpx;
	  text-align: center;
	}
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
    <td>type	</td>
    <td>Tipo de página de falla: network fault - network, service busy - busy, service abnormity - error, empty status - empty, user logoff - logoff.	</td>
    <td>String	</td>
    <td>network	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>local	</td>
    <td>Es el contenido de falla local o no.</td>
    <td>Boolean	</td>
    <td>false	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>title	</td>
    <td>Título de inmediato de falla.	</td>
    <td>String	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>brief	</td>
    <td>Informe de falla breve.</td>
    <td>String	</td>
    <td>-	</td>
    <td>No</td>
  </tr>
</table>


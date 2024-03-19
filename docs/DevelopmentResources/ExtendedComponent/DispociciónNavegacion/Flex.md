---
sidebar_position: 14
---


# Flex

CSS flex Encapsulación de diseño

## Sample Code
```js
	{
	  "defaultTitle": "Mini Program AntUI component library",
	  "usingComponents": {
	    "flex": "mini-antui/es/flex/index",
	    "flex-item": "mini-antui/es/flex/flex-item/index"
	  }
	}
```
```xml
	<view class="flex-container">
	  <view class="sub-title">Basic</view>
	  <flex>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	  </flex>
	  <view style="height: 20px;" />
	  <flex>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	  </flex>
	  <view style="height: 20px;" />
	  <flex>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	    <flex-item><view class="placeholder">Block</view></flex-item>
	  </flex>
	  <view className="sub-title">Wrap</view>
	  <flex wrap="wrap">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	  <view className="sub-title">Align</view>
	  <flex justify="center">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	  <flex justify="end">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	  <flex justify="between">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	  <flex align="start">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline small">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	  <flex align="end">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline small">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	  <flex align="baseline">
	    <view class="placeholder inline">Block</view>
	    <view class="placeholder inline small">Block</view>
	    <view class="placeholder inline">Block</view>
	  </flex>
	</view>
```
```css
	.flex-container {
	  padding: 10px;
	}
	
	.sub-title {
	  color: #888;
	  font-size: 14px;
	  padding: 30px 0 18px 0;
	}
	
	.placeholder {
	  background-color: #ebebef;
	  color: #bbb;
	  text-align: center;
	  height: 30px;
	  line-height: 30px;
	  width: 100%;
	}
	
	.placeholder.inline {
	  width: 80px;
	  margin: 9px 9px 9px 0;
	}
	
	.placeholder.small {
	  height: 20px;
	  line-height: 20px
	}
```
```js
	Page({});
```


## Attributes

<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Por defecto</th>
    <th>Requerido</th>
  </tr>
  <tr>
    <td>direction	</td>
    <td>Dirección del elemento, incluyendo fila, reverso de fila, columna y reverso de columna.	</td>
    <td>String	</td>
    <td>row	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>wrap	</td>
    <td>Modo subelementwrap, que incluye Nowrap, Wrap y Rap-Reverse.	</td>
    <td>String	</td>
    <td>nowrap	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>justify	</td>
    <td>Subelementjustify en el eje principal, incluido el inicio, el extremo, el centro, entre y alrededor.</td>
    <td>String	</td>
    <td>start	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>align	</td>
    <td>El subelemento justifica en el eje cruzado, incluyendo arranque, centro, final, línea de base y estiramiento.</td>
    <td>String	</td>
    <td>center	</td>
    <td>No</td>
  </tr>
  <tr>
    <td>alignContent	</td>
    <td>El subelemento justifica en múltiples eje, incluyendo arranque, extremo, centro, entre, alrededor y estiramiento.	</td>
    <td>String	</td>
    <td>stretch	</td>
    <td>No</td>
  </tr>
</table>

## Flex-item
The flex-item El componente tiene un estilo predeterminado de flex:1, que asegura que todos los elementos tengan el mismo ancho. Los hijos del contenedor flex  puede no ser un flex-item.


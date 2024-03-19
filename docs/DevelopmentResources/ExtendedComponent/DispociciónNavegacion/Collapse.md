---
sidebar_position: 16
---



# Collapse

Colapsar/expandir una región de contenido.

•	Agrupar u ocultar una región compleja para mantener la página limpia y ordenada.
• El modo de acordeón es un colapso especial que permite abrir solo una región de contenido.

## Sample Code
```js
	{
	  "defaultTitle": "Mini Program AntUI component library",
	  "usingComponents": {
	    "collapse": "mini-antui/es/collapse/index",
	    "collapse-item": "mini-antui/es/collapse/collapse-item/index"
	  }
	}
```
    ```xml
	<view>
	  <view class="demo-title">Basic usage</view>
	  <collapse
	    className="demo-collapse"
	    collapseKey="collapse1"
	    activeKey="{{['item-11', 'item-13']}}"
	    onChange="onChange"
	  >
	    <collapse-item header="Title 1" itemKey="item-11" collapseKey="collapse1">
	      <view class="item-content content1">
	        <view>Content region</view>
	      </view>                
	    </collapse-item>
	    <collapse-item header="Title 2" itemKey="item-12" collapseKey="collapse1">
	      <view class="item-content content2">
	        <view>Content region</view>
	      </view>
	    </collapse-item>
	    <collapse-item header="Title 3" itemKey="item-13" collapseKey="collapse1">
	      <view class="item-content content3">
	        <view>Content region</view>         
	      </view>
	    </collapse-item>
	  </collapse>
	  <view class="demo-title">Accordion mode</view>
	  <collapse
	    className="demo-collapse"
	    collapseKey="collapse2"
	    activeKey="{{['item-21', 'item-23']}}"
	    onChange="onChange"
	    accordion="{{true}}"
	  >
	    <collapse-item header="Title 1" itemKey="item-21" collapseKey="collapse2">
	      <view class="item-content content1">
	        <view>Content region</view>
	      </view>                
	    </collapse-item>
	    <collapse-item header="Title 2" itemKey="item-22" collapseKey="collapse2">
	      <view class="item-content content2">
	        <view>Content region</view>
	      </view>
	    </collapse-item>
	    <collapse-item header="Title 3" itemKey="item-23" collapseKey="collapse2">
	      <view class="item-content content3">
	        <view>Content region</view>         
	      </view>
	    </collapse-item>
	  </collapse>  
	</view>
    ```
    ```css
	.item-content {
	  padding: 14px 16px;
	  font-size: 17px;
	  color: #333;
	  line-height: 24px;
	}
	
	.content1 {
	  height: 200px;
	}
	
	.content2 {
	  height: 50px;
	}
	
	.content3 {
	  height: 100px;
	}
	
	.demo-title {
	  padding: 14px 16px;
	  color: #999;
	}
	
	.demo-collapse {
	  border-bottom: 1px solid #eee;
	}
    ```
    ```js
	Page({});
    ```

## Atributos

<table>
  <tr>
    <th>Property</th>
    <th>Description	</th>
    <th>Type	</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>activeKey	</td>
    <td>Key of the active tab panel.	</td>
    <td>Array / String	</td>
    <td>Ninguno de forma predeterminada, o el primer elemento por defecto en el modo de acordeón</td>
  </tr>
  <tr>
    <td>onChange	</td>
    <td>Devolución de llamada para el panel de conmutación.</td>
    <td>(activeKeys: Array): void	</td>
    <td>-</td>
  </tr>
  <tr>
    <td>accordion	</td>
    <td>Accordion mode.	</td>
    <td>Boolean	</td>
    <td>false</td>
  </tr>
  <tr>
    <td>collapseKey	</td>
    <td>Identificación exclusiva del colapso y el ítem de colapso correspondiente.</td>
    <td>String	</td>
    <td>false</td>
  </tr>
</table>

## Collapse-item

<table>
  <tr>
    <th>Property</th>
    <th>Description	</th>
    <th>Type	</th>
    <th>Default</th>
  </tr>
  <tr>
    <td>itemKey	</td>
    <td>ActiveKey correspondiente.	</td>
    <td>String	</td>
    <td>Identificador de componentes único</td>
  </tr>
  <tr>
    <td>header	</td>
    <td>Contenido de encabezado del panel.	</td>
    <td>String	</td>
    <td>-</td>
  </tr>
  <tr>
    <td>collapseKey	</td>
    <td>Identificación exclusiva del colapso y el ítem de colapso correspondiente.</td>
    <td>String	</td>
    <td>false</td>
  </tr>
</table>

Cuando una página tiene múltiples componentes de colapso, el atributo colapso del colapso y el ítem de colapso correspondiente deben ser obligatorios e iguales.Cuando una página tiene un solo componente de colapso, el colapso no es obligatorio.
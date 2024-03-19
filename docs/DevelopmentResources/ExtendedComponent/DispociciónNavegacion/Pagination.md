---
sidebar_position: 15
---


# Pagination

Paginación

## Código de muestra
```js
	{
	  "defaultTitle": "Mini Program AntUI component library",
	  "usingComponents": {
	    "pagination": "mini-antui/es/pagination/index"
	  }
	}
	<view>
	  <view class="demo-title">Basic usage</view>
	  <pagination total="{{20}}" current="{{1}}"/>
	  <view class="demo-title">Arrow button</view>
	  <pagination mode="icon" total="{{20}}" current="{{10}}"/>
	  <view class="demo-title">Simple mode</view>
	  <pagination simple total="{{20}}" current="{{1}}"/>
	  <view class="demo-title">Button disabled</view>
	  <pagination total="{{20}}" current="{{1}}" disabled/>
	  <view class="demo-title">Custom button text</view>
	  <pagination arrow prevText="Previous" nextText="Next" total="{{20}}" current="{{1}}"/>
	</view>
```
```js
	Page({})
```

## Attributes
<table>
  <tr>
    <th>Propiedad</th>
    <th>Descripción</th>
    <th>Tipo</th>
    <th>Por defecto</th>
  </tr>
  <tr>
    <td>mode	</td>
    <td>Opciones de formulario de botón: texto, icono.	</td>
    <td>String	</td>
    <td>text</td>
  </tr>
  <tr>
    <td>total	</td>
    <td>Número total de páginas.	</td>
    <td>Number	</td>
    <td>0</td>
  </tr>
  <tr>
    <td>current	</td>
    <td>Número de página actual.	</td>
    <td>Number	</td>
    <td>0</td>
  </tr>
  <tr>
    <td>simple	</td>
    <td>Ocultar valor o no.	</td>
    <td>Boolean	</td>
    <td>false</td>
  </tr>
  <tr>
    <td>disabled 	</td>
    <td>Estado de discapacidad.	</td>
    <td>Boolean	</td>
    <td>false</td>
  </tr>
  <tr>
    <td>prevText	</td>
    <td>Texto para el botón de página.	</td>
    <td>String	</td>
    <td>Previous page</td>
  </tr>
  <tr>
    <td>nextText	</td>
    <td>Texto para el botón de página hacia abajo.	</td>
    <td>String	</td>
    <td>Next page</td>
  </tr>
  <tr>
    <td>btnClass	</td>
    <td>Estilo de botón de paginación, solo para botones de tipo de texto.	</td>
    <td>String	</td>
    <td>-</td>
  </tr>
  <tr>
    <td>onChange	</td>
    <td>Función de devolución de llamada de paginación.	</td>
    <td>`(index: Number) => void`</td>
    <td>-</td>
  </tr>
</table>


**Nota:**

**prevText** y **nextText** surgen efecto solo cuando el modo es texto.  
---
sidebar_position: 11
---


# Steps

Muestre la barra de progreso según pasos.

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
        <td>Más exterior Estilo superpuesto de capa.</td>
        <td>String	</td>
        <td>		</td>
        <td>No</td>
    </tr>
    <tr>
        <td>activeIndex	</td>
        <td>Paso activo actual.	</td>
        <td>Number</td>
        <td>1</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>failIndex 	</td>
        <td>Paso actual fallido (efectivo solo en modo vertical).	</td>
        <td>Number	</td>
        <td>0	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>direction	</td>
        <td>Mostrar dirección, opciones que incluyen vertical y horizontal.	</td>
        <td>String	</td>
        <td>horizontal	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>size	</td>
        <td>Tamaño de icono uniforme, en px.	</td>
        <td>Number	</td>
        <td>0	</td>
        <td>No</td>
    </tr>
    <tr>
        <td>items	</td>
        <td>Detalles del paso.	</td>
        <td>`Array[{title, description, icon,   activeIcon, size}]`</td>
        <td>[]	</td>
        <td>Yes</td>
    </tr>
</table>

Elemento Atributo Descripción detallada

<table>
    <tr>
        <th>Property</th>
        <th>Description	</th>
        <th>Type	</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>items.title	</td>
        <td>Título de los detalles del paso.</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.description	</td>
        <td>Descripción de los detalles del paso.</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.icon	</td>
        <td>Icono para el paso no alcanzado (efectivo solo en modo vertical).</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.activeIcon	</td>
        <td>Icono para el paso alcanzado (efectivo solo en modo vertical).</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.size	</td>
        <td>Tamaño del icono para el paso alcanzado, en px. (efectivo solo en modo vertical)</td>
        <td>Number	</td>
        <td>Yes</td>
    </tr>
</table>

Elemento Atributo Descripción detallada

<table>
    <tr>
        <th>Propiedad</th>
        <th>Descripción</th>
        <th>Tipo</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>items.title	</td>
        <td>Título de los detalles del paso.</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.description	</td>
        <td>Descripción de los detalles del paso.	</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.icon	</td>
        <td>Icono para el paso no alcanzado (efectivo solo en modo vertical).</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.activeIcon	</td>
        <td>Icono para el paso alcanzado (efectivo solo en modo vertical)</td>
        <td>String	</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>items.size	</td>
        <td>Tamaño del icono para el paso alcanzado, en px. (efectivo solo en modo vertical)</td>
        <td>Number	</td>
        <td>Yes</td>
    </tr>
</table>

## Ejemplo

```js
{
  "usingComponents": {
    "steps": "mini-antui/es/steps/index"
  }
}
```

```xml
<steps
  activeIndex="{{activeIndex}}"
  items="{{items}}"
/>
```

```js
Page({
  data: {
    activeIndex: 1,
    items: [{
      title: 'Step one',
      description: 'This is step one',
    }, {
      title: 'Step two',
      description: 'This is step two',
    }, {
      title: 'Step three',
      description: 'This is step three',
    }]
  }
});
```


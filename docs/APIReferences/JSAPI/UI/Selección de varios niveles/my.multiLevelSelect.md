---
sidebar_position: 1
---

# my.multiLevelSelect

Función de selección en cascada, utilizada principalmente para seleccionar varios niveles de datos asociados, como provincia, ciudad y distrito.

## Código de muestra

```js
//.json
{
     "defaultTitle": "Cascade selector"
}
```
```js
<!-- .axml -->
<view class="page">
  <view class="page-description">Cascade selector API</view>
  <view class="page-section">
    <view class="page-section-title">my.multiLevelSelect</view>
    <view class="page-section-demo">
      <button type="primary" onTap="openMultiLevelSelect">Cascade selector</button>
    </view>
  </view>
</view>
```
```js
//.js
Page({
  openMultiLevelSelect() {
    my.multiLevelSelect({
        title: 'Cascade selector',//Cascade selector title 
        list: [
        {
            name: "City",//entry name
            subList: [
                {
                    name: "District A",
                    subList: [
                        {
                            name: "Street A"
                        },
                        {
                            name: "Street B"
                        }
                    ]
                },
                {
                    name: "District B",
                    subList: [
                        {
                            name: "Street C"
                        },
                        {
                            name: "Street D"
                        }
                    ]
                }
            ]// cascade sub-data list
        }],// Cascade data list
        success:(res)=>{
            my.alert({title:JSON.stringify(res)})
        }
    });
  }
})
```

## Parámetros
El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>title</td>
        <td>String</td>
        <td>No</td>
        <td>Título.</td>
     </tr>
     <tr>
        <td>list</td>
        <td>JsonArray</td>
        <td>Si</td>
        <td>Lista de datos de selección.</td>
     </tr>
     <tr>
        <td>name</td>
        <td>String</td>
        <td>Si</td>
        <td>Nombre de entrada.</td>
     </tr>
     <tr>
        <td>subList</td>
        <td>JsonArray</td>
        <td>No</td>
        <td>Lista de subentradas.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (para ser ejecutado en el éxito de la llamada o el fracaso).</td>
     </tr>
</table>

### Función de devolución de llamada de éxito

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Boolean</td>
        <td>Selección completada o no, devolviendo falso para la cancelación.</td>
     </tr>
     <tr>
        <td>result</td>
        <td>JsonArray</td>
        <td>Resultado de la selección, como ```[{"name":"City"},{"name":"District A"},{"name":"Street A"}].```</td>
     </tr>
</table>
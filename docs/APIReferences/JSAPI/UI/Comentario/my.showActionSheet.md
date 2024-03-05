---
sidebar_position: 8
---

# my.showActionSheet

Use esta API para mostrar el menú de operación.

## Código de muestra

**index.json**
```js
// API-DEMO page/API/action-sheet/action-sheet.json
{
    "defaultTitle": "Operation Menu"
}
```
**index.axml**
```js
<!-- API-DEMO page/API/action-sheet/action-sheet.axml-->
<view class="page">
  <view class="page-description">Action sheet API</view>
  <view class="page-section">
    <view class="page-section-title">my.showActionSheet</view>
    <view class="page-section-demo">
      <button type="primary" onTap="showActionSheet">Show Action Sheet</button>
    </view>
  </view>
</view>
```
**index.js**
```js
// API-DEMO page/API/action-sheet/action-sheet.js
Page({
  showActionSheet() {
    my.showActionSheet({
      title: 'ActionSheet',
      items: ['Menu 1', 'Menu 2', 'Menu3'],
      cancelButtonText: 'Cancel',
      success: (res) => {
        const btn = res.index === -1 ? 'Cancel' : 'No' + res.index + '';
        my.alert({
          title: `You clicked ${btn} button`
        });
      },
    });
  },
});
```

## Parámetros
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
        <td>El título del menú.</td>
     </tr>
      <tr>
        <td>items</td>
        <td>String Array</td>
        <td>No</td>
        <td>La matriz de texto del botón de menú.</td>
     </tr>
      <tr>
        <td>cancelButtonText</td>
        <td>String</td>
        <td>No</td>
        <td className="p-no-margin">
            Texto en el botón Cancelar, que es "Cancelar" de forma predeterminada.
           
            **Nota:** 

            Este campo no es válido para Android y el botón Cancelar no se mostrará. 
         </td>
     </tr>
      <tr>
        <td>destructiveBtnIndex</td>
        <td>Número</td>
        <td>No</td>
        <td className="p-no-margin">
            Este campo especifica el número de índice de un botón específico.El valor comienza desde 0.
            
            Se utiliza para los botones para eliminar o borrar datos o los de los escenarios similares.El color predeterminado es rojo.
         </td>
     </tr>
       <tr>
        <td>badges</td>
        <td>Object Array</td>
        <td>No</td>
        <td>Para la matriz con opción rojo. Consulte los parámetros de las insignias a continuación para conocer los campos de la matriz.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada a la API exitosa.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada para una llamada a la API fallida.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>La función de devolución de llamada utilizada cuando se completa la llamada a la API. Esta función se ejecuta siempre, independientemente de que la llamada se realice correctamente o no.</td>
     </tr>
</table>

### **Badges** parameters

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>index</td>
        <td>Número</td>
        <td>El índice de la opción que necesita usar marcas rojas, a partir de 0.</td>
     </tr>
     <tr>
        <td>type</td>
        <td>String</td>
        <td className="p-no-margin">
           Tipos de marca roja.Los valores válidos son:

            -none: no hay marca roja

            -point: marca roja

            -num: marca roja numérica

            -text: textos en rojo.
         </td>
     </tr>
     <tr>
        <td>text</td>
        <td>String</td>
        <td className ="p-no-margin">
           Marca roja personalizada:

            -Este campo es opcional cuando el valor de tipo es ninguno/punto/más;

            -Cuando el valor de tipo es NUM, pero el valor de este campo tiene decimales, no mayores a 0, o no menos de 100, este campo no se muestra.
        </td>
     </tr>
</table>
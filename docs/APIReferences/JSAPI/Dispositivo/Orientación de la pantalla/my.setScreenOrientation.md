---
sidebar_position: 2
---

# my.setScreenOrientation

Llame a esta API para establecer la orientación de la pantalla.
:::info[NOTA]
En Android, la llamada a esta API para establecer la orientación de la pantalla será efectiva para todas las páginas del miniprograma actual por defecto. Cuando se llama a esta API en una página para establecer la orientación de la pantalla, por ejemplo, en ```vertical```, la orientación de la pantalla de todas las subpáginas que entren desde esta página también será ```vertical```, la misma que la de esta página. Mediante cierto procesamiento, al volver de esta página a páginas anteriores, la orientación de estas páginas no se verá afectada.
:::

## Código de muestra

```js
my.setScreenOrientation({
  orientation: 'portrait',
  success: (res) => {
    my.alert({
      title: 'success',
      content: JSON.stringify(res)
    })
  },
  fail: (res) => {
    my.alert({
      title: 'fail',
      content: JSON.stringify(res)
    })
  }
})
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
        <td>orientation</td>
        <td>String</td>
        <td>Si</td>
        <td>Indica la orientación de la pantalla, ```vertical``` u ```horizontal```.</td>
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
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>success</td>
        <td>Booleano</td>
        <td>Especifica si la llamada es exitosa. Cuando el valor es ```verdadero```, la llamada es exitosa.</td>
     </tr>
</table>

### Función de devolución de llamada en caso de fallo
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>error</td>
        <td>Número</td>
        <td>El código de error del fallo.</td>
     </tr>
     <tr>
        <td>errorMessage</td>
        <td>String</td>
        <td>El mensaje de error que describe detalladamente el código de resultado</td>
     </tr>
</table>


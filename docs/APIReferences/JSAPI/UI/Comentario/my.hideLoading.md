---
sidebar_position: 5
---

# my.hideLoading

Oculta el cuadro de diálogo de carga.

## Código de muestra

```js
my.hideLoading();

Page({
  onLoad() {
    my.showLoading();
    const that = this;
    setTimeout(() => {
      my.hideLoading({
        page: that,  // Evita cambiar a otras páginas cuando la ejecución, la señalización de la página no es precisa
      });
    }, 4000);
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
        <td>page</td>
        <td>Objeto</td>
        <td>No</td>
        <td>Específicamente se refiere a la instancia de la página actual. En algunos casos, es necesario especificar la página exacta para hideLoading.</td>
     </tr>
</table>
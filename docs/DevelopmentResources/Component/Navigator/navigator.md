# navigator

Link de pagina

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Tipo</th>
      <th>Por defecto</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>open-type</td>
      <td>String</td>
      <td>navigate</td>
      <td>Modo de salto.</td>
    </tr>
    <tr>
      <td>hover-class</td>
      <td>String</td>
      <td>ninguno</td>
      <td>Clase añadida al hacer clic.</td>
    </tr>
    <tr>
      <td>hover-start-time</td>
      <td>Number</td>
      <td></td>
      <td>Estado de clic mostrado después de cierto tiempo, en milisegundos.</td>
    </tr>
    <tr>
      <td>hover-stay-time</td>
      <td>Number</td>
      <td></td>
      <td>Tiempo de retención del estado de clic después de soltar, en milisegundos.</td>
    </tr>
    <tr>
      <td>url</td>
      <td>String</td>
      <td></td>
      <td>Enlace de salto dentro de la aplicación.</td>
    </tr>
  </tbody>
</table>

### Valor Efectivo de open-type

<table>
  <thead>
    <tr>
      <th>Propiedad</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>navigate</td>
      <td>Corresponde a la función [my.navigateTo](/).</td>
    </tr>
    <tr>
      <td>redirect</td>
      <td>Corresponde a la función [my.redirectTo](/).</td>
    </tr>
    <tr>
      <td>switchTab</td>
      <td>Corresponde a la función [my.switchTab](/).</td>
    </tr>
    <tr>
      <td>navigateBack</td>
      <td>Corresponde a la función [my.navigateBack](/).</td>
    </tr>
  </tbody>
</table>


### Código de Ejemplo

```xml
<!-- sample.axml -->
<view class="btn-area">
  <navigator url="/page/navigate/navigate?title=navigate" hover-class="navigator-hover">Saltar a una nueva página</navigator>
  <navigator url="../../redirect/redirect/redirect?title=redirect" open-type="redirect" hover-class="other-navigator-hover">Abrir en la página actual</navigator>
  <navigator url="/page/index/index" open-type="switchTab" hover-class="other-navigator-hover">Cambiar de pestaña</navigator>
</view>
```

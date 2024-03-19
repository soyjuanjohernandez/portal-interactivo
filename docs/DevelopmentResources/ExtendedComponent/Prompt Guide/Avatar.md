---
sidebar_position: 7
---

# Avatar

Puedes usar el componente avatar para mostrar avatares.

## Código de ejemplo

Consulta los códigos de ejemplo en diferentes lenguajes:

### .js

```js
{
  "defaultTitle": "Avatar",
  "usingComponents": {
    "avatar": "mini-ali-ui/es/avatar/index"
  }
}
```

### .axml
```html
<view>
  <!-- Avatar normal -->
  <avatar src="xxxx" shape="standard"/>
  <!-- Avatar con nombre de usuario y breve descripción -->
  <avatar src="xxxx" size="lg" name="nombre de usuario" desc="descripción abstracta" shape="standard" />
</view>
```

## Parámetros

<table>
  <tr>
    <th>Propiedad</th>
    <th>Tipo</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>className</td>
    <td>String</td>
    <td>Clase personalizada.</td>
  </tr>
  <tr>
    <td>src</td>
    <td>String</td>
    <td>
        Fuente de la imagen del avatar. El valor predeterminado es el ```avatar predeterminado con fondo azul```.
    </td>
  </tr>
  <tr>
    <td>size</td>
    <td>String</td>
    <td>
        Tamaño del avatar. Los valores válidos son: 
        - `lg`
        - `md`
        - `sm`
        - `xs`. 
        
        El valor predeterminado es `md`.
    </td>
  </tr>
  <tr>
    <td>shape</td>
    <td>String</td>
    <td>
    Forma del avatar. Los valores válidos son: 
    - `standard`
    - `circle`
    - `square`. 
    
    El valor predeterminado es `circle`.
    </td>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Nombre de usuario.</td>
  </tr>
  <tr>
    <td>desc</td>
    <td>String</td>
    <td>Descripción breve sobre el usuario.</td>
  </tr>
  <tr>
    <td>onError</td>
    <td>Función</td>
    <td>Evento que se desencadena cuando falla la carga del avatar. El valor predeterminado es `(e: Object) => void`.</td>
  </tr>
</table>

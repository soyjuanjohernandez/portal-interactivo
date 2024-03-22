# Alphabet
Puedes usar el componente alphabet para organizar el contenido en orden alfabético.

## Código de Ejemplo

### .json
```json
{
  "defaultTitle": "Alphabet",
  "usingComponents":{
    "alphabet": "mini-ali-ui/es/list/alphabet/index",
    "am-icon": "mini-ali-ui/es/am-icon/index"
  }
}
```

### .axml
```xml
<view style="position: relative; height: 100vh;">
 <alphabet alphabet="{{alphabet}}" onClick="onAlphabetClick" >
 	<view slot="prefix"><am-icon size="12" type="check_"/></view>
 </alphabet>
</view>
```

### .js
```js
Page({
  data: {
    alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  },
  onAlphabetClick(ev) {
    my.alert({
      content: JSON.stringify(ev.data),
    });
  },
});
```

## Parámetros

| Propiedad | Tipo   | Descripción                                 |
|-----------|--------|---------------------------------------------|
| alphabet  | Array  | El alfabeto que consiste en letras.         |

**Nota:** El contenido se muestra utilizando el componente de lista.
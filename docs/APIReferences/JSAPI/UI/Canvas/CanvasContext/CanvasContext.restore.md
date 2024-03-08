---
sidebar_position: 23
---

# CanvasContext.restore

Restaurar el contexto guardado.

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas');

ctx.save();
ctx.setFillStyle('red');
ctx.fillRect(20, 20, 250, 80);

ctx.restore();
ctx.fillRect(60, 60, 155, 130);

ctx.draw();
```


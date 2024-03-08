---
sidebar_position: 25
---

# CanvasContext.save

Guardar el contexto del canvas.


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('myCanvas')

// save the default fill style
ctx.save()
ctx.setFillStyle('red')
ctx.fillRect(10, 10, 150, 100)

// restore to the previous saved state
ctx.restore()
ctx.fillRect(50, 50, 150, 100)

ctx.draw()
```


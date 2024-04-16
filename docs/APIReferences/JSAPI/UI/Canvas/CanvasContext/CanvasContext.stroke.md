---
sidebar_position: 38
---

# CanvasContext.stroke

Dibujar el trazo de la trayectoria.

## Código de muestra

```js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.moveTo(10, 10)
ctx.lineTo(100, 10)
ctx.lineTo(100, 100)
ctx.stroke()
ctx.draw()
```

```js
const ctx = my.createCanvasContext('awesomeCanvas');

ctx.rect(10, 10, 100, 30)
ctx.setStrokeStyle('yellow')
ctx.stroke()

ctx.beginPath()
ctx.rect(10, 40, 100, 30)

ctx.setStrokeStyle('blue')
ctx.strokeRect(10, 70, 100, 30)

ctx.rect(10, 100, 100, 30)

ctx.setStrokeStyle('red')
ctx.stroke()
ctx.draw()
```

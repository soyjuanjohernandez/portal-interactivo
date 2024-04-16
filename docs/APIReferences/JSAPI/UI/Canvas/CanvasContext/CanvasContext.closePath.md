---
sidebar_position: 9
---

# CanvasContext.closePath

Cerrar un camino.La ruta de cierre conectará el punto de inicio y el punto final. Si ```fill()``` o ```stroke()``` no se invoca y se crea una nueva ruta después de ```closePath```, el camino anterior no se representará.

## Código de muestra

```js
 //.js draw a triangle
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.moveTo(20, 20)
ctx.lineTo(150, 20)
ctx.lineTo(150, 150)
ctx.closePath()
ctx.stroke()
ctx.draw()
```
```js
//.js draw with fill
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.rect(20, 20, 150, 50)
ctx.closePath()

ctx.beginPath()
ctx.rect(20, 50, 150, 40)

ctx.setFillStyle('red')
ctx.fillRect(20, 80, 120, 30)

ctx.rect(20, 150, 150, 40)

ctx.setFillStyle('blue')
ctx.fill()
ctx.draw()
```
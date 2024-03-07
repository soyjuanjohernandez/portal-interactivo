---
sidebar_position: 14
---

# CanvasContext.fill

Llena la ruta actual.El color predeterminado es negro.

* Si la ruta actual no está cerrada, ```fill()``` conectará el punto de inicio y el punto final y luego llene.

* La ruta que se ```fill()``` se inicia desde ```beginPath()```, pero no cubre esa cubierta ```fillrect()```.


## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.moveTo(20, 20)
ctx.lineTo(200, 20)
ctx.lineTo(200, 200)
ctx.fill()
ctx.draw()
```

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
ctx.rect(20, 20, 110, 40)
ctx.setFillStyle('blue')
ctx.fill()

ctx.beginPath()
ctx.rect(20, 30, 150, 40)

ctx.setFillStyle('yellow')
ctx.fillRect(20, 80, 150, 40)

ctx.rect(20, 150, 150, 40)

ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```
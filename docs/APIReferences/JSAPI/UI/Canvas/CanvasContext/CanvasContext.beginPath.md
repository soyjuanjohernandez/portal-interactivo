---
sidebar_position: 5
---

# CanvasContext.beginPath

Comience a crear una ruta, debe usar el ```relleno``` o el ```trazo``` para llenar o acariciar la ruta.

Al comienzo de la creación de la ruta, se invoca el ```beginPath()```. Si el ```setFillStyle()```, ```setstrokeStyle()```, ```setlinewidth()``` y otros se invocan varias veces en la misma ruta, sólo tendrá efecto la última invocación.

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')

ctx.rect(20, 20, 150, 50)
ctx.setFillStyle('blue')
ctx.fill();

ctx.beginPath();
ctx.rect(20, 50, 150, 40)

ctx.setFillStyle('yellow')
ctx.fillRect(20, 170, 150, 40)

ctx.rect(10, 100, 100, 30)

ctx.setFillStyle('red')
ctx.fill()
ctx.draw()
```
---
sidebar_position: 8
---

# CanvasContext.clip

Establezca la ruta creada como ruta recortada.

## Código de muestra

```js
//.js
const ctx = my.createCanvasContext('awesomeCanvas')
my.downloadFile({
  url: 'https://img.example.com/example.png',
  success: function(res) {
    ctx.save()
    ctx.beginPath()
    ctx.arc(50, 50, 25, 0, 2*Math.PI)
    ctx.clip()
    ctx.drawImage(res.tempFilePath, 25, 25)
    ctx.restore()
    ctx.draw()
  }
})
```
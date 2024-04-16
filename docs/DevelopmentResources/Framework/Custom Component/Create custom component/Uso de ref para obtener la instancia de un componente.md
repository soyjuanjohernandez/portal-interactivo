# Uso de “ref” para obtener la instancia de un componente

En el desarrollo de componentes personalizados, puedes utilizar la palabra clave “ref” para obtener la instancia de un componente específico. Además, puedes emplear my.canIUse('component2') para manejar la compatibilidad.

**Nota:**

La palabra clave “ref” también puede utilizarse en el componente padre para obtener la instancia de sus componentes hijos.
Ejemplo de código:

### Ejemplo del codigo:

```js
// /pages/index/index.js
Page({
  plus() {
    this.counter.plus();
  },
  saveRef(ref) {
    this.counter = ref;
  },
});

```

```xml
<!-- /pages/index/index.axml -->
<counter ref="saveRef" />
<button onTap="plus">+</button>
```


Nota: Después de que ref esté ligado a saveRef, el método saveRef se activa en la inicialización del componente.

```js
// /components/counter/index.js
Component({
  data: {
    counter: 0,
  },
  methods: {
    plus() {
      this.setData({ counter: this.data.counter + 1 })
    },
  },
})
```
```xml
<!-- /components/counter/index.axml -->
<view>{{counter}}</view>
```
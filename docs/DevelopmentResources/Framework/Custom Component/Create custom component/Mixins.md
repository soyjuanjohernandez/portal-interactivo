---
sidebar_position: 6
---

# Mixins

El desarrollador puede implementar múltiples componentes personalizados que pueden tener una lógica común para ser procesada. El Mini Program proporciona las Mixins para cumplir con el requisito.

**Ejemplo del Código:**

```js
// /minxins/lifecylce.js
export default {
  onInit(){}, 
  deriveDataFromProps(nextProps){},
  didMount(){},
  didUpdate(prevProps,prevData){},
  didUnmount(){},
};
```

```js
// /pages/components/xx/index.js
import lifecylce from '../../minxins/lifecylce';
const initialState = {
  data: {
    y: 2
  },
};
const defaultProps = {
  props: {
    a: 3,
  },
};
const methods = {
  methods: {
  	onTapHandler() {},
  },
}
Component({
  mixins: [
    lifecylce,
    initialState,
    defaultProps,
    methods
  ],
  data: {
    x: 1,
  },
});
```
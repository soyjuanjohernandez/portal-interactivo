---
sidebar_position: 3
---

## Usar Componente Personalizado

**Nota:**

El evento de un componente personalizado (como onTap) no es compatible con todos los componentes personalizados de forma predeterminada. No se puede utilizar a menos que el componente personalizado en sí lo admita claramente. Para obtener detalles sobre el soporte de eventos del componente personalizado, consulte la sección del constructor del componente. El uso de un componente personalizado es similar al componente básico.

1. En el archivo JSON de la página, especifique el componente personalizado que se va a usar.

```js
// /pages/index/index.json
{
    "usingComponents": {
        "customer": "/components/customer/index"
    }
}
```

2. En el archivo axml de la página, utiliza el componente personalizado, que es similar a los componentes básicos.

```xml
<!-- /pages/index/index.axml -->
<view>
  <customer />
</view>
```

## Citando un componente personalizado:

```js
// page.json Tenga en cuenta que no está configurado en app.json
{
  "usingComponents":{
    "your-custom-component":"mini-antui/es/list/index",
    "your-custom-component2":"/components/card/index",
    "your-custom-component3":"./result/index",
    "your-custom-component4":"../result/index"
  }
}
// La ruta absoluta del proyecto comienza con /; La ruta relativa comienza con ./ o ../; La ruta NPM no comienza con /
```

## Información de referencia

Para instalar el módulo npm, consulta la [parte de npm en la descripción general del framework.](/)
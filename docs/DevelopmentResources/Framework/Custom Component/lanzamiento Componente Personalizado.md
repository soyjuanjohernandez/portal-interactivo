---
sidebar_position: 4
---

# Lanzamiento de Componente Personalizado

El mini program ahora admite nativamente la integración de módulos npm de terceros, lo que permite que los componentes personalizados se publiquen en npm para que los desarrolladores los reutilicen y compartan.

## Directorio Recomendado para Publicar Componentes Personalizados
La siguiente estructura de directorio se recomienda para publicar componentes personalizados:

**Estructura de Archivos**

```
├── src // utilizado para componentes personalizados individuales
│ ├── index.js
│ ├── index.json
│ ├── index.axml
│ └── index.acss
├── demo // utilizado para la demostración del componente personalizado
│ ├── index.js
│ ├── index.json
│ ├── index.axml
│ └── index.acss
├── app.js // utilizado para la demostración del Mini Program de componente personalizado
├── app.json
└── app.acss

```

## Ejemplo de JSON

```js
// package.json
{
  "name": "your-custom-component",
  "version": "1.0.0",
  "description": "your-custom-component",
  "repository": {
    "type": "git",
    "url": "your-custom-component-repository-url"
  },
  "files": [
    "es"
  ],
  "keywords": [
    "custom-component",
    "mini-program"
  ],
  "devDependencies": {
    "rc-tools": "6.x"
  },
  "scripts": {
    "build": "rc-tools run compile && node scripts/cp.js && node scripts/rm.js",
    "pub": "git push origin && npm run build && npm publish"
  }
}
```

## Ejemplo de archivo js

```js
// scripts/cp.js
const fs = require('fs-extra');
const path = require('path');
// copy file
fs.copySync(path.join(__dirname, '../src'), path.join(__dirname, '../es'), {
  filter(src, des){
    return !src.endsWith('.js');
  }
});
```

```js
// scripts/rm.js
const fs = require('fs-extra');
const path = require('path');
// eliminar un archivo innecesario
const dirs = fs.readdirSync(path.join(__dirname, '../es'));
dirs.forEach((item) => {
  if (item.includes('app.') || item.includes('DS_Store') || item.includes('demo')) {
    fs.removeSync(path.join(__dirname, '../es/', item));
  } else {
    const moduleDirs = fs.readdirSync(path.join(__dirname, '../es/', item));
    moduleDirs.forEach((item2) => {
      if (item2.includes('demo')) {
        fs.removeSync(path.join(__dirname, '../es/', item, item2));
      }
    });
  }
});
fs.removeSync(path.join(__dirname, '../lib/'));
```
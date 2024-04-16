---
sidebar_position: 2
---

# Configuraciones del proyecto del Mini Program

Con este tema, puede aprender a usar el archivo ```mini.project.json``` en el directorio raíz para configurar el proyecto MINI del programa.

## Descripción general

Además de ```app``` y ```page```, el framework ```Mini Program``` también incluye el ```project``` para describir todo el proyecto ```Mini Program```. Para obtener más información, consulte la [descripción general del framework](/).

El ```project``` se refiere al archivo ```mini.project.json``` que debe colocarse en el directorio raíz del proyecto mini programa. Puede usar el archivo ```mini.project.json``` para configurar características avanzadas, como se enumera en la tabla a continuación.

## Características

La siguiente tabla enumera las funciones de configuración del proyecto Mini Programa:

<table>
    <tr>
        <th>Nombre del campo</th>
        <th>Tipo de datos</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>miniprogramRoot</td>
        <td>Path String</td>
        <td>
            Especifica la ruta relativa del Código de origen del programa MINI (el directorio donde se encuentra el archivo ```app.json```).
        </td>
    </tr>
    <tr>
        <td>component2</td>
        <td>Boolean</td>
        <td>
            Opción para habilitar los componentes personalizados.
            Para habilitar los componentes personalizados, marque **Enable component2 compile** en **Details > Project configuration**. Para obtener más información, consulte la [introducción de componentes personalizados](/).
        </td>
    </tr>
    <tr>
        <td>axmlStrictCheck</td>
        <td>Boolean</td>
        <td>
        Opción para habilitar la verificación de sintaxis estricta AXML.Una vez habilitado, puede detectar el error de etiquetas no cerradas y más.
            Para habilitar la verificación de sintaxis estricta AXML, marque **Enable Strick Axml Check in the Details > Project configuration** del IDE.
        </td>
    </tr>
    <tr>
        <td>enableHMR</td>
        <td>Boolean</td>
        <td>Opción para habilitar la actualización de Simulator Hot.</td>
    </tr>
    <tr>
        <td>enableNodeModuleBabelTransform</td>
        <td>Boolean</td>
        <td>Opción para habilitar la transformación de sintaxis ES6.</td>
    </tr>
    <tr>
        <td>exclude</td>
        <td>Array[String]</td>
        <td>La carpeta de archivo o archivo para excluir al construir el paquete.Sigue la sintaxis del globo.Para obtener más información, consulte [exclude o lista negra del paquete](/).</td>
    </tr>
</table>

## ```exclude``` lista negra de paquetes

Cuando subes un mini program a la plataforma de Mini Program, los códigos de origen locales se empaquetarán y cargarán a la nube para su construcción. Además de los archivos anteriores, el paquete de código fuente también incluye el siguiente contenido:

- Mini program archivos de código fuente:
    - ```.acss```
    - ```.axml```
    - ```.js```
    - ```.json```
    - ```.sjs```
- Paquetes de dependencia en el ```node_modules``` directorio

Cuando al subir, si el paquete de código fuente sigue siendo demasiado grande después de la compresión, se puede activar el tiempo de espera de la red.Para resolver este error, puede agregar archivos innecesarios que se construyen en la nube a la ```exclude``` blacklist. Por ejemplo, si precompila el código a través de ```src``` -> ```dist```, debe excluir los archivos en el directorio SRC y la herramienta ```devDependences``` en el directorio ```node_modules``` cuando sube el programa MINI.

El siguiente código de muestra indica que el paquete de código fuente excluye los archivos en los directorios ```src``` y ```node_modules``` en el directorio raíz del proyecto:

```js
"exclude": [
  "src/**",
  "node_modules/**"
]
```
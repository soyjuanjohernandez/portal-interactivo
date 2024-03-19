---
sidebar_position: 2
---

# Lottie

Este tema presenta qué es Lottie y cómo usar la animación de Lottie.

## Resumen

Lottie es una biblioteca para Web, iOS y Android que renderiza animaciones de Adobe After Effects en formato de datos JSON utilizando Bodymovin en dispositivos móviles. Este documento proporciona el método para adaptar la biblioteca de animación de Lottie a mini programas. Para obtener más información sobre Lottie, consulte el [documento oficial de Lottie](https://airbnb.io/lottie/#/) y [Características admitidas de Lottie](https://airbnb.io/lottie/#/supported-features). Para aprender la API admitida, consulte **[my.createLottieContext](/)**.

## Uso

### Código de ejemplo

### .axml
```html
<lottie
        assets-path="{{item.assetsPath}}" 
        autoplay="{{item.autoplay}}" 
        id="{{item.id}}"
        django-id="{{item.djangoId}}"
        path="{{item.path}}" 
        repeat-count="{{item.repeatCount}}"
        placeholder="{{item.placeholder}}"
        class="item">
</lottie>
```

### .js
```javascript
Page({
  data: {
    id : 'lottie-1',
    desc : 'Django auto play and low-end device optimized',
    autoplay : ```true```,
    djangoId：'https://gw.alipayobjects.com/os/basement_prod/1af0a9dc-110a-4a59-9084-a03d45686c8c.zip',
    placeholder:'https://gw.alipayobjects.com/mdn/rms_e345fe/afts/img/A*nu3GTaHqJ9AAAAAAAAAAAAAAARQnAQ524560995883_icon_S.png',
    optimize : ```true```,
    repeatCount : -1    
  },
  onReady() {
    var lottieContext = my.createLottieContext(elementId);
    lottieContext.play()
  }
})
```

### .acss
```css
.item{
  width: 700rpx;
  height: 400rpx;
}
```

### Parámetros

<table>
  <tr>
    <th>Parámetro</th>
    <th>Tipo de dato</th>
    <th>Requerido</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>autoplay</td>
    <td>Boolean</td>
    <td>No</td>
    <td>
        Especifica si la animación se reproduce automáticamente.
      ***Nota:*** El valor predeterminado es ```false```, lo que significa que la animación no se reproduce automáticamente.
    </td>
  </tr>
  <tr>
    <td>path</td>
    <td>String</td>
    <td>No</td>
    <td>Indica la ruta de los recursos de Lottie en el mini programa, que incluye la ruta del archivo JSON del extremo cercano (en el paquete) y el extremo lejano (web).
      ***Nota:*** Si se pasan tanto la ruta como el django-id, solo se especifica uno de ellos.</td>
  </tr>
  <tr>
    <td>speed</td>
    <td>Float</td>
    <td>No</td>
    <td>
        Indica la velocidad de la animación. Un número positivo indica la velocidad de avance rápido de la animación, mientras que un número negativo indica la velocidad de rebobinado de la animación.
        ***Nota:*** El valor predeterminado es ```1.0```, lo que significa que la animación se reproduce a velocidad normal.
    </td>
  </tr>
  <tr>
    <td>repeat-count</td>
    <td>Número</td>
    <td>No</td>
    <td>
      Indica la cantidad de veces que se repite una animación.
      * Número negativo: La animación se repite innumerables veces.
      * ```0```: La animación no se repite y solo se reproduce una vez.
      * ```1```: La animación se repite una vez y se reproduce dos veces.
      * ***Nota:*** El valor predeterminado es ```0```, lo que significa que la animación no se repite.
    </td>
  </tr>
  <tr>
    <td>auto-reverse</td>
    <td>Boolean</td>
    <td>No</td>
    <td>
      Especifica si la animación se reproduce automáticamente al revés.
      ***Nota:*** El valor predeterminado es ```false```, lo que significa que la animación no se reproduce automáticamente al revés.
    </td>
  </tr>
  <tr>
    <td>assets-path</td>
    <td>String</td>
    <td>No</td>
    <td>
        Indica la ruta del recurso. "/" significa que la ruta es el directorio raíz del mini programa.
    </td>
  </tr>
  <tr>
    <td>placeholder</td>
    <td>String</td>
    <td>Sí</td>
    <td>
      Indica la imagen predeterminada o la ruta de la imagen optimizada que se aplica cuando Lottie se está cargando o se carga incorrectamente.
      * Se admiten recursos locales, por ejemplo, '/image/lottie/lottie2_default.png'
      * Se admiten la ruta HTTP CDN y la ruta del extremo cercano.
    </td>
  </tr>
  <tr>
    <td>django-id</td>
    <td>String</td>
    <td>No</td>
    <td>Indica la ruta del recurso de Lottie en línea (la ruta del archivo ZIP del extremo lejano). Los componentes de Lottie realizarán validación MD5, descompresión, adquisición y otros procesos, y mostrarán imágenes predeterminadas (especificadas por el parámetro placeholder) durante el proceso.
      ***Nota:*** Si se pasan tanto la ruta como el django-id, solo se especifica uno de ellos.</td>
  </tr>
  <tr>
    <td>md5</td>
    <td>String</td>
    <td>No</td>
    <td>
      Indica la validación MD5 para recursos en línea.
      Por ejemplo, si el valor de django-Id es ```https://b.zip```, puede usar b.zip para la encriptación y obtener el valor MD5 ```"77c6c86fc89ba94cc0a9271b77ae77d2"```.
    </td>
  </tr>
  <tr>
    <td>optimize</td>
    <td>Boolean</td>
    <td>No</td>
    <td>
      En el caso de dispositivos de gama baja, la animación de Lottie se optimizará y se mostrará como la imagen predeterminada especificada por el parámetro placeholder.
      Cuando el valor de optimize es ```true``` y se pasa la imagen de marcador de posición, los dispositivos de gama baja solo mostrarán la imagen además de Lottie.
      Ejemplos de dispositivos de gama baja incluyen:
      * iOS: Menor o igual que iPhone 6 Plus.
      * Android: Capacidad de memoria inferior a 3GB.
      ***Nota:*** El valor predeterminado es ```false```, lo que significa que se muestra Lottie.
    </td>
  </tr>
  <tr>
    <td>onDataReady</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>Se activa cuando la descarga de datos y la creación de la vista están completas.</td>
  </tr>
  <tr>
    <td>onDataFailed</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>Se activa cuando falla la carga de datos.</td>
  </tr>
  <tr>
    <td>onAnimationStart</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>Se activa cuando comienza la animación.</td>
  </tr>
  <tr>
    <td>onAnimationEnd</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>Se activa cuando termina la animación.</td>
  </tr>
  <tr>
    <td>onAnimationRepeat</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>Se activa al final de una repetición de la animación.</td>
  </tr>
  <tr>
    <td>onAnimationCancel</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>Se activa cuando se cancela la animación.</td>
  </tr>
  <tr>
    <td>onDataLoadReady</td>
    <td>EventHandle</td>
    <td>-</td>
    <td>
        Se activa cuando la carga de datos está lista durante la parametrización y se espera que se pase el valor parametrizado.
    </td>
  </tr>
</table>

## Funciones

Cuando se integra Lottie en un mini programa, se admiten las siguientes funciones:

* [Manipulación de archivos de recursos](/): Se trata de manejar imágenes y recursos en Lottie.
* **Reproducción personalizada**: Permite lograr la capacidad de reproducción personalizada sin necesidad de un botón externo diseñado para controlar la reproducción.

### Manipulación de archivos de recursos

**Archivos de imagen**

La animación de Lottie proporcionada por diseñadores de UI puede incluir el directorio ```"images/"```, que contiene imágenes estáticas. En este escenario, hay dos formas de manejar los archivos de imagen:

* Comprimir el archivo completo en un archivo ZIP, luego proporcionar la ruta del archivo ZIP al parámetro _django-id_.
* Convertir una imagen a una URL base64 y embeberla en el archivo JSON, de modo que la ruta del archivo JSON se pase al parámetro _path_.

### Más información

## Pruebas en dispositivos virtuales

Para mejorar la precisión, intenta probar con varios modelos de dispositivos móviles de diferentes sistemas operativos.

## Desactivar animaciones en las opciones de desarrollador

Si las animaciones de Lottie se han cargado, puedes optar por desactivar las animaciones en las opciones de desarrollador. Una vez que las animaciones estén desactivadas, necesitarás reiniciar la aplicación o recargarla para habilitar Lottie nuevamente.

## Crear de nuevo la animación al ejecutar en primer plano

Para iOS, el sistema eliminará automáticamente las animaciones una vez que la aplicación se esté ejecutando en segundo plano, por lo que las animaciones deben crearse nuevamente una vez que la aplicación se esté ejecutando en primer plano.

## Identificadores de componentes Lottie únicos dentro de la aplicación

Se recomienda que los identificadores de componentes Lottie del mini programa sean únicos dentro de la aplicación. Para el mismo componente Lottie en diferentes páginas, el componente puede no ser destruido al cambiar de página. Por lo tanto, te recomendamos que no reutilices el mismo identificador de componente en diferentes páginas, por ejemplo, reutiliza el mismo identificador de botón de "Me gusta" en diferentes páginas de video.

## Compresión de archivos

Comprima el archivo directamente en el directorio actual, no en el directorio exterior. Actualmente, no se admite recorrer directorios para encontrar archivos JSON. Si no se encuentran archivos JSON en la primera capa después de la descompresión, se considerará ilegal.

La solución para admitir archivos JSON locales es la siguiente:

```js
//File path: mini.project.json
{
  "enableAppxNg": true,
  "miniprogramRoot": "dist",
  "scripts": {
  "beforePreview": "tnpm run build",
  "beforeUpload":"tnpm run build"
},
"include":["**/*.json"] //Add this line
}
```
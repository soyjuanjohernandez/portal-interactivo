---
sidebar_position: 1
---

Llama a esta API con el identificador Lottie *id* pasado para crear y devolver un objeto de contexto Lottie llamado *lottieContext*. El identificador Lottie es la propiedad ID que el desarrollador nombra libremente para identificar la etiqueta Lottie correspondiente. Puedes manipular un componente Lottie a través de *lottieContext*. Para obtener más información, consulta la documentación de Lottie.

## Uso

### Código de muestra

### .axml

Write the following code in the .axml file and assign a value to the Lottie *id*, for example, ``myLottie``:

```js title="axml"
<lottie
          assets-path="{{item.assetsPath}}" 
          autoplay="{{item.autoplay}}" 
          id="myLottie"
          django-id="{{item.djangoId}}"
          path="{{item.path}}" 
          repeat-count="{{item.repeatCount}}"
          placeholder="{{item.placeholder}}"
          class="item">
  </lottie>
```

### .js

Escriba el siguiente código en el archivo .js:

```js title="js"
var lottieContext = my.createLottieContext('myLottie');
lottieContext.play();
```

### Métodos de Lottiecontext

<table>
    <tr>
        <th>Método</th>
        <th>Parámetro</th>
        <th>Tipo de datos</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>play</td>
        <td>N/A</td>
        <td>-</td>
        <td>Comienza a jugar.</td>
    </tr>
    <tr>
        <td>stop</td>
        <td>N/A</td>
        <td>-</td>
        <td>Deja de jugar.</td>
    </tr>
    <tr>
        <td>pause</td>
        <td>N/A</td>
        <td>-</td>
        <td>Pausa.</td>
    </tr>
    <tr>
        <td>`setSpeed({value:$value})`</td>
        <td>$value: Number</td>
        <td>Float</td>
        <td>
            Establece la velocidad de la animación.Un número positivo indica la rápida velocidad de avance de la animación, mientras que un número negativo indica la velocidad de rebobinado de la animación. 
            Nota: El valor predeterminado es `` 1.0``, lo que significa que la animación se reproduce a una velocidad normal. 
            <></>
            Ejemplo: ``setSpeed({value:1.5})``
        </td>
    </tr>
    <tr>
        <td>`goToAndStop({value:$value})`</td>
        <td> $value: Number <br /> Value range [0.0~1.0] </td>
        <td>Float</td>
        <td>
            Mueve la animación al progreso objetivo especificado por el valor y lo detiene allí.
            <></>
            Ejemplo: `goToAndStop({value: 0.5]})`
        </td>
    </tr>
    <tr>
        <td>``goToAndPlay({value:$value})``</td>
        <td>$value: Number <br /> Value range [0.0~1.0]</td>
        <td>Float</td>
        <td>
            Mueve la animación al progreso objetivo especificado por el valor y se reproduce de ese progreso.
            <></>
            Ejemplo: ``goToAndPlay({value: 0.5]})``
         </td>
    </tr>
    <tr>
        <td>``playFromMinToMaxProgress({min:$min,max:$max})``</td>
        <td>$min: Number <br /> $max: Number <br /> Value range [0.0~1.0]</td>
        <td>Float</td>
        <td>
            Juega la animación del intervalo de progreso mínimo al máximo.
            <></>
            Ejemplo: ``playFromMinToMaxProgress({min:0.2,max:0.8})``
        </td>
    </tr>
    <tr>
        <td>``playFromMinToMaxFrame({min:$min,max:$max})``</td>
        <td>$min: Number <br /> $max: Number</td>
        <td>Integer</td>
        <td>Juega la animación del intervalo mínimo a máximo de cuadro.</td>
    </tr>
    <tr>
        <td>downgradeToPlaceholder</td>
        <td>N/A</td>
        <td>-</td>
        <td>De baja la animación de Lottie actual a la imagen predeterminada especificada por el parámetro del marcador de posición.</td>
    </tr>
</table>












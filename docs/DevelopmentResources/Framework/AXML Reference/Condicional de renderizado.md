# Condicionales para renderización

## a:if

En un ```axml```, ```a:if = "{{condición}}"``` se usa para decir si se debe representar un bloque de código.

```xml
<view a:if="{{condition}}"> True </view>
```

Además, ```a:elif``` y ```a:else``` se puede usar para agregar una rama de ```else```.

```xml
<view a:if="{{length > 5}}"> 1 </view>
<view a:elif="{{length > 2}}"> 2 </view>
<view a:else> 3 </view>
```

## block a:if

Porque ```a:if``` es un atributo de control, y solo puede ser utilizado en un componente. Para la representación condicional de múltiples componentes a la vez, se puede utilizar un componente ```<block/>``` para contener esos componentes, y agregar un ```a:if``` para controlarlos.

```xml
<block a:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

Nota: ```<Block/>``` no es un componente sino solo un elemento de embalaje. No representa nada en la página, pero acepta solo el atributo de control.

## Comparar a:if con hidden

- El template en ```a:if``` puede contener enlace de datos. Por lo tanto, cuando el valor de la condición de ```a:if``` cambia, el framework tiene un proceso de renderización local que se utiliza para asegurar la destrucción o el nuevo renderizado en caso de cambio. Además, cuando la condición de renderización inicial es falsa, el ```a:if``` no desencadena ninguna acción de renderizado y comienza la renderización local cuando la condición se vuelve verdadera por primera vez.

- Los controles ```hidden``` muestran/ocultan, pero el componente siempre se renderiza.

Generalmente, el ```a:if``` tiene un mayor sobrecosto cuando se cambia frecuentemente, mientras que el ```hidden``` tiene un mayor sobrecosto de renderizado inicial. Como resultado, el ```hidden``` es mejor para cambios frecuentes. Si las condiciones de ejecución no cambian mucho, se prefiere el ```a:if```.
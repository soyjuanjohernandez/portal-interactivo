---
sidebar_position: 3
---

# my.getAppIdSync

Use esta API para obtener la ID de la aplicación Mini del programa sincrónicamente.

## Código de muestra

```js
const appIdRes = my.getAppIdSync();
console.log(appIdRes.appId);
```

## Valor de retorno

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>appId</td>
        <td>String</td>
        <td>
            La identificación del mini programa actual.El resultado varía según si el programa MINI se lanza a Alipaycn: 
            - Si el mini programa se lanza a AlipayCN, el valor obtenido es la ID asignada por Alipaycn si necesita obtener la ID asignada por la plataforma Mini del programa, vaya a [Plataforma del mini del programa](/) y busque **ID Mini de programa** en la página de detalles del mini-programa.
            - Si el programa MINI no se lanza a AlipayCN, la identificación obtenida es la asignada por la plataforma Mini Programa.
        </td>
    </tr>
</table>

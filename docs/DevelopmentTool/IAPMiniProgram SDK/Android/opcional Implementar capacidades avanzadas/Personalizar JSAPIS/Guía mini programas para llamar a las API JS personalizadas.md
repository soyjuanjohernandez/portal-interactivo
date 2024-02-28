---
sidebar_position: 2
---


# Guía mini programas para llamar a JSAPIS personalizados

Los procedimientos para mini programas para llamar a JSAPIS personalizados son ligeramente diferentes de los utilizados para JSAPIS integrados originales.Si bien la plataforma Mini Program proporciona especificaciones estándar de JSAPI para este último, Super Apps debe crear su propia orientación para New JSAPIS o editar las especificaciones proporcionadas para JSAPIS existentes personalizados.Este tema ayuda a Super Apps con la documentación de Mini Programas al destacar las diferencias para llamar a los dos tipos de JSAPIS y proporcionar una plantilla de especificación JSAPI.


:::info[nota]
Para publicar su documentación, comuníquese con su arquitecto de soluciones para obtener ayuda.
:::


## Instrucciones para llamar a JSAPIS personalizados
A diferencia de llamar directamente a las API integradas originales, se requieren mini programas para realizar un paso adicional antes de utilizar API personalizadas. Consulte [Agregar la plataforma JSAPI en Mini](/) Program para obtener más detalles.

Además, el código para llamar a JSAPIS personalizado también es diferente. Consulte [Llamar al JSAPI personalizado](/) para más detalles.


## Agregue la plataforma JSAPI en Mini Program
Para acceder a los JSAPIS personalizados, los mini programas deben agregarlos en la plataforma Mini Program.Consulte las diferentes guías de acuerdo con su tipo de espacio de trabajo:

- Para el espacio de trabajo de inquilinos
- Para los espacios de trabajo de desarrolladores


## Para el espacio de trabajo del inquilino
Para el espacio de trabajo de los inquilinos, solo el administrador del espacio de trabajo puede realizar esta acción completando los siguientes pasos:

1. Inicie sesión en Mini Program Platform y navegue a **Mini Programs > Wallet**.
2. Encuentre y haga clic en el nombre del mini programa en el que necesita utilizar el JSAPI personalizado.
3. Haga clic en la pestaña **Features** y luego + **Add Feature**.Seleccione la función a la que pertenece el JSAPI personalizado y haga clic en **Add**. Luego, la función agregada se muestra en la lista de funciones y puede acceder a todos los JSAPI asociados.

:::info[Notas para su documentación:]
- En su especificación JSAPI, indique claramente el nombre de la característica donde pertenece el JSAPI personalizado, que es necesario para que los mini programas completen el Paso 3.
- Se recomienda que mencione los diferentes enfoques de llamadas de JSAPIS integrados originales y JSAPIS personalizados e incluya como A[gregar la plataforma JSAPI en Mini Program](/) las instrucciones de plataforma [JSAPI descripción general](/). Luego, consulte a él en la sección Antes de comenzar o Requisitos previos en cada especificación para el JSAPI personalizado.
:::


## Llame al JSAPI personalizado
Los programas mini pueden usar las siguientes dos declaraciones para llamar a los JSAPIS personalizados dependiendo del tipo JSAPI:

<table>
    <tr>
        <th>Declaración</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>my.apiName</td>
        <td>
        Se aplica solo a JSAPIS existentes personalizados.
        Este es un enfoque común para llamar a todos los jsapis incorporados porque sus nombres ya existen en el marco de mini del programa.
        </td>
    </tr>
    <tr>
        <td>my.call</td>
        <td>
            Se aplica tanto a JSAPIS existente personalizado como a New JSAPIS.
            Los mini programas pueden llamar a New JSAPIS con esta declaración solo porque los nombres de estos JSAPIS solo son conocidos por el cliente de Android de la Super App y no pueden ser reconocidos por Mini Program Framework.
            Para obtener más información sobre esta declaración, consulte [```my.call```](/).
        </td>
    </tr>
</table>



## my.call

### Declaración y parámetros

El siguiente código muestra cómo usar la declaración ```my.call```:

```
my.call(apiName, params, callback);
```

Aquí están los detalles de los parámetros utilizados en la declaración anterior:

<table>
    <tr>
        <th>Campo</th>
        <th>Tipo</th>
        <th>Requerido</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>apiName</td>
        <td>String</td>
        <td>M</td>
        <td>The name of the JSAPI.</td>
    </tr>
    <tr>
        <td>params</td>
        <td>JSONObject</td>
        <td>O</td>
        <td>
        Los parámetros de solicitud de la llamada JSAPI.Los mini programas deben especificar este parámetro si su JSAPI requiere cualquier parámetro de solicitud.
        </td>
    </tr>
    <tr>
        <td>callback</td>
        <td>function</td>
        <td>O</td>
        <td>
        La función de devolución de llamada de la llamada JSAPI.Los programas mini deben especificar este parámetro si la devolución de llamada de su JSAPI requiere más acciones de ellos.
        </td>
    </tr>
</table>


## Código de muestra
El siguiente código de muestra muestra cómo llamar a TestApi definido en [personalizar JSAPIS](/) con la declaración ```my.call```:

```js
my.call("testAPI", {
  intParam1 : 1,
  stringParam2 : "ABC",
  success: (res) => {
    },
  fail: (res) => {
    }
});
```


:::info[Notas para su documentación:]
- Para JSAPIS existentes personalizados, asegúrese de editar los detalles del parámetro y los códigos de muestra en las especificaciones proporcionadas.
- Si tiene múltiples aplicaciones Super y no todas admiten los JSAPIS personalizados, asegúrese de recordar a Mini programas que necesitan para usar la declaración ```my.call``` prudentemente en caso de cualquier error en una super aplicación que no implementa el JSAPI correspondiente.
:::


## Plantilla de especificación JSAPI
Puede escribir la especificación de los JSAPIS personalizados de acuerdo con la siguiente estructura:

- Un párrafo de apertura que describe brevemente la función del JSAPI.
- (opcional) **antes de comenzar** (o **requisitos previos**): los requisitos u otra información importante que los mini programas deben saber antes de llamar al JSAPI.
- **Parámetros de solicitud**: los detalles de los parámetros de solicitud del JSAPI.Puede proporcionar los detalles con la [tabla de parámetros de plantilla](/) a continuación.
- **Parámetros de respuesta**: los detalles de los parámetros de respuesta del JSAPI.Si no hay un parámetro de respuesta para su JSAPI, escriba "N/A" en esta sección. De lo contrario, puede proporcionar los detalles con la [tabla de parámetros de plantilla](/) a continuación.
- (opcional) **Códigos de error**: los detalles de los errores que el JSAPI devuelve a Mini programas.Puede proporcionar los detalles con la tabla de [plantilla códigos de error](/) a continuación.
- **Muestra**: un código de muestra del JSAPI.

## Tabla de parámetros de plantilla

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>El nombre del parámetro especificado.</td>
        <td>e.g., String</td>
        <td>La descripción del parámetro.</td>
        <td>M/O</td>
    </tr>
</table>


## Tabla de códigos de error de plantilla

<table>
    <tr>
        <th>Error code</th>
        <th>Error message</th>
        <th>Description</th>
        <th>Nuevas medidas</th>
    </tr>
    <tr>
        <td>El error especificado.</td>
        <td>El especificado errorMessage.</td>
        <td>La descripción del error.</td>
        <td>Las acciones que los mini programas deben realizar para resolver el error.</td>
    </tr>
</table>

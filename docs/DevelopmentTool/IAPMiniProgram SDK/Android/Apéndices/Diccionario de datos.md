---
sidebar_position: 1
---


# Diccionario de datos

## AppCategory

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>getName</td>
        <td>String</td>
        <td>El nombre de la categoría de primer nivel a la que pertenece un mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getIdentifier</td>
        <td>String</td>
        <td>La ID única asignada por Mini Program Platform para identificar la categoría de Mini Programa de primer nivel.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getCategory2</td>
        <td>String</td>
        <td>El nombre de la categoría secundaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategoryCode2</td>
        <td>String</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría de Mini del Programa secundario.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategory3</td>
        <td>String</td>
        <td>El nombre de la categoría terciaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategoryCode3</td>
        <td>String</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría Terciariaria Mini del Programa.</td>
        <td>O</td>
    </tr>
</table>


## AppInfo

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>getIdentifier</td>
        <td>String</td>
        <td>La ID única asignada por Mini Program Platform para identificar un mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getName</td>
        <td>String</td>
        <td>El mini nombre del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getSlogan</td>
        <td>String</td>
        <td>The mini program tagline.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getIconURL</td>
        <td>String</td>
        <td>La URL del logotipo de Mini Program.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getReleaseVersion</td>
        <td>String</td>
        <td>La versión de lanzamiento de un mini programa, que sigue al patrón major.minor.patch.timestamp.Por ejemplo, "1.0.1.1653969582308".</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getCategories</td>
        <td>Array```<AppCategory>```</td>
        <td>Las categorías a las que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
</table>

## AppInfosResult


<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>getTotalCount</td>
        <td>Integer</td>
        <td>La cantidad de los mini programas que coinciden con las condiciones de consulta especificadas.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getAppInfos</td>
        <td>Array```<AppInfo>```</td>
        <td>
        TLa lista de los mini programas.Se devuelve una matriz vacía cuando el valor de TotalCount es 0.
        Maximum size: 50 elements
        </td>
        <td>M</td>
    </tr>
</table>


## CategoryInfo

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>getCategory</td>
        <td>String</td>
        <td>El nombre de la categoría de primer nivel a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategoryId</td>
        <td>String</td>
        <td>La ID única asignada por Mini Program Platform para identificar la categoría de Mini Programa de primer nivel.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategory2</td>
        <td>String</td>
        <td>El nombre de la categoría secundaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategoryCode2</td>
        <td>String</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría de Mini del Programa secundario.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategory3</td>
        <td>String</td>
        <td>El nombre de la categoría terciaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>getCategoryCode3</td>
        <td>String</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría Terciariaria Mini del Programa.</td>
        <td>O</td>
    </tr>
</table>


## Error

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>errorCode</td>
        <td>Integer</td>
        <td>El código de error sobre la solicitud. Este parámetro se devuelve si la solicitud falla.Consulte la sección Códigos de error de cada especificación API para más detalles.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>errorMessage</td>
        <td>String</td>
        <td>El mensaje de error sobre la solicitud. Este parámetro se devuelve si la solicitud falla.Consulte la sección Códigos de error de cada especificación API para más detalles.</td>
        <td>O</td>
    </tr>
</table>


## FetchAppInfo

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>getDeveloperVersion</td>
        <td>String</td>
        <td>La versión de lanzamiento de un mini programa, que sigue al patrón Major.Minor.patch.Por ejemplo, "1.0.1".</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getAppId</td>
        <td>String</td>
        <td>La ID única asignada por Mini Program Platform para identificar un mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getAppName</td>
        <td>String</td>
        <td>El mini nombre del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getDeployVersion</td>
        <td>String</td>
        <td>La versión de lanzamiento de un mini programa, que sigue al patrón major.minor.patch.timestamp.Por ejemplo, "1.0.1.1653969582308".</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getAppSlogan</td>
        <td>String</td>
        <td>El slogan del mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getAppDesc</td>
        <td>String</td>
        <td>La descripción del mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getIconUrl</td>
        <td>String</td>
        <td>La URL del logotipo de Mini Program.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getStatus</td>
        <td>String</td>
        <td>
        El estado de lanzamiento de Mini del programa en su Super App.Los valores válidos son:
        - GRAY: El mini programa está en un lanzamiento en la escala de grises.
        - ONLINE: El mini programa se publica y se ejecuta en línea.
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>getPackageSize</td>
        <td>String</td>
        <td>El mini tamaño del paquete del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getCreateTime</td>
        <td>Long</td>
        <td>La fecha y la hora en que se crea un mini programa, que está en el formato de marca de tiempo.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>getCategoryInfos</td>
        <td>Array```<CategoryInfo>```</td>
        <td>Las categorías a las que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
</table>


## FetchAppsByIdsRequest

<table>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Default</th>
        <th>Description</th>
        <th>Required</th>
    </tr>
    <tr>
        <td>setQueryStartIndex</td>
        <td>Integer</td>
        <td>0</td>
        <td>El índice inicial para consultar la lista de mini programas. El índice está determinado por los parámetros especificados, setCategory y setAppidList.</td>
        <td>METRO</td>
    </tr>
    <tr>
        <td>setQuerySize</td>
        <td>Integer</td>
        <td>0</td>
        <td>La cantidad de los mini programas a consultar.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>setRelatedEnv</td>
        <td>String</td>
        <td>prod</td>
        <td>
        El tipo de entorno donde se lanzan mini programas.Los valores válidos son:
        - prod: El entorno de producción.
        - dev: El entorno de desarrollo.
        - test: El entorno de prueba.
        - sandbox: El entorno Sandbox.
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>setCategory</td>
        <td>String</td>
        <td>N/A</td>
        <td>La categoría a la que pertenecen mini programas.Especifique este parámetro con la ID de categoría única asignada por Mini Program Platform.Puede obtener la identificación de la consola de la plataforma Mini del programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>setAppIdList</td>
        <td>Array```<String>```</td>
        <td>N/A</td>
        <td>Especifique una lista de ID de mini del programa para determinar los Mini Programas para consultar.</td>
        <td>M</td>
    </tr>
</table>


## FetchAppRequestVO



<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Por defecto</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>setQueryStartIndex</td>
        <td>Integer</td>
        <td>```0```</td>
        <td>The starting index to query the mini program list. The index list is determined by the specified setSortDescriptor, setAscending, setRelatedEnv, and setCategory parameters.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>setQuerySize</td>
        <td>Integer</td>
        <td>```0```</td>
        <td>The quantity of the mini programs to be queried.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>setSortDescriptor</td>
        <td>String</td>
        <td>```APP_CREATE_TIME```</td>
        <td>
       La forma en que se clasifican los mini programas.Los valores válidos son:
        - ```APP_ID```: Ordenar por los Mini IDS del programa.
        - ```PUBLISH_TIME```: Ordene por el tiempo de lanzamiento del mini programa.
        - ```APP_NAME```: Ordenar por los mini nombres del programa.
        - ```APP_DESC```: Ordenar por las mini descripciones del programa.
        - ```APP_CREATE_TIME```: Ordenar por el tiempo de creación de mini del programa.
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>setAscending</td>
        <td>Boolean</td>
        <td>```true```</td>
        <td>
        Si ordenar mini programas en orden ascendente. El orden sigue la regla de clasificación utf8mb4_general_ci. Los valores válidos son:
        - ```true```: Ordenar en orden ascendente.
        - ```false```: Clasificar en orden descendente.
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>setRelatedEnv</td>
        <td>String</td>
        <td>```prod```</td>
        <td>
        El tipo de entorno donde se lanzan mini programas. Los valores válidos son:
        - ```prod```: El entorno de producción.
        - ```dev```: El entorno de desarrollo.
        - ```test```: El entorno de prueba.
        - ```sandbox```: El entorno Sandbox.
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>setCategory</td>
        <td>String </td>
        <td>N/A</td>
        <td>
        La categoría a la que pertenecen mini programas. Especifique este parámetro con la ID de categoría única asignada por Mini Program Platform. Puede obtener la identificación de la consola de la plataforma Mini del programa.
        </td>
        <td>O</td>
    </tr>
</table>


## FetchAppsResult

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>totalCount</td>
        <td>Integer</td>
        <td>La cantidad de los mini programas que coinciden con las condiciones de consulta especificadas.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>appInfoList</td>
        <td>Array```<FetchAppInfo>```</td>
        <td>
        La lista de los mini programas.Se devuelve una matriz vacía cuando el valor de TotalCount es ```0```.
        Maximum size: 50 elements
        </td>
        <td>M</td>
    </tr>
</table>

## GriverBridgeManifest

<table>
    <tr>
        <th>Nacionalidad</th>
        <th>Tipo</th>
        <th>Descripciónn</th>
    </tr>
    <tr>
        <td>clazz</td>
        <td>Class</td>
        <td>La clase de puente que implementa la clase.</td>
    </tr>
    <tr>
        <td>actionList</td>
        <td>List```<String>```</td>
        <td>La lista de nombres de JSAPI.</td>
    </tr>
</table>


## GriverContainerAPICallBack

<table>
    <tr>
        <th>Tipo de retorno</th>
        <th>Método</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>void</td>
        <td>error</td>
        <td>El método que se utiliza para devolver el código de error y el mensaje de error para la falla de lanzamiento de mini del programa. Vea [Error](/) para obtener más detalles.</td>
        <td>O</td>
    </tr>
</table>


## GriverDecodeUrlCallback

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>url</td>
        <td>String</td>
        <td>La URL decodificada.Se requiere este parámetro si la decodificación tiene éxito.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>errorCode</td>
        <td>Int</td>
        <td>El código de error.Se requiere este parámetro si la decodificación falla.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>errorMessage</td>
        <td>String</td>
        <td>El mensaje de error.Se requiere este parámetro si la decodificación falla.</td>
        <td>O</td>
    </tr>
</table>


## GriverEventManifest

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>handlerClassName</td>
        <td>String</td>
        <td>El nombre de clase de ruta completa del controlador de eventos que implementa la clase.</td>
    </tr>
    <tr>
        <td>eventFilters</td>
        <td>List ```<String>```</td>
        <td>La lista de eventos.</td>
    </tr>
    <tr>
        <td>scope</td>
        <td>```Class<? extends Scope>```</td>
        <td>
        El alcance del controlador de eventos. Debería ser ```{@link com.alibaba.ariver.app.api.Page}``` o ```{@link com.alibaba.ariver.app.api.App}```.
        </td>
    </tr>
</table>


## GriverExtensionManifest

<table>
    <tr>
        <th>Nacionalidad</th>
        <th>Tipo</th>
        <th>Descripciónn</th>
    </tr>
    <tr>
        <td>extensionClass</td>
        <td>```Class<? extends GriverExtension>```</td>
        <td>La clase de extensión que implementa la clase GriverExtension.</td>
    </tr>
    <tr>
        <td>extensionImpl</td>
        <td>GriverExtension</td>
        <td>El objeto de extensión que implementa la clase GriverExtension.</td>
    </tr>
</table>


## Parámetros de inicio
Los parámetros que se utilizan para personalizar el comportamiento de un mini programa durante el inicio.

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>query</td>
        <td>String</td>
        <td>Este parámetro se utiliza para recuperar información sobre el inicio actual y pasarla con pares de valor clave al Mini programa.</td>
    </tr>
    <tr>
        <td>showTitleBar</td>
        <td>Boolean</td>
        <td>
        Si mostrar la barra de título.Si no se especifica este parámetro, la barra de título se muestra por defecto.Los valores válidos son:
        - ```true```: Mostrar el título de título.
        - ```false```: Esconde la barra de título.
        </td>
    </tr>
    <tr>
        <td>showLoading</td>
        <td>Boolean</td>
        <td>
        Si se muestra la vista de carga en la página.Si no se especifica este parámetro, la vista se muestra por defecto.Los valores válidos son:
        - ```true```: Muestre la vista de carga.
        - ```false```:Ocultar la vista de carga.
        </td>
    </tr>
    <tr>
        <td>showTitleLoading</td>
        <td>Boolean</td>
        <td>
        Si mostrar la vista de carga en la barra de título.Si no se especifica este parámetro, la vista está oculta de forma predeterminada.Los valores válidos son:
        - ```true```: Muestre la vista de carga.
        - ```false```: Ocultar la vista de carga.
        </td>
    </tr>
    <tr>
        <td>titleColor</td>
        <td>Integer</td>
        <td>
        El color del texto del título de la página.Especifique este parámetro con los códigos de color en notación hexadecimal que sigue al modelo de color ARGB.
        </td>
    </tr>
    <tr>
        <td>titleBarColor</td>
        <td>Integer</td>
        <td>
        El color de la barra de título.Especifique este parámetro con los códigos de color en notación hexadecimal que sigue al modelo de color ARGB.
        </td>
    </tr>
    <tr>
        <td>backButtonColor</td>
        <td>Integer</td>
        <td>
        El color del botón de retroceso en la barra de título.Especifique este parámetro con los códigos de color en notación hexadecimal que sigue al modelo de color ARGB.
        </td>
    </tr>
    <tr>
        <td>screenOrientation</td>
        <td>String</td>
        <td>
        La orientación inicial de la pantalla de un mini programa cuando se lanza por primera vez.Si no se especifica este parámetro, el MINI programa se abre en la posición del retrato de forma predeterminada.Los valores válidos son:
            - ```landscape```: Abra un mini programa en la orientación del paisaje.
            - ```portrait```: Abra un mini programa en la orientación del retrato.
            - ```auto```: Abra un mini programa en la misma orientación que el dispositivo.
        </td>
    </tr>
    <tr>
        <td>titleAlignment</td>
        <td>String </td>
        <td>
        El posicionamiento horizontal del título de la página.Si no se especifica este parámetro, el título de la página está alineado a la izquierda de forma predeterminada.El valor válido es:
        ```auto```: Alinee el título de la página al centro.
        </td>
    </tr>
</table>













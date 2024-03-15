---
sidebar_position: 1
---


# Diccionario de datos

## GRVAppCategory

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>Name</td>
        <td>NSString *</td>
        <td>El nombre de la categoría de primer nivel a la que pertenece un mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Identifier</td>
        <td>NSString *</td>
        <td>La ID única asignada por Mini Program Platform para identificar la categoría de Mini Programa de primer nivel.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Category2</td>
        <td>NSString *</td>
        <td>El nombre de la categoría secundaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>CategoryCode2</td>
        <td>NSString *</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría de Mini del Programa secundario.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>Category3</td>
        <td>NSString *</td>
        <td>El nombre de la categoría terciaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>CategoryCode3</td>
        <td>NSString *</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría Terciariaria Mini del Programa.</td>
        <td>O</td>
    </tr>
</table>


## GRVAppInfo

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>Identifier</td>
        <td>NSString *</td>
        <td>La ID única asignada por Mini Program Platform para identificar un mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Name</td>
        <td>NSString *</td>
        <td>El mini nombre del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Slogan</td>
        <td>NSString *</td>
        <td>The mini program tagline.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>IconURL</td>
        <td>NSString *</td>
        <td>La URL del logotipo de Mini Program.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>ReleaseVersion</td>
        <td>NSString *</td>
        <td>La versión de lanzamiento de un mini programa, que sigue al patrón major.minor.patch.timestamp.Por ejemplo, "1.0.1.1653969582308".</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Categories</td>
        <td>`NSArray<GRVAppCategory *> *`</td>
        <td>Las categorías a las que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
</table>

## GRVAppInfosResult


<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>TotalCount</td>
        <td>NSInteger</td>
        <td>La cantidad de los mini programas que coinciden con las condiciones de consulta especificadas.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>AppInfos</td>
        <td>`NSArray<GRVAppInfo *> *`</td>
        <td>
        TLa lista de los mini programas.Se devuelve una matriz vacía cuando el valor de TotalCount es `0`.
        Maximum size: 50 elements
        </td>
        <td>M</td>
    </tr>
</table>


## GRVApplicationCategoryInfoModel

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>Category</td>
        <td>NSString *</td>
        <td>El nombre de la categoría de primer nivel a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>CategoryId</td>
        <td>NSString *</td>
        <td>La ID única asignada por Mini Program Platform para identificar la categoría de Mini Programa de primer nivel.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>Category2</td>
        <td>NSString *</td>
        <td>El nombre de la categoría secundaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>CategoryCode2</td>
        <td>NSString *</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría de Mini del Programa secundario.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>Category3</td>
        <td>NSString *</td>
        <td>El nombre de la categoría terciaria a la que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>CategoryCode3</td>
        <td>NSString *</td>
        <td>La ID única asignada por la plataforma Mini Program para identificar la categoría Terciariaria Mini del Programa.</td>
        <td>O</td>
    </tr>
</table>



## GRVApplicationInfoModel

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>AppId</td>
        <td>NSString *</td>
        <td>La ID única asignada por Mini Program Platform para identificar un mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>AppName</td>
        <td>NSString *</td>
        <td>El mini nombre del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>DeveloperVersion</td>
        <td>NSString *</td>
        <td>La versión de lanzamiento de un mini programa, que sigue al patrón Major.Minor.patch.Por ejemplo, "1.0.1".</td>
        <td>M</td>
    </tr>
    <tr>
        <td>DeployVersion</td>
        <td>NSString *</td>
        <td>La versión de lanzamiento de un mini programa, que sigue al patrón major.minor.patch.timestamp.Por ejemplo, "1.0.1.1653969582308".</td>
        <td>M</td>
    </tr>
    <tr>
        <td>AppSlogan</td>
        <td>NSString *</td>
        <td>El slogan del mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>AppDesc</td>
        <td>NSString *</td>
        <td>La descripción del mini programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>IconUrl</td>
        <td>NSString *</td>
        <td>La URL del logotipo de Mini Program.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Status</td>
        <td>NSString *</td>
        <td>
        El estado de lanzamiento de Mini del programa en su Super App.Los valores válidos son:
        - GRAY: El mini programa está en un lanzamiento en la escala de grises.
        - ONLINE: El mini programa se publica y se ejecuta en línea.
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>PackageSize</td>
        <td>NSString *</td>
        <td>El mini tamaño del paquete del programa.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>CreateTime</td>
        <td>NSTimeInterval</td>
        <td>La fecha y la hora en que se crea un mini programa, que está en el formato de marca de tiempo.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>category</td>
        <td>NSString *</td>
        <td>The name of the first-level category that a mini program belongs to.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>categoryId</td>
        <td>NSString *</td>
        <td>The unique ID that is assigned by Mini Program Platform to identify the first-level mini program category.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>CategoryInfos</td>
        <td>`NSArray<GRVApplicationCategoryInfoModel *> *`</td>
        <td>Las categorías a las que pertenece un mini programa.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>extendInfo</td>
        <td>NSDictionary *</td>
        <td>An extended attribute that is used to provide additional information if necessary.</td>
        <td>O</td>
    </tr>
</table>


## GRVFetchAppsParameter

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Por defecto</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>queryStartIndex</td>
        <td>NSUInteger</td>
        <td>0</td>
        <td>El índice inicial para consultar la lista de mini programas.La lista de índice está determinada por los parámetros SortDescriptor, Ascending y Categoría especificados.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>querySize</td>
        <td>NSUInteger</td>
        <td>0</td>
        <td>La cantidad de los mini programas a consultar.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>sortDescriptor</td>
        <td>NSString *</td>
        <td>`GRVAppCreateTimeSortDescriptorKey`</td>
        <td>
        La forma en que se clasifican los mini programas.Los valores válidos son:
            - `GRVAppIdSortDescriptorKey`: SOrdenado por los Mini IDS del programa.
            - `GRVPublishTimeSortDescriptorKey`: Ordenado por el mini tiempo de lanzamiento del programa.
            - `GRVAppNameSortDescriptorKey`: Ordenado por los mini nombres del programa.
            - `GRVAppDescSortDescriptorKey`: Ordenado por las mini descripciones del programa.
            - `GRVAppCreateTimeSortDescriptorKey`: Ordenado por el tiempo de creación de mini del programa.
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>ascending</td>
        <td>BOOL</td>
        <td>`YES`</td>
        <td>
        Si ordenar mini programas en orden ascendente.El orden sigue la regla de clasificación UTF8MB4_GENERAL_CI.Los valores válidos son:
        - `YES`: Sort in ascending order.
        - `NO`: Sort in descending order.
        </td>
        <td>O</td>
    </tr>
    <tr>
        <td>category</td>
        <td>NSString *</td>
        <td>N/A</td>
        <td>
        La categoría a la que pertenecen mini programas.Especifique este parámetro con la ID de categoría única asignada por Mini Program Platform.Puede obtener la identificación de la consola de la plataforma Mini del programa.
        </td>
        <td>O</td>
    </tr>
</table>




## GRVFetchAppsResponse


<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>success</td>
        <td>BOOL</td>
        <td>
        Si el resultado de la consulta es exitoso.Los valores válidos son:
        - `YES`: La consulta es exitosa.
        - `NO`: La consulta falla.
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>errorCode</td>
        <td>NSString *</td>
        <td>El código de error sobre la solicitud.Este parámetro se devuelve si la consulta falla.Consulte la sección Códigos de error de la API FetchApps para más detalles.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>errorMessage</td>
        <td>NSString *</td>
        <td>El mensaje de error sobre la solicitud.Este parámetro se devuelve si la consulta falla.Consulte la sección Códigos de error de la API FetchApps para más detalles.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>totalCount</td>
        <td>NSInteger</td>
        <td>La cantidad de los mini programas que coinciden con las condiciones de consulta especificadas.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>appInfoList</td>
        <td>```NSArray<GRVApplicationInfoModel*> *```</td>
        <td>
        La lista de los mini programas.Se devuelve una matriz vacía cuando el valor de TotalCount es 0.
        Tamaño máximo: 50 elementos
        </td>
        <td>O</td>
    </tr>
</table>


## GRVURLContentDecodeResponse

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerida</th>
    </tr>
    <tr>
        <td>success</td>
        <td>BOOL</td>
        <td>
        Si el decodeo tiene éxito.Los valores válidos son:
        - `YES`: La decodificación tiene éxito.
        - `NO`: El decodeo falla.
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>errorCode</td>
        <td>NSString *</td>
        <td>El código de error sobre la llamada API.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>errorMessage</td>
        <td>NSString *</td>
        <td>El mensaje de error sobre la llamada API.</td>
        <td>O</td>
    </tr>
    <tr>
        <td>decodedURL</td>
        <td>NSString *</td>
        <td>El contenido decodificado de la URL.</td>
        <td>O</td>
    </tr>
</table>


## Parámetros de inicio

<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>query</td>
        <td>NSString *</td>
        <td>Este parámetro se utiliza para recuperar información sobre el inicio actual y pasarla con pares de valor clave al Mini programa.</td>
    </tr>
    <tr>
        <td>showTitleBar</td>
        <td>BOOL</td>
        <td>
        Si mostrar la barra de título.Si no se especifica este parámetro, la barra de título se muestra por defecto.Los valores válidos son:
        - ```true```: Mostrar el título de título.
        - ```false```: Esconde la barra de título.
        </td>
    </tr>
    <tr>
        <td>showLoading</td>
        <td>BOOL</td>
        <td>
        Si se muestra la vista de carga en la página.Si no se especifica este parámetro, la vista se muestra por defecto.Los valores válidos son:
        - ```true```: Muestre la vista de carga.
        - ```false```:Ocultar la vista de carga.
        </td>
    </tr>
    <tr>
        <td>showTitleLoading</td>
        <td>BOOL</td>
        <td>
        Si mostrar la vista de carga en la barra de título.Si no se especifica este parámetro, la vista está oculta de forma predeterminada.Los valores válidos son:
        - ```true```: Muestre la vista de carga.
        - ```false```: Ocultar la vista de carga.
        </td>
    </tr>
    <tr>
        <td>titleColor</td>
        <td>NSInteger</td>
        <td>
        El color del texto del título de la página.Especifique este parámetro con los códigos de color en notación hexadecimal que sigue al modelo de color ARGB.
        </td>
    </tr>
    <tr>
        <td>titleBarColor</td>
        <td>NSInteger</td>
        <td>
        El color de la barra de título.Especifique este parámetro con los códigos de color en notación hexadecimal que sigue al modelo de color ARGB.
        </td>
    </tr>
    <tr>
        <td>backButtonColor</td>
        <td>NSInteger</td>
        <td>
        El color del botón de retroceso en la barra de título.Especifique este parámetro con los códigos de color en notación hexadecimal que sigue al modelo de color ARGB.
        </td>
    </tr>
    <tr>
        <td>screenOrientation</td>
        <td>NSString *</td>
        <td>
        La orientación inicial de la pantalla de un mini programa cuando se lanza por primera vez.Si no se especifica este parámetro, el MINI programa se abre en la posición del retrato de forma predeterminada.Los valores válidos son:
            - ```landscape```: Abra un mini programa en la orientación del paisaje.
            - ```portrait```: Abra un mini programa en la orientación del retrato.
            - ```auto```: Abra un mini programa en la misma orientación que el dispositivo.
        </td>
    </tr>
    <tr>
        <td>titleAlignment</td>
        <td>NSString * </td>
        <td>
        El posicionamiento horizontal del título de la página.Si no se especifica este parámetro, el título de la página está alineado a la izquierda de forma predeterminada.El valor válido es:
        ```auto```: Alinee el título de la página al centro.
        </td>
    </tr>
</table>



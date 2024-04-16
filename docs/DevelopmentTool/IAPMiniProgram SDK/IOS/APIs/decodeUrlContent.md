---
sidebar_position: 6
---

# decodeUrlContent

La API de **decodeUrlContent** es llamado por la super aplicación para decodificar la URL que se genera a partir de un código QR de promoción.

## Firma de método

```js
+ (void)decodeURLContent:(NSString *)urlContent completion:(void(^)(GRVURLContentDecodeResponse *response))completion;
```

## Parámetros de solicitud
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
        <td>El contenido de URL se decodificará.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>callback</td>
        <td>GriverDecodeUrlCallback</td>
        <td>El callback que se invoca después de que finaliza el proceso. Ver [finalización](/) para más detalles.</td>
        <td>M</td>
    </tr>
</table>

## completion
<table>
    <tr>
        <th>Nombre</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>response</td>
        <td>[GRVURLContentDecodeResponse](/)</td>
        <td>El resultado de decodificación.Se requiere este parámetro si la solicitud tiene éxito.</td>
        <td>O</td>
    </tr>
</table>


## Response parameters
N/A

## Ejemplo

El siguiente ejemplo muestra cómo llamar a la API **decodeUrlContent**.

```js
GRVURLContentDecoder.decodeURLContent(uriContent) { (response) in
   // Use la URL decodificada para abrir un mini programa
    if response.success, let decodedURL = response.decodedURL {
       // Al decodificar tiene éxito, puede abrir el decodeuri // como GRVAppContainerLaunch.sharedInstance().openApp(withUrl: decodedUR
        //L, extraParams: [:])
    } else {
       // Cuando falló la decodificación, puede abrir el uRicontent original
        //como GRVAppContainerLaunch.sharedInstance().openApp(withUrl: uriConten
        //t, extraParams: [:])
    }
}

```


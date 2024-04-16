---
sidebar_position: 5
---

# canDecodeUrlContent

La API de **canDecodeUrlContent** es llamado por la super aplicación para verificar si la URL puede decodificarse mediante una plataforma de Mini program.

## Firma de método
```js
+ (BOOL)canDecodeURLContent:(NSString *)urlContent;
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
        <td>El contenido de URL que se usa para verificar si la URL se puede decodificar.</td>
        <td>M</td>
    </tr>
</table>



## Parámetros de respuesta

<table>
    <tr>
        <th>Tipo</th>
        <th>Longitud</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>Boolean</td>
        <td>/</td>
        <td>Specify whether the user is in Alipay+ supported region.</td>
        <td>M</td>
    </tr>
</table>



## Sample

La siguiente muestra muestra cómo llamar a la API **canDecodeUrlContent**.

```js
BOOL canDecode = GRVURLContentDecoder.canDecodeURLContent(uriContent);
if(canDecode) {
    //following code is like
    //GRVURLContentDecoder.decodeURLContent(uriContent, completionHandler)
} else {
    //other logic 
}
```

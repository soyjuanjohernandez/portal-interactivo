---
sidebar_position: 6
---

# decodeUrlContent

La API de **decodeUrlContent** es llamado por la super aplicación para decodificar la URL que se genera a partir de un código QR de promoción.

## Firma de método

```js
public static synchronized void decodeUrlContent(final String url, final GriverDecodeUrlCallback callback);
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
        <td>El callback que se invoca después de que finaliza el proceso.</td>
        <td>M</td>
    </tr>
</table>


## Response parameters
N/A

## Ejemplo

El siguiente ejemplo muestra cómo llamar a la API decodeUrlContent.

```js
GriverDecodeUrl.decodeUrlContent(uriContent, new GriverDecodeUrlCallback() {
     @Override
     public void onDecodeSuccess(String url) {
        // Al decodificar, puede abrir la URL
        //Bundle bundle = new Bundle();
        //Griver.openUrl(activity, url, bundle);
     }

      @Override
      public void onDecodeFailed(int errorCode, String errorMessage) {
       // Cuando falló la decodificación, puede abrir el uRicontent original
        //Bundle bundle = new Bundle();
        //Griver.openUrl(activity, uriContent, bundle);
      }
});

```


---
sidebar_position: 5
---

# Abrir un miniprograma a través de un código QR promocional

Para fines promocionales, puede crear un código QR para su mini programa en la [plataforma Mini Program](/) y entregarlo a los consumidores.Sin embargo, el contenido del código QR promocional es una URL codificada, que no se puede utilizar para abrir un miniprograma directamente.

Para permitir que los consumidores abran un miniprograma a través de un código QR promocional, la plataforma Mini Program proporciona las siguientes dos API para Android IAPminiprogram SDK:

- **candecodeUrl**: llame a esta API para verificar si el código QR se puede decodificar.
- **decodeUrlContent**: llame a esta API para decodificar el código QR.

## procedimientos
## Paso 1: Verifique si el código QR se puede decodificar
Para verificar si el código QR puede ser decodificado por Android IAPMiniprogram SDK y utilizado para abrir un miniprograma, debe integrar la API de **canDecodeUrl**.

Para obtener más información, consulte  [canDecodeUrl](/).

## Paso 2: decodifique el código QR
Para los códigos QR que se pueden decodificar, debe integrar la API **decodeUrlContent** para decodificar.Si la decodificación tiene éxito, la URL decodificada se devuelve a través de OnDecodesuccess;De lo contrario, el resultado de decodificación se devuelve a través de *onDecodeFailed*.

Para obtener más información, consulte [decodeUrlContent](/).

## Paso 3: Abra el miniprograma
Después de recibir la URL decodificada, llame a la API de **openUrl** para abrir el miniprograma.

Para obtener más información, consulte [openUrl](/).

## Ejemplo
El siguiente ejemplo muestra cómo las API anteriores cooperan para decodificar un código QR promocional y abrir un mini-program.

```js
// El resultado de escaneo del código QR
String scanResult = ...
    
// Pruebe si la URL se puede decodificar
if (GriverDecodeUrl.canDecodeUrl(scanResult)) {
    GriverDecodeUrl.decodeUrlContent(scanResult, new GriverDecodeUrlCallback() {
        @Override
        public void onDecodeSuccess(String url) {
            // use the decoded URL to open a mini program
            Bundle bundle = new Bundle();
            Griver.openUrl(activity, url, bundle);
        }
        @Override
        public void onDecodeFailed(int errorCode, String errorMessage) {
            Log.d(TAG, "decodeUrlContent failed");
        }
    }
}
```
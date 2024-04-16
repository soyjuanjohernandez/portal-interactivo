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
Para verificar si el código QR puede ser decodificado por Android IAPMiniprogram SDK y utilizado para abrir un miniprograma, debe integrar la API de **[canDecodeUrl](/)**.

Para obtener más información, consulte  [canDecodeUrl](/).

## Paso 2: decodifique el código QR
Para los códigos QR que se pueden decodificar, debe integrar la API DecodeUrlContent para decodificar.

Para más información, consulte [DecodeUrlContent](/).

Para obtener más información, consulte [decodeUrlContent](/).

## Paso 3: Abra el miniprograma
Después de recibir la URL decodificada, llame a la API OpenAppwithurl para abrir el mini-programa.

Para obtener más información, consulte [openAppWithurl](/).
## Ejemplo
El siguiente ejemplo muestra cómo las API anteriores cooperan para decodificar un código QR promocional y abrir un mini-program.

```js
import ACGriverCore

// El resultado de escaneo del código QR
let scanResult: String = ... 

// Pruebe si la URL se puede decodificar
if (GRVURLContentDecoder.canDecodeURLContent(scanResult)) {
    GRVURLContentDecoder.decodeURLContent(scanResult) { (response) in
        // Use la URL decodificada para abrir un mini programa
        if response.success, let decodedURL = response.decodedURL {
            GRVAppContainerLaunch.sharedInstance().openApp(withUrl: decodedURL, extraParams: [:])
        } else {
            print(response.errorMessage ?? "")
        }
    }
}
```
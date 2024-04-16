---
sidebar_position: 1
---


# Escuchar los eventos Back press



Al escuchar los eventos de retroceso, la Super App puede capturar la acción del usuario de hacer clic en el botón Atrás y luego realizar las operaciones especificadas. Este tema presenta cómo escuchar el evento Mini Program Back Press mediante la implementación de la interfaz específica de IAPminiprogram SDK.

## procedimientos
Para escuchar el evento Mini Program Back Press, complete los siguientes pasos:

### Paso 1: Implementar GriverBackPressedPoToVentEvent
Implemente la interfaz **GriverBackPressedEppoTeVent** y escriba la lógica de su negocio en el método ```HandlebackPissed```. Consulte la siguiente muestra sobre cómo implementar la interfaz.



 ```js
public class DemoGriverBackPressedPointEvent implements GriverBackPressedPointEvent {
    
    @Override
    public void handleBackPressed(Page page) {
    }
    
    @Override
    public void onInitialized() {
        
    }
    
    @Override
    public void onFinalized() {
        
    }
}
 ```
Para obtener detalles sobre la interfaz, consulte [GriverBackPressedPoToPoTeVent](/).


### Paso 2: Registre el evento Press Back
Consulte el siguiente código de muestra para llamar a la API **registerEventHandler** para registrar el evento de retroceso después de inicializar el SDK.

```js
Griver.registerEventHandler(new GriverEventManifest(DemoGriverBackPressedPointEvent.class.getName(), Arrays.asList(GriverBackPressedPointEvent.class.getName()), App.class));
```

Para obtener más información sobre la API anterior, consulte ```registerEventHandler```.

## Interface

### GriverBackPressedPointEvent 

La definición de la interfaz **GriverBackPressedPointEvent** se muestra en los siguientes códigos:

```js
public interface GriverBackPressedPointEvent extends GriverEvent {
    void handleBackPressed(Page page);
}
```

## Método

|   Nombre del método   |                                 Descripción                                 |
|------------------|:---------------------------------------------------------------------------:|
| handleBackPressed|  The listening event is called when the title bar's back button is clicked. |


## Parámetros

| Nombre | Tipo | Longitud |               Descripción              | Requerida                  |
|--------|:----:|:------:|:--------------------------------------:|:----------------------------:|
|  Page  |  N/A |  Page  | The page instance of the mini program. |    M                         |
 





---
sidebar_position: 2
---



# Escuche los eventos de clics de Click Close

Los eventos de cierre de cierre se activan cuando el usuario hace clic en el botón Cerrar para cerrar emergentes, menús, etc. en el programa mini.Al escuchar los eventos de clics de cierre, la superplicación súper captura la acción del usuario de hacer clic en el botón Cerrar y luego realiza las operaciones especificadas.Este tema presenta cómo escuchar los eventos de Click Close Mini Program Integiendo el SDK.

## procedimientos

Para escuchar los eventos de clic de cierre de mini programa, complete los siguientes pasos:

## Paso 1: Implementar GriverTitleBarCloseClickEvent 

Implemente la interfaz GriverTitleBarCloseClickEvent y escriba su lógica comercial en el método ```onCloseClick```. Consulte la siguiente muestra sobre cómo implementar la interfaz.

```js
public class DemoGriverTitleBarCloseClickEvent implements GriverTitleBarCloseClickEvent {
    @Override
    public void onCloseClick() {
    }

    @Override
    public void onInitialized() {

    }

    @Override
    public void onFinalized() {

    }
}
```

Para obtener detalles sobre la interfaz, consulte [GrivertitleBarcloseClickevent](/).


## Paso 2: Registre eventos de clics de cierre

Consulte el siguiente código de muestra para llamar a la API de registerEventHandler para registrar el evento de clic de cierre después de inicializar el SDK:

```js
Griver.registerEventHandler(new GriverEventManifest(DemoGriverTitleBarCloseClickEvent.class.getName(), Arrays.asList(GriverTitleBarCloseClickEvent.class.getName()), App.class));
```

Para obtener más información sobre la API anterior, consulte [registerEventHandler](/).


## Interface
### GriverTitleBarCloseClickEvent
The definition of the GriverTitleBarClickEvent interface is shown in the following code:

```js
public interface GriverTitleBarCloseClickEvent extends GriverEvent {
    void onCloseClick();
}
```

### Método

|Nombre del método |Descripción |
|:----------|:----------:|
|onCloseClick|El evento de escucha se llama cuando se hace clic en el botón Cerrar de la barra de título.|


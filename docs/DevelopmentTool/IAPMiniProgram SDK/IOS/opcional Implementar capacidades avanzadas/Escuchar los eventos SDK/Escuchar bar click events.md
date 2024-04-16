---
sidebar_position: 1
---

# Escuchar bar click events
Al escuchar los eventos de clic de la barra de navegación, la super aplicación puede capturar la acción del usuario de hacer clic en la barra de navegación y luego realizar las operaciones especificadas.Este tema presenta cómo escuchar los eventos de clic de la barra de navegación integrando el SDK IAPminiprogram.
## procedimientos
Para escuchar los eventos de clic de la barra de navegación, complete los siguientes pasos:

### Paso 1: Implementar ```GRVNavigationBarEventDelegate```

Implemente el protocolo ```GRVNavigationBarEventDelegate```, e implementa los métodos definidos por el protocolo. Para obtener más información sobre el protocolo, consulte el [protocolo](/). Consulte el siguiente código de muestra para la implementación:


 ```js
class DemoNavigationBarEventDelegate: NSObject, GRVNavigationBarEventDelegate {
    // Se hizo clic en el elemento de la barra de navegación
    func navigationBarItemDidClicked(with type: GRVNavigationBarItemClickedType) {
        print("navigationBarUIElementDidClicked: \(type)")
    }
}
 ```
Para obtener detalles sobre la interfaz, consulte [GriverBackPressedPoToPoTeVent](/).


### Paso 2: Configurar GRVExtensionDelegate
Configure ```GRVExtensionDelegate``` configurando su clase ```navigationBarEventDelegate``` como ExtensionDelegate.```navigationBarEventDelegate```.Consulte la siguiente muestra para la configuración.

```js
Griver.registerEventHandler(new GriverEventManifest(DemoGriverBackPressedPointEvent.class.getName(), Arrays.asList(GriverBackPressedPointEvent.class.getName()), App.class));
```
## Protocol
```swift
typedef NS_ENUM(NSUInteger, GRVNavigationBarItemClickedType) {
    GRVNavigationBarItemClickedTypeUnknown = 0, 
    GRVNavigationBarItemClickedTypeBack,
    GRVNavigationBarItemClickedTypeCloseApp,
    GRVNavigationBarItemClickedTypeOptionMenu,
};

@protocol GRVNavigationBarEventDelegate <NSObject>

@optional

//El elemento de la barra de navegación hizo clic
- (void)navigationBarItemDidClickedWithType:(GRVNavigationBarItemClickedType)type;
@end
```
## Interface

navigationBarItemDidClickedWithType


<table>
    <tr>
        <th>Nombre</th>
        <th> Tipo</th>
        <th>Descripción</th>
        <th>Requerida</th>
    </tr>
    <tr>
        <td>type</td>
        <td>GRVNavigationBarItemClickedType</td>
        <td>
        El tipo de elemento de la barra de navegación que se hace clic. Los valores válidos son:
            - ```GRVNavigationBarItemClickedTypeUnknown```: IIndica que el usuario hace clic en un elemento UI que no puede ser identificado por la Super App.
            - ```GRVNavigationBarItemClickedTypeBack```: Indica que el usuario hace clic en un elemento UI en la barra de navegación para volver a la página anterior.
            - ```GRVNavigationBarItemClickedTypeCloseApp```: Indica que el usuario hace clic en un elemento UI en la barra de navegación para cerrar el mini programa actual.
            - ```GRVNavigationBarItemClickedTypeOptionMenu```: Indica que el usuario hace clic en un elemento UI en la barra de navegación para mostrar el panel de menú de opción.
        </td>
        <td>M</td>
    </tr>
</table>

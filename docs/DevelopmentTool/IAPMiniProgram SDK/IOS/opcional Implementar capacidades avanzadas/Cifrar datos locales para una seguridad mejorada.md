---
sidebar_position: 6
---


# Cifrar datos locales para una seguridad mejorada

Por defecto, IAPminiprogram SDK almacena datos de JSAPIS de almacenamiento local ([my.getStorage](/), [my.getStorageSync](/), [my.setStorage](/), and [my.setStorageSync](/))en texto sin formato. Para mejorar la seguridad de los datos locales, la Super App puede personalizar el proceso de cifrado y descifrado utilizando la interfaz ```GRVSecureLocalStorageEncryptorProtocol```. Este tema lo guía a través de los pasos y proporciona códigos de muestra para el cifrado y descifrado de datos locales.

## procedimientos
Tome los siguientes dos pasos para personalizar el proceso de cifrado y descifrado de los datos locales:

## Paso 1: Implementar ```GRVSecureLocalStorageEncryptorProtocol``` 
Crear una implementación del protocolo ```GRVSecureLocalStorageEncryptorProtocol```. Dentro de esta implementación, personalice la lógica de cifrado y descifrado con su algoritmo deseado utilizando los métodos ``encrypt``: y ```decrypt:identifier:```  respectivamente. Consulte el siguiente código de muestra para la implementación:

```js
@implementation _Your_Impl_GRVSecureLocalStorageEncryptorProtocol

- (NSString *)identifier {
    // Devolver un identificador que represente al encriptador
}

- (nonnull NSString *)encrypt:(nonnull NSString *)data { 
    // Implementar la lógica para cifrar datos
}

- (NSString * _Nullable)decrypt:(nonnull NSString *)data identifier:(nonnull NSString *)identifier {
    // Implementar la lógica para descifrar datos
}

@end
```

Para obtener más información sobre este protocolo, consulte [```GRVSecureLocalStorageEncryptorProtocol```](/). Al escribir la lógica de cifrado y descifrado de datos, también puede usar los métodos de instancia pública proporcionados por IAPSecurityGuardLite para implementar el algoritmo AES256.Consulte el siguiente código de muestra para la implementación:

```js
import IAPSecurityGuardLite

class _Your_Impl_GRVSecureLocalStorageEncryptorProtocol: NSObject, GRVSecureLocalStorageEncryptorProtocol {

    var identifier: String = "_Your_Encryptor_Identifier_"

        func encrypt(_ data: String) -> String {
        guard let result = try? IAPSecurityGuardLiteService().encrypt(data) else {
            // Manejar errores aquí
            return data
            }

        return result
        }

    func decrypt(_ data: String, identifier: String) -> String? {
        guard let result = try? IAPSecurityGuardLiteService().decrypt(data) else {
            // Manejar errores aquí
            return nil
            }

        return result
        }

}
```

## Paso 2: Configurar encryptorForLocalStorage
Después de la lógica de inicialización de SDK, configure la propiedad ```encryptorForLocalStorage```  y registre el protocolo ```GRVSecureLocalStorageEncryptorProtocol``` implementado en el SDK con el siguiente código de muestra:

```js
GRVAppContainerLaunch.sharedInstance.extensionDelegate.encryptorForLocalStorage = _Your_Impl_GRVSecureLocalStorageEncryptorProtocol
```

## Interfaces

## GRVSecureLocalStorageEncryptorProtocol
El Protocolo ```GRVSecureLocalStorageEncryptorProtocol``` se utiliza para personalizar el proceso de cifrado y descifrado de los datos locales. El siguiente código muestra la definición de este protocolo:

```js
@protocol GRVSecureLocalStorageEncryptorProtocol <NSObject>

@required

@property (nonatomic, copy, readonly) NSString *identifier;

- (NSString *)encrypt:(NSString *)data;

- (NSString * _Nullable)decrypt:(NSString *)data identifier: (NSString *)identifier;

@end
```
Como se muestra en la definición del protocolo, el Protocolo ```GRVSecureLocalStorageEncryptorProtocol``` proporciona las siguientes propiedades y métodos:

- Consulte la siguiente tabla para la información de la propiedad:

<table>
    <tr>
        <th>Método</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>getIdentifier</td>
        <td>TEl método que la super aplicación utiliza para obtener un identificador predefinido que representa el encriptador.No establezca el valor devuelto en NULL porque se requiere en el método ```decrypt```  para determinar si los datos están encriptados y la lógica de descifrado debe ejecutarse.</td>
        <td>M</td>
    </tr>
   
</table>

- Consulte la siguiente tabla para obtener la información del método:

<table>
    <tr>
        <th>Método</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>encrypt:</td>
        <td>
        El método que la super aplicación utiliza para cifrar los datos dados con un algoritmo específico.Establezca el valor devuelto en lo siguiente:
        Los datos cifrados si el cifrado tiene éxito.
        - ```nil``` Si el cifrado falla.
        - Para obtener más información, consulte [```encrypt```](/):.
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>decrypt:identifier:</td>
        <td>
        El método que utiliza la super aplicación para descifrar los datos dados con el mismo algoritmo utilizado para el cifrado.Establezca el valor devuelto en lo siguiente:
        - Los datos descifrados si el descifrado tiene éxito.
        - ```nil``` Si el descifrado falla.
        Para obtener más información, consulte decrypt:identifier:.
        </td>
        <td>M</td>
    </tr>
  
</table>





## encrypt
El método ```encrypt``` tiene el siguiente parámetro de entrada:


<table>
    <tr>
        <th>Campo</th>
        <th>Tipo de datos</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>data</td>
        <td>NSString *</td>
        <td>Datos para estar encriptadosed.</td>
        <td>M</td>
    </tr>
</table


## decrypt:identifier:
El método ```decrypt:identifier:``` tiene los siguientes parámetros de entrada:

<table>
    <tr>
        <th>Campo</th>
        <th>Tipo de datos</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>data</td>
        <td>NSString *</td>
        <td>Datos a descifrar.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>identifier</td>
        <td>NSString *</td>
        <td>El identificador que especifica la superpección para representar al encriptador.Este identificador debe coincidir con el valor de la propiedad ```identifier``` para ejecutar la lógica de descifrado.Si los valores no coinciden, return ```nil``` a través del método ```decrypt:identifier:``` .</td>
        <td>M</td>
    </tr>
</table>

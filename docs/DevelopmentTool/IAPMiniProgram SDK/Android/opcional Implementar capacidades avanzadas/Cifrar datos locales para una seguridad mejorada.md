---
sidebar_position: 6
---


# Cifrar datos locales para una seguridad mejorada

Por defecto, IAPminiprogram SDK almacena datos de JSAPIS de almacenamiento local ([my.getStorage](/), [my.getStorageSync](/), [my.setStorage](/), and [my.setStorageSync](/))en texto sin formato.Para mejorar la seguridad de los datos locales, la Super App puede personalizar el proceso de cifrado y descifrado utilizando la interfaz ```GriversecurityExtension```. Este tema lo guía a través de los pasos y proporciona códigos de muestra para el cifrado y descifrado de datos locales.

## procedimientos
Tome los siguientes dos pasos para personalizar el proceso de cifrado y descifrado de los datos locales:

## Paso 1: Implementar GriverSecurityExtension 
Cree una clase que implementa la interfaz GriverSecurityExtension. Dentro de esta clase, personalice la lógica de cifrado y descifrado con su algoritmo deseado utilizando los métodos ```encrypt``` y ```decrypt``` respectivamente.Consulte el siguiente código de muestra para la implementación:

```js
public class YourExtensionImpl implements GriverSecurityExtension {
    
    private static final String PREFIX = "_com_grv_";
    
    @Override
    public String getIdentifier() {
        return PREFIX;
    }

    @Override
    public String encrypt(String data) {
        //Implement the logic to encrypt data
        String encryptedData = ...;
        return encryptedData;
    }

    @Override
    public String decrypt(String data, String identifier) {
        //Implement the logic to decrypt data
        String decryptedData = ...;
        return decryptedData;
    }
}
```

Para obtener más información sobre esta interfaz, consulte [```GriverSecurityExtension```](/).Al escribir la lógica de cifrado y descifrado de datos, también puede usar los métodos de instancia pública proporcionados por SecurityGuardLitManager para implementar el algoritmo AES256.Consulte el siguiente código de muestra para la implementación:

```js

package com.alibaba.griver.base.common.security;

import android.text.TextUtils;

import com.alibaba.griver.api.common.security.GriverSecurityExtension;
import com.alibaba.griver.base.common.env.GriverEnv;
import com.alibaba.griver.base.common.utils.ReflectUtils;
import com.alipay.plus.security.lite.SecurityGuardLiteManager;

public class YourExtensionImpl implements GriverSecurityExtension {
    
    private static final String PREFIX = "GriverDataSecurityExtension";


    @Override
    public String getIdentifier() {
        return PREFIX;
    }

    @Override
    public String encrypt(String data) {
        if (TextUtils.isEmpty(data)) {
            return data;
        }
        if (isSecurityLiteLibExist()) {
            try {
                String encryptedData = SecurityGuardLiteManager.getInstance(applicationContext).encrypt(data);
                return encryptedData;
            } catch (Throwable e) {
                return null;
            }
        }
        return data;
    }

    @Override
    public String decrypt(String data, String identifier) {
        if (!TextUtils.equals(getIdentifier(), identifier)) {
            return null;
        }
        if (TextUtils.isEmpty(data)) {
            return data;
        }
        if (isSecurityLiteLibExist()) {
            try {
                String decryptedData = SecurityGuardLiteManager.getInstance(GriverEnv.getApplicationContext()).decrypt(data);
                return decryptedData;
            } catch (Throwable e) {
                return null;
            }
        }
        return data;
    }

    private boolean isSecurityLiteLibExist() {
        return ReflectUtils.classExist("com.alipay.plus.security.lite.SecurityGuardLiteManager");
    }

}
```

Paso 2: Registre GriverSecurityExtension
Después de la lógica de inicialización de SDK, llame a la API de **registerExtension**  de registro para registrar la interfaz de ```GriverSecurityExtension``` implementada al SDK con el siguiente código de muestra:

```js
InitConfig initConfig = new InitConfig;
//....
IAPConnect.init(context, initConfig, new InitCallback() {
    @Override
    public void onSuccess() {
        //Registre la extensión después de una inicial exitosa
        YourExtensionImpl extension = new YourExtensionImpl();
        Griver.registerExtension(
                new GriverExtensionManifest(GriverSecurityExtension.class, extension));
    }

    @Override
    public void onFailure(final InitErrorCode errorCode, final String errorMessage) {

    }
});

```
Para obtener más información sobre la API de **registerExtension**, consulte [registerExtension](/).

## Interfaces

## GriverSecurityExtension
La interfaz ```GriverSecurityExtension``` se utiliza para personalizar el proceso de cifrado y descifrado de datos locales.El siguiente código muestra la definición de esta interfaz:

```js
public interface GriverSecurityExtension extends GriverExtension {
    String getIdentifier();
    String encrypt(String data);
    String decrypt(String data, String identifier);
}
```
Como se muestra en la definición de la interfaz, la interfaz ```GriverSecurityExtension``` proporciona los siguientes métodos:

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
    <tr>
        <td>encrypt</td>
        <td>
        El método que la super aplicación utiliza para cifrar los datos dados con un algoritmo específico.Establezca el valor devuelto en lo siguiente:
            - Los datos cifrados si el cifrado tiene éxito.
            - ```null``` Si el cifrado falla.
        Para obtener más información, consulte [```encrypt```](/).
        </td>
        <td>M</td>
    </tr>
    <tr>
        <td>decrypt</td>
        <td>
       El método que utiliza la super aplicación para descifrar los datos dados con el mismo algoritmo utilizado para el cifrado.Establezca el valor devuelto en lo siguiente:
        - Los datos descifrados si el descifrado tiene éxito.
        - ```null``` Si el descifrado falla.
        Para obtener más información, consulte [```decrypt```](/).
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
        <td>String</td>
        <td>Datos a encriptar.</td>
        <td>M</td>
    </tr>
</table>


## decrypt
El método decrypt tiene los siguientes parámetros de entrada:

<table>
    <tr>
        <th>Campo</th>
        <th>Tipo de datos</th>
        <th>Descripción</th>
        <th>Requerido</th>
    </tr>
    <tr>
        <td>data</td>
        <td>String</td>
        <td>Datos a descifrar.</td>
        <td>M</td>
    </tr>
    <tr>
        <td>identifier</td>
        <td>String</td>
        <td>El identificador que especifica la superpección para representar al encriptador.Este identificador debe coincidir con el valor devuelto del método ```getIdentifier``` para ejecutar la lógica de descifrado.Si los valores no coinciden, regrese nulo a través del método Decrypt.</td>
        <td>M</td>
    </tr>
</table>

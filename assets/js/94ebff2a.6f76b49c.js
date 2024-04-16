"use strict";(self.webpackChunkportal_interactivo=self.webpackChunkportal_interactivo||[]).push([[4358],{24935:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>d,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=a(74848),n=a(28453);const i={sidebar_position:6},t="Cifrar datos locales para una seguridad mejorada",c={id:"DevelopmentTool/IAPMiniProgram SDK/IOS/opcional Implementar capacidades avanzadas/Cifrar datos locales para una seguridad mejorada",title:"Cifrar datos locales para una seguridad mejorada",description:"Por defecto, IAPminiprogram SDK almacena datos de JSAPIS de almacenamiento local (my.getStorage, my.getStorageSync, my.setStorage, and my.setStorageSync)en texto sin formato. Para mejorar la seguridad de los datos locales, la Super App puede personalizar el proceso de cifrado y descifrado utilizando la interfaz `GRVSecureLocalStorageEncryptorProtocol`. Este tema lo gu\xeda a trav\xe9s de los pasos y proporciona c\xf3digos de muestra para el cifrado y descifrado de datos locales.",source:"@site/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/opcional Implementar capacidades avanzadas/Cifrar datos locales para una seguridad mejorada.md",sourceDirName:"DevelopmentTool/IAPMiniProgram SDK/IOS/opcional Implementar capacidades avanzadas",slug:"/DevelopmentTool/IAPMiniProgram SDK/IOS/opcional Implementar capacidades avanzadas/Cifrar datos locales para una seguridad mejorada",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/opcional Implementar capacidades avanzadas/Cifrar datos locales para una seguridad mejorada",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"docsSidebar",previous:{title:"Abrir un miniprograma a trav\xe9s de un c\xf3digo QR promocional",permalink:"/portal-interactivo/docs/DevelopmentTool/IAPMiniProgram SDK/IOS/opcional Implementar capacidades avanzadas/Abra un miniprograma a trav\xe9s de un c\xf3digo QR promocional"},next:{title:"Configuraci\xf3n general",permalink:"/portal-interactivo/docs/category/configuraci\xf3n-general-1"}},d={},l=[{value:"procedimientos",id:"procedimientos",level:2},{value:"Paso 1: Implementar <code>GRVSecureLocalStorageEncryptorProtocol</code>",id:"paso-1-implementar-grvsecurelocalstorageencryptorprotocol",level:2},{value:"Paso 2: Configurar encryptorForLocalStorage",id:"paso-2-configurar-encryptorforlocalstorage",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"GRVSecureLocalStorageEncryptorProtocol",id:"grvsecurelocalstorageencryptorprotocol",level:2},{value:"encrypt",id:"encrypt",level:2},{value:"decrypt:identifier:",id:"decryptidentifier",level:2}];function s(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"cifrar-datos-locales-para-una-seguridad-mejorada",children:"Cifrar datos locales para una seguridad mejorada"}),"\n",(0,o.jsxs)(r.p,{children:["Por defecto, IAPminiprogram SDK almacena datos de JSAPIS de almacenamiento local (",(0,o.jsx)(r.a,{href:"/",children:"my.getStorage"}),", ",(0,o.jsx)(r.a,{href:"/",children:"my.getStorageSync"}),", ",(0,o.jsx)(r.a,{href:"/",children:"my.setStorage"}),", and ",(0,o.jsx)(r.a,{href:"/",children:"my.setStorageSync"}),")en texto sin formato. Para mejorar la seguridad de los datos locales, la Super App puede personalizar el proceso de cifrado y descifrado utilizando la interfaz ",(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"}),". Este tema lo gu\xeda a trav\xe9s de los pasos y proporciona c\xf3digos de muestra para el cifrado y descifrado de datos locales."]}),"\n",(0,o.jsx)(r.h2,{id:"procedimientos",children:"procedimientos"}),"\n",(0,o.jsx)(r.p,{children:"Tome los siguientes dos pasos para personalizar el proceso de cifrado y descifrado de los datos locales:"}),"\n",(0,o.jsxs)(r.h2,{id:"paso-1-implementar-grvsecurelocalstorageencryptorprotocol",children:["Paso 1: Implementar ",(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"})]}),"\n",(0,o.jsxs)(r.p,{children:["Crear una implementaci\xf3n del protocolo ",(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"}),". Dentro de esta implementaci\xf3n, personalice la l\xf3gica de cifrado y descifrado con su algoritmo deseado utilizando los m\xe9todos ",(0,o.jsx)(r.code,{children:"encrypt"}),": y ",(0,o.jsx)(r.code,{children:"decrypt:identifier:"}),"  respectivamente. Consulte el siguiente c\xf3digo de muestra para la implementaci\xf3n:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"@implementation _Your_Impl_GRVSecureLocalStorageEncryptorProtocol\r\n\r\n- (NSString *)identifier {\r\n    // Devolver un identificador que represente al encriptador\r\n}\r\n\r\n- (nonnull NSString *)encrypt:(nonnull NSString *)data { \r\n    // Implementar la l\xf3gica para cifrar datos\r\n}\r\n\r\n- (NSString * _Nullable)decrypt:(nonnull NSString *)data identifier:(nonnull NSString *)identifier {\r\n    // Implementar la l\xf3gica para descifrar datos\r\n}\r\n\r\n@end\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Para obtener m\xe1s informaci\xf3n sobre este protocolo, consulte ",(0,o.jsx)(r.a,{href:"/",children:(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"})}),". Al escribir la l\xf3gica de cifrado y descifrado de datos, tambi\xe9n puede usar los m\xe9todos de instancia p\xfablica proporcionados por IAPSecurityGuardLite para implementar el algoritmo AES256.Consulte el siguiente c\xf3digo de muestra para la implementaci\xf3n:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:'import IAPSecurityGuardLite\r\n\r\nclass _Your_Impl_GRVSecureLocalStorageEncryptorProtocol: NSObject, GRVSecureLocalStorageEncryptorProtocol {\r\n\r\n    var identifier: String = "_Your_Encryptor_Identifier_"\r\n\r\n        func encrypt(_ data: String) -> String {\r\n        guard let result = try? IAPSecurityGuardLiteService().encrypt(data) else {\r\n            // Manejar errores aqu\xed\r\n            return data\r\n            }\r\n\r\n        return result\r\n        }\r\n\r\n    func decrypt(_ data: String, identifier: String) -> String? {\r\n        guard let result = try? IAPSecurityGuardLiteService().decrypt(data) else {\r\n            // Manejar errores aqu\xed\r\n            return nil\r\n            }\r\n\r\n        return result\r\n        }\r\n\r\n}\n'})}),"\n",(0,o.jsx)(r.h2,{id:"paso-2-configurar-encryptorforlocalstorage",children:"Paso 2: Configurar encryptorForLocalStorage"}),"\n",(0,o.jsxs)(r.p,{children:["Despu\xe9s de la l\xf3gica de inicializaci\xf3n de SDK, configure la propiedad ",(0,o.jsx)(r.code,{children:"encryptorForLocalStorage"}),"  y registre el protocolo ",(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"})," implementado en el SDK con el siguiente c\xf3digo de muestra:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"GRVAppContainerLaunch.sharedInstance.extensionDelegate.encryptorForLocalStorage = _Your_Impl_GRVSecureLocalStorageEncryptorProtocol\n"})}),"\n",(0,o.jsx)(r.h2,{id:"interfaces",children:"Interfaces"}),"\n",(0,o.jsx)(r.h2,{id:"grvsecurelocalstorageencryptorprotocol",children:"GRVSecureLocalStorageEncryptorProtocol"}),"\n",(0,o.jsxs)(r.p,{children:["El Protocolo ",(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"})," se utiliza para personalizar el proceso de cifrado y descifrado de los datos locales. El siguiente c\xf3digo muestra la definici\xf3n de este protocolo:"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-js",children:"@protocol GRVSecureLocalStorageEncryptorProtocol <NSObject>\r\n\r\n@required\r\n\r\n@property (nonatomic, copy, readonly) NSString *identifier;\r\n\r\n- (NSString *)encrypt:(NSString *)data;\r\n\r\n- (NSString * _Nullable)decrypt:(NSString *)data identifier: (NSString *)identifier;\r\n\r\n@end\n"})}),"\n",(0,o.jsxs)(r.p,{children:["Como se muestra en la definici\xf3n del protocolo, el Protocolo ",(0,o.jsx)(r.code,{children:"GRVSecureLocalStorageEncryptorProtocol"})," proporciona las siguientes propiedades y m\xe9todos:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Consulte la siguiente tabla para la informaci\xf3n de la propiedad:"}),"\n"]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"M\xe9todo"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"getIdentifier"}),(0,o.jsxs)("td",{children:["TEl m\xe9todo que la super aplicaci\xf3n utiliza para obtener un identificador predefinido que representa el encriptador.No establezca el valor devuelto en NULL porque se requiere en el m\xe9todo ",(0,o.jsx)(r.code,{children:"decrypt"}),"  para determinar si los datos est\xe1n encriptados y la l\xf3gica de descifrado debe ejecutarse."]}),(0,o.jsx)("td",{children:"M"})]})]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Consulte la siguiente tabla para obtener la informaci\xf3n del m\xe9todo:"}),"\n"]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"M\xe9todo"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"encrypt:"}),(0,o.jsxs)("td",{children:[(0,o.jsx)(r.p,{children:"El m\xe9todo que la super aplicaci\xf3n utiliza para cifrar los datos dados con un algoritmo espec\xedfico.Establezca el valor devuelto en lo siguiente:\r\nLos datos cifrados si el cifrado tiene \xe9xito."}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"nil"})," Si el cifrado falla."]}),"\n",(0,o.jsxs)(r.li,{children:["Para obtener m\xe1s informaci\xf3n, consulte ",(0,o.jsx)(r.a,{href:"/",children:(0,o.jsx)(r.code,{children:"encrypt"})}),":."]}),"\n"]})]}),(0,o.jsx)("td",{children:"M"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"decrypt:identifier:"}),(0,o.jsxs)("td",{children:[(0,o.jsx)(r.p,{children:"El m\xe9todo que utiliza la super aplicaci\xf3n para descifrar los datos dados con el mismo algoritmo utilizado para el cifrado.Establezca el valor devuelto en lo siguiente:"}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Los datos descifrados si el descifrado tiene \xe9xito."}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.code,{children:"nil"})," Si el descifrado falla.\r\nPara obtener m\xe1s informaci\xf3n, consulte decrypt:identifier:."]}),"\n"]})]}),(0,o.jsx)("td",{children:"M"})]})]}),"\n",(0,o.jsx)(r.h2,{id:"encrypt",children:"encrypt"}),"\n",(0,o.jsxs)(r.p,{children:["El m\xe9todo ",(0,o.jsx)(r.code,{children:"encrypt"})," tiene el siguiente par\xe1metro de entrada:"]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Campo"}),(0,o.jsx)("th",{children:"Tipo de datos"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"data"}),(0,o.jsx)("td",{children:"NSString *"}),(0,o.jsx)("td",{children:"Datos para estar encriptadosed."}),(0,o.jsx)("td",{children:"M"})]})]}),"\n",(0,o.jsx)(r.h2,{id:"decryptidentifier",children:"decrypt:identifier:"}),"\n",(0,o.jsxs)(r.p,{children:["El m\xe9todo ",(0,o.jsx)(r.code,{children:"decrypt:identifier:"})," tiene los siguientes par\xe1metros de entrada:"]}),"\n",(0,o.jsxs)("table",{children:[(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Campo"}),(0,o.jsx)("th",{children:"Tipo de datos"}),(0,o.jsx)("th",{children:"Descripci\xf3n"}),(0,o.jsx)("th",{children:"Requerido"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"data"}),(0,o.jsx)("td",{children:"NSString *"}),(0,o.jsx)("td",{children:"Datos a descifrar."}),(0,o.jsx)("td",{children:"M"})]}),(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:"identifier"}),(0,o.jsx)("td",{children:"NSString *"}),(0,o.jsxs)("td",{children:["El identificador que especifica la superpecci\xf3n para representar al encriptador.Este identificador debe coincidir con el valor de la propiedad ",(0,o.jsx)(r.code,{children:"identifier"})," para ejecutar la l\xf3gica de descifrado.Si los valores no coinciden, return ",(0,o.jsx)(r.code,{children:"nil"})," a trav\xe9s del m\xe9todo ",(0,o.jsx)(r.code,{children:"decrypt:identifier:"})," ."]}),(0,o.jsx)("td",{children:"M"})]})]})]})}function p(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>t,x:()=>c});var o=a(96540);const n={},i=o.createContext(n);function t(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);
---
sidebar_position: 1
---

# my.addPhoneContact

**Requisitos de versión**: Biblioteca básica 1.10.0 o versión superior. Si la versión es baja, sugerir [Tratamiento compatible](/portal-interactivo/docs/DevelopmentResources/Framework/Compatibilidad)

Este formulario permite al usuario escribir el formulario en contactos telefónicos a través de crear contactos o añadir a contactos existentes.
## Código de muestra

```js
// API-DEMO page/API/contact/contact.json
{
   "defaultTitle": "Contact"
}
```
```js
<!-- API-DEMO page/API/contact/contact.axml-->
<view class="page">

  <view class="page-description">Contact API</view>
  <view class="page-section">
    <view class="page-section-title">my.addPhoneContact</view>
    <view class="page-section-demo">

      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Basic information</text>
      </view>

      <view class="form-row">
        <view class="form-row-label">Nickname</view>
        <view class="form-row-content">
          <input id="nickName" onInput="onInput" class="input" value="Baking July" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Last name</view>
        <view class="form-row-content">
          <input id="lastName" onInput="onInput" class="input" value="Last" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Middle name</view>
        <view class="form-row-content">
          <input id="middleName" onInput="onInput" class="input" value="Middle" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">First name</view>
        <view class="form-row-content">
          <input id="firstName" onInput="onInput" class="input" value="First" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Remarks</view>
        <view class="form-row-content">
          <input id="remark" onInput="onInput" class="input" value="This is the remarks" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Phone number</view>
        <view class="form-row-content">
          <input id="mobilePhoneNumber" onInput="onInput" class="input" value="13800000000" />
        </view>
      </view>

      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Contact address</text>
      </view>

      <view class="form-row">
        <view class="form-row-label">Country</view>
        <view class="form-row-content">
          <input id="addressCountry" onInput="onInput" class="input" value="address country" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Province</view>
        <view class="form-row-content">
          <input id="addressState" onInput="onInput" class="input" value="address state" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">City</view>
        <view class="form-row-content">
          <input id="addressCity" onInput="onInput" class="input" value="address city" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Street</view>
        <view class="form-row-content">
          <input id="addressStreet" onInput="onInput" class="input" value="address street" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Postcode</view>
        <view class="form-row-content">
          <input id="addressPostalCode" onInput="onInput" class="input" value="94016" />
        </view>
      </view>

      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Work</text>
      </view>

      <view class="form-row">
        <view class="form-row-label">Company</view>
        <view class="form-row-content">
          <input id="organization" onInput="onInput" class="input" value="organization" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Title</view>
        <view class="form-row-content">
          <input id="title" onInput="onInput" class="input" value="Developer" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Work fax</view>
        <view class="form-row-content">
          <input id="workFaxNumber" onInput="onInput" class="input" value="11111111" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Work phone</view>
        <view class="form-row-content">
          <input id="workPhoneNumber" onInput="onInput" class="input" value="11111112" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Company phone</view>
        <view class="form-row-content">
          <input id="hostNumber" onInput="onInput" class="input" value="11111113" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Email</view>
        <view class="form-row-content">
          <input id="email" onInput="onInput" class="input" value="liuhuo01@miniprogram.com" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Website</view>
        <view class="form-row-content">
          <input id="url" onInput="onInput" class="input" value="www.miniprogram.com" />
        </view>
      </view>

      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Company address</text>
      </view>

      <view class="form-row">
        <view class="form-row-label">Country</view>
        <view class="form-row-content">
          <input id="workAddressCountry" onInput="onInput" class="input" value="work country" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Province</view>
        <view class="form-row-content">
          <input id="workAddressState" onInput="onInput" class="input" value="work state" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">City</view>
        <view class="form-row-content">
          <input id="workAddressCity" onInput="onInput" class="input" value="work city" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Street</view>
        <view class="form-row-content">
          <input id="workAddressStreet" onInput="onInput" class="input" value="work street" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Postcode</view>
        <view class="form-row-content">
          <input id="workAddressPostalCode" onInput="onInput" class="input" value="111111" />
        </view>
      </view>

      <view style="font-size:18px;margin-top:18px;margin-bottom:18px">
        <text style="font-size:18px;margin-top:18px;margin-bottom:18px">Home</text>
      </view>

      <view class="form-row">
        <view class="form-row-label">Fax</view>
        <view class="form-row-content">
          <input id="homeFaxNumber" onInput="onInput" class="input" value="11111114" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Phone</view>
        <view class="form-row-content">
          <input id="homePhoneNumber" onInput="onInput" class="input" value="11111115" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Country</view>
        <view class="form-row-content">
          <input id="homeAddressCountry" onInput="onInput" class="input" value="home country" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Province</view>
        <view class="form-row-content">
          <input id="homeAddressState" onInput="onInput" class="input" value="home state" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">City</view>
        <view class="form-row-content">
          <input id="homeAddressCity" onInput="onInput" class="input" value="home city" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Street</view>
        <view class="form-row-content">
          <input id="homeAddressStreet" onInput="onInput" class="input" value="home street" />
        </view>
      </view>

      <view class="form-row">
        <view class="form-row-label">Postcode</view>
        <view class="form-row-content">
          <input id="homeAddressPostalCode" onInput="onInput" class="input" value="123456" />
        </view>
      </view>

      <button type="primary" onTap="addPhoneContact">Add to phone contact</button>

    </view>
  </view>	
</view>
```
```js
// API-DEMO page/API/contact/contact.js
Page({
  data:{
      "photoFilePath": "/sdcard/DCIM/Camera/a.jpg",
      "nickName": "Baking July",
      "lastName": "Last",
      "middleName": "Middle",
      "firstName": "First",
      "remark": "This is remarks",
      "mobilePhoneNumber": "13800000000",
      "homePhoneNumber": "11111115",
      "workPhoneNumber": "11111112",
      "homeFaxNumber": "11111114",
      "workFaxNumber": "11111111",
      "hostNumber": "11111113",
      "addressCountry": "address country",
      "addressState": "address state",
      "addressCity": "address city",
      "addressStreet": "address street",
      "addressPostalCode": "94016",
      "workAddressCountry": "work country",
      "workAddressState": "work state",
      "workAddressCity": "work city",
      "workAddressStreet": "work street",
      "workAddressPostalCode": "111111",
      "homeAddressCountry": "home country",
      "homeAddressState": "home state",
      "homeAddressCity": "home city",
      "homeAddressStreet": "home street",
      "homeAddressPostalCode": "123456",
      "organization": "organization",
      "title": "Developer",
      "email": "liuhuo01@miniprogram.com",
      "url": "www.miniprogram.com",
      success: (res) => {
        my.alert({
          content: 'addPhoneContact response: ' + JSON.stringify(res)
        });
      },
      fail: (res) => {
        my.alert({
          content: 'addPhoneContact response: ' + JSON.stringify(res)
        });
      }
  },
  onInput(e) {
    this.data[e.currentTarget.id] = e.detail.value;
  },
  addPhoneContact() {
    if (my.canIUse('addPhoneContact')) {
      my.addPhoneContact(this.data);
    } else {
      my.alert({ 
        title: 'Client version too low',
        content: 'my.addPhoneContact() needs higher version'
      });
    }
  }
});
```
## Parámetros
Tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>photoFilePath</td>
        <td>String</td>
        <td>No</td>
        <td>Ruta de archivo local de Avatar.</td>
     </tr>
     <tr>
        <td>nickName</td>
        <td>String</td>
        <td>No	</td>
        <td>Apodo.</td>
     </tr>
     <tr>
        <td>lastName</td>
        <td>String</td>
        <td>No</td>
        <td>Apellido.</td>
     </tr>
     <tr>
        <td>middleName</td>
        <td>String</td>
        <td>No</td>
        <td>Segundo nombre.</td>
     </tr>
     <tr>
        <td>firstName</td>
        <td>String</td>
        <td>No</td>
        <td>Primer nombre.</td>
     </tr>
     <tr>
        <td>remark</td>
        <td>String	</td>
        <td>No</td>
        <td>Observaciones.</td>
     </tr>
     <tr>
        <td>mobilePhoneNumber</td>
        <td>String</td>
        <td>No</td>
        <td>Numero de celular.</td>
     </tr>
     <tr>
        <td>addressCountry	</td>
        <td>String</td>
        <td>No</td>
        <td>Dirección de contacto del país.</td>
     </tr>
     <tr>
        <td>addressState</td>
        <td>String</td>
        <td>No</td>
        <td>Provincia en la dirección de contacto.</td>
     </tr>
     <tr>
        <td>addressCity</td>
        <td>String</td>
        <td>No</td>
        <td>Ciudad de la dirección de contacto.</td>
     </tr>
     <tr>
        <td>addressStreet</td>
        <td>String</td>
        <td>No</td>
        <td>Dirección de contacto de la calle.</td>
     </tr>
     <tr>
        <td>addressPostalCode</td>
        <td>String</td>
        <td>No</td>
        <td>Código postal de la dirección de contacto.</td>
     </tr>
     <tr>
        <td>organization</td>
        <td>String</td>
        <td>No</td>
        <td>Compañía.</td>
     </tr>
     <tr>
        <td>title</td>
        <td>String</td>
        <td>No</td>
        <td>Título.</td>
     </tr>
     <tr>
        <td>workFaxNumber</td>
        <td>String</td>
        <td>No</td>
        <td>Fax de trabajo.</td>
     </tr>
     <tr>
        <td>workPhoneNumber</td>
        <td>String</td>
        <td>No</td>
        <td>Número de teléfono del trabajo.</td>
     </tr>
     <tr>
        <td>hostNumber</td>
        <td>String</td>
        <td>No</td>
        <td>Número de teléfono de la empresa.</td>
     </tr>
     <tr>
        <td>email</td>
        <td>String</td>
        <td>No</td>
        <td>Correo electrónico</td>
     </tr>
     <tr>
        <td>url</td>
        <td>String</td>
        <td>No</td>
        <td>Página web.</td>
     </tr>
     <tr>
        <td>workAddressCountry</td>
        <td>String</td>
        <td>No</td>
        <td>País en dirección de trabajo.el trabajo.</td>
     </tr>
     <tr>
        <td>workAddressState</td>
        <td>String</td>
        <td>No</td>
        <td>Provincia de la dirección del trabajo.</td>
     </tr>
     <tr>
        <td>workAddressCity</td>
        <td>String</td>
        <td>No</td>
        <td>Ciudad en la dirección del trabajo.</td>
     </tr>
     <tr>
        <td>workAddressStreet</td>
        <td>String</td>
        <td>No</td>
        <td>Calle de la dirección del trabajo.</td>
     </tr>
     <tr>
        <td>workAddressPostalCode</td>
        <td>String</td>
        <td>No</td>
        <td>Código Postal de la dirección del trabajo.</td>
     </tr>
     <tr>
        <td>homeFaxNumber</td>
        <td>String</td>
        <td>No</td>
        <td>Fax en casa.sa</td>
     </tr>
     <tr>
        <td>homePhoneNumber</td>
        <td>String</td>
        <td>No</td>
        <td>Teléfono de casa.</td>
     </tr>
     <tr>
        <td>homeAddressCountry</td>
        <td>String</td>
        <td>No</td>
        <td>País de la dirección de la casa.</td>
     </tr>
     <tr>
        <td>homeAddressState</td>
        <td>String</td>
        <td>No</td>
        <td>Providencia se la dirección de la casa.</td>
     </tr>
     <tr>
        <td>homeAddressCity</td>
        <td>String</td>
        <td>No</td>
        <td>Ciudad de la dirección de la casa.</td>
     </tr>
     <tr>
        <td>homeAddressStreet</td>
        <td>String</td>
        <td>No</td>
        <td>Calle de la dirección de la casa.</td>
     </tr>
     <tr>
        <td>homeAddressPostalCode</td>
        <td>String</td>
        <td>No</td>
        <td>Código Postal de la dirección de la casa.</td>
     </tr>
     <tr>
        <td>success</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al éxito de llamadas.</td>
     </tr>
     <tr>
        <td>fail</td>
        <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada tras falla de llamada.</td>
     </tr>
     <tr>
        <td>complete</td>
         <td>Función</td>
        <td>No</td>
        <td>Función de devolución de llamada al finalizar la llamada (para ser ejecutado en el éxito de la llamada o el fracaso).</td>
     </tr>
</table>

## Valor de retorno
**Éxito:**

éxito = verdadero

**Falla:**
<table>
    <tr>
        <th>Error</th>
        <th>Mensaje de error</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>11</td>
        <td>fallar cancelar</td>
        <td>El usuario cancela la operación.</td>
     </tr>
     <tr>
        <td>3</td>
        <td>fallar ```${detail}```</td>
        <td>La falla de la llamada, el detalle incluye la información detallada.</td>
     </tr>
</table>


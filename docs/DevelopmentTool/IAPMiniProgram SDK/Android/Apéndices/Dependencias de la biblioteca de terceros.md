---
sidebar_position: 2
---

# Dependencias de la biblioteca de terceros

El SDK de Android IAPMiniprogram utiliza múltiples bibliotecas de terceros para mejorar las funcionalidades y capacidades.Estas dependencias se incluyen en la Super App a través de la dependencia transitiva y pueden encontrar conflictos de la versión de la biblioteca con otros SDK o la Super App.Para garantizar el funcionamiento adecuado del Super App, se recomienda seguir estas pautas:

Use la última versión de la biblioteca disponible en diferentes requisitos en caso de conflictos de versión
Pruebe a fondo su aplicación a pesar de la capacidad del compilador de manejar automáticamente los conflictos de versión.
Este tema presenta las bibliotecas de terceros utilizadas en el SDK de Android IAPMiniprogram y sus respectivos requisitos de versión.Si tiene alguna pregunta o consulta sobre el uso de estas bibliotecas de terceros, comuníquese con nuestro soporte técnico en. <a href="mailto:overseas_support@service.alibaba.com.">overseas_support@service.alibaba.com</a>

## Dependencias públicas
La siguiente tabla enumera las dependencias públicas de las bibliotecas de terceros utilizadas en IAPMiniprogram SDK:

<table>
    <tr>
        <th>Nombre de la biblioteca</th>
        <th>Nombre del paquete</th>
        <th>Versión mínima requerida</th>
    </tr>
    <tr>
        <td>[gson](/)</td>
        <td>com.google.code.gson:gson</td>
        <td>2.8.5</td>
    </tr>
    <tr>
        <td>[fastjson](/)</td>
        <td>com.alibaba:fastjson</td>
        <td>1.1.70.android</td>
    </tr>
    <tr>
        <td>[appcompat](/)</td>
        <td>androidx.appcompat:appcompat</td>
        <td>1.0.0</td>
    </tr>
    <tr>
        <td>[material](/)</td>
        <td>com.google.android.material</td>
        <td>1.0.0</td>
    </tr>
    <tr>
        <td>[viewpager2](/)</td>
        <td>androidx.viewpage2:viewpager2</td>
        <td>1.0.0</td>
    </tr>
</table>


Dependencias del componente del mapa
Si [integra el componente Map](/) en su SDK IAPminiprogram, se utilizan las siguientes dependencias de la biblioteca de terceros:

<table>
    <tr>
        <th>Nombre de la biblioteca</th>
        <th>Nombre del paquete</th>
        <th>Requerido mínimo version</th>
    </tr>
    <tr>
        <td>[play-services-maps](/)</td>
        <td>com.google.android:play-services-maps</td>
        <td>18.1.0</td>
    </tr>
    <tr>
        <td>[play-services-location](/)</td>
        <td>com.google.android.gms:play-services-location</td>
        <td>21.0.1</td>
    </tr>
    <tr>
        <td>[android-map-utils](/)</td>
        <td>com.google.maps.android:android-maps-utils</td>
        <td>0.5</td>
    </tr>
    <tr>
        <td>[places](/)</td>
        <td>com.google.android.libraries.place:place</td>
        <td>3.1.0</td>
    </tr>
</table>



## Dependencias del componente de transmisión en vivo
Si [integra el componente de transmisión en vivo](/) en su SDK IAPminiprogram, se utilizan las siguientes dependencias de la biblioteca de terceros:

<table>
    <tr>
        <th>Nombre de la biblioteca</th>
        <th>Nombre del paquete</th>
        <th>Versión mínima requerida</th>
    </tr>
    <tr>
        <td>ijkplayer</td>
        <td>tv.danmaku.ijk.media:ijkplayer-java</td>
        <td>0.8.8</td>
    </tr>
</table>
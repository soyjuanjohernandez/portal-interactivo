---
sidebar_position: 1
---

# Descripción general de la API de autenticación biométrica

Los desarrolladores de miniprogramas pueden incorporar la autenticación biométrica en sus miniprogramas para verificar a los usuarios basándose en sus características biométricas únicas, como la identificación facial o la huella dactilar, dependiendo de las capacidades del dispositivo. Este tema ofrece una visión general de las JSAPI asociadas a este método de autenticación seguro y cómodo.

## Flujo de trabajo

La siguiente figura muestra el flujo de trabajo para que los desarrolladores de miniprogramas implementen la autenticación biométrica:

![biometric](.\img\biometric.png)

Este flujo de trabajo consta de los tres pasos siguientes:

1. En su miniprograma, determine las áreas específicas en las que los usuarios necesitan completar la autenticación biométrica.
2. (Opcional) Si prefiere comprobar la disponibilidad de la autenticación biométrica en el dispositivo del usuario antes de iniciar el proceso de autenticación, integre el JSAPI **my.checkLocalBioAuthSupported**. Para obtener más información, consulta [my.checkLocalBioAuthSupported](./my.checkLocalBioAuthSupported).
3. Integra la JSAPI **my.startLocalBioAuth** para iniciar un proceso de autenticación biométrica. Para obtener más información, consulta [my.startLocalBioAuth](./my.startLocalBioAuth).

## Lista de API
La siguiente tabla enumera las JSAPI asociadas a la autenticación biométrica y sus descripciones:

<table>
    <tr>
        <th>JSAPI</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td>[my.checkLocalBioAuthSupported](./my.checkLocalBioAuthSupported)</td>
        <td>Compruebe la disponibilidad de la autenticación biométrica en el dispositivo del usuario.</td>
     </tr>
     <tr>
        <td>[my.startLocalBioAuth](./my.startLocalBioAuth)</td>
        <td>Iniciar un proceso de autenticación biométrica en el dispositivo del usuario.</td>
     </tr>
</table>



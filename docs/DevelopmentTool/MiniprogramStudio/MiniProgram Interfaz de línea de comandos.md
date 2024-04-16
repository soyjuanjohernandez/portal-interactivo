---
sidebar_position: 3
---

# MiniProgram Interfaz de línea de comandos

La interfaz de línea de comandos de Mini program (Miniprogram CLI) ofrece a los desarrolladores de mini programa una herramienta basada en texto para administrar mini programs en la plataforma de mini programs. Esta herramienta está disponible en sistemas Windows, MacOS y Linux. Le permite automatizar los procesos de desarrollo e integrar su flujo de trabajo en un pipe de integración y entrega continua (CI/CD).

Este tema proporciona una referencia completa de los comandos disponibles de la CLI de mini program e instrucciones sobre cómo usar la CLI.

# Referencia de comandos
La siguiente tabla enumera todos los comandos disponibles del Miniprogram CLI y las descripciones de comandos correspondientes:

<table>
  <thead>
    <tr>
      <th>Nombre de comando</th>
      <th>Descripción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>``` miniprogram-cli -v ``` o ``` miniprogram-cli --version ```</td>
      <td>Verifique la información de la versión CLI instalada.</td>
    </tr>
    <tr>
      <td>``` miniprogram-cli -h ``` o ``` miniprogram-cli --help ```</td>
      <td>Obtenga una lista completa de comandos y su uso, o ayuda de un comando específico.</td>
    </tr>
    <tr>
      <td>``` miniprogram-cli init ``` </td>
      <td>Inicialice la CLI con sus credenciales de usuario. Para obtener más información, consulte [Inicializar el miniprograma CLI](/).</td>
    </tr>
    <tr>
      <td>``` miniprogram-cli info ``` </td>
      <td>Recupere la configuración actual de inicialización de CLI. Para obtener más información, consulte la [configuración de inicialización](/).</td>
    </tr>
    <tr>
      <td>``` miniprogram-cli preview ``` </td>
      <td>Genere un código QR para obtener una vista previa de su mini program. Para obtener más información, consulte [vista previa Mini Programs](/).</td>
    </tr>
    <tr>
      <td>``` miniprogram-cli upload ``` </td>
      <td>Sube un paquete mini-program a la plataforma de mini program. Para obtener más información, consulte [Subir mini programs](/).</td>
    </tr>
  </tbody>
</table>


# Requisitos previos

Antes de usar los comandos CLI, asegúrese de cumplir con los siguientes requisitos previos:


* Tenga un conocimiento básico de ejecutar líneas de comando en sistemas Windows, MacOS o Linux.

* Instale Node.js 16 en su sistema operativo.

* Obtenga su ID de clave de acceso y su clave de acceso secreto en la [plataforma Mini Program](/). Estas credenciales están disponibles en su sección de perfil, a las que se puede acceder haciendo clic en el icono de perfil en la esquina superior derecha dentro de cualquier espacio de trabajo.

* Aprenda los permisos de su rol de usuario en la plataforma Mini Program para evitar cualquier error de operación no autorizado.Para obtener más información, consulte los [roles de los miembros](/).

* Asegúrese de que el mini programa que pretenda operar a través de Miniprogram CLI ya se crea dentro de su espacio de trabajo.Para obtener orientación sobre la creación de un mini programa, consulte [Crear mini programs](/).


# Instalar o actualizar Miniprogram CLI

Puede instalar o actualizar la última versión de Miniprogram CLI ejecutando el siguiente comando en su terminal preferido:

```
npm install -g @antglobal/miniprogram-cli
```

Si necesita una versión de CLI específica, incluya el número de versión agregando `` `@<versión>` `` después del nombre del paquete. El proceso de instalación solo toma unos segundos. Para confirmar la instalación o verificar la versión instalada, ejecute el siguiente comando:

``` 
miniprogram-cli -v
> 1.0.0
```

# Initialize MiniProgram CLI
After installing MiniProgram CLI for the first time, you must initialize it with your user credentials. This step links the CLI to your Mini Program Platform account, which verifies your identity and access permissions. Run the following command to initialize the CLI:

```
# miniprogram-cli init [options]
# Options:
#  -i,--access-key-id
#  -s,--access-key-secret
miniprogram-cli init --access-key-id <accessKeyId> --access-key-secret <accessKeySecret>
```


También puede usar este comando para actualizar sus credenciales más adelante.Al usar este comando, puede especificar los siguientes parámetros:
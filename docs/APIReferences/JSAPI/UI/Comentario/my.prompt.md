---
sidebar_position: 3
---

# my.prompt

Explica un cuadro de diálogo para mostrar el mensaje de inmediato.

## Código de muestra

```js
my.prompt({
  title: 'Title',
  message: 'Explain the current status and prompt the user solution. It is best not to exceed two lines.',
  placeholder: 'Leave a message to a friend',
  okButtonText: 'Confirm',
  cancelButtonText: 'Cancel',
  success: (result) => {
    my.alert({
      title: JSON.stringify(result),
    });
  },
});
```
## Parámetros
<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Requerida</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>title</td>
        <td>String</td>
        <td>No</td>
        <td>Título del cuadro rápido.</td>
     </tr>
     <tr>
        <td>message</td>
        <td>String</td>
        <td>No</td>
        <td>Texto del cuadro de solicitud, que es "Ingrese el contenido aquí" de forma predeterminada.</td>
     </tr>
     <tr>
        <td>placeholder</td>
        <td>String</td>
        <td>No</td>
        <td>Mensaje de texto para el cuadro de entrada.</td>
     </tr>
     <tr>
        <td>align</td>
        <td>String</td>
        <td>No</td>
        <td className="p-no-margin">
            	Alineación de mensajes.Los valores válidos son:

               * izquierda
               * centro
               * derecha 

               El valor predeterminado es el ```centro``` para iOS y Android.
         </td>
      </tr>
      <tr>
        <td>okButtonText</td>
        <td>String</td>
        <td>No</td>
        <td>Aceptar texto del botón, que está **bien** de forma predeterminada.</td>
     </tr>
     <tr>
        <td>cancelButtonText</td>
        <td>String</td>
        <td>No</td>
        <td>Cancelar texto del botón, que se **cancela** de forma predeterminada.</td>
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

### Función de devolución de llamada de éxito

El parámetro entrante es del tipo de objeto con los siguientes atributos:

<table>
    <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
    </tr>
     <tr>
        <td>ok</td>
        <td>Boolean</td>
        <td>Haga clic en Aceptar para devolver verdadero; Haga clic en Cancelar para devolver falso.</td>
     </tr>
     <tr>
        <td>inputValue</td>
        <td>String</td>
        <td>Cuando OK es verdadero, devuelve la entrada del usuario.</td>
     </tr>
</table>
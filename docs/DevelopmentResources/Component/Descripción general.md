---
sidebar_position: 1
---

# Descripción general

## Componente Básico

El Mini Program proporciona a los desarrolladores una serie de componentes básicos para que los desarrolladores puedan combinarlos para el desarrollo de servicios.

## Tipo de Atributo

El componente proporciona una serie de configuraciones de atributos. Cada valor de atributo tiene un requisito de tipo:

<table>
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Descripción</th>
            <th>Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Booleano</td>
            <td>Booleano</td>
            <td></td>
        </tr>
        <tr>
            <td>Número</td>
            <td>Número</td>
            <td></td>
        </tr>
        <tr>
            <td>Cadena</td>
            <td>Cadena</td>
            <td></td>
        </tr>
        <tr>
            <td>Arreglo</td>
            <td>Arreglo</td>
            <td></td>
        </tr>
        <tr>
            <td>Objeto</td>
            <td>Objeto</td>
            <td></td>
        </tr>
        <tr>
            <td>EventHandle</td>
            <td>Manejador de Eventos</td>
            <td>Necesita definir la implementación para el manejador de eventos en la [página (Page)](/)</td>
        </tr>
        <tr>
            <td>any</td>
            <td>Cualquier tipo</td>
            <td></td>
        </tr>
    </tbody>
</table>

## Atributo Común del Componente

Todos los componentes incluyen los siguientes atributos:

<table>
    <thead>
        <tr>
        <th>Propiedad</th>
        <th>Tipo</th>
        <th>Descripción</th>
        <th>Notas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>id</td>
        <td>String</td>
        <td>Identificador único del componente.</td>
        <td></td>
        </tr>
        <tr>
        <td>class</td>
        <td>String</td>
        <td>Clase de estilo.</td>
        <td></td>
        </tr>
        <tr>
        <td>style</td>
        <td>String</td>
        <td>Estilo en línea.</td>
        <td></td>
        </tr>
        <tr>
        <td>data-*</td>
        <td>Any</td>
        <td>Atributos personalizados.</td>
        <td>Cuando se desencadena el evento, el atributo personalizado se transfiere al manejador de eventos.</td>
        </tr>
        <tr>
        <td>on catch</td>
        <td>EventHandle</td>
        <td>Vinculación de eventos, siguiendo las especificaciones de nomenclatura ump, como onTap.</td>
        <td>Consulte el [event](/).</td>
        </tr>
    </tbody>
</table>

### Consejos

Se requiere `{{}}` para transferir datos dentro del tipo de atributo especificado. Por ejemplo:

```xml
<view disable-scroll="false"> <!-- Error es una cadena, no un booleano, equivalente al tipo booleano true -->
<view disable-scroll="{{false}}"> <!--correcto, o atributo vacío, significa falso-->
```
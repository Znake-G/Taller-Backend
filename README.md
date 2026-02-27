# Taller 2 – Promesas y Manipulación de Datos en JavaScript

Este proyecto consume datos desde la API pública de Dungeons & Dragons y aplica manipulación de datos utilizando JavaScript moderno y programación funcional.

---

## Descripción

El objetivo de este proyecto es obtener información de monstruos desde una API pública, normalizar los datos y realizar diferentes consultas utilizando programación asíncrona y métodos funcionales de JavaScript.

El programa:

- Obtiene la lista de monstruos desde la API
- Selecciona los primeros 40 monstruos
- Obtiene sus detalles de forma concurrente usando Promise.all
- Normaliza los datos en una estructura uniforme
- Realiza consultas usando funciones funcionales

---

## Conceptos aplicados

Este proyecto utiliza los siguientes conceptos:

- Fetch API
- Promesas (Promises)
- async/await
- Programación concurrente (Promise.all)
- map (normalización de datos)
- filter (filtrado de datos)
- find (búsqueda de elementos)
- some (verificación de existencia)
- every (validación de todos los elementos)
- reduce (agrupación y clasificación de datos)
- Modularización del código (ES Modules)

---

## Estructura del proyecto

 -  index.js # Archivo principal que ejecuta el programa
 -  monsters.js # Consumo de la API y normalización de datos
 -  utils.js # Funciones de consulta y manipulación de datos
 -  package.json # Configuración de módulos ES
 -  README.md


---

## Cómo ejecutar el proyecto

### Requisitos

- Node.js versión 18 o superior

Verificar versión: node -v


---

### Ejecutar el programa

1. Abrir la terminal
2. Navegar a la carpeta del proyecto
3. Ejecutar:


---

## API utilizada

API pública de Dungeons & Dragons:

https://www.dnd5eapi.co/api/monsters

Esta API proporciona información detallada sobre monstruos, incluyendo:

- Nombre
- Tipo
- Challenge Rating (CR)
- Hit Points (HP)
- Armor Class (AC)
- Velocidad
- Estadísticas
- Inmunidades y resistencias

---

## Funcionalidades implementadas

### Normalización de datos (map)

Cada monstruo se transforma en el siguiente formato:
```
{
    index,
    name,
    size,
    type,
    alignment,
    cr,
    ac,
    hp,
    speed,
    stats,
    immuneCount,
    resistCount,
    vulnCount,
    hasLegendary
}
```

---

### Consultas implementadas

#### filter
Monstruos con:

- CR >= 5
- HP >= 80

#### find
Primer monstruo que sea:

- Tipo: dragon
- CR >= 6

#### some
Verifica si existe al menos un monstruo con acciones legendarias.

#### every
Verifica que todos los monstruos tengan estadísticas completas y HP válido.

#### reduce – Agrupar por tipo
Agrupa los monstruos por tipo y calcula:

- Cantidad
- Promedio de CR
- Máximo HP

#### reduce – Clasificar por CR

Clasifica los monstruos en categorías:

- 0–1
- 2–4
- 5–9
- 10+

---

## Tecnologías utilizadas

- JavaScript (ES6+)
- Node.js
- Fetch API
- API pública DnD 5e

---

## Estado del proyecto

Proyecto funcional y completo.

---

## Autores

- Dayana Molina
- Sofia Palacio
- José Sequeda

---

## Fecha

2026

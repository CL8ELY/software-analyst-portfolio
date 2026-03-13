# Software Analyst Portfolio

Portafolio profesional de **Analista de Software** orientado a entrevistas técnicas, revisión por recruiters, líderes técnicos, arquitectos y gerentes.

Este repositorio presenta una base documental moderna construida con **Astro + Starlight**, centrada en **análisis de software**, **documentación funcional** y **casos de estudio** derivados de experiencia real.

## Propósito

El objetivo de este portafolio es mostrar, de forma clara y profesional, cómo se aborda el análisis de software en contextos reales:

- comprensión del contexto del negocio,
- levantamiento y estructuración de requisitos,
- modelado de procesos y reglas de negocio,
- documentación funcional y técnica,
- y trazabilidad entre necesidad, análisis y solución.

No se trata de un portafolio visual de desarrollo, sino de una **muestra estructurada de evidencia profesional** orientada a análisis.

## Enfoque

Este portafolio sigue una estrategia de **documentation as code** para transformar documentación histórica elaborada en entornos corporativos tradicionales hacia un formato:

- mantenible,
- navegable,
- publicable en GitHub,
- y adecuado para entrevistas técnicas.

## Proyectos base del portafolio

Los primeros casos de estudio que estructuran este portafolio son:

- **Museo 26 de Julio**
- **Sistema de gestión de la empresa apícola**
- **Sistema de gestión del sistema avícola**

Cada uno será incorporado progresivamente a partir de documentación real, reorganizada y adaptada a una narrativa profesional, clara y pública.

## Qué contiene actualmente

- portada inicial del portafolio,
- perfil profesional,
- metodología de trabajo,
- catálogo inicial de proyectos,
- taxonomía de artefactos,
- base del sitio con Astro y Starlight.

## Stack

- **Astro**
- **Starlight**
- **Markdown**
- **Node.js**

## Estructura del repositorio

```text
.
├─ public/
│  ├─ favicon.svg
│  └─ images/
│     └─ projects/
├─ src/
│  ├─ content/
│  │  └─ docs/
│  │     ├─ index.md
│  │     ├─ about/
│  │     ├─ methodology/
│  │     ├─ projects/
│  │     └─ artifacts/
│  └─ content.config.ts
├─ astro.config.mjs
├─ tsconfig.json
├─ package.json
└─ README.md
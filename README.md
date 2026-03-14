# Software Analyst Portfolio

Portafolio profesional de **Elianne**, Analista de Software orientado a entrevistas técnicas, revisión por recruiters, líderes técnicos, arquitectas, arquitectos y gerencias.

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

Cada uno se incorpora progresivamente a partir de documentación real, reorganizada y adaptada a una narrativa profesional, clara y pública.

## Qué contiene actualmente

- portada inicial del portafolio,
- perfil profesional,
- metodología de trabajo,
- catálogo inicial de proyectos,
- taxonomía de artefactos,
- base del sitio con Astro y Starlight,
- flujo inicial para generar el CV en PDF desde Markdown.

## Stack

- **Astro**
- **Starlight**
- **Markdown**
- **Node.js**
- **Pandoc + Typst** para el CV en PDF

## Estructura del repositorio

```text
.
├─ cv-source/
│  ├─ cv-elianne-analista-software.md
│  └─ cv-metadata.yaml
├─ public/
│  ├─ cv/
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
```

## Desarrollo local

Instalar dependencias:

```bash
npm install
```

Iniciar servidor de desarrollo:

```bash
npm run dev
```

Compilar para producción:

```bash
npm run build
```

Previsualizar build local:

```bash
npm run preview
```

Generar el CV en PDF:

```bash
npm run cv:pdf
```

## Criterios de publicación

Todo el contenido de este portafolio se rige por estos principios:

- fidelidad a la experiencia real,
- claridad estructural,
- lenguaje profesional,
- anonimización cuando sea necesaria,
- ausencia de métricas o impactos inventados,
- y foco en valor analítico antes que en volumen documental.

## Estado

Base documental inicial en construcción.

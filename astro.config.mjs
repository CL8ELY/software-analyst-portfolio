import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://CL8ELY.github.io',
  base: '/software-analyst-portfolio',
  integrations: [
    starlight({
      title: 'Elianne · Analista de Software',
      description:
        'Portafolio profesional orientado a análisis de software, documentación funcional y casos de estudio basados en experiencia real.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/CL8ELY',
        },
      ],
      favicon: '/favicon.svg',
      customCss: ['./src/styles/custom.css'],
      components: {
        Search: './src/components/HeaderSearch.astro',
      },
      sidebar: [
        {
          label: 'Inicio',
          items: [{ label: 'Visión general', slug: '' }],
        },
        {
          label: 'Perfil profesional',
          items: [
            { label: 'Sobre mí', slug: 'about' },
            { label: 'Metodología de trabajo', slug: 'methodology' },
            { label: 'Experiencia', slug: 'experience' },
            { label: 'CV', slug: 'cv' },
            { label: 'Contacto', slug: 'contact' },
            { label: 'Tecnologías y contexto técnico', slug: 'technical-context' },
          ],
        },
        {
          label: 'Proyectos',
          items: [
            { label: 'Índice de proyectos', slug: 'projects' },
            { label: 'Museo 26 de Julio', slug: 'projects/museo-26-julio' },
            { label: 'Sistema de gestión apícola', slug: 'projects/sistema-gestion-apicola' },
            { label: 'Sistema de gestión avícola', slug: 'projects/sistema-gestion-avicola' },
            { label: 'Futuros proyectos', slug: 'projects/future-projects' },
          ],
        },
        {
          label: 'Casos de estudio',
          items: [{ label: 'Índice de casos de estudio', slug: 'case-studies' }],
        },
        {
          label: 'Artefactos',
          items: [{ label: 'Biblioteca de artefactos', slug: 'artifacts' }],
        },
      ],
    }),
  ],
});
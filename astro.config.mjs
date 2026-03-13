import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Portafolio de Analista de Software',
      description:
        'Portafolio profesional orientado a análisis de software, documentación funcional y casos de estudio basados en experiencia real.',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/TU-USUARIO',
        },
      ],
      favicon: '/favicon.svg',
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
            { label: 'Proyectos', slug: 'projects' },
            { label: 'Artefactos', slug: 'artifacts' },
          ],
        },
      ],
    }),
  ],
});
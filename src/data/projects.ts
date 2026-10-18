import type { ImageMetadata } from 'astro';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
  image?: ImageMetadata;
  imageAlt?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    title: 'Club de lectura',
    description:
      'Sistema web para administrar un club de lectura: usuarios, libros, préstamos, donaciones y multas.',
    tags: ['Laravel', 'Angular', 'MySQL'],
    links: [
      { label: 'Frontend', href: '#' },
      { label: 'Backend', href: '#' },
    ],
  },
  {
    title: 'Portafolio web',
    badge: 'En desarrollo',
    description: 'Descripción pendiente: se agrega aquí la información del proyecto.',
    tags: ['Por definir'],
    links: [{ label: 'Ver sitio', href: '#' }],
  },
  {
    title: 'API de un millón de registros',
    description:
      'API de carga masiva que procesa un archivo de un millón de registros sin problemas de memoria.',
    tags: ['Laravel', 'MySQL', 'Postman'],
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Pasarela de pagos',
    description: 'Cobros y suscripciones integrados con PayPal, Stripe y PayU.',
    tags: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
    links: [{ label: 'GitHub', href: '#' }],
  },
  {
    title: 'Calculadora Angular',
    description:
      'Calculadora con signals, componentes standalone y modo zoneless, con pruebas.',
    tags: ['Angular', 'Tailwind CSS', 'Karma / Jasmine'],
    links: [{ label: 'GitHub', href: '#' }],
  },
];

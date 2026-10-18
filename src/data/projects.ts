import type { ImageMetadata } from 'astro';
import clubLecturaDashboard from '../assets/projects/club-lectura/dashboard.png';
import portfolioLucia from '../assets/projects/portfolio-lucia/avance-portfolio.png';
import millionRecords from '../assets/projects/upload-million-records/batch_info.png';
import payments from '../assets/projects/pasarela-pagos/pasarela-pagos.png';
import zonelessCalculator from '../assets/projects/calculadora/calculadora-zoneless.png';

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
    image: clubLecturaDashboard,
    imageAlt: 'Dashboard del sistema Club de lectura',
    tags: ['Laravel', 'Angular', 'MySQL'],
    links: [
      { label: 'Frontend', href: 'https://github.com/JorgeCoronelG/club-lectura-app' },
      { label: 'Backend', href: 'https://github.com/JorgeCoronelG/club-lectura-api' },
    ],
  },
  {
    title: 'Portafolio web',
    badge: 'En desarrollo',
    image: portfolioLucia,
    description: 'Sitio web para Lucía Salinas, donde muestra su trabajo en diseño gráfico y marketing, y presenta sus servicios.',
    tags: ['HTML', 'Tailwind CSS'],
    links: [],
  },
  {
    title: 'API de un millón de registros',
    description:
      'API de carga masiva que procesa un millón de registros sin problemas de memoria, con guía de instalación y endpoints documentados.',
    image: millionRecords,
    imageAlt: 'Información de la carga de registros',
    tags: ['Laravel', 'MySQL', 'Postman'],
    links: [{ label: 'GitHub', href: 'https://github.com/JorgeCoronelG/laravel-million-records' }],
  },
  {
    title: 'Pasarela de pagos',
    description: 'Cobros y suscripciones integrados con PayPal, Stripe y PayU. Desarrollado como práctica de un curso de Udemy.',
    image: payments,
    imageAlt: 'Pasarela de pagos',
    tags: ['Laravel', 'JavaScript', 'Tailwind CSS', 'MySQL'],
    links: [{ label: 'GitHub', href: 'https://github.com/JorgeCoronelG/laravel-pagos-curso' }],
  },
  {
    title: 'Calculadora Angular',
    description:
      'Práctica del curso Angular Pro (DevTalles): calculadora con signals, componentes standalone y modo zoneless, con pruebas.',
    image: zonelessCalculator,
    imageAlt: 'Captura de la calculadora Angular',
    tags: ['Angular', 'Tailwind CSS', 'Karma / Jasmine'],
    links: [{ label: 'GitHub', href: 'https://github.com/JorgeCoronelG/calculadora-angular-pro' }],
  },
];

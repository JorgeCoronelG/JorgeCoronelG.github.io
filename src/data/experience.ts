export interface Job {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export const experience: Job[] = [
  {
    role: 'Especialista Fullstack',
    company: 'Capi Software',
    location: 'Nuevo León · Remoto',
    period: '12/2023 – 10/2026',
    highlights: [
      'Nuevos módulos y mantenimiento de una plataforma de gestión para el sector inmobiliario.',
      'Integración de APIs de terceros y CRMs como Zoho; optimización de consultas pesadas en Laravel (N+1).',
      'Automatización del módulo de eventos y reportes PDF personalizados para clientes.',
    ],
    tags: ['Laravel', 'Angular', 'MySQL', 'Bootstrap'],
  },
  {
    role: 'Programador Analista Sr.',
    company: 'Ciudad Maderas',
    location: 'Querétaro',
    period: '03/2022 – 10/2023',
    highlights: [
      'Líder del sistema interno de reservaciones, con notificaciones push en tiempo real y Google Calendar.',
      'Despliegues automáticos de frontend y backend con GitHub Actions.',
      'Desarrollo y mantenimiento del CRM de ventas y comisiones.',
    ],
    tags: ['Laravel', 'Angular', 'SQL Server', 'Tailwind CSS', 'CodeIgniter', 'GitHub Actions'],
  },
  {
    role: 'Programador',
    company: 'MTI Consultoría',
    location: 'Querétaro · Remoto',
    period: '05/2020 – 01/2022',
    highlights: [
      'Sistema de nóminas: frontend en Angular y Oracle JET, y endpoints en Java con Helidon y Vert.x.',
      'Módulo de dispersión de nómina con el archivo en el formato requerido por el banco.',
      'Apoyo en el timbrado de CFDI 4.0 y Complemento Carta Porte con Spring Boot.',
    ],
    tags: ['Java', 'Angular', 'Oracle JET', 'JasperReports'],
  },
  {
    role: 'Programador',
    company: 'Impactos Digitales',
    location: 'Querétaro',
    period: '06/2018 – 08/2019',
    highlights: [
      'API en PHP para una aplicación móvil.',
      'Sistemas de cotización, y sitios web en WordPress y Joomla.',
      'Diseño de interfaces en Figma.',
    ],
    tags: ['PHP', 'WordPress', 'Joomla', 'Figma'],
  },
];

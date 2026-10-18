export interface Tech {
  name: string;
  main?: boolean;
}

export interface TechCategory {
  name: string;
  description: string;
  items: Tech[];
}

const t = (name: string, main = false): Tech => ({ name, main });

export const technologies: TechCategory[] = [
  {
    name: 'Backend',
    description: 'Lógica, APIs y servicios',
    items: [t('PHP', true), t('Laravel', true), t('Java'), t('Spring Boot'), t('Vert.x'), t('Helidon'), t('CodeIgniter')],
  },
  {
    name: 'Frontend',
    description: 'Interfaces y componentes',
    items: [t('Angular', true), t('JavaScript'), t('jQuery'), t('HTML'), t('CSS'), t('Bootstrap'), t('Tailwind CSS')],
  },
  {
    name: 'Bases de datos',
    description: 'Modelado y consultas',
    items: [t('MySQL', true), t('SQL Server'), t('PostgreSQL'), t('MongoDB')],
  },
  {
    name: 'Herramientas',
    description: 'Control de versiones y despliegue',
    items: [t('Git'), t('GitHub Actions'), t('GitLab'), t('Docker'), t('Laravel Echo / Pusher'), t('JasperReports'), t('Vercel')],
  },
  {
    name: 'IA para desarrollo',
    description: 'Apoyo en el desarrollo',
    items: [t('Claude Code'), t('ChatGPT')],
  },
  {
    name: 'Calidad y metodología',
    description: 'Prácticas de trabajo',
    items: [t('Pruebas automatizadas'), t('SCRUM')],
  },
];

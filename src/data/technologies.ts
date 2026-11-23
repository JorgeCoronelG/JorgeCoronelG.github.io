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
    items: [t('PHP', true), t('Laravel', true), t('Java'), t('Spring Boot'), t('Vert.x'), t('Helidon'), t('CodeIgniter'), t('APIs REST')],
  },
  {
    name: 'Frontend',
    description: 'Interfaces y componentes',
    items: [t('Angular', true), t('Angular Material'), t('JavaScript'), t('TypeScript'), t('jQuery'), t('HTML'), t('CSS'), t('Bootstrap'), t('Tailwind CSS')],
  },
  {
    name: 'Bases de datos',
    description: 'Modelado y consultas',
    items: [t('MySQL', true), t('SQL Server'), t('PostgreSQL'), t('MongoDB')],
  },
  {
    name: 'Infraestructura y DevOps',
    description: 'Servidores, despliegue y CI/CD',
    items: [t('Docker Compose'), t('Linux (Ubuntu)'), t('Caddy'), t('Cloudflare'), t('Vultr'), t('Nginx'), t('GitHub Actions')],
  },
  {
    name: 'Herramientas',
    description: 'Control de versiones y despliegue',
    items: [t('Git'), t('GitHub'), t('GitLab'), t('Laravel Echo / Pusher'), t('JasperReports'), t('Postman'), t('Resend'), t('Netlify')],
  },
  {
    name: 'IA para desarrollo',
    description: 'Apoyo en el desarrollo',
    items: [t('Claude Code'), t('ChatGPT')],
  },
  {
    name: 'Calidad y metodología',
    description: 'Prácticas de trabajo',
    items: [t('Pruebas automatizadas'), t('PHPUnit'), t('Vitest'), t('Playwright'), t('Larastan'), t('SCRUM')],
  },
];

export const personal = {
  name: 'Atul Murali',
  title: 'Web Developer',
  tagline: 'Building responsive, full-stack web apps with React, Vue, TypeScript, and Golang.',
  bio: 'Web Developer with 5 years of frontend experience and 3 years of backend experience. I build user-friendly applications across the full stack and enjoy leveraging AI tools like Claude Code to accelerate feature development. I have worked across a wide range of environments — from fast-moving startups to major defense contractors.',
  github: 'https://github.com/atulmi',
  linkedin: 'https://www.linkedin.com/in/atul-murali-4703061a3/',
  email: 'atul.murali@outlook.com',
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Frontend',
    items: ['React', 'Vue', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    category: 'Backend',
    items: ['Golang', 'REST APIs', 'SQL'],
  },
  {
    category: 'Database',
    items: ['PostgreSQL'],
  },
  {
    category: 'Tooling',
    items: ['MUI', 'Git', 'Vite', 'Claude Code'],
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string | null;
  live: string | null;
}

export const projects: Project[] = [
  {
    title: 'Full-Stack Task Manager',
    description:
      'Collaborative task management app with real-time updates, user authentication, and project organization. Features a React frontend with a Golang REST API backed by PostgreSQL.',
    tags: ['React', 'TypeScript', 'Golang', 'PostgreSQL'],
    github: '#',
    live: '#',
  },
  {
    title: 'Analytics Dashboard',
    description:
      'Interactive data visualization dashboard for tracking business KPIs and metrics. Built with Vue and TypeScript on the frontend, powered by a Golang API.',
    tags: ['Vue', 'TypeScript', 'Golang'],
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio REST API',
    description:
      'Scalable RESTful API with JWT authentication, structured logging, and rate limiting. Fully documented and backed by a PostgreSQL database.',
    tags: ['Golang', 'PostgreSQL', 'REST API'],
    github: '#',
    live: null,
  },
];

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    title: 'Web Developer',
    company: 'Various Companies (Startups & Defense)',
    period: '2019 – Present',
    bullets: [
      '5 years of frontend development with React, Vue, and TypeScript.',
      '3 years of backend development with Golang and PostgreSQL.',
      'Delivered full-stack features at startups and major defense contractors.',
      'Leveraged AI tooling (Claude Code) to accelerate development cycles.',
    ],
  },
];

export const education = {
  degree: 'B.S. in Software Engineering',
  school: 'San Jose State University',
  period: 'Class of 2019',
};

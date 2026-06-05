export const personal = {
  name: "Atul Murali",
  title: "Web Developer",
  tagline:
    "Building user-friendly web apps with React, Vue, TypeScript, and Golang — across startups, nonprofits, and defense contractors.",
  bio: "Web Developer with 5 years of frontend experience and 3 years of backend experience. My core stack is React, Vue, and TypeScript on the frontend, and Golang and PostgreSQL on the backend. I enjoy leveraging AI tools like Claude Code to accelerate feature development, and have worked across a range of environments — from fast-moving startups to major defense contractors.",
  github: "https://github.com/atulmi",
  linkedin: "https://www.linkedin.com/in/atul-murali-4703061a3/",
  email: "atul.murali@outlook.com",
  story:
    "My journey as a web developer began in high school, where I'd often finish classwork early with nothing to do. Since the school's Chromebooks blocked most distracting websites, I ended up on w3schools.com teaching myself HTML, CSS, and JavaScript. Initially web development was just a way to pass the time until I could get out of class, but gradually it developed into a genuine passion, and eventually, a career.",
};

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML/CSS",
      "Redux",
      "Bootstrap",
      "MUI",
    ],
  },
  {
    category: "Backend",
    items: ["Golang", "Node.js", "REST APIs", "SQL", "Python"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "Vite",
      "AgGrid",
      "Tanstack Query",
      "pdfmake",
      "Claude Code",
    ],
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
    title: "Wikipedia Country Notes",
    description:
      "Interactive world map where users click countries to explore random Wikipedia articles. Lets users save Wikipedia summaries as notes or write their own custom country notes.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "Grocer-E",
    description:
      "Mini grocery shopping website built in an Agile team of 10. Features a React frontend integrated with a Firebase backend for real-time data.",
    tags: ["React", "Bootstrap", "CSS", "Firebase"],
    github: "#",
    live: null,
  },
  {
    title: "PDF Toolkit",
    description:
      "Two Python utilities: one generates a spreadsheet of all PDFs in a folder with page counts; the other produces customizable note-taking templates with adjustable heading granularity.",
    tags: ["Python"],
    github: "#",
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
    title: "Software Engineer Volunteer",
    company: "Vivid Kids Foundation — Costa Mesa, CA (Remote)",
    period: "Sept 2024 – Present",
    bullets: [
      "Built an educational testing app for child specialists using React, Redux, and TypeScript, including dual-monitor and multi-stream video/audio recording.",
      "Led end-to-end development of a PDF report feature, generating comprehensive performance reports using pdfmake.",
      "Integrated the React frontend with a Golang + PostgreSQL backend; migrated the DB layer from SQLX to GORM.",
      "Upgraded to the latest React and MUI; migrated the build tool from React-Scripts to Vite, cutting build time from 2 min to ~5 sec.",
    ],
  },
  {
    title: "Contract UI Developer",
    company: "Smart Connections Consulting, LLC — Austin, TX (Remote)",
    period: "Feb 2024 – Aug 2024",
    bullets: [
      "Built a proof-of-concept compliance tracking site using Vue and Bootstrap for managing chemical industry records.",
      "Implemented searchable AgGrid tables for chemical import/export records reviewed by national and world authorities.",
      "Collaborated with backend developers to integrate the Vue frontend with a Java and PostgreSQL backend.",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Rocket Communications, Inc — San Francisco, CA (Remote)",
    period: "July 2022 – April 2023",
    bullets: [
      "Built 2 interactive React web apps simulating satellite management workflows for a defense contractor.",
      "Rewrote a Vue application in React, TypeScript, and Redux as part of a 5-person team.",
      "Overhauled CSS and SCSS styles to match updated Figma designs from the UX team.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "NeuroLeap Corp — San Jose, CA (Remote)",
    period: "May 2020 – Dec 2022",
    bullets: [
      "Built an educational testing app with React, Redux, and TypeScript for cognitive and motor skill assessments, collaborating with 10 interns.",
      "Developed an admin dashboard using Vue and Bootstrap for creating and deploying custom exams.",
      "Updated Golang REST APIs and PostgreSQL schemas, focusing on authentication (login, registration, password recovery).",
    ],
  },
];

export const education = {
  degree: "B.S. in Software Engineering",
  school: "San Jose State University",
  period: "2017 – 2021",
};

export interface Certification {
  name: string;
  issuer: string;
}

export const certifications: Certification[] = [
  {
    name: "Google Cloud Professional Machine Learning Engineer",
    issuer: "Google Cloud",
  },
];

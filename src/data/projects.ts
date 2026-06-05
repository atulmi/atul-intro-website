// Set github/live to null to hide the button; '#' is treated as placeholder (shows "Links coming soon")
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
      "Interactive world map where users click countries to explore random Wikipedia articles. Lets users save Wikipedia summaries as notes or write their own custom country notes. Built with Claude Code.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB", "Claude Code"],
    github: "https://github.com/atulmi/global-history-app",
    live: null,
  },
  {
    title: "This Portfolio Site",
    description:
      "Personal portfolio built with React, TypeScript, MUI, and Vite. Includes Cypress e2e tests and deploys automatically to GitHub Pages via GitHub Actions CI/CD. Built with Claude Code.",
    tags: ["React", "TypeScript", "MUI", "Vite", "Cypress", "Claude Code"],
    github: "https://github.com/atulmi/atul-intro-website",
    live: "https://atulmi.github.io/atul-intro-website/",
  },
  {
    title: "PDF Toolkit",
    description:
      "Two Python utilities: one generates a spreadsheet of all PDFs in a folder with page counts; the other produces customizable note-taking templates with adjustable heading granularity.",
    tags: ["Python"],
    github: "https://github.com/atulmi/atul-personal-projects",
    live: null,
  },
];

import type { ReactNode } from "react";

// Set github/live to null to hide the button; '#' is treated as placeholder (shows "Links coming soon")
export interface Project {
  title: string;
  description: ReactNode;
  tags: string[];
  github: string | null;
  live: string | null;
}

export const projects: Project[] = [
  {
    title: "Wikipedia Country Notes",
    description:
      "Interactive world map where users click countries to explore random Wikipedia articles. Lets users save Wikipedia summaries as notes or write their own custom country notes. Built with Claude Code.",
    tags: ["React", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/atulmi/global-history-app",
    live: null,
  },
  {
    title: "This Portfolio Site",
    description:
      "Personal portfolio built with React, TypeScript, MUI, and Vite. Includes Cypress e2e tests and deploys automatically to GitHub Pages via GitHub Actions CI/CD. Built with Claude Code.",
    tags: ["React", "TypeScript", "MUI", "Vite", "Cypress"],
    github: "https://github.com/atulmi/atul-intro-website",
    live: null,
  },
  {
    title: "Personal Python Projects",
    description: (
      <>
        A collection of Python scripts that allows users to generate notetaking
        templates, create spreadsheets cataloging PDFs by page count, and scrape{" "}
        <a
          href="http://countrystudies.us"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "blue",
            textDecorationColor: "currentColor",
            textDecoration: "none",
          }}
        >
          Country Study
        </a>{" "}
        books from the Library of Congress... and various other things.
      </>
    ),
    tags: ["Python"],
    github: "https://github.com/atulmi/atul-personal-projects",
    live: null,
  },
];

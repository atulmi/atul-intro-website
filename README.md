# Atul Murali — Personal Portfolio

Personal portfolio and intro site built with React, TypeScript, MUI, and Vite. Deployed to GitHub Pages via GitHub Actions. Built with [Claude Code](https://claude.ai/code).

**Live site:** https://atulmi.github.io/atul-intro-website/

**Resume:** https://atulmi.github.io/atul-intro-website/Atul%20Murali%20Resume.pdf

## Stack

- React 19 + TypeScript
- MUI v9 (Material UI) — component library and styling via `sx` prop
- Vite — build tool
- GitHub Actions — CI/CD: runs Cypress e2e tests on push, deploys to GitHub Pages if tests pass

## Project structure

```
src/
  data/
    personal.ts         # Name, bio, tagline, social links, resume filename
    skills.ts           # Skill categories and items
    experience.ts       # Work history (newest-first)
    projects.tsx        # Side projects with links (.tsx to support JSX in descriptions)
    education.ts        # Degrees and certifications
  components/           # One file per section (Navbar, Hero, About, Skills, Experience, Projects, Education, Footer)
  theme.ts              # MUI theme (Inter font via Fontsource, blue primary #2563eb, light palette)
  App.tsx               # Root — ThemeProvider + section order
public/
  Atul Murali Resume.pdf  # Resume served at base URL
cypress/
  e2e/portfolio.cy.ts   # End-to-end tests
.github/
  workflows/deploy.yml  # Test → deploy pipeline
```

## Content

All site content is split across focused files in `src/data/`. Edit those files to update the site — no need to touch any component files.

## Local development

```bash
npm install
npm run dev        # Dev server at http://localhost:5173
```

## Running tests

```bash
npm run build
npm run preview    # Serves built output at http://localhost:4173
npm run test:e2e   # Run Cypress tests against the preview server
npm run test:e2e:open  # Open Cypress UI
```

## Deployment

Deployment is automatic — push to `main` or `master` and GitHub Actions will run the Cypress tests, then deploy to GitHub Pages if they pass.

For manual deployment:

```bash
npm run deploy
```

> Requires the GitHub Pages source to be set to **GitHub Actions** in repo Settings → Pages.

// Rendered as a vertical timeline in the Experience section; order is newest-first
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
      "Built a dual-monitor educational testing app enabling child specialists to conduct assessments for special needs children. Used React, Redux, and TypeScript.",
      "Led end-to-end development of a report feature letting specialists generate comprehensive performance reports and graphs, using pdfmake to export the full report as a PDF.",
      "Implemented multi-stream video recording across webcams, plus per-task audio recording and webcam snapshots throughout assessments.",
      "Integrated the React frontend with a Golang + PostgreSQL backend; updated multiple services and migrated the database layer from SQLX to GORM.",
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
      "Built 2 interactive React web apps simulating satellite management workflows.",
      "Rewrote a defense contractor's Vue app in React, TypeScript, and Redux as part of a 5-person team.",
      "Leveraged technologies like ChartJS, AgGrid, and Tanstack Query, conducting automated testing with Cypress.",
      "Overhauled CSS and SCSS styles to match updated Figma designs from the UX team.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "NeuroLeap Corp — San Jose, CA (Remote)",
    period: "May 2020 – Dec 2022",
    bullets: [
      "Built an educational testing app with React, Redux, and TypeScript for assessing children's cognitive, language, and motor skills, collaborating with a team of 10 interns.",
      "Developed an admin dashboard with Vue and Bootstrap for creating and deploying custom exams to assess and improve child performance.",
      "Built an informational website for parents of special needs children using Vue, Vuex, and CSS.",
      "Updated Golang REST APIs and PostgreSQL schemas focusing on authentication (login, registration, password recovery); integrated backend changes with the React and Vue frontends.",
      "Wrote technical onboarding documentation to resolve common setup issues for new interns, reducing onboarding time; assisted interns with coding tasks and machine setup.",
    ],
  },
];

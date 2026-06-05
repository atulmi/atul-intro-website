import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    // Port 4173 is Vite's preview server (built output), not the dev server (5173).
    // Tests run against the built output so they match what gets deployed.
    baseUrl: 'http://localhost:4173',
    supportFile: false,
  },
})

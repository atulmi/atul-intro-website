import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './theme'
import Navbar from './components/Navbar'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Sections added in subsequent steps */}
      </main>
    </ThemeProvider>
  )
}

export default App

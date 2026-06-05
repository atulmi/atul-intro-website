import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { personal } from '../data/portfolio'

export default function About() {
  return (
    <Box
      id="about"
      component="section"
      sx={{ bgcolor: 'background.paper', py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.12em', display: 'block' }}
        >
          About
        </Typography>

        <Typography variant="h4" sx={{ mt: 1, mb: 4, letterSpacing: '-0.01em' }}>
          Who I Am
        </Typography>

        <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 720, mb: 3 }}>
          {personal.bio}
        </Typography>

        <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 720 }}>
          {personal.story}
        </Typography>
      </Container>
    </Box>
  )
}

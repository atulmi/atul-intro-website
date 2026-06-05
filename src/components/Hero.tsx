import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import DescriptionIcon from '@mui/icons-material/Description'
import { personal } from '../data/portfolio'

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      sx={{
        height: '88vh',
        minHeight: 500,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box sx={{ maxWidth: 680 }}>
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.12em', mb: 1.5, display: 'block' }}
          >
            {personal.title}
          </Typography>

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
              fontWeight: 700,
              color: 'text.primary',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              mb: 3,
            }}
          >
            Hi, I&apos;m{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              {personal.name}
            </Box>
          </Typography>

          <Typography
            component="p"
            sx={{ fontSize: { xs: '1rem', sm: '1.15rem' }, color: 'text.secondary', lineHeight: 1.7, mb: 4, maxWidth: 560 }}
          >
            {personal.tagline}
          </Typography>

          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 4 }}>
            <Button variant="contained" href="#experience" size="large" sx={{ px: 3.5 }}>
              View Experience
            </Button>
            <Button
              variant="outlined"
              href="#projects"
              size="large"
              sx={{
                px: 3.5,
                borderColor: 'divider',
                color: 'text.primary',
                '&:hover': { borderColor: 'primary.main', color: 'primary.main', bgcolor: 'transparent' },
              }}
            >
              View Projects
            </Button>
          </Box>

          <Box sx={{ display: 'flex', gap: 1, ml: -1 }}>
            <Button
              component="a"
              href={`${import.meta.env.BASE_URL}${personal.resume}`}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<DescriptionIcon />}
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
            >
              Resume
            </Button>
            <Button
              component="a"
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
            >
              GitHub
            </Button>
            <Button
              component="a"
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LinkedInIcon />}
              sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
            >
              LinkedIn
            </Button>
          </Box>
        </Box>
      </Container>

    </Box>
  )
}

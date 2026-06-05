import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import EmailIcon from '@mui/icons-material/Email'
import DescriptionIcon from '@mui/icons-material/Description'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <Box component="footer">
      {/* Contact section */}
      <Box
        id="contact"
        sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 }, textAlign: 'center' }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="overline"
            sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.12em' }}
          >
            Contact
          </Typography>

          <Typography variant="h4" sx={{ mt: 1, mb: 2, letterSpacing: '-0.01em' }}>
            Get In Touch
          </Typography>

          <Typography sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.8 }}>
            I&apos;m actively looking for my next frontend or full-stack developer role.
            If you know of a position that might be a good fit, I&apos;d love to hear from you.
          </Typography>

          <Button
            variant="contained"
            size="large"
            href={`mailto:${personal.email}`}
            startIcon={<EmailIcon />}
            sx={{ px: 4, mb: 4 }}
          >
            Send an Email
          </Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
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
        </Container>
      </Box>

      {/* Footer bar */}
      <Box sx={{ bgcolor: 'primary.main', py: 3 }}>
        <Container maxWidth="lg">
          <Divider sx={{ borderColor: 'rgba(255,255,255,0.15)', mb: 3 }} />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
            }}
          >
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              © {new Date().getFullYear()} {personal.name}. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              Built with React + TypeScript + MUI
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  )
}

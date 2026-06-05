import Box from '@mui/material/Box'
import EmailIcon from '@mui/icons-material/Email'
import Typography from '@mui/material/Typography'
import { personal } from '../data/portfolio'

export default function FloatingContact() {
  return (
    <Box
      component="a"
      href={`mailto:${personal.email}`}
      sx={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.75,
        color: 'text.secondary',
        textDecoration: 'none',
        '&:hover': { color: 'primary.main' },
        transition: 'color 0.2s',
        zIndex: 1000,
      }}
    >
      <EmailIcon fontSize="small" />
      <Typography
        variant="caption"
        sx={{
          fontSize: '0.7rem',
          fontWeight: 500,
          writingMode: 'vertical-rl',
          letterSpacing: '0.08em',
        }}
      >
        Get in touch
      </Typography>
    </Box>
  )
}

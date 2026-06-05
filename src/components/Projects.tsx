import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid2'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.12em' }}
        >
          Side Projects
        </Typography>

        <Typography variant="h4" sx={{ mt: 1, mb: 2, letterSpacing: '-0.01em' }}>
          Things I&apos;ve Built
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 6, maxWidth: 520 }}>
          Personal projects built in my spare time.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid key={project.title} size={{ xs: 12, md: 4 }}>
              <Card
                variant="outlined"
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 2,
                  borderColor: 'grey.300',
                  borderWidth: '1.5px',
                  transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: 4,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1, p: 3, pb: '12px !important' }}>
                  <Typography variant="h3" sx={{ mb: 1.5, fontSize: '1.1rem' }}>
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: 'text.secondary', lineHeight: 1.7 }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <Box sx={{ px: 3, pb: 1.5, display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {project.tags.map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(37,99,235,0.1)',
                        color: 'primary.main',
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        border: 'none',
                      }}
                    />
                  ))}
                </Box>

                <CardActions sx={{ px: 3, pb: 2.5, gap: 1 }}>
                  {project.github && project.github !== '#' && (
                    <Button
                      size="small"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<GitHubIcon fontSize="small" />}
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      Code
                    </Button>
                  )}
                  {project.live && project.live !== '#' && (
                    <Button
                      size="small"
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<OpenInNewIcon fontSize="small" />}
                      sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
                    >
                      Live
                    </Button>
                  )}
                  {(project.github === '#' || project.live === '#') && (
                    <Typography variant="caption" sx={{ color: 'text.disabled', fontStyle: 'italic' }}>
                      Links coming soon
                    </Typography>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

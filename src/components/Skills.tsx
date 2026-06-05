import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Chip from '@mui/material/Chip'
import Grid from '@mui/material/Grid'
import { skills } from '../data/skills'

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ bgcolor: 'background.default', py: { xs: 6, md: 8 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="overline"
          sx={{ color: 'primary.main', fontWeight: 600, letterSpacing: '0.12em' }}
        >
          Skills
        </Typography>

        <Typography variant="h4" sx={{ mt: 1, mb: 2, letterSpacing: '-0.01em' }}>
          What I Work With
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 6, maxWidth: 520 }}>
          Technologies and tools I use across the full stack.
        </Typography>

        <Grid container spacing={3}>
          {skills.map(({ category, items }) => (
            <Grid key={category} size={{ xs: 12, sm: 6, md: 3 }}>
              <Paper
                variant="outlined"
                sx={{
                  p: 3,
                  height: '100%',
                  borderRadius: 2,
                  borderColor: 'divider',
                  '&:hover': { borderColor: 'primary.main', boxShadow: 2 },
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                }}
              >
                <Typography
                  variant="overline"
                  sx={{
                    color: 'primary.main',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    display: 'block',
                    mb: 2,
                  }}
                >
                  {category}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {items.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: 'grey.200',
                        color: 'text.primary',
                        fontWeight: 500,
                        fontSize: '0.8rem',
                        border: '1px solid',
                        borderColor: 'grey.400',
                        '&:hover': { bgcolor: 'primary.main', color: '#fff', borderColor: 'primary.main' },
                        transition: 'background-color 0.15s, color 0.15s',
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

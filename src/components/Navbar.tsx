import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import MenuIcon from '@mui/icons-material/Menu'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 })

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          bgcolor: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(8px)',
          borderBottom: scrolled ? '1px solid' : '1px solid transparent',
          borderColor: scrolled ? 'divider' : 'transparent',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        <Toolbar sx={{ maxWidth: 1100, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography
            component="a"
            href="#hero"
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              '&:hover': { color: 'primary.main' },
            }}
          >
            {personal.name}
          </Typography>

          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 0.5 }}>
            {navLinks.map(({ label, href }) => (
              <Button
                key={href}
                href={href}
                sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}
              >
                {label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            edge="end"
            aria-label="open menu"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { sm: 'none' }, color: 'text.primary' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{ sx: { width: 220 } }}
      >
        <List sx={{ pt: 2 }}>
          {navLinks.map(({ label, href }) => (
            <ListItem key={href} disablePadding>
              <ListItemButton
                component="a"
                href={href}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Spacer so content starts below the fixed AppBar */}
      <Toolbar />
    </>
  )
}

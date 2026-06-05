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
import MenuIcon from '@mui/icons-material/Menu'
import { personal } from '../data/personal'

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Skills',     href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Education',  href: '#education' },
  { label: 'Contact',    href: '#contact' },
]

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <AppBar position="fixed" elevation={2} sx={{ bgcolor: 'primary.main' }}>
        <Toolbar sx={{ maxWidth: 1100, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography
            component="a"
            href="#hero"
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: '#fff',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              '&:hover': { color: 'rgba(255,255,255,0.8)' },
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
                sx={{
                  color: 'rgba(255,255,255,0.85)',
                  '&:hover': { color: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
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
            sx={{ display: { sm: 'none' }, color: '#fff' }}
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
        slotProps={{ paper: { sx: { width: 220 } } }}
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

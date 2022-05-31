import { AppBar, Box, Container, IconButton, Menu, Toolbar, Typography, MenuItem, Button, Stack } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import maruYBoris2 from '../assets/img/maruyboris.png'

const pages = [
    // { name: 'Nuestra Boda', id: 'nuestraBoda' },
    { name: 'Inicio', id: 'inicio' },
    { name: 'Locación', id: 'locacion' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Regalos', id: 'regalos' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Nav() {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }
    const handleOpenUserMenu = event => {
        setAnchorElUser(event.currentTarget)
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null)
    }

    return (
        <AppBar position='fixed' sx={{ width: '100vw', top: 0, left: 0, right: 0 }}>
            <Container maxWidth='xxl' /* sx={{ w: '100%' }} */>
                <Toolbar disableGutters>
                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        sx={{ flexGrow: 1, display: { /*  xs: 'none', */ md: 'flex' } }}
                    >
                        {pages.map(page => (
                            <Button
                                key={page.id}
                                component='a'
                                href={`#${page.id}`}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, display: 'block', color: 'inherit', px: { sm: 3, xs: 1 } }}
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav

import { AppBar, Button, Container, Stack, Toolbar } from '@mui/material'
import { useState } from 'react'

const pages = [
    // { name: 'Nuestra Boda', id: 'nuestraBoda' },
    { name: 'Inicio', id: 'inicio' },
    { name: 'Locación', id: 'locacion' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Regalos', id: 'regalos' },
]
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Nav(props) {
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
        <AppBar
            position='fixed'
            sx={{
                width: '100vw',
                top: { lg: 0, md: 0, sm: 0, xs: 'unset' },
                bottom: { lg: 'unset', md: 'unset', sm: 'unset', xs: 0 },
                left: 0,
                right: 0,
            }}
        >
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

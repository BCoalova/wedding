import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useGlobalContext } from '../context/GlobalContext'

const pages = [
    // { name: 'Nuestra Boda', id: 'nuestraBoda' },
    { name: 'Inicio', id: 'inicio' },
    { name: 'Locación', id: 'locacion' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Traslado', id: 'traslado' },
    { name: 'Regalos', id: 'regalos' },
]

function Nav() {
    const { currentUser } = useGlobalContext()

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: '100vw',
                // top: { lg: 0, md: 0, sm: 0, xs: 'unset' },
                // bottom: { lg: 'unset', md: 'unset', sm: 'unset', xs: 0 },
                left: 0,
                right: 0,
            }}
        >
            <Container maxWidth='xxl' /* sx={{ w: '100%' }} */>
                <Toolbar disableGutters sx={{ justifyContent: 'end' }}>
                    <Stack
                        direction='row'
                        justifyContent='center'
                        alignItems='center'
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                    >
                        {pages.map(page => (
                            <Button
                                key={page.id}
                                component={HashLink}
                                to={`#${page.id}`}
                                smooth
                                sx={{ my: 2, px: { sm: 3, xs: 1 } }}
                                size='small'
                            >
                                {page.name}
                            </Button>
                        ))}
                        {currentUser && (
                            <IconButton component={Link} to='/admin'>
                                <AdminPanelSettingsIcon color='primary' />
                            </IconButton>
                        )}
                    </Stack>
                    <Stack sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size='large'
                            aria-label='account of current user'
                            aria-controls='menu-appbar'
                            aria-haspopup='true'
                            onClick={handleOpenNavMenu}
                            color='inherit'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id='menu-appbar'
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map(page => (
                                <MenuItem
                                    key={page.id}
                                    onClick={handleCloseNavMenu}
                                    component={HashLink}
                                    to={`#${page.id}`}
                                    smooth
                                    size='small'
                                >
                                    <Typography textAlign='center'>{page.name}</Typography>
                                </MenuItem>
                            ))}
                            {currentUser && (
                                <MenuItem component={Link} to='/admin'>
                                    <IconButton>
                                        <AdminPanelSettingsIcon color='primary' />
                                    </IconButton>
                                </MenuItem>
                            )}
                        </Menu>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav

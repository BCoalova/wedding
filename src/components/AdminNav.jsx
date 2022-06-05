import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import MenuIcon from '@mui/icons-material/Menu'
import { AppBar, Box, Button, IconButton, Menu, MenuItem, Stack, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React, { useCallback, useMemo, useState } from 'react'
import { Link, /* useNavigate, */ NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'

export default function AdminNav() {
    const { logOut } = useGlobalContext()

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = event => {
        setAnchorElNav(event.currentTarget)
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null)
    }

    const handleLogOut = useCallback(async () => {
        await logOut()
    }, [logOut])

    const pages = useMemo(() => {
        return [
            { id: 1, type: 'iconButton', label: <HomeIcon color='primary' />, functionality: { type: 'link', to: '/' } },
            { id: 2, type: 'button', label: 'Formularios', functionality: { type: 'navLink', to: '/admin' } },
            { id: 3, type: 'button', label: 'confirmados', functionality: { type: 'navLink', to: '/confirmados' } },
            { id: 4, type: 'button', label: 'transporte', functionality: { type: 'navLink', to: '/transporte' } },
            {
                id: 5,
                type: 'iconButton',
                label: <LogoutIcon color='primary' />,
                functionality: { type: 'onClick', to: handleLogOut },
            },
        ]
    }, [handleLogOut])

    // let navigate = useNavigate()

    return (
        <AppBar position='fixed'>
            <Container maxWidth='xxl'>
                <Toolbar disableGutters>
                    <Stack width='100%' direction='row' justifyContent='center' sx={{ display: { xs: 'none', md: 'flex' } }}>
                        {pages.map(page => (
                            <React.Fragment key={page.id}>
                                {page.type === 'iconButton' && page.functionality.type === 'link' && (
                                    <IconButton size='small' component={Link} to={page.functionality.to}>
                                        {page.label}
                                    </IconButton>
                                )}
                                {page.type === 'button' && page.functionality.type === 'navLink' && (
                                    <Button size='small' component={NavLink} to={page.functionality.to}>
                                        {page.label}
                                    </Button>
                                )}
                                {page.type === 'iconButton' && page.functionality.type === 'onClick' && (
                                    <IconButton size='small' onClick={page.functionality.to}>
                                        {page.label}
                                    </IconButton>
                                )}
                            </React.Fragment>
                        ))}
                    </Stack>
                    <Stack width='100%' direction='row' justifyContent='end' sx={{ display: { xs: 'flex', md: 'none' } }}>
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
                                <Box key={page.id}>
                                    {page.type === 'iconButton' && page.functionality.type === 'link' && (
                                        <MenuItem>
                                            <IconButton size='small' component={Link} to={page.functionality.to}>
                                                {page.label}
                                            </IconButton>
                                        </MenuItem>
                                    )}
                                    {page.type === 'button' && page.functionality.type === 'navLink' && (
                                        <MenuItem>
                                            <Button size='small' component={NavLink} to={page.functionality.to}>
                                                {page.label}
                                            </Button>
                                        </MenuItem>
                                    )}
                                    {page.type === 'iconButton' && page.functionality.type === 'onClick' && (
                                        <MenuItem>
                                            <IconButton size='small' onClick={page.functionality.to}>
                                                {page.label}
                                            </IconButton>
                                        </MenuItem>
                                    )}
                                </Box>
                            ))}
                        </Menu>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

import { AppBar, Box, Container, IconButton, Menu, Toolbar, Typography, MenuItem, Button, Stack } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
import maruYBoris from '../assets/img/Untitled-1-01.svg'

const pages = ['Nuestra Boda', 'Locación', 'RSPV', 'Regalos']
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
        <AppBar position='fixed' sx={{ width: '100%' }}>
            <Container maxWidth='xxl' sx={{ w: '100%' }}>
                <Toolbar disableGutters>
                    <Box p={1}>
                        <Box component='img' src={maruYBoris} width={100} />
                    </Box>

                    {/*
                    <Stack
                        direction='row'
                        justifyContent='right'
                        alignItems='center'
                        sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                    >
                         pages.map(page => (
                            <Button key={page} onClick={handleCloseNavMenu} sx={{ my: 2, display: 'block', color: 'inherit' }}>
                                {page}
                            </Button>
                        )) 
                    </Stack>*/}
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav

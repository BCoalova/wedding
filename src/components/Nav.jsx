import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import { AppBar, Button, Container, IconButton, Stack, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useGlobalContext } from '../context/GlobalContext'
const pages = [
    // { name: 'Nuestra Boda', id: 'nuestraBoda' },
    { name: 'Inicio', id: 'inicio' },
    { name: 'Locación', id: 'locacion' },
    { name: 'RSVP', id: 'rsvp' },
    { name: 'Translado', id: 'translado' },
    { name: 'Regalos', id: 'regalos' },
]

function Nav() {
    const { currentUser } = useGlobalContext()

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
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Nav

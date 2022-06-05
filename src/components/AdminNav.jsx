import { AppBar, Button, IconButton, Stack, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import { Link, /* useNavigate, */ NavLink } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import LogoutIcon from '@mui/icons-material/Logout'
import HomeIcon from '@mui/icons-material/Home'

export default function AdminNav() {
    const { logOut } = useGlobalContext()

    // let navigate = useNavigate()

    const handleLogOut = async () => {
        await logOut()
    }

    return (
        <AppBar position='fixed'>
            <Container maxWidth='xxl'>
                <Toolbar disableGutters>
                    <Stack width='100%' direction='row' justifyContent='center'>
                        <IconButton size='small' component={Link} to='/'>
                            <HomeIcon color='primary' />
                        </IconButton>
                        <Button size='small' component={NavLink} to='/admin'>
                            Formularios
                        </Button>
                        <Button size='small' component={NavLink} to='/confirmados'>
                            confirmados
                        </Button>
                        <Button size='small' component={NavLink} to='/transporte'>
                            transporte
                        </Button>
                        <IconButton size='small' onClick={handleLogOut}>
                            <LogoutIcon color='primary' />
                        </IconButton>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

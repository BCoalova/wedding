import { AppBar, Button, Stack, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'

export default function AdminNav() {
    const { logOut } = useGlobalContext()

    let navigate = useNavigate()

    const handleLogOut = async () => {
        await logOut()
        navigate('/login')
    }

    return (
        <AppBar position='fixed'>
            <Container maxWidth='xxl'>
                <Toolbar disableGutters>
                    <Stack width='100%' direction='row' justifyContent='center'>
                        <Button component={Link} to='/admin'>
                            Formularios
                        </Button>
                        <Button component={Link} to='/confirmados'>
                            confirmados
                        </Button>
                        <Button onClick={handleLogOut}>salir</Button>
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

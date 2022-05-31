import { Button, Card, CardActions, CardContent, CardHeader, Stack, TextField } from '@mui/material'
import { Container } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import FullHeightCenter from '../../components/FullHeightCenter'
import { useGlobalContext } from '../../context/GlobalContext'
import useInput from '../../hooks/useInput'

export default function Login() {
    const { login } = useGlobalContext()
    let navigate = useNavigate()
    const [email, bindEmail /* , resetEmail, clearEmail */] = useInput('maruyboris.19.11.22@gmail.com')
    const [password, bindPassword /* , resetPassword, clearPassword */] = useInput('Maru_19.11.2022_ADMIN')

    const handleLogin = async e => {
        e.preventDefault()
        await login(email, password)
        navigate('/admin')
    }

    return (
        <FullHeightCenter>
            <Container maxWidth='xxl'>
                <Stack alignItems='center' justifyContent='center'>
                    <Card sx={{ p: 3 }} elevation={5}>
                        <Stack component='form' gap={3} textAlign='center' onSubmit={handleLogin}>
                            <CardHeader title='Ingresar' />
                            <CardContent component={Stack} gap={1}>
                                <TextField
                                    {...bindEmail}
                                    variant='outlined'
                                    type='email'
                                    label='Email'
                                    size='small'
                                    autoComplete='email'
                                />
                                <TextField
                                    {...bindPassword}
                                    variant='outlined'
                                    type='password'
                                    label='Contraseña'
                                    size='small'
                                    autoComplete='current-password'
                                />
                            </CardContent>
                            <CardActions>
                                <Button variant='outlined' sx={{ flexGrow: 0, mt: 2 }} type='submit'>
                                    ¡Vamos!
                                </Button>
                            </CardActions>
                        </Stack>
                    </Card>
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

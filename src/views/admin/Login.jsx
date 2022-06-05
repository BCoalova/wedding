import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import { Card, CardActions, CardContent, CardHeader, IconButton, Stack, TextField, Tooltip } from '@mui/material'
import { Container } from '@mui/system'
import { Link, useNavigate } from 'react-router-dom'
import topLeftGradient from '../../assets/bg_corners/top-left-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import { useGlobalContext } from '../../context/GlobalContext'
import useInput from '../../hooks/useInput'

export default function Login() {
    const { login } = useGlobalContext()
    let navigate = useNavigate()
    const [email, bindEmail /* , resetEmail, clearEmail */] = useInput('')
    const [password, bindPassword /* , resetPassword, clearPassword */] = useInput('')

    const handleLogin = async e => {
        e.preventDefault()
        await login(email, password)
        navigate('/admin')
    }

    return (
        <FullHeightCenter
            sx={{
                position: 'relative',
                backgroundImage: `url(${topLeftGradient})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                overflow: 'hidden',
            }}
        >
            <Container maxWidth='xxl'>
                <Stack alignItems='center' justifyContent='center'>
                    <Card sx={{ p: 3 }} elevation={5}>
                        <Stack component='form' gap={3} textAlign='center' onSubmit={handleLogin}>
                            <CardHeader title='Ingresar' />
                            <CardContent component={Stack} gap={2}>
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
                            <Stack component={CardActions} justifyContent='space-between' alignItems='center' direction='row'>
                                <Tooltip title='Volver al inicio' arrow placement='right'>
                                    <IconButton size='small' variant='outlined' component={Link} to='/' type='button'>
                                        <HomeIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title='Ingresar' arrow placement='left'>
                                    <IconButton size='small' variant='outlined' type='submit'>
                                        <LoginIcon color='primary' />
                                    </IconButton>
                                </Tooltip>
                            </Stack>
                        </Stack>
                    </Card>
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

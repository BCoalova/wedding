import VisibilityIcon from '@mui/icons-material/Visibility'
import { Box, Button, Container, Icon, IconButton, Link, Paper, Stack, Tooltip, Typography } from '@mui/material'
import topLeftTexture from '../../assets/bg_corners/top-left-light-green-texture.svg'
import giftsIcon from '../../assets/img/sorpresa.svg'
import tirita1 from '../../assets/img/tirita-1.jpg'
import tirita2 from '../../assets/img/tirita-2.jpg'
import tirita3 from '../../assets/img/tirita-3.jpg'
import FullHeightCenter from '../../components/FullHeightCenter'
import copyToClipboard from '../../helpers/copyToClipboard'
import useBoolean from '../../hooks/useBoolean'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
const tirasArr = [tirita1, tirita2, tirita3]

function Gifts() {
    const [isOpenCBU, closeCBU, openCBU] = useBoolean(false)
    const [isOpenAlias, closeAlias, openAlias] = useBoolean(false)
    const [isOpenNCuenta, closeNCuenta, openNCuenta] = useBoolean(false)
    const [isOpenDNI, closeDNI, openDNI] = useBoolean(false)
    const [isCBU, , , , toggleCBU] = useBoolean(false)

    const handleCopy = (string, type) => {
        copyToClipboard(string)

        switch (type) {
            case 'CBU':
                openCBU()
                setTimeout(() => closeCBU(), 1500)
                break
            case 'Alias':
                openAlias()
                setTimeout(() => closeAlias(), 1500)
                break
            case 'NCuenta':
                openNCuenta()
                setTimeout(() => closeNCuenta(), 1500)
                break
            case 'DNI':
                openDNI()
                setTimeout(() => closeDNI(), 1500)
                break

            default:
                break
        }
    }

    return (
        <FullHeightCenter
            id='regalos'
            sx={{
                backgroundImage: `url(${topLeftTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                textAlign: 'center',
                pt: { lg: 15, md: 10, sm: 10, xs: 5 },
                pb: { lg: 15, md: 10, sm: 10, xs: 10 },
                marginTop: '-1px',
            }}
        >
            <Container maxWidth='xxl'>
                <Stack justifyContent='center' alignItems='center' sx={{ textAlign: 'center' }} gap={4}>
                    <Typography variant='h2' color='primary' mb={1}>
                        Regalos
                    </Typography>
                    <Stack gap={4} justifyContent='center' alignItems='center'>
                        <Stack maxWidth={450} gap={2}>
                            <Typography>
                                Lo más importante es tu presencia, pero si queres hacernos un regalo podes ayudarnos con nuestra
                                luna de miel
                            </Typography>
                            <Box component='img' src={giftsIcon} sx={{ height: 100, width: '100%' }} />

                            <Stack gap={2}>
                                <Typography>Te dejamos los datos de nuestra cuenta</Typography>
                                <Box>
                                    <Button variant='outlined' size='small' onClick={toggleCBU}>
                                        {isCBU ? 'ocultar datos' : 'Ver Datos'}
                                    </Button>
                                </Box>
                                {isCBU && (
                                    <Stack>
                                        <Typography>
                                            Alias:{' '}
                                            <Tooltip title='Copiado' arrow open={isOpenAlias} placement='top'>
                                                <Link
                                                    underline='none'
                                                    onClick={() => handleCopy('maruyboris', 'Alias')}
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    maruyboris
                                                </Link>
                                            </Tooltip>
                                        </Typography>
                                        <Typography>
                                            CBU:{' '}
                                            <Tooltip title='Copiado' arrow open={isOpenCBU} placement='top'>
                                                <Link
                                                    underline='none'
                                                    onClick={() => handleCopy('0720575088000001520154', 'CBU')}
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    0720575088000001520154
                                                </Link>
                                            </Tooltip>
                                        </Typography>
                                        <Typography>
                                            N° de cuenta:{' '}
                                            <Tooltip title='Copiado' arrow open={isOpenNCuenta} placement='top'>
                                                <Link
                                                    underline='none'
                                                    onClick={() => handleCopy('575-015201/5', 'NCuenta')}
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    575-015201/5
                                                </Link>
                                            </Tooltip>
                                        </Typography>
                                        <Typography>
                                            DNI:{' '}
                                            <Tooltip title='Copiado' arrow open={isOpenDNI} placement='top'>
                                                <Link
                                                    underline='none'
                                                    onClick={() => handleCopy('34358687', 'DNI')}
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    34358687
                                                </Link>
                                            </Tooltip>
                                        </Typography>
                                    </Stack>
                                )}
                            </Stack>
                        </Stack>
                        <Paper elevation={4} sx={{ p: 2, mt: 2 }}>
                            <Stack
                                direction='row'
                                alignItems='center'
                                justifyContent='center'
                                gap={1}
                                sx={{ width: '100%', alignSelf: 'stretch' }}
                            >
                                {tirasArr.map((tirita, idx) => (
                                    <Box
                                        key={idx}
                                        component='img'
                                        src={tirita}
                                        sx={{ maxWidth: 350, width: '33%', borderRadius: 1 }}
                                    />
                                ))}
                            </Stack>
                        </Paper>
                    </Stack>
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

export default Gifts

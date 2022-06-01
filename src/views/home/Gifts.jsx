import { Box, Container, Link, Stack, Tooltip, Typography } from '@mui/material'
import FullHeightCenter from '../../components/FullHeightCenter'
import giftsIcon from '../../assets/img/sorpresa.svg'
import tirita1 from '../../assets/img/tirita-1.jpg'
import tirita2 from '../../assets/img/tirita-2.jpg'
import tirita3 from '../../assets/img/tirita-3.jpg'
import topRightTexture from '../../assets/bg_corners/top-rigth-dark-green-texture.svg'
import useBoolean from '../../hooks/useBoolean'
import copyToClipboard from '../../helpers/copyToClipboard'

function Gifts() {
    const [isOpenCBU, closeCBU, openCBU] = useBoolean(false)
    const [isOpenAlias, closeAlias, openAlias] = useBoolean(false)
    const handleCopy = (string, type) => {
        copyToClipboard(string)

        if (type === 'CBU') {
            openCBU()
            setTimeout(() => closeCBU(), 1500)
        } else if (type === 'Alias') {
            openAlias()
            setTimeout(() => closeAlias(), 1500)
        }
    }

    return (
        <FullHeightCenter
            id='regalos'
            sx={{
                backgroundImage: `url(${topRightTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                textAlign: 'center',
                pt: { lg: 15, md: 10, sm: 10, xs: 5 },
                pb: { lg: 15, md: 10, sm: 10, xs: 10 },
                marginTop: '-3px',
            }}
        >
            <Container maxWidth='xxl'>
                <Stack justifyContent='center' alignItems='center' sx={{ textAlign: 'center' }} gap={4}>
                    <Typography variant='h2' color='primary' mb={2}>
                        Regalos
                    </Typography>
                    <Stack gap={3} justifyContent='center' alignItems='center'>
                        <Stack maxWidth={450} gap={2}>
                            <Typography>
                                Lo más importante es tu presencia, pero si queres hacernos un regalo podes ayudarnos con nuestra
                                luna de miel
                            </Typography>
                            <Box component='img' src={giftsIcon} sx={{ height: 100, width: '100%' }} />

                            <Stack>
                                <Typography>Te dejamos los datos de nuestra cuenta</Typography>
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
                            </Stack>
                        </Stack>
                        <Stack
                            direction='row'
                            alignItems='center'
                            justifyContent='center'
                            sx={{ width: '100%', alignSelf: 'stretch' }}
                        >
                            <Box
                                component='img'
                                src={tirita1}
                                sx={{ maxWidth: 350, width: '33%', border: '1px solid #333333' }}
                            />
                            <Box
                                component='img'
                                src={tirita2}
                                sx={{ maxWidth: 350, width: '33%', border: '1px solid #333333' }}
                            />
                            <Box
                                component='img'
                                src={tirita3}
                                sx={{ maxWidth: 350, width: '33%', border: '1px solid #333333' }}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

export default Gifts

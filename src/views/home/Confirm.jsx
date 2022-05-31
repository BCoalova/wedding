import { Box, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import bottomRightTexture from '../../assets/bg_corners/bottom-rigth-dark-green-texture.svg'
import topLeftTexture from '../../assets/bg_corners/top-left-light-green-texture.svg'
import flowers from '../../assets/img/flowers.jpg'
import FullHeightCenter from '../../components/FullHeightCenter'
import RSPV from '../../components/RSPV'

function Confirm() {
    return (
        <FullHeightCenter
            sx={{
                backgroundColor: 'white',
                backgroundImage: `url(${topLeftTexture}), url(${bottomRightTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left, bottom right',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                textAlign: 'left',
                py: { lg: 15, md: 10, sm: 10, xs: 10 },
                marginTop: '-3px',
            }}
            id='rsvp'
        >
            <Container maxWidth='xxl'>
                <Stack justifyContent='center' alignItems='center' gap={5}>
                    <Typography variant='h2' color='primary'>
                        R.S.V.P.
                    </Typography>
                    <Stack direction='row' justifyContent='center' alignItems='start' gap={{ lg: 20, md: 8, sm: 0, xs: 0 }}>
                        <Stack alignItems='center' sx={{ maxWidth: '550px', width: '100%' }}>
                            <Stack alignContent='center' gap={1}>
                                <Typography>¡Nos pone muy felices compartir este día con vos!</Typography>
                                <Typography fontSize='1rem'>
                                    Por favor confirmá asistencia antes del 18 de octubre completando el formulario con los datos
                                    de todos de los asistentes
                                </Typography>
                                <RSPV />
                            </Stack>
                        </Stack>

                        <Stack justifyContent='center' alignItems='center' pt={4}>
                            <Box
                                maxWidth={450}
                                sx={{ borderRadius: 10, display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
                                component='img'
                                src={flowers}
                            />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

export default Confirm

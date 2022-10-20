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
                py: { lg: 15, md: 10, sm: 10, xs: 5 },
                marginTop: '-1px',
            }}
            id='rsvp'
        >
            <Container maxWidth='xxl'>
                <Stack justifyContent='center' alignItems='center' gap={4}>
                    <Typography variant='h2' color='primary'>
                        R.S.V.P.
                    </Typography>
                    <Stack
                        direction={{ xs: 'column-reverse', sm: 'column-reverse', md: 'row', lg: 'row' }}
                        justifyContent='center'
                        alignItems={{ xs: 'center', sm: 'center', md: 'start', lg: 'start' }}
                        gap={{ lg: 20, md: 8, sm: 4, xs: 4 }}
                    >
                        <Stack alignItems='center' sx={{ maxWidth: '550px', width: '100%' }}>
                            <Stack alignContent='center' gap={1}>
                                <Typography>¡Nos pone muy felices compartir este día con vos!</Typography>
                                <Typography>
                                    Por favor confirmá asistencia completando el formulario con los datos de todos de los
                                    asistentes
                                </Typography>
                                <RSPV />
                            </Stack>
                        </Stack>

                        <Stack
                            justifyContent='center'
                            alignItems='center'
                            pt={4}
                            sx={{ pt: { xs: 0, sm: 0, md: 4, lg: 4 }, pb: { xs: 4, sm: 4, md: 0, lg: 0 } }}
                        >
                            <Box
                                maxWidth={450}
                                width='100%'
                                sx={{ borderRadius: 10 /* display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } */ }}
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

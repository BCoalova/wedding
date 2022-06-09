import { Container, Divider, Stack, Typography } from '@mui/material'
import bottomLeftTexture from '../../assets/bg_corners/bottom-left-light-green-texture.svg'
import topRightTexture from '../../assets/bg_corners/top-rigth-light-green-texture.svg'
import Dresscode from '../../components/Dresscode'
import IndividualLocations from '../../components/IndividualLocations'
import MapSlider from '../../components/MapSlider'

function LocationInfo() {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${topRightTexture}), url(${bottomLeftTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right, bottom left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                py: { lg: 15, md: 10, sm: 10, xs: 5 },
                position: 'relative',
                // overflow: 'hidden',
            }}
            justifyContent='center'
            alignItems='center'
            id='locacion'
        >
            <Container maxWidth='xxl'>
                <Stack alignItems='center' gap={{ lg: 10, md: 8, sm: 6, xs: 6 }}>
                    <Stack sx={{ textAlign: 'center' }} gap={0.5}>
                        <Typography variant='h2' color='primary'>
                            Locación
                        </Typography>
                        {/* <Divider flexItem />
                        <Typography sx={{ opacity: 0.6 }}>Dresscode: Elegante</Typography> */}
                    </Stack>

                    <IndividualLocations />

                    <MapSlider />
                </Stack>
            </Container>
            {/* <Box
                sx={{
                    position: 'absolute',
                    bottom: -100,
                    left: -150,
                    width: { lg: '40%', md: '60%', sm: '80%', xs: '100%' },
                    zIndex: 999,
                    pointerEvents: 'none',
                }}
            >
                <Box component='img' src={bottomLeftLeaves} />
            </Box> */}
        </Stack>
    )
}
export default LocationInfo

import { Container, Stack } from '@mui/material'
import { Box } from '@mui/system'
import acuarelaTopLeft from '../../assets/img/Untitled-1-02.svg'
import topLeftPlant from '../../assets/img/Untitled-1-04.svg'
import MapSlider from '../../components/MapSlider'

function LocationInfo() {
    return (
        <Stack
            sx={{
                backgroundImage: `url(${acuarelaTopLeft})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundAttachment: 'fixed',
                paddingY: 15,
                position: 'relative',
                overflow: 'hidden',
            }}
            justifyContent='center'
            alignItems='center'
        >
            <Container maxWidth='xxl'>
                <MapSlider />
                <Box sx={{ position: 'absolute', bottom: -100, right: -130, width: '40%', zIndex: 0, pointerEvents: 'none' }}>
                    <Box component='img' src={topLeftPlant} />
                </Box>
            </Container>
        </Stack>
    )
}
export default LocationInfo

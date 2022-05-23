import { Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import lookyImg from '../../assets/img/looky.jpg'
import FullHeightCenter from '../../components/FullHeightCenter'
import acuarelaTopLeft from '../../assets/img/Untitled-1-02.svg'
import MapSlider from '../../components/MapSlider'

function LocationInfo() {
    return (
        <FullHeightCenter
            sx={{
                backgroundImage: `url(${acuarelaTopLeft})`,
                backgroundColor: 'white',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundAttachment: 'fixed',
            }}
        >
            <Stack>
                <Typography fontWeight={500}>
                    <Typography component='span' variant='h6' fontWeight={600}>
                        Dirección
                    </Typography>
                    : Fray Luis Beltrán 629, Monte Grande, Provincia de Buenos Aires
                </Typography>
            </Stack>
            <Stack direction={{ lg: 'row', md: 'column', sm: 'column', xs: 'column' }} gap={5}>
                <MapSlider />
                {/* <Stack sx={{ width: 450, height: 450, backgroundColor: 'lightgray' }}>map</Stack> */}
                <Box component='img' src={lookyImg} sx={{ width: 450 }} />
            </Stack>
        </FullHeightCenter>
    )
}
export default LocationInfo

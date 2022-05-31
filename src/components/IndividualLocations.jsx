import { Box, Button, Stack, Tooltip, Typography } from '@mui/material'
import copas from '../assets/img/copas.svg'
import rings from '../assets/img/rings.svg'
import MapIcon from '@mui/icons-material/Map'

const locationsInfo = [
    {
        id: 1,
        title: 'Ceremonia',
        text: 'A las 16.45 hs. en la Parroquia San Roque Plaza 1180, Villa Ortuzar, Ciudad Autónoma de Buenos Aires',
        link: '#',
        icon: rings,
    },
    {
        id: 2,
        title: 'Recepción',
        text: 'Después de la ceremonia te esperamos para celebrar juntos en Finca La Nicolasa, Fray Luis Beltrán 629, Monte Grande',
        link: '#',
        icon: copas,
    },
]

export default function IndividualLocations() {
    return (
        <Stack
            direction={{ lg: 'row', sm: 'column', xs: 'column' }}
            justifyContent='center'
            gap={{ lg: 20, md: 16, sm: 12, xs: 8 }}
            sx={{ textAlign: 'center' }}
        >
            {locationsInfo.map(location => (
                <Stack key={location.id} maxWidth={400} alignItems='center' gap={2}>
                    <Box component='img' src={location.icon} sx={{ height: 120, width: '100%' }} />
                    <Typography variant='h6'>{location.title}</Typography>
                    <Typography>{location.text}</Typography>
                    <Tooltip title='Ver en google maps' placement='bottom' arrow>
                        <Button component='a' href={location.link} variant='outlined' sx={{ mt: 5 }} startIcon={<MapIcon />}>
                            Google MAPS
                        </Button>
                    </Tooltip>
                </Stack>
            ))}
        </Stack>
    )
}

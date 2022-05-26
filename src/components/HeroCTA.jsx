import LocationOnIcon from '@mui/icons-material/LocationOn'
import MapIcon from '@mui/icons-material/Map'
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { WEDDING_DATE2 } from '../constants/index'
import useBackCount from '../hooks/useBackCount'

function HeroCTA() {
    const [intervaleD] = useBackCount(WEDDING_DATE2)

    return (
        <Stack flexBasis='50%' alignItems='center' justifyContent='center'>
            <Stack alignItems='center' maxWidth={600} sx={{ textAlign: 'center' }}>
                <Typography variant='h1' color='primary.contrastText' fontWeight={900}>
                    ¡Nos casamos!
                </Typography>
                <Stack gap={2} alignItems='center'>
                    <Typography variant='h2' color='primary'>
                        19 de noviembre 2022
                    </Typography>
                    <Typography color='primary.contrastText'>
                        A las 16.45 hs. en Parroquia San Roque Plaza 1180, Ciudad Autónoma de Buenos Aires
                    </Typography>
                    <Typography color='primary.contrastText'>
                        Te esperamos después de la ceremonia en Finca La Nicolasa
                        <IconButton color='primary' size='small' aria-label='Finca La Nicolasa'>
                            <OpenInNewIcon />
                        </IconButton>
                    </Typography>
                    <Typography color='primary.contrastText'>
                        Fray Luis Beltrán 629, Monte Grande
                        <IconButton color='primary' size='small' aria-label='Dirección'>
                            <LocationOnIcon />
                        </IconButton>
                    </Typography>
                    {intervaleD && (
                        <>
                            <Typography m={0} color='primary.contrastText' variant='h6' fontWeight={300}>
                                {intervaleD.months > 0 && (
                                    <>
                                        En{' '}
                                        <Typography component='span' color='primary' fontWeight={700}>
                                            {intervaleD.months}
                                        </Typography>{' '}
                                        meses,
                                    </>
                                )}
                                {intervaleD.days > 0 && (
                                    <>
                                        <Typography component='span' color='primary' fontWeight={700}>
                                            {' '}
                                            {intervaleD.days}
                                        </Typography>{' '}
                                        días y
                                    </>
                                )}{' '}
                                <Typography component='span' color='primary' fontWeight={700}>
                                    {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours} :
                                </Typography>{' '}
                                <Typography component='span' color='primary' fontWeight={700}>
                                    {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes} :
                                </Typography>{' '}
                                <Typography component='span' color='primary' fontWeight={700}>
                                    {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                                </Typography>
                            </Typography>
                        </>
                    )}
                    <Stack direction='row' gap={1} mt={3}>
                        <Button startIcon={<MarkAsUnreadIcon />} variant='contained' color='primary'>
                            RSPV
                        </Button>
                        <Button startIcon={<MapIcon />} variant='outlined' color='primary'>
                            Locación
                        </Button>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default HeroCTA

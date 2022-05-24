import { Button, IconButton, Paper, Stack, Typography } from '@mui/material'
import useBackCount from '../hooks/useBackCount'
import MapIcon from '@mui/icons-material/Map'
import { WEDDING_DATE2 } from '../constants/index'
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Box } from '@mui/system'

function HeroCTA() {
    const [intervaleD] = useBackCount(WEDDING_DATE2)

    return (
        <Stack alignItems='center' pl='50%'>
            <Paper elevation={0} sx={{ p: 6, textAlign: 'center', backgroundColor: 'transparent', zIndex: 1 }}>
                <Stack alignItems='center'>
                    <Typography
                        // sx={{ textShadow: 'rgba(256,256,256,.17) 1px 1px 3px' }}
                        color='white'
                        variant='h2'
                        fontWeight={900}
                    >
                        ¡Nos casamos!
                    </Typography>
                    <Stack gap={2} alignItems='center'>
                        {/* <Typography mt={3} color='white'>
                            Te invitamos a celebrar nuestro casamiento
                        </Typography> */}
                        <Typography
                            sx={{ textShadow: 'rgba(256,256,256,.17) 1px 1px 3px' }}
                            variant='h1'
                            component='p'
                            fontSize={50}
                            color='secondary'
                        >
                            19 de noviembre 2022
                        </Typography>
                        <Typography color='white'>
                            A las 16.45 hs. en Parroquia San Roque Plaza 1180, Ciudad Autónoma de Buenos Aires
                        </Typography>
                        <Typography color='white'>
                            Te esperamos después de la ceremonia en Finca La Nicolasa
                            <IconButton color='secondary' size='small' aria-label='Finca La Nicolasa'>
                                <OpenInNewIcon />
                            </IconButton>
                        </Typography>
                        <Typography color='white'>
                            Fray Luis Beltrán 629, Monte Grande
                            <IconButton color='secondary' size='small' aria-label='Dirección'>
                                <LocationOnIcon />
                            </IconButton>
                        </Typography>
                        {intervaleD && (
                            <>
                                <Typography m={0} color='white' variant='h6' fontWeight={300}>
                                    {intervaleD.months > 0 && (
                                        <>
                                            En{' '}
                                            <Typography component='span' color='secondary' fontWeight={700}>
                                                {intervaleD.months}
                                            </Typography>{' '}
                                            meses,
                                        </>
                                    )}
                                    {intervaleD.days > 0 && (
                                        <>
                                            <Typography component='span' color='secondary' fontWeight={700}>
                                                {' '}
                                                {intervaleD.days}
                                            </Typography>{' '}
                                            días y
                                        </>
                                    )}{' '}
                                    <Typography component='span' color='secondary' fontWeight={700}>
                                        {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours} :
                                    </Typography>{' '}
                                    <Typography component='span' color='secondary' fontWeight={700}>
                                        {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes} :
                                    </Typography>{' '}
                                    <Typography component='span' color='secondary' fontWeight={700}>
                                        {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                                    </Typography>
                                </Typography>
                            </>
                        )}
                        <Stack direction='row' gap={1} mt={3}>
                            <Button startIcon={<MapIcon />} variant='contained' color='secondary'>
                                Locación
                            </Button>
                            <Button startIcon={<MarkAsUnreadIcon />} variant='contained' color='secondary'>
                                RSPV
                            </Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default HeroCTA

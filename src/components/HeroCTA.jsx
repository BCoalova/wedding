import { Button, Paper, Stack, Typography } from '@mui/material'
import useBackCount from '../hooks/useBackCount'
import MapIcon from '@mui/icons-material/Map'
import { WEDDING_DATE } from '../constants/index'
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread'
function HeroCTA() {
    const [intervaleD] = useBackCount(WEDDING_DATE)

    return (
        <Stack alignItems='center' pl='50%'>
            <Paper elevation={0} sx={{ p: 6, textAlign: 'center', backgroundColor: 'transparent', zIndex: 1 }}>
                <Stack alignItems='center'>
                    <Typography color='white' variant='h1' fontWeight={900}>
                        ¡Nos Casamos!
                    </Typography>
                    <Stack gap={3} alignItems='center'>
                        <Typography variant='h4' fontWeight={500} color='white'>
                            El 19 de noviembre de 2022
                        </Typography>
                        {intervaleD && (
                            <>
                                <Typography m={0} color='white' variant='h6' fontWeight={300}>
                                    En <span>{intervaleD.months}</span> meses, <span>{intervaleD.days}</span> días y{' '}
                                    <span>{intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}</span>:
                                    <span>{intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}</span>:
                                    <span>{intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}</span>
                                </Typography>
                            </>
                        )}
                        <Stack direction='row' gap={1} mt={3}>
                            <Button startIcon={<MapIcon />} variant='contained' color='secondary'>
                                Locación
                            </Button>
                            <Button startIcon={<MarkAsUnreadIcon />} variant='contained'>
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

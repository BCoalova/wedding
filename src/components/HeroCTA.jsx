import { Box, Stack } from '@mui/material'
import maruYBoris from '../assets/img/Untitled-1-01.svg'
import { WEDDING_DATE2 } from '../constants/index'
import useBackCount from '../hooks/useBackCount'
import CountDown from './CountDown'

function HeroCTA() {
    const [intervaleD] = useBackCount(WEDDING_DATE2)

    return (
        <Stack alignItems='center' sx={{ textAlign: 'center' }} width={450}>
            <Box component='img' src={maruYBoris} maxWidth={350} width='100%' mb={6} />
            <Stack width='100%' gap={2} alignItems='center' flexGrow={1}>
                {intervaleD && <CountDown intervaleD={intervaleD} />}
            </Stack>
        </Stack>
    )
}

export default HeroCTA

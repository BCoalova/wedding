import { Box, Stack, Typography } from '@mui/material'
import maruYBoris from '../assets/img/Untitled-1-01.svg'
import { WEDDING_DATE2 } from '../constants/index'
import useBackCount from '../hooks/useBackCount'

const countDownText = ['En ', ' meses, ', ' días', ' y ', ' : ']

function HeroCTA() {
    const [intervaleD] = useBackCount(WEDDING_DATE2)

    return (
        <Stack alignItems='center' sx={{ textAlign: 'center' }}>
            <Box component='img' src={maruYBoris} width={350} mb={6} />
            <Stack gap={2} alignItems='center'>
                <Typography variant='h6'>Sábado 19 de noviembre 2022</Typography>
                {intervaleD && (
                    <Stack>
                        <Typography variant='h4' fontWeight={500}>
                            {countDownText[0]}
                            <Box component='span' sx={{ color: 'primary.main' }} fontWeight={700}>
                                {intervaleD.months}
                            </Box>
                            {countDownText[1]}
                            <Box component='span' sx={{ color: 'primary.main' }} fontWeight={700}>
                                {intervaleD.days}
                            </Box>
                            {countDownText[2]}
                            {countDownText[3]}
                        </Typography>
                        <Typography variant='h4' color='primary' fontWeight={700}>
                            {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}
                            {countDownText[4]}
                            {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}
                            {countDownText[4]}
                            {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                        </Typography>
                    </Stack>
                )}
            </Stack>
        </Stack>
    )
}

export default HeroCTA

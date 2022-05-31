import { Box, Stack, Typography } from '@mui/material'
import maruYBoris from '../assets/img/Untitled-1-01.svg'
import { WEDDING_DATE2 } from '../constants/index'
import useBackCount from '../hooks/useBackCount'

const countDownText = ['En ', ' meses, ', ' días', ' y ', ' : ']

function HeroCTA() {
    const [intervaleD] = useBackCount(WEDDING_DATE2)

    return (
        <Stack alignItems='center' sx={{ textAlign: 'center' }} width={450}>
            <Box component='img' src={maruYBoris} maxWidth={350} width='100%' mb={6} />
            <Stack width='100%' gap={2} alignItems='center' flexGrow={1}>
                <Typography variant='h6' fontWeight={400}>
                    Sábado 19 de noviembre 2022
                </Typography>
                {intervaleD && (
                    <>
                        {/* <Typography variant='h4' fontWeight={500}>
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
                        </Typography> */}
                        <Typography variant='h6' fontWeight={700}>
                            Nos vemos
                        </Typography>
                        <Stack
                            width='100%'
                            direction='row'
                            gap={1}
                            justifyContent='space-between'
                            flexGrow={1}
                            sx={{ color: 'primary.main', borderTop: '1px solid', borderBottom: '1px solid', py: 1 }}
                        >
                            {intervaleD.months > 0 && (
                                <Stack minWidth={60}>
                                    <Typography fontWeight={900} lineHeight={1} color='primary' fontSize={40}>
                                        {intervaleD.months < 10 ? '0' + intervaleD.months : intervaleD.months}
                                    </Typography>
                                    <Typography fontSize={16}>MESES</Typography>
                                </Stack>
                            )}
                            {intervaleD.days > 0 && (
                                <Stack minWidth={60}>
                                    <Typography fontWeight={900} lineHeight={1} color='primary' fontSize={40}>
                                        {intervaleD.days < 10 ? '0' + intervaleD.days : intervaleD.days}
                                    </Typography>
                                    <Typography fontSize={16}>DÍAS</Typography>
                                </Stack>
                            )}
                            <Stack minWidth={60}>
                                <Typography fontWeight={900} lineHeight={1} color='primary' fontSize={40}>
                                    {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}
                                </Typography>
                                <Typography fontSize={16}>HORAS</Typography>
                            </Stack>
                            <Stack minWidth={60}>
                                <Typography fontWeight={900} lineHeight={1} color='primary' fontSize={40}>
                                    {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}
                                </Typography>
                                <Typography fontSize={16}>MIN</Typography>
                            </Stack>
                            <Stack minWidth={60}>
                                <Typography fontWeight={900} lineHeight={1} color='primary' fontSize={40}>
                                    {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                                </Typography>
                                <Typography fontSize={16}>SEG</Typography>
                            </Stack>
                        </Stack>
                    </>
                )}
            </Stack>
        </Stack>
    )
}

export default HeroCTA

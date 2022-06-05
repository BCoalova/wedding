import { Box, Stack, Typography } from '@mui/material'

const countDownText = ['En ', ' meses, ', ' días', ' y ', ' : ']

const Option1 = ({ intervaleD }) => {
    return (
        <>
            <Typography variant='h2' fontSize={40} color='primary'>
                Sábado 19 de noviembre 2022
            </Typography>
            <Typography variant='h4' fontWeight={500} lineHeight={1}>
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
            <Typography variant='h4' color='primary' fontWeight={700} lineHeight={1}>
                {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}
                {countDownText[4]}
                {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}
                {countDownText[4]}
                {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
            </Typography>
        </>
    )
}

const Option2 = ({ intervaleD }) => {
    return (
        <>
            {/* <Typography variant='h5' fontWeight={700}>
                Nos vemos en
            </Typography> */}
            <Stack gap={3}>
                <Typography variant='h3' /* color='primary' */ fontSize={30}>
                    Sábado 19 de noviembre 2022
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
                            <Typography fontWeight={700} fontFamily='Gentium Plus' lineHeight={1} color='primary' fontSize={42}>
                                {intervaleD.months < 10 ? '0' + intervaleD.months : intervaleD.months}
                            </Typography>
                            <Typography fontSize={16}>MESES</Typography>
                        </Stack>
                    )}
                    {intervaleD.days > 0 && (
                        <Stack minWidth={60}>
                            <Typography fontWeight={700} fontFamily='Gentium Plus' lineHeight={1} color='primary' fontSize={42}>
                                {intervaleD.days < 10 ? '0' + intervaleD.days : intervaleD.days}
                            </Typography>
                            <Typography fontSize={16}>DÍAS</Typography>
                        </Stack>
                    )}
                    <Stack minWidth={60}>
                        <Typography fontWeight={700} fontFamily='Gentium Plus' lineHeight={1} color='primary' fontSize={42}>
                            {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}
                        </Typography>
                        <Typography fontSize={16}>HORAS</Typography>
                    </Stack>
                    <Stack minWidth={60}>
                        <Typography fontWeight={700} fontFamily='Gentium Plus' lineHeight={1} color='primary' fontSize={42}>
                            {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}
                        </Typography>
                        <Typography fontSize={16}>MIN</Typography>
                    </Stack>
                    <Stack minWidth={60}>
                        <Typography fontWeight={700} fontFamily='Gentium Plus' lineHeight={1} color='primary' fontSize={42}>
                            {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                        </Typography>
                        <Typography fontSize={16}>SEG</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </>
    )
}

export default function CountDown({ intervaleD }) {
    return (
        <>
            {/* <Option1 intervaleD={intervaleD} /> */}
            <Option2 intervaleD={intervaleD} />
        </>
    )
}

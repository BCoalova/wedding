import FullHeightCenter from '../../components/FullHeightCenter'
import acuarelaBottomRight from '../../assets/img/Untitled-1-03.svg'
import RSPV from '../../components/RSPV'
import { Box, Link, Stack, Typography } from '@mui/material'
import flowers from '../../assets/img/flowers.jpg'
import { Container } from '@mui/system'

function Confirm() {
    return (
        <FullHeightCenter
            sx={{
                backgroundImage: `url(${acuarelaBottomRight})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                backgroundAttachment: 'fixed',
                textAlign: 'left',
                py: 15,
            }}
        >
            <Container maxWidth='xxl'>
                <Stack direction='row'>
                    <Stack flexBasis='50%' alignItems='center'>
                        <Stack alignContent='start'>
                            <Typography variant='h2' color='primary'>
                                R.S.P.V.
                            </Typography>
                            <Typography>¡Nos pone muy contentos celebrar con vos! ?????</Typography>
                            <Typography>Por favor responder antes del 18 de octubre</Typography>
                            <Typography mb={3}>
                                También podés escribirnos a{' '}
                                <Link color='primary' underline='none' href='mailto:maruyboris.19.11.22@gmail.com'>
                                    maruyboris.19.11.22@gmail.com
                                </Link>
                            </Typography>
                            <RSPV />
                        </Stack>
                    </Stack>
                    <Stack flexBasis='50%' justifyContent='center' alignItems='center'>
                        <Box maxWidth={450} sx={{ borderRadius: 10 }} component='img' src={flowers} />
                    </Stack>
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

export default Confirm

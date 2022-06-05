import AddCircleIcon from '@mui/icons-material/AddCircle'
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import SendIcon from '@mui/icons-material/Send'
import { LoadingButton } from '@mui/lab'
import { Box, Container, IconButton, Stack, TextField, Typography } from '@mui/material'
import bottomLeftTexture from '../../assets/bg_corners/bottom-left-light-green-texture.svg'
import topRightTexture from '../../assets/bg_corners/top-rigth-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import TransportationForm from '../../components/TransportationForm'
import useInput from '../../hooks/useInput'
import usePaxCount from '../../hooks/usePaxCount'

export default function Transportarion() {
    return (
        <FullHeightCenter
            id='translado'
            sx={{
                backgroundImage: `url(${topRightTexture}), url(${bottomLeftTexture})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top right, bottom left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                py: { lg: 15, md: 10, sm: 10, xs: 5 },
                position: 'relative',
                mt: '-1px',
                // overflow: 'hidden',
            }}
        >
            <Container
                maxWidth='xxl'
                component={Stack}
                sx={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
            >
                <Stack sx={{ maxWidth: 600, width: '100%' }} gap={3}>
                    <Stack gap={2} alignItems='center' justifyContent='center'>
                        <Typography variant='h2' color='primary'>
                            Translado
                        </Typography>
                        <Typography>
                            Vamos a coordinar un servicio de translado ida y vuelta desde la Parroquia San Roque hasta Finca La
                            Nicolasa para aquellos invitados que prefieran no ir en auto.
                        </Typography>
                        <DirectionsBusIcon sx={{ fontSize: 80 }} color='primary' />
                        <Typography>
                            Si querés hacer uso de este servicio, completá a continuación tu nombre, mail y la cantidad de
                            pasajeros. Nos contactaremos con vos para darte información sobre el punto de encuentro, horarios de
                            partida y regreso y valor de la combi.
                        </Typography>
                    </Stack>
                    <TransportationForm />
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

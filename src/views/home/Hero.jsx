import { Container, Stack } from '@mui/material'
import topLeftGradient from '../../assets/bg_corners/top-left-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import HeroCTA from '../../components/HeroCTA'
import HeroImage from '../../components/HeroImg'

function Hero() {
    return (
        <FullHeightCenter
            sx={{
                position: 'relative',
                backgroundImage: `url(${topLeftGradient})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                overflow: 'hidden',
                py: { lg: 15, md: 10, sm: 10, xs: 10 },
            }}
            id='inicio'
        >
            <Container maxWidth='xxl'>
                <Stack direction='row' alignItems='center' justifyContent='center' gap={20}>
                    <HeroCTA />
                    <HeroImage />
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

export default Hero

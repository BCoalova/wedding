import { Box, Container, Stack } from '@mui/material'
import FullHeightCenter from '../../components/FullHeightCenter'
import HeroCTA from '../../components/HeroCTA'
import HeroImage from '../../components/HeroImg'

import topLeftGradient from '../../assets/img/Untitled-1-02.svg'
import topLeftPlant from '../../assets/img/Untitled-1-04.svg'

function Hero() {
    return (
        <FullHeightCenter
            sx={{
                position: 'relative',
                backgroundImage: `url(${topLeftGradient})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundAttachment: 'fixed',
                overflow: 'hidden',
            }}
        >
            <Container maxWidth='xxl'>
                <Stack direction='row' alignItems='center'>
                    <HeroCTA />
                    <HeroImage />
                </Stack>
            </Container>
            <Box sx={{ position: 'absolute', bottom: -100, right: -130, width: '50%' }}>
                <Box component='img' src={topLeftPlant} />
            </Box>
        </FullHeightCenter>
    )
}

export default Hero

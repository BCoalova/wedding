import { Container } from '@mui/material'
/* change to lowerCase .jpg */
import heroBackgroundImg from '../../assets/img/hero.jpg'
import FullHeightCenter from '../../components/FullHeightCenter'
import HeroCTA from '../../components/HeroCTA'
import topLeftFlower from '../../assets/img/topleftflowers.svg'

function Hero() {
    return (
        <FullHeightCenter
            sx={{
                backgroundImage: `url(${heroBackgroundImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left top',
                backgroundColor: 'rgba(0,0,0,.3)',
                backgroundAttachment: 'fixed',
                position: 'relative',
                overflowX: 'hidden',
                ':before': {
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    content: '" "',
                    backgroundColor: 'rgba(0,0,0,.6)',
                    zIndex: 0,
                },
                ':after': {
                    position: 'absolute',
                    top: '-10%',
                    right: '-20%',
                    width: '50%',
                    height: '100%',
                    content: '" "',
                    backgroundImage: `url(${topLeftFlower})`,
                    backgroundRepeat: 'no-repeat',
                    zIndex: 0,
                },
            }}
        >
            <Container maxWidth='xxl'>
                <HeroCTA />
            </Container>
        </FullHeightCenter>
    )
}

export default Hero

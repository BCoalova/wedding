import { Box } from '@mui/system'
import heroImg from '../assets/img/looky.jpg'

export default function HeroImage() {
    return (
        <Box
            component='img'
            src={heroImg}
            maxWidth={350}
            sx={{ borderRadius: 10, boxShadow: 2, display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' } }}
        />
    )
}

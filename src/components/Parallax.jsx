import { Box } from '@mui/material'
// import parallaxImg from '../assets/img/hero.jpg'
// import parallaxImg from '../assets/img/eifel.jpg'
// import parallaxImg from '../assets/img/saintchapel.jpg'
// import parallaxImg from '../assets/img/GOPR0532.jpg'
// import parallaxImg from '../assets/img/GOPR1630.jpg'
import parallaxImg from '../assets/img/GOPR1621.jpg'

export default function Parallax() {
    return (
        <Box
            height={{ lg: '50vh', md: '50vh', sm: '40vh', xs: '30vh' }}
            width='100%'
            sx={{
                backgroundImage: `url(${parallaxImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: { lg: 'fixed', md: 'fixed', sm: 'unset', xs: 'unset' },
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
            }}
        >
            <Box sx={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,.3)' }}></Box>
        </Box>
    )
}

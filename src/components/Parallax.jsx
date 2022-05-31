import { Box } from '@mui/material'
// import parallaxImg from '../assets/img/hero.jpg'
// import parallaxImg from '../assets/img/eifel.jpg'
import parallaxImg from '../assets/img/saintchapel.jpg'

export default function Parallax() {
    return (
        <Box
            height='50vh'
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

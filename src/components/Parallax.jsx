import { Box } from '@mui/material'
import parallaxImg from '../assets/img/hero.jpg'

export default function Parallax() {
    return (
        <Box
            height='50vh'
            width='100%'
            sx={{
                backgroundImage: `url(${parallaxImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'top center',
                backgroundSize: 'cover',
            }}
        ></Box>
    )
}

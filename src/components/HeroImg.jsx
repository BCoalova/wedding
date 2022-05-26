import { Stack } from '@mui/material'
import { Box } from '@mui/system'
import heroImg from '../assets/img/looky.jpg'

export default function HeroImage() {
    return (
        <Stack flexBasis='50%' justifyContent='center' alignItems='center'>
            <Box component='img' src={heroImg} maxWidth={450} sx={{ borderRadius: 10 }} />
        </Stack>
    )
}

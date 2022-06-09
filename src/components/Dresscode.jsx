import { Box, Stack, Typography } from '@mui/material'
import tieIcon from '../assets/img/tie.svg'

export default function Dresscode() {
    return (
        <Stack maxWidth={400} alignItems='center' gap={2} justifyContent='center'>
            <Box component='img' src={tieIcon} sx={{ height: 120, width: '100%' }} />
            <Typography variant='h6'>Dresscode</Typography>
            <Typography>Elegante</Typography>
        </Stack>
    )
}

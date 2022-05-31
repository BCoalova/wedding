import { Box, Stack } from '@mui/material'
import bottomRightLeaves from '../../assets/bg_corners/bottom-right-leaves.svg'
import Parallax from '../../components/Parallax'
import Confirm from './Confirm'
import Gifts from './Gifts'
import Hero from './Hero'
import LocationInfo from './LocationInfo'

function Sections() {
    return (
        <Stack width='100%' sx={{ overflowX: 'hidden' }}>
            <Hero />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: -100,
                    right: 0,
                    width: { lg: '30%', md: '50%', sm: '70%', xs: '80%' },
                    zIndex: 999,
                }}
            >
                <Box component='img' src={bottomRightLeaves} />
            </Box>
            <Parallax />
            <LocationInfo />
            <Confirm />
            <Gifts />
        </Stack>
    )
}
export default Sections

import { Stack } from '@mui/material'
import Confirm from './Confirm'
import Gifts from './Gifts'
import Hero from './Hero'
import LocationInfo from './LocationInfo'

function Sections() {
    return (
        <Stack width='100%' sx={{ overflowX: 'hidden' }}>
            <Hero />
            <LocationInfo />
            <Confirm />
            <Gifts />
        </Stack>
    )
}
export default Sections

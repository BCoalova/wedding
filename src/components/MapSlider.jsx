import { Box, Stack } from '@mui/material'
import { useState } from 'react'

function MapSlider() {
    const [sliderIdx, setSliderIdx] = useState(0)

    return (
        <Box sx={{ overflow: 'hidden', width: 600 }}>
            <Stack></Stack>
            <Box>
                <Box>
                    <iframe
                        title='Desde Parroquia a Finca'
                        src='https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d209942.6949924138!2d-58.631624081699336!3d-34.6962348190231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95bcb674952bde1f%3A0x6dd2c8f210115efb!2sPlaza%201180%2C%20Buenos%20Aires!3m2!1d-34.5808213!2d-58.4673028!4m5!1s0x95bcd1692b368d95%3A0xb7e076ca3ec2b572!2sFray%20Luis%20Beltr%C3%A1n%20629%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-34.8190667!2d-58.4775493!5e0!3m2!1ses-419!2sar!4v1653327600894!5m2!1ses-419!2sar'
                        width='450'
                        height='450'
                        style={{ border: 0, display: 'inline-block' }}
                        allowfullscreen=''
                        loading='lazy'
                        referrerpolicy='no-referrer-when-downgrade'
                    ></iframe>
                </Box>
            </Box>
            <Stack></Stack>
        </Box>
    )
}

export default MapSlider

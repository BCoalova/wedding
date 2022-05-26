import { useState } from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Button, Paper, Stack, Typography } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'

const tabsContent = [
    {
        id: 1,
        title: 'Parroquia San Roque',
        value: '1',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9229200312207!2d-58.46949148421761!3d-34.580816863794894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb674952bde1f%3A0x6dd2c8f210115efb!2sPlaza%201180%2C%20C1427CVJ%20CABA!5e0!3m2!1sen!2sar!4v1653501884694!5m2!1sen!2sar',
        direction: 'Plaza 1180, CABA',
    },
    {
        id: 2,
        title: 'Finca La Nicolasa',
        value: '2',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.4784058430773!2d-58.479737984211695!3d-34.81906227643218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1692b368d95%3A0xb7e076ca3ec2b572!2sFray%20Luis%20Beltr%C3%A1n%20629%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1653502259597!5m2!1sen!2sar',
        direction: 'Fray Luis Beltrán 629, Monte Grande',
    },
    {
        id: 3,
        title: 'Cómo llego',
        value: '3',
        src: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d209942.6949924138!2d-58.631624081699336!3d-34.6962348190231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95bcb674952bde1f%3A0x6dd2c8f210115efb!2sPlaza%201180%2C%20Buenos%20Aires!3m2!1d-34.5808213!2d-58.4673028!4m5!1s0x95bcd1692b368d95%3A0xb7e076ca3ec2b572!2sFray%20Luis%20Beltr%C3%A1n%20629%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-34.8190667!2d-58.4775493!5e0!3m2!1ses-419!2sar!4v1653327600894!5m2!1ses-419!2sar',
        extra: '45/50 minutos apróximadamente',
    },
]

function MapSlider() {
    const [value, setValue] = useState('1')

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <Paper sx={{ p: 2, width: '100%', maxWidth: 1600, marginX: 'auto', zIndex: 10 }} elevation='0'>
            <Stack sx={{ typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label='lab API tabs example'>
                            {tabsContent.map(({ title, id, value }) => (
                                <Tab label={title} value={value} key={id} />
                            ))}
                        </TabList>
                    </Box>
                    {tabsContent.map(({ id, value, title, src, direction, extra }) => (
                        <TabPanel value={value} key={id} minWidth={1646}>
                            <Box
                                style={{
                                    '--aspect-ratio': '16/9',
                                    position: 'relative',
                                    ':before': {
                                        content: '""',
                                        display: 'block',
                                        paddingBottom: 'calc(100% / (var(--aspect-ratio)))',
                                    },
                                }}
                            >
                                <iframe
                                    title={title}
                                    src={src}
                                    style={{
                                        border: 0,
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        height: ' 100%',
                                        width: '100%',
                                        borderRadius: 10,
                                    }}
                                    loading='lazy'
                                    width='1600'
                                    height='534'
                                    referrerpolicy='no-referrer-when-downgrade'
                                ></iframe>
                            </Box>
                            <iframe
                                title={title}
                                src={src}
                                style={{
                                    border: 0,
                                    display: 'inline-block',
                                    minHeight: '35vh',
                                    borderRadius: 10,
                                    width: '100%',
                                }}
                                loading='lazy'
                                height='450'
                                referrerpolicy='no-referrer-when-downgrade'
                            ></iframe>
                            {direction && <Typography mt={2}>Dirección: {direction}</Typography>}
                            {extra && <Typography mt={2}>{extra}</Typography>}

                            <Stack direction='row' gap={1} mt={2}>
                                <Button variant='outlined' color='secondary' mt={2} startIcon={<LocationOnIcon />}>
                                    google maps
                                </Button>
                                <Button variant='outlined' color='secondary' mt={2} startIcon={<LocationOnIcon />}>
                                    waze
                                </Button>
                            </Stack>
                        </TabPanel>
                    ))}
                </TabContext>
            </Stack>
        </Paper>
    )
}

export default MapSlider

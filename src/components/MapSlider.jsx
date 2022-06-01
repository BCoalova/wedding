import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import GoogleIcon from '@mui/icons-material/Google'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { IconButton, Paper, Stack, Tooltip, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import { useState } from 'react'
import copyToClipboard from '../helpers/copyToClipboard'
import useBoolean from '../hooks/useBoolean'

const tabsContent = [
    {
        id: 1,
        title: 'Parroquia San Roque',
        value: '1',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.9229200312207!2d-58.46949148421761!3d-34.580816863794894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb674952bde1f%3A0x6dd2c8f210115efb!2sPlaza%201180%2C%20C1427CVJ%20CABA!5e0!3m2!1sen!2sar!4v1653501884694!5m2!1sen!2sar',
        direction: 'Plaza 1180, CABA',
        href: 'https://goo.gl/maps/7ygKCtxfQ11tVPQm7',
    },
    {
        id: 2,
        title: 'Finca La Nicolasa',
        value: '2',
        src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.4784058430773!2d-58.479737984211695!3d-34.81906227643218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd1692b368d95%3A0xb7e076ca3ec2b572!2sFray%20Luis%20Beltr%C3%A1n%20629%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1sen!2sar!4v1653502259597!5m2!1sen!2sar',
        direction: 'Fray Luis Beltrán 629, Monte Grande',
        href: 'https://goo.gl/maps/eBNajTZaYqXzwJrc9',
    },
    {
        id: 3,
        title: 'Cómo llego',
        value: '3',
        src: 'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d209942.6949924138!2d-58.631624081699336!3d-34.6962348190231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x95bcb674952bde1f%3A0x6dd2c8f210115efb!2sPlaza%201180%2C%20Buenos%20Aires!3m2!1d-34.5808213!2d-58.4673028!4m5!1s0x95bcd1692b368d95%3A0xb7e076ca3ec2b572!2sFray%20Luis%20Beltr%C3%A1n%20629%2C%20Monte%20Grande%2C%20Provincia%20de%20Buenos%20Aires!3m2!1d-34.8190667!2d-58.4775493!5e0!3m2!1ses-419!2sar!4v1653327600894!5m2!1ses-419!2sar',
        extra: 'Apróximadamente 40/50 minutos',
        href: 'https://goo.gl/maps/ajjN1oQ3EAgjsE4v7',
    },
]

function MapSlider() {
    const [value, setValue] = useState('1')
    const [isOpen, close, open] = useBoolean(false)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleCopyDirection = direction => {
        open()
        copyToClipboard(direction)
        setTimeout(() => close(), 1500)
    }

    return (
        <Paper
            sx={{
                p: 2,
                marginX: 'auto',
                zIndex: 10,
                maxWidth: '960px',
                width: '100%',
            }}
            elevation={2}
        >
            <Stack>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList
                            variant='scrollable'
                            onChange={handleChange}
                            aria-label='lab API tabs example'
                            scrollButtons
                            allowScrollButtonsMobile
                        >
                            {tabsContent.map(({ title, id, value }) => (
                                <Tab label={title} value={value} key={id} />
                            ))}
                        </TabList>
                    </Box>
                    {tabsContent.map(({ id, value, title, src, direction, extra, href }) => (
                        <TabPanel value={value} key={id}>
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
                                referrerPolicy='no-referrer-when-downgrade'
                            ></iframe>
                            {direction && <Typography mt={2}>Dirección: {direction}</Typography>}
                            {extra && <Typography mt={2}>{extra}</Typography>}

                            <Stack direction='row' gap={1} mt={2} alignItems='center'>
                                <IconButton
                                    component='a'
                                    href={href}
                                    target='_blank'
                                    size='small'
                                    color='secondary'
                                    mt={2}
                                    title='Google Maps'
                                >
                                    <GoogleIcon />
                                </IconButton>
                                {direction && (
                                    <Tooltip title='Copiado' arrow open={isOpen}>
                                        <IconButton
                                            size='small'
                                            color='secondary'
                                            mt={2}
                                            onClick={() => handleCopyDirection(direction)}
                                        >
                                            {!isOpen ? <ContentCopyIcon /> : <CheckCircleIcon color='primary' />}
                                        </IconButton>
                                    </Tooltip>
                                )}
                            </Stack>
                        </TabPanel>
                    ))}
                </TabContext>
            </Stack>
        </Paper>
    )
}

export default MapSlider

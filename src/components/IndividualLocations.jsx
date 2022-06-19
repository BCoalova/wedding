import { Box, Button, Divider, Stack, Tooltip, Typography } from '@mui/material'
import copas from '../assets/img/copas.svg'
import rings from '../assets/img/rings.svg'
import tie from '../assets/img/tie.svg'
import dresscode from '../assets/img/Untitled-1.svg'
import MapIcon from '@mui/icons-material/Map'
import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'

const locationsInfo = [
    {
        id: 1,
        title: 'Ceremonia',
        text: 'A las 16.45 hs. en la Parroquia San Roque Plaza 1180, Villa Ortuzar, Ciudad Autónoma de Buenos Aires',
        link: 'https://goo.gl/maps/7ygKCtxfQ11tVPQm7',
        icon: rings,
        order: { xs: 1, md: 1 },
        height: 120,
        fontSize: 'normal',
    },
    {
        id: 3,
        title: 'Dresscode',
        text: 'Elegante',
        link: '',
        icon: dresscode,
        order: { xs: 3, md: 2 },
        height: 90,
        fontSize: 'small',
    },
    {
        id: 2,
        title: 'Recepción',
        text: 'A las 19 hs. te esperamos para celebrar juntos en Finca La Nicolasa, Fray Luis Beltrán 629, Monte Grande',
        link: 'https://goo.gl/maps/eBNajTZaYqXzwJrc9',
        icon: copas,
        order: { xs: 2, md: 3 },
        height: 120,
        fontSize: 'normal',
    },
]

export default function IndividualLocations() {
    const matches = useMediaQuery('(min-width:900px)')

    return (
        <Stack
            direction={{ xs: 'column', sm: 'column', md: 'row' }}
            justifyContent='center'
            gap={{ lg: 16, md: 16, sm: 12, xs: 8 }}
            sx={{ textAlign: 'center' }}
        >
            {locationsInfo.map((location, index) => (
                <React.Fragment key={location.id}>
                    <Stack
                        maxWidth={400}
                        alignItems='center'
                        gap={location.fontSize === 'small' ? 1 : 2}
                        order={matches ? location.order.md : location.order.xs}
                    >
                        <Stack gap={2}>
                            <Box
                                component='img'
                                src={location.icon}
                                sx={{ height: matches ? location.height : 200, width: '100%' }}
                            />
                            <Typography sx={{ fontSize: location.fontSize === 'small' ? 20 : 22 }} variant='h6'>
                                {location.title}
                            </Typography>
                        </Stack>
                        <Typography>{location.text}</Typography>
                        {location.link && (
                            <Tooltip title='Ver en google maps' placement='bottom' arrow>
                                <Button
                                    component='a'
                                    href={location.link}
                                    variant='outlined'
                                    sx={{ mt: 2 }}
                                    startIcon={<MapIcon />}
                                    target='_blank'
                                >
                                    Google MAPS
                                </Button>
                            </Tooltip>
                        )}
                    </Stack>
                    {/* {index !== locationsInfo.length - 1 && !matches && <Divider flexItem orientation='horizontal' />} */}
                </React.Fragment>
            ))}
        </Stack>
    )
}

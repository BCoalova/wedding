import { Card, CardContent, CardHeader, CircularProgress } from '@mui/material'
import { Container } from '@mui/system'
import { useMemo } from 'react'
import topLeftGradient from '../../assets/bg_corners/top-left-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import GuestGrid from '../../components/GuestGrid'
import { useGlobalContext } from '../../context/GlobalContext'

export default function TransportList() {
    const { transportList, loadingTransportList } = useGlobalContext()

    const columnDefs = useMemo(() => {
        return [
            {
                field: 'formatedDate',
                headerName: 'Creado',
                sortable: true,
                width: 130,
                cellRenderer: values => values.value + ' hs.',
            },
            { field: 'completeName', headerName: 'Nombre Completo', sortable: true, width: 130 },
            { field: 'email', headerName: 'Correo electrónico', sortable: true, width: 200 },
            { field: 'paxCount', headerName: 'Cantidad de pasajeros', sortable: true },
        ]
    }, [])

    return (
        <FullHeightCenter
            sx={{
                justifyContent: 'start',
                position: 'relative',
                backgroundImage: `url(${topLeftGradient})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                overflow: 'hidden',
                pt: '94px',
            }}
        >
            <Container maxWidth='xxl'>
                <Card sx={{ py: 2, px: 4 }}>
                    <CardHeader title='Interesados en transporte' />
                    <CardContent>
                        {loadingTransportList && <CircularProgress color='primary' />}
                        {!loadingTransportList && <GuestGrid guests={transportList} columns={columnDefs} />}
                    </CardContent>
                </Card>
            </Container>
        </FullHeightCenter>
    )
}

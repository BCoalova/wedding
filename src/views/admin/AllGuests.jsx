import DraftsIcon from '@mui/icons-material/Drafts'
import EmailIcon from '@mui/icons-material/Email'
import { Card, CardContent, CardHeader, CircularProgress, Container, IconButton, Tooltip } from '@mui/material'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import topLeftGradient from '../../assets/bg_corners/top-left-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import GuestGrid from '../../components/GuestGrid'
import { useGlobalContext } from '../../context/GlobalContext'
import convertTimeStampToDate from '../../helpers/convertTimeStampToDate'

export default function AllGuests() {
    const { loadingGuests, guests } = useGlobalContext()

    const columnDefs = useMemo(() => {
        return [
            {
                field: 'open',
                headerName: 'Leído',
                sortable: true,
                maxWidth: 100,
                resizable: false,
                cellRenderer: values => (
                    <Tooltip title='Ver en formularios' placement='right' arrow>
                        <IconButton component={Link} to='/admin' state={{ guestID: values.data.guestID }}>
                            {!values.value ? <EmailIcon color='primary' /> : <DraftsIcon />}
                        </IconButton>
                    </Tooltip>
                ),
            },
            {
                field: 'formatedDate',
                headerName: 'Creado',
                sortable: true,
                width: 130,
                cellRenderer: values => values.value + ' hs.',
            },
            { field: 'name', headerName: 'Nombre', sortable: true, width: 130 },
            { field: 'lastName', headerName: 'Apellido', sortable: true, width: 150 },
            { field: 'age', headerName: 'Edad', sortable: true, width: 200 },
            { field: 'phone', headerName: 'Teléfono', sortable: true, width: 100 },
            { field: 'email', headerName: 'Email', sortable: true, width: 150 },
            { field: 'message', headerName: 'Mensaje', sortable: true },
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
                    <CardHeader title='Lista completa de confirmados' />
                    <CardContent>
                        {loadingGuests && <CircularProgress color='primary' />}
                        {!loadingGuests && (
                            <GuestGrid
                                guests={guests.reduce((cleanList, guest) => {
                                    const newGuestArr = guest.comensales.map(comensal => ({
                                        ...comensal,
                                        email: guest.email,
                                        phone: guest.phone,
                                        message: guest.message,
                                        open: guest.open,
                                        guestID: guest.guestID,
                                        createdAt: guest.createdAt,
                                    }))
                                    return [...cleanList, ...newGuestArr]
                                }, [])}
                                columns={columnDefs}
                            />
                        )}
                    </CardContent>
                </Card>
            </Container>
        </FullHeightCenter>
    )
}

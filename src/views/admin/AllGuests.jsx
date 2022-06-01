import { CircularProgress, Container, Paper, Typography } from '@mui/material'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'
import topLeftGradient from '../../assets/bg_corners/top-left-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import GuestGrid from '../../components/GuestGrid'
import { useGlobalContext } from '../../context/GlobalContext'

export default function AllGuests() {
    const { loadingGuests, guests } = useGlobalContext()

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
                <Paper sx={{ py: 2, px: 4 }}>
                    <Typography variant='h5' mb={2}>
                        Lista completa de confirmados
                    </Typography>
                    {loadingGuests && <CircularProgress color='primary' />}
                    {!loadingGuests && (
                        <GuestGrid
                            guests={guests.reduce((cleanList, guest) => {
                                const newGuestArr = guest.comensales.map(comensal => ({
                                    ...comensal,
                                    email: guest.email,
                                    phone: guest.phone,
                                    message: guest.message,
                                }))
                                return [...cleanList, ...newGuestArr]
                            }, [])}
                        />
                    )}
                </Paper>
            </Container>
        </FullHeightCenter>
    )
}

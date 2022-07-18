import { Container, Stack } from '@mui/material'
import topLeftGradient from '../../assets/bg_corners/top-left-dark-green-texture.svg'
import FullHeightCenter from '../../components/FullHeightCenter'
import GuestList from '../../components/GuestList'
import { useGlobalContext } from '../../context/GlobalContext'

export default function Dashboard() {
    const { guests, loadingGuests, markAsRead, markAsUnread, deleteComment } = useGlobalContext()

    return (
        <FullHeightCenter
            sx={{
                justifyContent: 'start',
                position: 'relative',
                backgroundImage: `url(${topLeftGradient})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top left',
                backgroundSize: { lg: '40vw', md: '50vw', sm: '100%', xs: '100%' },
                pt: '64px',
                overflowY: 'hidden',
            }}
        >
            <Container maxWidth='xxl' sx={{ minHeight: 'calc(100vh - 64px)' }}>
                <Stack gap={10} justifyContent='space-between'>
                    <GuestList
                        guests={guests}
                        loadingGuests={loadingGuests}
                        markAsRead={markAsRead}
                        markAsUnread={markAsUnread}
                        deleteComment={deleteComment}
                    />
                </Stack>
            </Container>
        </FullHeightCenter>
    )
}

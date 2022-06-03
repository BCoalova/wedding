import DraftsIcon from '@mui/icons-material/Drafts'
import EmailIcon from '@mui/icons-material/Email'
import {
    Card,
    CardContent,
    CardHeader,
    CircularProgress,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
} from '@mui/material'

export default function RecivedForms({ loadingGuests, guests, handleSelectGuest, selectedGuest }) {
    const matches = useMediaQuery('(max-width:1132px)')
    return (
        <Card
            className='overflowY'
            sx={{ px: 4, py: 4, my: 2, flexGrow: matches ? 1 : 0, height: `calc(100vh - 96px)`, overflowY: 'auto', zIndex: 10 }}
        >
            <CardHeader title='Formularios recibidos' />
            <CardContent>
                {loadingGuests && <CircularProgress color='primary' />}
                <nav aria-label='Formularios recibidos'>
                    <List dense>
                        {guests.map(guest => (
                            <ListItem disablePadding key={guest.guestID}>
                                <ListItemButton
                                    onClick={() => handleSelectGuest(guest)}
                                    selected={guest.guestID === selectedGuest?.guestID}
                                >
                                    <ListItemIcon>{guest.open ? <DraftsIcon /> : <EmailIcon color='primary' />}</ListItemIcon>
                                    <ListItemText primary={<>Email: {guest.email}</>} secondary={<>Teléfono: {guest.phone}</>} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </nav>
            </CardContent>
        </Card>
    )
}

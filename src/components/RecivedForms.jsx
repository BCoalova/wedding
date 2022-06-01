import {
    CircularProgress,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Typography,
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import DraftsIcon from '@mui/icons-material/Drafts'

export default function RecivedForms({ loadingGuests, guests, handleSelectGuest }) {
    return (
        <Paper sx={{ px: 4, py: 2, flexGrow: 0 }}>
            <Typography variant='h6'>Formularios recibidos</Typography>
            {loadingGuests && <CircularProgress color='primary' />}
            <nav aria-label='Formularios recibidos'>
                <List dense>
                    {guests.map(guest => (
                        <ListItem
                            disablePadding
                            key={guest.email}
                            // secondaryAction={
                            //     <IconButton edge='end' aria-label='Marcar como leído'>
                            //         {guest.open ? <EmailIcon /> : <DraftsIcon />}
                            //     </IconButton>
                            // }
                        >
                            <ListItemButton onClick={() => handleSelectGuest(guest)}>
                                <ListItemIcon>{guest.open ? <DraftsIcon /> : <EmailIcon />}</ListItemIcon>
                                <ListItemText primary={<>Email: {guest.email}</>} secondary={<>Teléfono: {guest.phone}</>} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </nav>
        </Paper>
    )
}

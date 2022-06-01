import {
    Divider,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Paper,
    Stack,
    Typography,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PhoneIcon from '@mui/icons-material/Phone'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'

export default function RecivedFormsDetail({ selectedGuest }) {
    return (
        <Paper sx={{ px: 4, py: 2, flexGrow: 1 }}>
            <List dense>
                <Stack gap={2}>
                    <Stack>
                        <Stack direction='row' gap={1} alignItems='center'>
                            <Typography fontWeight={600}> De:</Typography>
                            <Typography>{selectedGuest.email}</Typography>
                            <IconButton color='primary' component={Link} href={`mailto:${selectedGuest.email}`} underline='none'>
                                <ForwardToInboxIcon />
                            </IconButton>
                        </Stack>
                        <Stack direction='row' gap={1} alignItems='center'>
                            <Typography fontWeight={600}>Teléfono:</Typography>
                            <Typography>{selectedGuest.phone}</Typography>
                            <IconButton color='primary' component={Link} href={`tel:${selectedGuest.phone}`} underline='none'>
                                <PhoneIcon />
                            </IconButton>
                        </Stack>
                        <Typography fontWeight={600}>Mensaje: </Typography>
                        <Typography>{selectedGuest.message}</Typography>
                    </Stack>
                    <Divider flexItem />
                    <Stack>
                        <Typography variant='h6'>Asistentes: </Typography>
                        {selectedGuest.comensales.map(comensal => (
                            <ListItem disablePadding key={comensal.id}>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AccountCircleIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={
                                            <>
                                                Nombre: {comensal.name} {comensal.lastName}
                                            </>
                                        }
                                        secondary={<>Edad: {comensal.age}</>}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </Stack>
                </Stack>
            </List>
        </Paper>
    )
}

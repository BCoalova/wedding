import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CloseIcon from '@mui/icons-material/Close'
import DraftsIcon from '@mui/icons-material/Drafts'
import EmailIcon from '@mui/icons-material/Email'
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox'
import PhoneIcon from '@mui/icons-material/Phone'
import {
    Card,
    CardContent,
    CardHeader,
    Divider,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Stack,
    Tooltip,
    Typography,
} from '@mui/material'
import React from 'react'
import convertTimeStampToDate from '../helpers/convertTimeStampToDate'
import RecivedFormsComments from './RecivedFormsComments'
import RecivedFormsNewComment from './RecivedFormsNewComment'

const RecivedFormsDetail = ({ props }, ref) => {
    const { selectedGuest, handleMarkAsRead, handleUnselectGuest } = props

    return (
        <Card
            ref={ref}
            {...props}
            className='overflowY'
            sx={{ px: 4, py: 4, my: 2, flexGrow: 1, height: `calc(100vh - 96px)`, overflowY: 'auto', zIndex: 1 }}
        >
            <CardHeader
                action={
                    <Stack direction='row' gap={1}>
                        <Tooltip
                            title={!selectedGuest.open ? 'Marcar como leído' : 'Marcar como no leído'}
                            arrow
                            placement='right'
                        >
                            <IconButton
                                onClick={() => handleMarkAsRead(selectedGuest.guestID, selectedGuest.open)}
                                edge='end'
                                aria-label='Marcar como leído'
                            >
                                {!selectedGuest.open ? <EmailIcon /> : <DraftsIcon />}
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Cerrar' arrow placement='bottom'>
                            <IconButton onClick={handleUnselectGuest} edge='end' aria-label='Marcar como leído'>
                                <CloseIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                }
                title={'Detalles:'}
            />

            <CardContent>
                <Stack gap={2}>
                    <Stack gap={1}>
                        <Stack direction='row' gap={1} alignItems='center'>
                            <Typography fontWeight={600}> De:</Typography>
                            <Typography>{selectedGuest.email}</Typography>
                            <Tooltip title='Enviar correo' arrow placement='right'>
                                <IconButton
                                    size='small'
                                    color='primary'
                                    component={Link}
                                    href={`mailto:${selectedGuest.email}`}
                                    underline='none'
                                >
                                    <ForwardToInboxIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        <Stack direction='row' gap={1} alignItems='center'>
                            <Typography variant='caption' /* fontStyle='italic' fontSize='1rem' */>Creado el:</Typography>
                            <Typography variant='caption'>{convertTimeStampToDate(selectedGuest.createdAt)} hs.</Typography>
                        </Stack>
                        <Stack direction='row' gap={1} alignItems='center'>
                            <Typography fontWeight={600}>Teléfono:</Typography>
                            <Typography>{selectedGuest.phone}</Typography>
                            <Tooltip title='Llamar' arrow placement='right'>
                                <IconButton
                                    size='small'
                                    color='primary'
                                    component={Link}
                                    href={`tel:${selectedGuest.phone}`}
                                    underline='none'
                                >
                                    <PhoneIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                        <Stack direction='row' gap={1}>
                            <Typography fontWeight={600}>Mensaje: </Typography>
                            <Typography sx={{ whiteSpace: 'pre-wrap' }}>{selectedGuest.message}</Typography>
                        </Stack>
                    </Stack>
                    <Divider flexItem />
                    <Stack>
                        <Typography variant='h6'>Asistentes: </Typography>
                        <List dense>
                            {selectedGuest.comensales.map(comensal => (
                                <ListItem disablePadding key={comensal.id}>
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
                                </ListItem>
                            ))}
                        </List>
                    </Stack>

                    {selectedGuest.comments && (
                        <>
                            <Divider flexItem />
                            {selectedGuest.comments.map(commnet => (
                                <RecivedFormsComments comments={selectedGuest.comments} />
                            ))}
                        </>
                    )}
                    {/* <Divider flexItem />
                    {console.log(selectedGuest)}
                    <RecivedFormsNewComment formID={selectedGuest.guestID} /> */}
                </Stack>
            </CardContent>
        </Card>
    )
}

export default React.forwardRef(RecivedFormsDetail)

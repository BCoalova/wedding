import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import { LoadingButton } from '@mui/lab'
import {
    Alert,
    Box,
    Divider,
    FormControl,
    IconButton,
    InputLabel,
    Link,
    MenuItem,
    Select,
    Stack,
    TextField,
    Tooltip,
    Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useGlobalContext } from '../context/GlobalContext'
import useBoolean from '../hooks/useBoolean'
import useInput from '../hooks/useInput'

export default function RSPV() {
    const { addNewGuest, loadingSendForm } = useGlobalContext()
    const [comensales, setComensales] = useState([{ name: '', lastName: '', id: 1, age: '' }])
    const [email, bindEmail, resetEmail /*, clearEmail */] = useInput('')
    const [phone, bindPhone, resetPhone /*, clearPhone */] = useInput('')
    const [message, bindMessage, resetMessage /*, clearMessage */] = useInput('')

    const [successSend, turnFalse, turnTrue /*  resetSuccessSend, toggleSuccessSend */] = useBoolean(false)

    const handleNewComensal = id => {
        const lastIndex = comensales.length - 1

        setComensales(prevComensales => [
            ...prevComensales,
            { name: '', lastName: '', id: prevComensales[lastIndex].id + 1, age: '' },
        ])
    }
    const handleDeleteComensal = id => {
        const newArr = [...comensales]

        newArr.splice(
            newArr.findIndex(item => item.id === id),
            1
        )

        setComensales(newArr)
    }

    const handleComensalChange = (e, index) => {
        const key = e.target.name
        const value = e.target.value
        let newArr = [...comensales]

        newArr[index][key] = value

        setComensales(newArr)
    }

    const handleSubmit = async e => {
        e.preventDefault()
        const data = {
            comensales,
            email,
            phone,
            message,
            open: false,
            guest: 'true',
        }
        await addNewGuest(data)
        setComensales([{ name: '', lastName: '', id: 1, age: '' }])
        resetEmail()
        resetPhone()
        resetMessage()
        turnTrue()
    }

    return (
        <Box component='form' onSubmit={handleSubmit} sx={{ fontSize: 1 }}>
            <Stack gap={1}>
                {comensales.map((comensal, index) => (
                    <React.Fragment key={comensal.id}>
                        <Stack direction='row' alignItems='center'>
                            <Stack gap={1} flexGrow={1}>
                                <Stack direction='row' gap={1}>
                                    <TextField
                                        required
                                        label='Nombre'
                                        size='small'
                                        variant='outlined'
                                        fullWidth
                                        value={comensal.name}
                                        onChange={e => handleComensalChange(e, index)}
                                        name='name'
                                    />
                                    <TextField
                                        required
                                        label='Apellido'
                                        size='small'
                                        variant='outlined'
                                        fullWidth
                                        value={comensal.lastName}
                                        onChange={e => handleComensalChange(e, index)}
                                        name='lastName'
                                    />
                                </Stack>
                                <FormControl size='small' fullWidth required variant='outlined' name='edad'>
                                    <InputLabel id='edad'>Edad</InputLabel>
                                    <Select
                                        labelId='edad'
                                        id='edad'
                                        label='Edad'
                                        value={comensal.age}
                                        onChange={e => handleComensalChange(e, index)}
                                        name='age'
                                    >
                                        <MenuItem value='Adulto'>Adulto</MenuItem>
                                        <MenuItem value='De 6 a 10 años'>De 6 a 10 años</MenuItem>
                                        <MenuItem value='Menor de 5 años'>Menor de 5 años</MenuItem>
                                    </Select>
                                </FormControl>
                            </Stack>
                            {index !== 0 && (
                                <Box>
                                    <Tooltip title='Eliminar' placement='left' arrow>
                                        <IconButton
                                            size='small'
                                            aria-label='toggle password visibility'
                                            onClick={() => handleDeleteComensal(comensal.id)}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </Box>
                            )}
                        </Stack>
                    </React.Fragment>
                ))}
                <Tooltip title='Agregar otro' placement='right' arrow>
                    <IconButton
                        size='small'
                        aria-label='toggle password visibility'
                        onClick={() => handleNewComensal()}
                        sx={{ alignSelf: 'start' }}
                        type='button'
                    >
                        <AddCircleIcon color='secondary' />
                    </IconButton>
                </Tooltip>
                <Divider flexItem />
                <Stack gap={1}>
                    <TextField required label='Correo electrónico' size='small' type='email' variant='outlined' {...bindEmail} />
                    <TextField required label='Teléfono' size='small' variant='outlined' type='number' {...bindPhone} />
                </Stack>
                <Divider flexItem />
                <Stack gap={1}>
                    <Typography>
                        Por favor indicanos si alguno de los asistenes requiere de un menú especial (vegetariano o celíaco)
                    </Typography>
                    <TextField label='Mensaje' size='small' variant='outlined' multiline rows={4} {...bindMessage} />
                    <Typography fontSize='1rem'>
                        También podés escribirnos a{' '}
                        <Link color='primary' underline='none' href='mailto:maruyboris.19.11.22@gmail.com'>
                            maruyboris.19.11.22@gmail.com
                        </Link>
                    </Typography>
                </Stack>
                <Box mt={1}>
                    <LoadingButton
                        loading={loadingSendForm}
                        type='submit'
                        startIcon={<SendIcon />}
                        variant='contained'
                        color='secondary'
                    >
                        Enviar
                    </LoadingButton>
                </Box>
                {successSend && (
                    <Alert severity='success' onClose={turnFalse}>
                        Gracias, nos comunicaremos con vos en la brevedad
                    </Alert>
                )}
            </Stack>
        </Box>
    )
}

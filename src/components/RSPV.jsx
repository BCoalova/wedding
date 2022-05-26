import AddCircleIcon from '@mui/icons-material/AddCircle'
import SendIcon from '@mui/icons-material/Send'
import { Box, Button, FormControlLabel, IconButton, InputAdornment, Stack, Switch, TextField } from '@mui/material'
import { useState } from 'react'
import useBoolean from '../hooks/useBoolean'

export default function RSPV() {
    const [isAssisting, , , , toggleAssisting] = useBoolean(false)

    const [comensales, setComensales] = useState([{ name: '', id: 1 }])

    const handleNewComensal = id => {
        const lastIndex = comensales.length - 1

        setComensales(prevComensales => [...prevComensales, { name: '', id: prevComensales[lastIndex].id + 1 }])
    }

    return (
        <Box component='form'>
            <Stack gap={2}>
                <Stack direction='row' gap={2}>
                    <TextField label='Nombre' size='small' variant='outlined' fullWidth />
                    <TextField label='Apellido' size='small' variant='outlined' fullWidth />
                </Stack>
                <TextField label='Correo electrónico' size='small' variant='outlined' />
                <TextField label='Teléfono' size='small' variant='outlined' />

                <FormControlLabel
                    control={<Switch checked={isAssisting} onChange={toggleAssisting} defaultChecked />}
                    label='Asistiré'
                />
                {isAssisting &&
                    comensales.map(comensal => (
                        <TextField
                            key={comensal.id}
                            disabled={!isAssisting}
                            label='Agregar más comensales'
                            size='small'
                            variant='outlined'
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <IconButton
                                            aria-label='toggle password visibility'
                                            onClick={() => handleNewComensal(comensal.id)}
                                        >
                                            <AddCircleIcon color='primary' />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    ))}

                <TextField label='Mensaje' size='small' variant='outlined' multiline rows={4} />
                <Box mt={2}>
                    <Button startIcon={<SendIcon />} variant='contained' color='secondary'>
                        Enviar
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

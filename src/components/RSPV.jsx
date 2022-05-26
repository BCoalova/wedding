import { Box, Button, Stack, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'

export default function RSPV() {
    return (
        <Box component='form'>
            <Stack gap={2}>
                <Stack direction='row' gap={2}>
                    <TextField label='Nombre' size='small' variant='standard' fullWidth />
                    <TextField label='Apellido' size='small' variant='standard' fullWidth />
                </Stack>
                <TextField label='Correo electrónico' size='small' variant='standard' />
                <TextField label='Teléfono' size='small' variant='standard' />
                <TextField label='Mensaje' size='small' variant='standard' multiline rows={4} />
                <Box mt={2}>
                    <Button startIcon={<SendIcon />} variant='contained' color='secondary'>
                        Enviar
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

import AddCircleIcon from '@mui/icons-material/AddCircle'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle'
import SendIcon from '@mui/icons-material/Send'
import { LoadingButton } from '@mui/lab'
import { Alert, Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import useInput from '../hooks/useInput'
import usePaxCount from '../hooks/usePaxCount'
import { useGlobalContext } from '../context/GlobalContext'
import useBoolean from '../hooks/useBoolean'

export default function TransportationForm() {
    const { addNewTransportGuest, loadingSendTransport } = useGlobalContext()
    const [completeName, bindCompleteName, resetCompleteName /* , clearCompleteName */] = useInput('')
    const [email, bindEmail, resetEmail /* , clearEmail */] = useInput('')
    const [paxCount, bindPaxCount, add, sub, reset] = usePaxCount(1, false, 1)

    const [successSend, turnFalse, turnTrue /*  resetSuccessSend, toggleSuccessSend */] = useBoolean(false)

    const handleSubitTransportation = async e => {
        e.preventDefault()
        const data = {
            completeName,
            email,
            paxCount,
        }
        await addNewTransportGuest(data)
        resetCompleteName()
        resetEmail()
        reset()
        turnTrue()
    }

    return (
        <Box component='form' width='100%' onSubmit={e => handleSubitTransportation(e)}>
            <Stack gap={2} alignItems='stretch'>
                <TextField required size='small' label='Nombre y apellido' {...bindCompleteName} />
                <TextField required size='small' label='Correo electrónico' type='email' {...bindEmail} />
                <Stack direction='row'>
                    <IconButton disabled={paxCount <= 1 || paxCount === ''} variant='outlined' onClick={sub} color='secondary'>
                        <RemoveCircleIcon />
                    </IconButton>
                    <TextField
                        required
                        sx={{ flexGrow: 1 }}
                        inputProps={{ min: 0, step: '1' }}
                        size='small'
                        label='Cantidad de pasajeros'
                        type='number'
                        {...bindPaxCount}
                    />
                    <IconButton variant='outlined' onClick={add} color='secondary'>
                        <AddCircleIcon />
                    </IconButton>
                </Stack>
                <Typography>
                    Fecha límite: antes del{' '}
                    <Box component='span' fontWeight={500}>
                        1ro de septiembre de 2022
                    </Box>
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <LoadingButton
                        loading={loadingSendTransport}
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

import { Box, Button, Stack, TextField } from '@mui/material'
import { useGlobalContext } from '../context/GlobalContext'
import useInput from '../hooks/useInput'

export default function RecivedFormsNewComment({ formID }) {
    const { addNewComment } = useGlobalContext()
    const [value, bind, reset, clear] = useInput('')

    const handleAddComment = async (e, formID) => {
        e.preventDefault()
        console.log(formID)
        const data = {
            value,
        }
        await addNewComment(formID, data)
        reset()
    }

    return (
        <Stack gap={1} component='form' onSubmit={e => handleAddComment(e, formID)}>
            <TextField label='Dejar un comentario' size='small' multiline rows={4} {...bind} />
            <Box>
                <Button variant='outlined' type='submit'>
                    Enviar
                </Button>
            </Box>
        </Stack>
    )
}

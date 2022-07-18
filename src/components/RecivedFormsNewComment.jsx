import { LoadingButton } from '@mui/lab'
import { Box, Stack, TextField } from '@mui/material'
import { useGlobalContext } from '../context/GlobalContext'
import useInput from '../hooks/useInput'

export default function RecivedFormsNewComment({ formID }) {
    const { currentUser, addNewComment, loadingNewComment } = useGlobalContext()
    const [value, bind, reset /* , clear */] = useInput('')

    const handleAddComment = async (e, formID) => {
        e.preventDefault()

        const data = {
            value,
            userEmail: currentUser.email,
        }
        await addNewComment(formID, data)
        reset()
    }

    return (
        <Stack gap={1} component='form' onSubmit={e => handleAddComment(e, formID)} sx={{ fontSize: 1 }}>
            <TextField required label='Dejar un comentario' size='small' multiline rows={4} {...bind} />
            <Box>
                <LoadingButton size='small' variant='outlined' type='submit' loading={loadingNewComment}>
                    Enviar
                </LoadingButton>
            </Box>
        </Stack>
    )
}

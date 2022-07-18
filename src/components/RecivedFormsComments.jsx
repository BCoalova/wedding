import { Avatar, IconButton, List, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export default function RecivedFormsComments({ comment, deleteComment }) {
    return (
        <Paper elevation={1}>
            <List>
                <ListItem
                    secondaryAction={
                        <IconButton edge='end' aria-label='eliminar' onClick={() => deleteComment(comment.commentID)}>
                            <DeleteIcon />
                        </IconButton>
                    }
                >
                    <ListItemAvatar>
                        <Avatar alt={comment.userEmail} />
                    </ListItemAvatar>
                    <ListItemText
                        sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                        primary={<Typography variant='body2'>{`${comment.userEmail} - ${comment.formatedDate}`}</Typography>}
                        secondary={
                            <Typography variant='body2' color='text.primary'>
                                {comment.value}
                            </Typography>
                        }
                    />
                </ListItem>
            </List>
        </Paper>
    )
}

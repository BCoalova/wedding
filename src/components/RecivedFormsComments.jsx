import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'

export default function RecivedFormsComments({ comments }) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar></ListItemAvatar>
                <ListItemText primary='hola' secondary='mensaje' />
            </ListItem>
        </List>
    )
}

import { Button, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FullHeightCenter from '../../components/FullHeightCenter'
import { useGlobalContext } from '../../context/GlobalContext'

export default function Dashboard() {
    const { logOut, guests } = useGlobalContext()
    let navigate = useNavigate()

    const handleLogOut = async () => {
        await logOut()
        navigate('/login')
    }
    return (
        <FullHeightCenter>
            {guests.map(guest => (
                <Typography key={guest.email}>{guest.email}</Typography>
            ))}
            <Button variant='outlined' onClick={handleLogOut}>
                logout
            </Button>
        </FullHeightCenter>
    )
}

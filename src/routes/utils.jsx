import { Backdrop, CircularProgress } from '@mui/material'
import { Navigate } from 'react-router-dom'
import AdminNav from '../components/AdminNav'
import { useGlobalContext } from '../context/GlobalContext'

export default function PrivateRoute({ children }) {
    const { currentUser, loadingUser } = useGlobalContext()

    if (loadingUser)
        return (
            <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loadingUser}>
                <CircularProgress color='inherit' />
            </Backdrop>
        )

    return currentUser ? (
        <>
            <AdminNav />
            {children}
        </>
    ) : (
        <Navigate to='/login' />
    )
}

import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { createContext, useContext } from 'react'
import { auth } from '../firebase'
import useAddNewGuest from '../services/useAddNewGuest'
import useAddNewTransportGuest from '../services/useAddNewTransportGuest'
import useComments from '../services/useComments'
import { useInitialData } from '../services/useInitialData'
import useMarkReadUnread from '../services/useMarkReadUnread'

const GlobalContext = createContext()

const { Provider } = GlobalContext

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
    const [currentUser, loadingUser, guests, loadingGuests, loadingTransportList, transportList] = useInitialData()
    const [addNewGuest, loadingSendForm] = useAddNewGuest()
    const [markAsRead, markAsUnread] = useMarkReadUnread()
    const [addNewTransportGuest, loadingSendTransport] = useAddNewTransportGuest()
    const [comments, loadingComments, addNewComment, loadingNewComment, deleteComment] = useComments(currentUser)

    /* Log in user with gmail */
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    /* Log out */
    const logOut = async () => await signOut(auth)

    const value = {
        currentUser,
        login,
        logOut,
        loadingUser,

        guests,
        addNewGuest,
        loadingGuests,
        loadingSendForm,
        markAsRead,
        markAsUnread,

        transportList,
        loadingTransportList,
        addNewTransportGuest,
        loadingSendTransport,

        comments,
        loadingComments,
        addNewComment,
        loadingNewComment,
        deleteComment,
    }

    return <Provider value={value}>{children}</Provider>
}

export default GlobalProvider
export { useGlobalContext }

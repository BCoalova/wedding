import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { onSnapshot } from 'firebase/firestore'
import { addDoc, collection, getDocs, query } from 'firebase/firestore/lite'
import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { auth, db } from '../firebase'

const GlobalContext = createContext()

const { Provider } = GlobalContext

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [currentUser, setCurrentUser] = useState(null)
    const [guests, setGuests] = useState([])

    /* Log in user with gmail */
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    /* Log out */
    const logOut = () => signOut(auth)

    /* ADD NEW GUEST */
    const addNewGuest = async data => await addDoc(collection(db, 'guest'), data)

    /* log in observer (triggers ) */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
            }

            setLoading(false)
        })
        return () => {
            unsubscribe()
            setGuests([])
        }
    }, [])

    const isMounted = useRef()

    /* GET GUESTS INFO */
    useEffect(() => {
        if (!currentUser) return
        if (isMounted.current) return

        isMounted.current = true
        ;(async function unsub() {
            const querySnapshot = await getDocs(collection(db, '/guest'))
            querySnapshot.forEach(doc => {
                setGuests(prevState => [...prevState, doc.data()])
            })
        })()
    }, [currentUser, isMounted])

    const value = {
        currentUser,
        login,
        logOut,
        loading,
        guests,
        addNewGuest,
    }

    return <Provider value={value}>{children}</Provider>
}

export default GlobalProvider
export { useGlobalContext }

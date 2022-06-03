import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, doc, onSnapshot, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import useBoolean from '../hooks/useBoolean'

const GlobalContext = createContext()

const { Provider } = GlobalContext

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
    const [loadingUser, loadingFalse] = useBoolean(true)
    const [loadingGuests, loadingGuestsFalse, loadingGuestsTrue] = useBoolean(false)
    const [loadingSendForm, loadingSendFormFalse, loadingSendFormTrue] = useBoolean(false)
    const [currentUser, setCurrentUser] = useState(null)
    const [guests, setGuests] = useState([])

    /* Log in user with gmail */
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    /* Log out */
    const logOut = async () => await signOut(auth)

    /* ADD NEW GUEST */
    const addNewGuest = async data => {
        loadingSendFormTrue()
        const docRef = await addDoc(collection(db, 'guest'), { ...data, createdAt: serverTimestamp() })
        const addedID = doc(db, 'guest', docRef.id)
        await updateDoc(addedID, {
            guestID: docRef.id,
        })
        loadingSendFormFalse()
    }

    const markAsRead = async id => {
        const docToUpdate = doc(db, 'guest', id)
        await updateDoc(docToUpdate, {
            open: true,
        })
    }
    const markAsUnread = async id => {
        const docToUpdate = doc(db, 'guest', id)
        await updateDoc(docToUpdate, {
            open: false,
        })
    }

    /* log in observer (triggers ) */
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setCurrentUser(user)
            } else {
                setCurrentUser(null)
                setGuests([])
            }
            loadingFalse()
        })
        return () => {
            unsubscribe()
        }
    }, [loadingFalse])

    /* GET GUESTS INFO */
    useEffect(() => {
        if (!currentUser) return
        loadingGuestsTrue()
        const q = query(collection(db, 'guest'), where('guest', '==', 'true'))
        const unsubscribe = onSnapshot(q, querySnapshot => {
            const newGuestsArr = []
            querySnapshot.forEach(doc => {
                newGuestsArr.push(doc.data())
            })
            setGuests(newGuestsArr)
            loadingGuestsFalse()
        })

        return () => {
            unsubscribe()
        }
    }, [currentUser, loadingGuestsFalse, loadingGuestsTrue])

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
    }

    return <Provider value={value}>{children}</Provider>
}

export default GlobalProvider
export { useGlobalContext }

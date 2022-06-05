import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, arrayUnion, collection, doc, onSnapshot, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import convertTimeStampToDate from '../helpers/convertTimeStampToDate'
import useBoolean from '../hooks/useBoolean'

const GlobalContext = createContext()

const { Provider } = GlobalContext

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loadingUser, loadingFalse] = useBoolean(true)
    const [guests, setGuests] = useState([])
    const [loadingGuests, loadingGuestsFalse, loadingGuestsTrue] = useBoolean(false)
    const [transportList, setTransportList] = useState([])
    const [loadingTransportList, loadingTransportListFalse, loadingTransportListTrue] = useBoolean(false)
    const [loadingSendTransport, loadingSendTransportFalse, loadingSendTransportTrue] = useBoolean(false)
    const [loadingSendForm, loadingSendFormFalse, loadingSendFormTrue] = useBoolean(false)

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

    const addNewTransportGuest = async data => {
        loadingSendTransportTrue()
        const docRef = await addDoc(collection(db, 'transport'), { ...data, createdAt: serverTimestamp(), transport: 'true' })
        const addedID = doc(db, 'transport', docRef.id)
        await updateDoc(addedID, {
            guestID: docRef.id,
        })
        loadingSendTransportFalse()
    }

    const addNewComment = async (id, data) => {
        const docToUpdate = doc(db, 'guest', id)

        await updateDoc(docToUpdate, {
            comments: arrayUnion({ ...data, userEmail: currentUser.email, createdAt: serverTimestamp() }),
        })

        console.log(currentUser.email)
        console.log(docToUpdate)
        console.log(data)
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
                newGuestsArr.push({ ...doc.data(), formatedDate: convertTimeStampToDate(doc.data().createdAt) })
            })
            setGuests(newGuestsArr)
            loadingGuestsFalse()
        })

        return () => {
            unsubscribe()
        }
    }, [currentUser, loadingGuestsFalse, loadingGuestsTrue])

    /* GET TRANSPORT LIST INFO */
    useEffect(() => {
        if (!currentUser) return
        loadingTransportListTrue()
        const q = query(collection(db, 'transport'), where('transport', '==', 'true'))
        const unsubscribe = onSnapshot(q, querySnapshot => {
            const newTransportListsArr = []
            querySnapshot.forEach(doc => {
                newTransportListsArr.push({ ...doc.data(), formatedDate: convertTimeStampToDate(doc.data().createdAt) })
            })
            setTransportList(newTransportListsArr)
            loadingTransportListFalse()
        })

        return () => {
            unsubscribe()
        }
    }, [currentUser, loadingTransportListTrue, loadingTransportListFalse])

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
        addNewComment,
        transportList,
        loadingTransportList,
        addNewTransportGuest,
        loadingSendTransport,
    }

    return <Provider value={value}>{children}</Provider>
}

export default GlobalProvider
export { useGlobalContext }

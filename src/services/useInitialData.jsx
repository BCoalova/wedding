import { onAuthStateChanged } from 'firebase/auth'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { auth, db } from '../firebase'
import convertTimeStampToDate from '../helpers/convertTimeStampToDate'
import useBoolean from '../hooks/useBoolean'

export function useInitialData() {
    const [currentUser, setCurrentUser] = useState(null)
    const [loadingUser, loadingFalse] = useBoolean(true)
    const [loadingGuests, loadingGuestsFalse, loadingGuestsTrue] = useBoolean(false)
    const [guests, setGuests] = useState([])
    const [loadingTransportList, loadingTransportListFalse, loadingTransportListTrue] = useBoolean(false)
    const [transportList, setTransportList] = useState([])

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

    return [currentUser, loadingUser, guests, loadingGuests, loadingTransportList, transportList]
}

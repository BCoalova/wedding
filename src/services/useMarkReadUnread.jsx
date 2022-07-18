import { doc, updateDoc } from 'firebase/firestore'
import { useCallback } from 'react'
import { db } from '../firebase'

export default function useMarkReadUnread() {
    const markAsRead = useCallback(async id => {
        const docToUpdate = doc(db, 'guest', id)
        await updateDoc(docToUpdate, {
            open: true,
        })
    }, [])

    const markAsUnread = useCallback(async id => {
        const docToUpdate = doc(db, 'guest', id)
        await updateDoc(docToUpdate, {
            open: false,
        })
    }, [])

    return [markAsRead, markAsUnread]
}

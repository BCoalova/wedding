import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useCallback } from 'react'
import { db } from '../firebase'
import useBoolean from '../hooks/useBoolean'

export default function useAddNewGuest() {
    const [loadingSendForm, loadingSendFormFalse, loadingSendFormTrue] = useBoolean(false)

    const addNewGuest = useCallback(
        async data => {
            loadingSendFormTrue()
            const docRef = await addDoc(collection(db, 'guest'), { ...data, createdAt: serverTimestamp() })
            const addedID = doc(db, 'guest', docRef.id)
            await updateDoc(addedID, {
                guestID: docRef.id,
            })
            loadingSendFormFalse()
        },
        [loadingSendFormTrue, loadingSendFormFalse]
    )

    return [addNewGuest, loadingSendForm]
}

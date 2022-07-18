import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import { useCallback } from 'react'
import { db } from '../firebase'
import useBoolean from '../hooks/useBoolean'

export default function useAddNewTransportGuest() {
    const [loadingSendTransport, loadingSendTransportFalse, loadingSendTransportTrue] = useBoolean(false)

    const addNewTransportGuest = useCallback(
        async data => {
            loadingSendTransportTrue()
            const docRef = await addDoc(collection(db, 'transport'), { ...data, createdAt: serverTimestamp(), transport: 'true' })
            const addedID = doc(db, 'transport', docRef.id)
            await updateDoc(addedID, {
                guestID: docRef.id,
            })
            loadingSendTransportFalse()
        },
        [loadingSendTransportTrue, loadingSendTransportFalse]
    )

    return [addNewTransportGuest, loadingSendTransport]
}

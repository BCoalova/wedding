import { addDoc, collection, deleteDoc, doc, onSnapshot, query, serverTimestamp, updateDoc, where } from 'firebase/firestore'
import { useCallback, useEffect, useState } from 'react'
import { db } from '../firebase'
import convertTimeStampToDate from '../helpers/convertTimeStampToDate'
import useBoolean from '../hooks/useBoolean'

export default function useComments(currentUser) {
    const [comments, setComments] = useState([])
    const [loadingComments, loadingCommentsFalse, loadingCommentsTrue] = useBoolean(false)
    const [loadingNewComment, loadingNewCommentFalse, loadingNewCommentTrue] = useBoolean(false)

    const addNewComment = useCallback(
        async (guestID, data) => {
            loadingNewCommentTrue()
            const docRef = await addDoc(collection(db, 'comments'), {
                ...data,
                createdAt: serverTimestamp(),
                guestID,
                comment: true,
            })
            const addedID = doc(db, 'comments', docRef.id)
            await updateDoc(addedID, {
                commentID: docRef.id,
            })
            loadingNewCommentFalse()
        },
        [loadingNewCommentTrue, loadingNewCommentFalse]
    )

    const deleteComment = useCallback(async commentID => {
        console.log('hola')
        await deleteDoc(doc(db, 'comments', commentID))
    }, [])

    useEffect(() => {
        if (!currentUser) return
        loadingCommentsTrue()

        const q = query(collection(db, 'comments'), where('comment', '==', true))

        const unsubscribe = onSnapshot(q, querySnapshot => {
            const newGuestsArr = []
            querySnapshot.forEach(doc => {
                newGuestsArr.push({ ...doc.data(), formatedDate: convertTimeStampToDate(doc.data().createdAt) })
            })
            setComments(newGuestsArr)
            loadingCommentsFalse()
        })

        return () => unsubscribe()
    }, [currentUser, loadingCommentsFalse, loadingCommentsTrue])

    return [comments, loadingComments, addNewComment, loadingNewComment, deleteComment]
}

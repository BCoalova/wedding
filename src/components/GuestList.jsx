import { Stack, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useGlobalContext } from '../context/GlobalContext'
import RecivedForms from './RecivedForms'
import RecivedFormsDetail from './RecivedFormsDetail'

export default function GuestList({ guests, loadingGuests, markAsRead, markAsUnread, deleteComment }) {
    const matches = useMediaQuery('(max-width:1132px)')

    const [selectedGuest, setSelectedGuest] = useState(null)
    const { comments } = useGlobalContext()

    let { state } = useLocation()

    useEffect(() => {
        if (!state) return
        const findGuest = guests.find(guest => guest.guestID === state.guestID)
        if (!findGuest) return
        setSelectedGuest(findGuest)

        return () => setSelectedGuest(null)
    }, [state, guests])

    function handleSelectGuest(guest) {
        if (guest.guestID === selectedGuest?.guestID) return setSelectedGuest(null)
        setSelectedGuest(guest)
    }

    function handleUnselectGuest() {
        setSelectedGuest(null)
    }

    const handleMarkAsRead = async (id, isOpen) => {
        setSelectedGuest(prev => ({ ...prev, open: !isOpen }))
        if (isOpen) return await markAsUnread(id)
        if (!isOpen) return await markAsRead(id)
    }

    return (
        <Stack direction='row' gap={2} justifyContent='start' minWidth='100%' flexGrow={1}>
            {matches && !!selectedGuest ? null : (
                <RecivedForms
                    loadingGuests={loadingGuests}
                    guests={guests}
                    selectedGuest={selectedGuest}
                    handleSelectGuest={handleSelectGuest}
                    handleMarkAsRead={handleMarkAsRead}
                />
            )}
            {selectedGuest && (
                <RecivedFormsDetail
                    selectedGuest={selectedGuest}
                    handleMarkAsRead={handleMarkAsRead}
                    handleUnselectGuest={handleUnselectGuest}
                    comments={comments.filter(comment => comment.guestID === selectedGuest.guestID)}
                    deleteComment={deleteComment}
                />
            )}
        </Stack>
    )
}

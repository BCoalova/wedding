import { Slide, Stack, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import RecivedForms from './RecivedForms'
import RecivedFormsDetail from './RecivedFormsDetail'

export default function GuestList({ guests, loadingGuests, markAsRead, markAsUnread }) {
    const matches = useMediaQuery('(max-width:1132px)')

    const [selectedGuest, setSelectedGuest] = useState(null)

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
            {matches && selectedGuest ? null : (
                <RecivedForms
                    loadingGuests={loadingGuests}
                    guests={guests}
                    selectedGuest={selectedGuest}
                    handleSelectGuest={handleSelectGuest}
                    handleMarkAsRead={handleMarkAsRead}
                />
            )}
            {selectedGuest && (
                <Slide
                    direction='right'
                    in={!!selectedGuest}
                    mountOnEnter
                    unmountOnExit
                    easing={{
                        enter: 'cubic-bezier(.69,.05,.2,1.08)',
                        exit: 'linear',
                    }}
                >
                    <RecivedFormsDetail props={{ selectedGuest, handleMarkAsRead, handleUnselectGuest }} />
                </Slide>
            )}
        </Stack>
    )
}

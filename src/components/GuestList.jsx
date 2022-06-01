import { Stack } from '@mui/material'
import { useState } from 'react'
import RecivedForms from './RecivedForms'
import RecivedFormsDetail from './RecivedFormsDetail'

export default function GuestList({ guests, loadingGuests }) {
    const [selectedGuest, setSelectedGuest] = useState(null)

    function handleSelectGuest(guest) {
        setSelectedGuest(guest)
    }

    return (
        <Stack direction='row' gap={2} justifyContent='start' minWidth='100%' flexGrow={1}>
            <RecivedForms loadingGuests={loadingGuests} guests={guests} handleSelectGuest={handleSelectGuest} />
            {selectedGuest && <RecivedFormsDetail selectedGuest={selectedGuest} />}
        </Stack>
    )
}

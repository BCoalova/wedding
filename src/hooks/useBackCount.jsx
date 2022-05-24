import countdown from 'countdown'
import { useEffect, useState } from 'react'

function useBackCount(date) {
    const [intervaleD, setIntervalD] = useState(null)

    useEffect(() => {
        let preLoadCountDown = setInterval(() => {
            setIntervalD(countdown(new Date().getTime(), date.getTime()))
        }, 150)

        return () => {
            clearInterval(preLoadCountDown)
        }
    }, [date])

    return [intervaleD]
}

export default useBackCount

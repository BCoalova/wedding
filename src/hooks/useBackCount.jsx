import { intervalToDuration } from 'date-fns'
import { useState, useEffect } from 'react'

function useBackCount(date) {
    const [intervaleD, setIntervalD] = useState(null)

    useEffect(() => {
        let preLoadCountDown = setInterval(() => {
            setIntervalD(
                intervalToDuration({
                    start: new Date(),
                    end: date,
                })
            )
        }, 150)

        return () => {
            clearInterval(preLoadCountDown)
        }
    }, [])

    return [intervaleD]
}

export default useBackCount

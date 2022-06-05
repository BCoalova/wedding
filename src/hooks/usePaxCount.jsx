import { useCallback, useState } from 'react'

export default function usePaxCount(initialNum = 0, max, min) {
    const [value, setValue] = useState(initialNum)

    const bind = {
        value,
        onChange: e => {
            const targetValue = e.target.value
            const regex = new RegExp('^[0-9]+$')

            if (!regex.test(targetValue)) return

            setValue(parseInt(targetValue))
        },
    }

    const add = useCallback(() => {
        if (typeof max === 'number' && max === value) return

        setValue(preValue => preValue + 1)
    }, [max, value])

    const sub = useCallback(() => {
        if (typeof min === 'number' && min === value) return

        setValue(preValue => preValue - 1)
    }, [min, value])
    const reset = useCallback(() => setValue(initialNum), [initialNum])

    return [value, bind, add, sub, reset]
}

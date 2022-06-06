import { useCallback, useState } from 'react'

export default function usePaxCount(initialNum = 0, max, min) {
    const [value, setValue] = useState(initialNum)

    const bind = {
        value,
        onChange: e => {
            const targetValue = e.target.value
            if (targetValue === '0') return

            const regex = new RegExp('^$|^[0-9]+$')
            console.log(regex.test(''))
            if (!regex.test(targetValue)) return
            if (isNaN(parseInt(targetValue))) return setValue('')
            setValue(parseInt(targetValue))
        },
    }

    const add = useCallback(() => {
        if (typeof max === 'number' && max === value) return

        if (typeof value === 'string') return setValue(preValue => (isNaN(parseInt(preValue)) ? 1 : parseInt(preValue) + 1))

        setValue(preValue => preValue + 1)
    }, [max, value])

    const sub = useCallback(() => {
        if (typeof min === 'number' && min === value) return
        if (value === '') setValue(0)

        setValue(preValue => preValue - 1)
    }, [min, value])
    const reset = useCallback(() => setValue(initialNum), [initialNum])

    return [value, bind, add, sub, reset]
}

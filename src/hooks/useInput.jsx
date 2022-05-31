import { useState, useCallback } from 'react'

export default function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue)

    const bind = {
        value,
        onChange: e => setValue(e.target.value),
    }

    const reset = useCallback(() => setValue(initialValue), [initialValue])

    const clear = useCallback(() => setValue(''), [])

    return [value, bind, reset, clear]
}

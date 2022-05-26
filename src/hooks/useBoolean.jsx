import { useCallback, useState } from 'react'

export default function useBoolean(initial = false) {
    const [state, setState] = useState(initial)

    const turnFalse = useCallback(() => setState(false), [])

    const turnTrue = useCallback(() => setState(true), [])

    const reset = useCallback(() => setState(initial), [initial])

    const toggle = useCallback(() => setState(prev => !prev), [])

    return [state, turnFalse, turnTrue, reset, toggle]
}

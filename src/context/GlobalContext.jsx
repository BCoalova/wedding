import { Global } from '@emotion/react'
import { createContext, useContext } from 'react'

const GlobalContext = createContext()

const { Provider } = GlobalContext

const useGlobalContext = () => {
    return useContext(GlobalContext)
}

const GlobalProvider = ({ children }) => {
    const value = { value: 'hola' }

    return <Provider value={value}>{children}</Provider>
}

export default GlobalProvider
export { useGlobalContext }

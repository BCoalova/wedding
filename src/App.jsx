import { ThemeProvider } from '@mui/material'
import Nav from './components/Nav'
import theme from './styles/theme'
import Home from './views/home'
import './styles/styles.css'
import GlobalProvider from './context/GlobalContext'

import Routes from './routes'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalProvider>
                <Routes />
            </GlobalProvider>
        </ThemeProvider>
    )
}

export default App

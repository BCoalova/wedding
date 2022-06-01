import { ThemeProvider } from '@mui/material'
import GlobalProvider from './context/GlobalContext'
import Routes from './routes'
import './styles/styles.css'
import theme from './styles/theme'

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

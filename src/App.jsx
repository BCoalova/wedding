import { ThemeProvider } from '@mui/material'
import Nav from './components/Nav'
import theme from './styles/theme'
import Home from './views/home'
import './styles/styles.css'
import GlobalProvider from './context/GlobalContext'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalProvider>
                <Nav />
                <Home />
            </GlobalProvider>
        </ThemeProvider>
    )
}

export default App

import { ThemeProvider } from '@mui/material'
import Nav from './components/Nav'
import theme from './styles/theme'
import Home from './views/home'
import './styles/styles.css'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Nav />
            <Home />
        </ThemeProvider>
    )
}

export default App

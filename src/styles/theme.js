import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFBF8',
        },
        secondary: {
            main: '#6db871',
            contrastText: '#fff',
        },
        primary: {
            main: '#BA925D',
            contrastText: '#333',
        },
        contrastText: '#333333',
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 16,
        h2: {
            fontFamily: '"ChopinScript"',
            fontSize: 60,
        },
        h1: {
            fontSize: 70,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: 16,
                    'font-weight': '500',
                    paddingInline: 24,
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    color: '#BA925D',
                },
            },
        },
    },
})

export default theme

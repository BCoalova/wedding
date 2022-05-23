import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFBF8',
        },
        secondary: {
            main: '#BA925D',
            contrastText: '#333',
        },
        primary: {
            main: '#6db871',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 16,
        h1: {
            fontFamily: '"ChopinScript"',
            fontSize: 130,
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

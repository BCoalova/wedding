import { createTheme } from '@mui/material'

const theme = createTheme({
    palette: {
        background: {
            default: '#FFFBF8',
        },
        secondary: {
            main: '#3e70a0',
            contrastText: '#333',
        },
        primary: {
            main: '#6db871',
            contrastText: '#fff',
        },
    },
    typography: {
        fontFamily: "'Montserrat', sans-serif",
        fontSize: 20,
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
    },
})

export default theme

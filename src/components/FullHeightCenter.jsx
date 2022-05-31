import { Stack } from '@mui/material'

function FullHeightCenter({ children, minus = 0, sx, ...rest }) {
    return (
        <Stack minHeight={`calc(100vh - ${minus}px)`} alignItems='center' justifyContent='center' sx={sx} {...rest}>
            {children}
        </Stack>
    )
}

export default FullHeightCenter

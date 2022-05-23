import { Typography } from '@mui/material'
import { WEDDING_DATE } from '../constants'
import useBackCount from '../hooks/useBackCount'
import FullHeightCenter from './FullHeightCenter'

function CommingSoon() {
    const [intervaleD] = useBackCount(WEDDING_DATE)

    return (
        <FullHeightCenter sx={{ textAlign: 'center' }}>
            {intervaleD && (
                <>
                    <Typography p={2} variant='h1'>
                        {intervaleD.months > 0 && (
                            <>
                                En{' '}
                                <Typography variant='h1' component='span'>
                                    {intervaleD.months}
                                </Typography>{' '}
                                meses,
                            </>
                        )}
                        {intervaleD.days > 0 && (
                            <>
                                <Typography variant='h1' component='span'>
                                    {' '}
                                    {intervaleD.days}
                                </Typography>{' '}
                                días y
                            </>
                        )}{' '}
                        <Typography variant='h1' component='span'>
                            {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}:
                        </Typography>
                        <Typography variant='h1' component='span'>
                            {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}:
                        </Typography>
                        <Typography variant='h1' component='span'>
                            {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                        </Typography>
                    </Typography>
                </>
            )}
        </FullHeightCenter>
    )
}

export default CommingSoon

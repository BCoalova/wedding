import { Typography } from '@mui/material'
import { WEDDING_DATE2 } from '../constants'
import useBackCount from '../hooks/useBackCount'
import FullHeightCenter from './FullHeightCenter'

function CommingSoon() {
    const [intervaleD] = useBackCount(WEDDING_DATE2)

    return (
        <FullHeightCenter sx={{ textAlign: 'center' }}>
            {intervaleD && (
                <>
                    <Typography p={2} variant='h1' color='secondary' fontSize={{ lg: 130, md: 130, sm: 80, xs: 80 }}>
                        {intervaleD.months > 0 && (
                            <>
                                En{' '}
                                <span variant='h1' component='span'>
                                    {intervaleD.months}
                                </span>{' '}
                                meses,
                            </>
                        )}
                        {intervaleD.days > 0 && (
                            <>
                                <span variant='h1' component='span'>
                                    {' '}
                                    {intervaleD.days}
                                </span>{' '}
                                días y
                            </>
                        )}{' '}
                        <span variant='h1' component='span'>
                            {intervaleD.hours < 10 ? '0' + intervaleD.hours : intervaleD.hours}:
                        </span>
                        <span variant='h1' component='span'>
                            {intervaleD.minutes < 10 ? '0' + intervaleD.minutes : intervaleD.minutes}:
                        </span>
                        <span variant='h1' component='span'>
                            {intervaleD.seconds < 10 ? '0' + intervaleD.seconds : intervaleD.seconds}
                        </span>
                    </Typography>
                </>
            )}
        </FullHeightCenter>
    )
}

export default CommingSoon

import FullHeightCenter from '../../components/FullHeightCenter'
import acuarelaBottomRight from '../../assets/img/Untitled-1-03.svg'

function Confirm() {
    return (
        <FullHeightCenter
            sx={{
                backgroundImage: `url(${acuarelaBottomRight})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
                backgroundAttachment: 'fixed',
            }}
        >
            RSPV
        </FullHeightCenter>
    )
}

export default Confirm

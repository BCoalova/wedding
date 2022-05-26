import Parallax from '../../components/Parallax'
import Confirm from './Confirm'
import Gifts from './Gifts'
import Hero from './Hero'
import LocationInfo from './LocationInfo'

function Sections() {
    return (
        <>
            <Hero />
            <Parallax />
            <LocationInfo />
            <Confirm />
            <Gifts />
        </>
    )
}
export default Sections

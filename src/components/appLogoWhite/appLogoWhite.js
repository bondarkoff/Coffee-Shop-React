import { BeansWhiteFill } from "../../img"

import './appLogoWhite.scss'

const AppLogoWhite = () => {
    return (
        <div className="logo">
            <span className="divider-white"></span>
            <img src={BeansWhiteFill} alt="Logo" />
            <span className="divider-white"></span>
        </div>
    )
}

export default AppLogoWhite
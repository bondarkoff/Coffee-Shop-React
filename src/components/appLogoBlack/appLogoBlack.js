import { BeansBlackFill } from "../../img"

import './appLogoBlack.scss'

const AppLogoBlack = () => {
    return (
        <div className="logo">
            <span className="divider-black"></span>
            <img src={BeansBlackFill} alt="Logo" />
            <span className="divider-black"></span>
        </div>
    )
}

export default AppLogoBlack
import { BeansBlack } from '../../img'
import AppLogoBlack from '../appLogoBlack/appLogoBlack'

import './footer.scss'


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="menu">
                    <nav className="menu__nav">
                        <li className="menu__link">
                            <img src={BeansBlack} alt="Coffee Beans White"/>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item black" href="index.html">Coffee house</a>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item black" href="about.html">Our coffee</a>
                        </li>
                        <li className="menu__link">
                            <a className="menu__link-item black" href="goods.html">For your pleasure</a>
                        </li>
                    </nav>
                </div>
                <AppLogoBlack/>
            </div>
        </footer>
    )
}

export default Footer
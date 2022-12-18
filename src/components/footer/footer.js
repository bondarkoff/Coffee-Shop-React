import { Link } from 'react-router-dom'

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
                            <Link className="menu__link-item black" to="/">Coffee house</Link>
                        </li>
                        <li className="menu__link">
                            <Link className="menu__link-item black" to="/ourCoffee">Our coffee</Link>
                        </li>
                        <li className="menu__link">
                            <Link className="menu__link-item black" to="/">For your pleasure</Link>
                        </li>
                    </nav>
                </div>
                <AppLogoBlack/>
            </div>
        </footer>
    )
}

export {Footer}
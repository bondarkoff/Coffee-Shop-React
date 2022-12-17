import './menu.scss'

import { BeansWhite } from '../../img'

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="menu">
                    <nav>
                        <ul className="menu__list">
                            <li className="menu__link">
                                <img src={BeansWhite} alt="Coffee Beans White"/>
                            </li>
                            <li className="menu__link">
                                <a className="menu__link-item" href="index.html">Coffee house</a>
                            </li>
                            <li className="menu__link">
                                <a className="menu__link-item" href="about.html">Our coffee</a>
                            </li>
                            <li className="menu__link">
                                <a className="menu__link-item" href="goods.html">For your pleasure</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
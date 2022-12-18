import './menu.scss'
import { BeansWhite } from '../../img'
import { Link } from 'react-router-dom'

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
                                <Link className="menu__link-item" to="/">Coffee house</Link>
                            </li>
                            <li className="menu__link">
                                <Link className="menu__link-item" to="/ourCoffee">Our coffee</Link>
                            </li>
                            <li className="menu__link">
                                <Link className="menu__link-item" to="/">For your pleasure</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header
import Header from '../menu/menu'
import AppLogoWhite from '../appLogoWhite/appLogoWhite'

import './mainScreen.scss'


const MainScreen = () => {
    return (
        <div className="mainScreen">
            <Header/>
            <div className="promo">
                <div className="container">
                    <div className="promo__text">
                        <h1 className="promo__text-title">Everything You Love About Coffee</h1>
                        <AppLogoWhite/>
                        <h2 className="promo__text-subtitle">We makes every day full of energy and taste<br/> Want to try our beans?</h2>
                        <div className="promo__text-button">
                            <form action="#" target="_blank">
                                <button className="promo__button">More</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen
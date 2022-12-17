import { FirstItem, SecondItem, ThirdItem } from '../../img'

import './appOurBest.scss'

const AppOurBest = () => {
    return (
        <div className="appOurBest">
           <div className="container">
                <div className="best">
                    <div className="best__title">Our best</div>
                    <ul className="best__list">
                        <li className="best__list-item">
                            <div className="best__list-content">
                                <img className="best__list-img" src={FirstItem} alt="First" />
                                <div className="best__list-title">Solimo Coffee Beans 2 kg</div>
                                <div className="best__list-price">10.73$</div>
                            </div>
                        </li>
                        <li className="best__list-item">
                            <div className="best__list-content">
                                <img className="best__list-img" src={SecondItem} alt="First" />
                                <div className="best__list-title">Presto Coffee Beans 1 kg</div>
                                <div className="best__list-price">15.99$</div>
                            </div>
                        </li>
                        <li className="best__list-item">
                            <div className="best__list-content">
                                <img className="best__list-img" src={ThirdItem} alt="First" />
                                <div className="best__list-title">AROMISTICO Coffee 1 kg</div>
                                <div className="best__list-price">6.99$</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AppOurBest
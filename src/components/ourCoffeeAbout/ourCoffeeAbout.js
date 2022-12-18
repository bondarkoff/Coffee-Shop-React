import React, { Component } from 'react';

import { Girl } from '../../img';
import AppLogoBlack from '../appLogoBlack/appLogoBlack';
import AboutFilter from '../aboutFilter/aboutFilter';
import '../ourCoffeeAbout/ourCoffeeAbout.scss'

class ourCoffeeAbout extends Component {
    render() {
        return (
            <div className="ourCoffeeAbout">
                <div className="container">
                    <div className="ourCoffeeAbout__wrapper">
                        <img src={Girl} alt="Photo_1" className="ourCoffeeAbout__img" />
                        <div className="ourCoffeeAbout__text">
                            <div className="ourCoffeeAbout__title">About our beans</div>
                            <AppLogoBlack/>
                            <div className="ourCoffeeAbout__descr">
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. <br/><br/>
                                As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </div>
                        </div>
                    </div>
                    <div className="ourCoffeeAbout__divider">
                        <span></span>
                    </div>
                    <AboutFilter/>
                </div>
            </div>
        );
    }
}

export default ourCoffeeAbout;
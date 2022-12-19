import React, { Component } from 'react';
import AppLogoBlack from '../appLogoBlack/appLogoBlack';
import { Cup } from '../../img';
import { Footer } from '../footer/footer';

import './pleasureAbout.scss'
import AboutItems from '../aboutItems/aboutItems';
import AboutFilter from '../aboutFilter/aboutFilter';

class PleasureAbout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentItems: [],
            term: '',
            items: [
                {
                    id: 1,
                    name: 'AROMISTICO Coffee 1 kg',
                    img: "first.png",
                    country: 'Brazil',
                    category: 'Coffee',
                    price: '6.99',
                },
                {
                    id: 2,
                    name: 'SPANISH Coffee 2 kg',
                    img: "first.png",
                    country: 'Columbia',
                    category: 'Coffee',
                    price: '8.49',
                },
                {
                    id: 3,
                    name: 'AROMISTICO Coffee 1 kg',
                    img: "first.png",
                    country: 'Kenya',
                    category: 'Coffee',
                    price: '5.99',
                },
                {
                    id: 4,
                    name: 'SPANISH Coffee 2 kg',
                    img: "first.png",
                    country: 'Brazil',
                    category: 'Coffee',
                    price: '11.49',
                },
                {
                    id: 5,
                    name: 'AROMISTICO Coffee 1 kg',
                    img: "first.png",
                    country: 'Columbia',
                    category: 'Coffee',
                    price: '9.99',
                },
                {
                    id: 6,
                    name: 'SPANISH Coffee 2 kg',
                    img: "first.png",
                    country: 'Brazil',
                    category: 'Coffee',
                    price: '8.49',
                },
            ]
        }
        this.chooseCategory = this.chooseCategory.bind(this)
        this.state.currentItems = this.state.items
    }

    onUpdateSearch = (term) => {
        this.setState({term})
    }

    chooseCategory(country) {
        this.setState({
            currentItems: this.state.items.filter(el => el.country === country)
        })
    }

    render() {
        return (
            <div className="pleasureAbout">
                <div className="container">
                    <div className="ourCoffeeAbout__wrapper">
                        <img src={Cup} alt="Photo_1" className="ourCoffeeAbout__img" />
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
                    <div className="pleasureAbout__divider">
                        <span></span>
                    </div>
                    <AboutFilter chooseCategory={this.chooseCategory}/>
                    <AboutItems items={this.state.currentItems} />
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default PleasureAbout;
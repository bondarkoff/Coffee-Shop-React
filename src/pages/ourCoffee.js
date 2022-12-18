import React, { Component } from 'react';

import OurCoffeeMain from '../components/ourCoffeeMain/ourCoffeeMain';
import OurCoffeeAbout from '../components/ourCoffeeAbout/ourCoffeeAbout';

class OurCoffee extends Component {
    render() {
        return (
            <div>
                <OurCoffeeMain/>
                <OurCoffeeAbout/>
            </div>
        );
    }
}

export {OurCoffee}
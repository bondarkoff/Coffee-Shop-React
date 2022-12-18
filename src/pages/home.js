import React, { Component } from 'react';

import { MainScreen } from '../components/mainScreen/mainScreen'
import { AppAboutUs } from '../components/appAboutUs/appAboutUs'
import { AppOurBest } from '../components/appOurBest/appOurBest'
import { Footer } from '../components/footer/footer'

class Home extends Component {
    render() {
        return (
            <>
                <MainScreen/>
                <AppAboutUs/>
                <AppOurBest/>
                <Footer/>
            </>
        );
    }
}

export {Home}
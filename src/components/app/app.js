

import React, { Component } from 'react';

import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/home'
import { OurCoffee } from '../../pages/ourCoffee'
import ForYourPleasure from '../../pages/forYourPleasure';

import './app.scss';

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/ourCoffee' element={<OurCoffee/>}/>
                <Route path='/forYourPleasure' element={<ForYourPleasure/>}/>
            </Routes>
        );
    }
}

export default App;

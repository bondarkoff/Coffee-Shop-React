

import React, { Component } from 'react';

import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/home'
import { OurCoffee } from '../../pages/ourCoffee'

import './app.scss';

class App extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/ourCoffee' element={<OurCoffee/>}/>
            </Routes>
        );
    }
}

export default App;

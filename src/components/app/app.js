

import { Route, Routes } from 'react-router-dom'
import { Home } from '../../pages/home'
import { OurCoffee } from '../../pages/ourCoffee'

import './app.scss';


function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/ourCoffee' element={<OurCoffee/>}/>
        </Routes>
    )
}

export default App;

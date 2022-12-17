import AppAboutUs from '../appAboutUs/appAboutUs';
import AppOurBest from '../appOurBest/appOurBest';
import MainScreen from '../mainScreen/mainScreen';
import Footer from '../footer/footer';

import './app.scss';


function App() {
    return (
        <div className="app">
            <MainScreen/>
            <AppAboutUs/>
            <AppOurBest/>
            <Footer/>
        </div>
    )
}

export default App;

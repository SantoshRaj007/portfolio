import './assets/css/style.min.css'
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/services' element={<Services />} />
                <Route path='/portfolio' element={<Portfolio />} />
                <Route path='/contact-us' element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

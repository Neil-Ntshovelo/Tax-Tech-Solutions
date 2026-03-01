import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import FirstPage from './components/FirstPage';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Footer from './components/Footer';
import Services from './components/Services';
import ScrollToTop from './components/ScrollToTop';
import './App.css'; 

const App = () => {
    return (
        <Router basename="/Tax-Tech-Solutions">
            <div className='bg-zinc-100 min-h-screen flex flex-col'>
                <NavBar />
                <ScrollToTop />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<FirstPage />} />
                        <Route path="/contact" element={<ContactUs />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services-items" element={<Services />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
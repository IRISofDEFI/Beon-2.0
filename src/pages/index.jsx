import Layout from "./Layout.jsx";

import Home from "./Home";

import Shop from "./Shop";

import RegisterBrand from "./RegisterBrand";

import ScanVerify from "./ScanVerify";

import BookTalent from "./BookTalent";

import About from "./About";

import Contact from "./Contact";

<<<<<<< HEAD
=======
import MarketPlace from "./MarketPlace";

>>>>>>> ai-temp/main
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

const PAGES = {
    
    Home: Home,
    
    Shop: Shop,
    
    RegisterBrand: RegisterBrand,
    
    ScanVerify: ScanVerify,
    
    BookTalent: BookTalent,
    
    About: About,
    
    Contact: Contact,
    
<<<<<<< HEAD
=======
    MarketPlace: MarketPlace,
    
>>>>>>> ai-temp/main
}

function _getCurrentPage(url) {
    if (url.endsWith('/')) {
        url = url.slice(0, -1);
    }
    let urlLastPart = url.split('/').pop();
    if (urlLastPart.includes('?')) {
        urlLastPart = urlLastPart.split('?')[0];
    }

    const pageName = Object.keys(PAGES).find(page => page.toLowerCase() === urlLastPart.toLowerCase());
    return pageName || Object.keys(PAGES)[0];
}

// Create a wrapper component that uses useLocation inside the Router context
function PagesContent() {
    const location = useLocation();
    const currentPage = _getCurrentPage(location.pathname);
    
    return (
        <Layout currentPageName={currentPage}>
            <Routes>            
                
                    <Route path="/" element={<Home />} />
                
                
                <Route path="/Home" element={<Home />} />
                
                <Route path="/Shop" element={<Shop />} />
                
                <Route path="/RegisterBrand" element={<RegisterBrand />} />
                
                <Route path="/ScanVerify" element={<ScanVerify />} />
                
                <Route path="/BookTalent" element={<BookTalent />} />
                
                <Route path="/About" element={<About />} />
                
                <Route path="/Contact" element={<Contact />} />
                
<<<<<<< HEAD
=======
                <Route path="/MarketPlace" element={<MarketPlace />} />
                
>>>>>>> ai-temp/main
            </Routes>
        </Layout>
    );
}

export default function Pages() {
    return (
        <Router>
            <PagesContent />
        </Router>
    );
}
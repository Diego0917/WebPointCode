import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import DevelopmentPage from './pages/DevelopmentPage';
import DesignPage from './pages/DesignPage';
import GlowCursor from './components/GlowCursor'; // <--- 1. Importa el componente

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Packages />
      <Portfolio />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="bg-[#14162d] bg-grid-pattern text-white min-h-screen w-full overflow-x-hidden m-0 p-0 relative">
        
        <GlowCursor /> {/* <--- 2. Colócalo aquí para que persista en todo el sitio */}
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/desarrollo" element={<DevelopmentPage />} />
          <Route path="/diseno" element={<DesignPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ModalQuote from './components/ModalQuote';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="bg-[#14162d] text-white min-h-screen selection:bg-[#24b3a9] selection:text-[#14162d]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Packages onSelectPlan={(plan) => setSelectedPlan(plan)} />
      <Portfolio />
      <Footer />

      <ModalQuote 
        planName={selectedPlan} 
        onClose={() => setSelectedPlan(null)} 
      />
    </div>
  );
}
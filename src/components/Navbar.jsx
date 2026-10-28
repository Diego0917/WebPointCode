import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#14162d]/90 backdrop-blur-md border-b border-[#24b3a9]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#24b3a9] to-[#58b03b] flex items-center justify-center font-bold text-xl text-[#14162d] font-[Gill_Sans]">
            PC
          </div>
          <span className="font-bold text-xl tracking-wider uppercase text-white font-[Gill_Sans]">
            [TU_LOGO_AQUÍ]
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8 font-[Gill_Sans] text-lg font-semibold">
          <a href="#inicio" className="hover:text-[#24b3a9] transition-colors">Inicio</a>
          <a href="#nosotros" className="hover:text-[#24b3a9] transition-colors">Quiénes Somos</a>
          <a href="#paquetes" className="hover:text-[#24b3a9] transition-colors">Paquetes</a>
          <a href="#portafolio" className="hover:text-[#24b3a9] transition-colors">Portafolio</a>
          <a href="#contacto" className="hover:text-[#24b3a9] transition-colors">Contacto</a>
        </div>

        <div className="hidden md:block">
          <a 
            href="#paquetes"
            className="bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-[#24b3a9]/20 font-[Gill_Sans]"
          >
            Solicitar Cotización
          </a>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#14162d] border-b border-[#24b3a9]/20 px-4 pt-2 pb-6 space-y-4 font-[Gill_Sans] text-lg">
          <a href="#inicio" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#24b3a9]">Inicio</a>
          <a href="#nosotros" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#24b3a9]">Quiénes Somos</a>
          <a href="#paquetes" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#24b3a9]">Paquetes</a>
          <a href="#portafolio" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#24b3a9]">Portafolio</a>
          <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="block py-2 hover:text-[#24b3a9]">Contacto</a>
          <a 
            href="#paquetes" 
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full text-center bg-[#24b3a9] text-[#14162d] font-bold py-3 rounded-lg"
          >
            Solicitar Cotización
          </a>
        </div>
      )}
    </nav>
  );
}
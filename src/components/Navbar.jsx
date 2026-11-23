import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import logoPointCode from '../assets/logoPointCode.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (sectionId === 'contacto') {
      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        if (sectionId === 'inicio') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#14162d]/80 border-b border-white/10">
      <div className="w-full px-6 sm:px-12 lg:px-20 h-20 flex items-center justify-between">
        
        {/* LOGOTIPO */}
        <div className="flex items-center space-x-3">
          <a href="/" onClick={(e) => handleNavClick(e, 'inicio')} className="flex items-center">
            <img 
              src={logoPointCode} 
              alt="Point Code Logo" 
              style={{ height: '150px', width: '200' }} 
              className="object-contain filter brightness-0 invert" 
            />
          </a>
        </div>

        {/* MENÚ DE NAVEGACIÓN DESKTOP */}
        <div className="hidden md:flex items-center space-x-8 text-sm tracking-wide">
          <a href="/#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="text-gray-300 hover:text-[#24b3a9] transition-colors">Inicio</a>
          <a href="/#quienes-somos" onClick={(e) => handleNavClick(e, 'quienes-somos')} className="text-gray-300 hover:text-[#24b3a9] transition-colors">Quiénes Somos</a>
          <a href="/#paquetes" onClick={(e) => handleNavClick(e, 'paquetes')} className="text-gray-300 hover:text-[#24b3a9] transition-colors">Paquetes</a>
          <a href="/#portafolio" onClick={(e) => handleNavClick(e, 'portafolio')} className="text-gray-300 hover:text-[#24b3a9] transition-colors">Portafolio</a>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')} className="text-gray-300 hover:text-[#24b3a9] transition-colors">Contacto</a>
        </div>

        <div className="hidden md:block">
          <a 
            href="https://wa.me/message/NIM6DH4S2L3AO1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-[#24b3a9]/20"
          >
            Solicitar Cotización
          </a>
        </div>

        {/* BOTÓN MENÚ MÓVIL */}
        <button 
          className="md:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MENÚ MÓVIL DESPLEGABLE */}
      {mobileMenuOpen && (
        <div className="md:hidden backdrop-blur-xl bg-[#14162d]/95 border-b border-white/10 px-6 py-6 space-y-4">
          <a href="/#inicio" onClick={(e) => handleNavClick(e, 'inicio')} className="block text-gray-300 hover:text-[#24b3a9]">Inicio</a>
          <a href="/#quienes-somos" onClick={(e) => handleNavClick(e, 'quienes-somos')} className="block text-gray-300 hover:text-[#24b3a9]">Quiénes Somos</a>
          <a href="/#paquetes" onClick={(e) => handleNavClick(e, 'paquetes')} className="block text-gray-300 hover:text-[#24b3a9]">Paquetes</a>
          <a href="/#portafolio" onClick={(e) => handleNavClick(e, 'portafolio')} className="block text-gray-300 hover:text-[#24b3a9]">Portafolio</a>
          <a href="#contacto" onClick={(e) => handleNavClick(e, 'contacto')} className="block text-gray-300 hover:text-[#24b3a9]">Contacto</a>
          <div className="pt-2">
            <a 
              href="https://wa.me/message/NIM6DH4S2L3AO1" 
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#24b3a9] text-[#14162d] font-bold py-3 rounded-lg"
            >
              Solicitar Cotización
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
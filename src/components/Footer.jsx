import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoPointCode from '../assets/logoPointCode.png'; // 

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#14162d] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoPointCode} 
                alt="Point Code Logo" 
                style={{ height: '140px', width: '200px' }} // 
                className="object-contain filter brightness-0 invert" 
              />
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Diseñamos y desarrollamos soluciones web optimizadas para que tu marca destaque y escale en el entorno digital.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#24b3a9]">Información de Contacto</h4>
            <div className="space-y-4 text-gray-300 text-sm">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#58b03b]" />
                <span>+57 323 735 5714</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#24b3a9]" />
                <span>codewebpoint@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#58b03b]" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-500">
          © 2026 Point Code. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
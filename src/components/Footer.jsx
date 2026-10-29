import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#14162d] border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-[#24b3a9] to-[#58b03b] flex items-center justify-center font-bold text-xl text-[#14162d] font-[Gill_Sans]">
                PC
              </div>
              <span className="font-bold text-xl tracking-wider uppercase text-white font-[Gill_Sans]">
                [TU_LOGO_AQUÍ]
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed font-[Arial]">
              Diseñamos y desarrollamos soluciones web optimizadas para que tu marca destaque y escale en el entorno digital.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-[#24b3a9] font-[Gill_Sans]">Información de Contacto</h4>
            <div className="space-y-4 text-gray-300 text-sm font-[Arial]">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-[#58b03b]" />
                <span>+57 300 000 0000</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-[#24b3a9]" />
                <span>contacto@tudominio.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-[#58b03b]" />
                <span>Bogotá, Colombia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-xs text-gray-500 font-[Gill_Sans]">
          © 2026 Tu Empresa. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
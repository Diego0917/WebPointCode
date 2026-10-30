import React from 'react';
import { Code, Palette, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Packages() {
  const navigate = useNavigate();

  return (
    <section id="paquetes" className="py-20 w-full px-6 sm:px-12 lg:px-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[Gill_Sans]">
          Nuestros Servicios y Paquetes
        </h2>
        <p className="text-gray-300 text-lg font-[Arial]">
          Selecciona la categoría que necesitas para explorar las soluciones disponibles para tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        
        {/* Opción 1: Desarrollo e Innovación */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#24b3a9] transition-all flex flex-col justify-between group shadow-2xl">
          <div>
            <div className="w-16 h-16 bg-[#24b3a9]/10 rounded-xl flex items-center justify-center text-[#24b3a9] mb-6 group-hover:scale-110 transition-transform">
              <Code size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white font-[Gill_Sans]">
              Desarrollo e Innovación
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-[Arial]">
              Landing pages, sitios corporativos y plataformas web a medida optimizadas para maximizar conversión y rendimiento.
            </p>
          </div>
          <button 
            onClick={() => navigate('/desarrollo')}
            className="w-full bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 font-[Gill_Sans]"
          >
            <span>Ver Planes de Desarrollo</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Opción 2: Diseño */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-[#58b03b] transition-all flex flex-col justify-between group shadow-2xl">
          <div>
            <div className="w-16 h-16 bg-[#58b03b]/10 rounded-xl flex items-center justify-center text-[#58b03b] mb-6 group-hover:scale-110 transition-transform">
              <Palette size={36} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-white font-[Gill_Sans]">
              Diseño
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 font-[Arial]">
              Diseño de identidad visual, prototipado UI/UX y creación de piezas digitales estratégicas para tu marca.
            </p>
          </div>
          <button 
            onClick={() => navigate('/diseno')}
            className="w-full border-2 border-[#58b03b] hover:bg-[#58b03b]/10 text-white font-bold py-3.5 px-6 rounded-xl transition-all flex items-center justify-center space-x-2 font-[Gill_Sans]"
          >
            <span>Ver Planes de Diseño</span>
            <ArrowRight size={18} className="text-[#58b03b]" />
          </button>
        </div>

      </div>
    </section>
  );
}
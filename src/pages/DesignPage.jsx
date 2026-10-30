import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DesignPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#14162d] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Botón de Regreso */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center text-[#58b03b] hover:underline mb-8 font-semibold font-[Gill_Sans]"
        >
          <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[Gill_Sans] text-white">
            Planes de Diseño y Branding
          </h1>
          <p className="text-gray-300 text-lg font-[Arial]">
            Impulsa la identidad visual de tu marca con diseños profesionales adaptados al entorno digital.
          </p>
        </div>

        {/* Tarjetas de Paquetes de Diseño (Puedes ajustar los textos a tus servicios reales) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan Básico de Diseño */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#58b03b]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#58b03b] font-[Gill_Sans]">Kit Básico de Marca</h3>
              <p className="text-gray-400 text-sm mb-6 font-[Arial]">Ideal para emprendedores que necesitan una identidad inicial limpia.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300 font-[Arial]">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Diseño de Logotipo principal</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Paleta de colores oficial</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Tipografías corporativas</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Archivos en alta resolución</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#58b03b] border border-[#58b03b] text-[#58b03b] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all font-[Gill_Sans]"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Plan Profesional de Diseño (Destacado) */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border-2 border-[#58b03b] relative flex flex-col justify-between transform md:-translate-y-2 shadow-2xl shadow-[#58b03b]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58b03b] text-[#14162d] font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-widest font-[Gill_Sans]">
              Más Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white font-[Gill_Sans]">Branding Corporativo</h3>
              <p className="text-gray-300 text-sm mb-6 font-[Arial]">Para marcas consolidadas que buscan una identidad visual robusta.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-200 font-[Arial]">
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Manual de identidad visual completo</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Diseño de isotipo y variaciones</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Plantillas para redes sociales</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Papelería corporativa básica</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-[#58b03b] hover:bg-[#58b03b]/90 text-[#14162d] font-extrabold py-3.5 rounded-xl transition-all shadow-lg font-[Gill_Sans]"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Plan Avanzado de Diseño */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#24b3a9]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#24b3a9] font-[Gill_Sans]">UI/UX & Redes</h3>
              <p className="text-gray-400 text-sm mb-6 font-[Arial]">Enfocado en interfaces digitales y gestión visual continua.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300 font-[Arial]">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Prototipado UI/UX en Figma</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Diseño de banners y piezas web</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Kit mensual de creativos digitales</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Asesoría de línea gráfica</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#24b3a9] border border-[#24b3a9] text-[#24b3a9] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all font-[Gill_Sans]"
            >
              Seleccionar Plan
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
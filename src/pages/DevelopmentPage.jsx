import React from 'react';
import { Check, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DevelopmentPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#14162d] text-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Botón de Regreso */}
        <button 
          onClick={() => navigate('/')}
          className="inline-flex items-center text-[#24b3a9] hover:underline mb-8 font-semibold font-[Gill_Sans]"
        >
          <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-[Gill_Sans] text-white">
            Planes de Desarrollo e Innovación
          </h1>
          <p className="text-gray-300 text-lg font-[Arial]">
            Selecciona la opción de ingeniería y desarrollo web que mejor se adapte a la etapa de tu negocio.
          </p>
        </div>

        {/* Tarjetas de Paquetes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan Básico */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#24b3a9]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#24b3a9] font-[Gill_Sans]">Plan Impulso / Landing</h3>
              <p className="text-gray-400 text-sm mb-6 font-[Arial]">Ideal para lanzar tu presencia rápidamente en internet.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300 font-[Arial]">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Landing Page de 4 secciónes</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Adaptable a celulares y tablets</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Redireccion directa a tu whatsapp</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Enlaces a redes sociales</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#24b3a9] border border-[#24b3a9] text-[#24b3a9] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all font-[Gill_Sans]"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Plan Emprendedor */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border-2 border-[#24b3a9] relative flex flex-col justify-between transform md:-translate-y-2 shadow-2xl shadow-[#24b3a9]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#24b3a9] text-[#14162d] font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-widest font-[Gill_Sans]">
              Más Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white font-[Gill_Sans]">Plan Proyeccion</h3>
              <p className="text-gray-300 text-sm mb-6 font-[Arial]">Perfecto para mostrar tus productos o servicios con catálogo.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-200 font-[Arial]">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Sitio web multipágina (hasta 6 secciones)</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Catálogo digital o lista de servicios</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> SEO basico</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Instalacion de Google Analytics</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] font-extrabold py-3.5 rounded-xl transition-all shadow-lg font-[Gill_Sans]"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Plan Corporativo */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#58b03b]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#58b03b] font-[Gill_Sans]">Plan en proceso</h3>
              <p className="text-gray-400 text-sm mb-6 font-[Arial]">???</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300 font-[Arial]">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> ???</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> ???</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> ???</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> ???</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#58b03b] border border-[#58b03b] text-[#58b03b] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all font-[Gill_Sans]"
            >
              Seleccionar Plan
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
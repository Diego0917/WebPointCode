import React from 'react';
import { Check } from 'lucide-react';

export default function Packages({ onSelectPlan }) {
  return (
    <section id="paquetes" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[Gill_Sans]">
          Paquetes que Tenemos
        </h2>
        <p className="text-gray-300 text-lg font-[Arial]">
          Selecciona la opción que mejor se adapte a la etapa actual de tu negocio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#24b3a9]/50 transition-all">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#24b3a9] font-[Gill_Sans]">Plan Básico / Landing</h3>
            <p className="text-gray-400 text-sm mb-6 font-[Arial]">Ideal para lanzar tu presencia rápidamente en internet.</p>
            <ul className="space-y-4 mb-8 text-sm text-gray-300 font-[Arial]">
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Landing Page de 1 sección</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Adaptable a celulares y tablets</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Formulario de contacto directo</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Enlaces a redes sociales</li>
            </ul>
          </div>
          <button 
            onClick={() => onSelectPlan("Plan Básico")}
            className="w-full bg-transparent hover:bg-[#24b3a9] border border-[#24b3a9] text-[#24b3a9] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all font-[Gill_Sans]"
          >
            Seleccionar Plan
          </button>
        </div>

        <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border-2 border-[#24b3a9] relative flex flex-col justify-between transform md:-translate-y-2 shadow-2xl shadow-[#24b3a9]/10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#24b3a9] text-[#14162d] font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-widest font-[Gill_Sans]">
            Más Popular
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2 text-white font-[Gill_Sans]">Plan Emprendedor</h3>
            <p className="text-gray-300 text-sm mb-6 font-[Arial]">Perfecto para mostrar tus productos o servicios con catálogo.</p>
            <ul className="space-y-4 mb-8 text-sm text-gray-200 font-[Arial]">
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Sitio web multipágina (hasta 5 secciones)</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Catálogo digital o lista de servicios</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Optimización de carga rápida</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Formulario + Mapa interactivo</li>
            </ul>
          </div>
          <button 
            onClick={() => onSelectPlan("Plan Emprendedor")}
            className="w-full bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] font-extrabold py-3.5 rounded-xl transition-all shadow-lg font-[Gill_Sans]"
          >
            Seleccionar Plan
          </button>
        </div>

        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#58b03b]/50 transition-all">
          <div>
            <h3 className="text-2xl font-bold mb-2 text-[#58b03b] font-[Gill_Sans]">Plan Corporativo</h3>
            <p className="text-gray-400 text-sm mb-6 font-[Arial]">Para negocios que requieren máxima personalización.</p>
            <ul className="space-y-4 mb-8 text-sm text-gray-300 font-[Arial]">
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Sitio web a medida ilimitado</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Integración de sistemas avanzados</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Optimización SEO avanzada</li>
              <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Soporte y mantenimiento prioritario</li>
            </ul>
          </div>
          <button 
            onClick={() => onSelectPlan("Plan Corporativo")}
            className="w-full bg-transparent hover:bg-[#58b03b] border border-[#58b03b] text-[#58b03b] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all font-[Gill_Sans]"
          >
            Seleccionar Plan
          </button>
        </div>
      </div>
    </section>
  );
}
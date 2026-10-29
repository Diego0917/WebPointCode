import React from 'react';
import { Zap, Target, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#24b3a9]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#24b3a9]/10 border border-[#24b3a9]/30 text-[#24b3a9] font-semibold text-sm uppercase tracking-wider font-[Gill_Sans]">
        Soluciones Web de Alto Impacto
      </div>

      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight max-w-4xl mx-auto font-[Gill_Sans]">
        Convertimos Tu Presencia Digital en una <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#24b3a9] to-[#58b03b]">Máquina de Ventas</span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed font-[Arial]">
        Diseñamos páginas web modernas, rápidas y optimizadas para que tu negocio destaque y venda 24/7. Transforma visitantes en clientes potenciales sin procesos complicados.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 font-[Gill_Sans]">
        <a 
          href="#paquetes" 
          className="w-full sm:w-auto bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] text-lg font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-[#24b3a9]/20"
        >
          Ver Paquetes y Planes
        </a>
        <a 
          href="#portafolio" 
          className="w-full sm:w-auto border-2 border-[#58b03b] hover:bg-[#58b03b]/10 text-[#58b03b] text-lg font-bold px-8 py-4 rounded-xl transition-all"
        >
          Explorar Portafolio
        </a>
      </div>

      {/* Vista previa con tu imagen de assets */}
      {heroImg && (
        <div className="max-w-4xl mx-auto mb-12 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <img src={heroImg} alt="Ilustración Hero" className="w-full object-cover max-h-[400px]" />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8 border-t border-gray-800">
        <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/5">
          <Zap className="text-[#24b3a9]" size={24} />
          <span className="font-semibold text-gray-200 font-[Gill_Sans]">Carga Ultrarrápida</span>
        </div>
        <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/5">
          <Target className="text-[#58b03b]" size={24} />
          <span className="font-semibold text-gray-200 font-[Gill_Sans]">Enfoque en Conversión</span>
        </div>
        <div className="flex items-center justify-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/5">
          <ShieldCheck className="text-[#24b3a9]" size={24} />
          <span className="font-semibold text-gray-200 font-[Gill_Sans]">Seguridad y Confianza</span>
        </div>
      </div>
    </section>
  );
}
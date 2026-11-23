import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import TypewriterTitle from './TypewriterTitle'; // <--- Importamos el componente

export default function Hero() {
  return (
    <section id="inicio" className="pt-36 pb-24 md:pt-48 md:pb-32 px-6 sm:px-12 lg:px-20 w-full relative overflow-hidden">
      {/* Fondo decorativo con brillo sutil */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#24b3a9]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end w-full">
        
        {/* Columna Izquierda: Títulos y Descripción */}
        <div className="lg:col-span-10 text-left">
          
          {/* Título Principal con Efecto Máquina de Escribir */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-8 leading-none">
            <span className="block text-white mb-2">TU PRESENCIA DIGITAL</span>
            <TypewriterTitle /> {/* <--- Aquí se alternan dinámicamente las palabras */}
          </h1>

          {/* Subtítulo con barra lateral de acento */}
          <div className="flex items-center space-x-4 mb-12 max-w-4xl">
            <div className="w-1.5 h-12 bg-[#24b3a9] rounded-full flex-shrink-0"></div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Diseñamos páginas web modernas, rápidas y optimizadas para que tu negocio destaque y venda <strong className="text-white">24/7</strong>.
            </p>
          </div>

          {/* Botones de Acción */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5">
            <a 
              href="#paquetes" 
              className="bg-[#24b3a9] hover:bg-[#24b3a9]/90 text-[#14162d] text-base font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-between group shadow-lg shadow-[#24b3a9]/20"
            >
              <span>VER PAQUETES Y PLANES</span>
              <ArrowUpRight size={20} className="ml-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a 
              href="#portafolio" 
              className="border-2 border-[#58b03b] hover:bg-[#58b03b]/10 text-white text-base font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-between group bg-[#14162d]/50"
            >
              <span>EXPLORAR PORTAFOLIO</span>
              <ArrowRight size={20} className="ml-3 text-[#58b03b] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Columna Derecha: Etiquetas de Atributos */}
        <div className="lg:col-span-2 hidden lg:flex flex-col items-end justify-end text-right pb-4">
          <div className="space-y-2 text-xs tracking-widest text-gray-400 uppercase select-none">
            <p className="hover:text-[#24b3a9] transition-colors cursor-default">Diseño</p>
            <p className="hover:text-[#24b3a9] transition-colors cursor-default">Estrategia</p>
            <p className="hover:text-[#58b03b] transition-colors cursor-default">Resultados</p>
          </div>
        </div>

      </div>
    </section>
  );
}
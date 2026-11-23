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
          className="inline-flex items-center text-[#58b03b] hover:underline mb-8 font-semibold"
        >
          <ArrowLeft size={20} className="mr-2" /> Volver al Inicio
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Planes de Diseño y Branding
          </h1>
          <p className="text-gray-300 text-lg">
            Impulsa la identidad visual de tu marca con diseños profesionales adaptados al entorno digital.
          </p>
        </div>

        {/* Tarjetas de Paquetes de Diseño (Puedes ajustar los textos a tus servicios reales) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Plan Básico de Diseño */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#58b03b]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#58b03b]">Rediseño Express</h3>
              <p className="text-gray-400 text-sm mb-6">Renueva tu imagen actual sin perder la esencia de tu negocio.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Optimización y modernización de tu logo actual</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Ajuste de proporciones y limpieza de trazos</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Actualización de paleta cromática</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Entrega en formatos editables y alta resolución</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#58b03b] border border-[#58b03b] text-[#58b03b] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Plan Profesional de Diseño (Destacado) */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border-2 border-[#58b03b] relative flex flex-col justify-between transform md:-translate-y-2 shadow-2xl shadow-[#58b03b]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58b03b] text-[#14162d] font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-widest">
              Más Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Identidad Desde Cero</h3>
              <p className="text-gray-300 text-sm mb-6">Ideal para emprendimientos nuevos que buscan una marca memorable.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-200">
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Creación de logotipo principal desde cero</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Asesoría conceptual y de naming (nombre)</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Definición de identidad gráfica inicial</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3" /> Archivos listos para uso digital e impreso</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-[#58b03b] hover:bg-[#58b03b]/90 text-[#14162d] font-extrabold py-3.5 rounded-xl transition-all shadow-lg"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Plan Avanzado de Diseño */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#24b3a9]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#24b3a9]">Pack Creativo Pro</h3>
              <p className="text-gray-400 text-sm mb-6">Explora múltiples caminos creativos hasta encontrar tu marca ideal.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Todo lo incluido en Identidad Desde Cero</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Desarrollo de 2 a 3 propuestas de diseño distintas</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Rondas de ajustes sobre la opción elegida</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3" /> Variaciones de logo (horizontal, vertical y sello)</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#24b3a9] border border-[#24b3a9] text-[#24b3a9] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all"
            >
              Seleccionar Plan
            </button>
          </div>
        </div>

        {/* MANUALES DE IDENTIDAD CORPORATIVA */}
        <div className="text-center max-w-3xl mx-auto mt-24 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Manuales de Identidad Corporativa
          </h2>
          <p className="text-gray-300 text-lg">
            Documenta y estandariza cada detalle de tu marca para proyectar una imagen coherente en cualquier formato.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Manual Esencial */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#58b03b]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#58b03b]">Manual Esencial</h3>
              <p className="text-gray-400 text-sm mb-6">Las reglas fundamentales para mantener coherencia visual.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Construcción y retícula del logotipo</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Paleta de colores oficial (RGB, CMYK y HEX)</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Jerarquía y tipografías corporativas</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Documento guía en formato PDF</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#58b03b] border border-[#58b03b] text-[#58b03b] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Manual Corporativo (Destacado) */}
          <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-2xl p-8 border-2 border-[#58b03b] relative flex flex-col justify-between transform md:-translate-y-2 shadow-2xl shadow-[#58b03b]/10">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58b03b] text-[#14162d] font-extrabold text-xs px-4 py-1 rounded-full uppercase tracking-widest">
              Más Popular
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-white">Manual Corporativo</h3>
              <p className="text-gray-300 text-sm mb-6">Estandariza tu marca en piezas físicas y entornos digitales.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-200">
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3 shrink-0" /> Todo lo incluido en el Manual Esencial</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3 shrink-0" /> Definición de universo gráfico y estilo visual</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3 shrink-0" /> Mockups y aplicaciones en papelería y redes</li>
                <li className="flex items-center"><Check size={18} className="text-[#24b3a9] mr-3 shrink-0" /> Versiones adaptables para distintos fondos</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-[#58b03b] hover:bg-[#58b03b]/90 text-[#14162d] font-extrabold py-3.5 rounded-xl transition-all shadow-lg"
            >
              Seleccionar Plan
            </button>
          </div>

          {/* Manual Master Brand */}
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10 flex flex-col justify-between hover:border-[#24b3a9]/50 transition-all">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-[#24b3a9]">Manual Master Brand</h3>
              <p className="text-gray-400 text-sm mb-6">Control total sobre el uso y proyección profesional de tu marca.</p>
              <ul className="space-y-4 mb-8 text-sm text-gray-300">
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Todo lo incluido en el Manual Corporativo</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Guía detallada de usos correctos e incorrectos</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Áreas de protección y tamaños mínimos de reducción</li>
                <li className="flex items-center"><Check size={18} className="text-[#58b03b] mr-3 shrink-0" /> Kit completo de archivos maestros y recursos</li>
              </ul>
            </div>
            <button 
              onClick={() => window.open('https://wa.me/message/NIM6DH4S2L3AO1', '_blank')}
              className="w-full bg-transparent hover:bg-[#24b3a9] border border-[#24b3a9] text-[#24b3a9] hover:text-[#14162d] font-bold py-3 rounded-xl transition-all"
            >
              Seleccionar Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { Layout, Smartphone, TrendingUp, Layers } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="nosotros" className="py-20 bg-white/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white font-[Gill_Sans]">
            Quiénes Somos y Qué Hacemos
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed font-[Arial]">
            Somos un equipo apasionado por el desarrollo web y el diseño estratégico. Ayudamos a emprendedores, marcas y empresas a construir una identidad digital sólida que no solo impresione visualmente, sino que genere resultados reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[#14162d] p-8 rounded-2xl border border-white/10 hover:border-[#24b3a9] transition-all group">
            <div className="w-14 h-14 bg-[#24b3a9]/10 rounded-xl flex items-center justify-center text-[#24b3a9] mb-6 group-hover:scale-110 transition-transform">
              <Layout size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-[Gill_Sans]">Diseño Web a Medida</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-[Arial]">
              Creamos sitios únicos adaptados completamente a la personalidad y necesidades operativas de tu marca.
            </p>
          </div>

          <div className="bg-[#14162d] p-8 rounded-2xl border border-white/10 hover:border-[#58b03b] transition-all group">
            <div className="w-14 h-14 bg-[#58b03b]/10 rounded-xl flex items-center justify-center text-[#58b03b] mb-6 group-hover:scale-110 transition-transform">
              <Smartphone size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-[Gill_Sans]">Diseño Responsive</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-[Arial]">
              Garantizamos que tu web se vea impecable en teléfonos móviles, tabletas y computadores.
            </p>
          </div>

          <div className="bg-[#14162d] p-8 rounded-2xl border border-white/10 hover:border-[#24b3a9] transition-all group">
            <div className="w-14 h-14 bg-[#24b3a9]/10 rounded-xl flex items-center justify-center text-[#24b3a9] mb-6 group-hover:scale-110 transition-transform">
              <TrendingUp size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-[Gill_Sans]">Enfoque en Ventas</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-[Arial]">
              Estructuramos tus contenidos para guiar de manera intuitiva al usuario hacia la decisión de compra.
            </p>
          </div>

          <div className="bg-[#14162d] p-8 rounded-2xl border border-white/10 hover:border-[#58b03b] transition-all group">
            <div className="w-14 h-14 bg-[#58b03b]/10 rounded-xl flex items-center justify-center text-[#58b03b] mb-6 group-hover:scale-110 transition-transform">
              <Layers size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white font-[Gill_Sans]">Integración Total</h3>
            <p className="text-gray-400 text-sm leading-relaxed font-[Arial]">
              Conectamos tu web con catálogos, sistemas de reserva y formularios automatizados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
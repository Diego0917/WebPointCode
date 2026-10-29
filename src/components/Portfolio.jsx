import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Tienda y Catálogo Digital",
      desc: "Rediseño visual enfocado en experiencia de usuario y optimización móvil.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      link: "https://ejemplo.com/proyecto-1",
      color: "text-[#24b3a9]"
    },
    {
      id: 2,
      title: "Landing Page Corporativa",
      desc: "Página de captura de clientes potenciales con alta velocidad de carga.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      link: "https://ejemplo.com/proyecto-2",
      color: "text-[#58b03b]"
    },
    {
      id: 3,
      title: "Sitio Web de Servicios",
      desc: "Estructura limpia y clara para presentación de servicios profesionales.",
      img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
      link: "https://ejemplo.com/proyecto-3",
      color: "text-[#24b3a9]"
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-white/5 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[Gill_Sans]">
            Nuestro Portafolio
          </h2>
          <p className="text-gray-300 text-lg font-[Arial]">
            Explora algunos de los sitios web y soluciones digitales que hemos desarrollado.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div key={proj.id} className="bg-[#14162d] rounded-2xl overflow-hidden border border-white/10 group hover:border-[#24b3a9] transition-all">
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={proj.img} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white font-[Gill_Sans]">{proj.title}</h3>
                <p className="text-gray-400 text-sm mb-6 font-[Arial]">{proj.desc}</p>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`inline-flex items-center ${proj.color} hover:underline font-semibold text-sm font-[Gill_Sans]`}
                >
                  Ver sitio web en vivo <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
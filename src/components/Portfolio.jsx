import React from 'react';
import { ExternalLink } from 'lucide-react';
import PapaSanLuis from "../assets/PapaSanLuis.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Papas San Luis",
      desc: "Plataforma comercial y catálogo digital optimizado para distribución de alimentos, enfocado en captación de clientes y diseño adaptable.",
      img: PapaSanLuis,
      link: "https://www.papasanluis.com/",
      color: "text-[#24b3a9]"
    }
  ];

  return (
    <section id="portafolio" className="py-20 w-full px-6 sm:px-12 lg:px-20 border-t border-white/5">
      <div className="w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-[Gill_Sans]">
            Nuestro Portafolio
          </h2>
          <p className="text-gray-300 text-lg font-[Arial]">
            Explora algunos de los sitios web y soluciones digitales que hemos desarrollado.
          </p>
        </div>

        {/* Contenedor flexible con centrado y diseño de tarjetas */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {projects.map((proj) => (
            <div 
              key={proj.id} 
              className="backdrop-blur-md bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-[#24b3a9] transition-all w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)] max-w-md shadow-2xl"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={proj.img} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-left">
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
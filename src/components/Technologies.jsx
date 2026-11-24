import React from 'react';
import {
  Code,
  FileCode,
  Palette,
  Zap,
  Globe,
  Layers,
  Terminal,
  GitBranch,
} from 'lucide-react';

const technologies = [
  {
    name: 'React',
    category: 'Frontend',
    description: 'Interfaces interactivas, rápidas y basadas en componentes reutilizables.',
    icon: Layers,
    accent: 'teal',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Lenguaje',
    description: 'Lógica moderna para experiencias web dinámicas y fluidas.',
    icon: FileCode,
    accent: 'green',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Base Web',
    description: 'Estructura semántica, accesibilidad y estilos precisos en cada pantalla.',
    icon: Code,
    accent: 'teal',
  },
  {
    name: 'Tailwind CSS',
    category: 'Estilos UI',
    description: 'Diseño visual moderno, consistente y 100% responsive.',
    icon: Palette,
    accent: 'green',
  },
  {
    name: 'Vite',
    category: 'Build Tool',
    description: 'Entorno de desarrollo y compilación optimizado para máxima velocidad.',
    icon: Zap,
    accent: 'teal',
  },
  {
    name: 'React Router',
    category: 'Navegación',
    description: 'Rutas rápidas y fluidas sin recargas para aplicaciones web modernas.',
    icon: Globe,
    accent: 'green',
  },
  {
    name: 'Node.js & npm',
    category: 'Entorno',
    description: 'Gestión profesional de dependencias, automatización y herramientas web.',
    icon: Terminal,
    accent: 'teal',
  },
  {
    name: 'Git & GitHub',
    category: 'Flujo de Trabajo',
    description: 'Control de versiones seguro y despliegue continuo para cada proyecto.',
    icon: GitBranch,
    accent: 'green',
  },
];

export default function Technologies() {
  return (
    <section id="tecnologias" className="py-20 bg-white/5 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Tecnologías que Manejamos
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Construimos cada proyecto con un stack moderno enfocado en velocidad, diseño atractivo y escalabilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            const isTeal = tech.accent === 'teal';

            return (
              <div
                key={tech.name}
                className={`bg-[#14162d] p-6 rounded-2xl border border-white/10 transition-all group flex flex-col items-center text-center ${
                  isTeal ? 'hover:border-[#24b3a9]' : 'hover:border-[#58b03b]'
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${
                    isTeal
                      ? 'bg-[#24b3a9]/10 text-[#24b3a9]'
                      : 'bg-[#58b03b]/10 text-[#58b03b]'
                  }`}
                >
                  <Icon size={28} />
                </div>
                <span
                  className={`text-xs uppercase tracking-widest font-semibold mb-1 ${
                    isTeal ? 'text-[#24b3a9]' : 'text-[#58b03b]'
                  }`}
                >
                  {tech.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

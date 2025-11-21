import React from 'react';
import { ExternalLinkIcon, GithubIcon } from './Icons';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Dashboard administrativo completo con análisis de ventas en tiempo real, gestión de inventario y usuarios. Construido con Next.js App Router.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Neon DB"],
    image: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "AI Chat Application",
    description: "Plataforma de chat en tiempo real potenciada por Gemini AI, con historial persistente y diseño responsivo tipo mobile-first.",
    tech: ["React", "Gemini API", "Vercel SDK", "Zustand"],
    image: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "SaaS Landing Page",
    description: "Landing page de alta conversión para producto SaaS, optimizada para SEO y velocidad, con animaciones fluidas.",
    tech: ["Astro", "React", "Tailwind", "Framer Motion"],
    image: "https://picsum.photos/800/600?random=3",
    link: "#"
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
            </div>
            <a href="#" className="text-cyan-400 font-medium hover:text-cyan-300 flex items-center gap-1">
                Ver todos en GitHub <ExternalLinkIcon className="w-4 h-4" />
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
                <div 
                    key={project.id} 
                    className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
                >
                    {/* Image Container */}
                    <div className="aspect-video overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                             <button className="p-3 bg-white rounded-full text-slate-900 hover:bg-cyan-400 transition-colors">
                                <ExternalLinkIcon className="w-5 h-5" />
                             </button>
                             <button className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors">
                                <GithubIcon className="w-5 h-5" />
                             </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
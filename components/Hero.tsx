import React from 'react';
import { GithubIcon, LinkedinIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-sm">
          <span className="text-indigo-300 font-medium text-sm">🚀 Disponible para nuevos proyectos</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="block text-white mb-2">Hola, soy Tomas</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Full Stack Developer
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed">
          Creo experiencias digitales excepcionales utilizando tecnologías modernas como 
          <span className="text-cyan-400 font-semibold"> React</span>, 
          <span className="text-white font-semibold"> Next.js</span>, y
          <span className="text-purple-400 font-semibold"> Neon DB</span>. 
          Transformo ideas complejas en código elegante.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-105"
          >
            Ver Proyectos
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 rounded-full bg-slate-800 text-white font-bold border border-slate-700 hover:bg-slate-700 transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            Contáctame
          </a>
        </div>

        <div className="mt-12 flex justify-center gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                <GithubIcon className="w-8 h-8" />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors transform hover:scale-110">
                <LinkedinIcon className="w-8 h-8" />
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
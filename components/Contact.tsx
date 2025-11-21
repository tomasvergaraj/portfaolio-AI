import React from 'react';
import { SendIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">¿Tienes un proyecto en mente?</h2>
            <p className="text-slate-400 mb-8 text-lg">
                Estoy disponible para trabajar en nuevos desafíos. Si buscas un desarrollador que se preocupe por el código y el diseño, hablemos.
            </p>

            <form className="space-y-4 text-left max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Tu Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                        placeholder="hola@ejemplo.com"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Mensaje</label>
                    <textarea 
                        id="message" 
                        rows={4}
                        className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Cuéntame sobre tu proyecto..."
                    ></textarea>
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                    Enviar Mensaje <SendIcon className="w-4 h-4" />
                </button>
            </form>

            <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                <p>© 2024 Tomas Vergara. Todos los derechos reservados.</p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
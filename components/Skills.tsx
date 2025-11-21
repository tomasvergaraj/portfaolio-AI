import React from 'react';
import { CodeIcon, DatabaseIcon, LayoutIcon, ServerIcon } from './Icons';

const skills = [
  {
    category: 'Frontend',
    icon: <LayoutIcon className="w-6 h-6 text-cyan-400" />,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    category: 'Backend',
    icon: <ServerIcon className="w-6 h-6 text-purple-400" />,
    items: ['Node.js', 'Express', 'Server Actions', 'API Design', 'Auth.js']
  },
  {
    category: 'Database & Cloud',
    icon: <DatabaseIcon className="w-6 h-6 text-pink-400" />,
    items: ['Neon DB', 'PostgreSQL', 'Vercel', 'Prisma ORM', 'Supabase']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Mi Stack Tecnológico</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
                <p className="mt-4 text-slate-400 max-w-xl mx-auto">
                    Herramientas modernas que utilizo para construir aplicaciones escalables, rápidas y visualmente impactantes.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skills.map((skill, index) => (
                    <div 
                        key={index} 
                        className="glass-panel p-8 rounded-2xl hover:bg-slate-800/50 transition-colors duration-300 group"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-slate-800 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white">{skill.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {skill.items.map((item) => (
                                <span 
                                    key={item} 
                                    className="px-3 py-1 bg-slate-800/60 border border-slate-700/60 rounded-full text-sm text-slate-300 font-medium"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;
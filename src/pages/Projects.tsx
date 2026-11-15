import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { ElegantArrowRight } from '../components/icons';
import { projects } from '../data/projects';

export function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Networking', 'CCTV', 'Security', 'IT Infrastructure'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.services.includes(filter));

  return (
    <PageTransition>
      <div className="pt-28 sm:pt-36 pb-32 min-h-screen bg-slate-50 dark:bg-[#01010D] text-slate-900 dark:text-white selection:bg-[#6331FB] selection:text-white dark:selection:bg-[#88F9C0] dark:selection:text-[#01010D] relative overflow-hidden transition-colors duration-300">
        
        {/* Ambient Electric Indigo Core */}
        <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[520px] rounded-full opacity-20 dark:opacity-60 blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.45) 45%, rgba(1, 1, 13, 0) 75%)'
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          {/* Editorial Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            <h1 className="flex flex-col items-center select-none mb-6">
              <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[105px] tracking-tight uppercase leading-[0.88] drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                PROVEN
              </span>
              <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] -mt-2 sm:-mt-4">
                deployments
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Explore documented engineering missions across financial institutions, educational campuses, and corporate facilities built for zero downtime.
            </p>
          </div>

          {/* Interactive Monospace Filters */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-16">
            {filters.map(f => {
              const isSelected = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#6331FB] text-white dark:bg-[#88F9C0] dark:text-[#01010D] font-bold shadow-md dark:shadow-[0_0_20px_rgba(136,249,192,0.45)] scale-105 border border-[#6331FB] dark:border-[#88F9C0]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-[#6331FB] hover:text-[#6331FB] dark:bg-[#090918]/80 dark:text-slate-300 dark:border-slate-800 dark:hover:border-[#6331FB] dark:hover:text-white shadow-sm'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white dark:bg-[#01010D]' : 'bg-[#6331FB]'}`} />
                  <span>{f}</span>
                </button>
              );
            })}
          </div>

          {/* Projects Dossier Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div 
                key={project.slug}
                className="group relative rounded-3xl bg-white dark:bg-[#090918]/90 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(99,49,251,0.22)] flex flex-col justify-between backdrop-blur-md"
              >
                {/* Visual Imagery */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#01010D]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#090918] via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/90 dark:bg-[#01010D]/85 border border-slate-200 dark:border-slate-700 text-[#6331FB] dark:text-[#88F9C0] backdrop-blur-md shadow-sm">
                      {project.industry}
                    </span>
                  </div>

                  {/* Ref Tag */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 dark:text-slate-400 bg-white/80 dark:bg-[#01010D]/80 px-2.5 py-0.5 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm">
                    REF-0{idx + 1}
                  </div>
                </div>

                {/* Content Dossier */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                      {project.location} • {project.client}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Mission Result Callout */}
                    <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 mb-6 shadow-sm">
                      <span className="text-[10px] font-mono text-[#6331FB] dark:text-[#88F9C0] tracking-wider uppercase block mb-1 font-bold">
                        FIELD RESULT:
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-200 font-mono leading-relaxed">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Tech Bar */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology.slice(0, 2).map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-[#01010D] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6331FB] hover:text-[#4f1fdc] dark:text-[#88F9C0] dark:hover:text-white transition-colors"
                    >
                      <span>INSPECT</span>
                      <ElegantArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-24 text-slate-500 dark:text-slate-400 font-mono text-sm border border-slate-200 dark:border-slate-800 rounded-2xl bg-white/60 dark:bg-[#090918]/60 p-8 max-w-md mx-auto shadow-sm">
              <span className="text-[#6331FB] dark:text-[#88F9C0] block mb-2 font-bold">[ TELEMETRY NULL ]</span>
              No field dossiers matching this filter. Select another domain.
            </div>
          )}

        </div>
      </div>
    </PageTransition>
  );
}

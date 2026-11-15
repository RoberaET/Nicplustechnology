import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { ElegantArrowRight, ElegantCheckIcon } from '../components/icons';
import { solutions } from '../data/solutions';

export function Solutions() {
  return (
    <PageTransition>
      <div className="pt-28 sm:pt-36 pb-32 min-h-screen bg-slate-50 dark:bg-[#01010D] text-slate-900 dark:text-white selection:bg-[#6331FB] selection:text-white dark:selection:bg-[#88F9C0] dark:selection:text-[#01010D] relative overflow-hidden transition-colors duration-300">
        
        {/* Ambient Electric Indigo Spotlights */}
        <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full opacity-20 dark:opacity-60 blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.4) 45%, rgba(1, 1, 13, 0) 75%)'
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          {/* Editorial Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20 sm:mb-28">
            <h1 className="flex flex-col items-center select-none mb-6">
              <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[105px] tracking-tight uppercase leading-[0.88] drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                TAILORED
              </span>
              <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] -mt-2 sm:-mt-4">
                solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Purpose-engineered network fabrics, biometric security perimeters, and optical trunking designed specifically for distinct operational scales and industry compliance.
            </p>
          </div>

          {/* Solutions Blueprints List */}
          <div className="flex flex-col gap-12 sm:gap-16">
            {solutions.map((solution, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={solution.slug}
                  className={`group relative rounded-3xl bg-white dark:bg-[#090918]/90 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] p-6 sm:p-10 lg:p-12 transition-all duration-500 shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(99,49,251,0.2)] backdrop-blur-md flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-8 lg:gap-14 items-center overflow-hidden`}
                >
                  {/* Subtle hover gradient backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6331FB]/5 dark:from-[#6331FB]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  {/* Visual Dossier Image */}
                  <div className="w-full lg:w-1/2 aspect-video lg:aspect-[16/11] relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800/80 bg-slate-100 dark:bg-[#01010D] shrink-0">
                    <img 
                      src={solution.image} 
                      alt={solution.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 dark:opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-[#090918] via-transparent to-transparent opacity-75" />
                    
                    {/* Module Code Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-white/90 dark:bg-[#01010D]/85 border border-[#6331FB]/40 dark:border-[#6331FB]/60 text-[#6331FB] dark:text-[#88F9C0] backdrop-blur-md shadow-sm">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-white/90 dark:bg-[#01010D]/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 shadow-sm">
                      <span>STATUS: SPEC READY</span>
                      <span className="text-[#6331FB] dark:text-[#88F9C0] font-bold">24/7 SUPPORT</span>
                    </div>
                  </div>

                  {/* Blueprint Content */}
                  <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono text-[#6331FB] uppercase tracking-widest mb-2 font-bold">
                        <span>ARCHITECTURE DOMAIN</span>
                        <span>•</span>
                        <span className="text-[#6331FB] dark:text-[#88F9C0]">PRODUCTION DEPLOYMENT</span>
                      </div>

                      <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display uppercase tracking-tight text-slate-900 dark:text-white mb-4 group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors">
                        {solution.title}
                      </h3>

                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                        {solution.description}
                      </p>

                      {/* Technical Feature Matrix */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {solution.features.map((feature, fIdx) => (
                          <div 
                            key={fIdx} 
                            className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 text-xs font-mono text-slate-700 dark:text-slate-300 shadow-sm"
                          >
                            <span className="w-4 h-4 rounded-full bg-[#6331FB]/10 dark:bg-[#88F9C0]/20 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0">
                              <ElegantCheckIcon size={10} />
                            </span>
                            <span className="truncate">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Bar */}
                    <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
                      <Link to={`/solutions/${solution.slug}`}>
                        <button className="inline-flex items-center gap-3 px-7 py-3 rounded-full font-bold text-xs font-mono uppercase tracking-wider bg-[#6331FB] text-white hover:bg-[#4f1fdc] shadow-md hover:shadow-[0_0_25px_rgba(99,49,251,0.4)] dark:bg-[#88F9C0] dark:text-[#01010D] dark:hover:bg-[#a5ffd1] dark:hover:shadow-[0_0_25px_rgba(136,249,192,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 group/btn cursor-pointer">
                          <span>EXPLORE ARCHITECTURE</span>
                          <ElegantArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                        </button>
                      </Link>

                      <span className="hidden sm:inline text-xs font-mono text-slate-400 dark:text-slate-500">
                        VERIFIED BLUEPRINT
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { services } from '../data/services';
import { ElegantArrowRight, EnterpriseServerIcon, ElegantCheckIcon } from '../components/icons';

const categories = ['All', 'Infrastructure', 'Security', 'IT & Digital'];

const categoryDescriptions: Record<string, string> = {
  All: 'Full-spectrum technology infrastructure, security and digital architectures engineered for zero downtime.',
  Infrastructure: 'Physical fiber trunking, structured cabling, multi-gigabit core routing, and high-density wireless.',
  Security: '4K AI IP video surveillance, biometric zero-trust access control, and active network defense.',
  'IT & Digital': 'Continuous NOC telemetry escort, SLA dispatch, and mission-critical digital systems.',
};

export function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <PageTransition>
      <div className="pt-28 sm:pt-36 pb-32 min-h-screen bg-slate-50 dark:bg-[#01010D] text-slate-900 dark:text-white selection:bg-[#6331FB] selection:text-white dark:selection:bg-[#88F9C0] dark:selection:text-[#01010D] relative overflow-hidden transition-colors duration-300">
        
        {/* Ambient Electric Indigo Spotlight */}
        <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-20 dark:opacity-60 blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.45) 45%, rgba(1, 1, 13, 0) 75%)'
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          {/* Editorial Header */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16 sm:mb-20">
            <h1 className="flex flex-col items-center select-none mb-6">
              <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[105px] tracking-tight uppercase leading-[0.88] drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                CARRIER-GRADE
              </span>
              <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] -mt-2 sm:-mt-4">
                services
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              From structured multi-gigabit backbones and zero-trust perimeter defense to intelligent 4K AI surveillance — engineered for organizations that cannot afford a second of downtime.
            </p>
          </div>

          {/* Interactive Monospace Category Filter */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-6">
            {categories.map(cat => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-[#6331FB] text-white dark:bg-[#88F9C0] dark:text-[#01010D] font-bold shadow-md dark:shadow-[0_0_20px_rgba(136,249,192,0.45)] scale-105 border border-[#6331FB] dark:border-[#88F9C0]'
                      : 'bg-white text-slate-700 border border-slate-200 hover:border-[#6331FB] hover:text-[#6331FB] dark:bg-[#090918]/80 dark:text-slate-300 dark:border-slate-800 dark:hover:border-[#6331FB] dark:hover:text-white shadow-sm'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white dark:bg-[#01010D]' : 'bg-[#6331FB]'}`} />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          <p className="text-center text-xs font-mono text-slate-500 dark:text-slate-400 mb-16 max-w-xl mx-auto">
            [ {categoryDescriptions[activeCategory]} ]
          </p>

          {/* Services Dossier Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            {filtered.map((service, index) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.slug}
                  className="group relative rounded-3xl bg-white dark:bg-[#090918]/90 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all duration-500 p-7 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl dark:hover:shadow-[0_20px_50px_rgba(99,49,251,0.22)] backdrop-blur-md overflow-hidden"
                >
                  {/* Hover ambient highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6331FB]/5 dark:from-[#6331FB]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Status Header */}
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-400 dark:text-slate-500 mb-6 border-b border-slate-100 dark:border-slate-800/60 pb-3">
                      <span className="text-[#6331FB] dark:text-[#88F9C0] group-hover:text-slate-900 dark:group-hover:text-white transition-colors">0{index + 1}</span>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] shadow-[0_0_6px_#6331FB] dark:shadow-[0_0_6px_#88F9C0]" />
                        <span className="uppercase text-slate-500 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">OPERATIONAL</span>
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 group-hover:border-[#6331FB] group-hover:shadow-[0_0_20px_rgba(99,49,251,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(99,49,251,0.4)] flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 transition-all duration-300">
                        {IconComp ? <IconComp size={24} /> : <EnterpriseServerIcon size={24} />}
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">
                          {service.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs font-mono text-[#6331FB] dark:text-[#88F9C0]/90 italic mb-3 font-medium">
                      "{service.tagline}"
                    </p>

                    <p className="text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Chips */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300 font-mono">
                          <span className="text-[#6331FB] font-bold">›</span>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-5 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400 dark:text-slate-500">24/7 SUPPORT</span>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-1.5 font-bold text-[#6331FB] dark:text-[#88F9C0] hover:text-[#4f1fdc] dark:hover:text-white transition-colors group/link"
                    >
                      <span>LEARN MORE</span>
                      <ElegantArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* =========================================================================
              WHY NIC+ ASSURANCE SECTION
              ========================================================================= */}
          <div className="p-8 sm:p-14 rounded-3xl bg-white dark:bg-[#090918]/80 border border-slate-200 dark:border-slate-800 relative overflow-hidden backdrop-blur-md shadow-sm">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-mono tracking-widest uppercase text-[#6331FB] dark:text-[#88F9C0] block mb-2 font-bold">
                ENGINEERING ASSURANCE
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-slate-900 dark:text-white">
                WHY ENTERPRISES TRUST NIC+
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Tailored Topology', desc: 'Hardware BOM and routing matrices customized to physical conduit tolerances.' },
                { title: 'End-to-End Delivery', desc: 'Turnkey site survey, optical fusion splicing, hardening, and NOC lifecycle.' },
                { title: 'Security by Design', desc: '802.1X segmentation, camera VLAN isolation, and zero-trust ACLs standard.' },
                { title: 'Active SLA Escort', desc: 'Rapid 15-minute engineering dispatch and 24/7/365 hardware replacement.' },
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-xs font-mono text-[#6331FB] block mb-2 font-bold">0{i + 1}</span>
                    <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2 font-mono uppercase">{item.title}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-900 flex items-center gap-1.5 text-[10px] font-mono text-[#6331FB] dark:text-[#88F9C0] font-bold">
                    <ElegantCheckIcon size={12} />
                    <span>CERTIFIED PROTOCOL</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Dispatch CTA */}
          <div className="mt-20 text-center">
            <p className="text-slate-500 dark:text-slate-400 font-mono text-xs uppercase tracking-wider mb-6">
              REQUIRE A CUSTOM SPECIFICATION AUDIT?
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-sm bg-[#6331FB] text-white hover:bg-[#4f1fdc] shadow-lg hover:shadow-[0_0_35px_rgba(99,49,251,0.5)] dark:bg-[#88F9C0] dark:text-[#01010D] dark:hover:bg-[#a5ffd1] dark:hover:shadow-[0_0_35px_rgba(136,249,192,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                <span>REQUEST A FREE QUOTE</span>
                <ElegantArrowRight size={18} />
              </button>
            </Link>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}

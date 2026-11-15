import { PageTransition } from '../components/layout/PageTransition';
import { Link } from 'react-router-dom';
import { 
  NetworkInfrastructureIcon, 
  SecurityShieldIcon, 
  EnterpriseServerIcon, 
  ElegantCheckIcon, 
  ElegantArrowRight, 
  ElegantRadioIcon, 
  AccessControlIcon 
} from '../components/icons';
import { services } from '../data/services';

export function About() {
  return (
    <PageTransition>
      <div className="pt-28 sm:pt-36 pb-32 min-h-screen bg-slate-50 dark:bg-[#01010D] text-slate-900 dark:text-white selection:bg-[#6331FB] selection:text-white dark:selection:bg-[#88F9C0] dark:selection:text-[#01010D] relative overflow-hidden flex flex-col gap-24 sm:gap-32 transition-colors duration-300">
        
        {/* Ambient Top Glow */}
        <div 
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full opacity-20 dark:opacity-60 blur-[150px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.45) 45%, rgba(1, 1, 13, 0) 75%)'
          }}
        />

        {/* =========================================================================
            SECTION 1: HERO / WHO WE ARE
            ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="flex flex-col items-center select-none mb-8">
              <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[105px] tracking-tight uppercase leading-[0.88] drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                ENGINEERING
              </span>
              <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] -mt-2 sm:-mt-4">
                first principles
              </span>
            </h1>

            <div className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed space-y-6">
              <p>
                NIC+ Technologies is a premier enterprise IT infrastructure and cybersecurity engineering firm based in Addis Ababa, Ethiopia. We architect, deploy, secure, and support modern networks for organizations that cannot afford a second of downtime.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                From high-density structured fiber backbones and multi-gigabit core routing to zero-trust perimeters and AI-driven IP surveillance, we provide end-to-end technical execution built to survive hardware failures, traffic surges, and evolving cyber threats.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: METHODOLOGY & PHILOSOPHY
            ========================================================================= */}
        <section className="py-20 relative bg-white dark:bg-[#090918]/80 border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
            
            <div className="mb-14 text-center max-w-2xl mx-auto">
              <span className="text-xs font-mono tracking-widest uppercase text-[#6331FB] dark:text-[#88F9C0] block mb-2 font-bold">
                CORE PHILOSOPHY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-slate-900 dark:text-white">
                HOW WE ARCHITECT DIFFERENTLY
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(99,49,251,0.2)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] mb-6 shadow-sm">
                    <NetworkInfrastructureIcon size={24} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#6331FB] uppercase block mb-1 font-bold">
                    PRINCIPLE 01
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display uppercase tracking-tight">
                    PHYSICAL PRECISION
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    No generic bundles. Every physical cable run, optical splice, and rack elevation is mapped to real environmental dynamics, heat dissipation, and electromagnetic tolerances.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-900 text-xs font-mono text-[#6331FB] dark:text-[#88F9C0] font-bold">
                  ZERO CONSUMER SHORTCUTS
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(99,49,251,0.2)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] mb-6 shadow-sm">
                    <SecurityShieldIcon size={24} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#6331FB] uppercase block mb-1 font-bold">
                    PRINCIPLE 02
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display uppercase tracking-tight">
                    SECURITY BY DESIGN
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    Security is not an afterthought bolt-on. It is baked directly into L2/L3 segmentation, camera VLAN isolation, air-gapped backups, and strict 802.1X perimeter access controls.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-900 text-xs font-mono text-[#6331FB] dark:text-[#88F9C0] font-bold">
                  ZERO-TRUST ENFORCED
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all duration-300 shadow-sm hover:shadow-xl dark:hover:shadow-[0_15px_40px_rgba(99,49,251,0.2)] flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] mb-6 shadow-sm">
                    <EnterpriseServerIcon size={24} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-[#6331FB] uppercase block mb-1 font-bold">
                    PRINCIPLE 03
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display uppercase tracking-tight">
                    OPERATIONAL CONTINUITY
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    We engineer for graceful degradation and automatic failover. Redundant power supplies, VRRP/HSRP router redundancy, and dual-homed optical trunks prevent single points of failure.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-900 text-xs font-mono text-[#6331FB] dark:text-[#88F9C0] font-bold">
                  99.99% UPTIME MANDATE
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 3: CERTIFIED CAPABILITIES MATRIX
            ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#6331FB]/10 dark:bg-[#6331FB]/20 border border-[#6331FB]/30 dark:border-[#6331FB]/40 text-[#6331FB] dark:text-[#88F9C0] mb-4">
                <span>CERTIFIED CAPABILITIES</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-display uppercase tracking-tight text-slate-900 dark:text-white mb-6">
                END-TO-END TECHNICAL EXECUTION
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                Our in-house engineering team holds deep cross-disciplinary certifications in enterprise networking, optical splicing, cybersecurity audits, and physical surveillance staging.
              </p>

              <div className="p-5 rounded-2xl bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-3 shadow-sm">
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>HEADQUARTERS:</span>
                  <span className="text-slate-900 dark:text-white font-bold">ADDIS ABABA, ETHIOPIA</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>OPERATING DISPATCH:</span>
                  <span className="text-[#6331FB] dark:text-[#88F9C0] font-bold">24/7/365 RAPID SLA</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <span>DEPLOYMENT SCOPE:</span>
                  <span className="text-slate-900 dark:text-white font-bold">MULTI-SITE & CAMPUS</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div 
                    key={i} 
                    className="p-4 rounded-xl bg-white dark:bg-[#090918]/80 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all flex items-center justify-between group shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0]">
                        <ElegantCheckIcon size={14} />
                      </div>
                      <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors">
                        {service.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500">
                      0{i + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* =========================================================================
            SECTION 4: HARDWARE ECOSYSTEM
            ========================================================================= */}
        <section className="py-20 relative bg-white dark:bg-[#090918]/60 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center relative z-10">
            <span className="text-xs font-mono tracking-widest uppercase text-[#6331FB] dark:text-[#88F9C0] block mb-3 font-bold">
              VENDOR & PLATFORM STANDARDS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-tight text-slate-900 dark:text-white mb-6">
              CARRIER-GRADE ALLIANCES
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-14 leading-relaxed">
              We partner with and deploy hardware from the world's most trusted networking and security vendors to ensure rock-solid enterprise performance.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-16 text-base sm:text-lg font-semibold tracking-widest text-slate-600 dark:text-slate-400 font-mono">
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-2"><EnterpriseServerIcon size={16} className="text-[#6331FB]" /> CISCO</span>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-2"><SecurityShieldIcon size={16} className="text-[#6331FB]" /> FORTINET</span>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-2"><ElegantRadioIcon size={16} className="text-[#6331FB]" /> HUAWEI</span>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-2"><AccessControlIcon size={16} className="text-[#6331FB]" /> HIKVISION</span>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">DAHUA</span>
              <span className="text-slate-300 dark:text-slate-800">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">MIKROTIK</span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 5: DISPATCH CTA
            ========================================================================= */}
        <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center">
          <div className="p-10 sm:p-16 rounded-3xl bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800/90 relative overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full opacity-30 dark:opacity-50 blur-[130px] pointer-events-none"
              style={{
                background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.4) 45%, rgba(1, 1, 13, 0) 75%)'
              }}
            />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display uppercase tracking-tight text-slate-900 dark:text-white mb-6">
                WORK WITH A TEAM YOU CAN TRUST
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-10">
                Contact our friendly team today for an on-site survey or a free, honest recommendation for your business.
              </p>
              <Link to="/contact">
                <button className="inline-flex items-center gap-3 px-9 py-4 rounded-full font-bold text-sm bg-[#6331FB] text-white hover:bg-[#4f1fdc] shadow-lg hover:shadow-[0_0_35px_rgba(99,49,251,0.5)] dark:bg-[#88F9C0] dark:text-[#01010D] dark:hover:bg-[#a5ffd1] dark:hover:shadow-[0_0_35px_rgba(136,249,192,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                  <span>REQUEST A FREE QUOTE</span>
                  <ElegantArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}

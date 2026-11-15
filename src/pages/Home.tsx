import { Link } from 'react-router-dom';
import { 
  ElegantArrowRight, 
  ElegantChevronRight,
  SecurityShieldIcon, 
  ElegantRadioIcon, 
  EnterpriseServerIcon, 
  AccessControlIcon, 
  TelemetryTerminalIcon,
  EyeSensorIcon,
  LockCryptoIcon,
  CpuProcessorIcon,
  NetworkInfrastructureIcon
} from '../components/icons';
import { services } from '../data/services';
import { projects } from '../data/projects';

export function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-[#01010D] text-slate-900 dark:text-white selection:bg-[#6331FB] selection:text-white dark:selection:bg-[#88F9C0] dark:selection:text-[#01010D] transition-colors duration-300">
      
      {/* =========================================================================
          HERO SECTION (Editorial High-Fashion Poster Aesthetic)
          ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-white dark:bg-[#01010D] text-slate-900 dark:text-white overflow-hidden pt-28 pb-16 lg:py-24 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        {/* Ambient Device Background & Electric Indigo Glow */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Radial Spotlight Glow */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] lg:w-[1300px] h-[550px] sm:h-[700px] lg:h-[850px] rounded-full opacity-35 dark:opacity-60 blur-[120px]"
            style={{
              background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.45) 45%, rgba(1, 1, 13, 0) 75%)'
            }}
          />

          {/* Central Enterprise Hardware Image (Networking Switches, Security Camera, Access Control & Fiber) */}
          <img
            src="/hero-devices.jpg"
            alt="Enterprise Networking Switches, Security Cameras and Solar Access Control Hardware"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-30 dark:opacity-48 mix-blend-multiply dark:mix-blend-screen brightness-100 contrast-105 dark:brightness-95 dark:contrast-115 scale-100"
          />

          {/* Balanced Soft Overlay for Smooth Readability */}
          <div className="absolute inset-0 bg-slate-900/5 dark:bg-[#01010D]/35" />

          {/* Edge Blends */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-[#01010D] via-white/80 dark:via-[#01010D]/80 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-white dark:from-[#01010D] via-white/90 dark:via-[#01010D]/90 to-transparent" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 w-full">
          {/* Main Hero Split Editorial Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: CREATE without */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[128px] leading-[0.85] tracking-tight uppercase select-none drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                  CREATE
                </span>
                <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0]/90 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] leading-[0.92] -mt-2 sm:-mt-4 lg:-mt-5 ml-1.5 select-none">
                  without
                </span>
              </div>

              <div className="mt-7 sm:mt-9 max-w-lg">
                <p className="text-xs sm:text-sm font-bold tracking-widest text-[#6331FB] dark:text-[#88F9C0] uppercase mb-2.5 font-mono">
                  BUSINESS NETWORKING & SECURITY SYSTEMS
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                  Fast office Wi-Fi, reliable network cabling, and clear security cameras designed to keep your business connected, protected, and running without interruption.
                </p>
                
                <div>
                  <Link to="/services">
                    <button className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full font-bold text-sm bg-[#6331FB] text-white hover:bg-[#5225d9] shadow-lg shadow-[#6331FB]/25 hover:shadow-xl dark:bg-[#88F9C0] dark:text-[#01010D] dark:hover:bg-[#a5ffd1] dark:shadow-[0_0_30px_rgba(136,249,192,0.55)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer">
                      <span>EXPLORE SERVICES</span>
                      <ElegantArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: LIMITS boundaries */}
            <div className="lg:col-span-6 flex flex-col lg:items-end justify-center text-left lg:text-right mt-6 lg:mt-0">
              <div className="flex flex-col lg:items-end">
                <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[110px] xl:text-[128px] leading-[0.85] tracking-tight uppercase select-none drop-shadow-sm dark:drop-shadow-[0_10px_35px_rgba(0,0,0,0.8)]">
                  LIMITS
                </span>
                <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0]/90 text-5xl sm:text-6xl md:text-7xl lg:text-[88px] xl:text-[104px] leading-[0.92] -mt-2 sm:-mt-4 lg:-mt-5 select-none">
                  boundaries
                </span>
              </div>

              {/* Value Proposition List */}
              <div className="mt-7 sm:mt-9 space-y-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase text-slate-700 dark:text-slate-200">
                <div className="flex items-center lg:justify-end gap-3 group">
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#6331FB] dark:group-hover:text-white transition-colors">99.9% Reliable Network Uptime</span>
                  <span className="w-2 h-2 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] shadow-[0_0_8px_#6331FB] dark:shadow-[0_0_8px_#88F9C0] shrink-0" />
                </div>
                <div className="flex items-center lg:justify-end gap-3 group">
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#6331FB] dark:group-hover:text-white transition-colors">High-Definition Security Cameras</span>
                  <span className="w-2 h-2 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] shadow-[0_0_8px_#6331FB] dark:shadow-[0_0_8px_#88F9C0] shrink-0" />
                </div>
                <div className="flex items-center lg:justify-end gap-3 group">
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#6331FB] dark:group-hover:text-white transition-colors">Full Cybersecurity Protection</span>
                  <span className="w-2 h-2 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] shadow-[0_0_8px_#6331FB] dark:shadow-[0_0_8px_#88F9C0] shrink-0" />
                </div>
                <div className="flex items-center lg:justify-end gap-3 group">
                  <span className="text-slate-600 dark:text-slate-300 group-hover:text-[#6331FB] dark:group-hover:text-white transition-colors">High-Speed Fiber & Wi-Fi Coverage</span>
                  <span className="w-2 h-2 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] shadow-[0_0_8px_#6331FB] dark:shadow-[0_0_8px_#88F9C0] shrink-0" />
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Industry Hardware & Partners */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-col items-center">
            <p className="text-[10px] sm:text-xs tracking-[0.25em] font-mono text-slate-500 dark:text-slate-400 uppercase mb-4 sm:mb-5">
              — ENTERPRISE HARDWARE & SECURITY ECOSYSTEM —
            </p>
            <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 md:gap-12 text-xs sm:text-sm font-semibold tracking-widest text-slate-600 dark:text-slate-400">
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-1.5"><EnterpriseServerIcon size={16} className="text-[#6331FB]" /> CISCO</span>
              <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-1.5"><SecurityShieldIcon size={16} className="text-[#6331FB]" /> FORTINET</span>
              <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-1.5"><ElegantRadioIcon size={16} className="text-[#6331FB]" /> HUAWEI</span>
              <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors flex items-center gap-1.5"><AccessControlIcon size={16} className="text-[#6331FB]" /> HIKVISION</span>
              <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">DAHUA</span>
              <span className="text-slate-300 dark:text-slate-800 hidden sm:inline">•</span>
              <span className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">MIKROTIK</span>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: ARCHITECTURAL CAPABILITIES (High-Tech Telemetry Matrix)
          ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-slate-50 dark:bg-[#01010D] border-t border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#6331FB]/10 dark:bg-[#6331FB]/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#6331FB]/10 border border-[#6331FB]/30 text-[#6331FB] dark:bg-[#6331FB]/20 dark:border-[#6331FB]/40 dark:text-[#88F9C0] mb-4">
                <span>OUR CORE SERVICES</span>
              </div>
              <h2 className="flex flex-wrap items-baseline gap-x-4">
                <span className="font-display text-slate-900 dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
                  WHAT WE
                </span>
                <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  deliver
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                Reliable office networks, smart security camera installations, and trusted IT infrastructure built to keep your business operating smoothly.
              </p>
            </div>

            <Link to="/services" className="shrink-0">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/80 hover:border-[#6331FB] hover:text-[#6331FB] dark:hover:text-[#88F9C0] hover:bg-[#6331FB]/10 transition-all duration-300 group cursor-pointer bg-white dark:bg-transparent shadow-sm">
                <span>VIEW ALL SERVICES</span>
                <ElegantArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Asymmetric Telemetry Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.slice(0, 6).map((service, index) => {
              const IconComp = service.icon;
              return (
                <div 
                  key={service.slug}
                  className="group relative rounded-2xl bg-white dark:bg-[#090918]/80 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all duration-500 p-7 flex flex-col justify-between shadow-sm hover:shadow-[0_15px_40px_rgba(99,49,251,0.12)] dark:hover:shadow-[0_15px_40px_rgba(99,49,251,0.22)] backdrop-blur-sm overflow-hidden"
                >
                  {/* Subtle hover gradient highlight */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#6331FB]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div>
                    {/* Top Status & Code Header */}
                    <div className="flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500 mb-6 border-b border-slate-100 dark:border-slate-800/60 pb-3">
                      <span className="text-[#6331FB] dark:text-[#88F9C0] group-hover:text-[#6331FB] dark:group-hover:text-white transition-colors font-bold">0{index + 1}</span>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] shadow-[0_0_6px_#6331FB] dark:shadow-[0_0_6px_#88F9C0]" />
                        <span className="uppercase text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">AVAILABLE</span>
                      </div>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-indigo-50/70 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 group-hover:border-[#6331FB] group-hover:shadow-[0_0_20px_rgba(99,49,251,0.4)] flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 transition-all duration-300">
                        {IconComp ? <IconComp size={24} /> : <EnterpriseServerIcon size={24} />}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-0.5">
                          {service.category}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 dark:text-slate-300/80 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Feature Highlights */}
                    <div className="space-y-2 mb-6">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 font-mono">
                          <span className="text-[#6331FB] font-bold">›</span>
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">24/7 SUPPORT</span>
                    <Link 
                      to={`/services/${service.slug}`} 
                      className="inline-flex items-center gap-1.5 font-bold text-[#6331FB] dark:text-[#88F9C0] hover:underline transition-colors group/link"
                    >
                      <span>LEARN MORE</span>
                      <ElegantArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 3: SYSTEM RELIABILITY & MONITORING
          ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-white dark:bg-[#01010D] border-t border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
        {/* Electric Indigo ambient core */}
        <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-[#6331FB]/8 dark:bg-[#6331FB]/12 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Why Businesses Choose NIC+ Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#090918]/90 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2.5">
                    <SecurityShieldIcon size={18} className="text-[#6331FB] dark:text-[#88F9C0]" />
                    <span className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase">
                      WHY CLIENTS CHOOSE NIC+
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono text-[#6331FB] bg-[#6331FB]/10 dark:text-[#88F9C0] dark:bg-[#88F9C0]/10 px-2.5 py-0.5 rounded-full border border-[#6331FB]/20 dark:border-[#88F9C0]/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0]" />
                    <span>OUR COMMITMENT</span>
                  </div>
                </div>

                {/* Client Benefits List */}
                <div className="space-y-4 mb-6">
                  
                  {/* Benefit 1: Fast Wi-Fi */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#01010D]/80 border border-slate-200 dark:border-slate-800/90 shadow-sm flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5">
                      <EnterpriseServerIcon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        Fast & Reliable Office Connection
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Say goodbye to slow loading and dropped video meetings. We make sure every desk and room has strong, consistent connection.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2: Security Cameras */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#01010D]/80 border border-slate-200 dark:border-slate-800/90 shadow-sm flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5">
                      <EyeSensorIcon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        Clear Security Cameras (CCTV)
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Crystal-clear day and night video recording with easy mobile phone access so you can check your property anytime, anywhere.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3: Clean Professional Setup */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#01010D]/80 border border-slate-200 dark:border-slate-800/90 shadow-sm flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5">
                      <NetworkInfrastructureIcon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        Neat & Professional Installation
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        No messy tangled wires. We organize and label all cables cleanly inside secure server cabinets for a tidy workspace.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4: Safe Data & Door Access */}
                  <div className="p-4 rounded-xl bg-white dark:bg-[#01010D]/80 border border-slate-200 dark:border-slate-800/90 shadow-sm flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-9 h-9 rounded-lg bg-indigo-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5">
                      <LockCryptoIcon size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                        Secure Data & Keycard Door Entry
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Keep unauthorized visitors out with smart keycards or fingerprint door locks, and protect sensitive files from digital threats.
                      </p>
                    </div>
                  </div>

                </div>

                {/* Footer */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                  <span>DEDICATED SUPPORT: ALWAYS READY</span>
                  <span className="text-[#6331FB] dark:text-[#88F9C0] font-bold">ADDIS ABABA • CALL ANYTIME</span>
                </div>
              </div>
            </div>

            {/* Right Column: Mission Assurance Statement & 4 Pillars */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#6331FB]/10 border border-[#6331FB]/30 text-[#6331FB] dark:bg-[#6331FB]/20 dark:border-[#6331FB]/40 dark:text-[#88F9C0] mb-4 w-fit">
                <span>OUR QUALITY GUARANTEE</span>
              </div>
              <h2 className="flex flex-wrap items-baseline gap-x-4 mb-6">
                <span className="font-display text-slate-900 dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
                  UNMATCHED
                </span>
                <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  reliability
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-10">
                While ordinary providers set up basic consumer devices that frequently disconnect, NIC+ installs enterprise-grade hardware designed for nonstop business operations and peace of mind.
              </p>

              {/* 4 Technical Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#090918]/60 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all shadow-sm">
                  <div className="font-display text-4xl sm:text-5xl text-slate-900 dark:text-white mb-1 flex items-baseline gap-1">
                    <span className="text-[#6331FB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-[#88F9C0]">99.9%</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-mono uppercase tracking-wider">MAXIMUM UPTIME</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Reliable systems built so your staff never experience disruptive network dropouts.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#090918]/60 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all shadow-sm">
                  <div className="font-display text-4xl sm:text-5xl text-slate-900 dark:text-white mb-1 flex items-baseline gap-1">
                    <span className="text-[#6331FB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-[#88F9C0]">&lt; 15m</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-mono uppercase tracking-wider">FAST RESPONSE</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Quick technician dispatch and immediate remote assistance whenever you need support.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#090918]/60 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all shadow-sm">
                  <div className="font-display text-4xl sm:text-5xl text-slate-900 dark:text-white mb-1 flex items-baseline gap-1">
                    <span className="text-[#6331FB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-[#88F9C0]">TOTAL</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-mono uppercase tracking-wider">DATA SECURITY</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Safe company data, protected Wi-Fi access, and secure keycard door entries.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-[#090918]/60 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] transition-all shadow-sm">
                  <div className="font-display text-4xl sm:text-5xl text-slate-900 dark:text-white mb-1 flex items-baseline gap-1">
                    <span className="text-[#6331FB] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-[#88F9C0]">24/7</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 font-mono uppercase tracking-wider">EXPERT SUPPORT</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Always-on monitoring and regular check-ups to keep all hardware running at peak condition.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 4: OUR WORK PROCESS
          ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-slate-50 dark:bg-[#01010D] border-t border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#6331FB]/10 border border-[#6331FB]/30 text-[#6331FB] dark:bg-[#6331FB]/20 dark:border-[#6331FB]/40 dark:text-[#88F9C0] mb-4">
              <span>HOW WE WORK</span>
            </div>
            <h2 className="flex flex-wrap items-baseline justify-center gap-x-4">
              <span className="font-display text-slate-900 dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
                SIMPLE
              </span>
              <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                process
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-xl mt-4 leading-relaxed">
              From our first site visit to final testing and continuous support, we make setting up your company IT smooth and hassle-free.
            </p>
          </div>

          {/* Connected Pipeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {[
              {
                num: '01',
                phase: 'ASSESSMENT',
                title: 'On-Site Survey',
                desc: 'We visit your office to inspect your layout, understand your needs, and measure requirements.',
                icon: CpuProcessorIcon
              },
              {
                num: '02',
                phase: 'PLANNING',
                title: 'Custom Plan',
                desc: 'We create a clear, tailored proposal and layout diagram with zero hidden costs.',
                icon: TelemetryTerminalIcon
              },
              {
                num: '03',
                phase: 'SETUP',
                title: 'Professional Install',
                desc: 'Clean cabling, neat rack mounting, and professional camera and equipment setup.',
                icon: EnterpriseServerIcon
              },
              {
                num: '04',
                phase: 'PROTECTION',
                title: 'Testing & Security',
                desc: 'Full testing of network speeds, camera views, and password and firewall protections.',
                icon: SecurityShieldIcon
              },
              {
                num: '05',
                phase: 'SUPPORT',
                title: 'Ongoing Care',
                desc: 'Friendly 24/7 technical support and rapid on-site assistance whenever you call.',
                icon: ElegantRadioIcon
              }
            ].map((step, idx) => {
              const SIcon = step.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative rounded-2xl bg-white dark:bg-[#090918]/80 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] p-6 transition-all duration-300 shadow-sm hover:shadow-[0_10px_30px_rgba(99,49,251,0.15)] dark:hover:shadow-[0_10px_30px_rgba(99,49,251,0.25)] flex flex-col justify-between"
                >
                  <div>
                    {/* Top Step Number & Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-display text-4xl text-slate-300 dark:text-slate-700 group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors">
                        {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-indigo-50/70 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 group-hover:border-[#6331FB] flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] transition-colors">
                        <SIcon size={18} />
                      </div>
                    </div>

                    <span className="text-[10px] font-mono tracking-widest text-[#6331FB] uppercase block mb-1 font-bold">
                      {step.phase}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  {/* Indicator bottom dot */}
                  <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0]" />
                    <span>STEP {step.num}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 5: FLAGSHIP DEPLOYMENTS (Editorial Dossier Showcase)
          ========================================================================= */}
      <section className="py-24 sm:py-32 relative bg-white dark:bg-[#01010D] border-t border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
        {/* Ambient glow */}
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#6331FB]/10 dark:bg-[#6331FB]/15 rounded-full blur-[150px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-[#6331FB]/10 border border-[#6331FB]/30 text-[#6331FB] dark:bg-[#6331FB]/20 dark:border-[#6331FB]/40 dark:text-[#88F9C0] mb-4">
                <span>FIELD CASE STUDIES</span>
              </div>
              <h2 className="flex flex-wrap items-baseline gap-x-4">
                <span className="font-display text-slate-900 dark:text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight uppercase">
                  FLAGSHIP
                </span>
                <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  deployments
                </span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mt-4 leading-relaxed">
                Real-world mission deployments engineered across banking headquarters, university campuses, and critical infrastructure facilities.
              </p>
            </div>

            <Link to="/projects" className="shrink-0">
              <button className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-700/80 hover:border-[#6331FB] hover:text-[#6331FB] dark:hover:text-[#88F9C0] hover:bg-[#6331FB]/10 transition-all duration-300 group cursor-pointer bg-white dark:bg-transparent shadow-sm">
                <span>ALL CASE STUDIES</span>
                <ElegantArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* 3 Editorial Project Dossiers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, pIdx) => (
              <div 
                key={project.slug}
                className="group relative rounded-2xl bg-slate-50 dark:bg-[#090918]/80 border border-slate-200 dark:border-slate-800/80 hover:border-[#6331FB] overflow-hidden transition-all duration-500 shadow-sm hover:shadow-[0_15px_40px_rgba(99,49,251,0.15)] dark:hover:shadow-[0_15px_40px_rgba(99,49,251,0.22)] flex flex-col justify-between"
              >
                {/* Image Banner */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85 group-hover:opacity-100" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-80" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono tracking-wider uppercase bg-white/90 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700 text-[#6331FB] dark:text-[#88F9C0] backdrop-blur-md shadow-sm">
                      {project.industry}
                    </span>
                  </div>

                  {/* Ref Tag */}
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-600 dark:text-slate-300 bg-white/80 dark:bg-slate-900/70 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800 shadow-sm">
                    REF-0{pIdx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#6331FB] dark:group-hover:text-[#88F9C0] transition-colors mb-2 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mb-4">
                      {project.location} • {project.client}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Result Callout */}
                    <div className="p-3.5 rounded-xl bg-white dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 mb-6 shadow-sm">
                      <span className="text-[10px] font-mono text-[#6331FB] dark:text-[#88F9C0] tracking-wider uppercase block mb-1 font-bold">
                        MISSION RESULT:
                      </span>
                      <p className="text-xs text-slate-700 dark:text-slate-200 leading-relaxed font-mono">
                        {project.result}
                      </p>
                    </div>
                  </div>

                  {/* Tech stack & Inspect link */}
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technology.slice(0, 2).map((tech, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link 
                      to={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#6331FB] dark:text-[#88F9C0] hover:underline transition-colors"
                    >
                      <span>DETAILS</span>
                      <ElegantChevronRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 6: MISSION CONTROL DISPATCH (CTA)
          ========================================================================= */}
      <section className="py-28 sm:py-36 relative bg-slate-100 dark:bg-[#01010D] border-t border-slate-200 dark:border-slate-800/80 overflow-hidden transition-colors duration-300">
        {/* Electric Indigo Radial Core Spotlight */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] lg:w-[1200px] h-[450px] sm:h-[650px] rounded-full opacity-40 dark:opacity-65 blur-[160px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #6331FB 0%, rgba(99, 49, 251, 0.4) 40%, rgba(1, 1, 13, 0) 75%)'
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 text-center max-w-4xl">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono tracking-widest uppercase bg-white dark:bg-[#01010D]/80 border border-[#6331FB]/40 dark:border-[#6331FB]/60 shadow-md dark:shadow-[0_0_20px_rgba(99,49,251,0.35)] text-[#6331FB] dark:text-[#88F9C0] mb-8 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] animate-pulse" />
            <span>GET IN TOUCH WITH OUR TEAM</span>
          </div>

          <h2 className="flex flex-col items-center select-none mb-8">
            <span className="font-display text-slate-900 dark:text-white text-6xl sm:text-7xl md:text-8xl lg:text-[105px] xl:text-[120px] leading-[0.88] tracking-tight uppercase drop-shadow-sm dark:drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]">
              READY TO UPGRADE
            </span>
            <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-5xl sm:text-6xl md:text-7xl lg:text-[85px] xl:text-[98px] leading-[0.95] -mt-2 sm:-mt-4">
              your company network?
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team today. We provide free consultations, straightforward advice, and custom setups built around your business goals.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
            <Link to="/contact">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-bold text-sm bg-[#6331FB] text-white hover:bg-[#5225d9] shadow-lg shadow-[#6331FB]/30 dark:bg-[#88F9C0] dark:text-[#01010D] dark:hover:bg-[#a5ffd1] dark:shadow-[0_0_35px_rgba(136,249,192,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer">
                <span>REQUEST A FREE QUOTE</span>
                <ElegantArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Link>

            <Link to="/services">
              <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-[#6331FB] dark:text-white border border-[#6331FB] bg-white dark:bg-[#6331FB]/10 hover:bg-[#6331FB]/10 dark:hover:bg-[#6331FB]/20 hover:border-[#6331FB] transition-all duration-300 cursor-pointer shadow-sm">
                <span>EXPLORE SERVICES</span>
              </button>
            </Link>
          </div>

          {/* Real-time Ticker / Dispatch status */}
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#6331FB] dark:bg-[#88F9C0]" />
              <span>SUPPORT: READY 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#6331FB] font-bold">•</span>
              <span>FAST LOCAL RESPONSE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#6331FB] font-bold">•</span>
              <span>ADDIS ABABA, ETHIOPIA</span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

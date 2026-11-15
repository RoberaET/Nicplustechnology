import { PageTransition } from '../components/layout/PageTransition';
import { ContactForm } from '../components/ui/ContactForm';
import { 
  ElegantMapPinIcon, 
  ElegantPhoneIcon, 
  ElegantMailIcon, 
  ElegantClockIcon, 
  ElegantRadioIcon 
} from '../components/icons';

export function Contact() {
  return (
    <PageTransition>
      <div className="pt-28 sm:pt-36 pb-32 min-h-screen bg-slate-50 dark:bg-[#01010D] text-slate-900 dark:text-white selection:bg-[#6331FB] selection:text-white dark:selection:bg-[#88F9C0] dark:selection:text-[#01010D] relative overflow-hidden transition-colors duration-300">
        
        {/* Ambient Electric Indigo Spotlight */}
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
                INITIATE
              </span>
              <span className="font-editorial-serif italic font-normal text-[#6331FB] dark:text-[#88F9C0] text-5xl sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.95] -mt-2 sm:-mt-4">
                contact
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Connect directly with our network infrastructure and cybersecurity architects. We audit, engineer, deploy, and safeguard systems built for zero failure.
            </p>
          </div>

          {/* Main 2-Column Split: Form Terminal + Operations Cockpit */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <ContactForm isQuote={true} />
            </div>

            {/* Operations & NOC Telemetry Column */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* NOC Headquarters Panel */}
              <div className="rounded-3xl bg-white dark:bg-[#090918]/90 border border-slate-200 dark:border-slate-800/90 p-7 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                <span className="text-[10px] font-mono tracking-widest text-[#6331FB] uppercase block mb-1 font-bold">
                  COMMUNICATIONS DISPATCH
                </span>
                
                <h3 className="text-2xl font-display uppercase tracking-tight text-slate-900 dark:text-white mb-2">
                  ADDIS ABABA NOC ALPHA
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-6 leading-relaxed font-mono">
                  Active monitoring, onsite rapid SLA dispatch, and physical infrastructure staging.
                </p>

                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Phone */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5 shadow-sm">
                      <ElegantPhoneIcon size={16} />
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] block uppercase">DIRECT NOC LINE</span>
                      <div className="flex flex-wrap items-center gap-x-2">
                        <a href="tel:+251941552458" className="text-slate-900 dark:text-white font-bold hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">
                          +251 941552458
                        </a>
                        <span className="text-slate-400 dark:text-slate-600">/</span>
                        <a href="tel:+251936561899" className="text-slate-900 dark:text-white font-bold hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">
                          +251 936561899
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5 shadow-sm">
                      <ElegantMailIcon size={16} />
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] block uppercase">ENCRYPTED DISPATCH</span>
                      <a href="mailto:info@nictechnologies.et" className="text-slate-900 dark:text-white font-bold hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">
                        info@nictechnologies.et
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5 shadow-sm">
                      <ElegantMapPinIcon size={16} />
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] block uppercase">OPERATIONS BASE</span>
                      <span className="text-slate-700 dark:text-slate-200">
                        Addis Ababa, Ethiopia
                      </span>
                    </div>
                  </div>

                  {/* Hours & SLA */}
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800 flex items-start gap-3.5 group hover:border-[#6331FB] transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5 shadow-sm">
                      <ElegantClockIcon size={16} />
                    </div>
                    <div>
                      <span className="text-slate-400 dark:text-slate-500 text-[10px] block uppercase">SLA ESCORT HOURS</span>
                      <span className="text-slate-700 dark:text-slate-200">
                        24/7/365 On-Call Emergency SLA Dispatch
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Office: Mon - Fri: 8:00 AM - 5:00 PM
                      </span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Live Coordinates Radar Card */}
              <div className="p-6 rounded-3xl bg-white dark:bg-[#090918]/80 border border-slate-200 dark:border-slate-800 font-mono text-xs text-slate-600 dark:text-slate-400 space-y-3 shadow-sm">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-slate-900 dark:text-white font-bold flex items-center gap-2">
                    <ElegantRadioIcon size={16} className="text-[#6331FB] dark:text-[#88F9C0]" />
                    ADDIS ABABA GPS MESH
                  </span>
                  <span className="text-[#6331FB] dark:text-[#88F9C0] font-bold">9.0300° N, 38.7400° E</span>
                </div>
                
                <div className="flex justify-between text-[11px]">
                  <span>DISPATCH LATENCY:</span>
                  <span className="text-[#6331FB] dark:text-[#88F9C0] font-semibold">&lt; 15 MIN IN-REGION</span>
                </div>
                
                <div className="flex justify-between text-[11px]">
                  <span>TELEMETRY STATUS:</span>
                  <span className="text-slate-900 dark:text-white font-semibold">SYNCHRONIZED [NOMINAL]</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </PageTransition>
  );
}

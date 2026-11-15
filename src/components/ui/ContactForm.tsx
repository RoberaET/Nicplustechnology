import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { TechnicalCheckCircle, TelemetryTerminalIcon, ElegantArrowRight } from '../icons';
import { services } from '../../data/services';

interface ContactFormProps {
  isQuote?: boolean;
}

export function ContactForm({ isQuote = false }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="rounded-3xl bg-white dark:bg-[#090918]/90 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 text-center backdrop-blur-xl relative overflow-hidden shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full opacity-30 dark:opacity-40 blur-[80px] pointer-events-none"
          style={{ background: '#6331FB' }}
        />
        <div className="relative z-10">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-[#01010D] border border-[#6331FB] dark:border-[#88F9C0] flex items-center justify-center text-[#6331FB] dark:text-[#88F9C0] mx-auto mb-6 shadow-md dark:shadow-[0_0_25px_rgba(136,249,192,0.4)]">
            <TechnicalCheckCircle size={32} />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#6331FB]/10 text-[#6331FB] border border-[#6331FB]/30 dark:bg-[#88F9C0]/15 dark:text-[#88F9C0] dark:border-[#88F9C0]/40 mb-4">
            <span>DISPATCH TRANSMITTED • NOC ACKNOWLEDGED</span>
          </div>

          <h3 className="text-3xl font-display uppercase tracking-tight text-slate-900 dark:text-white mb-3">
            MISSION INTAKE LOGGED
          </h3>
          
          <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto mb-6 leading-relaxed">
            Your technical request has been routed directly to our Addis Ababa engineering queue. An infrastructure architect will review your parameters within our 15-minute response SLA.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#01010D] border border-slate-200 dark:border-slate-800/80 font-mono text-xs text-slate-600 dark:text-slate-400 max-w-xs mx-auto mb-8 space-y-1">
            <div className="flex justify-between">
              <span>DISPATCH REF:</span>
              <span className="text-[#6331FB] dark:text-[#88F9C0] font-bold">NIC-REQ-84920</span>
            </div>
            <div className="flex justify-between">
              <span>SECURITY MESH:</span>
              <span className="text-slate-900 dark:text-white">ENCRYPTED [AES-256]</span>
            </div>
          </div>

          <button 
            onClick={() => setStatus('idle')} 
            className="px-7 py-3 rounded-full text-xs font-mono font-bold tracking-wider uppercase border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-white hover:bg-[#6331FB] hover:border-[#6331FB] dark:hover:text-white dark:hover:border-[#6331FB] dark:hover:bg-[#6331FB]/10 transition-all cursor-pointer shadow-sm"
          >
            SUBMIT ANOTHER REQUEST
          </button>
        </div>
      </div>
    );
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="group relative rounded-3xl bg-white dark:bg-[#090918]/90 border border-slate-200 dark:border-slate-800/90 p-7 sm:p-10 shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300"
    >
      {/* Corner crosshair tech accents */}
      <span className="absolute top-3 left-3 text-[10px] font-mono text-slate-400 dark:text-slate-600">+</span>
      <span className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-600">+</span>
      <span className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-400 dark:text-slate-600">+</span>
      <span className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-400 dark:text-slate-600">+</span>

      {/* Terminal Header */}
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800/80 pb-4 mb-8">
        <div className="flex items-center gap-2.5">
          <TelemetryTerminalIcon size={16} className="text-[#6331FB] dark:text-[#88F9C0]" />
          <span className="text-xs font-mono font-bold tracking-widest text-slate-900 dark:text-white uppercase">
            {isQuote ? 'REQUEST A FREE QUOTE' : 'GET IN TOUCH'}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] font-mono text-[#6331FB] bg-[#6331FB]/10 dark:text-[#88F9C0] dark:bg-[#88F9C0]/10 px-2.5 py-0.5 rounded-full border border-[#6331FB]/20 dark:border-[#88F9C0]/30">
          <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] animate-pulse" />
          <span>ENCRYPTED INTAKE</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            FULL NAME <span className="text-[#6331FB] dark:text-[#88F9C0]">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            className="w-full bg-slate-50 dark:bg-[#01010D] border border-slate-300 dark:border-slate-800/90 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#6331FB] dark:focus:border-[#88F9C0] focus:ring-1 focus:ring-[#6331FB] dark:focus:ring-[#88F9C0] transition-colors font-mono"
            placeholder="e.g. Dawit Tadesse"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            ORGANIZATION / CLIENT
          </label>
          <input
            type="text"
            id="company"
            className="w-full bg-slate-50 dark:bg-[#01010D] border border-slate-300 dark:border-slate-800/90 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#6331FB] dark:focus:border-[#88F9C0] focus:ring-1 focus:ring-[#6331FB] dark:focus:ring-[#88F9C0] transition-colors font-mono"
            placeholder="e.g. Commercial Bank of Ethiopia"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            CORPORATE EMAIL <span className="text-[#6331FB] dark:text-[#88F9C0]">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full bg-slate-50 dark:bg-[#01010D] border border-slate-300 dark:border-slate-800/90 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#6331FB] dark:focus:border-[#88F9C0] focus:ring-1 focus:ring-[#6331FB] dark:focus:ring-[#88F9C0] transition-colors font-mono"
            placeholder="name@enterprise.et"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
            PHONE NUMBER
          </label>
          <input
            type="tel"
            id="phone"
            className="w-full bg-slate-50 dark:bg-[#01010D] border border-slate-300 dark:border-slate-800/90 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#6331FB] dark:focus:border-[#88F9C0] focus:ring-1 focus:ring-[#6331FB] dark:focus:ring-[#88F9C0] transition-colors font-mono"
            placeholder="+251 900 000 000"
          />
        </div>
      </div>

      <div className="mb-5">
        <label htmlFor="service" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          ARCHITECTURE DOMAIN <span className="text-[#6331FB] dark:text-[#88F9C0]">*</span>
        </label>
        <select
          id="service"
          required
          defaultValue=""
          className="w-full bg-slate-50 dark:bg-[#01010D] border border-slate-300 dark:border-slate-800/90 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-[#6331FB] dark:focus:border-[#88F9C0] focus:ring-1 focus:ring-[#6331FB] dark:focus:ring-[#88F9C0] transition-colors font-mono cursor-pointer"
        >
          <option value="" disabled className="bg-white dark:bg-[#01010D] text-slate-400">Select Architecture Scope</option>
          {services.map(s => (
            <option key={s.slug} value={s.slug} className="bg-white dark:bg-[#090918] text-slate-900 dark:text-white">
              {s.title} ({s.category})
            </option>
          ))}
          <option value="multi-site" className="bg-white dark:bg-[#090918] text-slate-900 dark:text-white">Multi-Site Turnkey Campus Deployment</option>
          <option value="security-cctv" className="bg-white dark:bg-[#090918] text-slate-900 dark:text-white">CCTV & Access Control Staging</option>
          <option value="other" className="bg-white dark:bg-[#090918] text-slate-900 dark:text-white">Comprehensive Infrastructure Audit</option>
        </select>
      </div>

      <div className="mb-7">
        <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
          PROJECT SCOPE & PARAMETERS <span className="text-[#6331FB] dark:text-[#88F9C0]">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className="w-full bg-slate-50 dark:bg-[#01010D] border border-slate-300 dark:border-slate-800/90 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-[#6331FB] dark:focus:border-[#88F9C0] focus:ring-1 focus:ring-[#6331FB] dark:focus:ring-[#88F9C0] transition-colors font-mono resize-none"
          placeholder="Describe physical scale, user capacity, uptime SLAs, or specific hardware/security constraints..."
        />
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-sm bg-[#6331FB] text-white hover:bg-[#5225d9] shadow-lg shadow-[#6331FB]/25 hover:shadow-xl dark:bg-[#88F9C0] dark:text-[#01010D] dark:hover:bg-[#a5ffd1] dark:shadow-[0_0_30px_rgba(136,249,192,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 cursor-pointer"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>TRANSMITTING TO NOC QUEUE...</span>
          </>
        ) : (
          <>
            <span>TRANSMIT PROPOSAL REQUEST</span>
            <ElegantArrowRight size={16} />
          </>
        )}
      </button>

      <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200 dark:border-slate-800/60">
        <span>RESPONSE SLA: &lt; 15 MIN</span>
        <span className="text-[#6331FB] dark:text-[#88F9C0] font-semibold">AES-256 DIRECT ENCRYPTION</span>
      </div>
    </form>
  );
}

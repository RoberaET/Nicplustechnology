import { Link } from 'react-router-dom';
import { ElegantMailIcon, ElegantPhoneIcon, ElegantMapPinIcon, ElegantArrowUpRight } from '../icons';
import { services } from '../../data/services';
import { solutions } from '../../data/solutions';

export function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-[#01010D] text-slate-600 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800/80 pt-20 pb-12 relative overflow-hidden transition-colors duration-300">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#6331FB]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <img src="/logo.png" alt="NIC+ TECHNOLOGIES" className="h-10 w-auto" />
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed max-w-sm">
              Technology infrastructure built for enterprises that cannot afford downtime. We design, deploy, secure, and support carrier-grade business networks.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 text-[#6331FB] dark:text-[#88F9C0] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6331FB] dark:bg-[#88F9C0] animate-pulse" />
              <span>NOC & ENGINEERING READY</span>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 dark:text-white font-mono font-bold mb-6 uppercase tracking-widest text-xs text-[#6331FB] dark:text-[#88F9C0]">
              INFRASTRUCTURE
            </h3>
            <ul className="flex flex-col gap-3 font-mono text-xs">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-[#6331FB] dark:hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{service.title}</span>
                    <ElegantArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#6331FB] dark:text-[#88F9C0] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column */}
          <div className="lg:col-span-2">
            <h3 className="text-slate-900 dark:text-white font-mono font-bold mb-6 uppercase tracking-widest text-xs text-[#6331FB] dark:text-[#88F9C0]">
              SOLUTIONS
            </h3>
            <ul className="flex flex-col gap-3 font-mono text-xs">
              {solutions.slice(0, 4).map((solution) => (
                <li key={solution.slug}>
                  <Link 
                    to={`/solutions/${solution.slug}`} 
                    className="text-slate-600 dark:text-slate-400 hover:text-[#6331FB] dark:hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{solution.title}</span>
                    <ElegantArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[#6331FB] dark:text-[#88F9C0] transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-slate-900 dark:text-white font-mono font-bold mb-6 uppercase tracking-widest text-xs text-[#6331FB] dark:text-[#88F9C0]">
              COMMUNICATIONS
            </h3>
            <ul className="flex flex-col gap-4 text-xs font-mono">
              <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                <ElegantMapPinIcon size={16} className="text-[#6331FB] dark:text-[#88F9C0] shrink-0 mt-0.5" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <ElegantPhoneIcon size={16} className="text-[#6331FB] dark:text-[#88F9C0] shrink-0" />
                <div className="flex flex-wrap items-center gap-x-2">
                  <a href="tel:+251941552458" className="hover:text-[#6331FB] dark:hover:text-white transition-colors">+251 941552458</a>
                  <span className="text-slate-400 dark:text-slate-600">/</span>
                  <a href="tel:+251936561899" className="hover:text-[#6331FB] dark:hover:text-white transition-colors">+251 936561899</a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                <ElegantMailIcon size={16} className="text-[#6331FB] dark:text-[#88F9C0] shrink-0" />
                <a href="mailto:info@nictechnologies.et" className="hover:text-[#6331FB] dark:hover:text-white transition-colors">info@nictechnologies.et</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-slate-200 dark:border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>
            © {new Date().getFullYear()} NIC+ TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy" className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">TERMS OF SERVICE</Link>
            <Link to="/cookies" className="hover:text-[#6331FB] dark:hover:text-[#88F9C0] transition-colors">COOKIE POLICY</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity } from 'lucide-react';
import { ElegantMoonIcon, ElegantSunIcon } from '../icons';
import { Button } from '../ui/Button';
import { cn } from '../../lib/utils';
import { services } from '../../data/services';
import { useTheme } from '../../contexts/ThemeContext';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Insights', path: '/insights' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/95 dark:bg-[#01010D]/95 backdrop-blur-md border-slate-200 dark:border-slate-800/80 shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-3.5'
          : 'bg-white/95 dark:bg-[#01010D]/90 backdrop-blur-md border-slate-200 dark:border-slate-800/50 py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Activity className="h-8 w-8 text-[#6331FB] dark:text-[#88F9C0] group-hover:animate-pulse" />
            <span className="text-xl font-bold tracking-wider text-slate-900 dark:text-white">NIC+ TECHNOLOGIES</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-slate-600 hover:text-[#6331FB] dark:text-slate-300 dark:hover:text-[#88F9C0] transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              {/* Clickable label → navigates to /services hub */}
              <Link
                to="/services"
                className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-[#6331FB] dark:text-slate-300 dark:hover:text-[#88F9C0] transition-colors py-2"
              >
                Services <ChevronDown className="h-4 w-4" />
              </Link>
              
              {/* Mega-menu dropdown */}
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-white dark:bg-[#090918] border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.9)] p-6 transition-all duration-200 grid grid-cols-2 gap-x-8 gap-y-4 backdrop-blur-xl',
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                )}
              >
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Infrastructure</h3>
                  <div className="flex flex-col gap-1">
                    {services.filter(s => s.category === 'Infrastructure').map(s => {
                      const I = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#6331FB] dark:text-slate-200 dark:hover:text-[#88F9C0] py-1.5 group/item transition-colors"
                        >
                          <I className="h-4 w-4 text-[#6331FB]/70 dark:text-[#88F9C0]/70 group-hover/item:text-[#6331FB] dark:group-hover/item:text-[#88F9C0] shrink-0" />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">Security</h3>
                  <div className="flex flex-col gap-1">
                    {services.filter(s => s.category === 'Security').map(s => {
                      const I = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#6331FB] dark:text-slate-200 dark:hover:text-[#88F9C0] py-1.5 group/item transition-colors"
                        >
                          <I className="h-4 w-4 text-[#6331FB]/70 dark:text-[#88F9C0]/70 group-hover/item:text-[#6331FB] dark:group-hover/item:text-[#88F9C0] shrink-0" />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="col-span-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <h3 className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">IT & Digital</h3>
                  <div className="flex gap-6">
                    {services.filter(s => s.category === 'IT & Digital').map(s => {
                      const I = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 text-sm text-slate-700 hover:text-[#6331FB] dark:text-slate-200 dark:hover:text-[#88F9C0] py-1 group/item transition-colors"
                        >
                          <I className="h-4 w-4 text-[#6331FB]/70 dark:text-[#88F9C0]/70 group-hover/item:text-[#6331FB] dark:group-hover/item:text-[#88F9C0] shrink-0" />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* Footer link */}
                <div className="col-span-2 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
                  <Link
                    to="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="text-xs font-semibold text-[#6331FB] dark:text-[#88F9C0] hover:underline"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            </div>

            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium text-slate-600 hover:text-[#6331FB] dark:text-slate-300 dark:hover:text-[#88F9C0] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 hover:text-[#6331FB] hover:bg-slate-100 dark:text-slate-400 dark:hover:text-[#88F9C0] dark:hover:bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <ElegantSunIcon size={20} /> : <ElegantMoonIcon size={20} />}
            </button>
            <Link to="/contact">
              <Button>Request a Quote</Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-slate-600 hover:text-[#6331FB] hover:bg-slate-100 dark:text-slate-400 dark:hover:text-[#88F9C0] dark:hover:bg-slate-900 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <ElegantSunIcon size={20} /> : <ElegantMoonIcon size={20} />}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="text-slate-900 dark:text-white p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-[#01010D] border-b border-slate-200 dark:border-slate-800 shadow-xl h-screen overflow-y-auto">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-slate-900 dark:text-white border-b border-slate-100 dark:border-slate-800 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="py-2">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Services</h3>
              <div className="flex flex-col gap-3 pl-4 border-l border-slate-200 dark:border-slate-800">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/${s.slug}`} className="text-slate-700 dark:text-slate-200">
                    {s.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="pt-6">
              <Link to="/contact" className="block w-full">
                <Button className="w-full">Request a Quote</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

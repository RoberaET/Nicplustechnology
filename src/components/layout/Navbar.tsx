import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Activity, Moon, Sun } from 'lucide-react';
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
          ? 'bg-surface/95 backdrop-blur-md border-border shadow-sm py-4'
          : 'bg-surface/80 backdrop-blur-sm border-border py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Activity className="h-8 w-8 text-primary group-hover:animate-pulse" />
            <span className="text-xl font-bold tracking-wider text-text-main">NIC+ TECHNOLOGIES</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-text-muted hover:text-primary transition-colors">
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
                className="flex items-center gap-1 text-sm font-medium text-text-muted hover:text-primary transition-colors py-2"
              >
                Services <ChevronDown className="h-4 w-4" />
              </Link>
              
              {/* Mega-menu dropdown */}
              <div
                className={cn(
                  'absolute top-full left-1/2 -translate-x-1/2 w-[620px] bg-surface border border-border rounded-xl shadow-2xl p-6 transition-all duration-200 grid grid-cols-2 gap-x-8 gap-y-4',
                  isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'
                )}
              >
                <div>
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Infrastructure</h3>
                  <div className="flex flex-col gap-1">
                    {services.filter(s => s.category === 'Infrastructure').map(s => {
                      const I = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 text-sm text-text-main hover:text-primary py-1.5 group/item"
                        >
                          <I className="h-4 w-4 text-primary/60 group-hover/item:text-primary shrink-0" />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Security</h3>
                  <div className="flex flex-col gap-1">
                    {services.filter(s => s.category === 'Security').map(s => {
                      const I = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 text-sm text-text-main hover:text-primary py-1.5 group/item"
                        >
                          <I className="h-4 w-4 text-primary/60 group-hover/item:text-primary shrink-0" />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="col-span-2 pt-4 border-t border-border">
                  <h3 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">IT & Digital</h3>
                  <div className="flex gap-6">
                    {services.filter(s => s.category === 'IT & Digital').map(s => {
                      const I = s.icon;
                      return (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          onClick={() => setIsServicesOpen(false)}
                          className="flex items-center gap-2 text-sm text-text-main hover:text-primary py-1 group/item"
                        >
                          <I className="h-4 w-4 text-primary/60 group-hover/item:text-primary shrink-0" />
                          {s.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                {/* Footer link */}
                <div className="col-span-2 pt-4 border-t border-border flex justify-end">
                  <Link
                    to="/services"
                    onClick={() => setIsServicesOpen(false)}
                    className="text-xs font-semibold text-primary hover:underline"
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
                className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted hover:bg-surfaceHover hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link to="/contact">
              <Button>Request a Quote</Button>
            </Link>
          </div>

          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-text-muted hover:bg-surfaceHover hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            {/* Mobile Menu Toggle */}
            <button
              className="text-text-main p-2 rounded-md hover:bg-surfaceHover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-surface border-b border-border shadow-xl h-screen overflow-y-auto">
          <div className="flex flex-col px-4 py-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-text-main border-b border-border pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="py-2">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">Services</h3>
              <div className="flex flex-col gap-3 pl-4 border-l border-border">
                {services.map(s => (
                  <Link key={s.slug} to={`/services/\${s.slug}`} className="text-text-main">
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

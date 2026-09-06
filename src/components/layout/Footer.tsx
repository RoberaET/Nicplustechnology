import { Link } from 'react-router-dom';
import { Activity, Mail, Phone, MapPin } from 'lucide-react';
import { services } from '../../data/services';
import { solutions } from '../../data/solutions';

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <Activity className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold tracking-wider text-text-main">NIC+ TECHNOLOGIES</span>
            </Link>
            <p className="text-text-muted text-sm mb-6 leading-relaxed">
              Technology infrastructure built for businesses that cannot afford downtime. We design, deploy, secure, and support modern business networks.
            </p>
          </div>

          <div>
            <h3 className="text-text-main font-semibold mb-6 uppercase tracking-wider text-sm">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/\${service.slug}`} className="text-sm text-text-muted hover:text-primary transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-main font-semibold mb-6 uppercase tracking-wider text-sm">Solutions</h3>
            <ul className="flex flex-col gap-3">
              {solutions.slice(0, 4).map((solution) => (
                <li key={solution.slug}>
                  <Link to={`/solutions/\${solution.slug}`} className="text-sm text-text-muted hover:text-primary transition-colors">
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-text-main font-semibold mb-6 uppercase tracking-wider text-sm">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-text-muted">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+251 941552458</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-text-muted">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@nictechnologies.et</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} NIC+ TECHNOLOGIES. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm justify-center md:justify-end mt-4 md:mt-0">
            <Link to="/privacy" className="text-text-muted hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Privacy Policy</Link>
            <Link to="/terms" className="text-text-muted hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Terms of Service</Link>
            <Link to="/cookies" className="text-text-muted hover:text-text-main transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

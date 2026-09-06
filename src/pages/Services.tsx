import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { services } from '../data/services';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import SpotlightCard from '../components/ui/SpotlightCard';
import { cn } from '../lib/utils';

const categories = ['All', 'Infrastructure', 'Security', 'IT & Digital'];

const categoryDescriptions: Record<string, string> = {
  All: 'Full-spectrum technology infrastructure, security and digital services.',
  Infrastructure: 'Network design, deployment, wireless and structured cabling.',
  Security: 'CCTV surveillance, access control and cybersecurity solutions.',
  'IT & Digital': 'IT support and website development.',
};

export function Services() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,132,199,0.07)_0%,transparent_60%)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <Badge variant="primary" className="mb-6">
              What We Do
            </Badge>
            <h1 className="text-5xl md:text-6xl font-extrabold text-text-main tracking-tight leading-tight mb-6">
              Technology Services<br />
              <span className="text-primary">Built for Business</span>
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10 max-w-2xl">
              From network infrastructure and cybersecurity to CCTV and IT support — we design, deploy and maintain the technology that keeps your business running.
            </p>
            <Link to="/contact">
              <Button size="lg">Request a Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTER ── */}
      <section className="sticky top-[72px] z-40 bg-surface/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border',
                  activeCategory === cat
                    ? 'bg-primary text-white border-primary shadow-sm'
                    : 'bg-transparent text-text-muted border-transparent hover:border-border hover:text-text-main'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE GRID ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <p className="text-text-muted mb-12 text-base">
            {categoryDescriptions[activeCategory]}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filtered.map(service => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group block"
                >
                  <SpotlightCard className="flex flex-col bg-surface border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg h-full" spotlightColor="rgba(2, 132, 199, 0.6)">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden z-10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 bg-white/90 text-xs font-semibold text-text-main rounded-full">
                        {service.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-primary p-2.5 rounded-xl shadow-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-6 z-10 relative">
                    <h3 className="text-xl font-bold text-text-main mb-2">{service.title}</h3>
                    <p className="text-sm text-primary font-medium italic mb-3">{service.tagline}</p>
                    <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Feature chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((f, i) => (
                        <span key={i} className="px-2 py-1 bg-background text-text-muted text-xs rounded border border-border">
                          {f}
                        </span>
                      ))}
                      {service.features.length > 3 && (
                        <span className="px-2 py-1 bg-background text-primary text-xs rounded border border-primary/30">
                          +{service.features.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center text-sm font-semibold text-primary group-hover:gap-3 gap-2 transition-all">
                      Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                  </SpotlightCard>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Talk to our engineering team. We'll assess your environment and recommend the right solution.
          </p>
          <Link to="/contact">
            <Button variant="secondary" size="lg">
              Request a Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* ── WHY NIC+ ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <Badge variant="primary" className="mb-4">
              Why NIC+
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-4">
              Engineering-first. Business-focused.
            </h2>
            <p className="text-text-muted text-lg">
              Every engagement starts with understanding your real requirements — not fitting you into a standard package.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tailored Designs', desc: 'Solutions architected for your specific environment, not a generic template.' },
              { title: 'End-to-End Delivery', desc: 'Assessment, design, deployment, security and ongoing support under one roof.' },
              { title: 'Security by Default', desc: 'Every infrastructure project has security built in from the ground up.' },
              { title: 'Reliable Partners', desc: 'We stay engaged after delivery — not just during the sales process.' },
            ].map((item, i) => (
              <div key={i} className="bg-surface border border-border rounded-xl p-6">
                <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold text-text-main mb-2">{item.title}</h4>
                <p className="text-sm text-text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

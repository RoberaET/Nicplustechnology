import { useParams, Link, Navigate } from 'react-router-dom';
import { PageTransition } from '../components/layout/PageTransition';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowLeft, ArrowRight, Phone, Mail } from 'lucide-react';
import { services } from '../data/services';

export function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);
  const serviceIndex = services.findIndex(s => s.slug === slug);
  const prevService = serviceIndex > 0 ? services[serviceIndex - 1] : null;
  const nextService = serviceIndex < services.length - 1 ? services[serviceIndex + 1] : null;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  const Icon = service.icon;

  return (
    <PageTransition>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="relative h-72 md:h-96 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 md:px-8 pb-10">
              <Link to="/services" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" /> All Services
              </Link>
              <div className="flex items-center gap-4">
                <div className="bg-primary p-3 rounded-xl shadow-lg">
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-1">{service.category}</p>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                    {service.title}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-background">
        <div className="container mx-auto px-4 md:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* ── MAIN CONTENT ── */}
            <div className="lg:col-span-2 space-y-16">

              {/* Tagline + Overview */}
              <div>
                <p className="text-xl font-semibold text-primary italic mb-4">{service.tagline}</p>
                <p className="text-lg text-text-muted leading-relaxed">
                  {service.longDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-6">Key Capabilities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 bg-surface border border-border rounded-lg px-4 py-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-text-main text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-6">Business Benefits</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="bg-surface border border-border rounded-xl p-6">
                      <h4 className="font-bold text-text-main mb-2">{benefit.title}</h4>
                      <p className="text-sm text-text-muted leading-relaxed">{benefit.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Use Cases */}
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-6">Common Use Cases</h2>
                <ul className="space-y-3">
                  {service.useCases.map((uc, i) => (
                    <li key={i} className="flex items-center gap-3 text-text-muted">
                      <span className="w-2 h-2 bg-primary rounded-full shrink-0" />
                      {uc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Our Process */}
              <div>
                <h2 className="text-2xl font-bold text-text-main mb-8">Our Delivery Process</h2>
                <div className="relative">
                  <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-border" />
                  <div className="space-y-8">
                    {service.process.map((p, i) => (
                      <div key={i} className="flex items-start gap-6">
                        <div className="relative z-10 flex-shrink-0 w-10 h-10 bg-surface border-2 border-primary rounded-full flex items-center justify-center text-sm font-bold text-primary">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div className="pt-1.5">
                          <h4 className="font-bold text-text-main mb-1">{p.step}</h4>
                          <p className="text-sm text-text-muted">{p.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Prev / Next navigation */}
              <div className="flex justify-between pt-8 border-t border-border">
                {prevService ? (
                  <Link to={`/services/${prevService.slug}`} className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                    <ArrowLeft className="h-4 w-4" /> {prevService.title}
                  </Link>
                ) : <div />}
                {nextService ? (
                  <Link to={`/services/${nextService.slug}`} className="flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
                    {nextService.title} <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : <div />}
              </div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="lg:col-span-1 space-y-6">

              {/* CTA Card */}
              <div className="bg-primary rounded-2xl p-8 text-white sticky top-28">
                <h3 className="text-xl font-bold mb-3">Ready to get started?</h3>
                <p className="text-white/80 text-sm mb-6">
                  Get a professional assessment and tailored proposal for your {service.title.toLowerCase()} needs.
                </p>
                <Link to="/contact">
                  <Button variant="secondary" className="w-full mb-3">Request a Quote</Button>
                </Link>
                <div className="border-t border-white/20 pt-6 space-y-3 mt-2">
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Phone className="h-4 w-4 shrink-0" />
                    <span>+251 941552458</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/80">
                    <Mail className="h-4 w-4 shrink-0" />
                    <span>info@nictechnologies.et</span>
                  </div>
                </div>
              </div>

              {/* Other Services */}
              <div className="bg-surface border border-border rounded-2xl p-6">
                <h4 className="text-sm font-semibold text-text-main uppercase tracking-wider mb-4">Other Services</h4>
                <ul className="space-y-2">
                  {services
                    .filter(s => s.slug !== service.slug)
                    .slice(0, 6)
                    .map(s => {
                      const S = s.icon;
                      return (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-background transition-colors group"
                          >
                            <S className="h-4 w-4 text-primary shrink-0" />
                            <span className="text-sm text-text-muted group-hover:text-text-main transition-colors">{s.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}

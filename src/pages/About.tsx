import { PageTransition } from '../components/layout/PageTransition';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Network, Shield, Server, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';

export function About() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 min-h-screen bg-background flex flex-col gap-24">
        {/* WHO WE ARE */}
        <section className="container mx-auto px-4 md:px-8">
          <SectionHeader 
            title="Who We Are"
            subtitle="NIC+ Technologies is a premier IT infrastructure and security engineering firm."
            badge="ABOUT US"
            centered
          />
          <div className="mt-12 max-w-4xl mx-auto text-lg text-text-muted leading-relaxed text-center">
            <p className="mb-6">
              We design, deploy, secure, and support modern business networks. Our focus is on building resilient technology infrastructure for organizations that cannot afford downtime.
            </p>
            <p>
              From structured cabling and core routing to advanced cybersecurity and IP surveillance, we provide end-to-end technical solutions tailored to real business requirements.
            </p>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="bg-surface border-y border-border py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-tech-gradient opacity-10 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <SectionHeader 
              title="Our Approach"
              badge="METHODOLOGY"
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-background border border-border p-8 rounded-xl">
                <Network className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-text-main mb-4">Engineering-Focused</h3>
                <p className="text-text-muted">
                  We don't sell generic packages. Every solution is architected around your specific infrastructure requirements, traffic patterns, and physical environment.
                </p>
              </div>
              <div className="bg-background border border-border p-8 rounded-xl">
                <Shield className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-text-main mb-4">Security by Design</h3>
                <p className="text-text-muted">
                  Security is not an afterthought. It is integrated into every layer of our network designs, from access control to firewall policies.
                </p>
              </div>
              <div className="bg-background border border-border p-8 rounded-xl">
                <Server className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold text-text-main mb-4">Operational Continuity</h3>
                <p className="text-text-muted">
                  We build systems designed for stability and maintainability. Our goal is to ensure your business operations remain uninterrupted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                title="Our Capabilities"
                badge="EXPERTISE"
              />
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Our team holds expertise across the entire spectrum of IT infrastructure and security.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {services.map((service, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-text-main font-medium">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl border border-border overflow-hidden shadow-xl">
                <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="NIC+ Expertise" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY ECOSYSTEM */}
        <section className="bg-surface border-y border-border py-24">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <SectionHeader 
              title="Technology Ecosystem"
              badge="PLATFORMS"
              centered
            />
            <p className="text-text-muted max-w-2xl mx-auto mb-16">
              We work with industry-leading hardware and software platforms to deliver robust solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70">
              {['Cisco', 'Ubiquiti', 'Hikvision', 'Sophos', 'ZKTeco', 'MikroTik'].map((tech, i) => (
                <div key={i} className="text-2xl md:text-4xl font-extrabold text-text-main tracking-widest uppercase">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
